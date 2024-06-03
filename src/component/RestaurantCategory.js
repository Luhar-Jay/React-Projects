import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };
  // console.log(data);
  return (
    <div className="w-6/12 m-auto bg-gray-50  p-4 my-4 shadow-lg rounded-md">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordion */}
      {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestaurantCategory;
