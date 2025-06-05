import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, Mountain, Weight } from 'lucide-react';

const HeroSection = ({ language }) => {
  const content = {
    pt: {
      problem: "Pare de carregar a mochila pesada dos processos operacionais.",
      solution: "Nossos Sherpas Digitais liberam você para chegar ao topo.",
      subheadline: "Somos guias especializados que carregam toda a carga operacional do seu RH e gestão, revisam e simplificam processos, para que você foque no que realmente importa: liderar, inspirar e criar mudanças comportamentais que geram resultados transformadores.",
      stats: {
        efficiency: "30% menos tempo em processos administrativos",
        availability: "Atendimento 24/7 via WhatsApp",
        insights: "Análises preditivas em tempo real"
      },
      cta1: "Iniciar Minha Expedição",
      cta2: "Falar com Sherpa Especialista"
    },
    en: {
      problem: "Stop carrying the heavy backpack of operational processes.",
      solution: "Our Digital Sherpas free you to reach the summit.",
      subheadline: "We are specialized guides who carry all the operational burden of your HR and management, so you can focus on what really matters: leading, inspiring and creating transformative results.",
      stats: {
        efficiency: "30% less time on administrative processes",
        availability: "24/7 service via WhatsApp", 
        insights: "Real-time predictive analytics"
      },
      cta1: "Start My Expedition",
      cta2: "Talk to Specialist Sherpa"
    }
  };

  const handleStartExpedition = () => {
    window.open('https://calendar.app.google/pug4TSYUPhiMCvzo6', '_blank');
  };

  const handleSherpaWhatsApp = () => {
    window.open('https://wa.me/5521988341245', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Mountain Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-orange-500/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left"
          >
            {/* Problem Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Weight className="w-8 h-8 text-red-400" />
                <span className="text-red-400 font-semibold text-lg">O Problema</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                {content[language].problem}
              </h1>
            </motion.div>

            {/* Solution Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Mountain className="w-8 h-8 text-orange-400" />
                <span className="text-orange-400 font-semibold text-lg">Nossa Solução</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent leading-tight mb-6">
                {content[language].solution}
              </h2>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-slate-300 leading-relaxed mb-8"
            >
              {content[language].subheadline}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {Object.values(content[language].stats).map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-orange-400 font-bold text-lg">{stat}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartExpedition}
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>{content[language].cta1}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSherpaWhatsApp}
                className="group bg-slate-800/50 backdrop-blur-md text-white border-2 border-slate-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>{content[language].cta2}</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Visual Metaphor */}
            <div className="relative">
              {/* Heavy Backpack (Before) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-0 bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700"
              >
                <Weight className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-white font-bold mb-2">Antes</h3>
                <p className="text-slate-300 text-sm">Processos manuais</p>
                <p className="text-slate-300 text-sm">Tarefas repetitivas</p>
                <p className="text-slate-300 text-sm">Foco disperso</p>
              </motion.div>

              {/* Sherpa Guide (After) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute top-32 right-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 shadow-2xl"
              >
                <Mountain className="w-12 h-12 text-white mb-4" />
                <h3 className="text-white font-bold mb-2">Depois</h3>
                <p className="text-white text-sm">Foco estratégico</p>
                <p className="text-white text-sm">Liderança inspiradora</p>
                <p className="text-white text-sm">Resultados transformadores</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

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
            className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-orange-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;