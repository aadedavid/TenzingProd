import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Calendar, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const content = {
    pt: {
      title: "Entre em Contato",
      subtitle: "Pronto para transformar sua organização com IA empática? Vamos conversar!",
      form: {
        name: "Nome completo",
        email: "E-mail profissional",
        company: "Empresa",
        role: "Cargo/Função",
        roleOptions: [
          "Sou RH",
          "Sou CEO/Diretor",
          "Sou Gestor",
          "Sou Consultor", 
          "Quero experimentar",
          "Outro"
        ],
        message: "Como podemos ajudar sua organização?",
        submit: "Enviar Mensagem"
      },
      contact: {
        whatsapp: "WhatsApp Direto",
        whatsappText: "Converse conosco agora",
        demo: "Demonstração Gratuita",
        demoText: "Agende sua demo personalizada",
        email: "E-mail",
        phone: "Telefone"
      },
      cta: {
        title: "Teste Clara.AI Agora",
        subtitle: "Experimente gratuitamente nossa IA de saúde mental"
      }
    },
    en: {
      title: "Get in Touch",
      subtitle: "Ready to transform your organization with empathetic AI? Let's talk!",
      form: {
        name: "Full name",
        email: "Professional email",
        company: "Company",
        role: "Role/Position",
        roleOptions: [
          "I'm HR",
          "I'm CEO/Director", 
          "I'm Manager",
          "I'm Consultant",
          "I want to try",
          "Other"
        ],
        message: "How can we help your organization?",
        submit: "Send Message"
      },
      contact: {
        whatsapp: "Direct WhatsApp",
        whatsappText: "Chat with us now",
        demo: "Free Demo",
        demoText: "Schedule your personalized demo",
        email: "Email",
        phone: "Phone"
      },
      cta: {
        title: "Test Clara.AI Now",
        subtitle: "Try our mental health AI for free"
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
    // Compose WhatsApp message
    const message = `Olá! Meu nome é ${formData.name} da empresa ${formData.company}. Sou ${formData.role}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5521988341245?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521988341245', '_blank');
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
    <section id="contact" className="py-20 lg:py-32 bg-white">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-50 rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content[language].form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content[language].form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content[language].form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content[language].form.role}
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">{language === 'pt' ? 'Selecione...' : 'Select...'}</option>
                    {content[language].form.roleOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content[language].form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{content[language].form.submit}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-coral-500 to-orange-500 rounded-3xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                {content[language].cta.title}
              </h3>
              <p className="text-coral-100 mb-6">
                {content[language].cta.subtitle}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-coral-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                {language === 'pt' ? 'Testar Agora' : 'Test Now'}
              </motion.button>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={handleWhatsApp}
                className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 cursor-pointer hover:bg-green-100 transition-colors"
              >
                <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {content[language].contact.whatsapp}
                </h4>
                <p className="text-green-600 text-sm">
                  {content[language].contact.whatsappText}
                </p>
              </motion.div>

              {/* Demo */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 cursor-pointer hover:bg-blue-100 transition-colors"
              >
                <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {content[language].contact.demo}
                </h4>
                <p className="text-blue-600 text-sm">
                  {content[language].contact.demoText}
                </p>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">+55 (21) 98834-1245</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">contato@koai.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{language === 'pt' ? 'Rio de Janeiro, Brasil' : 'Rio de Janeiro, Brazil'}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;