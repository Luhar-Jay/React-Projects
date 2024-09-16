import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import modak from "../Images/Modak.png";
import { CDN_URL } from "../utils/constants";

const Catgory = () => {
  const [category, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    FetchCategory();
  }, []);

  const FetchCategory = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      // console.log("category", json.data.cards[0].card.card);
      console.log("image", json.data.cards[0].card.card.imageGridCards.info);
      setCategory(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    } catch (error) {
      console.log("fetch data", error);
    }
  };

  const nextSlide = () => {
    // console.log(category.length - );

    if (category.length - 5 == slide) return false;
    setSlide(slide + 3);
  };
  const prevSlide = () => {
    console.log(category.length);

    // if (slide.length + 4 === slide) {
    //   return false;
    // }
    setSlide(slide - 3);
  };

  return (
    <div className=" my-4">
      <div className="flex justify-between ">
        <h1 className="text-xl font-bold">What's Your Mind</h1>
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
      <div className="flex border-b-2  overflow-x-hidden">
        {category.map((info) => (
          <>
            <div
              className="m-2  justify-between duration-1000 "
              style={{ transform: `translateX(-${slide * 100}% )` }}
            >
              <div className="duration-500 w-[160px]">
                <img src={CDN_URL + info.imageId} alt="" className="h-36" />
                {/* <h3 className="  mx-4 w-full p-2 ">{info?.description}</h3> */}
              </div>
            </div>
          </>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Catgory;
