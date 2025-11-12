import { useContext } from "react";
import UserAvatar from "../assets/userAvater.png";
import AuthContext from "../contexts/AuthContext";

const MyProfile = () => {
  const { currentUser, profileUpdater } = useContext(AuthContext);

  // 🔄 Update Profile Handler
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    profileUpdater(name, photo);
    e.target.reset();
  };

  return (
    <section
      className="bg-gradient-to-r from-sky-400 via-cyan-500 to-sky-400
      dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950
      flex justify-center items-center p-8 min-h-screen transition-colors duration-500"
    >
      <div
        className="bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-3xl shadow-xl 
        border border-cyan-400/20 p-4 md:p-8 w-full md:w-10/12 max-w-5xl 
        mx-auto text-center flex flex-col md:flex-row justify-between transition-all duration-500"
      >
        {/* 🐾 Profile Info Section */}
        <div className="flex flex-col flex-1 items-center space-y-4">
          <img
            src={currentUser?.photoURL || UserAvatar}
            alt="User Avatar"
            className="w-40 h-40 rounded-full border-4 border-cyan-500 shadow-lg"
          />
          <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-300">
            {currentUser?.displayName || "User Name"}
          </h2>
          <p className="text-cyan-800/80 dark:text-cyan-100 text-lg">
            Email: {currentUser?.email}
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-cyan-300/30 mx-6"></div>
        <div className="md:hidden my-6 border-b border-cyan-300/30"></div>

        {/* ✨ Profile Update Form */}
        <div className="flex-1 md:px-10">
          <h3 className="text-xl font-semibold mb-4 text-cyan-700 dark:text-cyan-300">
            Update Profile
          </h3>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter new name"
              className="w-full px-4 py-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 
                border border-cyan-400/40 text-cyan-900 dark:text-white 
                focus:ring-2 focus:ring-cyan-400 outline-none transition-all"
            />
            <input
              type="text"
              name="photo"
              placeholder="Enter new photo URL"
              className="w-full px-4 py-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 
                border border-cyan-400/40 text-cyan-900 dark:text-white 
                focus:ring-2 focus:ring-cyan-400 outline-none transition-all"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 
                hover:from-sky-600 hover:via-cyan-600 hover:to-teal-600 
                text-white font-semibold py-2 rounded-xl transition-all duration-300 shadow-md"
            >
              Update Profile
            </button>
          </form>

          <p className="mt-6 text-sm text-cyan-700/70 dark:text-cyan-200/70">
            Last Login:{" "}
            {currentUser?.metadata?.lastSignInTime
              ? new Date(currentUser.metadata.lastSignInTime).toLocaleString()
              : "N/A"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
