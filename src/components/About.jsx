import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiShieldCheck, HiClock, HiEye } from 'react-icons/hi';
import herobg from "../assets/images/about/relible-img-section.png";

const features = [
  {
    icon: HiShieldCheck,
    title: "Protecting Digital Assets 24/7",
    description: "Cyber Security Operations Center provides protection.",
    number: "01"
  },
  {
    icon: HiClock,
    title: "Stay Ahead of Cyber Threats",
    description: "Cyber Security Operations Center provides protection.",
    number: "02"
  },
  {
    icon: HiEye,
    title: "Real-Time Threat Monitoring",
    description: "Cyber Security Operations Center provides protection.",
    number: "03"
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="section-padding bg-gray-50"
      style={{
        backgroundImage: `url('${herobg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      {/* Overlay for darken effect if needed */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(16,26,46,0.29)', // Adjust for readability
        zIndex: 1
      }}></div>

      {/* Main container need to be above overlay */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ lineHeight: 1.25, maxWidth: 650 }}>
            Building an Effective Security Operations Center
          </h2>
          <p className="text-lg text-white max-w-2xl">
            A Security Operations Center (SOC) serves as the nerve center for an organization’s cybersecurity efforts, providing continuous monitoring, detection, and response to security incidents.<br />
            Equipped with advanced technologies.
          </p>
        </motion.div>

        {/* Overlay boxes/cards for feature listings */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: 480,
          position: 'absolute',
          right: 0,
          top: '25%'
        }}>
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-5 text-white">
            <h3 className="text-xl font-bold mb-1">Security Operations Center</h3>
            <p>A Security Operations Center serves as the nerve center for an organization’s cybersecurity.</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-5 text-white">
            <h3 className="text-xl font-bold mb-1">Measuring SOC</h3>
            <p>A Security Operations Center serves as the nerve center for an organization’s cybersecurity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
