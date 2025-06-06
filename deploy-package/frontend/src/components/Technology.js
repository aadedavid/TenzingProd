import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Zap, Shield, BarChart, Bot, Network } from 'lucide-react';

const Technology = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = {
    pt: {
      title: "Tecnologia de Ponta",
      subtitle: "Nossa stack tecnológica combina o melhor da IA generativa com automação inteligente",
      techs: [
        {
          icon: Bot,
          title: "Multiagentes com IA Generativa",
          description: "Powered by GPT-4o e modelos de linguagem avançados para conversas naturais e insights profundos",
          details: ["GPT-4o Integration", "Natural Language Processing", "Context Awareness"]
        },
        {
          icon: Network,
          title: "Orquestração No-Code",
          description: "Integração perfeita usando Make.com e Zapier para fluxos automatizados sem complexidade técnica",
          details: ["Make.com Workflows", "Zapier Integration", "Automated Processes"]
        },
        {
          icon: BarChart,
          title: "Dados em Tempo Real",
          description: "Dashboards dinâmicos e visualizações via Power BI transformam conversas em insights acionáveis",
          details: ["Live Dashboards", "Power BI Integration", "Real-time Analytics"]
        },
        {
          icon: Shield,
          title: "Compliance e Auditoria",
          description: "Arquitetura preparada para conformidade regulatória e processos de auditoria empresarial",
          details: ["LGPD Compliance", "Audit Trail", "Data Security"]
        }
      ],
      workflow: {
        title: "Como Funciona",
        steps: [
          {
            number: "01",
            title: "Conversa Natural",
            description: "Usuário interage via WhatsApp com nossos agentes especializados"
          },
          {
            number: "02", 
            title: "Processamento IA",
            description: "Algoritmos analisam contexto, emoções e necessidades em tempo real"
          },
          {
            number: "03",
            title: "Insights Estruturados",
            description: "Dados são organizados e transformados em relatórios e dashboards"
          },
          {
            number: "04",
            title: "Ação Estratégica",
            description: "Gestores tomam decisões baseadas em dados científicos"
          }
        ]
      }
    },
    en: {
      title: "Cutting-Edge Technology",
      subtitle: "Our tech stack combines the best of generative AI with intelligent automation",
      techs: [
        {
          icon: Bot,
          title: "Multi-agent Generative AI",
          description: "Powered by GPT-4o and advanced language models for natural conversations and deep insights",
          details: ["GPT-4o Integration", "Natural Language Processing", "Context Awareness"]
        },
        {
          icon: Network,
          title: "No-Code Orchestration",
          description: "Perfect integration using Make.com and Zapier for automated workflows without technical complexity",
          details: ["Make.com Workflows", "Zapier Integration", "Automated Processes"]
        },
        {
          icon: BarChart,
          title: "Real-Time Data",
          description: "Dynamic dashboards and visualizations via Power BI transform conversations into actionable insights",
          details: ["Live Dashboards", "Power BI Integration", "Real-time Analytics"]
        },
        {
          icon: Shield,
          title: "Compliance & Audit",
          description: "Architecture prepared for regulatory compliance and enterprise audit processes",
          details: ["GDPR Compliance", "Audit Trail", "Data Security"]
        }
      ],
      workflow: {
        title: "How It Works",
        steps: [
          {
            number: "01",
            title: "Natural Conversation",
            description: "User interacts via WhatsApp with our specialized agents"
          },
          {
            number: "02",
            title: "AI Processing", 
            description: "Algorithms analyze context, emotions and needs in real-time"
          },
          {
            number: "03",
            title: "Structured Insights",
            description: "Data is organized and transformed into reports and dashboards"
          },
          {
            number: "04",
            title: "Strategic Action",
            description: "Managers make decisions based on scientific data"
          }
        ]
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
    <section id="technology" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {content[language].techs.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {tech.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {tech.description}
              </p>

              <div className="space-y-1">
                {tech.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span className="text-xs text-gray-500">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brain Image Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-3xl overflow-hidden mb-20"
        >
          <div 
            className="h-96 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxuZXVyYWwlMjBuZXR3b3JrJTIwYnJhaW58ZW58MHx8fHwxNzQ4ODcwMTgzfDA&ixlib=rb-4.1.0&q=85')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {language === 'pt' ? 'Inteligência que Aprende e Evolui' : 'Intelligence that Learns and Evolves'}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-200 max-w-2xl mx-auto"
              >
                {language === 'pt' 
                  ? 'Nossa IA não apenas responde - ela compreende, contextualiza e evolui com cada interação'
                  : 'Our AI doesn\'t just respond - it understands, contextualizes and evolves with each interaction'
                }
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Workflow Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            {content[language].workflow.title}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content[language].workflow.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  {index < content[language].workflow.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transform -translate-x-8" />
                  )}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;