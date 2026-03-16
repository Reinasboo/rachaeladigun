'use client';

import { motion } from 'framer-motion';
import { projects } from '@/constants/data';
import { useState } from 'react';

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState(null);

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
    <section id="projects" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Strategic executive support that delivered measurable results across diverse industries and challenges.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          className="grid gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div
                className="p-8 cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`text-4xl p-4 rounded-lg bg-gradient-to-br ${project.color}`}
                    >
                      {project.image}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600">Project Case Study</p>
                    </div>
                  </div>
                  <motion.button
                    className="p-2 rounded-lg hover:bg-slate-100 transition-all"
                    animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Problem Statement */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                    The Challenge
                  </h4>
                  <p className="text-slate-700">{project.problem}</p>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedId === project.id ? 1 : 0,
                    height: expandedId === project.id ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pt-6 border-t border-slate-200">
                    {/* Actions */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                        Actions Taken
                      </h4>
                      <ul className="space-y-2">
                        {project.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold">✓</span>
                            <span className="text-slate-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                        Tools & Platforms
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm border border-blue-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                        Key Results
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-green-600 font-bold text-lg">●</span>
                            <span className="text-slate-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
