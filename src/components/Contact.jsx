import React, { useState } from 'react';
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle} from "react-icons/fa";
import { motion } from "framer-motion";

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()        

    setIsSubmitting(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }).catch((error) => {
      setIsSubmitting(false);
      console.error('Error:', error);
      alert('Something went wrong, please try again.');
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-github-bg border-b border-gray-200 dark:border-github-border transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8257e5] mb-4 text-center pb-2">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        {showSuccess && (
          <div className="mb-6 flex items-center justify-center bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow">
            <FaCheckCircle className="w-5 h-5 mr-2" />
            Congratulations! Your message was sent successfully.
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 overflow-hidden">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-md dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Quick Response
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond to messages within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white dark:bg-github-card border border-gray-200 dark:border-github-border rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-github-bg rounded-lg border border-gray-300 dark:border-github-border appearance-none dark:text-white focus:outline-none focus:ring-1 focus:border-blue-600 focus:ring-blue-600 peer"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-github-bg rounded-lg border border-gray-300 dark:border-github-border appearance-none dark:text-white focus:outline-none focus:ring-1 focus:border-blue-600 focus:ring-blue-600 peer"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Email
                  </label>
                </div>

              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-github-bg rounded-lg border border-gray-300 dark:border-github-border appearance-none dark:text-white focus:outline-none focus:ring-1 focus:border-blue-600 focus:ring-blue-600 peer"
                  placeholder=" "
                  autoComplete="off"
                />
                <label htmlFor="subject" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="block px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-github-bg rounded-lg border border-gray-300 dark:border-github-border appearance-none dark:text-white focus:outline-none focus:ring-1 focus:border-blue-600 focus:ring-blue-600 peer"
                  placeholder=" "
                  autoComplete="off"
                ></textarea>
                <label htmlFor="message" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 ${isSubmitting ? "opacity-70 cursor-not-allowed hover:transform-none" : ""}`}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <FaPaperPlane className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
