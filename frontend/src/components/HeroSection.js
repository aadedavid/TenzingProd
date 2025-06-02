import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const HeroSection = ({ language }) => {
  const content = {
    pt: {
      headline: {
        line1: "IAs que pensam como",
        line2: "mentores.",
        line3: "Cuidam como humanos.",
        line4: "Escalam como máquinas."
      },
      subheadline: "Nossos agentes de IA escutam com empatia, orientam com ciência e ajudam pessoas e negócios a evoluir com mais consciência.",
      cta1: "Agende uma demonstração",
      cta2: "Fale conosco no WhatsApp"
    },
    en: {
      headline: {
        line1: "AIs that think like",
        line2: "mentors.",
        line3: "Care like humans.",
        line4: "Scale like machines."
      },
      subheadline: "Our AI agents listen with empathy, guide with science, and help people and businesses evolve with greater awareness.",
      cta1: "Schedule a demo",
      cta2: "Chat with us on WhatsApp"
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521988341245', '_blank');
  };

  const handleClaraWhatsApp = () => {
    window.open('https://wa.me/5551995243454', '_blank');
  };

  const handleScheduleDemo = () => {
    window.open('https://calendar.app.google/pug4TSYUPhiMCvzo6', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-teal-800/80 to-blue-600/70" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-white/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              <span className="block">{content[language].headline.line1}</span>
              <span className="block bg-gradient-to-r from-coral-400 to-orange-400 bg-clip-text text-transparent">
                {content[language].headline.line2}
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-4">
                {content[language].headline.line3}
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl">
                {content[language].headline.line4}
              </span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            {content[language].subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-coral-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-coral-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar size={20} />
              <span>{content[language].cta1}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>{content[language].cta2}</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;