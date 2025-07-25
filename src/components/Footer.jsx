import React from "react";
import {
  Github,
  Linkedin,
  MessageCircle,
  Mail,
  PhoneCall,
  Heart,
  MapPin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white border-t border-gray-300 dark:border-gray-700  transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              John Doe
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
              Frontend Developer passionate about creating beautiful,
              functional, and user-friendly web applications with modern
              technologies.
            </p>

            {/* SOCIAL ICONS AT BOTTOM */}
            <div className="flex space-x-4">
              {/* GitHub */}
              <a
                href="https://github.com/Tausifqureshi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500
            "
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tausif-qureshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500
            "
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500
            "
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Email */}
              <a
                href="mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500
            "
                target="_blank"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* Phone Call */}
              <a
                href="tel:+918429097693"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500"
              >
                <PhoneCall className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>tausifqureshi504@gmail.com</span>
              </div>

              <div className="flex items-center space-x-2">
                <PhoneCall className="w-4 h-4 text-green-500" />
                <span>+91 84290 97693</span>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-gray-300 dark:border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using
            React & Tailwind CSS
          </p>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-[2.9rem;] right-8 w-7 h-7 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

