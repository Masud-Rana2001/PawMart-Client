import {useState,useEffect} from 'react'
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeChanger() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("themeOfPawMart") || "dark"
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      
    }
    localStorage.setItem("themeOfPawMart",theme)
  },[theme])

   const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 left-5 z-50 flex items-center justify-center w-12 h-12 rounded-full 
                 bg-emerald-600 text-white dark:bg-amber-400 dark:text-gray-900 
                 shadow-lg hover:scale-105 transition-transform duration-200"
      aria-label="Toggle Dark Mode">
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  )
}

export default ThemeChanger