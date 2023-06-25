import { Link } from "react-router-dom";

import React, { useEffect, useContext, useState } from "react";

import Card from "../Components/WishLListBooks/Card";
import InfoButton from "../Components/WishLListBooks/InfoButton";
import { CartContext } from "../App";

const WishLListBooks = () => {
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

  const message = "You cannot add your books from here!";
  const [errorMassage, setErrorMassage] = useState(false);

  return (
    <div className=" flex flex-col relative">
      {errorMassage && <InfoButton message={message} />}
      {cartItems.length === 0 && (
        <div className="flex flex-col  items-center font-bold font-serif sm:w-full h-screen p-5">
          <h1 className=" mb-2 w-full flex justify-center items-center">
            Your wishlist is empty!
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
        <h1 className=" font-bold font-serif sm:mt-6 m-2 sm:ml-24 w-full flex justify-center items-center mt-10">
          Wishlist
        </h1>
      )}
      <div className="flex justify-center items-center mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 justify-center items-center">
          {cartItems.map((item) =>
            item.map((el) => (
              <Card
                key={el.id}
                bookData={el}
                setErrorMassage={setErrorMassage}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default WishLListBooks;
