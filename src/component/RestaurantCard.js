import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4> {avgRating} </h4>
      <h4>₹ {costForTwo} FOR TWO</h4>
      <h4> {sla?.slaString} </h4>
    </div>
  );
};

export default RestaurantCard;
