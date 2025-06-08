import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';


export default function ProjectCard ({project,idx}:{project : {},idx:number}){
    return (
        <div className="min-w-0 bg-[#181818] rounded-2xl shadow-lg hover:shadow-pink-500/30 transition duration-300 flex flex-col overflow-hidden group mx-2">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="relative w-full h-48 block">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  sizes="100vw"
                  priority={idx === 0}
                />
              </a>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack?.map((tech, i) => (
                    <span key={i} className="bg-gradient-to-r from-purple-500 to-pink-500 text-xs text-white px-2 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm flex-1">{project.description}</p>
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
                  <p className="px-3 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white w-max">
                    {project.type}
                  </p>
                </div>
              </div>
            </div>
    )
}