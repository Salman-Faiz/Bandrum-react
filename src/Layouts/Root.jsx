import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";


const Root = () => {
    return (
        <div className="bg-gradient-to-r from-violet-300 to-red-200 pb-72 relative">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;