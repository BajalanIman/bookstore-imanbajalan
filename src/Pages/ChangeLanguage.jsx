import { useState } from "react";
// import "./App.css";
import { localize } from "../Translation";
import LangIcon from "../Components/LangIcon";
// import NavigationBar from "./Pages/NavigationBar";

// import CreateAccount from "./Pages/CreateAccount";
//import Login from "./Pages/Login";

const ChangeLanguage=()=> {
	const [lang, setLang] = useState(() => "en");
	const englishLang = (e) => {
		setLang(e.target.className);
		setshowAllLanguage(false);
	};

	const GermanLang = (e) => {
		setLang(e.target.className);
		setshowAllLanguage(false);
	};

	const FrenchLang = (e) => {
		setLang(e.target.className);
		setshowAllLanguage(false);
	};
	const [showAllLanguage, setshowAllLanguage] = useState(false);

	const showLanguagesBox = () => {
		setshowAllLanguage(!showAllLanguage);
	};

	return (
	
			<div>
			
			{/* <h1 className="">{localize(lang, "name")}</h1>
			<h1>{localize(lang, "title")}</h1>
			<h3>{localize(lang, "hello")}</h3>
			<h3 className="flag">{localize(lang, "icon")}</h3> */}
			<div className="flex flex-col gap-2 w-32 justify-start items-start p-3 rounded hover:border hover:border-white cursor-pointer">
				<div
					className="flex text-2xl w-24 justify-center"
					onClick={showLanguagesBox}
				>
					<LangIcon></LangIcon>
					<span className="flag">{localize(lang, "icon")}</span>
				</div>
				{showAllLanguage && (
					<div className="w-44 mt-12 p-2 border border-gray-500 bg-white rounded-xl">
						<div className="flex items-center gap-1 bg-white p-1 text-black cursor-pointer py-2 hover:text-blue-500 hover:bg-red-100 active:text-red-800 ">
							<img
								className="w-9 h-6"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1200px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png?20221023025705"
								alt="Great_Britain"
							/>
							<span className="en" onClick={englishLang}>
								English-En
							</span>
							<br className="text-gray-400 p-2" />
						</div>
						<div className="flex items-center gap-1 bg-white p-1 text-black cursor-pointer py-2 hover:text-blue-500 hover:bg-red-100 active:text-red-800">
							<img
								className="w-9 h-6"
								src="https://img.freepik.com/free-vector/illustration-german-flag_53876-27101.jpg?size=626&ext=jpg"
								alt="german-flag"
							/>
							<span className="De" onClick={GermanLang}>
                            Deutsch-De
							</span>
						</div>
						<div className="flex items-center gap-1 bg-white p-1 text-black cursor-pointer py-2 hover:text-blue-500 hover:bg-red-100 active:text-red-800">
							<img
								className="w-9 h-6"
								src="https://media.istockphoto.com/id/657672390/de/vektor/flagge-von-frankreich.jpg?s=612x612&w=0&k=20&c=Glk1Ex9oyGvDAGSLcMDSh4UDUjnHAHrNreAqajYGmSg="
								alt="flagge-von-frankreich"
							/>
							<span className="Fr" onClick={FrenchLang}>
                            French-Fr
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default ChangeLanguage;
