import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import ProjectSlider from './ProjectSlider';

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
      <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hidden md:grid">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center text-gray-400">No projects found for the selected filters.</div>
        ) : (
          filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#181818] rounded-2xl shadow-lg hover:shadow-pink-500/30 transition duration-300 flex flex-col overflow-hidden group"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="relative w-full h-48 md:h-56 block">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                />
              </a>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack?.map((tech, i) => (
                    <span key={i} className="bg-gradient-to-r from-purple-500 to-pink-500 text-xs text-white px-2 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm md:text-base flex-1">{project.description}</p>
                <div className='flex justify-between items-center mt-4'>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-pink-500 transition"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-500 transition"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={22} />
                    </a>
                  </div>
                  {/* Project Type Badge */}
                  <p className="px-3 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white w-max">
                    {project.type}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Project Cards Slider for Mobile */}
      <ProjectSlider projects={filteredProjects} />
    </section>
  );
};

export default ProjectSection;
