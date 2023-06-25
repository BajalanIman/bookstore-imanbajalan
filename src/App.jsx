import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

import Body from "./Pages/Body";
import SubCategories from "./Pages/SubCategories";
import CreateAccount from "./Pages/CreateAccount";
import Basket from "./Pages/Basket";
import RootLayout from "./Pages/RootLayout";
import Login from "./Pages/Login";
import Purchase from "./Pages/Purchase";
import WishLListBooks from "./Pages/WishLListBooks";

export const CartContext = createContext({ 123: 1 });
// export const LanguageContext = createContext("");

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Body /> },
      { path: "/products", element: <SubCategories /> },
      { path: "/createaccount", element: <CreateAccount /> },
      { path: "/wishLListBooks", element: <WishLListBooks /> },
      { path: "purchase", element: <Purchase /> },
      {
        path: "basket",
        element: <Basket />,
        children: [{ path: "purchase", element: <Purchase /> }],
      },

      {
        path: "/login",
        element: <Login />,
        children: [{ path: "createaccount", element: <CreateAccount /> }],
      },
    ],
  },
]);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishItem, setWishItem] = useState([]);

  const [totalPrice, setTotalPrice] = useState();
  const [language, setLanguage] = useState("");

  useEffect(() => {
    let total = 0;
    cartItems.map((el) =>
      el.forEach((element) => (total = total + element.price))
    );
    setTotalPrice(total);
  }, [cartItems]);

  useEffect(() => {
    setLanguage(language);
  }, [language]);

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          setCartItems,
          wishItem,
          setWishItem,
          totalPrice,
          language,
          setLanguage,
        }}
      >
        <div className="flex flex-col dark:text-white text-xl w-full h-screen">
          <RouterProvider router={router} />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
