import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "React.js", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", category: "Frontend", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Material UI", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { name: "Redux (RTK)", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "React Router", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
  { name: "Context API", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Firebase", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Chrome DevTools", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
  { name: "Postman", category: "Tools", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Vercel", category: "Tools", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
  { name: "Netlify", category: "Tools", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
  { name: "Render", category: "Tools", logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/render_logo_icon_168406.png" },
];

const Skills = () => {
  const [filter, setFilter] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => filter === "All" || skill.category === filter
  );

  return (
    <section id="skills" className="py-24 bg-white dark:bg-github-bg border-b border-gray-200 dark:border-github-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8257e5] mb-4 pb-2">My Tech Stack</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Tools & technologies I use daily to build responsive, accessible, and scalable frontend solutions.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["All", "Frontend", "Backend", "Tools"].map((cat) => (
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
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                key={skill.name}
                className="group relative flex flex-col items-center justify-center bg-white dark:bg-github-card p-6 border border-gray-200 dark:border-github-border rounded-2xl shadow-sm hover:shadow-[0_0_20px_rgba(130,87,229,0.15)] hover:border-[#8257e5]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8257e5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain mb-4 transform group-hover:scale-110 transition-transform duration-300 filter dark:brightness-90"
                  loading="lazy"
                />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center relative z-10">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
