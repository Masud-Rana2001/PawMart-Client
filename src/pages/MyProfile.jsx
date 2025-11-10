import { useContext } from "react";


import AuthContext from './../contexts/AuthContext';
import UserAvater from '../assets/userAvater.png'

const MyProfile = () => {
  const { currentUser ,profileUpdater} = useContext(AuthContext);

  // updateProfile handler
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    profileUpdater(name,photo)
    e.target.reset()
  };

  


  return (
    <section className=" bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 text-white flex justify-center items-center p-8 min-h-screen">
      <div
        className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-emerald-400/20 p-4 md:p-8 md:w-10/12 mx-auto text-center  flex justify-between flex-col md:flex-row"
      >
       
       

       
        <div className="flex flex-col flex-1  items-center space-y-4">
          <img
            src={ currentUser?.photoURL || '/userAvater.png'}
            alt="User Avatar"
            className="w-40 h-40 rounded-full border-4 border-emerald-500 shadow-lg"
          />
          <h2 className="text-3xl font-bold text-emerald-300">
            {currentUser?.displayName || "User Name"}
          </h2>
          <p className="text-green-100 text-lg">Email : {currentUser?.email}</p>
          </div>
          
      <div className="my-6  border "/>
        
        <div className="flex-1 md:px-10 ">

       
        <h3 className="text-xl font-semibold mb-4 text-emerald-200">
          Update Profile 🌿
        </h3>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter new name"
            className="w-full px-4 py-2 rounded-xl bg-green-950/40 border border-emerald-500/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
          />
          <input
            type="text"
            name="photo"
            placeholder="Enter new photo URL"
            className="w-full px-4 py-2 rounded-xl bg-green-950/40 border border-emerald-500/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-xl transition-all duration-300 shadow-md"
          >
            Update Profile
          </button>
        </form>

        <p className="mt-6 text-sm text-green-200/70">
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
