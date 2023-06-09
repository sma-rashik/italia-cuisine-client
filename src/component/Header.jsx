import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);
  const handleLogOut = () => {
    logOut();
  };

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <div>
      <div className="navbar pl-10 pr-10 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/" className={isActiveRoute("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={isActiveRoute("/blog") ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case text-xl hover:underline hover:text-2xl hover:text-purple-700"
          >
            Cucina d'Italia
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className={isActiveRoute("/") ? "active" : ""} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={isActiveRoute("/blog") ? "active" : ""}
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                    />
                  ) : (
                    <img src="https://i.ibb.co/zRCMzv0/download.jpg" alt="" />
                  )}
                </div>
              </div>
              <Link onClick={handleLogOut} className="btn ml-4">
                Log Out
              </Link>
            </div>
          ) : (
            <div>
              <Link className="btn btn-link mr-5" to="/login">
                Sign In
              </Link>{" "}
              <Link className="btn btn-link mr-5" to="/register">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
