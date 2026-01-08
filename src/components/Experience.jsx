import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    company: "Freelance Web Development",
    role: "Frontend Developer",
    duration: "2022 - Present",
    description:
      "Building responsive, modern web applications with React.js, Next.js & TypeScript. Focused on performance and clean architecture.",
    skills: ["React.js", "Next.js", "TypeScript", "REST API"],
  },
  {
    company: "Startup XYZ",
    role: "Frontend Developer Intern",
    duration: "2021 - 2022",
    description:
      "Developed reusable UI components and improved application performance.",
    skills: ["React.js", "JavaScript", "TailwindCSS"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Experience
          </span>
        </h2>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400 to-purple-400 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex w-full ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[45%] bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-300 mb-2">
                      <FaBriefcase />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      {exp.company}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 my-2">
                      <FaCalendarAlt />
                      {exp.duration}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
