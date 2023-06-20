import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import NameIcon from "../Components/LoginComponents/NameIcon";
import FamilyNameIcon from "../Components/LoginComponents/FamilyNameIcon";
import EmailIcon from "../Components/LoginComponents/EmailIcon";
import PasswordIcon, {
  ShowPasswordIcon,
  HidePasswordIcon,
} from "../Components/LoginComponents/PasswordIcon";

const CreateAccount = () => {
  const navigate = useNavigate();
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
    // console.log(setNameSubmit);
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

    if (nameSubmit && passwordSubmit) {
      setNameSubmit("");
      setFamilySubmit("");
      setEmailSubmit("");
      setPasswordSubmit("");
      navigate("/");
    } else {
      setErrorMessage("Name and password are necesary!");

      setTimeout(() => {
        setErrorMessage();
      }, 2000);
    }

    // }
  }

  return (
    <div className="flex justify-center items-center dark:bg-gray-800">
      <form className=" flex flex-col justify-center items-center border shadow-xl shadow-slate-500 sm:mt-10 pb-6 rounded w-10/12 sm:w-96 mt-6">
        <div className=" flex w-full justify-end items-end pt-4 pr-6">
          <Link to="/">
            <span className=" cursor-pointer text-2xl">&#x2715;</span>
          </Link>
        </div>
        <p className="text-red-500 text-sm font-bold h-8 w-full flex justify-center ittems-center">
          {errorMessage}
        </p>
        <div className="flex h-12 sm:w-80 border border-cyan-600 rounded mb-2">
          <div className="absolute mt-2 ml-2">
            <NameIcon></NameIcon>
          </div>
          <input
            value={nameSubmit}
            onChange={nameSubmitHandler}
            type="text"
            className="flex h-full w-full border pl-12 border-cyan-600 rounded hover:bg-yellow-50 text-base"
            placeholder="Name"
          />
        </div>
        <div className="flex h-12 sm:w-80 border border-cyan-600 rounded mb-2">
          <div className="absolute mt-2 ml-2">
            <FamilyNameIcon></FamilyNameIcon>
          </div>
          <input
            value={familySubmit}
            onChange={familySubmitHandler}
            type="text"
            className="flex h-full w-full border pl-12 border-cyan-600 rounded  hover:bg-yellow-50 text-base"
            placeholder="Family name"
          />
        </div>
        <div className="flex h-12 sm:w-80 border border-cyan-600 rounded mb-2">
          <div className="absolute mt-2 ml-2">
            <EmailIcon></EmailIcon>
          </div>
          <input
            value={emailSubmit}
            onChange={emailSubmitHandler}
            type="text"
            className="flex h-full w-full border pl-12 border-cyan-600 rounded  hover:bg-yellow-50 text-base"
            placeholder="Email Address"
          />
        </div>
        <div className="flex h-12 sm:w-80 border border-cyan-600 rounded mb-2">
          <div className="absolute mt-2 ml-2">
            <PasswordIcon></PasswordIcon>
          </div>
          <input
            onChange={passwordSubmitHandler}
            value={passwordSubmit}
            type={showPassword ? "text" : "password"}
            className="flex h-full w-full border pl-12 border-cyan-600 rounded  hover:bg-yellow-50 text-base"
            placeholder="Password"
          />
          <div className="absolute justify-end mt-2 ml-48 sm:ml-64">
            <div onClick={setPassword}>
              {showPassword && <ShowPasswordIcon></ShowPasswordIcon>}
              {!showPassword && <HidePasswordIcon></HidePasswordIcon>}
            </div>
          </div>
        </div>

        {/* Address */}
        {/* <div className="flex gap-2">
          <div className="flex h-16 w-32 border border-cyan-600 rounded mb-6">
            <input
              type="textarea"
              className="flex h-full w-full pl-1 border border-cyan-600 rounded  hover:bg-yellow-50"
              placeholder="postal code"
            />
          </div>
          <div className="flex h-16 w-28 border border-cyan-600 rounded mb-6">
            <input
              type="textarea"
              className="flex h-full w-full pl-3 border border-cyan-600 rounded  hover:bg-yellow-50"
              placeholder="City"
            />
          </div>
          <div className="flex h-16 w-32 border border-cyan-600 rounded mb-6">
            <input
              type="textarea"
              className="flex h-full w-full pl-3 border border-cyan-600 rounded  hover:bg-yellow-50"
              placeholder="Country"
            />
          </div>
        </div> */}
        <div className="flex h-28 sm:h-28 sm:w-80 border border-cyan-600 rounded mb-6">
          <input
            type="textarea"
            className="flex h-full w-full border pl-12 border-cyan-600 rounded  hover:bg-yellow-50 text-base"
            placeholder="Address"
          />
        </div>

        <div className="flex justify-center items-center h-12 sm:w-80 w-60 border border-black bg-cyan-900 text-yellow-50 hover:bg-cyan-600 text-2xl cursor-pointer rounded-full mb-3">
          <button onClick={sumitLoginForm} className="w-full h-full text-base">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateAccount;
