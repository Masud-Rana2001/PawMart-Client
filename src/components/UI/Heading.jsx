import React from 'react'

function Heading({children,className}) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-emerald-600 dark:text-amber-400 ${className}`}>{children }</h2>
  )
}

export default Heading