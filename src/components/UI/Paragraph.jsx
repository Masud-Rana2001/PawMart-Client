import React from 'react'

function Paragraph({children,className}) {
  return (
    <h2 className={`text-gray-700 dark:text-gray-300 leading-relaxed ${className}`}>{children }</h2>
  )
}

export default Paragraph