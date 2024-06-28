import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
    <li className="text-orange-700 font-semibold"><NavLink to={'/'}>Home</NavLink></li>
   
    <li className="text-orange-700 font-semibold"><NavLink to={'/about'}>About</NavLink></li>
  
   
    </>
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold text-amber-500">Bandrum Music</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
               <Link to={'/register'} className="btn bg-gradient-to-r from-red-300 to-violet-200 text-orange-600">Register</Link>
                <Link to={'/login'} className="btn bg-gradient-to-r from-violet-200 to-red-300 text-orange-600">Login</Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;