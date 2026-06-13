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
        "E-commerce platform for digital product sales with seamless shopping flow and admin panel.",
      image: Storefusion,
      features: [
        "Implemented shopping flow including product catalog, order cart, and purchase completion",
        "Built admin panel for creating, updating, and deleting products",
        "Optimized performance and ensured responsive design across devices",
      ],
      technologies: [
        "React",
        "Redux",
        "Firebase",
        "Tailwind CSS",
        "Material-UI",
      ],
      github: "https://github.com/Tausifqureshi/StoreFusion-Digital",
      demo: "https://storefusion-digital.netlify.app/",
    },
    {
      title: "Udemy Clone",
      category: "React",
      description:
        "Online course platform replicating key Udemy features with interactive course detail pages.",
      image: Udmy,
      features: [
        "Designed course pages with category filters, detailed view, and cart features",
        "Constructed interactive course detail pages with dynamic content to make navigation easier",
        "Integrated React Router for smooth page navigation",
      ],
      technologies: [
        "React",
        "Context API",
        "useReducer",
        "React Router",
        "JavaScript",
        "CSS",
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
      className="py-20 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
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
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
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
                className="bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
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
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
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
