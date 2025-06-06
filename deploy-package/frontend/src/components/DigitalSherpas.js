import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Heart, Users, TrendingUp, Shield, BarChart3 } from 'lucide-react';

const DigitalSherpas = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const content = {
    pt: {
      title: "Nossos Sherpas Digitais",
      subtitle: "Cada Sherpa é especializado em carregar uma parte específica da sua mochila operacional",
      sherpas: [
        {
          icon: Heart,
          name: "Clara",
          specialty: "Sherpa de Bem-Estar",
          description: "Cuida da saúde mental e bem-estar da equipe, automatizando NR1, monitorando sinais de burnout e conectando pessoas aos recursos certos no momento certo.",
          capabilities: ["Monitoramento de bem-estar 24/7", "Compliance NR1 automático", "Detecção precoce de riscos", "Suporte empático via WhatsApp"],
          color: "from-red-500 to-pink-500",
          whatsapp: "5551995243454"
        },
        {
          icon: Users,
          name: "Açuana", 
          specialty: "Sherpa de Desenvolvimento",
          description: "Acompanha jornadas de crescimento profissional, desde onboarding até liderança, oferecendo orientação personalizada e insights baseados em dados comportamentais.",
          capabilities: ["Mentoria personalizada", "Trilhas de desenvolvimento", "Feedback contínuo", "Análise de competências"],
          color: "from-blue-500 to-indigo-500",
          whatsapp: "5521988341245"
        },
        {
          icon: TrendingUp,
          name: "Martina",
          specialty: "Sherpa de Experiência",
          description: "Gerencia toda a jornada do colaborador, coletando feedback, antecipando necessidades e garantindo que cada touchpoint seja uma experiência positiva.",
          capabilities: ["Jornada do colaborador", "Coleta de feedback", "Antecipação de necessidades", "Experiência personalizada"],
          color: "from-green-500 to-teal-500",
          whatsapp: "5521988341245"
        },
        {
          icon: BarChart3,
          name: "Atlas",
          specialty: "Sherpa de Insights",
          description: "Transforma conversas em dados estruturados, gera dashboards em tempo real e oferece análises preditivas para tomada de decisão estratégica.",
          capabilities: ["Dashboards em tempo real", "Análises preditivas", "ROI mensurável", "Insights acionáveis"],
          color: "from-purple-500 to-blue-500",
          whatsapp: "5521988341245"
        },
        {
          icon: Shield,
          name: "Guardiã",
          specialty: "Sherpa de Compliance",
          description: "Garante que todos os processos estejam em conformidade com regulamentações, automatiza auditorias e mantém a segurança dos dados.",
          capabilities: ["LGPD compliance", "Auditorias automáticas", "Segurança de dados", "Relatórios regulatórios"],
          color: "from-slate-600 to-slate-800",
          whatsapp: "5521988341245"
        },
        {
          icon: Brain,
          name: "Orquestrador",
          specialty: "Sherpa de Integração",
          description: "Coordena todos os outros Sherpas, garantindo que trabalhem em harmonia e que nenhuma necessidade seja deixada para trás na escalada.",
          capabilities: ["Orquestração multi-agentes", "Fluxos automatizados", "Integração sistêmica", "Coordenação inteligente"],
          color: "from-orange-500 to-red-500",
          whatsapp: "5521988341245"
        }
      ]
    },
    en: {
      title: "Our Digital Sherpas",
      subtitle: "Each Sherpa specializes in carrying a specific part of your operational backpack",
      sherpas: [
        {
          icon: Heart,
          name: "Clara",
          specialty: "Wellbeing Sherpa",
          description: "Takes care of team mental health and wellbeing, automating NR1, monitoring burnout signs and connecting people to the right resources at the right time.",
          capabilities: ["24/7 wellbeing monitoring", "Automatic NR1 compliance", "Early risk detection", "Empathetic WhatsApp support"],
          color: "from-red-500 to-pink-500",
          whatsapp: "5551995243454"
        },
        {
          icon: Users,
          name: "Açuana",
          specialty: "Development Sherpa", 
          description: "Accompanies professional growth journeys, from onboarding to leadership, offering personalized guidance and insights based on behavioral data.",
          capabilities: ["Personalized mentoring", "Development paths", "Continuous feedback", "Skills analysis"],
          color: "from-blue-500 to-indigo-500",
          whatsapp: "5521988341245"
        },
        {
          icon: TrendingUp,
          name: "Martina",
          specialty: "Experience Sherpa",
          description: "Manages the entire employee journey, collecting feedback, anticipating needs and ensuring every touchpoint is a positive experience.",
          capabilities: ["Employee journey", "Feedback collection", "Need anticipation", "Personalized experience"],
          color: "from-green-500 to-teal-500",
          whatsapp: "5521988341245"
        },
        {
          icon: BarChart3,
          name: "Atlas",
          specialty: "Insights Sherpa",
          description: "Transforms conversations into structured data, generates real-time dashboards and offers predictive analytics for strategic decision making.",
          capabilities: ["Real-time dashboards", "Predictive analytics", "Measurable ROI", "Actionable insights"],
          color: "from-purple-500 to-blue-500",
          whatsapp: "5521988341245"
        },
        {
          icon: Shield,
          name: "Guardian",
          specialty: "Compliance Sherpa",
          description: "Ensures all processes comply with regulations, automates audits and maintains data security.",
          capabilities: ["GDPR compliance", "Automatic audits", "Data security", "Regulatory reports"],
          color: "from-slate-600 to-slate-800",
          whatsapp: "5521988341245"
        },
        {
          icon: Brain,
          name: "Orchestrator",
          specialty: "Integration Sherpa",
          description: "Coordinates all other Sherpas, ensuring they work in harmony and that no need is left behind in the climb.",
          capabilities: ["Multi-agent orchestration", "Automated workflows", "System integration", "Intelligent coordination"],
          color: "from-orange-500 to-red-500",
          whatsapp: "5521988341245"
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

  const handleSherpaContact = (whatsapp, sherpaName) => {
    const message = language === 'pt' 
      ? `Olá! Gostaria de saber mais sobre o Sherpa ${sherpaName}.`
      : `Hello! I'd like to know more about ${sherpaName} Sherpa.`;
    window.open(`https://wa.me/5521986697419?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="sherpas" className="py-20 lg:py-32 bg-slate-800">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content[language].sherpas.map((sherpa, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="sherpa-glass rounded-3xl p-8 sherpa-card"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sherpa.color} flex items-center justify-center mx-auto mb-4`}>
                  <sherpa.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {sherpa.name}
                </h3>
                <p className="text-orange-400 font-semibold">
                  {sherpa.specialty}
                </p>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6 text-center">
                {sherpa.description}
              </p>

              <div className="space-y-3 mb-6">
                {sherpa.capabilities.map((capability, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sherpa.color}`} />
                    <span className="text-slate-300 text-sm">{capability}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSherpaContact(sherpa.whatsapp, sherpa.name)}
                className={`w-full bg-gradient-to-r ${sherpa.color} text-white py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg`}
              >
                {language === 'pt' ? `Falar com ${sherpa.name}` : `Talk to ${sherpa.name}`}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
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
            {language === 'pt' ? 'Montar Minha Equipe de Sherpas' : 'Build My Sherpa Team'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalSherpas;