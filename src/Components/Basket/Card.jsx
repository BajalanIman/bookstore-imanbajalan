import { useState, useContext } from "react";

import { CartContext } from "../../App";
import AddButton from "./AddButton";
import MinusButton from "./MinusButton";
import TrashButton from "./TrashButton";

const Card = ({ bookData }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [increasePrice, setIncreasePrice] = useState(1);
  const AddBookNumberHandler = () => {
    setIncreasePrice(increasePrice + 1);
  };

  const decreaseBookNumberHandler = () => {
    setIncreasePrice(increasePrice - 1);
  };

  const removeBookHandler = () => {
    setCartItems(
      cartItems.map((items) => items.filter((item) => item.id !== bookData.id))
    );
  };

  return (
    <div className="flex justify-center mb-4 ">
      <div className="w-11/12 sm:h-44 h-24 border border-gray-500 dark:border-white rounded-xl flex shadow-lg">
        <div className="w-2/3 flex items-center">
          <div className="sm:max-h-44 sm:max-w-32 max-h-24 max-w-16 p-2 flex justify-center rounded-xl">
            <img
              src={bookData.image}
              alt="image"
              className="rounded sm:max-w-44 sm:max-h-36 max-h-24"
            />
          </div>
          <div className="w-1/2 pl-3 flex flex-col justify-center dark:text-white h-24 sm:h-full">
            <p className="font-bold font-serif sm:text-xl text-xs pb-0 mb-0">
              {bookData.name}
            </p>
            <p className="sm:text-sm text-[10px] font-serif sm:mb-6 mt-0 text-gray-500 h-4 flex  items-center mb-2">
              {bookData.author}
            </p>
            <p className=" font-serif font-bold text-amber-700 sm:text-lg text-xs ">
              {bookData.price}
              <span> €</span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center sm:gap-3 gap-2 py-3">
          <button className="" onClick={AddBookNumberHandler}>
            <AddButton />
          </button>
          <p className="border w-7 h-7 rounded-full flex justify-center items-center border-blue-500 text-sm font-bold">
            {increasePrice}
          </p>
          {increasePrice > 1 && (
            <button onClick={decreaseBookNumberHandler}>
              <MinusButton />
            </button>
          )}
          {increasePrice <= 1 && (
            <button onClick={removeBookHandler}>
              <TrashButton />
            </button>
          )}
        </div>
        <div className=" w-1/3 flex justify-end items-center pr-4">
          <p className=" font-serif font-bold text-amber-700 sm:text-xl  text-lg ">
            {(bookData.price * increasePrice).toFixed(2)}
          </p>
          <span className="font-serif font-bold text-amber-700 sm:text-lg text-xs pl-1">
            €
          </span>
        </div>
      </div>
    </div>
  );
};
export default Card;
