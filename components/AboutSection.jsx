'use client';

import { motion } from 'framer-motion';
import { skills } from '@/constants/data';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Rachael Oyinlola Adigun is a detail-oriented Executive Assistant and Virtual Assistant with over 4 years of experience supporting executives, founders, and operations teams.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              She specializes in calendar management, executive coordination, client communication, documentation systems, and workflow optimization — transforming chaos into strategic clarity.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Her philosophy: great support is invisible, seamless, and anticipatory. She doesn't just execute tasks — she solves problems before they become problems.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Core Competencies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <p className="font-semibold text-slate-900">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Operations Expertise',
              description: 'Calendar management, workflow optimization, and system design',
            },
            {
              title: 'Strategic Communication',
              description: 'Client relations, stakeholder management, documentation excellence',
            },
            {
              title: 'Digital Mastery',
              description: 'Google Workspace, Notion, ClickUp, Asana, and 10+ productivity tools',
            },
          ].map((strength, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-all"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                {strength.title}
              </h4>
              <p className="text-slate-600">{strength.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
