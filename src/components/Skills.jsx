
// import React from 'react';

// const skills = [
//   {
//     name: 'JavaScript',
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//   },
//   {
//     name: 'React.js',
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//   },
//   {
//     name: 'HTML5',
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
//   },
//   {
//     name: 'CSS3',
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
//   },
//   {
//     name: 'Tailwind CSS',
//     logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
//   },
//   {
//     name: 'Bootstrap',
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
//   },
//   {
//     name: 'Redux',
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
//   },
//   {
//     name: 'Git & GitHub',
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
//   },
//   {
//     name: 'Figma',
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
//   },
//   {
//     name: 'VS Code',
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
//   },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gray-50 dark:bg-gray-950 border-t border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Tech Stack
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300">
//             Proficient in modern frontend technologies, UI frameworks, and dev tools.
//           </p>
//         </div>

//         {/* Skill Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:shadow-md transition duration-300"
//             >
//               <img
//                 src={skill.logo}
//                 alt={skill.name}
//                 className="w-12 h-12 object-contain mb-2"
//                 loading="lazy"
//               />
//               <span className="text-sm font-medium text-gray-800 dark:text-gray-100 text-center">
//                 {skill.name}
//               </span>
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
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
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
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
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
  {
    name: 'ESLint',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
  },
  {
    name: 'Prettier',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg',
  },
  {
    name: 'REST APIs',
    logo: 'https://cdn-icons-png.flaticon.com/512/906/906324.png',
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-gray-950 border-t border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools & technologies I use daily to build responsive, accessible, and scalable frontend solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-5 border border-gray-200 dark:border-gray-600 rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-3"
                loading="lazy"
              />
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center">
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





