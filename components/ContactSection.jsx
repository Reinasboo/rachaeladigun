'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to transform your executive operations? Get in touch to discuss how we can partner.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-4 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Have questions or ready to discuss your executive support needs? I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            {[
              {
                icon: '📧',
                label: 'Email',
                value: 'adigunrachael6@gmail.com',
                href: 'mailto:adigunrachael6@gmail.com',
              },
              {
                icon: '📱',
                label: 'Phone',
                value: '+234 802 580 2987',
                href: 'tel:+2348025802987',
              },
              {
                icon: '🔗',
                label: 'LinkedIn',
                value: 'Connect with me on LinkedIn',
                href: '#',
              },
            ].map((contact, i) => (
              <motion.a
                key={i}
                href={contact.href}
                className="p-4 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{contact.icon}</div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">
                      {contact.label}
                    </p>
                    <p className="text-slate-900 font-semibold">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-lg"
            variants={itemVariants}
          >
            {submitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-600">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all resize-none"
                    placeholder="Tell me about your needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
