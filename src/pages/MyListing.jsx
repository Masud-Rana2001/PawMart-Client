import { useContext, useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import AuthContext from "../contexts/AuthContext";
import { Link } from 'react-router';
import MyNavlink from "../components/MyNavlink";
import Swal from "sweetalert2";

export default function MyListings() {
  const { currentUser } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const modalRef = useRef(null);

  // Fetch only user's listings
  useEffect(() => {
    if (!currentUser?.email) return;
    fetch(`http://localhost:3000/mylisting/${currentUser.email}`, {
      // headers: { authorization: `Bearer ${localStorage.getItem("accessTokenForPawMart")}` }
    })
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error("Error fetching listings:", err));
  }, [currentUser?.email]);

  // Delete
  const handleDelete = async (id) => {
      const result = await Swal.fire({
      title: "Are you sure you want to delete this listing?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      });
      if (!result.isConfirmed)   return
  
    try {
      const res = await fetch(`http://localhost:3000/listings/${id}`,
        {
          method: "DELETE",
          headers: { authorization: `Bearer ${localStorage.getItem("accessTokenForPawMart")}` }
        });
      const data = await res.json();
      if (data.success) {
        toast.success("Listing deleted successfully!");
        setListings(listings.filter((l) => l._id !== id));
      }
    } catch (error) {
      toast.error("Failed to delete listing");
    }
  };

  // Update submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      name: form.name.value,
      category: form.category.value,
      price: form.price.value,
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: new Date().toISOString().split("T")[0],
    };

    try {
      const res = await fetch(`http://localhost:3000/listings/${selectedListing._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Listing updated successfully!");
        setListings(
          listings.map((l) => (l._id === selectedListing._id ? { ...l, ...updatedData } : l))
        );
        modalRef.current.close();
      } else {
        toast.error("Failed to update listing");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
      dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950
      py-10 transition-colors duration-300"
    >
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between">

        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
          🐾 My Listings ({listings.length})
        </h2>
        <MyNavlink className="btn btn-primary" to="/createListing">Create a Listing</MyNavlink>
        </div>

        <div className="overflow-x-auto">
          <table
            className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg shadow-md 
            bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition"
          >
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {listings.length > 0 ? (
                listings.map((listing, index) => (
                  <tr
                    key={listing._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="py-3 px-4 text-center">{index + 1}</td>
                    <td className="py-3 px-4 text-blue-600 dark:text-blue-400 font-semibold">
                      {listing.name}
                    </td>
                    <td className="py-3 px-4">{listing.category}</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">
                      ৳ {listing.price}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => {
                          setSelectedListing(listing);
                          modalRef.current.showModal();
                        }}
                        className="px-3 py-1 border border-emerald-400 text-emerald-500 
                        rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition mr-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(listing._id)}
                        className="px-3 py-1 border border-red-400 text-red-500 
                        rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500 dark:text-gray-400">
                    No listings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 🔹 Update Modal */}
        <dialog id="update_modal" ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white dark:bg-gray-900 rounded-xl">
            <h3 className="text-2xl text-center font-bold mb-4 text-gray-800 dark:text-amber-300">
              ✏️ Update Listing
            </h3>

            {selectedListing && (
             <form onSubmit={handleUpdate} className="space-y-4 p-3">

            {/* Buyer Name (readonly) */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Buyer Name
              </label>
              <input
                value={currentUser.displayName}
                readOnly
                className="w-full mt-1 p-2 rounded-md border text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
              />
            </div>

            {/* Listing Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Listing Name
              </label>
              <input
                name="name"
                defaultValue={selectedListing.name}
                className="w-full mt-1 p-2 rounded-md border text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Listing Name"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Category
              </label>
              <input
                name="category"
                defaultValue={selectedListing.category}
                className="w-full mt-1 p-2 rounded-md border text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Category"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Price
              </label>
              <input
                name="price"
                type="number"
                defaultValue={selectedListing.price}
                className="w-full mt-1 p-2 rounded-md border text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Price"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Location
              </label>
              <input
                name="location"
                defaultValue={selectedListing.location}
                className="w-full mt-1 p-2 rounded-md border text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Location"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Image URL
              </label>
              <input
                name="image"
                defaultValue={selectedListing.image}
                className="w-full mt-1 p-2 rounded-md border text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Image URL"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={selectedListing.description}
                className="w-full mt-1 p-2 rounded-md border text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Description"
                rows="3"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => modalRef.current.close()}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:opacity-80"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:opacity-90"
              >
                Save Changes
              </button>
            </div>
            </form>

            )}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
