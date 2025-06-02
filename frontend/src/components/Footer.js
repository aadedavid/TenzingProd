import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import KoaiLogo from './KoaiLogo';

const Footer = ({ language }) => {
  const content = {
    pt: {
      brand: {
        name: "Koai",
        tagline: "IAs que escutam, cuidam e transformam"
      },
      links: {
        company: {
          title: "Empresa",
          items: [
            { label: "Sobre Nós", href: "#team" },
            { label: "Nossa Tecnologia", href: "#technology" },
            { label: "Casos de Uso", href: "#use-cases" },
            { label: "Manifesto", href: "#team" }
          ]
        },
        solutions: {
          title: "Soluções",
          items: [
            { label: "Clara.AI - Saúde Mental", href: "#" },
            { label: "Açuana - Mentoria", href: "#" },
            { label: "Martina - Employee Experience", href: "#" },
            { label: "Diagnóstico NR1", href: "#" }
          ]
        },
        resources: {
          title: "Recursos",
          items: [
            { label: "Demonstração Gratuita", href: "#contact" },
            { label: "Documentação", href: "#" },
            { label: "Suporte", href: "#contact" },
            { label: "WhatsApp", href: "https://wa.me/5521988341245" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { label: "Política de Privacidade", href: "#" },
            { label: "Termos de Uso", href: "#" },
            { label: "LGPD", href: "#" },
            { label: "Compliance", href: "#" }
          ]
        }
      },
      contact: {
        title: "Entre em Contato",
        phone: "+55 (21) 98834-1245",
        email: "contato@koai.ai",
        address: "Rio de Janeiro, Brasil"
      },
      cta: {
        title: "Pronto para começar?",
        description: "Teste nossos agentes de IA gratuitamente",
        button: "Teste Clara.AI Agora"
      },
      bottom: {
        copyright: "© 2024 Koai. Todos os direitos reservados.",
        madeWith: "Feito com ❤️ no Brasil"
      }
    },
    en: {
      brand: {
        name: "Koai",
        tagline: "AIs that listen, care and transform"
      },
      links: {
        company: {
          title: "Company",
          items: [
            { label: "About Us", href: "#team" },
            { label: "Our Technology", href: "#technology" },
            { label: "Use Cases", href: "#use-cases" },
            { label: "Manifesto", href: "#team" }
          ]
        },
        solutions: {
          title: "Solutions",
          items: [
            { label: "Clara.AI - Mental Health", href: "#" },
            { label: "Açuana - Mentorship", href: "#" },
            { label: "Martina - Employee Experience", href: "#" },
            { label: "NR1 Diagnosis", href: "#" }
          ]
        },
        resources: {
          title: "Resources",
          items: [
            { label: "Free Demo", href: "#contact" },
            { label: "Documentation", href: "#" },
            { label: "Support", href: "#contact" },
            { label: "WhatsApp", href: "https://wa.me/5521988341245" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Use", href: "#" },
            { label: "GDPR", href: "#" },
            { label: "Compliance", href: "#" }
          ]
        }
      },
      contact: {
        title: "Get in Touch",
        phone: "+55 (21) 98834-1245",
        email: "contact@koai.ai",
        address: "Rio de Janeiro, Brazil"
      },
      cta: {
        title: "Ready to get started?",
        description: "Test our AI agents for free",
        button: "Test Clara.AI Now"
      },
      bottom: {
        copyright: "© 2024 Koai. All rights reserved.",
        madeWith: "Made with ❤️ in Brazil"
      }
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521988341245', '_blank');
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Pre-footer CTA */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {content[language].cta.title}
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {content[language].cta.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/5551995243454', '_blank')}
              className="bg-gradient-to-r from-coral-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>{content[language].cta.button}</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <KoaiLogo size={40} />
                <span className="text-2xl font-bold">{content[language].brand.name}</span>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                {content[language].brand.tagline}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{content[language].contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{content[language].contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{content[language].contact.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(content[language].links).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span>{item.label}</span>
                      {item.href.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              {content[language].bottom.copyright}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <span className="text-gray-400 text-sm">
                {content[language].bottom.madeWith}
              </span>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;