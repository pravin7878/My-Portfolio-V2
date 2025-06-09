import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import ProjectSlider from './ProjectSlider';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects and skills.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio-demo.com',
    type: 'Frontend',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    title: 'E-commerce App',
    description: 'A full-stack e-commerce application with product listings, cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://your-ecommerce-demo.com',
    type: 'Full Stack',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, authentication, and responsive design.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/yourusername/blog',
    demo: 'https://your-blog-demo.com',
    type: 'Backend',
    techStack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects and skills.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio-demo.com',
    type: 'Frontend',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    title: 'E-commerce App',
    description: 'A full-stack e-commerce application with product listings, cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://your-ecommerce-demo.com',
    type: 'Full Stack',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, authentication, and responsive design.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/yourusername/blog',
    demo: 'https://your-blog-demo.com',
    type: 'Backend',
    techStack: ['Node.js', 'Express', 'MongoDB'],  },

];

const allTypes = ['All', ...Array.from(new Set(projects.map(p => p.type)))];
const allTechStacks = ['All', ...Array.from(new Set(projects.flatMap(p => p.techStack)))];

const ProjectSection = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');

  const filteredProjects = projects.filter(project => {
    const typeMatch = selectedType === 'All' || project.type === selectedType;
    const techMatch = selectedTech === 'All' || project.techStack.includes(selectedTech);
    return typeMatch && techMatch;
  });

  return (
    <section className="px-4 md:px-16 py-8 md:py-16 bg-[#121212]">
      <h3 className="font-extrabold text-3xl md:text-5xl text-center mb-2">
        <span className="text-white">My</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Projects
        </span>
      </h3>
      <p className="text-center text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
        Here are some of the projects I have worked on, showcasing my skills in frontend, backend, and full-stack development.
      </p>
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <div>
          <label className="text-gray-300 mr-2 font-semibold">Type:</label>
          <select
            className="bg-[#181818] text-white px-3 py-1 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
          >
            {allTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-gray-300 mr-2 font-semibold">Tech Stack:</label>
          <select
            className="bg-[#181818] text-white px-3 py-1 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedTech}
            onChange={e => setSelectedTech(e.target.value)}
          >
            {allTechStacks.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Project Cards for Desktop/Tablet */}
      <div className="gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hidden md:grid">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center text-gray-400">No projects found for the selected filters.</div>
        ) : (
          filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))
        )}
      </div>
      {/* Project Cards Slider for Mobile */}
      <ProjectSlider projects={filteredProjects} />
    </section>
  );
};

export default ProjectSection;
