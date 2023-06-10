import { useState } from "react";

import ChangeLanguage from "./ChangeLanguage";
import Login from "./Login";
import SearchButton from "../Components/SmalComponents/SearchButton";
import BasketButton from "../Components/SmalComponents/BasketButton";

const NavigationBar = () => {
  let showLoginPage = false;
  const [loginPage, setLoginPage] = useState(showLoginPage);

  const changeLoginHandler = () => {
    setLoginPage(true);
  };

  return (
    <div className="w-full bg-cyan-900 flex items-center gap-24 h-20 justify-center">
      <ChangeLanguage />
      <span
        onClick={changeLoginHandler}
        className="px-8 py-3 rounded hover:border cursor-pointer text-white font-bold hover:border-yellow-50 hover:text-yellow-50"
      >
        Login
      </span>
      {loginPage && <Login />}
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-96 h-10 rounded pl-4 hover:bg-yellow-50 bg-red-50"
        />
        <div className="ml-[-30px]">
          <SearchButton />
        </div>
      </div>
      <div className="ml-8 flex flex-col items-center">
        <p className="mb-[-10px] text-yellow-50 font-bold text-xs">22</p>
        <BasketButton />
      </div>
    </div>
  );
};
export default NavigationBar;
