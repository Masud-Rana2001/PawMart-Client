import React from 'react'
import { motion } from "framer-motion";
import { FaDog, FaBone, FaCapsules, FaGift } from "react-icons/fa";
function Banner() {
  return (
    
      
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-5"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-amber-400">
            Find Your Furry Friend Today!
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Adopt, don’t shop — give a pet a home and fill your life with love.
          </p>
          <Link
            to="/pets-and-supplies"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
          >
            Browse Pets & Supplies
          </Link>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          src="https://cdn.pixabay.com/photo/2016/02/19/10/00/dog-1209621_960_720.jpg"
          alt="Happy Pet"
          className="rounded-3xl w-full md:w-1/2 object-cover shadow-lg"
        />
      </section>
  )
}

export default Banner