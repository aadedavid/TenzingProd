import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Weight, ArrowRight, Mountain, Target, Users, BarChart3 } from 'lucide-react';

const LiberatedJourney = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const content = {
    pt: {
      title: "Sua Jornada Libertada",
      subtitle: "Veja como sua rotina se transforma quando nossos Sherpas Digitais carregam a mochila operacional",
      beforeAfter: {
        before: {
          title: "Antes: Carregando a Mochila Pesada",
          subtitle: "Você passa o dia todo amarrado em processos operacionais",
          scenarios: [
            {
              icon: Weight,
              title: "Manhã Perdida",
              description: "7h-10h: Respondendo WhatsApp de dúvidas sobre benefícios, aprovando férias, checando quem faltou e por quê.",
              pain: "3 horas perdidas que poderiam ser usadas para estratégia"
            },
            {
              icon: Weight,
              title: "Tarde Fragmentada", 
              description: "14h-17h: Reconciliando planilhas, acionando financeiro, coletando feedback de clima em e-mails desencontrados.",
              pain: "Foco disperso, decisões baseadas em dados inconsistentes"
            },
            {
              icon: Weight,
              title: "Noite Estressante",
              description: "18h-20h: Criando relatórios manuais, respondendo urgências que poderiam ter sido prevenidas.",
              pain: "Burnout, impacto na vida pessoal"
            }
          ]
        },
        after: {
          title: "Depois: Foco na Vista do Topo",
          subtitle: "Nossos Sherpas carregam o peso, você lidera a expedição",
          scenarios: [
            {
              icon: Mountain,
              title: "Manhã Estratégica",
              description: "7h-10h: Recebe dashboard consolidado, foca em conversas 1:1 reais com a equipe, planeja iniciativas de cultura.",
              benefit: "Tempo de qualidade investido em pessoas e estratégia"
            },
            {
              icon: Target,
              title: "Tarde Produtiva",
              description: "14h-17h: Dados organizados automaticamente, decisões baseadas em insights preditivos, ações focadas em resultados.",
              benefit: "Tomada de decisão ágil e baseada em evidências"
            },
            {
              icon: Users,
              title: "Noite Equilibrada",
              description: "18h-20h: Processos rodando automaticamente, alertas inteligentes só para o que realmente importa.",
              benefit: "Vida pessoal preservada, liderança sustentável"
            }
          ]
        }
      },
      results: {
        title: "Resultados Mensuráveis da Libertação",
        metrics: [
          { number: "30%", label: "Redução em tempo administrativo", icon: BarChart3 },
          { number: "24/7", label: "Atendimento automatizado", icon: Users },
          { number: "90%", label: "Satisfação em processos de RH", icon: Target },
          { number: "60%", label: "Melhoria em insights estratégicos", icon: Mountain }
        ]
      }
    },
    en: {
      title: "Your Liberated Journey", 
      subtitle: "See how your routine transforms when our Digital Sherpas carry the operational backpack",
      beforeAfter: {
        before: {
          title: "Before: Carrying the Heavy Backpack",
          subtitle: "You spend all day tied up in operational processes",
          scenarios: [
            {
              icon: Weight,
              title: "Lost Morning",
              description: "7am-10am: Answering WhatsApp questions about benefits, approving time off, checking who's absent and why.",
              pain: "3 hours lost that could be used for strategy"
            },
            {
              icon: Weight,
              title: "Fragmented Afternoon",
              description: "2pm-5pm: Reconciling spreadsheets, contacting finance, collecting climate feedback through disconnected emails.",
              pain: "Scattered focus, decisions based on inconsistent data"
            },
            {
              icon: Weight,
              title: "Stressful Evening",
              description: "6pm-8pm: Creating manual reports, responding to emergencies that could have been prevented.",
              pain: "Burnout, impact on personal life"
            }
          ]
        },
        after: {
          title: "After: Focus on the Summit View",
          subtitle: "Our Sherpas carry the weight, you lead the expedition",
          scenarios: [
            {
              icon: Mountain,
              title: "Strategic Morning",
              description: "7am-10am: Receives consolidated dashboard, focuses on real 1:1 conversations with team, plans culture initiatives.",
              benefit: "Quality time invested in people and strategy"
            },
            {
              icon: Target,
              title: "Productive Afternoon",
              description: "2pm-5pm: Data automatically organized, decisions based on predictive insights, actions focused on results.",
              benefit: "Agile and evidence-based decision making"
            },
            {
              icon: Users,
              title: "Balanced Evening",
              description: "6pm-8pm: Processes running automatically, intelligent alerts only for what really matters.",
              benefit: "Personal life preserved, sustainable leadership"
            }
          ]
        }
      },
      results: {
        title: "Measurable Liberation Results",
        metrics: [
          { number: "30%", label: "Reduction in administrative time", icon: BarChart3 },
          { number: "24/7", label: "Automated service", icon: Users },
          { number: "90%", label: "Satisfaction in HR processes", icon: Target },
          { number: "60%", label: "Improvement in strategic insights", icon: Mountain }
        ]
      }
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
    <section id="journey" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
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

        {/* Before & After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Before - Heavy Backpack */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="bg-red-900/20 border-2 border-red-500/30 rounded-3xl p-8">
              <div className="text-center mb-8">
                <Weight className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {content[language].beforeAfter.before.title}
                </h3>
                <p className="text-red-300">
                  {content[language].beforeAfter.before.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {content[language].beforeAfter.before.scenarios.map((scenario, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="bg-slate-800/50 rounded-2xl p-6"
                  >
                    <h4 className="text-white font-bold mb-2">{scenario.title}</h4>
                    <p className="text-slate-300 text-sm mb-3">{scenario.description}</p>
                    <p className="text-red-400 text-xs font-medium">💔 {scenario.pain}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After - Liberated Focus */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="bg-gradient-to-br from-orange-500/20 to-green-500/20 border-2 border-orange-500/30 rounded-3xl p-8">
              <div className="text-center mb-8">
                <Mountain className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {content[language].beforeAfter.after.title}
                </h3>
                <p className="text-orange-300">
                  {content[language].beforeAfter.after.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {content[language].beforeAfter.after.scenarios.map((scenario, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="bg-slate-800/50 rounded-2xl p-6"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <scenario.icon className="w-5 h-5 text-orange-400" />
                      <h4 className="text-white font-bold">{scenario.title}</h4>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{scenario.description}</p>
                    <p className="text-green-400 text-xs font-medium">✨ {scenario.benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arrow indicator */}
            <div className="hidden lg:block absolute top-1/2 -left-6 transform -translate-y-1/2">
              <ArrowRight className="w-12 h-12 text-orange-400" />
            </div>
          </motion.div>
        </div>

        {/* Results Metrics */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            {content[language].results.title}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content[language].results.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <metric.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-slate-300 text-sm">{metric.label}</div>
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
            {language === 'pt' ? 'Liberte Sua Jornada Agora' : 'Liberate Your Journey Now'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LiberatedJourney;