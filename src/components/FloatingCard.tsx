

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ElementType } from "react";

interface FloatingCardProps {
  variant?: "default" | "portal";
  title: string;
  icon?: ElementType;
  subtitle?: string;
  time?: string;
  avatarUrl?: string;
  className?: string;
  rotate?: string;
  delay?: number;
}

export function FloatingCard({
  variant = "default",
  title,
  icon: Icon,
  subtitle,
  time,
  avatarUrl,
  className,
  rotate = "rotate-0",
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, zIndex: 40 }} 
      transition={{ duration: 0.6, delay }}
      className={cn(
        "absolute shadow-xl overflow-hidden transition-colors duration-300", 
        variant === "portal" ? "rounded-[32px]" : "rounded-[40px]",
        rotate, 
        className
      )}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        className={cn(
          "flex items-center gap-4 w-full h-full",
          variant === "portal" ? "px-4 py-3" : "px-8 py-7"
        )}
      >
        {variant === "default" && Icon && (
          <Icon className="h-7 w-7 shrink-0" strokeWidth={2} />
        )}
        
        {variant === "portal" && avatarUrl && (
          <div className="flex items-center gap-3">
            <div className="h-10 w-1 shrink-0 rounded-full bg-[#DC7A31]" />
            <img 
              src={avatarUrl} 
              alt="Avatar" 
              className="h-10 w-10 shrink-0 rounded-full object-cover bg-white"
            />
          </div>
        )}

        <div className="flex flex-col">
          <span className={cn(
            "font-semibold tracking-wide transition-colors", 
            variant === "portal" ? "text-sm text-gray-900 dark:text-white" : "text-xl text-white"
          )}>
            {title}
          </span>
          {variant === "portal" && subtitle && (
            <div className="flex flex-col text-[11px] text-gray-600 dark:text-gray-300 leading-tight mt-0.5">
                <span>{subtitle}</span>
                <span className="mt-1 opacity-70">{time}</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
