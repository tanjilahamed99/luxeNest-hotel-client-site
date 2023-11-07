import { Link, NavLink } from "react-router-dom";
import Context from "../../Hooks/Contex";
import Swal from "sweetalert2";
import axios from "axios";

const Navbar = () => {

    const { user, logoutUser } = Context()

    const handleLogOut = () => {
        logoutUser()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Log out Successful',
                    'success'
                )
                axios.post('http://localhost:5000/logout', { email: user.email }, { withCredentials: true })
                    .then(res => console.log(res.data))
            })
            .catch(() => {

            })
    }

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
                to="/rooms"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-800" : ""
                }
            >
                Rooms
            </NavLink>
        </li>
        {
            user && <li>
                <NavLink
                    to="/myBookings"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-amber-800" : ""
                    }
                >
                    My Bookings
                </NavLink>
            </li>
        }
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
            {
                user ? <button onClick={handleLogOut} className="btn">Logout</button> : <li ><Link to={'/login'}><button className="btn btn-outline">Login</button></Link></li>
            }
            {
                user && <div className="avatar mx-3 online">
                    <div className="w-10 h-10 rounded-full ">
                        <img src={user.photoURL} />
                    </div>
                </div>
            }
        </div>
    </>

    return (
        <div className="navbar bg-base-100 lg:px-20">
            <div className="navbar-start  flex  items-center gap-20 lg:gap-0 ">
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
                <div className="flex items-center gap-3 mx-auto lg:mx-0">
                    <img className="md:w-20 w-10" src="https://i.ibb.co/rbRG54Z/download.png" alt="" />
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
            <div className="navbar-end">
                {
                    user && <div className="avatar mx-3 online hidden md:flex">
                        <div className="w-10 h-10 rounded-full ">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                }
                {
                    user ? <a onClick={handleLogOut} className="btn btn-outline hidden md:flex">Logout</a> : <Link to={'/login'}><a className="btn btn-outline hidden md:flex">Login</a></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;