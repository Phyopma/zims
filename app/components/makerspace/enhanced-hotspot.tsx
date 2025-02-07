"use client";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";

type HotspotProps = {
  position: [number, number, number];
  icon?: string;
  title: string;
  description: string;
  onClick?: () => void;
};

export default function EnhancedHotspot({
  position,
  icon,
  title,
  description,
  onClick,
}: HotspotProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Html position={position} center>
      <motion.div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <motion.div
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-yellow/80 p-2 shadow-lg transition-all hover:bg-yellow"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: isHovered
              ? "0 0 20px rgba(255, 255, 0, 0.5)"
              : "0 0 0px rgba(255, 255, 0, 0)",
          }}
        >
          {icon && (
            <img src={icon} alt={title} className="h-8 w-8 text-neutral-900" />
          )}
        </motion.div>

        {/* Tooltip */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 rounded-lg bg-neutral-900/90 p-3 text-center opacity-0 shadow-xl transition-opacity group-hover:opacity-100"
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.9,
            y: isHovered ? 0 : -10,
          }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="mb-1 text-lg font-bold text-yellow">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </motion.div>
      </motion.div>
    </Html>
  );
}
