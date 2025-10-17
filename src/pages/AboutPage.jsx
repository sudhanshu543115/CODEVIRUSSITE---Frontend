import React from 'react';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiClock, HiEye, HiUsers, HiChartBar, HiCog } from 'react-icons/hi';
//import herobg from "../assets/images/about/a-image-1.jpg";
import herobg1 from "../assets/images/hero/section-2.jpg";
import BlogPage from "../pages/BlogPage";
const AboutPage = () => {
  const features = [
    {
      icon: HiShieldCheck,
      title: "Protecting Digital Assets 24/7",
      description: "Our advanced cybersecurity operations center provides round-the-clock protection for your digital infrastructure.",
      number: "01"
    },
    {
      icon: HiClock,
      title: "Stay Ahead of Cyber Threats",
      description: "Proactive threat detection and response systems to keep your organization secure from emerging threats.",
      number: "02"
    },
    {
      icon: HiEye,
      title: "Real-Time Threat Monitoring",
      description: "Continuous monitoring and analysis of security events with instant alerting and response capabilities.",
      number: "03"
    },
    {
      icon: HiUsers,
      title: "Expert Security Team",
      description: "Certified cybersecurity professionals with years of experience in threat detection and incident response.",
      number: "04"
    },
    {
      icon: HiChartBar,
      title: "Advanced Analytics",
      description: "AI-powered security analytics to identify patterns and predict potential security threats.",
      number: "05"
    },
    {
      icon: HiCog,
      title: "Compliance & Governance",
      description: "Ensure your organization meets industry standards and regulatory compliance requirements.",
      number: "06"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
              ABOUT CODEVIRUSSECURITY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cyber Security Solutions & Compliance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A Cyber Security Operations Center serves as the frontline defense against cyber attacks,
              ensuring real-time monitoring, threat detection and response for organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Main Content */}
      <section className="py-16 bg-gray-50" style={{
        backgroundImage: `url('${herobg1}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}  >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                    <HiShieldCheck className="w-32 h-32 text-white opacity-80" />
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                  <div className="text-3xl font-bold text-primary-600">25+</div>
                  <div className="text-sm text-gray-600">Security Centers</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Protected Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8    bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6               ">
                 Secure Today, Lead Tomorrow
                </h2>
                <p className="text-lg text-white mb-6 leading-relaxed">
                 At Codevirus, we are dedicated to building innovative web solutions and delivering top-notch cybersecurity training that empowers individuals and organizations to stay secure in the digital era. Our mission is to prepare the next generation of cybersecurity professionals and help businesses strengthen their defenses against evolving threats.
                </p>
                <p className="text-lg text-white leading-relaxed">
                 We believe in a practical, skill-based approach to learning and digital protection:   <br/>
                  Hands-On Labs: Gain real-world experience through interactive labs designed to simulate actual cybersecurity challenges.<br/>
                  Certified Trainers: Learn directly from seasoned industry experts who bring years of professional insight to every session.<br/>
                  Job-Ready Skills: Develop the technical and analytical skills required to defend businesses, prevent breaches, and succeed in today’s high-demand cybersecurity landscape.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-primary-600 mr-3">
                        {feature.number}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>






      <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${herobg1}')`
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
              OUR VISION
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              VISION OF CODEVIRUS SECURITY
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-5">
              To spread awareness about CyberSecurity & decrease Cyber Threats over World
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <HiShieldCheck className="w-4 h-4 mr-2 " />
              OUR MISSION
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-5">
              To empower our Students with High-Class Education Facilities. So That They Can Grow And
              Make Enhance Carrier.
            </p>
          </motion.div>
        </div>
      </section>






      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-primary-100">
              Trusted by organizations worldwide for their cybersecurity needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-primary-100">Security Centers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-100">Protected Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-primary-100">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-100">Monitoring</div>
            </motion.div>
          </div>
        </div>
      </section>
      <BlogPage />
    </div>
  );
};

export default AboutPage;
