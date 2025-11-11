import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { petHeroes } from "../../data/data";

const PetHeroes = () => {
  return (
    <section
      className="py-16 bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
         dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-emerald-700 dark:text-amber-400 mb-10">
          Meet Our Pet Heroes 👨‍⚕️
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Stories from our incredible community of adopters and caregivers.
        </p>

       
        <motion.div
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            className="flex space-x-6"
          >
            {petHeroes.map((hero) => (
              <motion.div
                key={hero.id}
                whileHover={{ scale: 1.05 }}
                className="min-w-[300px] md:min-w-[350px] bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <FaQuoteLeft size={24} className="text-indigo-500 mb-4" />
                <p className="italic text-gray-700 dark:text-gray-300 mb-6 text-lg line-clamp-4">
                  "{hero.quote}"
                </p>

                <div className="flex items-center mt-4 border-t pt-4 border-gray-200 dark:border-gray-700">
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-indigo-200 dark:border-indigo-700 mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {hero.name}
                    </p>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                      {hero.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PetHeroes;
