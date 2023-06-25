import { useState, useContext } from "react";

import { CartContext } from "../../App";
import AddButton from "../Basket/AddButton";
import MinusButton from "../Basket/MinusButton";
import TrashButton from "../Basket/TrashButton";

const Card = ({ bookData, setErrorMassage }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [increasePrice, setIncreasePrice] = useState(1);

  // const AddBookNumberHandler = () => {
  // setIncreasePrice(increasePrice + 1);
  //   setErrorMassage(true);
  // };

  //   const decreaseBookNumberHandler = () => {
  //     setIncreasePrice(increasePrice - 1);
  //   };

  const removeBookHandler = () => {
    setCartItems(
      cartItems.map((items) => items.filter((item) => item.id !== bookData.id))
    );
  };

  const bookMessageHandlers = () => {
    setErrorMassage(true);
    setTimeout(() => {
      setErrorMassage(false);
    }, 3000);
  };

  return (
    <div className="flex sm:w-72 w-62 justify-center mb-4 ">
      <div className=" border border-gray-500 dark:border-white rounded-xl flex sm:h-80 h-72 w-60 sm:w-64 justify-center  shadow-lg">
        <div className="flex flex-col items-center h-64">
          <div className="max-h-44 max-w-32  p-2 flex justify-center rounded-xl sm:mt-6 mt-2">
            <img
              src={bookData.image}
              alt="image"
              className="rounded max-w-44 max-h-36 "
            />
          </div>
          <div className="pt-1 pl-3 flex flex-col justify-center dark:text-white h-full">
            <div className="flex justify-start items-center font-serif whitespace-nowrap overflow-hidden text-ellipsis ">
              <span className="text-lg font-bold  pt-1 w-44 truncate">
                {bookData.name}
              </span>
            </div>
            <p className="text-[11px] font-serif  text-gray-500 h-4 flex  items-center mb-2">
              {bookData.author}
            </p>
            <p className=" font-serif font-bold text-amber-700  text-sm ">
              {bookData.price}
              <span> €</span>
            </p>
          </div>
          <div className=" flex flex-row justify-center items-center sm:gap-3 gap-2 py-3 pb-2">
            <button className="" onClick={bookMessageHandlers}>
              <AddButton />
            </button>
            {/* <p className="border w-7 h-7 rounded-full flex justify-center items-center border-blue-500 text-sm font-bold">
              {increasePrice}
            </p> */}
            {/* {increasePrice > 1 && (
              <button onClick={decreaseBookNumberHandler}>
                <MinusButton />
              </button>
            )} */}

            <button onClick={removeBookHandler}>
              <TrashButton />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
