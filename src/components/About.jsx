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
            whileHover={{ y: -6, scale: 1.01 }}
            className="md:col-span-2 bg-gradient-to-br from-white to-violet-50/10 dark:from-github-card dark:to-[#0d1117] border border-gray-200 dark:border-github-border rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Hello, I am <span className="font-semibold text-[#8257e5] dark:text-[#9e7df0]">Tausif Qureshi</span>, a dedicated <span className="font-semibold text-[#8257e5]">MERN Stack Developer</span> based in Mumbai, Maharashtra.
              </p>
              <p>
                With <span className="font-semibold text-[#8257e5] dark:text-[#9e7df0]">2 years of professional experience</span>, I specialize in building scalable and production-ready web applications using React.js, Node.js, Express.js, and MongoDB.
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
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-gradient-to-br from-[#8257e5] to-[#6c42ca] text-white rounded-3xl p-8 flex flex-col justify-center items-center shadow-lg transition-all duration-300"
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
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="bg-violet-100 dark:bg-violet-900/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-7 h-7 text-[#8257e5] dark:text-[#9e7df0]" />
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
            whileHover={{ y: -6, scale: 1.03 }}
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
            whileHover={{ y: -6, scale: 1.03 }}
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

          {/* Live Dev Status Card (Spans all 3 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="md:col-span-3 bg-gradient-to-r from-gray-50 to-white dark:from-github-card dark:to-[#0d1117] border border-gray-200 dark:border-github-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex flex-col gap-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Live Dev Status: Operational
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Current Focus & Learning</h4>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Currently exploring Microservices patterns, event-driven systems using RabbitMQ/Kafka, and advanced database indexing strategies for high-throughput MERN applications.
              </p>
            </div>
            
            {/* Simulated Live Console Log */}
            <div className="w-full md:w-80 bg-gray-950 dark:bg-black/40 rounded-2xl p-5 border border-gray-800 dark:border-white/5 font-mono text-[11px] md:text-xs text-green-400/90 shadow-inner overflow-hidden select-none">
              <div className="flex items-center gap-1.5 mb-3 border-b border-white/5 pb-2 text-[10px] text-gray-500">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2">stdout - dev_server.log</span>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">&gt; npm run dev</p>
                <p className="text-purple-400">VITE v5.4.8 ready in 366 ms</p>
                <p className="text-emerald-400">➜ Local: http://localhost:5174/</p>
                <p className="text-cyan-400">[info] loader loaded: Purple unified theme</p>
                <p className="text-yellow-400">[warn] updating index.html: SEO meta ready</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
