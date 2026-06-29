import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Download } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase
} from "react-icons/fa";
import { SiExpress, SiRedux, SiMongodb } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
// import Image from "../assets/images/Image/Tausif-Image.jpg";
import profileImage from "../assets/images/Image/Qureshi.png";

const Hero = () => {
  const [isCVLoading, setIsCVLoading] = useState(false);

  const handleDownloadCV = () => {
    setIsCVLoading(true);
    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1HEieYCbIEsRKNi4tmVXq97Y7XArg3MAU/view",
        "_blank"
      );
      setIsCVLoading(false);
    }, 1200);
  };

  const handleContactMe = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white dark:bg-github-bg pt-[4rem] border-b border-gray-200 dark:border-github-border transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-[0.15]">
          {/* Background shapes removed for a clean solid theme */}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Main Intro */}
          <div className="order-3 lg:order-1 lg:col-span-2 flex flex-col justify-center rounded-3xl bg-white dark:bg-[#161b22] border border-gray-100 dark:border-white/5 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_15px_40px_rgba(255,255,255,0.05)] dark:hover:border-white/10 z-10">
            <div className="mb-6 md:mb-8 text-center lg:text-left flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 backdrop-blur-md shadow-[0_2px_10px_-3px_rgba(16,185,129,0.2)] transition-all hover:bg-emerald-500/20 hover:border-emerald-500/30">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="tracking-wide">Available for opportunities</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-400 backdrop-blur-md shadow-[0_2px_10px_-3px_rgba(168,85,247,0.2)] transition-all hover:bg-purple-500/20 hover:border-purple-500/30">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="tracking-wide">Optimized React Architecture</span>
              </div>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight mb-2 text-center lg:text-left">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#8257e5,#a855f7,#40C9FF,#8257e5)] animate-text-gradient">
                Tausif Qureshi
              </span>
            </h1>

            <h2 className="mt-3 text-base font-semibold tracking-wide text-[#8257e5] dark:text-[#9e7df0] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl h-8 md:h-10 text-center lg:text-left">
              <Typewriter
                words={[
                  "Hi, I'm Tausif Qureshi",
                  "MERN Stack Developer",
                  "React.js Specialist",
                  "Building Scalable Web Apps"
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={70}
                delaySpeed={1800}
              />
            </h2>

            <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed text-gray-700 dark:text-gray-400 max-w-xl font-medium text-center lg:text-left mx-auto lg:mx-0">
              MERN Stack Developer with 2 years of experience specializing in building scalable and production-ready web applications using React.js, Node.js, Express.js, and MongoDB.
            </p>

            {/* Quick Developer Stats */}
            <div className="mt-6 flex flex-wrap gap-6 justify-center lg:justify-start border-t border-gray-100 dark:border-white/5 pt-6">
              {[
                { number: "15+", label: "Projects Delivered" },
                { number: "500+", label: "GitHub Commits" },
                { number: "30+", label: "API Integrations" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#8257e5] dark:text-[#9e7df0]">
                    {stat.number}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <button
                onClick={handleContactMe}
                className="inline-flex items-center justify-center rounded-lg bg-[#8257e5] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6c42ca] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-violet-500 w-auto"
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </button>
              <button
                onClick={handleDownloadCV}
                disabled={isCVLoading}
                className={`group inline-flex items-center justify-center rounded-lg bg-transparent border border-[#8257e5] px-6 py-3 text-sm font-semibold text-[#8257e5] dark:text-[#9e7df0] shadow-sm transition hover:bg-[#8257e5] hover:text-white dark:hover:text-white hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-violet-500 w-auto ${isCVLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                {isCVLoading ? (
                  <svg className="animate-spin mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                )}
                {isCVLoading ? 'Opening...' : 'Download CV'}
              </button>
            </div>
          </div>

          {/* Card 2: Profile Image with Orbiting Icons */}
          <div className="order-1 lg:order-2 lg:col-span-1 flex flex-col items-center justify-center rounded-3xl bg-white dark:bg-[#161b22] border border-gray-100 dark:border-white/5 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_15px_40px_rgba(255,255,255,0.05)] dark:hover:border-white/10 min-h-[340px] z-10 relative overflow-hidden">
            
            <div className="relative z-20 h-[180px] w-[180px] lg:h-[200px] lg:w-[200px]">
              {/* Orbiting Icons Container */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-1.5rem] z-30 rounded-full pointer-events-none"
              >
                {/* React Icon */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-4 bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/10 rounded-full shadow-lg text-blue-500 w-11 h-11 flex items-center justify-center pointer-events-auto backdrop-blur-md"
                >
                  <FaReact size={24} />
                </motion.div>

                {/* JS Icon */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 right-4 bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/10 rounded-full shadow-lg text-yellow-500 w-11 h-11 flex items-center justify-center pointer-events-auto backdrop-blur-md"
                >
                  <FaJsSquare size={24} />
                </motion.div>

                {/* Node Icon */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-0 right-4 bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/10 rounded-full shadow-lg text-green-500 w-11 h-11 flex items-center justify-center pointer-events-auto backdrop-blur-md"
                >
                  <FaNodeJs size={24} />
                </motion.div>

                {/* Express Icon */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-0 left-4 bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/10 rounded-full shadow-lg text-gray-800 dark:text-gray-200 w-11 h-11 flex items-center justify-center pointer-events-auto backdrop-blur-md"
                >
                  <SiExpress size={16} />
                </motion.div>
              </motion.div>

              {/* Clean, solid photo frame */}
              <div className="relative h-full w-full rounded-full p-1 bg-[#8257e5] dark:bg-[#9e7df0] shadow-2xl transition-transform duration-300 hover:scale-[1.05]">
                <div className="h-full w-full overflow-hidden rounded-full bg-white dark:bg-[#0d1117] border-[3px] border-white dark:border-[#0d1117]">
                  <img
                    src={profileImage}
                    alt="Tausif Qureshi portrait"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Connect & Stack */}
          <div className="order-4 lg:order-3 lg:col-span-1 flex flex-col justify-between rounded-3xl bg-white dark:bg-[#161b22] border border-gray-100 dark:border-white/5 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_15px_40px_rgba(255,255,255,0.05)] dark:hover:border-white/10 z-10">
            <div>
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Connect</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: FaGithub, href: "https://github.com/Tausifqureshi", color: "text-gray-700 dark:text-gray-300", hoverColor: "hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/tausif-qureshi/", color: "text-[#0077B5]", hoverColor: "hover:bg-[#0077B5] hover:text-white dark:hover:bg-[#0077B5] dark:hover:text-white" },
                  { icon: FaWhatsapp, href: "https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif", color: "text-[#25D366]", hoverColor: "hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] dark:hover:text-white" },
                  { icon: Mail, href: "mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,", color: "text-[#D93025]", hoverColor: "hover:bg-[#D93025] hover:text-white dark:hover:bg-[#D93025] dark:hover:text-white" },
                  { icon: Phone, href: "tel:+918429097693", color: "text-[#34B7F1]", hoverColor: "hover:bg-[#34B7F1] hover:text-white dark:hover:bg-[#34B7F1] dark:hover:text-white" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-transparent ${social.color} border border-gray-200/50 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-transparent ${social.hoverColor}`}
                  >
                    <social.icon className="h-5 w-5 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Core Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: "React.js", icon: FaReact, color: "bg-[#61DAFB]/10 text-[#0088cc] dark:text-[#61DAFB] border-[#61DAFB]/30 hover:bg-[#61DAFB]/20 hover:border-[#61DAFB]/50" },
                  { label: "Redux Toolkit", icon: SiRedux, color: "bg-[#764ABC]/10 text-[#764ABC] dark:text-[#b48eed] border-[#764ABC]/30 hover:bg-[#764ABC]/20 hover:border-[#764ABC]/50" },
                  { label: "Node.js", icon: FaNodeJs, color: "bg-[#339933]/10 text-[#339933] dark:text-[#68d168] border-[#339933]/30 hover:bg-[#339933]/20 hover:border-[#339933]/50" },
                  { label: "Express.js", icon: SiExpress, color: "bg-gray-200/50 dark:bg-white/10 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-500/30 hover:bg-gray-300/50 dark:hover:bg-white/20 hover:border-gray-400 dark:hover:border-gray-500/50" },
                  { label: "MongoDB", icon: SiMongodb, color: "bg-[#47A248]/10 text-[#47A248] dark:text-[#61da62] border-[#47A248]/30 hover:bg-[#47A248]/20 hover:border-[#47A248]/50" },
                ].map((chip) => (
                  <span
                    key={chip.label}
                    className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[12px] font-semibold transition-all duration-300 hover:scale-105 border ${chip.color}`}
                  >
                    <chip.icon className="h-3.5 w-3.5" />
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Developer Terminal */}
          <div className="order-2 lg:order-4 lg:col-span-2 relative group rounded-3xl bg-white dark:bg-[#161b22] border border-gray-100 dark:border-white/5 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_15px_40px_rgba(255,255,255,0.05)] dark:hover:border-white/10 overflow-hidden z-10 flex flex-col justify-center">
            {/* Mac Window Controls */}
            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-[#0d1117]/50 px-6 py-3 backdrop-blur-sm">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-4 font-mono text-xs font-semibold text-gray-500 dark:text-gray-400">
                ~/developer.js
              </span>
            </div>
            
            <pre className="mt-8 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-7 md:leading-8 font-mono font-medium whitespace-pre-wrap break-words">
              <span className="text-pink-600 dark:text-pink-400">const</span>{" "}
              <span className="text-blue-600 dark:text-blue-400">developer</span>{" "}
              <span className="text-gray-800 dark:text-[#d4d4d4]">=</span>{" "}
              <span className="text-gray-800 dark:text-[#ffd700]">{"{"}</span>
              {"\n  "}
              <span className="text-yellow-600 dark:text-yellow-400">name</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">:</span>{" "}
              <span className="text-yellow-600 dark:text-yellow-400">"Tausif Qureshi"</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">,</span>
              {"\n  "}
              <span className="text-green-600 dark:text-green-400">role</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">:</span>{" "}
              <span className="text-green-600 dark:text-green-400">"MERN Stack Developer"</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">,</span>
              {"\n  "}
              <span className="text-red-600 dark:text-red-400">experience</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">:</span>{" "}
              <span className="text-red-600 dark:text-red-400">"2 Years"</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">,</span>
              {"\n  "}
              <span className="text-purple-600 dark:text-purple-400">skills</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">:</span>{" "}
              <span className="text-gray-800 dark:text-[#da70d6]">[</span>
              <span className="text-purple-600 dark:text-purple-400">"React.js"</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">,</span>{" "}
              <span className="text-purple-600 dark:text-purple-400">"Node.js"</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">,</span>{" "}
              <span className="text-purple-600 dark:text-purple-400">"MongoDB"</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">,</span>{" "}
              <span className="text-purple-600 dark:text-purple-400">"Redux (RTK)"</span>
              <span className="text-gray-800 dark:text-[#da70d6]">]</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">,</span>
              {"\n  "}
              <span className="text-cyan-600 dark:text-cyan-400">architecture</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">:</span>{" "}
              <span className="text-cyan-600 dark:text-cyan-400">"REST APIs & JWT Auth"</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">,</span>
              {"\n  "}
              <span className="text-orange-600 dark:text-orange-400">performance</span>
              <span className="text-gray-800 dark:text-[#d4d4d4]">:</span>{" "}
              <span className="text-orange-600 dark:text-orange-400">"Lighthouse Optimization"</span>
              {"\n"}
              <span className="text-gray-800 dark:text-[#ffd700]">{"};"}</span>
            </pre>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
   