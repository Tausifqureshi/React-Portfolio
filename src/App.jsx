import React, { Suspense, lazy, useState, useEffect } from 'react';
import ThemeProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time for the beautiful loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return ( 
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-all duration-300 ease-in-out text-gray-900 dark:text-gray-100">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="py-20 text-center">Loading section...</div>}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;