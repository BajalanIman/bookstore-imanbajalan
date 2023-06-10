import { useState } from "react";

import NavigationBar from "./Pages/NavigationBar";
import Body from "./Pages/Body"

// import CreateAccount from "./Pages/CreateAccount";
//import Login from "./Pages/Login";

function App() {
	

	return (
		<div className="flex flex-col bg-white text-xl w-full h-screen">
			<NavigationBar/>
			<Body/>
			<div>
				{/*<Login></Login> */}
				{/* <CreateAccount></CreateAccount> */}
			</div>
		</div>
	);
}

export default App;
