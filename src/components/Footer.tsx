import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = ({scrollToHero,scrollToAbout,scrollToContact,scrollToProject} : {scrollToHero : ()=>void,scrollToAbout : ()=>void,scrollToContact : ()=>void,scrollToProject : ()=>void}) => {
  return (
    <footer className="bg-[#181818] py-6 px-4 md:px-16 text-center border-t border-gray-800 ">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-4">
        <div className='flex gap-4'>
          <button onClick={scrollToHero} className='text-white hover:text-pink-400 transition cursor-pointer'>Home</button>
          <button onClick={scrollToAbout} className='text-white hover:text-pink-400 transition cursor-pointer'>About</button>
          <button onClick={scrollToProject} className='text-white hover:text-pink-400 transition cursor-pointer'>Projects</button>
          <button onClick={scrollToContact} className='text-white hover:text-pink-400 transition cursor-pointer'>Contact</button>
        </div>
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Pravin. All rights reserved.
        </div>
        <div className="flex gap-4 justify-center">
          <a href="mailto:your.email@example.com" className="text-white hover:text-pink-400 transition" aria-label="Email">
            <FaEnvelope className="text-xl" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition" aria-label="GitHub">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition" aria-label="LinkedIn">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 