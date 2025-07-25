
import React from 'react';
import { Zap, Code, Palette } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
          <div className="pl-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
              <Zap className="w-8 h-8 text-yellow-500 mr-3" />
              My Journey
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Hi! I'm{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Tausif Qureshi
                </span>
                , a passionate
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {" "}Frontend Developer
                </span>{" "}
                who loves creating beautiful and functional web experiences.
              </p>
              <p>
                As a fresh graduate, I'm eager to apply my skills in
                <span className="font-semibold text-blue-600 dark:text-blue-400"> React.js</span>,
                <span className="font-semibold text-yellow-600 dark:text-yellow-400"> JavaScript</span>,
                and modern CSS frameworks to build amazing user interfaces that users love to interact with.
              </p>
              <p>
                I believe that great frontend development combines technical
                expertise with creative vision. I'm constantly learning new
                technologies and staying updated with the latest trends in web
                development.
              </p>
              <p>
                My goal is to create pixel-perfect, responsive websites that
                provide exceptional user experiences across all devices and
                platforms.
              </p>
            </div>

            {/* Skills Boxes */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Clean Code Box */}
              <div className="p-6 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Clean Code
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Writing maintainable, scalable, and efficient code following best practices and modern development standards.
                </p>
              </div>

              {/* UI/UX Design Box */}
              <div className="p-6 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Palette className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    UI/UX Design
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating intuitive and visually appealing user interfaces with focus on user experience and accessibility.
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "JavaScript", "TypeScript", "Tailwind CSS", "Git", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
