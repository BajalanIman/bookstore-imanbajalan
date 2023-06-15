const FilterBooksBTN =({name, sortHandler})=>{

    return(
        <div>
            <button
          className="font-serif text-slate-700 border border-white hover-text-black hover:border-1 hover:border-b-orange-500"
          onClick={sortHandler}
        >
          {name}
        </button>
        </div>
    )
}
export default FilterBooksBTN;