import React from 'react';
import { User, Code, Cpu, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import codingIllustration from '../assets/images/coding_illustration.png';

function About() {
  const domains = [
    {
      title: "Frontend Development",
      icon: Code,
      tech: "React.js, Redux Toolkit, Tailwind CSS",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      hoverClass: "hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)]"
    },
    {
      title: "Backend Development",
      icon: Cpu,
      tech: "Node.js, Express.js, RESTful APIs",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      hoverClass: "hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.12)]"
    },
    {
      title: "Database Design",
      icon: Database,
      tech: "MongoDB, Indexing, Schema Design",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      hoverClass: "hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.12)]"
    },
    {
      title: "Deployment & DevOps",
      icon: Globe,
      tech: "Vercel, Render, Git/GitHub",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      hoverClass: "hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.12)]"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-github-bg border-b border-gray-200 dark:border-github-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8257e5] dark:text-[#9e7df0] mb-4 pb-2 flex items-center justify-center">
            <User className="w-8 h-8 mr-3 text-[#8257e5] dark:text-[#9e7df0]" />
            What I do
          </h2>
          <p className="text-sm md:text-base font-bold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
            Crazy MERN Stack Developer who wants to explore every tech stack
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Domains (Slides in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              <p>
                Hello, I am <span className="font-semibold text-[#8257e5] dark:text-[#9e7df0]">Tausif Qureshi</span>, a dedicated <span className="font-semibold text-[#8257e5] dark:text-[#9e7df0]">MERN Stack Developer</span> based in Mumbai, Maharashtra.
              </p>
              <p>
                With <span className="font-semibold text-[#8257e5] dark:text-[#9e7df0]">2 years of professional experience</span>, I specialize in building scalable and production-ready web applications using React.js, Node.js, Express.js, and MongoDB.
              </p>
              <p>
                As a <span className="font-semibold text-emerald-600 dark:text-emerald-400">BCA Graduate</span>, my core expertise includes REST API development, JWT Authentication, complex state management with Redux Toolkit (RTK), and optimizing application performance to deliver robust end-to-end solutions.
              </p>
            </div>

            {/* Domains Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {domains.map((domain, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-2xl shadow-sm transition-all duration-300 cursor-default ${domain.hoverClass}`}
                >
                  <div className={`p-3 rounded-xl ${domain.bgColor} ${domain.color} flex-shrink-0`}>
                    <domain.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base leading-tight">
                      {domain.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                      {domain.tech}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual High-Tech Image Card (Slides in from Right with 0.2s delay) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center select-none"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group">
              <img 
                src={codingIllustration} 
                alt="Modern Coding Developer Illustration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Glassmorphic Badge representing 2 Years */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/70 dark:bg-black/75 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 dark:border-white/10 flex items-center justify-between shadow-lg">
                <div>
                  <h5 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Active Developer</h5>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">MERN Full-Stack Mastery</p>
                </div>
                <span className="text-sm font-extrabold text-[#8257e5] dark:text-[#9e7df0] bg-[#8257e5]/10 dark:bg-[#9e7df0]/15 px-3 py-1 rounded-full font-mono">
                  2 Yrs
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
