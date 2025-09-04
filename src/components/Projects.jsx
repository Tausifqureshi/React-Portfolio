import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Storefusion, Udmy, Rodan } from "./Project-Image/index.js";

const Projects = () => {
  // const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description:
  //       "A full-stack e-commerce solution with modern design and seamless user experience.",
  //     image:
  //       Storefusion,
  //     features: [
  //       "User authentication and authorization",
  //       "Product catalog with search and filtering",
  //       "Shopping cart and checkout process",
  //     ],
  //     technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  //     github: "https://github.com/johndoe/ecommerce-platform",
  //     demo: "https://ecommerce-demo.com",
  //   },
  //   {
  //     title: "Task Management App",
  //     description:
  //       "A collaborative task management application with real-time updates and team features.",
  //     image:
  //       Udmy,
  //     technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
  //     features: [
  //       "Real-time task updates",
  //       "Team collaboration features",
  //       "Drag and drop functionality",
  //     ],
  //     github: "https://github.com/johndoe/task-manager",
  //     demo: "https://taskmanager-demo.com",
  //   },
  //   {
  //     title: "Weather Dashboard",
  //     description:
  //       "A beautiful weather application with detailed forecasts and location-based features.",
  //     image:
  //       Rodan,
  //     technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
  //     features: [
  //       "Current weather conditions",
  //       "7-day weather forecast",
  //       "Location-based weather data",
  //     ],
  //     github: "https://github.com/johndoe/weather-dashboard",
  //     demo: "https://weather-demo.com",
  //   },
  // ];

  const projects = [
    {
      title: "StoreFusion-Digital",
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

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-150 to-purple-100 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>

                  <ul className="list-none space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {/* Blue Dot */}
                        <span className="mt-1 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                        {/* Text */}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <FaGithub className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
