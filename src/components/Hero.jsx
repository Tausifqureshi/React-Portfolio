import React from "react";

import {
  FaGithub,
  FaLinkedin, 
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Image from "./Image/Tausif-Image.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1HEieYCbIEsRKNi4tmVXq97Y7XArg3MAU/view",
      "_blank"
    );
  };

  const handleContactMe = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-950 pt-20 pb-6 px-4"
    >
      <div className="text-center w-full max-w-4xl">
        {/* Image */}
        <div className="flex justify-center mb-6 mt-6">
          <div className="w-44 h-56 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out border border-gray-300 dark:border-gray-700">
            <img
              src={Image}
              alt="Tausif Qureshi"
              className="w-full h-full object-cover  duration-300"
              loading="lazy"
            />
          </div>
        </div>
      


        {/* Typewriter */}
        <h2 className="text-lg md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-2">
          <Typewriter
            words={[
              "Hi, I'm Tausif Qureshi",
              "Frontend Developer",
              "React Specialist",
              "JavaScript Expert",
              "Exploring Node.js, Express.js & MongoDB",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </h2>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tausif Qureshi
          </span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
          Passionate about crafting elegant, high-performance web applications
          with clean and modern code.
        </p>

        {/* Skills - Colorful Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-7">
          <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            React.js
          </span>
          <span className="inline-flex items-center px-3 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">
            JavaScript
          </span>
          <span className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
            Node.js
          </span>
          <span className="inline-flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
            MongoDB
          </span>
          <span className="inline-flex items-center px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm font-medium">
            Express.js
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-0">
          <button
            onClick={handleDownloadCV}
            download=""
            className="inline-flex items-center justify-center px-6 py-2 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
          >
            <FaDownload className="w-4 h-4 mr-2 relative top-[1px]" />
            Download CV
          </button>

          <button
            onClick={handleContactMe}
            className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:shadow-md hover:scale-105 transition"
          >
            <FaEnvelope className="w-4 h-4 mr-2 relative top-[1px]" />
            Contact Me
          </button>
        </div>
      </div>

      {/* SOCIAL ICONS AT BOTTOM */}
      <div className="mt-8 flex justify-center space-x-5">
        {/* GitHub */}
        <a
          href="https://github.com/Tausifqureshi"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#000000] dark:text-white"
        >
          <FaGithub className="w-5 h-5" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tausif-qureshi/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#0077B5]"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#25D366]"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>

        {/* Email (Gmail) */}
        <a
          href="mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#D93025]
"
        >
          <FaEnvelope className="w-5 h-5" />
        </a>

        {/* Phone Call */}
        <a
          href="tel:+918429097693"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#34B7F1]"
        >
          <FaPhone className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};      

export default Hero;
   