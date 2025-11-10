import React from 'react'

function Button({children,className}) {
  return (
    <h2 className={`bg-emerald-600 hover:bg-emerald-700 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-gray-900 px-5 py-2 rounded-lg transition ${className}`}>{children }</h2>
  )
}

export default Button