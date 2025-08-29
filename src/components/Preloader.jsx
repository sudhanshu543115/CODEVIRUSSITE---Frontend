import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import generatedImage from '../assets/img/generated-image.png';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Complete loading in exactly 3 seconds
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => onComplete && onComplete(), 500);
          }, 200);
          return 100;
        }
        return prev + (100 / 25); // 25 intervals over 3 seconds (3000ms / 120ms)
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const imageVariants = {
    initial: { 
      scale: 0.8, 
      opacity: 0,
      rotate: -10,
      y: 50
    },
    animate: { 
      scale: [0.8, 1.1, 1],
      opacity: 1,
      rotate: [0, 5, 0],
      y: [50, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const progressBarVariants = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: progress / 100,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: 0.5
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [-20, -100],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.5)",
        "0 0 40px rgba(59, 130, 246, 0.8)",
        "0 0 20px rgba(59, 130, 246, 0.5)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
          variants={containerVariants}
          initial="initial"
          exit="exit"
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={particleVariants}
                animate="animate"
                transition={{
                  delay: Math.random() * 2,
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity
                }}
              />
            ))}
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            
            {/* Animated Logo/Image */}
            <motion.div
              className="relative"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="relative rounded-full p-4"
                variants={glowVariants}
                animate="animate"
              >
                <motion.img
                  src={generatedImage}
                  alt="Loading"
                  className="w-32 h-32 object-cover rounded-full border-4 border-white/20"
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                />
                
                {/* Rotating Ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="text-center space-y-2"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h2 
                className="text-3xl font-bold text-white"
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                Loading
              </motion.h2>
              <motion.p 
                className="text-blue-200 text-lg"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  transition: { duration: 1.5, repeat: Infinity }
                }}
              >
                Preparing your experience...
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-80 space-y-3">
              <div className="flex justify-between text-sm text-blue-200">
                <span>Progress</span>
                <motion.span
                  key={Math.floor(progress)}
                  initial={{ scale: 1.2, color: "#60A5FA" }}
                  animate={{ scale: 1, color: "#BFDBFE" }}
                  transition={{ duration: 0.3 }}
                >
                  {Math.floor(progress)}%
                </motion.span>
              </div>
              
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full origin-left"
                  variants={progressBarVariants}
                  initial="initial"
                  animate="animate"
                />
                
                {/* Progress Bar Glow */}
                <motion.div
                  className="absolute left-0 top-0 h-full bg-white/20 rounded-full origin-left"
                  style={{ width: `${progress}%` }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    transition: { duration: 1, repeat: Infinity }
                  }}
                />
              </div>
            </div>

            {/* Loading Dots */}
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Corner Decorations */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 border-l-4 border-t-4 border-blue-400/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <motion.div
            className="absolute bottom-10 right-10 w-20 h-20 border-r-4 border-b-4 border-purple-400/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
