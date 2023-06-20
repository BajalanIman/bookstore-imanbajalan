import { useState, useContext } from "react";

import { localize } from "../../Translation";
import { CartContext } from "../../App";

import HeartButton from "../SmalComponents/HeartButton";
import BookInformation from "./BookInformation";

const BookList = ({ books, handleAddToBasket }) => {
  let { language } = useContext(CartContext);
  const [showInfoId, setShowInfoId] = useState(null);
  const [shoeInformationModal, setShoeInformationModal] = useState(false);
  let initialBasket = [];

  const infoBtnHandler = (id) => {
    setShowInfoId(id === showInfoId ? null : id);
    setShoeInformationModal(true);
  };

  const AddBooksToBasketHandler = (el) => {
    initialBasket.push(el);
    // const mainBasket = new Set(initialBasket);
    handleAddToBasket(initialBasket);
  };

  return books.map((el) => (
    <div
      key={el.id}
      className="sm:w-96 sm:h-[600px] flex flex-col justify-center items-center border shadow-lg rounded m-6"
    >
      <img className="w-88 h-64 pt-3" src={el.image} alt={el.name} />
      <div className="flex flex-col justify-start items-start w-full  gap-5">
        <div className="flex w-full justify-center items-center pr-6">
          <span className="text-xl font-bold  pt-1  h-14 flex justify-center items-center font-serif whitespace-nowrap overflow-hidden text-ellipsis w-1/2 ">
            {el.name}
          </span>
        </div>
        <div className="flex flex-col w-full text-xl font-serif pl-14  gap-2">
          <span>
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
          {/* <span>
                  <span className="font-bold"> ISBN: </span>
                  {el.ISBN}
                </span>{" "} */}
        </div>
        <div className="w-full h-8 px-14 flex gap-6 justify-center">
          {/* <div
                  key={el.id}
                  className="flex gap-3 justify-center items-center"
                >
                  <img
                    key={el.id}
                    onClick={() => {
                      (basket.id = el.id),
                        (basket.name = el.name),
                        (basket.price = el.price),
                        console.log(basket),
                        (productsInBasketNo = productsInBasketNo + 1);
                      setInformation = el.id;
                    }}
                    className="w-8 h-8 cursor-pointer bg-gray-400 hover:bg-orange-500 rounded-full"
                    src="../public/plusBTN.png"
                    alt="plus"
                  />
                  <p>{productsInBasketNo}</p>
                  <img
                    className={
                      productsInBasketNo > 3
                        ? "w-8 h-8 cursor-pointer bg-gray-400 hover:bg-orange-500 rounded-full"
                        : "w-8 h-8 cursor-pointer bg-gray-400 hover:bg-orange-500 rounded-full"
                    }
                    src="../public/minusBTN.png"
                    alt="plus"
                  />
                </div> */}
        </div>
        <div className="w-full flex justify-center items-center space-x-8">
          <img
            onClick={() => infoBtnHandler(el.id)}
            src="../public/InformationBTN.png"
            alt="information"
          />
          <button
            onClick={() => AddBooksToBasketHandler(el)}
            className="text-yellow-50 py-2 px-4 sm:h-12 sm:w-52 rounded hover:bg-cyan-700 bg-cyan-900 flex justify-center items-center mb-5"
          >
            {localize(language, "AddToBasket")}
          </button>
          <HeartButton></HeartButton>
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
