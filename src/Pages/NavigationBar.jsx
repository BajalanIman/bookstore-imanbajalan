import { useState } from "react";
import { Link } from "react-router-dom";

import ChangeLanguage from "./ChangeLanguage";
import Login from "./Login";
import SearchButton from "../Components/SmalComponents/SearchButton";
import BasketButton from "../Components/SmalComponents/BasketButton";

const NavigationBar = () => {
  let showLoginPage = false;
  // const [loginPage, setLoginPage] = useState(showLoginPage);

  // const changeLoginHandler = () => {
  //   setLoginPage(true);
  // };

  return (
    <div className="w-full bg-cyan-900 fexed flex flex-col sm:flex-row sm:flex items-center sm:gap-16 sm:h-20 sm:justify-center">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <Link to="/">
            <span className="sm:px-8 py-3 rounded hover:border cursor-pointer text-white font-bold hover:border-yellow-50 hover:text-yellow-50">
              Home
            </span>
          </Link>
          <ChangeLanguage />
        </div>
        <div className="flex">
          <Link to="/login">
            <span className="px-8 py-3 rounded hover:border cursor-pointer text-white font-bold hover:border-yellow-50 hover:text-yellow-50">
              Login
            </span>
          </Link>
          <div className="ml-8 flex flex-col items-center">
            <p className="mb-[-10px] text-yellow-50 font-bold text-xs">22</p>

            <Link to="/basket">
              <BasketButton />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className=" w-80 sm:w-96 h-10 mb-5 mt-4 rounded pl-4 hover:bg-yellow-50 bg-red-50"
        />
        <div className="ml-[-30px]">
          <SearchButton />
        </div>
      </div>
    </div>
  );
};
export default NavigationBar;
