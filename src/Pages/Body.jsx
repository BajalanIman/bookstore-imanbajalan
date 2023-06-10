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
      <div className="w-full h-screen font-sans">
        <div className="grid grid-cols-4 justify-center items-center p-6">
          {bookCategories.map((e) => (
            <div
              onClick={() => {
                setShowSubCatagories(true);
                booklists = e.books;

                Navigate("/products", { state: { booklists } });
              }}
              key={e.id}
              className="w-96 h-96 flex flex-col justify-center items-center border shadow-lg rounded m-6 hover:scale-110 cursor-pointer hover:bg-yellow-50"
            >
              <p className="text-black pb-7 text-2xl mt-6 font-bold font-serif">
                {e.category}
              </p>
              <img
                className="h-72 border mb-8 rounded"
                src="https://www.rd.com/wp-content/uploads/2021/12/50-science-fiction-books-ft-via-merchant.png"
                alt=""
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
