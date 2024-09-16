import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Catgory from "./Catgory";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Search from "./Search";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [slide, setSlide] = useState(0);

  const ResraurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    // console.log(listOfRestaurent); // Verify state update here
    // setFilteredRestaurants(listOfRestaurent); // Initialize filtered list here
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json.data);
    setListOfRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Please check your internet connection </h1>;

  const { loggedInuser, setUserName } = useContext(UserContext);

  const nextSlide = () => {
    console.log(listOfRestaurent.length);

    if (listOfRestaurent.length - 4 == slide) return false;
    setSlide(slide + 2);
  };
  const prevSlide = () => {
    console.log(listOfRestaurent.length);

    // if (slide.length + 4 === slide) {
    //   return false;
    // }
    setSlide(slide - 3);
  };

  return (
    <div className="body max-w-[1200px] mx-auto justify-center">
      {listOfRestaurent.length === 0 ? (
        <Shimmer /> // Show shimmer effect while data is loading
      ) : (
        <div>
          <Catgory />
          <div className="fitler flex">
            <div className="search m-4 p-4"></div>

            {/* <div className="search m-4 p-4 flex items-center">
          <label>User Name : </label>
          <input
            type="text"
            className="border border-black p-1"
            value={loggedInuser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <h1 className="text-xl font-bold">
                Top restaurant chains in Ahmedabad
              </h1>
            </div>
            <div className="flex gap-2">
              <div
                className="bg-slate-400 rounded-full flex justify-center w-7 items-center mx-auto text-center h-7"
                onClick={prevSlide}
              >
                <FaArrowLeft />
              </div>
              <div
                className="bg-slate-400 rounded-full flex justify-center w-7 items-center mx-auto text-center"
                onClick={nextSlide}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="flex overflow-x-hidden border-b-2 border-b-gray-500 my-10">
            {filteredRestaurants.length > 0
              ? filteredRestaurants.map((restaurent, index) => (
                  <Link
                    to={"/restaurants/" + restaurent.info.id}
                    key={restaurent.info.id}
                  >
                    {" "}
                    <RestaurantCard key={index} resData={restaurent.info} />
                  </Link>
                ))
              : listOfRestaurent.map((restaurent) => (
                  <div
                    style={{ transform: `translateX(-${slide * 100}% )` }}
                    className="duration-1000"
                  >
                    <Link
                      to={"/restaurants/" + restaurent.info.id}
                      key={restaurent.info.id}
                    >
                      <div>
                        <RestaurantCard
                          key={restaurent.info.id}
                          resData={restaurent.info}
                        />
                      </div>
                    </Link>
                  </div>
                ))}
          </div>

          <div>
            <h1 className="font-bold text-xl my-4">
              Restaurants with online food delivery in Ahmedabad
            </h1>
          </div>
          <div className="flex flex-wrap">
            {filteredRestaurants.length > 0
              ? filteredRestaurants.map((restaurent, index) => (
                  <Link
                    to={"/restaurants/" + restaurent.info.id}
                    key={restaurent.info.id}
                  >
                    {" "}
                    <RestaurantCard key={index} resData={restaurent.info} />
                  </Link>
                ))
              : listOfRestaurent.map((restaurent) => (
                  <div className="duration-1000">
                    <Link
                      to={"/restaurants/" + restaurent.info.id}
                      key={restaurent.info.id}
                    >
                      <div>
                        <RestaurantCard
                          key={restaurent.info.id}
                          resData={restaurent.info}
                        />
                      </div>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
