import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Username from "../Components/LoginComponents/Username";
import PasswordIcon, {
  ShowPasswordIcon,
  HidePasswordIcon,
} from "../Components/LoginComponents/PasswordIcon";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [usernameSubmit, setUsernameSubmit] = useState();
  const [passwordSubmit, setPasswordSubmit] = useState();

  const setPassword = () => {
    setShowPassword(!showPassword);
  };

  const usernameSubmitHandler = (event) => {
    setUsernameSubmit(event.target.value);
  };

  const passwordSubmitHandler = (event) => {
    setPasswordSubmit(event.target.value);
  };

  function sumitLoginForm(e) {
    e.preventDefault();
    if (usernameSubmit !== "admin") {
      setErrorMessage("Username is not correct!");
      setTimeout(() => {
        setErrorMessage();
      }, 3000);
    } else if (passwordSubmit !== "123456") {
      setErrorMessage("Password is not correct!");
      setTimeout(() => {
        setErrorMessage();
      }, 3000);
    } else {
      localStorage.setItem("name", "admin");
      localStorage.setItem("Password", "123456");
      setUsernameSubmit("");
      setPasswordSubmit("");
      navigate("/");
    }
  }

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-white dark:bg-gray-800 sm:pb-24">
      <div className="flex justify-center items-center sm:w-[300-px] sm:h-[800px] bg-white dark:bg-gray-800 p-8">
        <form
          className=" relative flex flex-col justify-center items-center border rounded pb-8 shadow-lg shadow-gray-400 w-80 sm:w-96 dark:bg-gray-800"
          onSubmit={sumitLoginForm}
        >
          <div className=" flex w-full justify-end items-end pt-4 pr-6">
            <Link to="/">
              <span className=" cursor-pointer text-3xl">&#x2715;</span>
            </Link>
          </div>
          <div className="w-44 h-44 rounded-full mt-6 flex justify-center items-center border shadow-lg text-gray-400 shadow-gray-400 dark:bg-white">
            <img
              className="w-38 rounded-full m-0 p-0"
              src="../public/Logo-2.PNG"
              alt=""
            />
          </div>

          <p className="text-red-500 text-xl font-bold mt-8 mb-6 w-[500px] h-12 flex justify-center ittems-center">
            {errorMessage}
          </p>
          <div className="flex  h-14 sm:h-16 sm:w-80 border border-cyan-600 rounded mb-3">
            <div className="absolute mt-4 ml-2">
              <Username></Username>
            </div>
            <input
              value={usernameSubmit}
              onChange={usernameSubmitHandler}
              type="text"
              className="flex h-full w-full border pl-12 border-cyan-600 rounded hover:bg-yellow-50 dark:bg-gray-300  text-black"
              placeholder="User name"
            />
          </div>
          <div className="flex h-14 sm:h-16 sm:w-80 border border-cyan-600 rounded mb-6 ">
            <div className="absolute mt-4 ml-2">
              <PasswordIcon></PasswordIcon>
            </div>
            <input
              onChange={passwordSubmitHandler}
              value={passwordSubmit}
              type={showPassword ? "text" : "password"}
              className="flex h-full w-full border pl-12 border-cyan-600 rounded  hover:bg-yellow-50 dark:bg-gray-300 text-black"
              placeholder="Password"
            />
            <div className="absolute justify-end mt-4 ml-60 sm:ml-64">
              <div onClick={setPassword}>
                {showPassword && <ShowPasswordIcon></ShowPasswordIcon>}
                {!showPassword && <HidePasswordIcon></HidePasswordIcon>}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  h-14 sm:h-16 sm:w-80 w-72 border border-black bg-cyan-900 text-yellow-50 hover:bg-cyan-600 text-2xl cursor-pointer rounded-full mb-5">
            <button className="w-full h-full">Login</button>
          </div>
          <Link to="/createaccount">
            <span className="flex justify-center text-blue-500 cursor-pointer dark:bg-gray-800">
              {" "}
              Create an account
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
