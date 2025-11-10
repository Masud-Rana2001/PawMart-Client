import { useContext } from 'react';
import PlantContext from '../contexts/PlantContext';
import PlantCard from './PlantCard';

function IndorPlantsSection() {
  const { plants } = useContext(PlantContext);

  return (
    <section className="relative">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-[url('/hero-slider2.webp')] opacity-10 bg-cover bg-center blur-sm"></div>

      {/* Gradient Overlay */}
      <div className="relative py-20 inset-0 
       bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
           dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950
        transition-colors duration-300 ease-in-out">

        <div className="px-6 w-11/12 mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-50 text-center mb-10">
            🌿 Top Rated Indoor Plants
          </h2>

          {/* Plant Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {plants.map((plant, index) => (
              <PlantCard key={index} plant={plant} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndorPlantsSection;
