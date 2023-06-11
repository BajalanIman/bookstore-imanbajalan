import SubCategories from "./SubCategories";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BookData from "../Components/Data/BookData";

const Body = () => {
  const [showSubCatagories, setShowSubCatagories] = useState(false);
  let booklists = "";
  //   const [booklists, setBooklists] = useState();
  let bookCategories = BookData;
  const Navigate = useNavigate();
  // let booklists = "";

  return (
    <div>
      <div className="sm:w-full h-screen font-sans flex justify-center sm:mt-8">
        <div className="sm:grid  sm:grid-cols-3  sm:gap-4">
          {bookCategories.map((e) => (
            <div
              onClick={() => {
                setShowSubCatagories(true);
                booklists = e.books;

                Navigate("/products", { state: { booklists } });
              }}
              key={e.id}
              className="sm:w-96 sm:h-96 flex flex-col justify-center items-center border shadow-lg rounded m-6 hover:scale-110 cursor-pointer hover:bg-yellow-50"
            >
              <p className="text-black pb-7 text-2xl mt-6 font-bold font-serif">
                {e.category}
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
