import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Logo Text */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#8257e5] dark:text-[#9e7df0] font-mono tracking-tight drop-shadow-[0_0_8px_rgba(130,87,229,0.4)] mb-6"
        >
          &lt;Tausif /&gt;
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-sm md:text-base tracking-widest mb-6"
        >
          Loading Portfolio...
        </motion.p>

        {/* Progress Line */}
        <div className="w-48 md:w-64 h-[2px] bg-gray-800 rounded-full overflow-hidden mb-6">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#8257e5] to-[#9e7df0]"
          ></motion.div>
        </div>

        {/* Three dots animation */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-[#8257e5] dark:bg-[#9e7df0] rounded-full"
              animate={{
                y: ["0%", "-50%", "0%"],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
