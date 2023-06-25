import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { CartContext } from "../App";

import LoginButton from "../Components/SmalComponents/LoginButton";
import LogoutButton from "../Components/SmalComponents/LogoutButton";
import LogOutpage from "../Components/Logout/LogOutPage";
import HomeButton from "../Components/SmalComponents/HomeButton";
import ChangeLanguage from "./ChangeLanguage";
import SearchButton from "../Components/SmalComponents/SearchButton";
import BasketButton from "../Components/SmalComponents/BasketButton";
import WishLListIcon from "../Components/SmalComponents/WishLListIcon";

const NavigationBar = ({ darkModeHandler }) => {
  const nameInLocaleStorage = localStorage.getItem("name");

  useEffect(() => {
    if (nameInLocaleStorage) {
      const name = nameInLocaleStorage;
      // console.log(name);
      // console.log(nameInLocaleStorage);
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

  const [loginLogout, setLoginLogout] = useState();
  let checkNameFromLocal = localStorage.getItem("name");

  useEffect(() => {
    setLoginLogout(checkNameFromLocal);
  }, [loginLogout]);
  // console.log(loginLogout);

  const [changeLogoutPage, setChangeLogoutPage] = useState(false);

  const LogOutHandler = () => {
    setChangeLogoutPage(!changeLogoutPage);
    // localStorage.removeItem("name");
    // localStorage.removeItem("Password");
    // location.reload();
  };

  return (
    <div className="w-full bg-slate-700 dark:bg-slate-900 fexed flex flex-col sm:flex-row sm:flex items-center sm:gap-16 sm:h-20 sm:justify-center mt-[-8px]">
      <div className="flex justify-center items-center bg-slate-800 dark:bg-slate-800 dark:sm:bg-slate-900 w-80 mt-2 rounded-lg sm:bg-slate-700 sm:px-0 sm:mt-0">
        {changeLogoutPage && (
          <LogOutpage setChangeLogoutPage={setChangeLogoutPage} />
        )}
        <div className="flex justify-between items-center w-full pl-4 pr-4">
          <div className="w-2/5 ">
            <a
              href="https://www.linkedin.com/in/iman-bajalan-ab52a045/"
              target="_blank"
            >
              <img
                className=" h-8 w-8 rounded-full"
                src="../src/assets/Iman-NavigationBar-Logo.png"
                alt="Logo"
              />
            </a>
          </div>

          <div className="w-1/5 sm:ml-0 ">
            <Link to="/">
              <HomeButton></HomeButton>
            </Link>
          </div>
          <div className="w-1/5 mr-12">
            <ChangeLanguage />
          </div>

          <div className="flex justify-center items-center ml-2  sm:hover:border sm:hover:rounded w-24 h-16 ">
            <DarkModeSwitch
              checked={darkSide}
              onChange={darkModeHandlers}
              className=" text-white fill-white"
            />
          </div>
        </div>
      </div>

      <div className="flex sm:justify-center items-center sm:gap-8 ml-[-12px] sm:w-24 w-64 h-12 justify-between">
        {!loginLogout && (
          <Link to="/login">
            <LoginButton></LoginButton>
          </Link>
        )}
        {loginLogout && (
          <div onClick={LogOutHandler}>
            <LogoutButton />
          </div>
        )}
        <Link to="/wishLListBooks">
          <WishLListIcon></WishLListIcon>
        </Link>

        {/* <input
          type="text"
          placeholder="Search..."
          className=" w-72 sm:w-96 h-11 mb-5 mt-4 rounded pl-4 hover:bg-yellow-50 bg-red-50 ml-2 text-sm"
        /> */}

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
