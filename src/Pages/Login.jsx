import { useState } from "react";
import Username from "../Components/LoginComponents/Username";
import PasswordIcon, {
	ShowPasswordIcon,
	HidePasswordIcon,
} from "../Components/LoginComponents/PasswordIcon";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [usernameSubmit, setUsernameSubmit] = useState("");
	const [passwordSubmit, setPasswordSubmit] = useState("");

	const setPassword = () => {
		setShowPassword(!showPassword);
	};

	const usernameSubmitHandler = (event) => {
		setUsernameSubmit(event.target.value);
	};

	let Password = "";
	// let setFamilySubmit = "";
	// let setEmailSubmit = "";
	// let setPasswordSubmit = "";
	var lowerCase = /[a-z]/g;
	var upperCase = /[A-Z]/g;
	var numbers = /[0-9]/g;

	const passwordSubmitHandler = (event) => {
		setPasswordSubmit(event.target.value);
	};

	function sumitLoginForm(e) {
		e.preventDefault();

		if (!setUsernameSubmit("admin")) {
			setUsernameSubmit("");
			setErrorMessage("Username is not correct!");
			setTimeout(() => {
				setErrorMessage();
			}, 5000);
		} else if (setPasswordSubmit.length < 8) {
			setErrorMessage("Password should be more than 8 character!");
		} else if (
			!setPasswordSubmit.match(lowerCase) ||
			!setPasswordSubmit.match(upperCase) ||
			!setPasswordSubmit.match(numbers)
		) {
			setErrorMessage(
				"Password should be including number, lowercase and uppercase letters!"
			);
		} else {
			setPasswordSubmit("");
		}
	}

	return (
		<div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-white pb-24">
			<div className="flex justify-center items-center w-[300-px] h-[800px]  bg-white p-8">
				<form
					className="bg-white relative flex flex-col justify-center items-center border rounded pb-8 shadow-lg shadow-gray-400"
					onSubmit={sumitLoginForm}
				>
					<div className=" flex w-full justify-end items-end pt-4 pr-6">
						<span className="text-black cursor-pointer text-3xl">&#x2715;</span>
					</div>
					<div className="w-44 h-44 rounded-full mt-6 flex justify-center items-center border shadow-lg text-gray-400 shadow-gray-400">
						<img
							className="w-38 rounded-full m-0 p-0"
							src="../public/Logo-2.PNG"
							alt=""
						/>
					</div>

					<p className="text-red-500 text-xl font-bold mt-8 mb-6 w-[500px] h-12 flex justify-center ittems-center">
						{errorMessage}
					</p>
					<div className="flex h-16 w-96 border border-cyan-600 rounded mb-3">
						<div className="absolute mt-4 ml-2">
							<Username></Username>
						</div>
						<input
							value={usernameSubmit}
							onChange={usernameSubmitHandler}
							type="text"
							className="flex h-full w-full border pl-12 border-cyan-600 rounded hover:bg-yellow-50"
							placeholder="User name"
						/>
					</div>
					<div className="flex h-16 w-96 border border-cyan-600 rounded mb-6">
						<div className="absolute mt-4 ml-2">
							<PasswordIcon></PasswordIcon>
						</div>
						<input
							onChange={passwordSubmitHandler}
							value={passwordSubmit}
							type={showPassword ? "text" : "password"}
							className="flex h-full w-full border pl-12 border-cyan-600 rounded  hover:bg-yellow-50"
							placeholder="Password"
						/>
						<div className="absolute justify-end mt-4 ml-80">
							<div onClick={setPassword}>
								{showPassword && <ShowPasswordIcon></ShowPasswordIcon>}
								{!showPassword && <HidePasswordIcon></HidePasswordIcon>}
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center h-16 w-96 border border-black bg-cyan-900 text-yellow-50 hover:bg-cyan-600 text-2xl cursor-pointer rounded-full mb-5">
						<button className="w-full h-full">Login</button>
					</div>
					<p className="flex justify-center text-blue-500 cursor-pointer">
						Create an account
					</p>
				</form>
			</div>
		</div>
	);
};
export default Login;
