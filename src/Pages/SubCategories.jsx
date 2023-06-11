import { useState } from "react";
import { useLocation } from "react-router-dom";
import { localize } from "../Translation";

import HeartButton from "../Components/SmalComponents/HeartButton";
import ProductInformation from "./ProductInformation";

const SubCategories = () => {
  const location = useLocation();
  const books = location.state.booklists || [];
  let basket = { id: "", name: "", price: null };

  let productsInBasketNo = 0;
  const [information, setInformation] = useState();

  const [showInfo, setShowInfo] = useState(false);

  const infoBtnHandler = () => {
    setShowInfo(!showInfo);
    setInformation();
  };

  return (
    <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
      <div className=" ml-6 mt-6 w-full flex justify-center"></div>
      <div></div>
      <div>
        <div className="sm:grid sm:grid-cols-4 sm:justify-center sm:items-center m-3 p-6">
          {books.map((el) => (
            <div
              key={el.id}
              className="sm:w-96 sm:h-[600px] flex flex-col justify-center items-center border shadow-lg rounded m-6"
            >
              <img className="w-82 h-64 pt-0" src={el.image} alt={el.name} />
              <div className="flex flex-col justify-start items-start w-full  gap-5">
                <div className="flex w-full justify-center items-center">
                  <span className="text-2xl font-bold  pt-1  h-16 flex justify-center items-center font-serif">
                    {el.name}
                  </span>
                </div>
                <div className="flex flex-col w-full text-xl font-serif pl-14  gap-2">
                  <span>
                    <span className="font-bold"> By: </span>
                    {el.author}
                  </span>
                  <span>
                    <span className="font-bold"> year: </span>
                    {el.year}
                  </span>
                  <span>
                    <span className="font-bold"> Price: </span>
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
                    onClick={infoBtnHandler}
                    src="../public/InformationBTN.png"
                    alt="information"
                  />
                  <button className="text-yellow-50 py-2 px-10 rounded hover:bg-cyan-700 bg-cyan-900 flex justify-center items-center">
                    Add to Basket
                  </button>
                  <HeartButton></HeartButton>
                </div>
              </div>
              {/* <ProductInformation element={information}></ProductInformation> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
