import { useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import LoginButton from "../Components/SmalComponents/LoginButton";
import HomeButton from "../Components/SmalComponents/HomeButton";
import ChangeLanguage from "./ChangeLanguage";
import SearchButton from "../Components/SmalComponents/SearchButton";
import BasketButton from "../Components/SmalComponents/BasketButton";

const NavigationBar = ({ darkModeHandler }) => {
  let showLoginPage = false;

  // const [colorTheme, setColorTheme] = useState();
  const [darkSide, setDarkside] = useState(false);

  const darkModeHandlers = (checked) => {
    setDarkside(checked);
    darkModeHandler(!darkSide);
  };

  // const [loginPage, setLoginPage] = useState(showLoginPage);

  // const changeLoginHandler = () => {
  //   setLoginPage(true);
  // };

  return (
    <div className="w-full bg-slate-400 dark:bg-slate-900 fexed flex flex-col sm:flex-row sm:flex items-center sm:gap-16 sm:h-20 sm:justify-center">
      <div className="flex justify-center items-center bg-slate-800 pl-6 mt-2 rounded-lg sm:bg-slate-700 sm:px-0 sm:mt-0">
        <DarkModeSwitch checked={darkSide} onChange={darkModeHandlers} />
        <div className="flex justify-center items-center">
          <Link to="/">
            <HomeButton></HomeButton>
            {/* <span className="sm:px-8 py-3 rounded hover:border cursor-pointer text-white font-bold hover:border-yellow-50 hover:text-yellow-50">
              Home
            </span> */}
          </Link>
          <ChangeLanguage />
        </div>
        <div className="flex justify-center items-center">
          <Link to="/login">
            <LoginButton></LoginButton>
            {/* <span className="px-8 py-3 rounded hover:border cursor-pointer text-white font-bold hover:border-yellow-50 hover:text-yellow-50">
              Login
            </span> */}
          </Link>
          <div className="ml-8 flex flex-col items-center">
            <div className="relative">
              <p className=" text-yellow-50 font-bold text-xs  absolute top-1 left-[-5px]">
                22
              </p>
            </div>
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
          className=" w-80 sm:w-96 h-11 mb-5 mt-4 rounded pl-4 hover:bg-yellow-50 bg-red-50"
        />
        <div className="ml-[-30px]">
          <SearchButton />
        </div>
      </div>
    </div>
  );
};
export default NavigationBar;
