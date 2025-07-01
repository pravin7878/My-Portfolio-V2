import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-4 md:px-16 py-8 md:py-16 bg-[#121212]">
      <h3 className="font-extrabold text-3xl md:text-5xl text-center mb-2">
        <span className="text-white">Contact</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Me</span>
      </h3>
      <p className="text-center text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
        Feel free to reach out for collaborations, questions, or just to say hi!
      </p>
      <div className="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 bg-[#181818] hover:shadow-purple-400 rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="bg-[#121212] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="bg-[#121212] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="bg-[#121212] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px]"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 rounded-md hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-green-400 text-center mt-2">Thank you for reaching out! I'll get back to you soon.</p>
          )}
        </form>
        {/* Contact Info */}
        <div className="flex-1 flex hover:shadow-purple-400 flex-col gap-4 justify-center items-center bg-[#181818] rounded-2xl shadow-lg p-6">
          <p className="text-center text-gray-300 ">
            Let’s connect and grow together!
          </p>
          <p className="text-center mb-4 text-pink-400">
          I'm always open to connecting on all social media platforms!
          </p>

          <a href="mailto:ravinmimrto648@gmail.com" className="flex items-center gap-2 text-white hover:text-pink-400 transition">
            <FaEnvelope className="text-xl" /> pravinmimrto648@gmail.com
          </a>
          <a href="https://github.com/pravin7878" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-pink-400 transition">
            <FaGithub className="text-xl" /> https://github.com/pravin7878
          </a>
          <a href="https://www.linkedin.com/in/pravin-kumar24/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-pink-400 transition">
            <FaLinkedin className="text-xl" /> https://www.linkedin.com/in/pravin-kumar24/
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 