import { Link, NavLink } from "react-router-dom";
import Context from "../../Hooks/Contex";
import Swal from "sweetalert2";
import axios from "axios";
// import DisplayCustomToast from "../../Custom Toast/DisplayCustomToast";
import logo from "../../../public/images/1.png";

const Navbar = () => {
  const { user, logoutUser } = Context();

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        Swal.fire("Good job!", "Log out Successful", "success");
        axios
          .post(
            "https://luxe-next-server.vercel.app/logout",
            { email: user.email },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data));
      })
      .catch(() => {});
  };

  const ulLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " border-b border-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " border-b border-white" : ""
          }
        >
          Rooms
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/myBookings"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " border-b  border-white" : ""
            }
          >
            My Bookings
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " border-b border-white" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " border-b border-white" : ""
          }
        >
          About
        </NavLink>
      </li>
      <div className="navbar-end  md:hidden">
        <hr className="w-full border my-3" />
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
        ) : (
          <li>
            <Link to={"/login"}>
              <button className="btn btn-outline">Login</button>
            </Link>
          </li>
        )}
        {user && (
          <div className="avatar mx-3 online">
            <div className="w-10 h-10 rounded-full ">
              <img src={user.photoURL} />
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="navbar bg-opacity-25 bg-black xl:px-20 lg:px-5 absolute z-10">
      <div className="navbar-start  flex gap-3  items-center lg:gap-0">
        <div className="dropdown text-white">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {ulLinks}
          </ul>
        </div>
        <div className="flex items-center gap-3 mx-auto lg:mx-0">
          <img
            className="w-10 rounded-full"
            // src="https://i.ibb.co/rbRG54Z/download.png"
            src={logo}
            alt=""
          />
          <div className=" text-white">
            <h2 className="text-xl font-bold">LuxeNest</h2>
            <p className="text-sm">Luxury Hotel</p>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-white">
          {ulLinks}
        </ul>
      </div>

      <div className="navbar-end ">
        {user && (
          <div className="avatar mx-3 online">
            <div className="w-10 h-10 rounded-full ">
              <img src={user.photoURL} />
            </div>
          </div>
        )}
        {user ? (
          <li onClick={handleLogOut} className="btn btn-outline">
            Logout
          </li>
        ) : (
          <Link to={"/login"}>
            <li className="btn btn-outline border-white text-white">Login</li>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
