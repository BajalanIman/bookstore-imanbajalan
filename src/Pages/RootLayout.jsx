import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const RootLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet></Outlet>
    </div>
  );
};
export default RootLayout;
