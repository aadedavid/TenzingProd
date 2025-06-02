import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ValueProposition from './ValueProposition';
import UseCases from './UseCases';
import Technology from './Technology';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  const [language, setLanguage] = useState('pt');
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <ValueProposition language={language} />
      <UseCases language={language} />
      <Technology language={language} />
      <Team language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default LandingPage;