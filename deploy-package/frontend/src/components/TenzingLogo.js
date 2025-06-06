import React from 'react';
import { motion } from 'framer-motion';

const TenzingLogo = ({ size = 40, className = "" }) => {
  const svgSize = size;
  
  return (
    <motion.div 
      className={`flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 100 100"
        className="drop-shadow-lg"
      >
        {/* Mountain silhouette */}
        <motion.path
          d="M 5 80 L 25 40 L 35 50 L 50 20 L 65 45 L 75 35 L 95 80 Z"
          fill="url(#mountainGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Peak highlight */}
        <motion.path
          d="M 45 20 L 50 15 L 55 20 L 50 25 Z"
          fill="url(#peakGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "backOut" }}
        />

        {/* Sherpa flag */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <line x1="52" y1="18" x2="52" y2="8" stroke="#ff6b35" strokeWidth="1"/>
          <polygon points="52,8 62,11 52,14" fill="#ff6b35"/>
        </motion.g>

        {/* Trail markers */}
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={`marker-${i}`}
            cx={20 + i * 15}
            cy={75 - i * 5}
            r="1.5"
            fill="#4a90e2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 + i * 0.2 }}
          />
        ))}

        {/* Letter T in the center */}
        <motion.text
          x="50"
          y="65"
          textAnchor="middle"
          className="text-white font-bold"
          fontSize="24"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          T
        </motion.text>

        {/* Base camp */}
        <motion.rect
          x="8"
          y="78"
          width="84"
          height="3"
          fill="url(#baseCampGradient)"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2c3e50', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#34495e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4a6fa5', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="peakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#e8f4fd', stopOpacity: 0.7 }} />
          </linearGradient>

          <linearGradient id="baseCampGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#27ae60', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: '#2ecc71', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#58d68d', stopOpacity: 0.8 }} />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default TenzingLogo;