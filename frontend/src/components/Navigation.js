import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import KoaiLogo from './KoaiLogo';

const Navigation = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    pt: {
      brand: 'Koai',
      menu: ['Início', 'Proposta', 'Casos de Uso', 'Tecnologia', 'Equipe', 'Contato'],
      cta: 'Teste Clara.AI'
    },
    en: {
      brand: 'Koai',
      menu: ['Home', 'Value Prop', 'Use Cases', 'Technology', 'Team', 'Contact'],
      cta: 'Test Clara.AI'
    }
  };

  const handleClaraWhatsApp = () => {
    window.open('https://wa.me/5551995243454', '_blank');
  };

  const scrollToSection = (index) => {
    const sections = ['hero', 'value-prop', 'use-cases', 'technology', 'team', 'contact'];
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
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-gray-900">{content[language].brand}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {content[language].menu.map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(index)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClaraWhatsApp}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              {content[language].cta}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
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
            className="md:hidden py-4 border-t border-gray-200"
          >
            {content[language].menu.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              >
                {item}
              </button>
            ))}
            <div className="px-4 pt-4 border-t border-gray-200 mt-4">
              <button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-4"
              >
                <Globe size={16} />
                <span>{language === 'pt' ? 'English' : 'Português'}</span>
              </button>
              <button 
                onClick={handleClaraWhatsApp}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full font-medium"
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