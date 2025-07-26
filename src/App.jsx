import React from 'react';
import  ThemeProvider  from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Zz from '../Zz'; // Assuming Zz.jsx is in the same directory

function App() { 
  // dark:bg-gray-950
  return ( 
    <ThemeProvider>
      <div 
       className="min-h-screen bg-white dark:bg-gray-950 transition-all duration-[800ms] ease-in-out"
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        {/* <Zz /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;