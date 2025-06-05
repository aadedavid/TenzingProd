import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Mail, MapPin, Phone, ExternalLink, Mountain } from 'lucide-react';
import TenzingLogo from './TenzingLogo';

const Footer = ({ language }) => {
  const content = {
    pt: {
      brand: {
        name: "Tenzing",
        tagline: "Sherpas Digitais que libertam sua jornada"
      },
      links: {
        sherpas: {
          title: "Nossos Sherpas",
          items: [
            { label: "Clara - Bem-Estar", href: "https://wa.me/5551995243454" },
            { label: "Açuana - Desenvolvimento", href: "#sherpas" },
            { label: "Martina - Experiência", href: "#sherpas" },
            { label: "Atlas - Insights", href: "#sherpas" },
            { label: "Guardiã - Compliance", href: "#sherpas" }
          ]
        },
        expeditions: {
          title: "Expedições",
          items: [
            { label: "Demonstração Personalizada", href: "https://calendar.app.google/pug4TSYUPhiMCvzo6" },
            { label: "Casos de Libertação", href: "#cases" },
            { label: "Nossa Metodologia", href: "#methodology" },
            { label: "Basecamp", href: "#team" }
          ]
        },
        company: {
          title: "Empresa",
          items: [
            { label: "Sobre Nosso Basecamp", href: "#team" },
            { label: "Manifesto Sherpa", href: "#team" },
            { label: "Jornada Libertada", href: "#journey" },
            { label: "Blog Sherpa", href: "#" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { label: "Política de Privacidade", href: "#" },
            { label: "Termos de Expedição", href: "#" },
            { label: "LGPD", href: "#" },
            { label: "Compliance", href: "#" }
          ]
        }
      },
      contact: {
        title: "Basecamp Central",
        phone: "+55 (21) 98834-1245",
        email: "contato@tenzing.com.br",
        address: "Remoto - onde você estiver"
      },
      cta: {
        title: "Pronto para Liberar Sua Organização?",
        description: "Nossos Sherpas Digitais estão prontos para carregar sua mochila operacional",
        button: "Iniciar Expedição Agora"
      },
      bottom: {
        copyright: "© 2024 Tenzing - Sherpas Digitais. Todos os direitos reservados.",
        madeWith: "Feito com ❤️ pelos Sherpas no Brasil"
      }
    },
    en: {
      brand: {
        name: "Tenzing",
        tagline: "Digital Sherpas that liberate your journey"
      },
      links: {
        sherpas: {
          title: "Our Sherpas",
          items: [
            { label: "Clara - Wellbeing", href: "https://wa.me/5551995243454" },
            { label: "Açuana - Development", href: "#sherpas" },
            { label: "Martina - Experience", href: "#sherpas" },
            { label: "Atlas - Insights", href: "#sherpas" },
            { label: "Guardian - Compliance", href: "#sherpas" }
          ]
        },
        expeditions: {
          title: "Expeditions",
          items: [
            { label: "Personalized Demo", href: "https://calendar.app.google/pug4TSYUPhiMCvzo6" },
            { label: "Liberation Cases", href: "#cases" },
            { label: "Our Methodology", href: "#methodology" },
            { label: "Basecamp", href: "#team" }
          ]
        },
        company: {
          title: "Company",
          items: [
            { label: "About Our Basecamp", href: "#team" },
            { label: "Sherpa Manifesto", href: "#team" },
            { label: "Liberated Journey", href: "#journey" },
            { label: "Sherpa Blog", href: "#" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Expedition Terms", href: "#" },
            { label: "GDPR", href: "#" },
            { label: "Compliance", href: "#" }
          ]
        }
      },
      contact: {
        title: "Central Basecamp",
        phone: "+55 (21) 98834-1245",
        email: "contato@tenzing.com.br",
        address: "Remote - wherever you are"
      },
      cta: {
        title: "Ready to Liberate Your Organization?",
        description: "Our Digital Sherpas are ready to carry your operational backpack",
        button: "Start Expedition Now"
      },
      bottom: {
        copyright: "© 2024 Tenzing - Digital Sherpas. All rights reserved.",
        madeWith: "Made with ❤️ by Sherpas in Brazil"
      }
    }
  };

  const handleStartExpedition = () => {
    window.open('https://calendar.app.google/pug4TSYUPhiMCvzo6', '_blank');
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
    <footer className="bg-slate-900 text-white">
      {/* Pre-footer CTA */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Mountain className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {content[language].cta.title}
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {content[language].cta.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartExpedition}
              className="btn-sherpa-primary text-lg px-10 py-4 inline-flex items-center space-x-2"
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
                <TenzingLogo size={40} />
                <span className="text-2xl font-bold">{content[language].brand.name}</span>
              </div>
              <p className="text-slate-300 text-lg mb-6">
                {content[language].brand.tagline}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-300">{content[language].contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-300">{content[language].contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-300">{content[language].contact.address}</span>
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
              <h4 className="text-lg font-semibold mb-4 text-orange-400">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group text-left"
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
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm"
            >
              {content[language].bottom.copyright}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <span className="text-slate-400 text-sm">
                {content[language].bottom.madeWith}
              </span>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.open('https://wa.me/5521988341245', '_blank')}
                  className="text-slate-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
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