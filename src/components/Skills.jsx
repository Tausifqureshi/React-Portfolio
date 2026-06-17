import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Core",
    skills: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    ]
  },
  {
    title: "Ecosystem & API",
    skills: [
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "React Router", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
      { name: "REST API", logo: "https://www.vectorlogo.zone/logos/json/json-icon.svg" },
    ]
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Netlify", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-github-bg border-b border-gray-200 dark:border-github-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8257e5] mb-4 pb-2">My Tech Stack</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools & technologies I use daily to build responsive, accessible, and scalable frontend solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center md:text-left border-l-4 border-[#8257e5] pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    key={index}
                    className="group relative flex flex-col items-center justify-center bg-white dark:bg-github-card p-6 border border-gray-200 dark:border-github-border rounded-2xl shadow-sm hover:shadow-[0_0_20px_rgba(130,87,229,0.15)] hover:border-[#8257e5]/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8257e5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain mb-4 transform group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center relative z-10">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
