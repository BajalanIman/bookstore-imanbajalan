import { useState } from "react";

import BackButton from "../Components/SmalComponents/BackButton";
import HeartButton from "../Components/SmalComponents/HeartButton";

const SubCategories = (props) => {
	let books = props.booklists;
	let basket = { id: "", name: "", price: null };

    let productsInBasketNo=0

	// const [productsInBasketNo, setProductsInBasketNo] = useState(0);
	const [showInfo, setShowInfo] = useState(false);
	const [closeSubCategories, setCloseSubCategories] = useState(true);

	const closeSubCategoriesHandler = () => {
		setCloseSubCategories(!closeSubCategories);
	};

	const infoBtnHandler = () => {
		setShowInfo(!showInfo);
		console.log(showInfo);
	};

	// const counter = () => {
	// 	setProductsInBasketNo(productsInBasketNo + 1);
	// };

	return (
		<div
			className={
				closeSubCategories
					? " overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
					: "heden"
			}
		>
			<div className="relative w-full h-screen">
				<div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
					<div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
						<div onClick={closeSubCategoriesHandler}>
							<BackButton></BackButton>
						</div>
						<div>
							<div className="grid grid-cols-4 justify-center items-center p-6">
								{books.map((el) => (
									<div
										key={el.id}
										className="w-96 h-[600px] flex flex-col justify-center items-center border shadow-lg rounded m-6"
									>
										<img
											className="w-82 h-64 pt-0"
											src="https://www.rd.com/wp-content/uploads/2021/12/50-science-fiction-books-ft-via-merchant.png"
											alt="book"
										/>
										<div className="flex flex-col justify-start items-start w-full  gap-5">
											<span className="text-2xl font-bold w-full pt-1 pl-14 h-16 flex justify-center items-center font-serif">
												{el.name}
											</span>
											<div className="flex flex-col w-full text-xl font-serif pl-14  gap-2">
												<span>
													<span className="font-bold"> By: </span>
													{el.author}
												</span>
												<span>
													<span className="font-bold"> year: </span>
													{el.year}
												</span>
												<span>
													<span className="font-bold"> Price: </span>
													{el.price} €
												</span>
												{/* <span>
													<span className="font-bold"> ISBN: </span>
													{el.ISBN}
												</span> */}
											</div>
											<div className="w-full h-8 px-14 flex gap-6 justify-center">
												<img
													onClick={infoBtnHandler}
													src="../public/InformationBTN.png"
													alt="information"
												/>
												<HeartButton></HeartButton>
												<div
													key={el.id}
													className="flex gap-3 justify-center items-center"
												>
													<img
														key={el.id}
														onClick={()=>{basket.id=el.id, basket.name=el.name, basket.price=el.price, console.log(basket), productsInBasketNo=productsInBasketNo+1}}
														className="w-8 h-8 cursor-pointer bg-blue-700 hover:bg-orange-500 rounded-full"
														src="../public/plusBTN.png"
														alt="plus"
													/>
													<p>{productsInBasketNo}</p>
													<img
														className={
															productsInBasketNo > 3
																? "w-8 h-8 cursor-pointer bg-blue-700 hover:bg-orange-500 rounded-full"
																: "w-8 h-8 cursor-pointer bg-red-700 hover:bg-orange-500 rounded-full"
														}
														src="../public/minusBTN.png"
														alt="plus"
													/>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubCategories;
