import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import PlantContext from "../contexts/PlantContext";
import Loading from "../pages/Loading";

function PlantOfTheWeek() {
  const { plants } = useContext(PlantContext);
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    if (plants.length > 0) {
      const selectedPlant = plants[Math.floor(Math.random() * plants.length)];
      if (selectedPlant) setPlant(selectedPlant);
    }
  }, [plants]);

  if (!plant) {
   return <Loading></Loading>
    
  }

  return (


    <section
      className=" 
        py-16 px-6 
          shadow-lg text-center
        bg-gradient-to-t from-emerald-800 via-emerald-500 to-emerald-800
        dark:from-[#064e3b] dark:via-[#065f46] dark:to-[#0d9488]/30
        transition-colors duration-300 ease-in-out
      "
    >
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-500 mb-6">
        🌿 Plant of the Week
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Plant Image */}
        <img
          src={plant.image || "/default-plant.png"}
          alt={plant.plantName || "Plant of the Week"}
          className="
             md:w-1/2 h-[400px] w-8/12 mx-auto rounded-2xl shadow-md object-cover
            border border-emerald-200 dark:border-emerald-700/40
          "
        />

        {/* Plant Info */}
        <div className="text-left space-y-4 mx-auto md:w-1/2">
          <h3 className="text-2xl font-semibold text-emerald-900 dark:text-emerald-100">
            {plant.plantName}
          </h3>
          <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed">
            {plant.description || "No description available."}
          </p>
          <ul className="list-disc list-inside text-emerald-700 dark:text-emerald-200">
            {plant.careTips?.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>

          {/* Learn More Button */}
          <Link
            to={`/plants/${plant.plantId}`}
            className="
              inline-block mt-6 px-6 py-2 
              bg-emerald-600 hover:bg-emerald-700 
              text-white font-medium rounded-xl 
              shadow-md hover:shadow-lg 
              transition-all
            "
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
   
  );
}

export default PlantOfTheWeek;
