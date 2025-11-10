import { useState,useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ListingCard from './home/ListingCard';

export default function PetsAndSupplies() {
  const [category, setCategory] = useState("All");
  const [listing, setListing] = useState([]);

  useEffect(() => {
    fetch('/listing.json')
      .then(res => res.json())
      .then(data => setListing(data))
  },[])


  const filtered = category === "All" ? listing : listing.filter(p => p.category === category);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-emerald-700 dark:text-amber-400 mb-8 text-center">
          🐾 Pets & Supplies
        </h2>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All","Accessories", "Pets (Adoption)", "Pet Food & Treats", "Pet Health & Care", "Toys & Play"].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition 
                ${category === cat
                  ? "bg-emerald-600 text-white dark:bg-amber-400 dark:text-gray-900"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <ListingCard key={item._id} listing={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
