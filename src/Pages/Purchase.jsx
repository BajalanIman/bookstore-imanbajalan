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
    <div className="w-full h-screen flex justify-center">
      <button>{test2}</button>
      <PurchaseItems data={test2} />
      {/* <p>{test1.name}</p> */}
    </div>
  );
};

export default Purchase;
