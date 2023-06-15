import { useState } from "react";
import { useLocation } from "react-router-dom";
import { localize } from "../Translation";

// import HeartButton from "../Components/SmalComponents/HeartButton";
// import ProductInformation from "./ProductInformation";
import BookList from '../Components/SubCategories/BookList';
import FilterBooksBTN from "../Components/SubCategories/FilterBooksBTN";

const SORT_EXPENSIVE = "expensive"
const SORT_CHEAP = "cheap"
const SORT_OLD = "old"
const SORT_NEW = "new"

const SubCategories = () => {
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

  const location = useLocation();
  const books = location.state.booklists || [];
  let basket = { id: "", name: "", price: null };
  const sortedBooks = books
  .sort(
    (a, b) =>
      (sortType === SORT_EXPENSIVE && (b.price > a.price ? 1 : -1)) ||
      (sortType === SORT_CHEAP && (a.price > b.price ? 1 : -1)) ||
      (sortType === SORT_NEW && (b.year > a.year ? 1 : -1)) ||
      (sortType === SORT_OLD && (a.year > b.year ? 1 : -1))
  )

  return (
    <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
      <div className=" ml-6 mt-6 w-full flex justify-center"></div>

      <div className="flex justify-center items-center gap-8 mt-0">
        <FilterBooksBTN name={SORT_NEW} sortHandler={newSortHandler} />
        <FilterBooksBTN name={SORT_CHEAP} sortHandler={chepSortHandler} />
        <FilterBooksBTN name={SORT_EXPENSIVE} sortHandler={expensiveSortHandler} />
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
        <div className=" container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BookList books={sortedBooks} />
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
