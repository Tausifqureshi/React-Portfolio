// import React, { useEffect, useState } from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaHeart,
//   FaArrowUp,
// } from "react-icons/fa";
// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const [showArrow, setShowArrow] = useState(false);

//   const quickLinks = [
//     { href: "home", label: "Home" },
//     { href: "about", label: "About" },
//     { href: "skills", label: "Skills" },
//     { href: "projects", label: "Projects" },
//     { href: "contact", label: "Contact" },
//   ];

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Scroll listener
//   useEffect(() => {
//     const handleScroll = () => {
//       const threshold = window.innerWidth < 768 ? 400 : 1000;
//       // Agar screen width 768 se chhoti hai → (mobile)
//       // to scroll 400 ke baad hi arrow top show hoga
//       // Aur agar screen width 768 se badi hai → (laptop/desktop)
//       // to scroll 1000 ke baad hi arrow top show hoga
//       setShowArrow(window.scrollY > threshold);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <footer className="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white border-t border-gray-300 dark:border-gray-700 transition-all duration-300">
//       <div
//       //  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
//        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
//        >
//         {/* Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
//               John Doe
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-md">
//               Frontend Developer passionate about building visually appealing,
//               performant, and accessible websites using modern technologies.
//             </p>

//             {/* Social Links */}
//             <div className="flex m:justify-center gap-4 mt-6 flex-wrap">
//               {/* GitHub */}
//               <a
//                 href="https://github.com/Tausifqureshi"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#000000] dark:text-white"
//               >
//                 <FaGithub className="w-5 h-5" />
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/in/tausif-qureshi/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#0077B5]"
//               >
//                 <FaLinkedin className="w-5 h-5" />
//               </a>

//               {/* WhatsApp */}
//               <a
//                 href="https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#25D366]"
//               >
//                 <FaWhatsapp className="w-5 h-5" />
//               </a>

//               {/* Email */}
//               <a
//                 href="mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#D14836]"
//               >
//                 <FaEnvelope className="w-5 h-5" />
//               </a>

//               {/* Phone Call */}
//               <a
//                 href="tel:+918429097693"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#FF6B00]"
//               >
//                 <FaPhone className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//               {quickLinks.map((link) => (
//                 <li key={link.href}>
//                   <button
//                     onClick={() => scrollToSection(link.href)}
//                     className="hover:text-blue-600 dark:hover:text-blue-400 transition w-full text-left"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
//               <div className="flex items-center gap-2">
//                 <FaEnvelope className="w-4 h-4 text-blue-500" />
//                 <span>tausifqureshi504@gmail.com</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <FaPhone className="w-4 h-4 text-green-500" />
//                 <span>+91 84290 97693</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <FaMapMarkerAlt className="w-4 h-4 text-purple-500" />
//                 <span>India</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             © {currentYear} Tausif Qureshi. All rights reserved.
//           </p>

//           <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
//             Made with <FaHeart className="w-4 h-4 mx-1 text-red-500" /> using
//             React & Tailwind CSS
//           </p>
//         </div>

//         {/* Scroll To Top (Only show when scrolled) */}
//         {showArrow && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-5 right-5 w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg flex items-center justify-center transition hover:scale-110"
//           >
//             <FaArrowUp size={18} />
//           </button>
//         )}
//       </div>

//     </footer>

//   );
// };

// export default Footer;



















// import React, { useEffect, useState } from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaHeart,
//   FaArrowUp,
// } from "react-icons/fa";
// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const [showArrow, setShowArrow] = useState(false);

//   const quickLinks = [
//     { href: "home", label: "Home" },
//     { href: "about", label: "About" },
//     { href: "skills", label: "Skills" },
//     { href: "projects", label: "Projects" },
//     { href: "contact", label: "Contact" },
//   ];

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Scroll listener
//   useEffect(() => {
//     const handleScroll = () => {
//       const threshold = window.innerWidth < 768 ? 400 : 1000;
//       // Agar screen width 768 se chhoti hai → (mobile)
//       // to scroll 400 ke baad hi arrow top show hoga
//       // Aur agar screen width 768 se badi hai → (laptop/desktop)
//       // to scroll 1000 ke baad hi arrow top show hoga
//       setShowArrow(window.scrollY > threshold);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <footer className="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white border-t border-gray-300 dark:border-gray-700 transition-all duration-300">
//       <div
//       //  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
//        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
//        >
//         {/* Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
//               Tausif Qureshi
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-md">
//               Frontend Developer passionate about building visually appealing,
//               performant, and accessible websites using modern technologies.
//             </p>

//             {/* Social Links */}
//             <div className="flex m:justify-center gap-4 mt-6 flex-wrap">
//               {/* GitHub */}
//               <a
//                 href="https://github.com/Tausifqureshi"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#000000] dark:text-white"
//               >
//                 <FaGithub className="w-5 h-5" />
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/in/tausif-qureshi/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#0077B5]"
//               >
//                 <FaLinkedin className="w-5 h-5" />
//               </a>

//               {/* WhatsApp */}
//               <a
//                 href="https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#25D366]"
//               >
//                 <FaWhatsapp className="w-5 h-5" />
//               </a>

//               {/* Email */}
//               <a
//                 href="mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#D14836]"
//               >
//                 <FaEnvelope className="w-5 h-5" />
//               </a>

//               {/* Phone Call */}
//               <a
//                 href="tel:+918429097693"
//                 className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-[#FF6B00]"
//               >
//                 <FaPhone className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//               {quickLinks.map((link) => (
//                 <li key={link.href}>
//                   <button
//                     onClick={() => scrollToSection(link.href)}
//                     className="hover:text-blue-600 dark:hover:text-blue-400 transition w-full text-left"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
//               <div className="flex items-center gap-2">
//                 <FaEnvelope className="w-4 h-4 text-blue-500" />
//                 <span>tausifqureshi504@gmail.com</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <FaPhone className="w-4 h-4 text-green-500" />
//                 <span>+91 84290 97693</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <FaMapMarkerAlt className="w-4 h-4 text-purple-500" />
//                 <span>India</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             © {currentYear} Tausif Qureshi. All rights reserved.
//           </p>

//           <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
//             Made with <FaHeart className="w-4 h-4 mx-1 text-red-500" /> using
//             React & Tailwind CSS
//           </p>
//         </div>

//         {/* Scroll To Top (Only show when scrolled) */}
//         {showArrow && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-5 right-5 w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg flex items-center justify-center transition hover:scale-110"
//           >
//             <FaArrowUp size={18} />
//           </button>
//         )}
//       </div>

//     </footer>

//   );
// };

// export default Footer;












import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  User,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quickLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Tausifqureshi",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/tausif-qureshi/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif",
      icon: MessageCircle,
      label: "WhatsApp",
    },
    {
      href: "mailto:tausifqureshi504@gmail.com",
      icon: Mail,
      label: "Email",
    },
    {
      href: "tel:+918429097693",
      icon: Phone,
      label: "Phone",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "tausifqureshi504@gmail.com",
      href: "mailto:tausifqureshi504@gmail.com",
    },
    {
      icon: Phone,
      text: "+91 84290 97693",
      href: "tel:+918429097693",
    },
    {
      icon: MapPin,
      text: "India",
      href: "#",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer
        // className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        className="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white border-t border-gray-300 dark:border-gray-700 transition-all duration-300"
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Main Content Boxes */}
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* About Box */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold  text-blue-600">
                  Tausif Qureshi
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Full Stack Developer creating modern web applications with clean
                code and innovative solutions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map(({ href, icon: IconComponent, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Box */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {quickLinks.map(({ href, label }, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(href)}
                    className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm py-1"
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Box */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 min-[500px]:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Contact Info
              </h4>
              <div className="space-y-3">
                {contactInfo.map(({ icon: IconComponent, text, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    <IconComponent className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span>{text}</span>
                  </a>
                ))}
              </div>

              {/* Professional Info */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <User className="w-4 h-4 mr-2" />
                  <span>2+ Years Experience</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Available for work
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {currentYear} Tausif Qureshi. All rights reserved.
              </p>

              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in India</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

export default Footer;












