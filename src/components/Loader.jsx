import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#070610] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient glowing backdrop using pure Tailwind blur */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-[#8257e5]/10 blur-[100px] pointer-events-none animate-pulse" />

      <div className="relative flex flex-col items-center justify-center z-10">
        {/* Spinner and Logo */}
        <div className="relative flex items-center justify-center mb-6">
          {/* Static track ring */}
          <div className="absolute w-20 h-20 rounded-full border-4 border-[#8257e5]/10" />
          
          {/* Spinning loader ring */}
          <div className="absolute w-20 h-20 rounded-full border-4 border-t-[#8257e5] border-r-[#9e7df0]/40 border-b-transparent border-l-transparent animate-spin duration-700" />
          
          {/* Pulsing inner core */}
          <div className="absolute w-14 h-14 rounded-full bg-[#0f0d22]/80 border border-[#8257e5]/20 flex items-center justify-center shadow-[0_0_15px_rgba(130,87,229,0.15)] animate-pulse" />
          
          {/* Centered Monogram */}
          <span className="text-xl font-extrabold text-white font-mono tracking-tighter z-10 drop-shadow-[0_0_8px_rgba(130,87,229,0.5)]">
            TQ
          </span>
        </div>

        {/* Status text */}
        <div className="text-gray-400 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold animate-pulse">
          Loading Portfolio
        </div>
      </div>
    </motion.div>
  );
};

Loader.displayName = "Loader";

export default Loader;
