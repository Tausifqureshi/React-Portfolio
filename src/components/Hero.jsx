import React from "react";
import { Github, Linkedin, MessageCircle, Download, Mail } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';
import Image from "./Image/Tausif-Image.jpg";

const Hero = () => {

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

            {/* Typing Effect */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
              <span className="text-blue-600 dark:text-blue-400 transition-all duration-500">
                <Typewriter
                    words={
                      [
                        "Hi, I'm Tausif Qureshi",
                        'Frontend Developer',
                        'React Specialist',
                        'JavaScript Expert',
                        'MERN Stack Explorer',
                      ]
                      }
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={90}        // ✅ Very slow typing
                    deleteSpeed={80}      // ✅ Very slow deleting
                    delaySpeed={2500}     // ✅ 3 second pause after full word
                 
                   
                  />
              </span>
            </h1>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tausif Qureshi
              </span>
            </h1>
          </div>

          {/* Description */}
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
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </button>

            <button
              onClick={handleContactMe}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
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