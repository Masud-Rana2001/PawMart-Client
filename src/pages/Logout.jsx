import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function LogoutCard() {
  const { currentUser, logout } = useContext(AuthContext);
  if (!currentUser) return null;

  return (
    <div
      className="
        min-w-[230px] mx-auto 
        bg-gradient-to-br from-sky-100 via-teal-100 to-cyan-100 
        dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950
        rounded-2xl shadow-xl p-5 md:p-6 text-center 
        border border-sky-300/40 dark:border-sky-700/60
        transition-colors duration-300 backdrop-blur-md
      "
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={currentUser.photoURL || "/userAvater.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-sky-400 dark:border-sky-600 shadow-md object-cover"
        />
      </div>

      {/* User Info */}
      <h2 className="text-xl font-semibold text-sky-900 dark:text-sky-100 mb-1">
        {currentUser.displayName || "User"} 👋
      </h2>
      <p className="text-sky-700 dark:text-sky-300 text-sm mb-3">
        {currentUser.email}
      </p>

      {/* Manage Account */}
      <button
        onClick={() => window.open("https://myaccount.google.com/", "_blank")}
        className="
          text-sky-700 dark:text-sky-300 
          text-sm hover:underline mb-4
        "
      >
        Manage your Google Account
      </button>

      <div className="border-t border-sky-400/50 dark:border-sky-600/50 my-3"></div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="
          w-full bg-sky-500 hover:bg-sky-600 
          dark:bg-sky-600 dark:hover:bg-sky-500
          text-white py-2 rounded-xl 
          transition-all duration-300 shadow-md font-medium
        "
      >
        Sign Out
      </button>

      {/* Footer */}
      <div className="text-xs text-sky-800 dark:text-sky-300 mt-4">
        <p>Privacy Policy • Terms of Service</p>
      </div>
    </div>
  );
}
