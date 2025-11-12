
import { Link } from 'react-router';
import { FaMapMarkerAlt, FaTag, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';


const ListingCard = ({ listing }) => {
    const [isFav,setIsFav] = useState(false)
    // ক্যাটাগরি "Pets (Adoption)" হলে দাম 0 হবে, অন্যথায় সংখ্যা
    const isAdoption = listing.category === "Pets (Adoption)";
    const priceDisplay = isAdoption ? "Free for Adoption" : `BDT ${listing.price}`;


    const handleaddToFav = async () => {
         const token = localStorage.getItem("accessTokenForPawMart");

        const res = await fetch(`http://localhost:3000/fav`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ listingId: listing._id }),
        });

            const data = await res.json();
            console.log(data)
            if (data.success) {
                toast.success("Added to favorites!");
                setIsFav(true);
            } else {
                toast.error(data.message);
                console.log(data)
            }
};


    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden 
                        border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={listing.image} 
                    alt={listing.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    loading="lazy" // ইমেজ লোডিং অপটিমাইজেশন
                />
                {/* Optional: Wishlist/Favorite Icon */}
                <button onClick={handleaddToFav}
                    className={`absolute top-3 right-3 bg-white dark:bg-gray-900 rounded-full p-2 text-gray-500 dark:text-gray-300 
                               hover:text-red-500 ${isFav && 'text-red-500'} hover:scale-110 transition-transform duration-200 shadow-md`}
                    aria-label="Add to favorites"
                >
                    <FaHeart size={18} />
                </button>
            </div>
            
            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2" title={listing.name}>
                    {listing.name}
                </h3>
                
                {/* Category & Location */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-sm mt-1 mb-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center">
                        <FaTag className="mr-1 text-xs" /> {listing.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-xs" /> {listing.location}
                    </span>
                </div>

                {/* Description Snippet (Optional - for more compact cards, you might skip this) */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
                    {listing.description}
                </p>

                {/* Price */}
                <p className={`text-xl font-extrabold ${isAdoption ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'} mt-auto mb-4`}>
                    {priceDisplay}
                </p>

                {/* Details Button */}
                <Link 
                   to={`/pets-and-supplies/${listing._id}`} 
                    className="block w-full text-center py-2.5 px-4 bg-indigo-600 text-white font-semibold rounded-full 
                               hover:bg-indigo-700 transition duration-300 shadow-md transform hover:scale-[1.01]"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default ListingCard;