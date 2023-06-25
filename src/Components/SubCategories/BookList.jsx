import { useState, useContext } from "react";

import { localize } from "../../Translation";
import { CartContext } from "../../App";

import HeartButton from "../SmalComponents/HeartButton";
import BookInformation from "./BookInformation";
import InfoButton from "./InfoButton";

const BookList = ({ books, handleAddToBasket, addBooksToWhishlistHandler }) => {
  let { language } = useContext(CartContext);
  const [showInfoId, setShowInfoId] = useState(null);
  const [shoeInformationModal, setShoeInformationModal] = useState(false);
  let initialBasket = [];
  let initialWishlist = [];

  const infoBtnHandler = (id) => {
    setShowInfoId(id === showInfoId ? null : id);
    setShoeInformationModal(true);
  };

  const AddBooksToBasketHandler = (el) => {
    initialBasket.push(el);
    handleAddToBasket(initialBasket);
  };

  const addToWhishlistHandler = (el) => {
    initialWishlist.push(el);
    addBooksToWhishlistHandler(initialWishlist);
  };

  return books.map((el) => (
    <div
      key={el.id}
      className="flex flex-col justify-center items-center border shadow-lg rounded m-4 p-2 sm:max-w-48 lg-max-w-48"
    >
      <img className="w-88 h-64 pt-3" src={el.image} alt={el.name} />
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex w-full justify-center items-center">
          {/* <div className="mt-3 flex justify-start items-center font-serif whitespace-nowrap overflow-hidden text-ellipsis w-1/2">
            <span className="text-lg font-bold  pt-1 w-62 truncate">
              {el.name}
            </span>
          </div> */}
        </div>
        <div className="flex flex-col justify-center items-start w-full text-sm font-serif pl-24">
          <div className="mt-3 flex justify-start items-center font-serif whitespace-nowrap overflow-hidden text-ellipsis w-1/2">
            <span className="text-lg font-bold  pt-1 w-72 truncate ">
              {el.name}
            </span>
          </div>
          <span className=" text-gray-400 pb-1">
            <span className="font-bold">{localize(language, "By")}: </span>
            {el.author}
          </span>
          <span>
            <span className="font-bold">{localize(language, "Year")}: </span>
            {el.year}
          </span>
          <span>
            <span className="font-bold">{localize(language, "Price")}: </span>
            {el.price} €
          </span>
        </div>
        <div className="w-full flex justify-center items-center space-x-8 mt-8">
          <div onClick={() => infoBtnHandler(el.id)}>
            <InfoButton />
          </div>
          <button
            onClick={() => AddBooksToBasketHandler(el)}
            className="text-yellow-50 py-2 px-4 sm:h-12 sm:w-52 rounded hover:bg-cyan-700 bg-cyan-900 flex justify-center items-center mb-5"
          >
            {localize(language, "AddToBasket")}
          </button>
          <button onClick={() => addToWhishlistHandler(el)}>
            <HeartButton></HeartButton>
          </button>
        </div>
        {showInfoId === el.id && shoeInformationModal && (
          <div className="absolute">
            <BookInformation
              setShoeInformationModal={setShoeInformationModal}
              ISBN={el.ISBN}
              name={el.name}
              moreDetail={{
                name: el.name,
                ISBN: el.ISBN,
                info: el.description,
                image: el.image,
              }}
            />
          </div>
        )}
      </div>
    </div>
  ));
};

export default BookList;
