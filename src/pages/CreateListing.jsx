import { useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from './../contexts/AuthContext';

export default function CreateListing() {
  const {currentUser} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: currentUser.email,
    category: "",
    price: "",
    location: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // এখানে backend এ POST পাঠাবে
    const res = await fetch("https://paw-mart-server-one.vercel.app/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessTokenForPawMart")}`
      },
      body: JSON.stringify(formData),
      
    });

    if (res.ok) {
      toast.success(" Listing created successfully!");
      setFormData({
        name: "",
        email: currentUser.email,
        category: "",
        price: "",
        location: "",
        image: "",
        description: "",
        date : ''
      });
    } else {
      toast.error("❌ Failed to create listing");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
      dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 
      p-4 transition-colors duration-300"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/90 dark:bg-gray-900/80 
        rounded-2xl shadow-2xl p-8 border border-cyan-200 
        dark:border-cyan-800 transition-all duration-300 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-sky-800 
        dark:text-cyan-300 mb-8 text-center">
          🐾 Create New Listing
        </h2>

        {/* Listing Name */}
        <div className="mb-5">
          <label className="block text-sky-700 dark:text-cyan-200 mb-2 font-semibold">
            Listing Name :
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter listing name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-300 dark:border-cyan-700 
            rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
            placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
            focus:ring-2 focus:ring-cyan-400 transition-all"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-sky-700 dark:text-cyan-200 mb-2 font-semibold">
            Email :
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter listing name"
            readOnly
            defaultValue={currentUser.email}
            className="w-full px-4 py-2 border border-sky-300 dark:border-cyan-700 
            rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
            placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
            focus:ring-2 focus:ring-cyan-400 transition-all"
            required
          />
        </div>

        {/* Category */}
       <div className="mb-5">
          <label className="block text-sky-700 dark:text-cyan-200 mb-2 font-semibold">
            Category :
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-400 dark:border-cyan-700 
              rounded-lg bg-white/50 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
              focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            required
          >
            <option className="bg-sky-800" value="">-- Select a Category --</option>
            <option className="bg-sky-800" value="Accessories">Accessories</option>
            <option className="bg-sky-800" value="Pets (Adoption)">Pets (Adoption)</option>
            <option className="bg-sky-800" value="Pet Food & Treats">Pet Food & Treats</option>
            <option className="bg-sky-800" value="Pet Health & Care">Pet Health & Care</option>
            <option className="bg-sky-800" value="Toys & Play">Toys & Play</option>
          </select>
        </div>


        {/* Price */}
        <div className="mb-5">
          <label className="block text-sky-700 dark:text-cyan-200 mb-2 font-semibold">
            Price :
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price in BDT"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-300 dark:border-cyan-700 
            rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
            placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
            focus:ring-2 focus:ring-cyan-400 transition-all"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-5">
          <label className="block text-sky-700 dark:text-cyan-200 mb-2 font-semibold">
            Location :
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-300 dark:border-cyan-700 
            rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
            placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
            focus:ring-2 focus:ring-cyan-400 transition-all"
          />
        </div>

        {/* Image URL */}
        <div className="mb-5">
          <label className="block text-sky-700 dark:text-cyan-200 mb-2 font-semibold">
            Image URL :
          </label>
          <input
            type="url"
            name="image"
            placeholder="https://example.com/image.jpg"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-300 dark:border-cyan-700 
            rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
            placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
            focus:ring-2 focus:ring-cyan-400 transition-all"
          />
        </div>
          <div>
            <label className="block text-sky-700 dark:text-cyan-200 mb-2 font-semibold">
                    Pick Up Date
                  </label>
                    <input
                    name="date"
                    type="date"
                    onChange={handleChange}
                    required
                    value={formData.date}
                    className="w-full px-4 py-2 border border-sky-300 dark:border-cyan-700 
            rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
            placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
            focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-sky-700 dark:text-cyan-200 mb-2 font-semibold">
            Description :
          </label>
          <textarea
            name="description"
            placeholder="Write short details about the listing..."
            value={formData.description}
            onChange={handleChange}
            className="w-full h-28 px-4 py-2 border border-sky-300 dark:border-cyan-700 
            rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
            placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
            focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 
          dark:hover:bg-cyan-400 text-white font-semibold py-2 rounded-lg 
          shadow-md hover:shadow-lg focus:ring-4 focus:ring-cyan-400 
          transition-all duration-300"
        >
          Create Listing
        </button>
      </form>
    </div>
  );
}
