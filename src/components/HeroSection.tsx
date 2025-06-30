"use client"
import React from "react"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import resume from "../../public/PravinKumar-full stack dev.pdf"
const previewUrl = "https://drive.google.com/file/d/1bZveEVNFYG-EVuaQq3p_kecIXJnMzUab/preview";
const downloadUrl = "https://drive.google.com/uc?export=download&id=1bZveEVNFYG-EVuaQq3p_kecIXJnMzUab";

export default function HeroSection({ name, description, imgUrl, scrollToContact }: { name: string, description: string, imgUrl: string, scrollToContact: () => void; }) {


    function handleViewAndDownloadCV() {
        // Open preview in new tab
        window.open(previewUrl, "_blank", "noopener,noreferrer");
        // Trigger download in background
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return (
        <section className="w-full" >
            <div className="flex flex-col items-center md:flex-row justify-between w-full">
                <div className="w-full flex flex-col items-center text-center md:items-baseline md:text-left">
                    <h1 className="text-transparent  mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold lg:font-extrabold">
                        <span className="bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Hello,I'm</span>
                        <span className="text-white ml-0.5">
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer',
                                    1000,
                                    'FullStack Developer',
                                    1000,
                                    'Backend Developer',
                                    1000,
                                    'Problem Solver',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </span>

                    </h1>
                    <p className="text-[#ADB7BE] text-md lg:text-xl w-full md:w-3/4">{description}</p>

                    <div className="my-5 flex w-full flex-col gap-3 px-10 md:px-0 md:flex-row md:w-auto">
                        <button
                            className="px-6 py-3 rounded-full text-white cursor-pointer hover:bg-slate-20 bg-gradient-to-r from-purple-500  to-pink-500 text-xl lg:text-2xl"
                            onClick={scrollToContact}
                        >
                            Contact Me
                        </button>
                        <button
                            type="button"
                            onClick={handleViewAndDownloadCV}
                            className="p-1 rounded-full bg-transparent hover:bg-slate-800 cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500"
                        >
                            <span className="bg-slate-950 w-full block h-full px-5 py-2 rounded-full text-xl lg:text-2xl">
                                View/Download CV
                            </span>
                        </button>
                    </div>
                </div>


                <div className="relative col-span-5 place-self-center mt-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-[40px] opacity-80 animate-pulse animate-spin-slow z-0" />

                    <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[370px] lg:h-[370px] overflow-hidden z-10">
                        <Image
                            src={imgUrl}
                            alt="hero image"
                            className="object-cover w-full h-full"
                            fill
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}