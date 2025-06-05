import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, ExternalLink, Mountain, Code, Brain, Lightbulb, Scale } from 'lucide-react';

const Basecamp = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const content = {
    pt: {
      title: "Nosso Basecamp",
      subtitle: "A equipe de especialistas que treina e coordena seus Sherpas Digitais",
      members: [
        {
          name: "Andréa Krug", 
          role: "CEO & Co-fundadora",
          specialty: "Mestre em Jornadas Organizacionais",
          image: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
          description: "35 anos guiando organizações por terrenos complexos. Transformou culturas em startups e corporações na América Latina.",
          expertise: ["Gestão Estratégica", "Transformação Cultural", "Liderança"],
          linkedin: "https://www.linkedin.com/in/andrea-krug/",
          icon: Mountain,
          contribution: "Mapeia as rotas de transformação organizacional"
        },
        {
          name: "Fabio Makita",
          role: "Sherpa-Chefe de Inovação",
          specialty: "Estrategista de Expedições Corporativas",
          image: "https://images.pexels.com/photos/17311570/pexels-photo-17311570.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
          description: "24 anos criando novos caminhos no ecossistema brasileiro. Criou o primeiro Corporate VC do país e conecta startups a grandes corporações.",
          expertise: ["Corporate Innovation", "Venture Capital", "Estratégia de Negócios"],
          linkedin: "https://www.linkedin.com/in/fabiomakitakiyan/",
          icon: Lightbulb,
          contribution: "Desenha estratégias inovadoras para cada expedição"
        },
        {
          name: "Carolina Giachini",
          role: "Sherpa-Chefe de Bem-Estar",
          specialty: "Especialista em Saúde Mental Digital",
          image: "https://images.pexels.com/photos/29598524/pexels-photo-29598524.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
          description: "Neuropsicóloga que une ciência comportamental com tecnologia empática. Co-fundadora da Equinox, pioneira em saúde mental corporativa.",
          expertise: ["Neurociência", "Saúde Mental", "Psicologia Organizacional"],
          linkedin: "https://www.linkedin.com/in/carolina-giachini-b36344239/",
          icon: Brain,
          contribution: "Garante que cada Sherpa tenha inteligência emocional"
        },
        {
          name: "Alexandre Dedavid",
          role: "Sherpa-Chefe de Tecnologia",
          specialty: "Arquiteto dos Sherpas Digitais",
          image: "https://images.pexels.com/photos/32294411/pexels-photo-32294411.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
          description: "20+ anos escalando montanhas tecnológicas. Especialista em IA, dados e arquitetura de produtos que automatizam o impossível.",
          expertise: ["IA Generativa", "Arquitetura de Dados", "Product Management"],
          linkedin: "https://www.linkedin.com/in/aadedavid/",
          icon: Code,
          contribution: "Constrói a inteligência por trás de cada Sherpa Digital"
        },
        {
          name: "Guilherme Krug",
          role: "Sherpa-Chefe de Compliance",
          specialty: "Guardião das Normas de Montanha",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMHN1aXQlMjB0aWV8ZW58MHx8fHwxNzQ4ODc0MDgzfDA&ixlib=rb-4.1.0&q=85&w=300&h=300&fit=crop&crop=face",
          description: "23 anos navegando terrenos jurídicos complexos. Especialista em compliance, LGPD e estruturação de operações que respeitam todas as normas.",
          expertise: ["Direito Corporativo", "LGPD/GDPR", "Compliance"],
          linkedin: "https://www.linkedin.com/in/guilhermekrug/",
          icon: Scale,
          contribution: "Assegura que toda expedição seja segura e legal"
        }
      ],
      manifesto: {
        title: "Manifesto dos Sherpas Digitais",
        text: "Acreditamos que cada organização merece subir ao seu ponto mais alto sem carregar, nas costas, o peso dos processos operacionais. Somos os Sherpas Digitais que libertam líderes e times para focarem no que realmente importa: construir cultura, inspirar pessoas e criar resultados que transformam."
      }
    },
    en: {
      title: "Our Basecamp",
      subtitle: "The team of specialists who train and coordinate your Digital Sherpas",
      members: [
        {
          name: "Andréa Krug",
          role: "CEO & Co-founder",
          specialty: "Master of Organizational Journeys",
          image: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
          description: "35 years guiding organizations through complex terrains. Transformed cultures in startups and corporations across Latin America.",
          expertise: ["Strategic Management", "Cultural Transformation", "Leadership"],
          linkedin: "https://www.linkedin.com/in/andrea-krug/",
          icon: Mountain,
          contribution: "Maps organizational transformation routes"
        },
        {
          name: "Fabio Makita",
          role: "Chief Innovation Sherpa",
          specialty: "Corporate Expedition Strategist",
          image: "https://images.pexels.com/photos/17311570/pexels-photo-17311570.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
          description: "24 years creating new paths in the Brazilian ecosystem. Created the country's first Corporate VC and connects startups to large corporations.",
          expertise: ["Corporate Innovation", "Venture Capital", "Business Strategy"],
          linkedin: "https://www.linkedin.com/in/fabiomakitakiyan/",
          icon: Lightbulb,
          contribution: "Designs innovative strategies for each expedition"
        },
        {
          name: "Carolina Giachini",
          role: "Chief Wellbeing Sherpa",
          specialty: "Digital Mental Health Specialist",
          image: "https://images.pexels.com/photos/29598524/pexels-photo-29598524.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
          description: "Neuropsychologist who combines behavioral science with empathetic technology. Co-founder of Equinox, pioneer in corporate mental health.",
          expertise: ["Neuroscience", "Mental Health", "Organizational Psychology"],
          linkedin: "https://www.linkedin.com/in/carolina-giachini-b36344239/",
          icon: Brain,
          contribution: "Ensures each Sherpa has emotional intelligence"
        },
        {
          name: "Alexandre Dedavid",
          role: "Chief Technology Sherpa",
          specialty: "Digital Sherpas Architect",
          image: "https://images.pexels.com/photos/32294411/pexels-photo-32294411.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
          description: "20+ years climbing technological mountains. Expert in AI, data and product architecture that automates the impossible.",
          expertise: ["Generative AI", "Data Architecture", "Product Management"],
          linkedin: "https://www.linkedin.com/in/aadedavid/",
          icon: Code,
          contribution: "Builds the intelligence behind each Digital Sherpa"
        },
        {
          name: "Guilherme Krug",
          role: "Chief Compliance Sherpa",
          specialty: "Guardian of Mountain Rules",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMHN1aXQlMjB0aWV8ZW58MHx8fHwxNzQ4ODc0MDgzfDA&ixlib=rb-4.1.0&q=85&w=300&h=300&fit=crop&crop=face",
          description: "23 years navigating complex legal terrains. Expert in compliance, GDPR and structuring operations that respect all regulations.",
          expertise: ["Corporate Law", "LGPD/GDPR", "Compliance"],
          linkedin: "https://www.linkedin.com/in/guilhermekrug/",
          icon: Scale,
          contribution: "Ensures every expedition is safe and legal"
        }
      ],
      manifesto: {
        title: "Digital Sherpas Manifesto",
        text: "We believe every organization deserves to reach its highest point without carrying the weight of operational processes on their backs. We are the Digital Sherpas who liberate leaders and teams to focus on what really matters: building culture, inspiring people and creating transformative results."
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {content[language].title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {content[language].subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {content[language].members.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="sherpa-glass rounded-3xl p-8 sherpa-card text-center"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-500 p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-8 bg-orange-500 rounded-full p-3">
                  <member.icon className="w-5 h-5 text-white" />
                </div>
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-2 -left-8 bg-blue-600 rounded-full p-2 cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </motion.a>
              </div>

              {/* Member Info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-400 font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-slate-400 text-sm mb-4">
                  {member.specialty}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {member.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-800 text-orange-400 text-xs rounded-full font-medium border border-orange-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contribution */}
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-slate-300 text-xs italic">
                  "{member.contribution}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Manifesto */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-8 lg:p-12 border border-orange-500/30 max-w-4xl mx-auto">
            <Mountain className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {content[language].manifesto.title}
            </h3>
            <blockquote className="text-lg md:text-xl text-slate-200 italic leading-relaxed">
              "{content[language].manifesto.text}"
            </blockquote>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendar.app.google/pug4TSYUPhiMCvzo6', '_blank')}
            className="btn-sherpa-primary text-lg px-10 py-4"
          >
            {language === 'pt' ? 'Conhecer Nossa Equipe Pessoalmente' : 'Meet Our Team Personally'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Basecamp;