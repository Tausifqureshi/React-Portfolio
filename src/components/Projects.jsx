import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
    },
    {
      title: "Udemy Clone",
      category: "React",
      description:
        "Online learning platform inspired by Udemy with comprehensive course browsing and cart management.",
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
    },
    {
      title: "Rodan+Fields Clone",
      category: "HTML/CSS",
      description:
        "Skincare e-commerce website clone showcasing shopping features with cart and checkout.",
      image: Rodan,
      features: [
        "Constructed product, cart, and checkout pages for smooth shopping experience",
        "Created interactive product slider showcasing products for user-friendly browsing",
        "Tracked user actions in LocalStorage to enhance interactivity",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      github: "https://github.com/Tausifqureshi/RodanAndFields_clone",
      demo: "https://rodanfieldwebsite.netlify.app/home.html",
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8257e5] mb-4 text-center pb-2">
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
                    ? "bg-blue-600 text-white shadow-md transform scale-105 border-transparent"
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
                className="bg-white border border-gray-200 dark:border-github-border dark:bg-github-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Browser Window Frame */}
                <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center px-3 py-2 space-x-1.5 bg-gray-200 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm"></div>
                  </div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden group/image">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>

                    <ul className="list-none space-y-2 text-xs text-gray-600 dark:text-gray-300">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="mt-1 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
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
                        className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium border border-blue-100 dark:border-blue-800"
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
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors duration-200 text-sm font-medium shadow-sm hover:shadow-md"
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium shadow-sm hover:shadow-md"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5 mr-2" />
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
