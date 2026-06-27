import React, { useState, useEffect, useRef } from 'react';
import { Zap, Code, Gauge, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Bento Card Component with Mouse Glow Effect
const BentoCard = ({ children, className, delay, whileHover, ...props }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={whileHover}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      {/* Radial Hover Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(130, 87, 229, 0.08), transparent 80%)`
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};

// Simulated Live Active Terminal Console constant
const terminalLines = [
  { text: "> npm run dev", color: "text-gray-500" },
  { text: "  VITE v5.4.8 ready in 366 ms", color: "text-purple-400" },
  { text: "  ➜  Local:   http://localhost:5174/", color: "text-emerald-400" },
  { text: "[DB] MongoDB connection: OK", color: "text-cyan-400" },
  { text: "[API] GET /api/v1/projects - 200 OK (24ms)", color: "text-emerald-400" },
  { text: "[Auth] JWT token verified successfully", color: "text-yellow-400" },
  { text: "[Cache] Redis cache hit for dashboard", color: "text-purple-400" },
  { text: "[API] POST /api/v1/contact - status: 201", color: "text-cyan-400" },
  { text: "[info] HMR (Hot Module Replacement) active", color: "text-gray-400" },
  { text: "[SEO] Dynamic metadata generated", color: "text-yellow-400" },
  { text: "[API] GET /api/v1/skills - 304 (Cached)", color: "text-gray-400" },
  { text: "[info] Bundle audit complete: 0 warnings", color: "text-emerald-400" }
];

// Simulated Live Active Terminal Console Component
const TerminalConsole = () => {
  const [lines, setLines] = useState(terminalLines.slice(0, 5));
  const lineIndexRef = useRef(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        const nextLine = terminalLines[lineIndexRef.current];
        lineIndexRef.current = (lineIndexRef.current + 1) % terminalLines.length;
        const newLines = [...prev, nextLine];
        if (newLines.length > 5) {
          newLines.shift();
        }
        return newLines;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-80 bg-gray-950 dark:bg-black/40 rounded-2xl p-5 border border-gray-800 dark:border-white/5 font-mono text-[11px] md:text-xs text-green-400/90 shadow-inner overflow-hidden select-none">
      <div className="flex items-center gap-1.5 mb-3 border-b border-white/5 pb-2 text-[10px] text-gray-500">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2">stdout - dev_server.log</span>
      </div>
      <div className="space-y-1 h-[95px] flex flex-col justify-end">
        {lines.map((line, idx) => (
          <p key={idx} className={line.color}>
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
};

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
          <BentoCard 
            delay={0.1}
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
          </BentoCard>

          {/* Experience Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-gradient-to-br from-[#8257e5] to-[#6c42ca] text-white rounded-3xl p-8 flex flex-col justify-center items-center shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            {/* Glowing backdrop circle */}
            <div className="absolute w-44 h-44 rounded-full bg-white/10 -top-10 -right-10 blur-xl pointer-events-none" />
            <Briefcase className="w-14 h-14 mb-4 opacity-90 relative z-10" />
            <h3 className="text-6xl font-extrabold mb-2 relative z-10 font-mono tracking-tight">2</h3>
            <p className="text-lg font-medium opacity-90 text-center relative z-10">Years of Experience</p>
          </motion.div>

          {/* Clean Code Card */}
          <BentoCard 
            delay={0.3}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-violet-100 dark:bg-violet-900/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-7 h-7 text-[#8257e5] dark:text-[#9e7df0]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Clean Architecture</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Designing modular architectures, clean folder separation (MVC/Repository patterns), and writing self-documenting code.
            </p>
          </BentoCard>

          {/* Performance Optimized Card */}
          <BentoCard 
            delay={0.4}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Gauge className="w-7 h-7 text-[#8257e5] dark:text-[#9e7df0]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Performance Tuning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Optimizing application speed using memoization, virtualization, database indexing, lazy loading, and asset minification.
            </p>
          </BentoCard>

          {/* Education/Learning Card */}
          <BentoCard 
            delay={0.5}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
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
          </BentoCard>

          {/* Live Dev Status Card (Spans all 3 cols) */}
          <BentoCard 
            delay={0.6}
            whileHover={{ y: -6, scale: 1.01 }}
            className="md:col-span-3 bg-gradient-to-r from-gray-50 to-white dark:from-github-card dark:to-[#0d1117] border border-gray-200 dark:border-github-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
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
              <TerminalConsole />
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}

export default About;
