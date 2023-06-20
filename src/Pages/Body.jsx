import { Route, useLocation } from "react-router-dom";

import { useOutletContext } from "react-router-dom";

import SubCategories from "./SubCategories";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { CartContext } from "../App";
import BookData from "../Components/Data/BookData";
import { localize } from "../Translation";

const Body = () => {
  let { language } = useContext(CartContext);

  const [showSubCatagories, setShowSubCatagories] = useState(false);
  let booklists = "";
  //   const [booklists, setBooklists] = useState();
  let bookCategories = BookData;
  const Navigate = useNavigate();
  // let booklists = "";
  // console.table(BookData.map((el) => el.category));

  return (
    <div>
      <div className="sm:w-full h-screen font-sans flex justify-center sm:mt-16 mt-12 mb-6 dark:bg-gray-800">
        {/* <p className="absolute top-36  sm:top-24  text-xs font-serif animate-pulse">
          Created by Iman Bajalan
        </p> */}
        <div className="m-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 mt-8">
          {bookCategories.map((e) => (
            <div
              onClick={() => {
                setShowSubCatagories(true);
                booklists = e.books;
                Navigate("/products", {
                  state: { booklists },
                });
              }}
              key={e.id}
              className="sm:w-48 sm:h-72 w-72 flex flex-col justify-center items-center border shadow-lg rounded mr-6  hover:scale-110 cursor-pointer hover:bg-yellow-100  dark:hover:bg-gray-500 "
            >
              <p className="text-black pb-7 text-lg mt-6 font-bold font-serif dark:text-white ">
                {localize(language, e.category)}
              </p>
              <img
                className="h-48 w-32 border mb-8 rounded opacity-90"
                src={e.image}
                alt={e.image}
              />
            </div>
          ))}
          <p className=" text-xs font-serif animate-pulse">
            {localize(language, "AppCreator")}
          </p>
        </div>
        {/* {showSubCatagories && (
          <SubCategories booklists={booklists}></SubCategories>
        )} */}
      </div>
    </div>
  );
};

export default Body;
