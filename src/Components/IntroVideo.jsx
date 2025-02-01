import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';

const IntroVideo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const dumbbellVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: [0, 1.2, 1],
      rotate: [180, 0],
      transition: {
        duration: 1.5,
        times: [0, 0.6, 1],
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.5
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen bg-black flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      <div className="flex flex-col items-center justify-center">
        <motion.div
          variants={dumbbellVariants}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <div className="relative">
            <Dumbbell size={120} className="text-transparent" style={{
              background: 'linear-gradient(135deg, #9333ea, #06b6d4)',
              WebkitBackgroundClip: 'text'
            }} />
            <motion.div
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: 2,
                repeatType: "reverse"
              }}
              className="absolute inset-0 blur-lg"
              style={{
                background: 'linear-gradient(135deg, #9333ea50, #06b6d450)',
                borderRadius: '50%'
              }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            FitTrack Pro
          </h1>
          <p className="text-gray-400 text-xl">
            Your Fitness Journey Begins
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroVideo;