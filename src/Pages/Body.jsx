import SubCategories from "./SubCategories";

import BookData from "../Components/Data/BookData";
import { useState } from "react";
const Body = () => {
	const [showSubCatagories, setShowSubCatagories] = useState(false);
	const [booklists, setBooklists] = useState();
	let bookCategories = BookData;
	// let booklists = "";

	const categorii = () => {
		console.log(booklists);
	};

	return (
		<div>
			<button onClick={categorii}>categ</button>
			<div className="w-full h-screen font-sans">
				<div className="grid grid-cols-4 justify-center items-center p-6">
					{bookCategories.map((e) => (
						<div
							onClick={() =>{
								setShowSubCatagories(true)
								setBooklists(e.books)
							}}
							key={e.id}
							className="w-96 h-96 flex flex-col justify-center items-center border shadow-lg rounded m-6 hover:scale-110 cursor-pointer hover:bg-yellow-50"
						>
							<p className="text-black pb-7 text-2xl mt-6 font-bold font-serif">
								{e.category}
							</p>
							<img
								className="h-72 border mb-8 rounded"
								src="https://www.rd.com/wp-content/uploads/2021/12/50-science-fiction-books-ft-via-merchant.png"
								alt=""
							/>
						</div>
					))}
				</div>
				{showSubCatagories && (
					<SubCategories booklists={booklists}></SubCategories>
				)}
			</div>
            <p onClick={categorii}>123456</p>
		</div>
	);
};

export default Body;
