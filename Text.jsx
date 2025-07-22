
// import React from 'react';
// import { Zap, Code, Palette } from 'lucide-react';

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative">
//           <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
//           <div className="pl-8">
//             <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
//               <Zap className="w-8 h-8 text-yellow-500 mr-3" />
//               My Journey
//             </h2>
//             <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
//               <p>
//                 Hi! I'm{" "}
//                 <span className="font-semibold text-blue-600 dark:text-blue-400">
//                   Tausif Qureshi
//                 </span>
//                 , a passionate
//                 <span className="font-semibold text-purple-600 dark:text-purple-400">
//                   {" "}
//                   Frontend Developer
//                 </span>{" "}
//                 who loves creating beautiful and functional web experiences.
//               </p>
//               <p>
//                 As a fresh graduate, I'm eager to apply my skills in
//                 <span className="font-semibold text-blue-600 dark:text-blue-400">
//                   {" "}
//                   React.js
//                 </span>
//                 ,
//                 <span className="font-semibold text-yellow-600 dark:text-yellow-400">
//                   {" "}
//                   JavaScript
//                 </span>
//                 , and modern CSS frameworks to build amazing user interfaces
//                 that users love to interact with.
//               </p>
//               <p>
//                 I believe that great frontend development combines technical
//                 expertise with creative vision. I'm constantly learning new
//                 technologies and staying updated with the latest trends in web
//                 development.
//               </p>
//               <p>
//                 My goal is to create pixel-perfect, responsive websites that
//                 provide exceptional user experiences across all devices and
//                 platforms.
//               </p>
//             </div>

//             {/* Skills Boxes */}
//             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Clean Code Box */}
//               <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors group">
//                 <div className="flex items-center mb-4">
//                   <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     Clean Code
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Writing maintainable, scalable, and efficient code following best practices and modern development standards.
//                 </p>
//               </div>

//               {/* UI/UX Design Box */}
//               <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 transition-colors group">
//                 <div className="flex items-center mb-4">
//                   <Palette className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     UI/UX Design
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Creating intuitive and visually appealing user interfaces with focus on user experience and accessibility.
//                 </p>
//               </div>
//             </div>

//             {/* Tech Stack Pills */}
//             <div className="mt-8 flex flex-wrap gap-3">
//               {[
//                 "React",
//                 "JavaScript",
//                 "TypeScript",
//                 "Tailwind CSS",
//                 "Git",
//                 "Figma",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


























import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

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
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">

          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Tausif Qureshi - Front End Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Front End Developer
            </p>
          </div>
          
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Tausif
              <span className="block text-blue-600 dark:text-blue-400">Qureshi</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Frontend Developer passionate about creating beautiful, responsive web applications with modern technologies and clean code.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleContactMe} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
              Contact
            </button>
            <button onClick={handleDownloadCV} className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors">
              Download Resume
            </button>
          </div>

            {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;