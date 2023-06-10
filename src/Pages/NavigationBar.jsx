import { useState } from "react";
import ChangeLanguage from "./ChangeLanguage";
import Login from "./Login";

const NavigationBar = () => {
	let showLoginPage = false;
	const [loginPage, setLoginPage] = useState(showLoginPage);

	const changeLoginHandler = () => {
		setLoginPage(true);
	};

	return (
		<div className="w-full bg-blue-500 flex items-center gap-16">
			<ChangeLanguage />
			<span
				onClick={changeLoginHandler}
				className="px-8 py-3 rounded hover:border cursor-pointer hover:border-white"
			>
				Login
			</span>
			{loginPage && <Login />}
		</div>
	);
};
export default NavigationBar;
