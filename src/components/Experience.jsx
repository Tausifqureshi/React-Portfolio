import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "NxChamp",
    role: "MERN Stack Developer",
    duration: "Sept 2024 - Present",
    description: [
      "Collaborated with a team of 3+ developers to deliver Zenvora for an e-commerce client, building a high-performance platform using the MERN stack and Tailwind CSS while ensuring complete cross-device responsiveness.",
      "Built and integrated reusable UI components using React.js, ensuring consistent user interface implementation and a modular frontend architecture.",
      "Implemented global state management using Redux Toolkit (RTK) and session persistence, ensuring consistent data synchronization between client-side and backend services while reducing debugging time.",
      "Integrated and consumed backend REST APIs built using Node.js, Express.js, and MongoDB, enabling efficient data handling, secure JWT-based authentication, and custom middleware for sensitive user data.",
      "Improved application performance using Lazy Loading, Code Splitting, and React Suspense, reducing initial page load time by nearly 25% based on Lighthouse performance reports."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    company: "Freelance & Remote",
    role: "Front-End Developer",
    duration: "Jan 2023 - Aug 2024",
    description: [
      "Architected and developed a custom inventory management dashboard using React.js, reducing manual tracking errors by 40%.",
      "Integrated secure payment gateways (Stripe, Razorpay) and implemented complex frontend routing and state management for SaaS MVPs.",
      "Collaborated with backend teams to consume RESTful APIs, optimizing frontend data rendering and handling JWT-based authentication flows.",
      "Worked directly with clients to iterate on UI/UX designs, translating Figma mockups into fully responsive, accessible React components."
    ],
    skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "Context API", "REST APIs", "JWT", "Figma"],
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-github-bg border-b border-gray-200 dark:border-github-border transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#8257e5] mb-16 text-center pb-2">
          My Experience
        </h2>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#8257e5] to-violet-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex w-full relative pl-12 md:pl-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Avatar Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-6 w-9 h-9 bg-white dark:bg-[#161b22] border-2 border-[#8257e5] dark:border-[#9e7df0] rounded-full z-10 shadow-lg flex items-center justify-center text-[#8257e5] dark:text-[#9e7df0] select-none font-bold"
                  >
                    {exp.company === "NxChamp" ? (
                      <span className="text-[11px] font-extrabold font-mono">NX</span>
                    ) : (
                      <span className="text-[11px] font-extrabold font-mono">FL</span>
                    )}
                  </motion.div>

                  {/* Card */}
                  <div className="w-full md:w-[45%] bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-2xl p-6 shadow-sm hover:shadow-[0_0_25px_rgba(130,87,229,0.2)] hover:border-[#8257e5]/50 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 text-[#8257e5] dark:text-[#9e7df0] mb-2">
                      <Briefcase className="w-5 h-5" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      {exp.company}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 my-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>

                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1.5 text-sm">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
