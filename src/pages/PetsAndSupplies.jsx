import { useEffect, useRef, useState } from "react";
import ListingCard from './home/ListingCard';
import Loading from "./Loading";

export default function PetsAndSupplies() {
  const [category, setCategory] = useState("All");
  const [listing, setListing] = useState([]);
  const [page, setPage] = useState(1);
  const [hasPage, setHasPage] = useState(true);
  const loadingRef = useRef(null)

  const [searchTerm,setSearchTerm] = useState('')

  const fetchingData = async (pageNum =1,categoryValue = category,searchValue =searchTerm) => {
   
    const res = await fetch(`https://paw-mart-server-one.vercel.app/allList?page=${pageNum}&category=${categoryValue}&search=${searchValue}&limit=6`);
    const data = await res.json();
    if (data.data.length === 0) {
      setHasPage(false)
    } else {
     
      setListing(prev => pageNum ===1 ? data.data : [...prev,...data.data])
    }
  }
  useEffect(() => {

    const onIntersectionFn = (items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && hasPage) {
        setPage(prev =>prev+1)
      }
    }
    const observer = new IntersectionObserver(onIntersectionFn);
    if (observer && loadingRef.current) {
      observer.observe(loadingRef.current)
    }
    return ()=> observer.disconnect()
      
  }, [hasPage])
  

  useEffect(() =>{
    fetchingData(page)
  }, [page])
  

  useEffect(() => {
    setPage(1);
    setHasPage(true)
    fetchingData(1,category,searchTerm)
  },[category,searchTerm])
 


  const filtered = listing.filter(item => {
  const matchCategory = category === "All" || item.category === category;
  const matchSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase());
  return matchCategory && matchSearch;
});

  return (
    <section className="min-h-screen py-10 bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
      dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-emerald-700 dark:text-amber-400 mb-8 text-center">
          🐾 Pets & Supplies
        </h2>
        {/* search box  */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="🔍 Search pets or items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-96 px-4 py-2 border border-emerald-500 rounded-full focus:outline-none 
                      focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 bg-gray-500 dark:text-gray-100"
          />
        </div>

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
        {
          hasPage && <Loading ref={ loadingRef} />
        }
      </div>
    </section>
  );
}
