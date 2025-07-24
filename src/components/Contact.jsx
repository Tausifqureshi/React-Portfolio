// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.send(
//       'service_u2m8d8t',
//       'template_05ggpmi',
//       formData,
//       'qa0NYMgXZBapp6qXt'
//     ).then(() => {
//       setShowSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//       setTimeout(() => setShowSuccess(false), 5000);
//     }).catch((error) => {
//       console.error('Error:', error);
//       alert('Something went wrong, please try again.');
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: 'Email',
//       value: 'john.doe@example.com',
//       link: 'mailto:john.doe@example.com'
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: 'Phone',
//       value: '+1 (555) 123-4567',
//       link: 'tel:+15551234567'
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: 'Location',
//       value: 'San Francisco, CA',
//       link: null
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Have a project in mind? Let's work together to create something amazing.
//           </p>
//         </div>

//         {showSuccess && (
//           <div className="mb-6 flex items-center justify-center bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow">
//             <CheckCircle className="w-5 h-5 mr-2" />
//             Congratulations! Your message was sent successfully.
//           </div>
//         )}

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                 Let's Connect
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-6">
//                 I'm always open to discussing new opportunities, creative projects, 
//                 or just having a friendly chat about technology and development.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="flex items-center space-x-4">
//                   <div className="bg-blue-600 text-white p-3 rounded-lg">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
//                       {info.title}
//                     </h4>
//                     {info.link ? (
//                       <a
//                         href={info.link}
//                         className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//                       >
//                         {info.value}
//                       </a>
//                     ) : (
//                       <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
//               <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                 Quick Response
//               </h4>
//               <p className="text-gray-600 dark:text-gray-300">
//                 I typically respond to messages within 24 hours. Looking forward to hearing from you!
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                   placeholder="Project Discussion"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                   placeholder="Tell me about your project..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
//               >
//                 <Send className="w-5 h-5 mr-2" />
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
















import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_u2m8d8t',
      'template_05ggpmi',
      formData,
      'qa0NYMgXZBapp6qXt'
    ).then(() => {
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }).catch((error) => {
      console.error('Error:', error);
      alert('Something went wrong, please try again.');
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        {showSuccess && (
          <div className="mb-6 flex items-center justify-center bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow">
            <CheckCircle className="w-5 h-5 mr-2" />
            Congratulations! Your message was sent successfully.
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
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

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Quick Response
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond to messages within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Project Discussion"
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell me about your project..."
                  autoComplete="off"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
