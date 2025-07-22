
import React, { useEffect, useState } from "react";
import { Github, Linkedin, MessageCircle, Download, Mail } from "lucide-react";
import Image from "./Image/Tausif-Image.jpg";

const Hero = () => {

 const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Frontend Developer', 'React Specialist', 'UI/UX Designer', 'JavaScript Expert'];

  // Typing effect for the text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex]);

  // Function to handle CV download
  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/your-cv-file-id/view",
      "_blank"
    );
  };

  // Function to scroll to the contact section
  const handleContactMe = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
        
           <div className="mb-8">
            <div className="w-40 h-52 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={Image}
                alt="Tausif Qureshi - Front End Developer"
                className="w-full h-full object-cover"
              />
            </div>
          
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
            <span className="text-blue-600 dark:text-blue-400 transition-all duration-500">
              {currentText}
            </span>
          </h2>

           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tausif Qureshi
            </span>
          </h1>
          </div>
      
          {/* Name and Title */}
          <div className="space-y-4">
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional, and user-friendly
              web applications with modern technologies and best practices.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </button>

            <button
              onClick={handleContactMe}
              className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </button>


          </div>


          
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

