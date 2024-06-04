import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearItem}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-medium">
            Your cart item is empty. Add items to the cart!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
