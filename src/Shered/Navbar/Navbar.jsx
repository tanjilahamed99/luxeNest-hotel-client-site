import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const ulLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-800" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-800" : ""
                }
            >
                Rooms
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-800" : ""
                }
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-800" : ""
                }
            >
                Contacts
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-800" : ""
                }
            >
                Gallery
            </NavLink>
        </li>
        <div className="navbar-end  md:hidden">
            <a className="btn btn-outline">Login</a>
        </div>
    </>


    return (
        <div className="navbar bg-base-100 px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLinks
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-20" src="https://i.ibb.co/rbRG54Z/download.png" alt="" />
                    <div className="">
                        <h2 className="text-2xl font-bold">LuxeNest</h2>
                        <p>Luxury Hotel</p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {
                        ulLinks
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                <Link to={'/login'}><a className="btn btn-outline hidden md:flex">Login</a></Link>
            </div>
        </div>
    );
};

export default Navbar;