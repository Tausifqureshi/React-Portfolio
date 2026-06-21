import React from 'react';
import { Zap, Code, Palette, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-github-bg border-b border-gray-200 dark:border-github-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8257e5] mb-4 pb-2 flex items-center justify-center">
            <Zap className="w-8 h-8 text-yellow-500 mr-3" />
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A glimpse into my background, experience, and the core principles that drive my development process.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main About Card (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-gradient-to-br from-white to-blue-50/30 dark:from-github-card dark:to-[#0d1117] border border-gray-200 dark:border-github-border rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Hello, I am <span className="font-semibold text-blue-600 dark:text-blue-400">Tausif Qureshi</span>, a dedicated <span className="font-semibold text-[#8257e5]">MERN Stack Developer</span> based in Mumbai, Maharashtra.
              </p>
              <p>
                With <span className="font-semibold text-blue-600 dark:text-blue-400">2 years of professional experience</span>, I specialize in building scalable and production-ready web applications using React.js, Node.js, Express.js, and MongoDB.
              </p>
              <p>
                My core expertise includes REST API development, JWT Authentication, complex state management with Redux Toolkit (RTK), and optimizing application performance to deliver robust end-to-end solutions.
              </p>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#8257e5] to-[#6c42ca] text-white rounded-3xl p-8 flex flex-col justify-center items-center shadow-lg transform transition-transform hover:-translate-y-2 duration-300"
          >
            <Briefcase className="w-14 h-14 mb-4 opacity-90" />
            <h3 className="text-6xl font-extrabold mb-2">2</h3>
            <p className="text-lg font-medium opacity-90 text-center">Years of Experience</p>
          </motion.div>

          {/* Clean Code Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Clean Architecture</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Writing maintainable, scalable, and efficient code following best practices and modern design patterns.
            </p>
          </motion.div>

          {/* UI/UX Design Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-7 h-7 text-[#8257e5] dark:text-[#9e7df0]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Performance Optimized</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Improving application performance using techniques like Lazy Loading, Code Splitting, and React Suspense.
            </p>
          </motion.div>

          {/* Education/Learning Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-center group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">BCA Graduate</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Bachelor of Computer Applications<br/>
              <span className="text-sm font-medium text-gray-500 mt-2 block">Institute of Management & Engineering</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
