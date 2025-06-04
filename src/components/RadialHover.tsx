
import { useState } from "react";
import { motion } from "framer-motion";

interface RadialHoverProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const RadialHover = ({ children, className = "", glowColor = "blue" }: RadialHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Radial glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full opacity-0 ${
          glowColor === "blue" ? "bg-blue-400/20" : 
          glowColor === "purple" ? "bg-purple-400/20" : 
          glowColor === "green" ? "bg-green-400/20" : 
          "bg-blue-400/20"
        }`}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 2 : 1,
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Connecting lines */}
      {isHovered && (
        <>
          <motion.div
            className={`absolute top-1/2 left-full h-px w-20 ${
              glowColor === "blue" ? "bg-blue-400" : 
              glowColor === "purple" ? "bg-purple-400" : 
              glowColor === "green" ? "bg-green-400" : 
              "bg-blue-400"
            }`}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.6 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.div
            className={`absolute top-1/2 right-full h-px w-20 ${
              glowColor === "blue" ? "bg-blue-400" : 
              glowColor === "purple" ? "bg-purple-400" : 
              glowColor === "green" ? "bg-green-400" : 
              "bg-blue-400"
            }`}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.6 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <motion.div
            className={`absolute left-1/2 top-full w-px h-20 ${
              glowColor === "blue" ? "bg-blue-400" : 
              glowColor === "purple" ? "bg-purple-400" : 
              glowColor === "green" ? "bg-green-400" : 
              "bg-blue-400"
            }`}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.6 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          />
        </>
      )}
      
      {children}
    </motion.div>
  );
};

export default RadialHover;
