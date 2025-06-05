import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building, Users, TrendingUp, Heart, Shield, Zap } from 'lucide-react';

const CasesSection = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const content = {
    pt: {
      title: "Casos de Libertação",
      subtitle: "Histórias reais de organizações que deixaram nossos Sherpas carregarem a mochila operacional",
      cases: [
        {
          icon: Building,
          company: "Startup Foodtech - 5 funcionários",
          challenge: "Durante a Black Friday, o CEO precisava lidar com o pico de vendas, mas o time estava sobrecarregado e o canal de WhatsApp travava com a demanda. O profissional responsável pelo atendimento era o mesmo que cuidava da operação dos pedidos.",
          solution: "Implementamos a Sherpa de Vendas e Atendimento, uma IA treinada para interações inteligentes via WhatsApp, com foco em agilidade, personalização e conversão.",
          results: [
            "Aumento de 200% nas vendas via WhatsApp",
            "Atendimento ativo e responsivo 24/7 sem contratar ninguém",
            "Profissional real redirecionado para a operação, agilizando entregas",
            "Experiência de compra mais fluida e sem fricções"
          ],
          testimonial: "Nossa IA virou parte do time. Vendemos o dobro sem contratar ninguém — e quem estava no fogo agora está cuidando da cozinha com maestria.",
          author: "CEO da Foodtech",
          color: "from-orange-500 to-red-500"
        },
        {
          icon: Users,
          company: "Rede de Estúdios Funcionais - 5 unidades",
          challenge: "A cada nova unidade, o dono precisava contratar mais um colaborador só para dar conta do atendimento online e presencial. Isso gerava custo fixo, sobrecarga e baixa escalabilidade.",
          solution: "Ativamos a Sherpa de Atendimento para lidar com agendamentos, dúvidas frequentes, marcação de aulas experimentais e triagem automatizada dos leads.",
          results: [
            "Redução de 2 para 1 profissional por unidade",
            "Aumento de 55% nas aulas experimentais marcadas",
            "Atendimento instantâneo e padronizado em todas as unidades",
            "Conversão de leads aumentou em 30%",
            "Mais tempo da equipe para atendimento humanizado e fechamento"
          ],
          testimonial: "A IA virou meu braço direito na recepção. Agora minha equipe pode focar no que importa: cuidar das pessoas dentro do estúdio.",
          author: "Fundador da rede de estúdios",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: Heart,
          company: "Indústria - 300 colaboradores",
          challenge: "Altos índices de burnout, dificuldade em cumprir NR1 e processos manuais complexos",
          solution: "Clara para saúde mental 24/7, Atlas para prevenção e Orquestrador para integração",
          results: [
            "60% redução em afastamentos por burnout",
            "NR1 100% em compliance",
            "Sistema de alertas preventivos funcionando",
            "ROI de 300% em 6 meses"
          ],
          testimonial: "Transformamos nossa cultura de segurança e bem-estar. Os colaboradores se sentem verdadeiramente cuidados.",
          author: "Diretor de Operações",
          color: "from-red-500 to-pink-500"
        }
      ],
      cta: {
        title: "Pronto para Liberar Sua Organização?",
        subtitle: "Agende uma conversa e descubra como nossos Sherpas podem carregar sua mochila operacional"
      }
    },
    en: {
      title: "Liberation Cases",
      subtitle: "Real stories of organizations that let our Sherpas carry the operational backpack",
      cases: [
        {
          icon: Building,
          company: "Foodtech Startup - 5 employees",
          challenge: "During Black Friday, the CEO needed to handle the sales peak, but the team was overwhelmed and the WhatsApp channel was crashing with demand. The professional responsible for customer service was the same one taking care of order operations.",
          solution: "We implemented the Sales and Service Sherpa, an AI trained for intelligent WhatsApp interactions, focusing on agility, personalization and conversion.",
          results: [
            "200% increase in WhatsApp sales",
            "Active and responsive 24/7 service without hiring anyone",
            "Real professional redirected to operations, speeding up deliveries",
            "Smoother and frictionless buying experience"
          ],
          testimonial: "Our AI became part of the team. We sold twice as much without hiring anyone — and those who were in the fire are now taking care of the kitchen with mastery.",
          author: "Foodtech CEO",
          color: "from-orange-500 to-red-500"
        },
        {
          icon: Users,
          company: "Functional Studios Network - 5 units",
          challenge: "With each new unit, the owner needed to hire one more employee just to handle online and in-person service. This generated fixed costs, overload and low scalability.",
          solution: "We activated the Service Sherpa to handle scheduling, frequent questions, trial class booking and automated lead screening.",
          results: [
            "Reduction from 2 to 1 professional per unit",
            "55% increase in trial classes scheduled",
            "Instant and standardized service across all units",
            "Lead conversion increased by 30%",
            "More team time for humanized service and closing"
          ],
          testimonial: "AI became my right hand at reception. Now my team can focus on what matters: taking care of people inside the studio.",
          author: "Studios network founder",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: Heart,
          company: "Industry - 300 employees",
          challenge: "High burnout rates, difficulty complying with regulations and complex manual processes",
          solution: "Clara for 24/7 mental health, Atlas for prevention and Orchestrator for integration",
          results: [
            "60% reduction in burnout leave",
            "100% regulatory compliance",
            "Preventive alert system working",
            "300% ROI in 6 months"
          ],
          testimonial: "We transformed our safety and wellbeing culture. Employees feel truly cared for.",
          author: "Operations Director",
          color: "from-red-500 to-pink-500"
        }
      ],
      cta: {
        title: "Ready to Liberate Your Organization?",
        subtitle: "Schedule a conversation and discover how our Sherpas can carry your operational backpack"
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
    <section id="cases" className="py-20 lg:py-32 bg-slate-900">
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
          className="space-y-12"
        >
          {content[language].cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="sherpa-glass rounded-3xl p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Company & Challenge */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center`}>
                      <caseStudy.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{caseStudy.company}</h3>
                  </div>
                  
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">
                      {language === 'pt' ? 'Desafio:' : 'Challenge:'}
                    </h4>
                    <p className="text-slate-300">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-orange-400 font-semibold mb-2">
                      {language === 'pt' ? 'Solução:' : 'Solution:'}
                    </h4>
                    <p className="text-slate-300">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-4">
                    {language === 'pt' ? 'Resultados:' : 'Results:'}
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Zap className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-slate-800/50 rounded-2xl p-6">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-orange-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <blockquote className="text-white italic mb-4">
                    "{caseStudy.testimonial}"
                  </blockquote>
                  <cite className="text-orange-400 font-semibold">
                    — {caseStudy.author}
                  </cite>
                </div>
              </div>
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
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-8 border border-orange-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              {content[language].cta.title}
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              {content[language].cta.subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://calendar.app.google/pug4TSYUPhiMCvzo6', '_blank')}
              className="btn-sherpa-primary text-lg px-10 py-4"
            >
              {language === 'pt' ? 'Agendar Conversa Estratégica' : 'Schedule Strategic Conversation'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesSection;