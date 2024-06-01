import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const ResraurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    // console.log(listOfRestaurent); // Verify state update here
    // setFilteredRestaurants(listOfRestaurent); // Initialize filtered list here
    fetchData();
  }, [listOfRestaurent]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    // console.log(json.data);
    setListOfRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurent.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Please check your internet connection </h1>;

  if (listOfRestaurent == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="fitler flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length > 0
          ? filteredRestaurants.map((restaurent, index) => (
              <Link to={"/restaurants/" + restaurent.info.id}>
                {" "}
                <RestaurantCard key={index} resData={restaurent.info} />
              </Link>
            ))
          : listOfRestaurent.map((restaurent) => (
              <Link to={"/restaurants/" + restaurent.info.id}>
                <RestaurantCard
                  key={restaurent.info.id}
                  resData={restaurent.info}
                />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
