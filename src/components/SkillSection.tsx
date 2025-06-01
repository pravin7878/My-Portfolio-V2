import React from 'react'
import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiExpress } from 'react-icons/si';


export const SkillSection = () => {

    // const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'];

    const skills = [
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3Alt />, name: 'CSS3' },
        { icon: <FaJsSquare />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React.js' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiExpress />, name: 'Express.js' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
        { icon: <FaGithub />, name: 'GitHub' },
        { icon: <FaGitAlt />, name: 'Git' },
    ];



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
                <div className='flex gap-4 items-center'>
                    <p className='flex items-center'>
                        <span>🔧</span>
                        <span>Frontend</span>
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
                </div>

                <div className='flex gap-4 items-center'>
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
                </div>
            </div>

        </section>
    )
}
