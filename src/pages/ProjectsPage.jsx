import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiEye, HiArrowRight, HiShieldCheck } from 'react-icons/hi';
import projectsBgImage from '../assets/images/project/project-image.jpg';
import projectsFilterBg from '../assets/images/service/service-image-a.jpg';
import projectsStatsBg from '../assets/images/hero/ba-image-b.jpg';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Fetch projects from API
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        // Fallback data
        const fallbackProjects = [
          {
            id: 1,
            title: "Cyber Security Enhancement For Smart Devices",
            category: "IoT Security",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Advanced security solutions for IoT and smart device protection with real-time threat detection and automated response systems.",
            technologies: ["AI/ML", "IoT", "Blockchain", "Cloud Security"],
            duration: "6 months",
            client: "TechCorp Industries"
          },
          {
            id: 2,
            title: "Advanced Cyber Defense & Operations Center",
            category: "SOC Implementation",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Comprehensive cybersecurity operations center implementation with 24/7 monitoring and incident response capabilities.",
            technologies: ["SIEM", "EDR", "Threat Intelligence", "Automation"],
            duration: "12 months",
            client: "Global Bank Ltd"
          },
          {
            id: 3,
            title: "24/7 Security Monitoring & Incident Response",
            category: "Monitoring",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Round-the-clock security monitoring and rapid incident response system for critical infrastructure protection.",
            technologies: ["Real-time Monitoring", "AI Detection", "Response Automation", "Forensics"],
            duration: "8 months",
            client: "Energy Solutions Inc"
          },
          {
            id: 4,
            title: "Cybersecurity Operations & Threat Management",
            category: "Threat Management",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Integrated threat management and cybersecurity operations for enterprise-level security infrastructure.",
            technologies: ["Threat Intelligence", "Risk Assessment", "Compliance", "Analytics"],
            duration: "10 months",
            client: "Healthcare Systems Corp"
          },
          {
            id: 5,
            title: "Cloud Security & Compliance Framework",
            category: "Cloud Security",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Comprehensive cloud security framework ensuring compliance with industry standards and regulatory requirements.",
            technologies: ["AWS Security", "Azure Security", "Compliance", "Zero Trust"],
            duration: "9 months",
            client: "CloudTech Solutions"
          },
          {
            id: 6,
            title: "Data Protection & Privacy Compliance",
            category: "Data Security",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "End-to-end data protection and privacy compliance solution for organizations handling sensitive information.",
            technologies: ["Encryption", "GDPR", "Data Governance", "Privacy Tools"],
            duration: "7 months",
            client: "Financial Services Group"
          }
        ];
        setProjects(fallbackProjects);
        setFilteredProjects(fallbackProjects);
      });
  }, []);

  // Only create categories when projects are loaded
  const categories = projects.length > 0 ? ['all', ...new Set(projects.map(project => project.category))] : ['all'];

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${projectsBgImage})`
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
              OUR PROJECTS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Showcasing Our Cyber Security Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful cybersecurity implementations and
              innovative security solutions for various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat overflow-visible"
        style={{
          backgroundImage: ` url(${projectsFilterBg})`
        }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-dark-700 text-white hover:bg-primary-50 hover:text-primary-600'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group bg-blue-950 border rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover border-b-4 border-primary-600"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <HiEye className="w-6 h-6" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>

                <div className="p-8">
                  <motion.h3
                    className="text-xl font-bold text-white mb-4 group-hover:text-primary-600 transition-colors duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-white mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-white">
                      <span className="font-medium mr-2">Client:</span>
                      {project.client}
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <span className="font-medium mr-2">Duration:</span>
                      {project.duration}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies && project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    className="flex items-center text-primary-600 font-semibold"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    View Project Details
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary-600 to-purple-600 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.8), rgba(147, 51, 234, 0.8)), url(${projectsStatsBg})`
        }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Project Success Metrics
            </h2>
            <p className="text-xl text-primary-100">
              Our track record of successful cybersecurity implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-primary-100">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-100">Support Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-primary-100">Industries Served</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
