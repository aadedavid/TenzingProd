import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Calendar, Mail, Phone, MapPin, Send, Mountain } from 'lucide-react';

const ContactSection = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: '',
    message: ''
  });

  const content = {
    pt: {
      title: "Pronto para Sua Expedição?",
      subtitle: "Vamos planejar como nossos Sherpas Digitais podem carregar sua mochila operacional",
      form: {
        name: "Seu nome",
        email: "E-mail corporativo",
        company: "Empresa",
        role: "Seu papel na organização",
        roleOptions: [
          "CEO/Fundador",
          "Diretor de RH",
          "Gestor de Pessoas",
          "Head de Operações", 
          "CTO/Diretor de TI",
          "Consultor",
          "Outro"
        ],
        challenge: "Principal desafio operacional",
        challengeOptions: [
          "Muito tempo em processos manuais",
          "Equipe sobrecarregada com tarefas repetitivas",
          "Dificuldade em manter compliance",
          "Falta de dados estruturados para decisões",
          "Problemas de comunicação interna",
          "Alto turnover e baixo engajamento",
          "Outro"
        ],
        message: "Conte mais sobre sua montanha operacional",
        submit: "Agendar Conversa Estratégica"
      },
      quickActions: {
        sherpa: "Falar com Sherpa Especialista",
        sherpaText: "WhatsApp direto com nossa equipe",
        demo: "Demonstração Personalizada", 
        demoText: "Veja os Sherpas em ação",
        clara: "Testar Clara.AI Agora",
        claraText: "Experimente nosso Sherpa de Bem-Estar"
      },
      contact: {
        title: "Outras Formas de Contato",
        phone: "+55 (21) 98834-1245",
        email: "contato@tenzing.com.br",
        address: "Remoto - onde você estiver"
      }
    },
    en: {
      title: "Ready for Your Expedition?",
      subtitle: "Let's plan how our Digital Sherpas can carry your operational backpack",
      form: {
        name: "Your name",
        email: "Corporate email",
        company: "Company",
        role: "Your role in the organization",
        roleOptions: [
          "CEO/Founder",
          "HR Director",
          "People Manager",
          "Head of Operations",
          "CTO/IT Director", 
          "Consultant",
          "Other"
        ],
        challenge: "Main operational challenge",
        challengeOptions: [
          "Too much time on manual processes",
          "Team overwhelmed with repetitive tasks",
          "Difficulty maintaining compliance",
          "Lack of structured data for decisions",
          "Internal communication problems",
          "High turnover and low engagement",
          "Other"
        ],
        message: "Tell us more about your operational mountain",
        submit: "Schedule Strategic Conversation"
      },
      quickActions: {
        sherpa: "Talk to Specialist Sherpa",
        sherpaText: "Direct WhatsApp with our team",
        demo: "Personalized Demo",
        demoText: "See Sherpas in action", 
        clara: "Test Clara.AI Now",
        claraText: "Try our Wellbeing Sherpa"
      },
      contact: {
        title: "Other Ways to Contact",
        phone: "+55 (21) 98834-1245",
        email: "contato@tenzing.com.br", 
        address: "Remote - wherever you are"
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Olá! Sou ${formData.name} da ${formData.company}. 

Meu papel: ${formData.role}
Principal desafio: ${formData.challenge}

${formData.message}

Gostaria de agendar uma conversa para entender como os Sherpas Digitais podem ajudar nossa organização.`;
    
    const whatsappUrl = `https://wa.me/5521986697419?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickActions = {
    sherpa: () => window.open('https://wa.me/5521986697419', '_blank'),
    demo: () => window.open('https://calendar.app.google/pug4TSYUPhiMCvzo6', '_blank'),
    clara: () => window.open('https://wa.me/5551995243454', '_blank')
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
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="sherpa-glass rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {content[language].form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {content[language].form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {content[language].form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {content[language].form.role}
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="">{language === 'pt' ? 'Selecione...' : 'Select...'}</option>
                    {content[language].form.roleOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {content[language].form.challenge}
                </label>
                <select
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  <option value="">{language === 'pt' ? 'Selecione seu maior desafio...' : 'Select your biggest challenge...'}</option>
                  {content[language].form.challengeOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {content[language].form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder={language === 'pt' ? 'Descreva seus principais processos manuais e desafios operacionais...' : 'Describe your main manual processes and operational challenges...'}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-sherpa-primary py-4 text-lg flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{content[language].form.submit}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Quick Actions & Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* Sherpa Contact */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={handleQuickActions.sherpa}
                className="sherpa-glass rounded-2xl p-6 cursor-pointer hover:border-green-500/50 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{content[language].quickActions.sherpa}</h4>
                    <p className="text-slate-300 text-sm">{content[language].quickActions.sherpaText}</p>
                  </div>
                </div>
              </motion.div>

              {/* Demo */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={handleQuickActions.demo}
                className="sherpa-glass rounded-2xl p-6 cursor-pointer hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{content[language].quickActions.demo}</h4>
                    <p className="text-slate-300 text-sm">{content[language].quickActions.demoText}</p>
                  </div>
                </div>
              </motion.div>

              {/* Clara Test */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={handleQuickActions.clara}
                className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500/30 rounded-2xl p-6 cursor-pointer hover:from-red-500/30 hover:to-pink-500/30 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Mountain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{content[language].quickActions.clara}</h4>
                    <p className="text-red-200 text-sm">{content[language].quickActions.claraText}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="sherpa-glass rounded-2xl p-6"
            >
              <h4 className="text-white font-bold mb-4">{content[language].contact.title}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-slate-300">{content[language].contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-slate-300">{content[language].contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-slate-300">{content[language].contact.address}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;