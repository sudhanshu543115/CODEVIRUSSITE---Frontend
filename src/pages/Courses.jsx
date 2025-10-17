import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import coursesBgImage from "../assets/images/download.webp";
import { useAuth } from "../context/AuthContext";

// Outline Icons
import {
  CodeBracketIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

// Solid Icons
import {
  ShieldCheckIcon,
  CloudIcon,
  LockClosedIcon,
  BugAntIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  BoltIcon,
  CommandLineIcon,
  AdjustmentsHorizontalIcon,
  BuildingOffice2Icon,
  ShieldExclamationIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";

const rotateAnim = {
  whileHover: { rotate: 360, transition: { duration: 0.6 } },
};

const Courses = () => {
  const { isAuthenticated, enrollInCourse } = useAuth();

  const courseCategories = [
    {
      id: "web-development",
      title: "Web Development",
      icon: (
        <motion.div {...rotateAnim}>
          <CodeBracketIcon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Master modern web technologies including React, Node.js, and full-stack development.",
      courses: [
        "React Fundamentals",
        "Node.js Backend",
        "Full Stack MERN",
        "JavaScript ES6+",
      ],
      color: "from-blue-500 to-cyan-500",
      totalCourses: 12,
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      icon: (
        <motion.div {...rotateAnim}>
          <DevicePhoneMobileIcon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Build native and cross-platform mobile applications for iOS and Android.",
      courses: ["React Native", "Flutter", "iOS Development", "Android Development"],
      color: "from-green-500 to-emerald-500",
      totalCourses: 10,
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      icon: (
        <motion.div {...rotateAnim}>
          <CloudIcon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Master cloud platforms like AWS, Azure, and Google Cloud for scalable applications.",
      courses: ["AWS Fundamentals", "Docker & Kubernetes", "Serverless Architecture", "DevOps"],
      color: "from-orange-500 to-red-500",
      totalCourses: 15,
    },
    {
      id: "database-management",
      title: "Database Management",
      icon: (
        <motion.div {...rotateAnim}>
          <CircleStackIcon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Master SQL, NoSQL databases, and database optimization techniques.",
      courses: ["SQL Fundamentals", "MongoDB", "Database Design", "Performance Tuning"],
      color: "from-teal-500 to-cyan-500",
      totalCourses: 6,
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: (
        <motion.div {...rotateAnim}>
          <ShieldCheckIcon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Learn ethical hacking, network security, and cybersecurity best practices.",
      courses: ["Ethical Hacking", "Network Security", "Penetration Testing", "Security Auditing"],
      color: "from-red-500 to-rose-500",
      totalCourses: 7,
    },
    {
      id: "advanced-hacking-techniques",
      title: "Advanced Hacking Techniques",
      icon: (
        <motion.div {...rotateAnim}>
          <BugAntIcon className="w-12 h-12" />
        </motion.div>
      ),
      description: "Explore ethical hacking and penetration testing in depth.",
      courses: ["Ethical Hacking", "Penetration Testing", "Exploit Development"],
      color: "from-yellow-500 to-orange-500",
      totalCourses: 8,
    },
    {
      id: "incident-response-training",
      title: "Incident Response Training",
      icon: (
        <motion.div {...rotateAnim}>
          <ClipboardDocumentCheckIcon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Develop skills to identify, contain, and recover from attacks.",
      courses: ["Threat Analysis", "Containment", "System Recovery"],
      color: "from-indigo-500 to-purple-500",
      totalCourses: 4,
    },
    {
      id: "network-security-fundamentals",
      title: "Network Security Fundamentals",
      icon: (
        <motion.div {...rotateAnim}>
          <BoltIcon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Strengthen your ability to secure complex network systems.",
      courses: ["Firewalls", "IDS/IPS", "Network Protocols"],
      color: "from-cyan-500 to-teal-500",
      totalCourses: 5,
    },
    {
      id: "digital-forensics",
      title: "Digital Forensics",
      icon: (
        <motion.div {...rotateAnim}>
          <MagnifyingGlassIcon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Master techniques to investigate and trace cyber incidents.",
      courses: ["Disk Forensics", "Memory Analysis", "Incident Investigation"],
      color: "from-violet-500 to-indigo-500",
      totalCourses: 5,
    },
    {
      id: "soc-training",
      title: "SOC Training",
      icon: (
        <motion.div {...rotateAnim}>
          <BuildingOffice2Icon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Train to monitor, analyze, and defend enterprise environments.",
      courses: ["SIEM Tools", "SOC Analysis", "Incident Escalation"],
      color: "from-blue-500 to-cyan-500",
      totalCourses: 5,
    },
    {
      id: "cyber-armor",
      title: "Cyber Armor",
      icon: (
        <motion.div {...rotateAnim}>
          <ShieldExclamationIcon className="w-12 h-12" />
        </motion.div>
      ),
      description:
        "Become the ultimate defender with complete end-to-end security knowledge.",
      courses: ["Defensive Security", "Threat Intelligence", "Blue Teaming"],
      color: "from-slate-500 to-gray-700",
      totalCourses: 6,
    },
  ];

  const handleCourseClick = async (category) => {
    if (!isAuthenticated) {
      alert("Please login to access course details and content.");
      return;
    }

    const result = await enrollInCourse(category.id, category.title);
    if (result.success) {
      alert(`Successfully enrolled in ${category.title}!`);
    } else {
      alert(result.message);
    }
  };

  return (
    <section
      className="overflow-hidden pt-20 relative"
      style={{ backgroundImage: `url(${coursesBgImage})` }}
    >
      <div className="min-h-screen relative z-10">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Courses
              </span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Choose from our comprehensive collection of courses across multiple
              domains. Master the skills that matter in today's tech industry.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courseCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCourseClick(category)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative p-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {category.description}
                  </p>
                  <span className="text-sm text-gray-500">
                    {category.totalCourses} courses
                  </span>

                  <div className="mt-4">
                    <button
                      className={`w-full py-2 px-4 bg-gradient-to-r ${category.color} text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}
                    >
                      {isAuthenticated ? "Explore Courses" : "Login to Access"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-gray-600 mb-6">
                Join thousands of students who have transformed their careers
                with our courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  {isAuthenticated ? "Browse All Courses" : "Sign Up Now"}
                </button>
                <Link
                  to="/contact"
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
