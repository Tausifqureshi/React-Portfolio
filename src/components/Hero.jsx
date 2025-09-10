// import React from "react";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhone,
//   FaDownload,
// } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";
// import Image from "./Image/Tausif-Image.jpg";

// const Hero = () => {
//   const handleDownloadCV = () => {
//     window.open(
//       "https://drive.google.com/file/d/1HEieYCbIEsRKNi4tmVXq97Y7XArg3MAU/view",
//       "_blank"
//     );
//   };

//   const handleContactMe = () => {
//     document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-950 pt-20 pb-6 px-4"
//     >
//       <div className="text-center w-full max-w-4xl">
//         {/* Image */}
//         <div className="flex justify-center mb-6 mt-6">
//           <div className="w-44 h-56 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out border border-gray-300 dark:border-gray-700">
//             <img
//               src={Image}
//               alt="Tausif Qureshi"
//               className="w-full h-full object-cover  duration-300"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* Typewriter */}
//         <h2 className="text-lg md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-2">
//           <Typewriter
//             words={[
//               "Hi, I'm Tausif Qureshi",
//               "Frontend Developer",
//               "React Specialist",
//               "JavaScript Expert",
//               "Exploring Node.js, Express.js & MongoDB",
//             ]}
//             loop
//             cursor
//             cursorStyle="|"
//             typeSpeed={90}
//             deleteSpeed={80}
//             delaySpeed={2000}
//           />
//         </h2>

//         {/* Name */}
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Tausif Qureshi
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
//           Passionate about crafting elegant, high-performance web applications
//           with clean and modern code.
//         </p>

//         {/* Skills - Colorful Tags */}
//         <div className="flex flex-wrap justify-center gap-2 mb-7">
//           <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
//             React.js
//           </span>
//           <span className="inline-flex items-center px-3 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">
//             JavaScript
//           </span>
//           <span className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
//             Node.js
//           </span>
//           <span className="inline-flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
//             MongoDB
//           </span>
//           <span className="inline-flex items-center px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm font-medium">
//             Express.js
//           </span>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-3 justify-center mt-0">
//           <button
//             onClick={handleDownloadCV}
//             download=""
//             className="inline-flex items-center justify-center px-6 py-2 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
//           >
//             <FaDownload className="w-4 h-4 mr-2 relative top-[1px]" />
//             Download CV
//           </button>

//           <button
//             onClick={handleContactMe}
//             className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:shadow-md hover:scale-105 transition"
//           >
//             <FaEnvelope className="w-4 h-4 mr-2 relative top-[1px]" />
//             Contact Me
//           </button>
//         </div>
//       </div>

//       {/* SOCIAL ICONS AT BOTTOM */}
//       <div className="mt-8 flex justify-center space-x-5">
//         {/* GitHub */}
//         <a
//           href="https://github.com/Tausifqureshi"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#000000] dark:text-white"
//         >
//           <FaGithub className="w-5 h-5" />
//         </a>

//         {/* LinkedIn */}
//         <a
//           href="https://www.linkedin.com/in/tausif-qureshi/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#0077B5]"
//         >
//           <FaLinkedin className="w-5 h-5" />
//         </a>

//         {/* WhatsApp */}
//         <a
//           href="https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#25D366]"
//         >
//           <FaWhatsapp className="w-5 h-5" />
//         </a>

//         {/* Email (Gmail) */}
//         <a
//           href="mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#D93025]
// "
//         >
//           <FaEnvelope className="w-5 h-5" />
//         </a>

//         {/* Phone Call */}
//         <a
//           href="tel:+918429097693"
//           className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#34B7F1]"
//         >
//           <FaPhone className="w-5 h-5" />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;











// import React from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhone,
//   FaDownload,
// } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";
// import Image from "./Image/Tausif-Image.jpg";

// const Hero = () => {
//   const handleDownloadCV = () => {
//     window.open(
//       "https://drive.google.com/file/d/1HEieYCbIEsRKNi4tmVXq97Y7XArg3MAU/view",
//       "_blank"
//     );
//   };

//   const handleContactMe = () => {
//     document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-950"
//     >
//       {/* Background accents */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/10" />
//         <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/10" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16">
//         <div className="grid grid-cols-1 items-center justify-items-center gap-12 md:grid-cols-12">
//           {/* Left: Content */}
//           <div className="md:col-span-7">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur dark:border-blue-900/40 dark:bg-white/5 dark:text-blue-300 mx-auto md:mx-0">
//               <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
//               Available for opportunities
//             </div>

//             <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-6xl text-center md:text-left">
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Tausif Qureshi
//               </span>
//             </h1>

//             <h2 className="mt-3 text-base font-semibold tracking-wide text-blue-700 dark:text-blue-300 md:text-lg text-center md:text-left">
//               <Typewriter
//                 words={[
//                   "Hi, I'm Tausif Qureshi",
//                   "Frontend Developer",
//                   "React Specialist",
//                   "JavaScript Expert",
//                   "Exploring Node.js, Express.js & MongoDB",
//                 ]}
//                 loop
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={80}
//                 deleteSpeed={70}
//                 delaySpeed={1800}
//               />
//             </h2>

//             {/* Description */}
//             <p className="mt-4 mx-auto text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400 max-w-xl text-center md:text-left line-clamp-4">
//               I deliver reliable, polished user interfaces with performance,
//               accessibility and maintainability at the core. Focused on building
//               modern, scalable front-end systems that empower businesses.
//             </p>

//             {/* CTA buttons */}
//             <div className="mt-7 flex flex-col gap-3 sm:flex-row items-center justify-center md:items-start md:justify-start">
//               <button
//                 onClick={handleContactMe}
//                 className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//               >
//                 <FaEnvelope className="mr-2 h-4 w-4" /> Contact Me
//               </button>
//               <button
//                 onClick={handleDownloadCV}
//                 className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-transparent px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white dark:text-blue-300"
//               >
//                 <FaDownload className="mr-2 h-4 w-4" /> Download CV
//               </button>
//             </div>

//             {/* Social links */}
//             <div className="mt-7 flex items-center justify-center md:justify-start gap-4 w-full md:w-auto mx-auto md:mx-0">
//               <a
//                 href="https://github.com/Tausifqureshi"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="rounded-full bg-white/80 p-2 text-gray-900 shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800 dark:text-white"
//               >
//                 <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/tausif-qureshi/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="rounded-full bg-white/80 p-2 text-[#0077B5] shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800"
//               >
//                 <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
//               </a>
//               <a
//                 href="https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className="rounded-full bg-white/80 p-2 text-[#25D366] shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800"
//               >
//                 <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
//               </a>
//               <a
//                 href="mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Email"
//                 className="rounded-full bg-white/80 p-2 text-[#D93025] shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800"
//               >
//                 <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />
//               </a>
//               <a
//                 href="tel:+918429097693"
//                 aria-label="Phone"
//                 className="rounded-full bg-white/80 p-2 text-[#34B7F1] shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800"
//               >
//                 <FaPhone className="h-5 w-5 sm:h-6 sm:w-6" />
//               </a>
//             </div>

//             {/* Quick skills */}
//             <div className="mt-6 flex flex-wrap gap-2">
//               {[
//                 {
//                   label: "React.js",
//                   color:
//                     "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
//                 },
//                 {
//                   label: "JavaScript",
//                   color:
//                     "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300",
//                 },
//                 {
//                   label: "Exploring Node.js",
//                   color:
//                     "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-300",
//                 },
//                 {
//                   label: "Exploring MongoDB",
//                   color:
//                     "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
//                 },
//                 {
//                   label: "Exploring Express.js",
//                   color:
//                     "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300",
//                 },
//               ].map((chip) => (
//                 <span
//                   key={chip.label}
//                   className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${chip.color}`}
//                 >
//                   {chip.label}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Right: Developer card + portrait */}
//           <div className="md:col-span-5">
//             <div className="relative mx-auto w-full max-w-[92vw] sm:w-[420px] md:w-[480px] lg:w-[490px] md:-translate-x-6 lg:-translate-x-10 xl:-translate-x-14 2xl:-translate-x-20">
//               {/* Portrait image */}
//               <div className="mx-auto mb-4 z-20 h-[140px] w-[140px] overflow-hidden rounded-full border-4 border-blue-400 bg-white/90 shadow-xl ring-2 ring-blue-500/30 transition-all duration-300 hover:z-50 hover:scale-[1.06] dark:bg-white/5 md:absolute md:left-auto md:mx-0 md:mb-0 md:translate-x-0 md:-right-10 md:-top-12 md:h-[170px] md:w-[170px] lg:-right-12 lg:-top-14 lg:h-[190px] lg:w-[190px]">
//                 <img
//                   src={Image}
//                   alt="Tausif Qureshi portrait"
//                   className="h-full w-full object-top object-cover transition-transform duration-300"
//                   loading="lazy"
//                 />
//               </div>

//               {/* Developer code card */}
//               <div className="group/card relative z-10 rounded-2xl border border-emerald-400/30 bg-gray-900/95 text-gray-100 shadow-2xl ring-1 ring-emerald-400/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:z-40">
//                 <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs text-gray-300">
//                   <span className="h-2 w-2 rounded-full bg-red-400" />
//                   <span className="h-2 w-2 rounded-full bg-amber-400" />
//                   <span className="h-2 w-2 rounded-full bg-emerald-400" />
//                   <span className="ml-2 font-medium text-gray-200">
//                     developer.js
//                   </span>
//                 </div>
//                 <pre className="px-4 py-2 text-[16px] md:text-[17px] leading-8 font-mono">
//                   {`const `}
//                   <span className="text-emerald-400">developer</span>
//                   {` = {\n`}
//                   {`  name: `}
//                   <span className="text-amber-300">"Tausif Qureshi"</span>
//                   {`,\n  role: `}
//                   <span className="text-amber-300">"Frontend Developer"</span>
//                   {`,\n  experience: `}
//                   <span className="text-amber-300">"3+ years"</span>
//                   {`,\n  skills: [`}
//                   <span className="text-amber-300">"React"</span>
//                   {`, `}
//                   <span className="text-amber-300">"Exploring Node.js"</span>
//                   {`],\n  passion: `}
//                   <span className="text-amber-300">
//                     "Building amazing web apps"
//                   </span>
//                   {`\n};`}
//                 </pre>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;















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
      className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-950"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/10" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16">
        <div className="grid grid-cols-1 items-center justify-items-center gap-12 md:grid-cols-12">
          {/* Left: Content */}
          <div className="md:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur dark:border-blue-900/40 dark:bg-white/5 dark:text-blue-300 mx-auto md:mx-0">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              Available for opportunities
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-6xl text-center md:text-left">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tausif Qureshi
              </span>
            </h1>

            <h2 className="mt-3 text-base font-semibold tracking-wide text-blue-700 dark:text-blue-300 md:text-lg text-center md:text-left">
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
                typeSpeed={80}
                deleteSpeed={70}
                delaySpeed={1800}
              />
            </h2>

            {/* Description */}
            <p className="mt-4 mx-auto text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400 max-w-xl text-center md:text-left line-clamp-4">
              I deliver reliable, polished user interfaces with performance,
              accessibility and maintainability at the core. Focused on building
              modern, scalable front-end systems that empower businesses.
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row items-center justify-center md:items-start md:justify-start">
              <button
                onClick={handleContactMe}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <FaEnvelope className="mr-2 h-4 w-4" /> Contact Me
              </button>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-transparent px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white dark:text-blue-300"
              >
                <FaDownload className="mr-2 h-4 w-4" /> Download CV
              </button>
            </div>

            {/* Social links */}
            <div className="mt-7 flex items-center justify-center md:justify-start gap-4 w-full md:w-auto mx-auto md:mx-0">
              <a
                href="https://github.com/Tausifqureshi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full bg-white/80 p-2 text-gray-900 shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800 dark:text-white"
              >
                <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tausif-qureshi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-white/80 p-2 text-[#0077B5] shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800"
              >
                <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-white/80 p-2 text-[#25D366] shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800"
              >
                <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="rounded-full bg-white/80 p-2 text-[#D93025] shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800"
              >
                <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="tel:+918429097693"
                aria-label="Phone"
                className="rounded-full bg-white/80 p-2 text-[#34B7F1] shadow-sm ring-1 ring-black/5 transition hover:scale-110 dark:bg-gray-800"
              >
                <FaPhone className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>

            {/* Quick skills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                {
                  label: "React.js",
                  color:
                    "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
                },
                {
                  label: "JavaScript",
                  color:
                    "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300",
                },
                {
                  label: "Exploring Node.js",
                  color:
                    "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-300",
                },
                {
                  label: "Exploring MongoDB",
                  color:
                    "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
                },
                {
                  label: "Exploring Express.js",
                  color:
                    "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300",
                },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${chip.color}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Developer card + portrait */}
          <div className="md:col-span-5">
            <div
              className="
              relative mx-auto w-full 
              max-w-[92vw] sm:w-[420px] 
              md:w-[480px] lg:w-[490px] 
              md:translate-x-0
              xl:-translate-x-14 2xl:-translate-x-20
            "
            >
              {/* Portrait image */}
              <div
                className="mx-auto mb-4 z-20 h-[140px] w-[140px] overflow-hidden rounded-full border-4 border-blue-400 bg-white/90 shadow-xl ring-2 ring-blue-500/30 transition-all duration-300 hover:z-50 hover:scale-[1.06] dark:bg-white/5 
                md:absolute md:-right-6 md:-top-10 md:h-[170px] md:w-[170px] 
                lg:-right-8 lg:-top-12 lg:h-[180px] lg:w-[180px] 
                xl:-right-12 xl:-top-14 xl:h-[190px] xl:w-[190px]"
              >
                <img
                  src={Image}
                  alt="Tausif Qureshi portrait"
                  className="h-full w-full object-top object-cover transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Developer code card */}
              <div className="group/card relative z-10 rounded-2xl border border-emerald-400/30 bg-gray-900/95 text-gray-100 shadow-2xl ring-1 ring-emerald-400/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:z-40">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-medium text-gray-200">
                    developer.js
                  </span>
                </div>
                <pre className="px-4 py-2 text-[16px] md:text-[17px] leading-8 font-mono">
                  {`const `}
                  <span className="text-emerald-400">developer</span>
                  {` = {\n`}
                  {`  name: `}
                  <span className="text-amber-300">"Tausif Qureshi"</span>
                  {`,\n  role: `}
                  <span className="text-amber-300">"Frontend Developer"</span>
                  {`,\n  experience: `}
                  <span className="text-amber-300">"3+ years"</span>
                  {`,\n  skills: [`}
                  <span className="text-amber-300">"React"</span>
                  {`, `}
                  <span className="text-amber-300">"Exploring Node.js"</span>
                  {`],\n  passion: `}
                  <span className="text-amber-300">
                    "Building amazing web apps"
                  </span>
                  {`\n};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;







