import { useEffect, useState } from 'react';
import ListingCard from './ListingCard';

function RecentListing() {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    fetch('https://paw-mart-server-one.vercel.app/allListing')
      .then(res => res.json())
      .then(data => setListing(data.data))
  },[])
  const latestListings = listing.slice(4, 10);

  console.log(latestListings)

  return (
    <section className="py-16 bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
           dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 transition-colors duration-300" >
      <div className="w-11/12 mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-emerald-700 dark:text-amber-400 mb-10">
          🦜  New Arrivals & Available Pets
        </h2>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {latestListings.map((listing) => (
                        <ListingCard key={listing._id} listing={listing} />
                    ))}
        </div>
        </div>
    </section>
  )
}

export default RecentListing