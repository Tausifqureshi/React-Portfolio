import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Storefusion, Udmy, Rodan } from "../assets/images/Project-Image/index.js";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "StoreFusion-Digital",
      category: "React",
      description:
        "Full-Stack Digital E-Commerce Platform for Seamless Online Retail and Secure Shopping Experiences.",
      image: Storefusion,
      features: [
        "Developed scalable shopping and product management systems with secure role-based access authentication flow.",
        "Managed modular Firestore services with optimized on-demand queries reducing database latency operations efficiently.",
        "Built centralized Redux Toolkit state management minimizing unnecessary component-level frontend UI re-renders.",
        "Optimized application performance using React Suspense, useMemo, and secure Razorpay payment checkout integration."
      ],
      technologies: [
        "React.js",
        "Vite",
        "Redux Toolkit (RTK)",
        "Firebase",
        "Tailwind CSS",
        "Material-UI",
        "Chart.js"
      ],
      github: "https://github.com/Tausifqureshi/StoreFusion-Digital",
      demo: "https://storefusion-digital.netlify.app/",
      metrics: { performance: "98", seo: "100", loadTime: "0.6s" },
    },
    {
      title: "EduTech LMS Platform",
      category: "React",
      description:
        "Comprehensive learning management system featuring dynamic course browsing, structured filtering, and robust cart management.",
      image: Udmy,
      features: [
        "Created end-to-end course browsing system presenting 50+ programs with structured category-based filtering.",
        "Configured dynamic routes for detailed and category-based views using React Router to enhance user navigation.",
        "Implemented cart management using Context API and useReducer with persistent localStorage support.",
        "Designed responsive layout with structured components and category-based sidebar navigation."
      ],
      technologies: [
        "React",
        "Context API",
        "useReducer",
        "React Router",
        "JavaScript",
        "CSS",
        "LocalStorage"
      ],
      github: "https://github.com/Tausifqureshi/Udemy-Clone",
      demo: "https://65d3989f42b0a515514a520e--polite-palmier-e23c7f.netlify.app/",
      metrics: { performance: "95", seo: "100", loadTime: "0.9s" },
    },
    {
      title: "Enterprise E-Commerce Portal",
      category: "HTML/CSS",
      description:
        "Scalable skincare e-commerce storefront featuring interactive product sliders, optimized cart state, and a seamless checkout flow.",
      image: Rodan,
      features: [
        "Constructed product, cart, and checkout pages for smooth shopping experience",
        "Created interactive product slider showcasing products for user-friendly browsing",
        "Tracked user actions in LocalStorage to enhance interactivity",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      github: "https://github.com/Tausifqureshi/RodanAndFields_clone",
      demo: "https://rodanfieldwebsite.netlify.app/home.html",
      metrics: { performance: "92", seo: "98", loadTime: "1.1s" },
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-github-bg border-b border-gray-200 dark:border-github-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8257e5] dark:text-[#9e7df0] mb-4 text-center pb-2">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["All", "React", "HTML/CSS"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#8257e5] text-white shadow-md transform scale-105 border-transparent"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-github-card dark:border-github-border dark:text-gray-300 dark:hover:bg-[#21262d]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                className="group/card relative bg-white border border-gray-200 dark:border-github-border dark:bg-github-card rounded-2xl shadow-sm hover:shadow-[0_15px_45px_rgba(130,87,229,0.1)] dark:hover:shadow-[0_15px_45px_rgba(130,87,229,0.22)] hover:border-[#8257e5]/40 overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Browser Window Frame */}
                <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-t-2xl border-b border-gray-200 dark:border-gray-700/50">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-gray-200/50 dark:bg-[#0d1117] border-b border-gray-300/30 dark:border-github-border/30">
                    <div className="flex items-center space-x-1.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f56] shadow-sm"></div>
                      <div className="w-2 h-2 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                      <div className="w-2 h-2 rounded-full bg-[#27c93f] shadow-sm"></div>
                    </div>
                    {/* URL Bar */}
                    <div className="flex items-center justify-center bg-white/80 dark:bg-[#010409] text-[10px] text-gray-400 dark:text-gray-500 rounded-md px-8 py-0.5 mx-auto font-mono max-w-[65%] overflow-hidden truncate whitespace-nowrap border dark:border-github-border/20 shadow-inner">
                      <span className="text-[#8257e5] dark:text-[#9e7df0] opacity-80 mr-0.5 font-bold">https://</span>{project.title.toLowerCase().replace(/\s+/g, '-')}.dev
                    </div>
                  </div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden group/image">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                      <span className="text-white text-xs font-semibold px-2.5 py-1 rounded bg-[#8257e5]/80 backdrop-blur-sm shadow-md">Click Demo to explore</span>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Performance Metrics */}
                  <div className="flex flex-wrap items-center gap-3 mb-4 bg-gray-50 dark:bg-[#0d1117]/50 rounded-xl px-3 py-1.5 border border-gray-100 dark:border-white/5 w-fit">
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase">Perf:</span>
                      <span className="text-[10px] font-extrabold text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        {project.metrics.performance}%
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase">SEO:</span>
                      <span className="text-[10px] font-extrabold text-[#8257e5] dark:text-[#9e7df0] bg-[#8257e5]/10 px-1.5 py-0.5 rounded">
                        {project.metrics.seo}%
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase">Load:</span>
                      <span className="text-[10px] font-extrabold text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                        {project.metrics.loadTime}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>

                    <ul className="list-none space-y-2 text-xs text-gray-600 dark:text-gray-300">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-[#8257e5] dark:bg-[#9e7df0] rounded-full mr-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-violet-50/50 dark:bg-violet-950/20 text-violet-700 dark:text-[#9e7df0] rounded-lg text-xs font-semibold border border-violet-100/50 dark:border-violet-900/30 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-transparent border border-[#8257e5] text-[#8257e5] dark:text-[#9e7df0] rounded-xl hover:bg-[#8257e5] hover:text-white dark:hover:text-white transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md active:scale-95"
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-[#8257e5] to-[#6c42ca] hover:from-[#6c42ca] hover:to-[#582bca] text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-[0_4px_15px_rgba(130,87,229,0.3)] active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
