import React from 'react'
import { Link } from 'react-router';

function PlantCard({plant}) {
  return (
    <div
              key={plant.plantId}
              className="bg-gradient-to-br overflow-hidden from-green-900/80 via-emerald-800/70 to-green-700/60 backdrop-blur-md border border-emerald-500/20 transition-all duration-300   rounded-2xl hover:border-2 hover:border-amber-200/50 "
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-48 object-cover   mb-3 transition-transform duration-500  hover:scale-110 shadow-lg"
              />
            <div className="px-2 pb-3">
        
             
              <h3 className="text-2xl font-semibold text-emerald-50 ">
                {plant.plantName}
              </h3>

              <p className="text-emerald-50 text-sm mb-2">{plant.category}</p>

              <div className="flex justify-between items-center mb-3">
                <span className="text-emerald-50 font-bold">
                  ${plant.price}
                </span>
                <span className="text-yellow-500">⭐ {plant.rating}</span>
              </div>

              <Link to={`/plants/${plant.plantId}`} className="w-full btn bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg transition">
                View Details
        </Link>
         </div>
            </div>
  )
}

export default PlantCard