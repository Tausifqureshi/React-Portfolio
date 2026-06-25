import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import useScrollSpy from "../hooks/useScrollSpy";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isResumeLoading, setIsResumeLoading] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsResumeLoading(true);
    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1HEieYCbIEsRKNi4tmVXq97Y7XArg3MAU/view",
        "_blank"
      );
      setIsResumeLoading(false);
      setIsOpen(false);
    }, 1200);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/70 dark:bg-[#010409]/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-0"
          : "bg-transparent border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#8257e5] dark:text-[#9e7df0] font-mono tracking-tight drop-shadow-[0_0_8px_rgba(130,87,229,0.4)] dark:drop-shadow-[0_0_8px_rgba(158,125,240,0.4)] transition-all hover:drop-shadow-[0_0_12px_rgba(130,87,229,0.6)] dark:hover:drop-shadow-[0_0_12px_rgba(158,125,240,0.6)]">
              &lt;Tausif /&gt;
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
                    className={`relative px-2 py-2 text-sm lg:text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-[#8257e5] dark:text-[#9e7df0]"
                        : "text-gray-700 dark:text-gray-200 hover:text-[#8257e5] dark:hover:text-[#9e7df0]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8257e5] dark:bg-[#9e7df0] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={handleResumeClick}
              disabled={isResumeLoading}
              className={`group inline-flex items-center justify-center rounded-lg bg-transparent border border-[#8257e5] px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold text-[#8257e5] dark:text-[#9e7df0] shadow-sm transition hover:bg-[#8257e5] hover:text-white dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 ${isResumeLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              {isResumeLoading ? (
                <svg className="animate-spin mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <FileText className="mr-2 h-4 w-4" />
              )}
              {isResumeLoading ? 'Opening...' : 'Resume'}
            </button>

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4 mr-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-[#8257e5] dark:hover:text-[#9e7df0] hover:bg-gray-100 dark:hover:bg-github-card transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
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
                    className={`w-full text-left px-3 py-2 text-base font-semibold rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-violet-50 text-[#8257e5] dark:bg-violet-900/20 dark:text-[#9e7df0]"
                        : "text-gray-700 dark:text-gray-200 hover:text-[#8257e5] dark:hover:text-[#9e7df0]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={handleResumeClick}
                disabled={isResumeLoading}
                className={`w-full text-left inline-flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#8257e5] dark:hover:text-[#9e7df0] text-base font-medium transition-colors duration-200 ${isResumeLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                {isResumeLoading ? (
                  <svg className="animate-spin mr-2 h-4 w-4 text-[#8257e5] dark:text-[#9e7df0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <FileText className="w-4 h-4 mr-2" />
                )}
                {isResumeLoading ? 'Opening...' : 'Resume'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;




