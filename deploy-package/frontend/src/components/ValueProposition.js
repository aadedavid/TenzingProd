import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sprout, Compass, MessageCircle, Brain, BarChart3 } from 'lucide-react';

const ValueProposition = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = {
    pt: {
      title: "Nossa Proposta de Valor",
      subtitle: "Entregamos soluções completas para desenvolvimento humano e gestão organizacional",
      values: [
        {
          icon: Sprout,
          title: "Diagnóstico Psicossocial Automatizado",
          description: "Avaliações completas de NR1 e GRO com inteligência artificial, fornecendo insights precisos sobre saúde mental e bem-estar organizacional.",
          color: "from-green-500 to-emerald-500"
        },
        {
          icon: Compass,
          title: "Mentoria e Desenvolvimento com IA",
          description: "Agentes especializados como Açuana e Clara oferecem orientação personalizada, acelerando o crescimento profissional e pessoal.",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: MessageCircle,
          title: "Comunicação Empática via WhatsApp",
          description: "Interface natural e acessível através do WhatsApp, garantindo engajamento constante e suporte quando necessário.",
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: Brain,
          title: "Jornada Personalizada Multi-inteligente",
          description: "Agentes especializados trabalham em conjunto para criar experiências únicas adaptadas às necessidades individuais.",
          color: "from-orange-500 to-red-500"
        },
        {
          icon: BarChart3,
          title: "Dados Estruturados para Decisão",
          description: "Informações organizadas e dashboards intuitivos que transformam conversas em insights acionáveis para liderança.",
          color: "from-teal-500 to-blue-500"
        }
      ]
    },
    en: {
      title: "Our Value Proposition",
      subtitle: "We deliver complete solutions for human development and organizational management",
      values: [
        {
          icon: Sprout,
          title: "Automated Psychosocial Diagnosis",
          description: "Complete NR1 and GRO assessments with artificial intelligence, providing precise insights into mental health and organizational wellbeing.",
          color: "from-green-500 to-emerald-500"
        },
        {
          icon: Compass,
          title: "AI-Powered Mentorship & Development",
          description: "Specialized agents like Açuana and Clara offer personalized guidance, accelerating professional and personal growth.",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: MessageCircle,
          title: "Empathetic Communication via WhatsApp",
          description: "Natural and accessible interface through WhatsApp, ensuring constant engagement and support when needed.",
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: Brain,
          title: "Personalized Multi-intelligent Journey",
          description: "Specialized agents work together to create unique experiences adapted to individual needs.",
          color: "from-orange-500 to-red-500"
        },
        {
          icon: BarChart3,
          title: "Structured Data for Decision Making",
          description: "Organized information and intuitive dashboards that transform conversations into actionable insights for leadership.",
          color: "from-teal-500 to-blue-500"
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
    <section id="value-prop" className="py-20 lg:py-32 bg-white">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content[language].values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-center">
                {value.description}
              </p>
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
            onClick={() => window.open('https://wa.me/5551995243454', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {language === 'pt' ? 'Teste Clara.AI Agora' : 'Test Clara.AI Now'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;