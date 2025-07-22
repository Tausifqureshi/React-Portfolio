// import React from 'react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'Frontend',
//       skills: [
//         { name: 'React', level: 90 },
//         { name: 'JavaScript', level: 85 },
//         { name: 'TypeScript', level: 80 },
//         { name: 'HTML/CSS', level: 95 },
//         { name: 'Tailwind CSS', level: 90 },
//         { name: 'Next.js', level: 75 }
//       ]
//     },
//     {
//       title: 'Backend & Tools',
//       skills: [
//         { name: 'Node.js', level: 70 },
//         { name: 'Express.js', level: 65 },
//         { name: 'MongoDB', level: 60 },
//         { name: 'Git', level: 85 },
//         { name: 'Webpack', level: 70 },
//         { name: 'REST APIs', level: 75 }
//       ]
//     },
//     {
//       title: 'Design & Others',
//       skills: [
//         { name: 'Figma', level: 80 },
//         { name: 'Responsive Design', level: 90 },
//         { name: 'Performance Optimization', level: 75 },
//         { name: 'Testing', level: 65 },
//         { name: 'Accessibility', level: 70 },
//         { name: 'SEO', level: 60 }
//       ]
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Skills & Technologies
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Here are the technologies and tools I work with to bring ideas to life.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <div
//               key={categoryIndex}
//               className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
//             >
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
//                 {category.title}
//               </h3>
//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex} className="space-y-2">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-700 dark:text-gray-300 font-medium">
//                         {skill.name}
//                       </span>
//                       <span className="text-sm text-gray-500 dark:text-gray-400">
//                         {skill.level}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: `${skill.level}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;















import React from 'react';

const skills = [
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    name: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Redux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    name: 'Git & GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'VS Code',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Proficient in modern frontend technologies, UI frameworks, and dev tools.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-2"
                loading="lazy"
              />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
