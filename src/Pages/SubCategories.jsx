import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { localize } from "../Translation";
import { CartContext } from "../App";

import BookList from "../Components/SubCategories/BookList";
import FilterBooksBTN from "../Components/SubCategories/FilterBooksBTN";

const SubCategories = () => {
  let { language } = useContext(CartContext);

  const SORT_EXPENSIVE = `${localize(language, "expensive")}`;
  const SORT_CHEAP = `${localize(language, "cheap")}`;
  const SORT_OLD = `${localize(language, "Old")}`;
  const SORT_NEW = `${localize(language, "New")}`;

  const { cartItems, setCartItems } = useContext(CartContext);
  const [sortType, setSortType] = useState(SORT_NEW);

  // const [cheapSort, setCheapSort] = useState(true);
  // const [expensiveSort, setExpensiveSort] = useState(false);
  // const [oldSort, setOldSort] = useState(false);
  // const [newSort, setNewSort] = useState(false);

  const chepSortHandler = () => {
    setSortType(SORT_CHEAP);
    // setCheapSort(true);
    // setExpensiveSort(false);
    // setOldSort(false);
    // setNewSort(false);
  };

  const expensiveSortHandler = () => {
    setSortType(SORT_EXPENSIVE);
    // setCheapSort(false);
    // setExpensiveSort(true);
    // setOldSort(false);
    // setNewSort(false);
  };

  const oldSortHandler = () => {
    setSortType(SORT_OLD);
    // setCheapSort(false);
    // setExpensiveSort(false);
    // setOldSort(true);
    // setNewSort(false);
  };
  const newSortHandler = () => {
    setSortType(SORT_NEW);
    // setCheapSort(false);
    // setExpensiveSort(false);
    // setOldSort(false);
    // setNewSort(true);
  };

  const [itemAddInfo, setItemAddInfo] = useState(false);

  const handleAddToBasket = (mainBasket) => {
    setCartItems([...cartItems, mainBasket]);
    setItemAddInfo(true);
    setTimeout(() => {
      setItemAddInfo(false);
    }, 3000);
  };

  const location = useLocation();
  const books = location.state.booklists || [];
  // let basket = { id: "", name: "", price: null };

  const sortedBooks = books.sort(
    (a, b) =>
      (sortType === SORT_EXPENSIVE && (b.price > a.price ? 1 : -1)) ||
      (sortType === SORT_CHEAP && (a.price > b.price ? 1 : -1)) ||
      (sortType === SORT_NEW && (b.year > a.year ? 1 : -1)) ||
      (sortType === SORT_OLD && (a.year > b.year ? 1 : -1))
  );

  return (
    <div className="mb-1 text-sm font-light text-gray-500 dark:text-gray-400">
      {itemAddInfo && (
        <p className="absolute sm:ml-6 bg-green-600 text-white font-bold p-4 top-36 sm:top-24 border border-green-900 rounded-tr-lg rounded-br-xl">
          {localize(language, "BookAddToBasket")}
        </p>
      )}
      <div className=" ml-6 w-full flex justify-center mt-14"></div>
      <div className="flex justify-center items-center w-full absolute gap-8 mt-0">
        <FilterBooksBTN name={SORT_NEW} sortHandler={newSortHandler} />
        <FilterBooksBTN name={SORT_CHEAP} sortHandler={chepSortHandler} />
        <FilterBooksBTN
          name={SORT_EXPENSIVE}
          sortHandler={expensiveSortHandler}
        />
        <FilterBooksBTN name={SORT_OLD} sortHandler={oldSortHandler} />

        {/* <button
          className="font-serif text-slate-700 border border-white hover-text-black hover:border-1 hover:border-b-orange-500"
          onClick={chepSortHandler}
        >
          Cheapest
        </button>
        <button
          className="font-serif text-slate-700 border border-white hover-text-black hover:border-1 hover:border-b-orange-500"
          onClick={expensiveSortHandler}
        >
          Expensive
        </button>
        <button
          className="font-serif text-slate-700 border border-white hover-text-black hover:border-1 hover:border-b-orange-500"
          onClick={oldSortHandler}
        >
          Old
        </button>
        <button
          className="font-serif text-slate-700 border border-white hover-text-black hover:border-1 hover:border-b-orange-500"
          onClick={newSortHandler}
        >
          New
        </button> */}
      </div>
      <div>
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8 dark:bg-gray-800">
          <BookList books={sortedBooks} handleAddToBasket={handleAddToBasket} />
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
