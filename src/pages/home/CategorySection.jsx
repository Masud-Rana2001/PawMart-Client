import { FaDog, FaBone, FaTshirt, FaCapsules } from "react-icons/fa";

import CategoryCard from "./CategoryCard";
import { categories } from "../../data/data";


export default function CategorySection() {
 


  return (
    <section className="py-16 bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
           dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-emerald-700 dark:text-amber-400 mb-10">
          🐾 Browse by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id }  category={cat}/>
          ))}
        </div>
      </div>
    </section>
  );
}
