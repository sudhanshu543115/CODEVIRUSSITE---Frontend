import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiShieldCheck, 
  HiClock, 
  HiDocumentText, 
  HiChartBar, 
  HiUsers, 
  HiAcademicCap 
} from 'react-icons/hi';
import herobg from "../assets/images/OIP.webp";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
            icon: "shield-check"
          },
          {
            id: 2,
            title: "Incident Response And Management",
            description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
            icon: "clock"
          },
          {
            id: 3,
            title: "Incident Response Plans And Procedures",
            description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
            icon: "document-text"
          },
          {
            id: 4,
            title: "Integrating Threat And Intelligence",
            description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
            icon: "chart-bar"
          },
          {
            id: 5,
            title: "The Role Of Security Analysts In A CSOC",
            description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
            icon: "users"
          },
          {
            id: 6,
            title: "Challenges In Staffing And Retaining Talent",
            description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
            icon: "academic-cap"
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

  return (
    <section  style={{
            backgroundImage: `url('${herobg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} id="services" className="section-padding bg-white">
            
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Cybersecurity Operations Center For Enhanced Protection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive cybersecurity solutions to protect your digital assets
            and ensure business continuity in the face of evolving threats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-blue-950 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
              >
                <div className="p-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-white mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

