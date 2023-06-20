import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { CartContext } from "../App";

import LoginButton from "../Components/SmalComponents/LoginButton";
import HomeButton from "../Components/SmalComponents/HomeButton";
import ChangeLanguage from "./ChangeLanguage";
import SearchButton from "../Components/SmalComponents/SearchButton";
import BasketButton from "../Components/SmalComponents/BasketButton";
import WishLListIcon from "../Components/SmalComponents/WishLListIcon";

const NavigationBar = ({ darkModeHandler }) => {
  const nameInLocaleStorage = localStorage.getItem("name");
  const [nameFromLocalStorage, setNameFromLocalStorage] = useState("");

  useEffect(() => {
    if (nameInLocaleStorage) {
      const name = nameInLocaleStorage;
      console.log(name);
      console.log(nameInLocaleStorage);
    }
  }, [nameInLocaleStorage]);

  const { cartItems, setCartItems } = useContext(CartContext);
  const [totalItemsInBaskets, setTotalItemsInBaskets] = useState(0);

  useEffect(() => {
    setTotalItemsInBaskets(cartItems.length);
  }, [cartItems]);

  const [darkSide, setDarkside] = useState(false);

  const darkModeHandlers = (checked) => {
    setDarkside(checked);
    darkModeHandler(!darkSide);
  };

  return (
    <div className="w-full bg-slate-400 dark:bg-slate-900 fexed flex flex-col sm:flex-row sm:flex items-center sm:gap-16 sm:h-20 sm:justify-center mt-[-8px]">
      <div className="flex justify-center items-center bg-slate-800 px-6 mt-2 rounded-lg sm:bg-slate-400 sm:px-0 sm:mt-0">
        <div className="flex justify-center items-center gap-5 sm:gap-6 sm:pl-6 sm:pr-6">
          <div className="">
            <DarkModeSwitch
              checked={darkSide}
              onChange={darkModeHandlers}
              className=" text-white fill-white"
            />
          </div>
          <Link to="/">
            <HomeButton></HomeButton>
          </Link>
          <ChangeLanguage />

          <Link to="/login">
            <LoginButton></LoginButton>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center sm:gap-8">
        <WishLListIcon />
        <input
          type="text"
          placeholder="Search..."
          className=" w-80 sm:w-96 h-11 mb-5 mt-4 rounded pl-4 hover:bg-yellow-50 bg-red-50 ml-2"
        />
        <div className="ml-[-30px]">
          <SearchButton />
        </div>
        <div className="ml-2 flex flex-col items-center">
          <div className="relative">
            <p className=" text-yellow-50 font-bold text-xs  absolute sm:top-1 left-[-4px]">
              {totalItemsInBaskets}
            </p>
          </div>
          <Link to="/basket">
            <BasketButton />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavigationBar;
