import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the context
const ThemeContext = createContext();

// 2. Custom hook
export const useTheme = () => {
  return useContext(ThemeContext); 
}

// 3. Theme Provider
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(()=>{
    // Check saved theme on first render
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Agar localStorage me theme nahi mili,
    // to default theme light mode (false) rakho
    return false;

  });

  // Update theme & save to localStorage
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle theme
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return ( 
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;


