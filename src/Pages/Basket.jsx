import { Link } from "react-router-dom";

import React, { useEffect, useContext, useState } from "react";
import Card from "../Components/Basket/Card";
import { CartContext } from "../App";

const Basket = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  const [showEmptyMessaga, setShowEmptyMessaga] = useState();

  // const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    if (Array.isArray(cartItems) && !cartItems.length) {
      setShowEmptyMessaga(true);
    } else {
      setShowEmptyMessaga(false);
    }
  }, [cartItems]);

  return (
    <div className=" flex flex-col ">
      {totalPrice === 0 && (
        <div className="flex flex-col  items-center font-bold font-serif sm:w-full h-screen p-5">
          <h1 className=" mb-2 w-full flex justify-center items-center">
            Your Basket is empty!
          </h1>
          <Link
            to="/"
            className=" pt-3 text-blue-500 w-full flex justify-center items-center"
          >
            Click to back home
          </Link>
        </div>
      )}
      {!showEmptyMessaga && (
        <h1 className="font-mono font-bold sm:mt-6 m-2 sm:ml-24">
          Your Basket
        </h1>
      )}
      {cartItems.map((item) =>
        item.map((el) => <Card key={el.id} bookData={el} />)
      )}

      <p className="w-11/12 flex justify-end items-end text-xl font-bold font-serif pr-2">
        Total Price: {totalPrice.toFixed(2)}
      </p>

      <div className="w-full flex justify-center items-center mt-5">
        <button className="px-4 py-2 font-serif font-bold border border-black rounded-md hover:bg-cyan-700 bg-cyan-800 cursor-pointer ">
          <Link to="/purchase">Purchase</Link>
        </button>
      </div>
    </div>
  );
};
export default Basket;
