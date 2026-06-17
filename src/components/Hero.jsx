import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
// import Image from "../assets/images/Image/Tausif-Image.jpg";
import profileImage from "../assets/images/Image/Qureshi.png";

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
      className="relative min-h-screen flex items-center bg-white dark:bg-github-bg pt-[4rem] border-b border-gray-200 dark:border-github-border transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden">
        {/* Background accents removed for flat look */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <div className="mb-5 text-center md:text-left">
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur dark:border-blue-900/40 dark:bg-white/5 dark:text-blue-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                Available for opportunities
              </div>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center md:text-left">
              <span className="text-[#8257e5]">
                Tausif Qureshi
              </span>
            </h1>

            <h2 className="mt-3 text-base font-semibold tracking-wide text-blue-700 dark:text-blue-300 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center md:text-left">
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

            <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed text-gray-700 dark:text-gray-400 max-w-xl text-center md:text-left">
              I deliver reliable, polished user interfaces with performance,
              accessibility and maintainability at the core. Focused on building
              modern, scalable front-end systems that empower businesses.
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row items-center justify-center md:justify-start lg:justify-start">
              <button
                onClick={handleContactMe}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FaEnvelope className="mr-2 h-4 w-4" /> Contact Me
              </button>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center rounded-lg bg-transparent border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm transition hover:bg-blue-600 hover:text-white dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FaDownload className="mr-2 h-4 w-4" /> Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              <a
                href="https://github.com/Tausifqureshi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full bg-white/80 p-2 text-gray-900 shadow-sm transition hover:scale-110 dark:bg-gray-800 dark:text-white"
              >
                <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tausif-qureshi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-white/80 p-2 text-[#0077B5] shadow-sm transition hover:scale-110 dark:bg-gray-800"
              >
                <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-white/80 p-2 text-[#25D366] shadow-sm transition hover:scale-110 dark:bg-gray-800"
              >
                <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="rounded-full bg-white/80 p-2 text-[#D93025] shadow-sm transition hover:scale-110 dark:bg-gray-800"
              >
                <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="tel:+918429097693"
                aria-label="Phone"
                className="rounded-full bg-white/80 p-2 text-[#34B7F1] shadow-sm transition hover:scale-110 dark:bg-gray-800"
              >
                <FaPhone className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>

            {/* Skills */}
            <div className="mt-7 flex flex-wrap gap-2 justify-center md:justify-start">
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

          {/* Right Content (Image + Card) */}
          <div className="order-1 md:order-2 flex justify-center md:justify-center lg:justify-end lg:mr-4">
            <div className="relative w-full max-w-sm md:max-w-[340px] min-[900px]:max-w-[400px] lg:max-w-md md:mb-16">
              {/* Portrait */}
              <div className="relative mx-auto mb-[.4rem] z-20 h-[160px] w-[160px] md:absolute md:-top-14 md:-right-2 lg:h-[180px] lg:w-[180px] md:left-auto md:mx-0 md:mb-0 md:translate-x-0 md:h-[160px] md:w-[160px] lg:-right-6 lg:-top-14">
                {/* Orbiting Icons Container */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 z-30 rounded-full pointer-events-none"
                >
                  {/* React Icon */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-3 -left-3 md:-top-3 md:-left-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-blue-500 w-11 h-11 flex items-center justify-center pointer-events-auto"
                  >
                    <FaReact size={24} />
                  </motion.div>

                  {/* JS Icon */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-3 -right-3 md:-top-3 md:-right-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-yellow-500 w-11 h-11 flex items-center justify-center pointer-events-auto"
                  >
                    <FaJsSquare size={24} />
                  </motion.div>

                  {/* Node Icon */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-3 -right-3 md:-bottom-3 md:-right-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-green-500 w-11 h-11 flex items-center justify-center pointer-events-auto"
                  >
                    <FaNodeJs size={24} />
                  </motion.div>

                  {/* Express Icon */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-3 -left-3 md:-bottom-3 md:-left-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-800 dark:text-gray-200 w-11 h-11 flex items-center justify-center pointer-events-auto"
                  >
                    <SiExpress size={16} />
                  </motion.div>
                </motion.div>

                <div className="h-full w-full overflow-hidden rounded-full border-2 border-[#8257e5]/80 bg-white/90 shadow-xl transition-all duration-300 hover:scale-[1.06] dark:bg-white/5">
                  <img
                    src={profileImage}
                    alt="Tausif Qureshi portrait"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Developer Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="group/card relative z-10 md:mt-0 rounded-2xl border border-[#8257e5]/30 dark:border-[#8257e5]/40 bg-white dark:bg-gray-900/95 shadow-[0_8px_30px_rgba(130,87,229,0.15)] dark:shadow-2xl ring-1 ring-[#8257e5]/20 dark:ring-[#8257e5]/20 p-4 transition-all duration-300 hover:z-40"
              >
                <div className="flex items-center gap-2 border-b border-gray-100 dark:border-white/10 px-2 py-3 text-xs">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-semibold text-gray-500 dark:text-gray-300">
                    developer.js
                  </span>
                </div>
                <pre className="px-2 py-4 text-[14px] md:text-[12px] min-[900px]:text-[13.5px] lg:text-[15px] leading-6 lg:leading-8 font-mono font-medium whitespace-pre-wrap break-words">
                  <span className="text-pink-500 dark:text-pink-400">const</span>{" "}
                  <span className="text-teal-500 dark:text-emerald-400">developer</span>{" "}
                  <span className="text-pink-500 dark:text-pink-400">=</span>{" "}
                  <span className="text-pink-500 dark:text-pink-400">{"{"}</span>
                  {"\n  "}
                  <span className="text-teal-500 dark:text-emerald-400">name</span>
                  <span className="text-pink-500 dark:text-pink-400">:</span>{" "}
                  <span className="text-amber-500 dark:text-amber-300">"Tausif Qureshi"</span>
                  <span className="text-pink-500 dark:text-pink-400">,</span>
                  {"\n  "}
                  <span className="text-teal-500 dark:text-emerald-400">role</span>
                  <span className="text-pink-500 dark:text-pink-400">:</span>{" "}
                  <span className="text-amber-500 dark:text-amber-300">"Frontend Developer"</span>
                  <span className="text-pink-500 dark:text-pink-400">,</span>
                  {"\n  "}
                  <span className="text-teal-500 dark:text-emerald-400">experience</span>
                  <span className="text-pink-500 dark:text-pink-400">:</span>{" "}
                  <span className="text-amber-500 dark:text-amber-300">"2+ years"</span>
                  <span className="text-pink-500 dark:text-pink-400">,</span>
                  {"\n  "}
                  <span className="text-teal-500 dark:text-emerald-400">skills</span>
                  <span className="text-pink-500 dark:text-pink-400">:</span>{" "}
                  <span className="text-pink-500 dark:text-pink-400">[</span>
                  <span className="text-amber-500 dark:text-amber-300">"React"</span>
                  <span className="text-pink-500 dark:text-pink-400">,</span>{" "}
                  <span className="text-amber-500 dark:text-amber-300">"Node.js"</span>
                  <span className="text-pink-500 dark:text-pink-400">]</span>
                  <span className="text-pink-500 dark:text-pink-400">,</span>
                  {"\n  "}
                  <span className="text-teal-500 dark:text-emerald-400">passion</span>
                  <span className="text-pink-500 dark:text-pink-400">:</span>{" "}
                  <span className="text-amber-500 dark:text-amber-300">"Building amazing web apps"</span>
                  {"\n"}
                  <span className="text-pink-500 dark:text-pink-400">{"};"}</span>
                </pre>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
   