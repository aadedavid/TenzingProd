import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';
import teamImages from '../teamImages';

const Team = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = {
    pt: {
      title: "Nossa Equipe",
      subtitle: "Unimos ciência de dados, psicologia e tecnologia para criar uma nova geração de agentes que ampliam o potencial humano",
      members: [
        {
          name: "Alexandre Dedavid",
          role: "CTO & Co-fundador",
          image: teamImages.dedavid,
          description: "Profissional com mais de 20 anos em tecnologia, BI e gestão de produtos, com atuação executiva em dados e analytics em empresas globais. Consultor em estratégia de dados com experiência internacional.",
          expertise: ["Data Strategy", "Business Intelligence", "Product Management"],
          linkedin: "https://www.linkedin.com/in/aadedavid/",
          education: "Ciência da Computação (UFRGS) e Pós em Data Analytics (UFRJ)"
        },
        {
          name: "Andréa Krug", 
          role: "CEO & Co-fundadora",
          image: teamImages.andrea,
          description: "Profissional com mais de 35 anos em RH, sendo 20 em posições executivas. Atuação estratégica na América Latina, com experiência em start ups, encerramentos e grandes fusões.",
          expertise: ["Strategic HR", "Leadership", "Organizational Change"],
          linkedin: "https://www.linkedin.com/in/andrea-krug/",
          education: "Especialização em Gestão da Mudança e Modelos de RH Compartilhados"
        },
        {
          name: "Carolina Giachini",
          role: "CPO & Co-fundadora", 
          image: teamImages.carol,
          description: "Consultora há mais de 5 anos em saúde mental com base em neurociência, estresse e ansiedade. Atuação em escolas e empresas, com foco no desenvolvimento humano e socioemocional.",
          expertise: ["Mental Health", "Neuroscience", "Human Development"],
          linkedin: "https://www.linkedin.com/in/carolina-giachini-b36344239/",
          education: "Co-fundadora da Equinox, formação em Farmácia e especialização em saúde mental corporativa"
        },
        {
          name: "Fabio Makita",
          role: "Chief Innovation Officer",
          image: teamImages.makita,
          description: "Executivo com 24 anos de experiência em inovação tecnológica e desenvolvimento de novos negócios. Atuou na criação do primeiro Corporate Venture Capital do Brasil e liderou programas com startups.",
          expertise: ["Innovation", "Corporate Venture", "Technology Strategy"],
          linkedin: "https://www.linkedin.com/in/fabiomakitakiyan/",
          education: "Liderança em projetos de políticas públicas de inovação"
        },
        {
          name: "Guilherme Krug",
          role: "Chief Legal Officer",
          image: teamImages.gui,
          description: "Advogado com 23 anos de experiência em empresas e escritórios de grande porte. Especialista em direito civil, trabalhista, compliance, LGPD e gestão de equipes.",
          expertise: ["Corporate Law", "Compliance", "LGPD/GDPR"],
          linkedin: "https://www.linkedin.com/in/guilhermekrug/",
          education: "Participação em fusões, reestruturações e projetos de redução de passivos"
        }
      ]
    },
    en: {
      title: "Our Team",
      subtitle: "We unite data science, psychology and technology to create a new generation of agents that amplify human potential",
      members: [
        {
          name: "Alexandre Dedavid",
          role: "CTO & Co-founder",
          image: teamImages.dedavid,
          description: "Professional with over 20 years in technology, BI and product management, with executive experience in data and analytics in global companies. Data strategy consultant with international experience.",
          expertise: ["Data Strategy", "Business Intelligence", "Product Management"],
          linkedin: "https://www.linkedin.com/in/aadedavid/",
          education: "Computer Science (UFRGS) and Post-grad in Data Analytics (UFRJ)"
        },
        {
          name: "Andréa Krug",
          role: "CEO & Co-founder", 
          image: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
          description: "Professional with over 35 years in HR, with 20 in executive positions. Strategic work in Latin America, with experience in startups, closures and major mergers.",
          expertise: ["Strategic HR", "Leadership", "Organizational Change"],
          linkedin: "https://www.linkedin.com/in/andrea-krug/",
          education: "Specialization in Change Management and Shared HR Models"
        },
        {
          name: "Carolina Giachini",
          role: "CPO & Co-founder",
          image: "https://images.pexels.com/photos/29598524/pexels-photo-29598524.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face", 
          description: "Consultant for over 5 years in mental health based on neuroscience, stress and anxiety. Work in schools and companies, focusing on human and socioemotional development.",
          expertise: ["Mental Health", "Neuroscience", "Human Development"],
          linkedin: "https://www.linkedin.com/in/carolina-giachini-b36344239/",
          education: "Co-founder of Equinox, degree in Pharmacy and specialization in corporate mental health"
        },
        {
          name: "Fabio Makita",
          role: "Chief Innovation Officer",
          image: teamImages.makita,
          description: "Executive with 24 years of experience in technological innovation and new business development. Worked on creating Brazil's first Corporate Venture Capital and led startup programs.",
          expertise: ["Innovation", "Corporate Venture", "Technology Strategy"],
          linkedin: "https://www.linkedin.com/in/fabiomakitakiyan/",
          education: "Leadership in public policy innovation projects"
        },
        {
          name: "Guilherme Krug",
          role: "Chief Legal Officer",
          image: teamImages.gui,
          description: "Lawyer with 23 years of experience in large companies and law firms. Specialist in civil law, labor law, compliance, GDPR and team management.",
          expertise: ["Corporate Law", "Compliance", "LGPD/GDPR"],
          linkedin: "https://www.linkedin.com/in/guilhermekrug/",
          education: "Participation in mergers, restructuring and liability reduction projects"
        }
      ]
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
    <section id="team" className="py-20 lg:py-32 bg-gray-50">
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {content[language].title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            {content[language].subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content[language].members.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2 cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  {member.education}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                {member.description}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* LinkedIn Link */}
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
                <ExternalLink size={12} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Values */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'pt' ? 'Manifesto Koai' : 'Koai Manifesto'}
            </h3>
            <p className="text-xl text-gray-600 italic">
              "{language === 'pt' ? 'Mais pessoas. Menos ruído. Mais propósito.' : 'More people. Less noise. More purpose.'}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;