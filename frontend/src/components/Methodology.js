import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Compass, Mountain, Flag, Users, Zap } from 'lucide-react';

const Methodology = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const content = {
    pt: {
      title: "Nossa Metodologia de Expedição",
      subtitle: "Como planejamos e executamos a libertação da sua jornada operacional",
      phases: [
        {
          icon: MapPin,
          number: "01",
          title: "Mapeamento do Terreno",
          subtitle: "Diagnóstico Profundo",
          description: "Analisamos sua montanha operacional atual: processos manuais, pontos de dor, gargalos e oportunidades de automação.",
          activities: [
            "Auditoria de processos de RH e gestão",
            "Identificação de tarefas repetitivas", 
            "Mapeamento de fluxos de comunicação",
            "Análise de tempo perdido vs valor agregado"
          ],
          duration: "1-2 semanas",
          deliverable: "Mapa detalhado da sua 'mochila operacional'"
        },
        {
          icon: Compass,
          number: "02", 
          title: "Planejamento da Rota",
          subtitle: "Estratégia Personalizada",
          description: "Desenhamos a rota ideal para sua expedição: quais Sherpas você precisa, em que ordem e como eles trabalharão juntos.",
          activities: [
            "Seleção dos Sherpas Digitais ideais",
            "Desenho de fluxos automatizados",
            "Configuração de integrações",
            "Planejamento de implementação gradual"
          ],
          duration: "1 semana",
          deliverable: "Plano de expedição personalizado"
        },
        {
          icon: Mountain,
          number: "03",
          title: "Implementação Base Camp",
          subtitle: "Deploy Controlado",
          description: "Instalamos seus Sherpas Digitais de forma gradual e controlada, garantindo que cada um funcione perfeitamente antes do próximo.",
          activities: [
            "Configuração dos agentes especializados",
            "Testes de integração WhatsApp",
            "Treinamento da equipe",
            "Monitoramento em tempo real"
          ],
          duration: "2-3 semanas",
          deliverable: "Sherpas funcionando e equipe treinada"
        },
        {
          icon: Flag,
          number: "04",
          title: "Ascensão ao Pico",
          subtitle: "Otimização Contínua",
          description: "Acompanhamos sua jornada libertada, otimizando processos e garantindo que você chegue ao topo com máxima eficiência.",
          activities: [
            "Monitoramento de KPIs de libertação",
            "Ajustes finos nos fluxos",
            "Expansão para novos casos de uso",
            "Relatórios de impacto mensal"
          ],
          duration: "Contínuo",
          deliverable: "Organização verdadeiramente libertada"
        }
      ],
      technology: {
        title: "Nossa Base Tecnológica",
        subtitle: "A tecnologia que faz os Sherpas carregarem sua mochila",
        stack: [
          {
            icon: Zap,
            name: "IA Generativa Multiagentes",
            description: "GPT-4o e modelos avançados trabalhando em conjunto",
            capabilities: ["Processamento de linguagem natural", "Análise de contexto emocional", "Respostas personalizadas"]
          },
          {
            icon: Users,
            name: "Orquestração Inteligente",
            description: "Make.com e Zapier coordenando todos os fluxos",
            capabilities: ["Automação de processos", "Integração sistêmica", "Fluxos condicionais"]
          },
          {
            icon: Mountain,
            name: "WhatsApp API Nativa",
            description: "Comunicação onde as pessoas já estão",
            capabilities: ["Atendimento 24/7", "Interface familiar", "Engajamento alto"]
          }
        ]
      }
    },
    en: {
      title: "Our Expedition Methodology",
      subtitle: "How we plan and execute the liberation of your operational journey",
      phases: [
        {
          icon: MapPin,
          number: "01",
          title: "Terrain Mapping",
          subtitle: "Deep Diagnosis",
          description: "We analyze your current operational mountain: manual processes, pain points, bottlenecks and automation opportunities.",
          activities: [
            "HR and management process audit",
            "Identification of repetitive tasks",
            "Communication flow mapping", 
            "Analysis of lost time vs added value"
          ],
          duration: "1-2 weeks",
          deliverable: "Detailed map of your 'operational backpack'"
        },
        {
          icon: Compass,
          number: "02",
          title: "Route Planning",
          subtitle: "Personalized Strategy",
          description: "We design the ideal route for your expedition: which Sherpas you need, in what order and how they will work together.",
          activities: [
            "Selection of ideal Digital Sherpas",
            "Design of automated flows",
            "Integration configuration",
            "Gradual implementation planning"
          ],
          duration: "1 week",
          deliverable: "Personalized expedition plan"
        },
        {
          icon: Mountain,
          number: "03",
          title: "Base Camp Implementation",
          subtitle: "Controlled Deploy",
          description: "We install your Digital Sherpas gradually and controlled, ensuring each one works perfectly before the next.",
          activities: [
            "Specialized agent configuration",
            "WhatsApp integration testing",
            "Team training",
            "Real-time monitoring"
          ],
          duration: "2-3 weeks",
          deliverable: "Sherpas working and team trained"
        },
        {
          icon: Flag,
          number: "04",
          title: "Summit Ascent",
          subtitle: "Continuous Optimization",
          description: "We accompany your liberated journey, optimizing processes and ensuring you reach the top with maximum efficiency.",
          activities: [
            "Liberation KPI monitoring",
            "Fine-tuning of flows",
            "Expansion to new use cases",
            "Monthly impact reports"
          ],
          duration: "Continuous",
          deliverable: "Truly liberated organization"
        }
      ],
      technology: {
        title: "Our Technological Base",
        subtitle: "The technology that makes Sherpas carry your backpack",
        stack: [
          {
            icon: Zap,
            name: "Multi-agent Generative AI",
            description: "GPT-4o and advanced models working together",
            capabilities: ["Natural language processing", "Emotional context analysis", "Personalized responses"]
          },
          {
            icon: Users,
            name: "Intelligent Orchestration",
            description: "Make.com and Zapier coordinating all flows",
            capabilities: ["Process automation", "System integration", "Conditional flows"]
          },
          {
            icon: Mountain,
            name: "Native WhatsApp API",
            description: "Communication where people already are",
            capabilities: ["24/7 service", "Familiar interface", "High engagement"]
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
    <section id="methodology" className="py-20 lg:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
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

        {/* Methodology Phases */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 mb-20"
        >
          {content[language].phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Phase Number & Icon */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                      <phase.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center border-2 border-orange-500">
                      <span className="text-orange-400 font-bold text-sm">{phase.number}</span>
                    </div>
                  </div>
                </div>

                {/* Phase Content */}
                <div className="lg:col-span-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-orange-400 font-semibold mb-4">{phase.subtitle}</p>
                  <p className="text-slate-300 mb-6">{phase.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-slate-300 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase Details */}
                <div className="lg:col-span-4">
                  <div className="sherpa-glass rounded-2xl p-6">
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">
                        {language === 'pt' ? 'Duração:' : 'Duration:'}
                      </h4>
                      <p className="text-orange-400">{phase.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        {language === 'pt' ? 'Entregável:' : 'Deliverable:'}
                      </h4>
                      <p className="text-slate-300 text-sm">{phase.deliverable}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase Connector */}
              {index < content[language].phases.length - 1 && (
                <div className="hidden lg:block absolute left-10 top-20 w-0.5 h-24 bg-gradient-to-b from-orange-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            {content[language].technology.title}
          </h3>
          <p className="text-slate-300 mb-12 text-lg">
            {content[language].technology.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[language].technology.stack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.2 }}
                className="sherpa-glass rounded-2xl p-6"
              >
                <tech.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">{tech.name}</h4>
                <p className="text-slate-300 text-sm mb-4">{tech.description}</p>
                
                <div className="space-y-2">
                  {tech.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span className="text-slate-300 text-xs">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
            {language === 'pt' ? 'Iniciar Minha Expedição' : 'Start My Expedition'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;