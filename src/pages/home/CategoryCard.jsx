import React from 'react'
import { Link } from 'react-router'


function CategoryCard({category}) {
  return (
    <Link 
            to={"/"} 
            className={`flex flex-col items-center justify-center p-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-xl cursor-pointer ${category.color} shadow-md border border-gray-200 dark:border-gray-700 w-full min-h-[150px]`}
        >
            <div className="p-3 mb-2 rounded-full bg-white/70 dark:bg-gray-700/80 shadow-inner">

                {category.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-2 text-center">
                {category.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-center hidden sm:block">
                {category.description}
            </p>
        </Link>
  )
}

export default CategoryCard