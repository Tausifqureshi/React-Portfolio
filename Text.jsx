
// import React from 'react';
// import { Zap, Code, Palette } from 'lucide-react';

// function About
// () {
//   return (
//     <section id="about" className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative">
//           <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
//           <div className="pl-8">
//             <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
//               <Zap className="w-8 h-8 text-yellow-500 mr-3" />
//               My Journey
//             </h2>
//             <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
//               <p>
//                 Hi! I'm{" "}
//                 <span className="font-semibold text-blue-600 dark:text-blue-400">
//                   Tausif Qureshi
//                 </span>
//                 , a passionate
//                 <span className="font-semibold text-purple-600 dark:text-purple-400">
//                   {" "}
//                   Frontend Developer
//                 </span>{" "}
//                 who loves creating beautiful and functional web experiences.
//               </p>
//               <p>
//                 As a fresh graduate, I'm eager to apply my skills in
//                 <span className="font-semibold text-blue-600 dark:text-blue-400">
//                   {" "}
//                   React.js
//                 </span>
//                 ,
//                 <span className="font-semibold text-yellow-600 dark:text-yellow-400">
//                   {" "}
//                   JavaScript
//                 </span>
//                 , and modern CSS frameworks to build amazing user interfaces
//                 that users love to interact with.
//               </p>
//               <p>
//                 I believe that great frontend development combines technical
//                 expertise with creative vision. I'm constantly learning new
//                 technologies and staying updated with the latest trends in web
//                 development.
//               </p>
//               <p>
//                 My goal is to create pixel-perfect, responsive websites that
//                 provide exceptional user experiences across all devices and
//                 platforms.
//               </p>
//             </div>

//             {/* Skills Boxes */}
//             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Clean Code Box */}
//               <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors group">
//                 <div className="flex items-center mb-4">
//                   <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     Clean Code
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Writing maintainable, scalable, and efficient code following best practices and modern development standards.
//                 </p>
//               </div>

//               {/* UI/UX Design Box */}
//               <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 transition-colors group">
//                 <div className="flex items-center mb-4">
//                   <Palette className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     UI/UX Design
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Creating intuitive and visually appealing user interfaces with focus on user experience and accessibility.
//                 </p>
//               </div>
//             </div>

//             {/* Tech Stack Pills */}
//             <div className="mt-8 flex flex-wrap gap-3">
//               {[
//                 "React",
//                 "JavaScript",
//                 "TypeScript",
//                 "Tailwind CSS",
//                 "Git",
//                 "Figma",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;












 <div className="mt-8 flex justify-center space-x-5">

        {/* GitHub */}
        <a
          href="https://github.com/Tausifqureshi"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          <Github className="w-5 h-5" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tausif-qureshi/" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          <Linkedin className="w-5 h-5" />
        </a>


        <a
         href="https://api.whatsapp.com/send?phone=918429097693&text=Hi%20Tausif"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-green-600"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Email */}
        <a
          // href="mailto:tausifqureshi504@gmail.com?subject=Collaboration&body=Hi%20Tausif%2C%20I'd%20like%20to%20connect%20regarding%20your%20portfolio."
           href="mailto:tausifqureshi504@gmail.com?subject=Portfolio&body=Hi%20Tausif,"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-red-600"
          target="_blank"
        >
          <Mail className="w-5 h-5" />
        </a>

        {/* Phone Call */}
        <a
          href="tel:+918429097693"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 transition text-gray-700 dark:text-gray-300 hover:text-orange-500"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

      
      </div>






// Main code hai yaha github profile ka
{/* <h1 align="center">Hey 👋, I'm Tausif Qureshi</h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&duration=5000&pause=1500&center=true&vCenter=true&color=22D3EE&width=850&lines=Frontend+Developer+%7C+React+Specialist;Building+Scalable+and+Modern+Web+Interfaces;Proficient+in+React,+JavaScript,+and+Tailwind+CSS;Currently+Exploring+Node.js+and+MongoDB" alt="Typing SVG" />
</p>

---

## 🧑‍💻 About Me

<img src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" alt="dev-gif" align="right" width="300" />

- 🚀 Frontend Developer | React Specialist | Learning Backend  
- 🔥 Building fast, scalable UI with <strong>React.js</strong>
- 🛠️ Strong foundation in <strong>HTML5, CSS3, JavaScript (ES6+), Tailwind, Redux</strong>
- 🎯 Passionate about **UI/UX design, web performance & clean architecture**  
- 📦 Currently learning backend using <strong>Node.js, Express.js & MongoDB</strong> 
- 👨‍💻 Always learning & building projects to <strong> improve as a developer </strong>
- 📫 Reach me at: [tausifqureshi504@gmail.com](mailto:tausifqureshi504@gmail.com)  
- 🌐 Portfolio: [tausifporfolio-website.netlify.app](https://tausifporfolio-website.netlify.app)  

---

## 🚀 Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,react,redux,tailwind,bootstrap,materialui,nodejs,express,mongodb" />
</p>

---

## 🧰 Tools & Platforms

<p align="center">
  <img src="https://skillicons.dev/icons?i=vscode,github,git,postman,netlify,vercel,heroku,codepen,bash" />
</p>

---

## 🌐 Connect with Me

<p align="center">
  <a href="https://linkedin.com/in/tausif-qureshi" target="_blank"><img src="https://skillicons.dev/icons?i=linkedin" height="40"/></a>&nbsp;
  <a href="mailto:tausifqureshi504@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" height="40"/></a>&nbsp;
  <a href="https://wa.me/8429097693" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" height="40"/></a>&nbsp;
  <a href="https://twitter.com/Tausif_qu16823" target="_blank"><img src="https://skillicons.dev/icons?i=twitter" height="40"/></a>
</p>

---

## 📈 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Tausifqureshi&show_icons=true&theme=tokyonight&hide_border=true" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tausifqureshi&layout=compact&theme=tokyonight&hide_border=true" width="48%" />
</p>

---

## 🔥 GitHub Streak

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Tausifqureshi&theme=github-dark-blue&hide_border=true" />
</p>

---

## 🏆 GitHub Achievements
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=Tausifqureshi&theme=gruvbox&no-frame=true&row=1&column=7&margin-w=12&margin-h=12" />
</p>

---

## 🧠 Developer Wisdom

<p align="center">
  <i>"Clean code always looks like it was written by someone who cares." – <b>Robert C. Martin</b></i>
</p>

---

<h3 align="center">⭐ Show some love by starring my repositories!</h3>

<p align="center">
  <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" width="100" />
</p> */}
