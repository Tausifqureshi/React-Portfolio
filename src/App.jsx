import React, { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ThemeProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Footer from './components/Footer';

const About = lazy(function loadAbout() { return import('./components/About'); });
const Skills = lazy(function loadSkills() { return import('./components/Skills'); });
const Experience = lazy(function loadExperience() { return import('./components/Experience'); });
const Projects = lazy(function loadProjects() { return import('./components/Projects'); });
const Contact = lazy(function loadContact() { return import('./components/Contact'); });

function App() { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Real-world performance strategy (similar to Amazon/Flipkart):
    // Hide the loader only when critical page assets have fully loaded.
    if (document.readyState === "complete") {
      // 400ms buffer so the entrance monogram animation has time to display
      const timer = setTimeout(handleLoad, 400);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return ( 
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-github-bg transition-all duration-300 ease-in-out text-gray-900 dark:text-gray-100 relative overflow-x-hidden">
        <AnimatePresence mode="wait">
          {loading && <Loader />}
        </AnimatePresence>
        
        <Navbar />
        <Hero />
        
        <Suspense fallback={<div className="py-20 text-center text-gray-400 font-medium">Loading details...</div>}>
          <About />
        </Suspense>
        
        <Suspense fallback={<div className="py-20 text-center text-gray-400 font-medium">Loading stack...</div>}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<div className="py-20 text-center text-gray-400 font-medium">Loading experiences...</div>}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<div className="py-20 text-center text-gray-400 font-medium">Loading projects...</div>}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<div className="py-20 text-center text-gray-400 font-medium">Loading form...</div>}>
          <Contact />
        </Suspense>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;