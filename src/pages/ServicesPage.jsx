import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  HiShieldCheck, 
  HiClock, 
  HiDocumentText, 
  HiChartBar, 
  HiUsers, 
  HiAcademicCap,
  HiEye,
  HiCog,
  HiServer,
  HiLockClosed,
  HiGlobe,
  HiDatabase
} from 'react-icons/hi';
import servicesBgImage from '../assets/images/project/f-p-image-2.jpg';
import servicesSection2Bg from '../assets/images/about/about-a.jpg';
import servicesSection3Bg from '../assets/images/blog/blog-2.jpg';
import servicesCTABg from '../assets/images/hero/choose-image-1.jpg';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from API
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => {
        console.error('Error fetching services:', err);
        // Fallback data
        setServices([
          {
            id: 1,
            title: "Cybersecurity Operations Centers",
            description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing, and responding to cybersecurity incidents using technology solutions and defined procedures.",
            icon: "shield-check",
            features: ["24/7 Monitoring", "Real-time Threat Detection", "Incident Response", "Security Analytics"]
          },
          {
            id: 2,
            title: "Incident Response And Management",
            description: "Comprehensive incident response services to quickly identify, contain, and remediate security threats before they can cause significant damage to your organization.",
            icon: "clock",
            features: ["Rapid Response", "Forensic Analysis", "Threat Containment", "Recovery Planning"]
          },
          {
            id: 3,
            title: "Incident Response Plans And Procedures",
            description: "Develop and implement comprehensive incident response plans tailored to your organization's specific needs and regulatory requirements.",
            icon: "document-text",
            features: ["Custom Plans", "Regulatory Compliance", "Team Training", "Regular Updates"]
          },
          {
            id: 4,
            title: "Integrating Threat And Intelligence",
            description: "Advanced threat intelligence integration to provide proactive security measures and stay ahead of emerging cyber threats.",
            icon: "chart-bar",
            features: ["Threat Intelligence", "Predictive Analytics", "Risk Assessment", "Strategic Planning"]
          },
          {
            id: 5,
            title: "The Role Of Security Analysts In A CSOC",
            description: "Expert security analysts provide continuous monitoring, analysis, and response to security events in your Security Operations Center.",
            icon: "users",
            features: ["Expert Analysts", "Continuous Monitoring", "Advanced Analysis", "Proactive Response"]
          },
          {
            id: 6,
            title: "Challenges In Staffing And Retaining Talent",
            description: "Address the cybersecurity skills gap with our comprehensive staffing solutions and talent retention strategies.",
            icon: "academic-cap",
            features: ["Talent Acquisition", "Skills Development", "Retention Strategies", "Team Building"]
          }
        ]);
      });
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      'shield-check': HiShieldCheck,
      'clock': HiClock,
      'document-text': HiDocumentText,
      'chart-bar': HiChartBar,
      'users': HiUsers,
      'academic-cap': HiAcademicCap
    };
    return icons[iconName] || HiShieldCheck;
  };

  const additionalServices = [
    {
      icon: HiEye,
      title: "Security Monitoring & Detection",
      description: "Advanced monitoring systems to detect and respond to security threats in real-time."
    },
    {
      icon: HiCog,
      title: "Security Automation",
      description: "Automated security processes to improve efficiency and reduce response times."
    },
    {
      icon: HiServer,
      title: "Infrastructure Security",
      description: "Comprehensive protection for your IT infrastructure and network assets."
    },
    {
      icon: HiLockClosed,
      title: "Access Control & Identity Management",
      description: "Secure access control systems and identity management solutions."
    },
    {
      icon: HiGlobe,
      title: "Cloud Security",
      description: "Specialized security solutions for cloud-based infrastructure and applications."
    },
    {
      icon: HiDatabase,
      title: "Data Protection & Privacy",
      description: "Comprehensive data protection and privacy compliance solutions."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: ` linear-gradient(rgba(200, 2, 200, 0.1), rgba(2, 20, 21, 0.9)),  url(${servicesBgImage})`
               }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <HiShieldCheck className="w-4 h-4 mr-2" />
              OUR SERVICES
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Cybersecurity Operations Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive cybersecurity solutions to protect your digital assets 
              and ensure business continuity in the face of evolving threats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `linear-gradient(rgba(200, 2, 200, 0.1), rgba(2, 20, 21, 0.9)),  url(${servicesSection2Bg})`
               }}>
               
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Security Services
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our comprehensive suite of cybersecurity services is designed to protect your organization 
              from the most sophisticated threats while ensuring compliance and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer"
                >
                  <div className="p-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mb-6"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {service.features && (
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center text-sm text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-primary-600 rounded-full mr-3"
                              whileHover={{ scale: 1.5 }}
                            ></motion.div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    )}
                    
                    <motion.div 
                      className="flex items-center text-primary-600 font-semibold"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Learn More
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `linear-gradient(rgba(249, 160, 241, 0.5), rgba(200, 220, 20, 0.5)), url(${servicesSection3Bg})`
               }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Security Solutions
            </h2>
            <p className="text-xl max-w-3xl mx-auto          bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg text-white">
              Beyond our core services, we offer specialized security solutions to address 
              specific challenges and requirements of modern organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary-600 to-purple-600 bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.8), rgba(147, 51, 234, 0.8)), url(${servicesCTABg})`
               }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Get in touch with our cybersecurity experts to discuss your security needs 
              and discover how we can protect your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
