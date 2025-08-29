import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiPlay } from 'react-icons/hi';
import herobg from "../assets/images/hero/hero-bg-5.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${herobg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Wrapper */}
      <div className="container-custom relative z-10 pt-20 mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building an Effective{' '}
              <span className="text-primary-400">Security Operations Center</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              A Security Operations Center (SOC) serves as the nerve center for an organization's cybersecurity efforts,
              providing continuous monitoring, detection, and response to security incidents.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start m-7">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started
              </Link>
              <button className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-gray-900">
                <HiPlay className="inline w-5 h-5 mr-2" />
                How We Operate
              </button>
            </div>
          </motion.div>

          {/* Right Overlay Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-2">Security Operations Center</h3>
              <p>
                A Security Operations Center serves as the nerve center for an organization’s cybersecurity.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-2">Measuring SOC</h3>
              <p>
                A Security Operations Center helps track, measure, and improve cybersecurity effectiveness.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
