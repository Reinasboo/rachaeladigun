'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headshot Section */}
        <motion.div
          className="flex flex-col items-center mb-12"
          variants={itemVariants}
        >
          <div className="relative w-64 h-64 mb-8 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://imgur.com/zytQnjf.jpg"
              alt="Rachael Oyinlola Adigun - Professional Headshot"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = 'https://via.placeholder.com/256x256?text=Professional+Headshot';
              }}
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Rachael Oyinlola Adigun
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            Creative Professional & Developer
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-slate-700"
          variants={itemVariants}
        >
          <p className="text-lg text-slate-200 leading-relaxed">
            Welcome to my professional portfolio. I'm passionate about creating beautiful,
            functional digital experiences and bringing creative visions to life.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div className="flex gap-6 justify-center" variants={itemVariants}>
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
            Get in Touch
          </button>
          <button className="px-8 py-3 border border-slate-400 hover:border-slate-200 rounded-lg font-semibold transition-colors">
            View Work
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
