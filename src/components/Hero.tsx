"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FileText, Gavel, CheckSquare, Receipt, Sun, Moon } from "lucide-react";
import { FloatingCard } from "./FloatingCard";
import { motion } from "framer-motion";

export function Hero() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring component is mounted before rendering theme UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center transition-colors duration-500 bg-[#F6F8FB] dark:bg-[#0B0F1A] px-6 lg:px-20">
      
      {/* Theme Toggle Button */}
      {mounted && (
        <button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="absolute top-8 right-8 lg:right-20 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all"
        >
          {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
        </button>
      )}

      {/* Target Design Background Pills */}
      <div className="absolute -left-40 top-[35%] h-24 w-80 rounded-full rotate-[-12deg] bg-[#DCE5F5] dark:bg-[#1E293B] opacity-50 transition-colors duration-500" />
      <div className="absolute -left-20 top-[51%] h-24 w-80 rounded-full bg-[#DCE5F5] dark:bg-[#1E293B] opacity-50 transition-colors duration-500" />
      <div className="absolute -left-10 bottom-[15%] h-28 w-96 rounded-full bg-[#DCE5F5] dark:bg-[#1E293B] opacity-50 transition-colors duration-500" />
      
      <div className="absolute -right-45 top-[15%] h-24 w-[28rem] rounded-full rotate-[5deg] bg-[#DCE5F5] dark:bg-[#1E293B] opacity-50 transition-colors duration-500" />
      <div className="absolute -right-40 top-[33%] h-24 w-[36rem] rounded-full bg-[#DCE5F5] dark:bg-[#1E293B] opacity-50 transition-colors duration-500" />
      <div className="absolute -right-50 top-[50%] h-24 w-[32rem] rounded-full bg-[#DCE5F5] dark:bg-[#1E293B] opacity-50 transition-colors duration-500" />

      <div className="relative mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full z-10 lg:pl-4 xl:pl-30 lg:-translate-y-40 mt-20 lg:mt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[50px] xl:text-[58px] font-medium tracking-tight text-[#6B728E] dark:text-gray-400 leading-[1.15] whitespace-normal md:whitespace-nowrap transition-colors duration-500">
            A single platform to <br className="hidden md:block" />
            <span className="text-[#5B5B8E] dark:text-[#8E8EBE] font-bold">manage</span> every part of <br className="hidden md:block" />
            your <span className="text-[#5B5B8E] dark:text-[#8E8EBE] font-bold">legal work</span>
          </h1>
          <p className="mt-6 text-[16px] md:text-[17px] text-[#2548FF] dark:text-blue-400 max-w-[420px] leading-relaxed pr-4 whitespace-normal transition-colors duration-500">
            Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
          </p>
        </motion.div>

        {/* Right Content - Floating Elements */}
        <div className="relative h-[650px] w-full hidden lg:block">
          
          <FloatingCard
            title="Billing"
            icon={Receipt}
            className="absolute top-[270px] left-[-70px] w-[350px] bg-[#3652FF] text-white"
            rotate="rotate-[12deg]"
            delay={0.1}
          />

          <FloatingCard
            title="Matters"
            icon={Gavel}
            className="absolute top-[400px] left-[-430px] w-[300px] bg-[#DC7A31] text-white"
            rotate="-rotate-[12deg]"
            delay={0.2}
          />

          <FloatingCard
            variant="portal"
            title="John Doe - Portal"
            subtitle="Hey! Could you please review a document for me?"
            time="MAT-2233 - 2 h ago"
            avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=transparent"
            className="absolute top-[400px] left-[-110px] w-[350px] bg-[#A5ADEE] dark:bg-[#2D346D]"
            rotate="rotate-[4deg]"
            delay={0.3}
          />

          <FloatingCard
            title="Tasks"
            icon={CheckSquare}
            className="absolute bottom-[60px] left-[-250px] w-[300px] bg-[#2A233D] dark:bg-[#1A1625] text-[#DC7A31]"
            rotate="rotate-[0deg]"
            delay={0.4}
          />

          <FloatingCard
            title="Documents"
            icon={FileText}
            className="absolute bottom-[60px] right-[100px] w-[350px] bg-[#2A233D] dark:bg-[#1A1625] text-[#DC7A31]"
            rotate="-rotate-[10deg]"
            delay={0.5}
          />
        </div>

        {/* Mobile Responsive Version */}
        <div className="flex flex-wrap justify-start gap-3 mt-10 mb-20 lg:hidden w-full">
          <div className="px-6 py-3 rounded-full bg-[#3652FF] text-white font-semibold shadow-lg transition-colors duration-500">Billing</div>
          <div className="px-6 py-3 rounded-full bg-[#DC7A31] text-white font-semibold shadow-lg transition-colors duration-500">Matters</div>
          <div className="px-6 py-3 rounded-full bg-[#A5ADEE] dark:bg-[#2D346D] text-gray-900 dark:text-white font-semibold shadow-lg transition-colors duration-500">John Doe Portal</div>
          <div className="px-6 py-3 rounded-full bg-[#2A233D] dark:bg-[#1A1625] text-[#DC7A31] font-semibold shadow-lg transition-colors duration-500">Tasks</div>
          <div className="px-6 py-3 rounded-full bg-[#2A233D] dark:bg-[#1A1625] text-[#DC7A31] font-semibold shadow-lg transition-colors duration-500">Documents</div>
        </div>
      </div>
    </div>
  );
}










