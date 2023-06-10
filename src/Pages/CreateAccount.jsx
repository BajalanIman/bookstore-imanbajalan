import { useState } from "react";
import NameIcon from "../Components/LoginComponents/NameIcon";
import FamilyNameIcon from "../Components/LoginComponents/FamilyNameIcon";
import EmailIcon from "../Components/LoginComponents/EmailIcon";
import PasswordIcon, {
	ShowPasswordIcon,
	HidePasswordIcon,
} from "../Components/LoginComponents/PasswordIcon";

const CreateAccount = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const setPassword = () => {
		setShowPassword(!showPassword);
	};

	const [nameSubmit, setNameSubmit] = useState("");
	const [familySubmit, setFamilySubmit] = useState("");
	const [emailSubmit, setEmailSubmit] = useState("");
	const [passwordSubmit, setPasswordSubmit] = useState("");

	let name = "";
	let family = "";
	let email = "";
	let Password = "";
	// let setFamilySubmit = "";
	// let setEmailSubmit = "";
	// let setPasswordSubmit = "";
	var lowerCase = /[a-z]/g;
	var upperCase = /[A-Z]/g;
	var numbers = /[0-9]/g;

	const nameSubmitHandler = (event) => {
		setNameSubmit(event.target.value);
		console.log(setNameSubmit);
	};

	const familySubmitHandler = (event) => {
		setFamilySubmit(event.target.value);
	};

	const emailSubmitHandler = (event) => {
		setEmailSubmit(event.target.value);
	};

	const passwordSubmitHandler = (event) => {
		setPasswordSubmit(event.target.value);
	};

	function sumitLoginForm(e) {
		e.preventDefault();
		// if (!setEmailSubmit.includes("@")) {
		// 	setErrorMessage("Email is not correct!");
		// 	setTimeout(() => {
		// 		setErrorMessage();
		// 	}, 5000);
		// } else {
		// 	console.log(2);
		// }
		// if (setPasswordSubmit.length < 8) {
		// 	setErrorMessage("Password should be more than 8 character!");
		// } else if (
		// 	!setPasswordSubmit.match(lowerCase) ||
		// 	!setPasswordSubmit.match(upperCase) ||
		// 	!setPasswordSubmit.match(numbers)
		// ) {
		// 	setErrorMessage(
		// 		"Password should be including number, lowercase and uppercase letters!"
		// 	);
		// } else {
			name = setNameSubmit;
			family = setFamilySubmit;
			email = setEmailSubmit;
			Password = setPasswordSubmit;

			localStorage.setItem("Name", name);
			localStorage.setItem("Family", family);
			localStorage.setItem("Email", email);
			localStorage.setItem("Password", Password);
			setNameSubmit("");
			setFamilySubmit("");
			setEmailSubmit("");
			setPasswordSubmit("");
		// }
	}

	return (
		<form className="mb-96 mt-96 relative" onSubmit={sumitLoginForm}>
			<p className="text-red-500 text-2xl font-bold pb-3 mb-6 w-[500px] h-12 flex justify-center ittems-center">
				{errorMessage}
			</p>
			<div className="flex h-16 w-96 border border-cyan-600 rounded mb-3">
				<div className="absolute mt-4 ml-2">
					<NameIcon></NameIcon>
				</div>
				<input
					value={nameSubmit}
					onChange={nameSubmitHandler}
					type="text"
					className="flex h-full w-full border pl-12 border-cyan-600 rounded hover:bg-yellow-50"
					placeholder="Name"
				/>
			</div>
			<div className="flex h-16 w-96 border border-cyan-600 rounded mb-3">
				<div className="absolute mt-4 ml-2">
					<FamilyNameIcon></FamilyNameIcon>
				</div>
				<input
					value={familySubmit}
					onChange={familySubmitHandler}
					type="text"
					className="flex h-full w-full border pl-12 border-cyan-600 rounded  hover:bg-yellow-50"
					placeholder="Family name"
				/>
			</div>
			<div className="flex h-16 w-96 border border-cyan-600 rounded mb-3">
				<div className="absolute mt-4 ml-2">
					<EmailIcon></EmailIcon>
				</div>
				<input
					value={emailSubmit}
					onChange={emailSubmitHandler}
					type="text"
					className="flex h-full w-full border pl-12 border-cyan-600 rounded  hover:bg-yellow-50"
					placeholder="Email Address"
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
				<button className="w-full h-full">Create Account</button>
			</div>
		</form>
	);
};
export default CreateAccount;
