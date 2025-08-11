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














// import React, { useState, useEffect } from "react";
// import {
//   Github,
//   Linkedin,
//   MessageCircle,
//   Mail,
//   Phone,
//   MapPin,
//   Heart,
//   ArrowUp,
//   ExternalLink,
// } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   const quickLinks = [
//     { href: "home", label: "Home" },
//     { href: "about", label: "About" },
//     { href: "skills", label: "Skills" },
//     { href: "projects", label: "Projects" },
//     { href: "contact", label: "Contact" },
//   ];

//   const socialLinks = [
//     {
//       href: "https://github.com/Tausifqureshi",
//       icon: Github,
//       label: "GitHub",
//       color:
//         "hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
//     },
//     {
//       href: "https://www.linkedin.com/in/tausif-qureshi/",
//       icon: Linkedin,
//       label: "LinkedIn",
//       color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
//     },
//     {
//       href: "https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif",
//       icon: MessageCircle,
//       label: "WhatsApp",
//       color:
//         "hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20",
//     },
//     {
//       href: "mailto:tausifqureshi504@gmail.com",
//       icon: Mail,
//       label: "Email",
//       color: "hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20",
//     },
//     {
//       href: "tel:+918429097693",
//       icon: Phone,
//       label: "Phone",
//       color:
//         "hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20",
//     },
//   ];

//   const contactInfo = [
//     {
//       icon: Mail,
//       text: "tausifqureshi504@gmail.com",
//       color: "text-blue-600 dark:text-blue-400",
//     },
//     {
//       icon: Phone,
//       text: "+91 84290 97693",
//       color: "text-green-600 dark:text-green-400",
//     },
//     {
//       icon: MapPin,
//       text: "India",
//       color: "text-purple-600 dark:text-purple-400",
//     },
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

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <footer className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 border-t border-slate-200 dark:border-slate-700 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="py-12 lg:py-16">
//             {/* Brand & Social Section */}
//             <div className="text-center mb-10 md:mb-16 max-w-md mx-auto">
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//                 John Doe
//               </h2>
//               <p className=" text-slate-600 dark:text-slate-300 text-base leading-relaxed">
//                 Frontend Developer passionate about crafting visually appealing,
//                 performant, and accessible digital experiences that make a
//                 difference.
//               </p>
//               <div className="flex justify-center mt-6 space-x-4">
//                 {socialLinks.map(
//                   ({ href, icon: IconComponent, label, color }, i) => (
//                     <a
//                       key={i}
//                       href={href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={label}
//                       className={`p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 ${color} hover:shadow-md`}
//                     >
//                       <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
//                     </a>
//                   )
//                 )}
//               </div>
//             </div>

//             {/* Quick Links & Contact Info as 2 columns grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-md mx-auto md:max-w-none md:mx-0">
//               {/* Quick Links Box */}
//               <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
//                 <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
//                   Quick Links
//                 </h3>
//                 <nav className="flex flex-col space-y-4">
//                   {quickLinks.map(({ href, label }, i) => (
//                     <button
//                       key={i}
//                       onClick={() => scrollToSection(href)}
//                       className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 text-left"
//                     >
//                       {label}
//                     </button>
//                   ))}
//                 </nav>
//               </div>

//               {/* Contact Info Box */}
//               <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
//                 <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
//                   Get in Touch
//                 </h3>
//                 <div className="flex flex-col space-y-4">
//                   {contactInfo.map(
//                     ({ icon: IconComponent, text, color }, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
//                       >
//                         <div
//                           className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-700 ${color}`}
//                         >
//                           <IconComponent className="w-5 h-5" />
//                         </div>
//                         <span className="text-base">{text}</span>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="py-6 border-t border-slate-200 dark:border-slate-700">
//             <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//               <p className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
//                 © {currentYear} Tausif Qureshi. All rights reserved.
//               </p>
//               <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
//                 <span>Made with</span>
//                 <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
//                 <span>using React & Tailwind CSS</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
//           aria-label="Scroll to top"
//         >
//           <ArrowUp className="w-5 h-5" />
//         </button>
//       )}
//     </>
//   );
// };

// export default Footer;
