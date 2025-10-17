import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiShieldCheck, HiClock, HiCog } from 'react-icons/hi';
import herobg from "../assets/images/OIP.jpeg";
const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: HiShieldCheck,
      title: "Expert-Led Training: ",
      description: "Learn directly from experienced cybersecurity and web professionals who bring real-world knowledge, practical insight, and mentorship to every session.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: HiClock,
      title: "Advanced Security Expertise",
      description: "Stay ahead of cyber threats with up-to-date training in ethical hacking, penetration testing, and advanced defense strategies.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: HiCog,
      title: "Customized Solutions",
      description: "We design and secure your digital ecosystem through personalized web and security solutions aligned with your business vision and objectives.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="section-padding bg-white"      style={{
            backgroundImage: `url('${herobg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 ">
            Empowering Innovation with Security
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            At Codevirus, we blend the art of web development with the science of cybersecurity to help you thrive in the modern digital landscape. 
            Whether you’re aiming to create a strong online presence or secure your digital assets, 
            our expert-driven approach ensures precision, reliability, and results tailored to your unique goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg text-white">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-white  leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-primary-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Monitoring</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Protected Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Security Experts</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

