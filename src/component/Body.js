import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Simmer from "./Simmer";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  console.log("Body render");

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurent.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };



  return (
    <div className="body">
      <div className="fitler">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
            <button onClick={handleSearch}>Search</button>
        </div>
        <button
          className="fitler-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.length > 0
          ? filteredRestaurants.map((restaurent, index) => (
              <RestaurantCard key={index} resData={restaurent.data} />
            ))
          : listOfRestaurent.map((restaurent, index) => (
              <RestaurantCard key={index} resData={restaurent.data} />
            ))}
      </div>
    </div>
  );
};

export default Body;
