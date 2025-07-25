import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern design and seamless user experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process'
      ],
      github: 'https://github.com/johndoe/ecommerce-platform',
      demo: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
      features: [
        'Real-time task updates',
        'Team collaboration features',
        'Drag and drop functionality'
      ],
      github: 'https://github.com/johndoe/task-manager',
      demo: 'https://taskmanager-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with detailed forecasts and location-based features.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      features: [
        'Current weather conditions',
        '7-day weather forecast',
        'Location-based weather data'
      ],
      github: 'https://github.com/johndoe/weather-dashboard',
      demo: 'https://weather-demo.com'
    }
  ];

  // bg-white
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-150 to-purple-100 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
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

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-700 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
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

























// // Git hib code 
//  <h1 align="center">Hey 👋, I'm Tausif Qureshi</h1>

// <p align="center">
//   <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=26&pause=1000&center=true&vCenter=true&color=F97316&width=800&lines=Frontend+Web+Developer+%7C+React+Specialist;Creating+User+Interfaces+with+React;Exploring+Backend+with+Node,+Express+%26+MongoDB" alt="Typing SVG" />
// </p>

// ---

// ## 🧑‍💻 About Me

// <img src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" alt="dev-gif" align="right" width="300" />

// - 🚀 Frontend Developer | React Specialist | Learning Backend  
// - 🔥 Building fast, scalable UI with <strong>React.js</strong>
// - 🛠️ Strong foundation in <strong>HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Redux</strong>
// - 🎯 Passionate about **UI/UX design, web performance & clean architecture**  
// - 📦 Currently learning backend development using <strong>Node.js, Express.js & MongoDB</strong> 
// - 👨‍💻 Always learning & building to <strong>improve as a developer</strong> 
// - 📫 Reach me at: [tausifqureshi504@gmail.com](mailto:tausifqureshi504@gmail.com)  
// - 🌐 Portfolio: [tausifporfolio-website.netlify.app](https://tausifporfolio-website.netlify.app)  

// ---

// ## 🚀 Tech Stack

// <p align="center">
//   <img src="https://skillicons.dev/icons?i=html,css,js,react,redux,tailwind,bootstrap,materialui,nodejs,express,mongodb" />
// </p>

// ---

// ## 🧰 Tools & Platforms

// <p align="center">
//   <img src="https://skillicons.dev/icons?i=vscode,github,git,postman,netlify,vercel,heroku,codepen,bash" />
// </p>

// ---

// ## 🌐 Connect with Me

// <p align="center">
//   <a href="https://linkedin.com/in/tausif-qureshi" target="_blank"><img src="https://skillicons.dev/icons?i=linkedin" height="40"/></a>&nbsp;
//   <a href="mailto:tausifqureshi504@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" height="40"/></a>&nbsp;
//   <a href="https://wa.me/8429097693" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" height="40"/></a>&nbsp;
//   <a href="https://twitter.com/Tausif_qu16823" target="_blank"><img src="https://skillicons.dev/icons?i=twitter" height="40"/></a>
// </p>

// ---

// ## 📈 GitHub Stats

// <p align="center">
//   <img src="https://github-readme-stats.vercel.app/api?username=Tausifqureshi&show_icons=true&theme=tokyonight&hide_border=true" width="48%" />
//   <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tausifqureshi&layout=compact&theme=tokyonight&hide_border=true" width="48%" />
// </p>

// ---

// ## 🔥 GitHub Streak

// <p align="center">
//   <img src="https://github-readme-streak-stats.herokuapp.com/?user=Tausifqureshi&theme=github-dark-blue&hide_border=true" />
// </p>

// ---

// ## 🏆 GitHub Achievements

// <p align="center">
//   <img src="https://github-profile-trophy.vercel.app/?username=Tausifqureshi&theme=gruvbox&no-frame=true&row=1&column=7&margin-w=12&margin-h=12" />
// </p>

// ---

// ## 🧠 Developer Wisdom

// <p align="center">
//   <i>"Clean code always looks like it was written by someone who cares." – <b>Robert C. Martin</b></i>
// </p>

// ---

// <h3 align="center">⭐ Show some love by starring my repositories!</h3>

// <p align="center">
//   <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" width="100" />
// </p> 