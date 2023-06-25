import { useEffect, useContext } from "react";
import { CartContext } from "../App";

import PurchaseItems from "../Components/Purchase/PurchaseItems";
const Purchase = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  let test2 = [];
  useEffect(() => {
    cartItems.map((el) => el.map((e) => test2.push(e)));
  }, [cartItems]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="mt-5 justify-center items-center max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 w-full">
        <button>{test2}</button>
        <PurchaseItems data={test2} />
        {/* <p>{test1.name}</p> */}
      </div>
    </div>
  );
};

export default Purchase;
