import React from 'react';
import Marquee from 'react-fast-marquee';

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
    FaNpm, FaNodeJs, FaDatabase, FaFire, FaKey,
    FaUserShield, FaGithub, FaGitAlt, FaDocker,
    FaAws, FaTerminal, FaLaptopCode, FaCodeBranch, FaFigma
} from "react-icons/fa";

import {
    SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiChakraui,
    SiMui, SiFramer, SiStyledcomponents, SiJest, SiVite, SiWebpack,
    SiExpress, SiMongodb, SiPostgresql, SiMysql, SiAppwrite,
    SiPrisma, SiJsonwebtokens, SiSocketdotio, SiGraphql,
    SiZod, SiVercel, SiNetlify, SiRender, SiRailway,
    SiHeroku, SiPostman, SiPrettier, SiEslint, SiNodemon
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const SkillSection = () => {

    const skills = {
        frontend: [
            { label: "HTML5", icon: <FaHtml5 color='#E34F26' /> },
            { label: "CSS3", icon: <FaCss3Alt color='#663399' /> },
            { label: "JavaScript", icon: <FaJs color='#F7DF1E' /> },
            { label: "TypeScript", icon: <SiTypescript color='#3178C6' /> },
            { label: "React.js", icon: <FaReact color='#61DAFB' /> },
            { label: "Redux", icon: <SiRedux color='#764ABC' /> },
            { label: "Next.js", icon: <SiNextdotjs className='bg-white rounded-full' /> },
            { label: "Tailwind CSS", icon: <SiTailwindcss color='#06B6D4' /> },
            { label: "Chakra UI", icon: <SiChakraui color='#1BB2A9' /> },
            { label: "Bootstrap", icon: <FaBootstrap color='#7952B3' /> },
            { label: "Material UI", icon: <SiMui color='#007FFF' /> },
            { label: "Framer Motion", icon: <img width="36" height="36" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9C6POMFVXX_pdEDdQh2-7CDBy8Tp6GkDIg&s" alt="Framer Motion" className="rounded-full" /> },
            { label: "Vite", icon: <img width="36" height="36" src="https://img.icons8.com/fluency/48/vite.png" alt="Vite" /> },
            { label: "Shadcn UI", icon: <img width="36" height="36" src="https://avatars.githubusercontent.com/u/139895814?v=4" alt="Shadcn UI" /> }
        ],
        backend: [
            { label: "Node.js", icon: <FaNodeJs color='#5FA04E' /> },
            { label: "Express.js", icon: <SiExpress /> },
            { label: "MongoDB", icon: <SiMongodb color='#47A248' /> },
            { label: "Firebase", icon: <FaFire color='#DD2C00' /> },
            { label: "Appwrite", icon: <SiAppwrite color='#FD366E' /> },
            { label: "JWT", icon: <SiJsonwebtokens /> },
            { label: "Node.js", icon: <FaNodeJs color='#5FA04E' /> },
            { label: "Express.js", icon: <SiExpress /> },
            { label: "MongoDB", icon: <SiMongodb color='#47A248' /> },
            { label: "Firebase", icon: <FaFire color='#DD2C00' /> },
            { label: "Appwrite", icon: <SiAppwrite color='#FD366E' /> },
            { label: "JWT", icon: <SiJsonwebtokens /> },
        ],
        tools: [
            { label: "Git & GitHub", icon: <FaGithub /> },
            { label: "VS Code", icon: <VscVscode color='#007ACC' /> },
            { label: "Postman", icon: <SiPostman color='#FF6C37' /> },
            { label: "Figma", icon: <FaFigma color='#F24E1E' /> },
            { label: "Vercel", icon: <SiVercel className='bg-white rounded-md p-1' /> },
            { label: "Netlify", icon: <SiNetlify color='#00C7B7' /> },
            { label: "Render", icon: <SiRender className='bg-white p-1 rounded-md' /> },
            { label: "Nodemon", icon: <SiNodemon color='#76D04B' /> },
            { label: "ESLint", icon: <SiEslint color='#4B32C3' /> },
            { label: "Prettier", icon: <SiPrettier color='#F7B93E' /> },
            { label: "Git & GitHub", icon: <FaGithub /> },
            { label: "VS Code", icon: <VscVscode color='#007ACC' /> },
            { label: "Postman", icon: <SiPostman color='#FF6C37' /> },
            { label: "Figma", icon: <FaFigma color='#F24E1E' /> },
        ]
    };

    const categories = [
        {
            name: "Frontend",
            icon: <img width="28" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-front-end-computer-programming-flaticons-lineal-color-flat-icons.png" alt="frontend" />,
            data: skills.frontend
        },
        {
            name: "Backend",
            icon: <img width="28" src="https://img.icons8.com/clouds/100/server.png" alt="backend" />,
            data: skills.backend
        },
        {
            name: "Tools",
            icon: <img width="28" src="https://img.icons8.com/office/40/administrative-tools.png" alt="tools" />,
            data: skills.tools
        }
    ];

    return (
        <section className="px-4 md:px-16 py-2 md:py-8">
            <h3 className="font-extrabold text-3xl md:text-5xl text-center mb-2">
                <span className="text-white">My</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Skills
                </span>
            </h3>
            <p className="text-center text-sm md:text-base text-gray-300 mb-3 md:mb-8">
                These are the tools and technologies I love working with to bring ideas to life.
            </p>

            <div className="flex flex-col gap-3 md:gap-6">
                {categories.map((section, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-center gap-1 md:gap-4">
                        <div className="flex  md:flex-col items-center min-w-[80px]">
                            {section.icon}
                            <span className="text-sm mt-1 font-semibold text-white">{section.name}</span>
                        </div>
                        <div className="w-full">
                            <Marquee
                                speed={50}
                                gradient={true}
                                gradientColor={"#121212"}
                                gradientWidth={100}
                                direction={index % 2 === 0 ? "left" : "right"}
                            >
                                {section.data.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="mx-3 flex flex-col items-center text-white text-xs sm:text-sm md:text-base hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="text-2xl sm:text-3xl md:text-4xl mb-1">
                                            {skill.icon}
                                        </div>
                                        <span className="text-center">{skill.label}</span>
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
