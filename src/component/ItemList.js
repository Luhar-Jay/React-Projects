import { useState } from "react";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [itemQuantities, setItemQuantities] = useState({});

  const handleAddItem = (item) => {
    if (addItem) {
      dispatch(addItem(item));
      confirm("Add one item");
    }

    setItemQuantities((prevQuantity) => ({
      ...prevQuantity,
      [item.card.info.id]: (prevQuantity[item.card.info.id] || 0) + 1,
    }));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    setItemQuantities((prevQuantity) => ({
      ...prevQuantity,
      [item.card.info.id]: Math.max(0, prevQuantity[item.card.info.id] - 1),
    }));
    if (dispatch) {
      confirm("Remove one item");
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 flex flex-col">
              <span className="font-bold">{item.card.info.name} </span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute bg-black">
              {cartItems.includes(item) ? (
                <div className="flex mx-4">
                  <button
                    className="px-2 py-1 rounded-lg mx-1 bg-black text-white "
                    onClick={() => handleRemoveItem(item)}
                  >
                    -
                  </button>
                  <span className="px-2 py-1 bg-black text-white">
                    {itemQuantities[item.card.info.id] || 0}
                  </span>
                  <button
                    className="px-2 py-1 rounded-lg mx-1 bg-black text-white "
                    onClick={() => handleAddItem(item)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="px-2 py-1 rounded-lg mx-12 bg-black text-white "
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              )}
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
