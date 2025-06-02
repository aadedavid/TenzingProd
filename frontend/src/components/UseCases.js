import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, TrendingUp, Database } from 'lucide-react';

const UseCases = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const content = {
    pt: {
      title: "Casos de Uso",
      subtitle: "Veja como nossos agentes de IA transformam diferentes áreas organizacionais",
      cases: [
        {
          icon: Heart,
          title: "Clara no RH",
          subtitle: "Prevenção e Saúde Mental",
          description: "Clara atua na prevenção de problemas de saúde mental, oferecendo suporte contínuo, monitoramento de bem-estar e cumprimento da NR1. Identifica sinais precoces e conecta colaboradores com recursos apropriados.",
          benefits: ["Redução do absenteísmo", "Compliance automático NR1", "Detecção precoce de riscos"],
          color: "from-red-500 to-pink-500",
          image: "https://images.pexels.com/photos/8355798/pexels-photo-8355798.jpeg"
        },
        {
          icon: Users,
          title: "AAC em Treinamentos",
          subtitle: "Líderes com IA Copiloto",
          description: "O agente AAC atua como copiloto inteligente para líderes, oferecendo orientação em tempo real, sugestões de desenvolvimento de equipe e insights baseados em dados comportamentais.",
          benefits: ["Liderança mais eficaz", "Desenvolvimento contínuo", "Decisões baseadas em dados"],
          color: "from-blue-500 to-indigo-500",
          image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
        },
        {
          icon: TrendingUp,
          title: "Martina na Jornada",
          subtitle: "Experiência do Colaborador",
          description: "Martina acompanha toda a jornada do colaborador, desde onboarding até desenvolvimento de carreira, oferecendo suporte personalizado e coletando feedback contínuo.",
          benefits: ["Onboarding eficiente", "Engajamento elevado", "Retenção de talentos"],
          color: "from-green-500 to-teal-500",
          image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NDg4NzAyMDh8MA&ixlib=rb-4.1.0&q=85"
        },
        {
          icon: Database,
          title: "Integração Completa",
          subtitle: "WhatsApp + Dashboards",
          description: "Integração perfeita entre WhatsApp, Google Sheets e Power BI, transformando conversas em dados estruturados e insights acionáveis para tomada de decisão estratégica.",
          benefits: ["Dados em tempo real", "Relatórios automáticos", "ROI mensurável"],
          color: "from-purple-500 to-blue-500",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc0ODg3MDIwMnww&ixlib=rb-4.1.0&q=85"
        }
      ]
    },
    en: {
      title: "Use Cases",
      subtitle: "See how our AI agents transform different organizational areas",
      cases: [
        {
          icon: Heart,
          title: "Clara in HR",
          subtitle: "Prevention and Mental Health",
          description: "Clara works in mental health prevention, offering continuous support, wellness monitoring and NR1 compliance. Identifies early signs and connects employees with appropriate resources.",
          benefits: ["Reduced absenteeism", "Automatic NR1 compliance", "Early risk detection"],
          color: "from-red-500 to-pink-500",
          image: "https://images.pexels.com/photos/8355798/pexels-photo-8355798.jpeg"
        },
        {
          icon: Users,
          title: "AAC in Training",
          subtitle: "Leaders with AI Copilot",
          description: "The AAC agent acts as an intelligent copilot for leaders, offering real-time guidance, team development suggestions and insights based on behavioral data.",
          benefits: ["More effective leadership", "Continuous development", "Data-driven decisions"],
          color: "from-blue-500 to-indigo-500",
          image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
        },
        {
          icon: TrendingUp,
          title: "Martina in Journey",
          subtitle: "Employee Experience",
          description: "Martina accompanies the entire employee journey, from onboarding to career development, offering personalized support and collecting continuous feedback.",
          benefits: ["Efficient onboarding", "High engagement", "Talent retention"],
          color: "from-green-500 to-teal-500",
          image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NDg4NzAyMDh8MA&ixlib=rb-4.1.0&q=85"
        },
        {
          icon: Database,
          title: "Complete Integration",
          subtitle: "WhatsApp + Dashboards",
          description: "Perfect integration between WhatsApp, Google Sheets and Power BI, transforming conversations into structured data and actionable insights for strategic decision making.",
          benefits: ["Real-time data", "Automatic reports", "Measurable ROI"],
          color: "from-purple-500 to-blue-500",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc0ODg3MDIwMnww&ixlib=rb-4.1.0&q=85"
        }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-gray-50">
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
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {content[language].subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {content[language].cases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${useCase.image}')` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
                    <useCase.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {useCase.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {language === 'pt' ? 'Benefícios:' : 'Benefits:'}
                  </h4>
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.color}`} />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;