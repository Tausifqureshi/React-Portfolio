/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};












// import React from "react";
// import {
//   Github,
//   Linkedin,
//   MessageCircle,
//   Download,
//   Mail,
//   Share2,
// } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
// import Image from "./Image/Tausif-Image.jpg";

// const Hero = () => {
//   const handleDownloadCV = () => {
//     window.open("https://drive.google.com/file/d/your-cv-file-id/view", "_blank");
//   };

//   const handleContactMe = () => {
//     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-24 px-4"
//     >
//       <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
//         {/* Text Content */}
//         <div className="text-center md:text-left w-full space-y-6">
//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//               <Typewriter
//                 words={[
//                   "I'm Tausif Qureshi, a Frontend Developer",
//                   "React Specialist",
//                   "JavaScript Expert",
//                   "MERN Stack Explorer",
//                 ]}
//                 loop
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={2000}
//               />
//             </span>
//           </h1>

//           <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
//             I build clean, responsive UIs with React and the MERN stack, focusing on user experience and performance.
//           </p>

//           {/* Social Icons */}
//           <div className="flex justify-center md:justify-start gap-4 mt-4">
//             <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//               <Github className="w-5 h-5" />
//             </a>
//             <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition-all text-green-600 dark:text-green-400">
//               <MessageCircle className="w-5 h-5" />
//             </a>
//             <a href="#" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition-all text-purple-600 dark:text-purple-400">
//               <Share2 className="w-5 h-5" />
//             </a>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
//             <button
//               onClick={handleDownloadCV}
//               className="flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-white rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all"
//             >
//               <Download className="w-5 h-5 mr-2" /> Download CV
//             </button>

//             <button
//               onClick={handleContactMe}
//               className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:scale-105 transition-transform"
//             >
//               <Mail className="w-5 h-5 mr-2" /> Contact Me
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="flex justify-center md:justify-end w-full">
//           <div className="w-60 h-80 rounded-2xl overflow-hidden shadow-2xl">
//             <img
//               src={Image}
//               alt="Tausif Qureshi"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;