// import React from "react";
// import { Github, Linkedin, MessageCircle, Download, Mail } from "lucide-react";
// import { Typewriter } from 'react-simple-typewriter';
// import Image from "./Image/Tausif-Image.jpg";

// const Hero = () => {

//   // Function to handle CV download
//   const handleDownloadCV = () => {
//     window.open(
//       "https://drive.google.com/file/d/your-cv-file-id/view",
//       "_blank"
//     );
//   };

//   // Function to scroll to the contact section
//   const handleContactMe = () => {
//     document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="space-y-8">

//           {/* Profile Image */}
//           <div className="mb-8">
//             <div className="w-40 h-52 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ">
//               <img
//                 src={Image}
//                 alt="Tausif Qureshi - Front End Developer"
//                 className="w-full h-full object-cover "
//               />
//             </div>

//             {/* Typing Effect */}
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
//               <span className="text-blue-600 dark:text-blue-400 transition-all duration-500">
//                 <Typewriter
//                     words={
//                       [
//                         "Hi, I'm Tausif Qureshi",
//                         'Frontend Developer',
//                         'React Specialist',
//                         'JavaScript Expert',
//                         'MERN Stack Explorer',
//                       ]
//                       }
//                     loop={true}
//                     cursor
//                     cursorStyle="|"
//                     typeSpeed={90}        // ✅ Very slow typing
//                     deleteSpeed={80}      // ✅ Very slow deleting
//                     delaySpeed={2500}     // ✅ 3 second pause after full word
                 
                   
//                   />
//               </span>
//             </h1>

//             {/* Name */}
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
//               Hi, I'm{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Tausif Qureshi
//               </span>
//             </h1>
//           </div>

//           {/* Description */}
//           <div className="space-y-4">
//             <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
//               Passionate about creating beautiful, functional, and user-friendly
//               web applications with modern technologies and best practices.
//             </p>
//           </div>
//  <div className="flex flex-wrap justify-center gap-3 mb-8">
//           <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
//             React.js
//            </span>
//            <span className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">
//              JavaScript
//            </span>
//            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
//              Node.js
//            </span>
//            <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
//              MongoDB
//            </span>
//            <span className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium">
//              Express.js
//            </span>
//          </div>

//           {/* Social Icons */}
//           <div className="flex justify-center space-x-6">
//             <a
//               href="https://github.com/johndoe"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               <Github className="w-6 h-6" />
//             </a>
//             <a
//               href="https://linkedin.com/in/johndoe"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               <Linkedin className="w-6 h-6" />
//             </a>

//             <a
//               // href="https://wa.me/8429097693"
//               href="https://wa.me/918429097693?text=Hi%20Tausif%2C%20I%20saw%20your%20portfolio!"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
//             >
//               <MessageCircle className="w-6 h-6" />
//             </a>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={handleDownloadCV}
//               className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
//             >
//               <Download className="w-5 h-5 mr-2" />
//               Download CV
//             </button>

//             <button
//               onClick={handleContactMe}
//               className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
//             >
//               <Mail className="w-5 h-5 mr-2" />
//               Contact Me
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;










import React from "react";
import { Github, Linkedin, MessageCircle, Download, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Image from "./Image/Tausif-Image.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/your-cv-file-id/view",
      "_blank"
    );
  };

  const handleContactMe = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-20 pb-6 px-4"
    >
      <div className="text-center w-full max-w-4xl">

        {/* Image */}
        <div className="flex justify-center mb-6">
          <div 
          className="w-44 h-56 rounded-full overflow-hidden shadow-md border-2 border-blue-500 dark:border-gray-700"
          >
            <img
              src={Image}
              alt="Tausif Qureshi"
              className="w-full h-full object-cover"
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
              "MERN Stack Explorer",
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
          Passionate about crafting elegant, high-performance web applications with clean and modern code.
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
            className="inline-flex items-center justify-center px-6 py-2 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
          >
            <Download className="w-4 h-4 mr-2 relative top-[1px]" />
            Download CV
          </button>

          <button
            onClick={handleContactMe}
            className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:shadow-md hover:scale-105 transition"
          >
            <Mail className="w-4 h-4 mr-2 relative top-[1px]" />
            Contact Me
          </button>
        </div>
      </div>

      {/* SOCIAL ICONS AT BOTTOM */}
      <div className="mt-8 flex justify-center space-x-5">
        <a
          href="https://github.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/918429097693?text=Hi%20Tausif%2C%20I%20saw%20your%20portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-green-600"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;







