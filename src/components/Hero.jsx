import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
// import Image from "../assets/images/Image/Tausif-Image.jpg";
import Image from "../assets/images/Image/Qureshi.png";

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
      className="relative min-h-screen flex items-center bg-white dark:bg-gray-950 pt-[4rem] border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
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
          <div className="lg:ml-5">
            <div className="mb-5 text-center md:text-left">
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur dark:border-blue-900/40 dark:bg-white/5 dark:text-blue-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                Available for opportunities
              </div>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center md:text-left">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-transparent px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white dark:text-blue-300"
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
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg md:mb-16">
              {/* Portrait */}
              <div className="mx-auto mb-[.4rem] z-20 h-[160px] w-[160px] overflow-hidden rounded-full border-4 border-blue-400 bg-white/90 shadow-xl ring-2 ring-blue-500/30 transition-all duration-300 hover:z-50 hover:scale-[1.06] dark:bg-white/5 md:absolute md:-top-14 md:-right-2 lg:h-[180px] lg:w-[180px]  md:left-auto md:mx-0 md:mb-0 md:translate-x-0 md:h-[160px] md:w-[160px] lg:-right-6 lg:-top-14">
                <img
                  src={Image}
                  alt="Tausif Qureshi portrait"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Developer Card */}
              <div
                className="group/card relative z-10 md:mt-0 rounded-2xl border border-teal-200 dark:border-emerald-400/30 bg-white dark:bg-gray-900/95 shadow-[0_8px_30px_rgb(45,212,191,0.2)] dark:shadow-2xl ring-1 ring-teal-100 dark:ring-emerald-400/20 p-4 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:z-40"
              >
                <div className="flex items-center gap-2 border-b border-gray-100 dark:border-white/10 px-2 py-3 text-xs">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-semibold text-gray-500 dark:text-gray-300">
                    developer.js
                  </span>
                </div>
                <pre className="px-2 py-4 text-[14px] md:text-[15px] leading-8 font-mono font-medium">
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
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
   