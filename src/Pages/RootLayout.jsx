import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const RootLayout = () => {
  const [darkSide, setDarkside] = useState(false);

  const [count, setCount] = useState(123456789);

  const darkModeHandler = (darkSide) => {
    // setColorTheme(colorTheme);
    setDarkside(!darkSide);
  };
  return (
    <div
      className={`h-screen w-full mx-auto py-2 dark:text-white 
    ${darkSide ? "dark" : ""}`}
    >
      <NavigationBar darkModeHandler={darkModeHandler} />
      <Outlet context={[count, setCount]}></Outlet>
    </div>
  );
};
export default RootLayout;
