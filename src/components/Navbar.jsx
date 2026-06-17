import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { FaBars, FaTimes, FaFileAlt } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import useScrollSpy from "../hooks/useScrollSpy";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const activeSection = useScrollSpy(
    navItems.map((item) => item.href.substring(1)),
    100
  );


  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1HEieYCbIEsRKNi4tmVXq97Y7XArg3MAU/view",
      "_blank"
    );
    setIsOpen(false); // ← mobile menu ko band karo
  };

  // ✅ Smooth scroll using scrollIntoView
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // ← mobile menu band karo
  };

  // jab navbar open hoga mobile device me to body scroll nahi hogi
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // tailwind md = 768px

    if (isMobile) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    } else {
      document.body.style.overflow = "auto"; // just in case
    }

    // Clean up just in case component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


  // ✅ Auto-close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        document.body.style.overflow = "auto"; // reset scroll
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      // className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-b border-gray-200 dark:border-gray-700"

      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-github-header border-b border-gray-200 dark:border-github-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-baseline space-x-5 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-1 py-2 text-sm lg:text-base font-medium transition-all duration-200 border-b-2 ${
                      isActive
                        ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                        : "border-transparent text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={handleResumeClick}
              className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 border border-blue-600 rounded-md text-xs lg:text-sm font-medium text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors duration-200 shadow-sm"
            >
              <FaFileAlt className="w-4 h-4 mr-2" />
              Resume
            </button>

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4 mr-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-github-card transition-colors duration-200"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileNav"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-github-header border-t border-gray-200 dark:border-github-border"
          >
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-2 sm:px-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={handleResumeClick}
                className="w-full text-left inline-flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium transition-colors duration-200"
              >
                <FaFileAlt className="w-4 h-4 mr-2" />
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;




