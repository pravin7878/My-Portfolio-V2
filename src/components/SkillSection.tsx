import React from 'react'
import Marquee from 'react-fast-marquee';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
    FaNpm
} from "react-icons/fa";
import {
    SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiChakraui,
    SiMui, SiFramer, SiStyledcomponents, SiJest, SiVite, SiWebpack
} from "react-icons/si";

import {
    FaNodeJs, FaDatabase, FaFire, FaKey, FaUserShield
} from "react-icons/fa";
import {
    SiExpress, SiMongodb, SiPostgresql, SiMysql, SiAppwrite,
    SiPrisma, SiJsonwebtokens, SiSocketdotio, SiGraphql,
    SiZod
} from "react-icons/si";

import {
    FaGithub, FaGitAlt, FaDocker, FaAws, FaTerminal,
    FaLaptopCode, FaCodeBranch
} from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import {
    SiVercel, SiNetlify, SiRender, SiRailway, SiHeroku,
    SiPostman, SiPrettier, SiEslint,
    SiNodemon
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
export const SkillSection = () => {



    // const skills = [
    //     { icon: <FaHtml5 />, name: 'HTML5' },
    //     { icon: <FaCss3Alt />, name: 'CSS3' },
    //     { icon: <FaJsSquare />, name: 'JavaScript' },
    //     { icon: <FaReact />, name: 'React.js' },
    //     { icon: <SiNextdotjs />, name: 'Next.js' },
    //     { icon: <FaNodeJs />, name: 'Node.js' },
    //     { icon: <SiExpress />, name: 'Express.js' },
    //     { icon: <SiMongodb />, name: 'MongoDB' },
    //     { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    //     { icon: <FaGithub />, name: 'GitHub' },
    //     { icon: <FaGitAlt />, name: 'Git' },
    // ];


    const skills = {
        frontend: [
            { label: "HTML5", icon: <FaHtml5 color='#E34F26' /> },
            { label: "CSS3", icon: <FaCss3Alt color='#663399' /> },
            { label: "JavaScript", icon: <FaJs color='#F7DF1E' /> },
            { label: "TypeScript", icon: <SiTypescript color='#3178C6' /> },
            { label: "React.js", icon: <FaReact color='#61DAFB' /> },
            { label: "Redux / Redux Toolkit", icon: <SiRedux color='#764ABC' /> },
            { label: "Next.js", icon: <SiNextdotjs color='#000000' className='bg-white rounded-full' /> },
            { label: "Tailwind CSS", icon: <SiTailwindcss color='#06B6D4' /> },
            { label: "Chakra UI", icon: <SiChakraui color='#1BB2A9' /> },
            { label: "Bootstrap", icon: <FaBootstrap color='#7952B3' /> },
            { label: "Material UI", icon: <SiMui color='#007FFF' /> },
            { label: "Framer Motion", icon: <img width="40" height="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9C6POMFVXX_pdEDdQh2-7CDBy8Tp6GkDIg&s" alt="Framer Motion" /> },
            { label: "Vite", icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/vite.png" alt="vite" /> },
            { label: "Shadcn ui", icon: <img width="48" height="48" src="https://avatars.githubusercontent.com/u/139895814?v=4" alt="shadcn" /> }
        ],
        backend: [
            { label: "Node.js", icon: <FaNodeJs color='#5FA04E' /> },
            { label: "Express.js", icon: <SiExpress color='' /> },
            { label: "MongoDB + Mongoose", icon: <SiMongodb color='#47A248' /> },
            { label: "Firebase", icon: <FaFire color='#DD2C00' /> },
            { label: "Appwrite", icon: <SiAppwrite color='#FD366E' /> },
            { label: "JWT", icon: <SiJsonwebtokens color='' /> },
        ],
        tools: [
            { label: "Git & GitHub", icon: <FaGithub /> },
            { label: "VS Code", icon: <VscVscode color='#007ACC' /> },
            { label: "Postman / Thunder Client", icon: <SiPostman color='#FF6C37' /> },
            { label: "Figma / Adobe XD", icon: <FaFigma color='#F24E1E' /> },
            { label: "Vercel", icon: <SiVercel color='#000000' className='bg-white rounded-xl p-1' /> },
            { label: "Netlify", icon: <SiNetlify color='#00C7B7' /> },
            { label: "Render", icon: <SiRender color='#000000' className='bg-white p-1 rounded-md' /> },
            { label: "Nodemon", icon: <SiNodemon color='#76D04B' /> },
            { label: "ESLint", icon: <SiEslint color='#4B32C3' /> },
            { label: "Prettier", icon: <SiPrettier color='#F7B93E' /> },
        ]
    }

    const skillCatagories = [
        {
            name: "Frontend",
            data: skills?.frontend,
            icon: <img width="30" height="30" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-front-end-computer-programming-flaticons-lineal-color-flat-icons.png" alt="external-front-end-computer-programming-flaticons-lineal-color-flat-icons" />
        },
         { name: "Backend",
         data: skills?.backend ,
        icon : <img width="40" height="40" src="https://img.icons8.com/clouds/100/server.png" alt="server"/>
        },
         { name: "Tools",
         data: skills?.tools,
        icon : <img width="30" height="30" src="https://img.icons8.com/office/40/administrative-tools.png" alt="administrative-tools"/>
        }]
    return (
        <section>
            <h3 className="font-extrabold text-3xl md:text-5xl text-center ">
                <span className="text-white">My</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Skills
                </span>
            </h3>
            <p className='text-center text-xs md:text-base  mb-6 md:mb-12'>These are the tools and technologies I love working with to bring ideas to life.</p>

            {/* skills marque */}
            <div className='flex flex-col gap-3 mb-10'>
                {
                    skillCatagories?.map((skill, ind) => {
                        ""
                        const direction = ind % 2 === 0 ? "left" : "right"
                        return (
                            <div key={ind} className='flex gap-4 items-center'>
                                <p className='flex flex-col items-center'>
                                    <span>{skill?.icon}</span>
                                    <span>{skill?.name}</span>
                                </p>
                                <div className='w-full'>
                                    <Marquee
                                        speed={50}
                                        gradient={true}
                                        gradientColor={"#121212"}
                                        gradientWidth={200}
                                        direction={direction}
                                    >
                                        {skill?.data.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="mx-2 md:mx-6 flex flex-col items-center text-white text-sm md:text-lg hover:scale-105 transition-transform duration-300"
                                            >
                                                <div className="text-2xl md:text-4xl mb-1 ">{item.icon}</div>
                                                <span>{item.label}</span>
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        )
                    })
                }


                {/* <div className='flex gap-4 items-center'>
                    <p className='flex items-center'>
                        <span>⚙️</span>
                        <span>Backend</span>
                    </p>
                    <div className='w-full'>
                        <Marquee
                            speed={50}
                            gradient={true}
                            gradientColor={"#121212"}
                            gradientWidth={200}
                            direction='right'
                        >
                            {skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="mx-6 flex flex-col items-center text-white text-lg hover:scale-110 transition-transform duration-300"
                                >
                                    <div className="text-4xl mb-1 text-pink-500">{skill.icon}</div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>

                <div className='flex gap-4 items-center'>
                    <p className='flex items-center'>
                        <span>🧰</span>
                        <span>Tools</span>
                    </p>
                    <div className='w-full'>
                        <Marquee
                            speed={50}
                            gradient={true}
                            gradientColor={"#121212"}
                            gradientWidth={200}
                        >
                            {skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="mx-6 flex flex-col items-center text-white text-lg hover:scale-110 transition-transform duration-300"
                                >
                                    <div className="text-4xl mb-1 text-pink-500">{skill.icon}</div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div> */}
            </div>

        </section>
    )
}
