import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import TenzingLogo from './TenzingLogo';

const Navigation = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    pt: {
      brand: 'Tenzing',
      menu: ['Início', 'Sherpas Digitais', 'Jornada Libertada', 'Casos', 'Metodologia', 'Basecamp'],
      cta: 'Iniciar Expedição'
    },
    en: {
      brand: 'Tenzing', 
      menu: ['Home', 'Digital Sherpas', 'Liberated Journey', 'Cases', 'Methodology', 'Basecamp'],
      cta: 'Start Expedition'
    }
  };

  const handleStartExpedition = () => {
    window.open('https://calendar.app.google/pug4TSYUPhiMCvzo6', '_blank');
  };

  const scrollToSection = (index) => {
    const sections = ['hero', 'sherpas', 'journey', 'cases', 'methodology', 'team'];
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <TenzingLogo size={36} />
            <span className="text-xl font-bold text-white">{content[language].brand}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {content[language].menu.map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(index)}
                className="text-slate-300 hover:text-orange-400 font-medium transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center space-x-1 text-slate-300 hover:text-orange-400"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartExpedition}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              {content[language].cta}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-orange-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-slate-700"
          >
            {content[language].menu.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-orange-400 hover:bg-slate-800"
              >
                {item}
              </button>
            ))}
            <div className="px-4 pt-4 border-t border-slate-700 mt-4">
              <button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="flex items-center space-x-2 text-slate-300 hover:text-orange-400 mb-4"
              >
                <Globe size={16} />
                <span>{language === 'pt' ? 'English' : 'Português'}</span>
              </button>
              <button 
                onClick={handleStartExpedition}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium"
              >
                {content[language].cta}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;