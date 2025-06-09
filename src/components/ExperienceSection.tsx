import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  location?: string;
};

const experiences: Experience[] = [
  {
    role: 'Frontend Developer Intern',
    company: 'QuadbTech',
    period: 'Feb 2025 - April 2025',
    description:
      'Designed and developed responsive UI components using React.js, Tailwind CSS, and Material UI, improving cross-device user experience. Collaborated with backend teams to integrate EJS views and enhance the user interface. Worked in a team environment using version control (Git, GitHub) and followed agile development practices.',
    location: 'Remote',
  },
];

const ExperienceSection = () => {
  return (
    <section className="px-4 md:px-16 bg-[#121212]">
      <h3 className="font-extrabold text-3xl md:text-5xl text-center mb-2">
        <span className="text-white">My</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Experience
        </span>
      </h3>
      <p className="text-center text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
        Here are some of my professional experiences and internships.
      </p>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-[#181818] rounded-2xl shadow-md hover:shadow-purple-400 transition duration-300 p-6 flex flex-col md:flex-row gap-4 items-start"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <FaBriefcase className="text-white text- md:text-2xl" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h4>
              <div className="flex flex-wrap gap-2 items-center mb-1">
                <span className="text-pink-400 font-semibold">{exp.company}</span>
                <span className="text-gray-400 text-xs">{exp.location && `| ${exp.location}`}</span>
              </div>
              <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-xs text-white px-2 py-0.5 rounded-full mb-2">
                {exp.period}
              </span>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection; 