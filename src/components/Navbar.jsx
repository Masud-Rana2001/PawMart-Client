import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/logo.png";
import LogoutCard from "../pages/Logout";
import AuthContext from "./../contexts/AuthContext";
import MyNavlink from "./MyNavlink";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const dropDownRef = useRef(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpenLogout(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300">
      <div
        className="
          mx-auto px-4 md:px-8 flex items-center justify-between h-16
          bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400
          dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950
          shadow-md transition-colors duration-300
        "
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-14 rounded-full border-2 border-cyan-400 shadow-md"
            src={`https://i.ibb.co.com/7NRGyQ9T/Screenshot-2025-11-09-180702.png`}
            alt="logo"
          />
          <span className="text-3xl font-semibold text-sky-900 dark:text-cyan-100 tracking-wide">
            PawMart
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/pets-and-supplies", label: "Pet & Supplies" },
            { to: "/myorders", label: "My Orders" },
            { to: "/mylisting", label: "My Listing" },
             
            { to: "/contact", label: "Contact" },
            { to: "/privacypolicy", label: "Privacy Policy" },
          ].map((item) => (
            <MyNavlink
              key={item.to}
              to={item.to}
              className="text-sky-900 dark:text-cyan-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium"
            >
              {item.label}
            </MyNavlink>
          ))}
        </nav>

        {/* User / Auth Buttons */}
        {currentUser ? (
          <div className="relative group" ref={dropDownRef}>
            <div
              onClick={() => setOpenLogout(!openLogout)}
              className="w-12 h-12 cursor-pointer md:border rounded-full border-cyan-300 dark:border-cyan-700 hover:scale-105 transition-transform"
            >
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={currentUser?.photoURL || "/userAvater.png"}
                alt="user"
              />
            </div>

            {/* Tooltip */}
            <div className="absolute -left-10 transform -translate-x-1/2 -bottom-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-100/90 dark:bg-sky-950/90 text-sky-900 dark:text-cyan-100 text-sm rounded-lg px-3 py-2 shadow-lg pointer-events-none z-50">
              <p className="font-semibold">{currentUser.displayName}</p>
              <p className="text-sky-700 dark:text-cyan-400 text-xs">
                {currentUser.email}
              </p>
            </div>

            {/* Logout Dropdown */}
            {openLogout && (
              <div
                className="
                  absolute right-0 top-14 z-50 rounded-2xl flex items-center justify-center
                  bg-gradient-to-br from-sky-200 via-cyan-200 to-sky-300
                  dark:from-sky-900 dark:via-cyan-950 dark:to-sky-950
                  shadow-lg border border-cyan-300/40 dark:border-cyan-800/60 p-3
                  transition-colors duration-300
                "
              >
                <LogoutCard />
              </div>
            )}
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            <MyNavlink
              to="/auth/signin"
              className="text-sm text-sky-800 dark:text-cyan-100 border border-sky-700 dark:border-cyan-600 px-3 py-1.5 rounded-md hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-700 transition"
            >
              Sign In
            </MyNavlink>
            <MyNavlink
              to="/auth/signup"
              className="text-sm bg-cyan-600 text-white px-3 py-1.5 rounded-md hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 transition"
            >
              Sign Up
            </MyNavlink>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-sky-900 dark:text-cyan-100 hover:bg-sky-200 dark:hover:bg-sky-800 transition"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-300 dark:from-sky-950 dark:via-cyan-950 dark:to-sky-950 border-t border-cyan-300 dark:border-cyan-800 backdrop-blur-sm transition-colors duration-300">
          <div className="flex flex-col space-y-2 px-4 py-3">
            {[
              { to: "/", label: "Home" },
              { to: "/pets-and-supplies", label: "Pet & Supplies" },
              { to: "/myorders", label: "My Orders" },
              { to: "/contact", label: "Contact" },
              { to: "/mylisting", label: "My Listing" },
              
              { to: "/privacypolicy", label: "Privacy Policy" },
            ].map((item) => (
              <MyNavlink
                key={item.to}
                onClick={() => setMenuOpen(false)}
                to={item.to}
                className="block py-2 rounded px-2 text-sky-900 dark:text-cyan-100 hover:bg-cyan-300 dark:hover:bg-sky-800 transition"
              >
                {item.label}
              </MyNavlink>
            ))}
            <div className="pt-3 border-t border-cyan-400 dark:border-cyan-800">
              <MyNavlink
                to="/auth/signin"
                className="block text-sky-900 dark:text-cyan-100 border border-sky-700 dark:border-cyan-600 text-center rounded-md py-1.5 hover:bg-cyan-400 dark:hover:bg-sky-800 transition"
              >
                Sign In
              </MyNavlink>
              <MyNavlink
                to="/auth/signup"
                className="block bg-cyan-600 text-white text-center rounded-md py-1.5 mt-2 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 transition"
              >
                Sign Up
              </MyNavlink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
