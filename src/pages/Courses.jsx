import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import coursesBgImage from '../assets/images/download.webp';
import { useAuth } from '../context/AuthContext';
import { 
   CodeBracketIcon, 
  CircleStackIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ChartBarIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const Courses = () => {
  const { isAuthenticated, enrollInCourse } = useAuth();

  const courseCategories = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}>< CodeBracketIcon className="w-12 h-12" /></motion.div>,
      description: 'Master modern web technologies including React, Node.js, and full-stack development.',
      courses: ['React Fundamentals', 'Node.js Backend', 'Full Stack MERN', 'JavaScript ES6+'],
      color: 'from-blue-500 to-cyan-500',
      totalCourses: 12
    },
    {
      id: 'data-science',
      title: 'Data Science & AI',
      icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><ChartBarIcon className="w-12 h-12" /></motion.div>,
      description: 'Learn data analysis, machine learning, and artificial intelligence concepts.',
      courses: ['Python for Data Science', 'Machine Learning', 'Deep Learning', 'Data Visualization'],
      color: 'from-purple-500 to-pink-500',
      totalCourses: 8
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><DevicePhoneMobileIcon className="w-12 h-12" /></motion.div>,
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      courses: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      color: 'from-green-500 to-emerald-500',
      totalCourses: 10
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><CloudIcon className="w-12 h-12" /></motion.div>,
      description: 'Master cloud platforms like AWS, Azure, and Google Cloud for scalable applications.',
      courses: ['AWS Fundamentals', 'Docker & Kubernetes', 'Serverless Architecture', 'DevOps'],
      color: 'from-orange-500 to-red-500',
      totalCourses: 15
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><ShieldCheckIcon className="w-12 h-12" /></motion.div>,
      description: 'Learn ethical hacking, network security, and cybersecurity best practices.',
      courses: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'Security Auditing'],
      color: 'from-red-500 to-rose-500',
      totalCourses: 7
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><PaintBrushIcon className="w-12 h-12" /></motion.div>,
      description: 'Design beautiful and user-friendly interfaces with modern design principles.',
      courses: ['Figma Mastery', 'User Research', 'Prototyping', 'Design Systems'],
      color: 'from-indigo-500 to-purple-500',
      totalCourses: 9
    },
    {
      id: 'database-management',
      title: 'Database Management',
      icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><CircleStackIcon className="w-12 h-12" /></motion.div>,
      description: 'Master SQL, NoSQL databases, and database optimization techniques.',
      courses: ['SQL Fundamentals', 'MongoDB', 'Database Design', 'Performance Tuning'],
      color: 'from-teal-500 to-cyan-500',
      totalCourses: 6
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3',
      icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><CpuChipIcon className="w-12 h-12" /></motion.div>,
      description: 'Explore blockchain technology, smart contracts, and decentralized applications.',
      courses: ['Blockchain Basics', 'Smart Contracts', 'DApp Development', 'Cryptocurrency'],
      color: 'from-yellow-500 to-orange-500',
      totalCourses: 5
    }
  ];

  const handleCourseClick = async (category) => {
    if (!isAuthenticated) {
      alert('Please login to access course details and content.');
      return;
    }
    
    // Enroll user in the course
    const result = await enrollInCourse(category.id, category.title);
    if (result.success) {
      alert(`Successfully enrolled in ${category.title}!`);
    } else {
      alert(result.message);
    }
  };

  return (
    <section className='overflow-hidden pt-20 relative'
      style={{  
        backgroundImage: `url(${coursesBgImage})`
       
      }}
    > 
      {/* Blurred overlay */}
      
      
    <div className="min-h-screen relative z-10">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Courses</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Choose from our comprehensive collection of courses across multiple domains. 
            Master the skills that matter in today's tech industry.
          </p>
          <div className="mt-8 flex justify-center items-center space-x-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-semibold">50+ Courses</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-semibold">Expert Instructors</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-semibold">Lifetime Access</span>
            </div>
          </div>
        </div>

        {/* Login Status Banner */}
        {/* {!isAuthenticated && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Note:</strong> You can browse course categories, but you'll need to login to access detailed course content and materials.
                </p>
              </div>
            </div>
          </div>
        )}
        */}

        {/* Course Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courseCategories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              onClick={() => handleCourseClick(category)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-6">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {category.description}
                </p>

                {/* Course Count */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    {category.totalCourses} courses
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    ))}
                  </div>
                </div>

                {/* Sample Courses */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Featured Courses:
                  </p>
                  {category.courses.slice(0, 2).map((course, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                      {course}
                    </div>
                  ))}
                  {category.courses.length > 2 && (
                    <div className="text-sm text-gray-500 italic">
                      +{category.courses.length - 2} more courses
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <button className={`w-full py-2 px-4 bg-gradient-to-r ${category.color} text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}>
                    {isAuthenticated ? 'Explore Courses' : 'Login to Access'}
                  </button>
                </div>

                {/* Lock Icon for Non-logged Users */}
                {!isAuthenticated && (
                  <div className="absolute top-4 right-4 bg-gray-100 rounded-full p-2">
                    <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}>
                      <ShieldCheckIcon className="w-4 h-4 text-gray-500" />
                    </motion.div>
                  </div>
                )}
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
              Join thousands of students who have transformed their careers with our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                {isAuthenticated ? 'Browse All Courses' : 'Sign Up Now'}
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
