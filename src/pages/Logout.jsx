import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function LogoutCard() {
  const { currentUser, logout } = useContext(AuthContext);
  if (!currentUser) return null;


  return (
    <div
       
      className="min-w-[220px] mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-4 md:p-6 text-center border border-white/20 ">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
         
          src={currentUser.photoURL ||  "/userAvater.png" }
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-emerald-400 shadow-lg object-cover"
        />
      </div>

      {/* User Info */}
      <h2 className="text-2xl font-semibold text-white mb-1">
        {currentUser.displayName || "User"} 👋
      </h2>
      <p className="text-emerald-200 text-sm mb-4">
        {currentUser.email}
      </p>

      {/* Manage Account */}
      <button
        onClick={() => window.open("https://myaccount.google.com/", "_blank")}
        className="text-emerald-300 text-sm hover:underline mb-6"
      >
        Manage your Google Account
      </button>

      <div className="border-t border-emerald-400 my-2"></div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="w-full bg-emerald-400 hover:bg-emerald-700 text-white py-2 rounded-xl transition-all duration-300 shadow-md"
      >
        Sign Out
      </button>

      {/* Footer */}
      <div className="text-xs text-emerald-200 mt-4">
        <p>Privacy Policy • Terms of Service</p>
      </div>
    </div>
  );
}
