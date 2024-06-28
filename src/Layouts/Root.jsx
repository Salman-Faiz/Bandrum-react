import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";


const Root = () => {
    return (
        <div className="bg-gradient-to-r from-violet-300 to-red-200 pb-72">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;