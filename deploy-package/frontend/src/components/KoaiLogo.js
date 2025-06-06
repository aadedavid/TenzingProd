import React from 'react';
import { motion } from 'framer-motion';

const KoaiLogo = ({ size = 32, className = "" }) => {
  const svgSize = size;
  
  return (
    <motion.div 
      className={`flex items-center justify-center ${className}`}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 100 100"
        className="drop-shadow-lg"
      >
        {/* Outer mandala ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#mandalaGradient1)"
          strokeWidth="1"
          strokeDasharray="3,2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Middle mandala ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="url(#mandalaGradient2)"
          strokeWidth="0.8"
          strokeDasharray="2,1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Central geometric pattern */}
        <motion.g
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        >
          {/* Lotus petals */}
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 50 50 Q ${50 + 15 * Math.cos((i * 45 * Math.PI) / 180)} ${50 + 15 * Math.sin((i * 45 * Math.PI) / 180)} 50 ${50 - 20}`}
              fill="url(#petalGradient)"
              stroke="url(#mandalaGradient2)"
              strokeWidth="0.5"
              transform={`rotate(${i * 45} 50 50)`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
            />
          ))}
        </motion.g>

        {/* Central circle with K */}
        <motion.circle
          cx="50"
          cy="50"
          r="18"
          fill="url(#centerGradient)"
          stroke="url(#mandalaGradient1)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 2, ease: "backOut" }}
        />

        {/* The letter K */}
        <motion.text
          x="50"
          y="58"
          textAnchor="middle"
          className="text-white font-bold"
          fontSize="20"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          K
        </motion.text>

        {/* Flowing connection lines */}
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={`flow-${i}`}
            d={`M ${50 + 25 * Math.cos((i * 90 * Math.PI) / 180)} ${50 + 25 * Math.sin((i * 90 * Math.PI) / 180)} 
                Q ${50 + 35 * Math.cos(((i * 90 + 45) * Math.PI) / 180)} ${50 + 35 * Math.sin(((i * 90 + 45) * Math.PI) / 180)} 
                ${50 + 25 * Math.cos(((i * 90 + 90) * Math.PI) / 180)} ${50 + 25 * Math.sin(((i * 90 + 90) * Math.PI) / 180)}`}
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 + i * 0.2, ease: "easeInOut" }}
          />
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="mandalaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#234B65', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0d9488', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="mandalaGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#9BC5B6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
          </linearGradient>

          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#234B65', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
          </radialGradient>

          <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF6F61', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#9BC5B6', stopOpacity: 0.5 }} />
          </linearGradient>

          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF6F61', stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: '#2563eb', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#9BC5B6', stopOpacity: 0.6 }} />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default KoaiLogo;