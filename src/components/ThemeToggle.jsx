import React from 'react';
// import { Sun, Moon } from 'lucide-react';
import { LuSunMedium, LuMoonStar } from "react-icons/lu";

import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
   const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-[#8257e5] dark:hover:text-[#9e7df0] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {darkMode ? <LuSunMedium className="w-8 h-8" /> : <LuMoonStar className="w-8 h-8" />}
    </button>
  );
};

export default ThemeToggle;