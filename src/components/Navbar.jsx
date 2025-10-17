import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';
import Login from './Login';
import Signup from './Signup';
import logo from "../assets/img/generated-image.png";
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import ContactMailIcon from '@mui/icons-material/ContactMail';
//import BlogIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><HomeIcon className="inline-block mr-1" /></motion.div>, href: '/' },
     { name: 'Courses', icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><SchoolIcon className="inline-block mr-1" /></motion.div>, href: '/courses' },
    { name: 'About', icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><InfoIcon className="inline-block mr-1" /></motion.div>, href: '/about' },
    { name: 'Services', icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><ConstructionIcon className="inline-block mr-1" /></motion.div>, href: '/services' },
    { name: 'Projects', icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><DesktopWindowsIcon className="inline-block mr-1" /></motion.div>, href: '/projects' },
   
    //{ name: 'Blog', icon: <BlogIcon className="inline-block mr-1" />, href: '/blog' },
    { name: 'Contact', icon: <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}><ContactMailIcon className="inline-block mr-1" /></motion.div>, href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-lg
      `}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-17 w-40" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-primary-600 font-medium transition-colors duration-300 flex items-center"
              >
                {item.icon && item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
           {/*
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-white text-sm">Hi, {user?.firstName}</span>
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-white hover:text-primary-600 font-medium transition-colors duration-300"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowSignup(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-300 flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              {/* Mobile Auth Buttons */}
              {isAuthenticated ? (
                <div className="px-3 py-2 border-t border-gray-200">
                  <div className="text-gray-700 text-sm mb-2">Hi, {user?.firstName}</div>
                  <button
                    onClick={logout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="px-3 py-2 border-t border-gray-200 space-y-2">
                  <button
                    onClick={() => { setShowLogin(true); setIsOpen(false); }}
                    className="w-full text-gray-700 hover:text-primary-600 py-2 text-center transition-colors duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { setShowSignup(true); setIsOpen(false); }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      */}

      {/* Auth Modals */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}
      
      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
