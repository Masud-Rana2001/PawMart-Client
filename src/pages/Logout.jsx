import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function LogoutCard() {
  const { currentUser, logout } = useContext(AuthContext);
  if (!currentUser) return null;

  return (
    <div
      className="
        min-w-[230px] mx-auto 
        bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 
        dark:from-emerald-900 dark:via-emerald-950 dark:to-cyan-950
        rounded-2xl shadow-xl p-5 md:p-6 text-center 
        border border-emerald-300/40 dark:border-emerald-700/60
        transition-colors duration-300 backdrop-blur-md
      "
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={currentUser.photoURL || "/userAvater.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-emerald-400 dark:border-emerald-600 shadow-md object-cover"
        />
      </div>

      {/* User Info */}
      <h2 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100 mb-1">
        {currentUser.displayName || "User"} 👋
      </h2>
      <p className="text-emerald-700 dark:text-emerald-300 text-sm mb-3">
        {currentUser.email}
      </p>

      {/* Manage Account */}
      <button
        onClick={() => window.open("https://myaccount.google.com/", "_blank")}
        className="
          text-emerald-700 dark:text-emerald-300 
          text-sm hover:underline mb-4
        "
      >
        Manage your Google Account
      </button>

      <div className="border-t border-emerald-400/50 dark:border-emerald-600/50 my-3"></div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="
          w-full bg-emerald-500 hover:bg-emerald-600 
          dark:bg-emerald-600 dark:hover:bg-emerald-500
          text-white py-2 rounded-xl 
          transition-all duration-300 shadow-md font-medium
        "
      >
        Sign Out
      </button>

      {/* Footer */}
      <div className="text-xs text-emerald-800 dark:text-emerald-300 mt-4">
        <p>Privacy Policy • Terms of Service</p>
      </div>
    </div>
  );
}
