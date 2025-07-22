import React from 'react';
import { Github, Linkedin, MessageCircle, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/johndoe',
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub'
    },
    {
      href: 'https://linkedin.com/in/johndoe',
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn'
    },
    {
      href: 'https://wa.me/1234567890',
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp'
    }
  ];

  const quickLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'skills', label: 'Skills' },
    { href: 'projects', label: 'Projects' },
    { href: 'contact', label: 'Contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">John Doe</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Frontend Developer passionate about creating beautiful, functional, 
              and user-friendly web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 hover:text-blue-400"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-gray-300 hover:text-white transition-colors duration-200 w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>john.doe@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-10 right-7 w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
