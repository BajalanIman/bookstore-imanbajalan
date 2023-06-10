import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useState } from "react";

import NavigationBar from "./Pages/NavigationBar";
import Body from "./Pages/Body";
import SubCategories from "./Pages/SubCategories";
import CreateAccount from "./Pages/CreateAccount";
//import Login from "./Pages/Login";

const router = createBrowserRouter([
  { path: "", element: <Body /> },
  { path: "/products", element: <SubCategories /> },
  { path: "/createaccount", element: <CreateAccount /> },
]);

function App() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col bg-white text-xl w-full h-screen">
        <RouterProvider router={router} />
        {/* <Body /> */}
        <div>
          {/*<Login></Login> */}
          {/* <CreateAccount></CreateAccount> */}
        </div>
      </div>
    </>
  );
}

export default App;
