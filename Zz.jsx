import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

function Zz() {
  return (
    <>
      <h1> Test Icon </h1>
      <div className="flex gap-4 mt-6 flex-wrap">
        {/* GitHub */}
        <a className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#000000] dark:text-white">
          <FaGithub className="w-5 h-5" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tausif-qureshi/"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#0077B5]"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>

        {/* WhatsApp */}
        <a className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#25D366]">
          <FaWhatsapp className="w-5 h-5" />
        </a>

        {/* Email */}
        <a className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#D14836]">
          <FaEnvelope className="w-5 h-5" />
        </a>

        {/* Phone Call */}
        <a className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#FF6B00]">
          <FaPhone className="w-5 h-5" />
        </a>

        {/* Download Resume */}
         <a className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#FF6B00]">
          <IoDownloadOutline className="w-5 h-5" />
        </a>

      </div>
    </>
  );
}

export default Zz;


{/* <div className="flex justify-center mb-6 mt-6">
  <div className="w-44 h-56 rounded-xl overflow-hidden border-2 border-blue-500 dark:border-gray-700 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
    <img
      src={Image}
      alt="Tausif Qureshi"
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
</div> */}


//  const projects = [
//     {
//       title: 'E-Commerce Platform',
//       description: 'A full-stack e-commerce solution with modern design and seamless user experience.',
//       image: 'https://github.com/user-attachments/assets/a2516c99-0981-473b-91db-379ebcf1dc6d',
//       technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//       features: [
//         'User authentication and authorization',
//         'Product catalog with search and filtering',
//         'Shopping cart and checkout process'
//       ],
//       github: 'https://github.com/johndoe/ecommerce-platform',
//       demo: 'https://ecommerce-demo.com'
//     },
//     {
//       title: 'Task Management App',
//       description: 'A collaborative task management application with real-time updates and team features.',
//       image: 'https://github.com/user-attachments/assets/b5aa5548-677e-4590-a533-fb1b0614f5a5',
//       technologies: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
//       features: [
//         'Real-time task updates',
//         'Team collaboration features',
//         'Drag and drop functionality'
//       ],
//       github: 'https://github.com/johndoe/task-manager',
//       demo: 'https://taskmanager-demo.com'
//     },
//     {
//       title: 'Weather Dashboard',
//       description: 'A beautiful weather application with detailed forecasts and location-based features.',
//       image: 'https://user-images.githubusercontent.com/84295391/193425173-5c291629-78e4-4678-abcc-eada0e935245.png',
//       technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
//       features: [
//         'Current weather conditions',
//         '7-day weather forecast',
//         'Location-based weather data'
//       ],
//       github: 'https://github.com/johndoe/weather-dashboard',
//       demo: 'https://weather-demo.com'
//     }
//   ]