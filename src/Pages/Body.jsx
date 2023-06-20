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

  return (
    <div>
      <div className="sm:w-full h-screen font-sans flex justify-center sm:mt-8">
        <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              className="sm:w-96 sm:h-96 flex flex-col justify-center items-center border shadow-lg rounded m-6 hover:scale-110 cursor-pointer dark:hover:bg-gray-500 "
            >
              <p className="text-black pb-7 text-2xl mt-6 font-bold font-serif dark:text-white ">
                {localize(language, e.category)}
              </p>
              <img
                className="h-72 border mb-8 rounded opacity-90"
                src={e.image}
                alt={e.image}
              />
            </div>
          ))}
        </div>
        {/* {showSubCatagories && (
          <SubCategories booklists={booklists}></SubCategories>
        )} */}
      </div>
    </div>
  );
};

export default Body;
