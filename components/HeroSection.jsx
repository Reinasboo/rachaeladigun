'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const stats = [
    { label: '4+ Years', value: 'Experience' },
    { label: '20+', value: 'Executives Supported' },
    { label: '100+', value: 'Projects Completed' },
    { label: '99%', value: 'Satisfaction Rate' },
  ];

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={itemVariants}
        >
          <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200">
            4+ Years Experience
          </span>
          <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200">
            Remote Ready
          </span>
          <span className="px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-sm font-medium border border-pink-200">
            Confidentiality Focused
          </span>
          <span className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200">
            Operations Driven
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Executive Support That
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Moves Businesses Forward
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-center text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Strategic Executive Assistant & Virtual Operations Partner helping founders and organizations stay organized, efficient, and ahead.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold text-center hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-lg border-2 border-slate-900 text-slate-900 font-semibold text-center hover:bg-slate-50 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Professional Headshot */}
        <motion.div
          className="flex justify-center mb-16"
          variants={itemVariants}
        >
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-100"></div>
            <Image
              src="/headshot.jpg"
              alt="Rachael Oyinlola Adigun - Executive Assistant"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent group-hover:from-slate-900/10 transition-all duration-300"></div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={itemVariants}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all"
              whileHover={{ y: -4 }}
            >
              <motion.p
                className="text-3xl font-bold text-slate-900 mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                {stat.label}
              </motion.p>
              <p className="text-sm text-slate-600">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
