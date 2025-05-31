"use client"
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";
export default function Navbar() {

    return (
        <nav className="flex justify-between px-4 sm:px-8 md:px-16  items-center py-2">
            <div>
                <Link href={"/"}>
                    <h3 className="font-pacifico font-extrabold text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-white via-pink-400 to-pink-600 text-transparent bg-clip-text tracking-widest">
                        <span className="text-white">PRA</span>
                        <span className="text-pink-500">VIN</span>
                    </h3>
                </Link>
            </div>

            <div className="hidden md:flex gap-0 md:gap-3 text-white">
                <p className="border-transparent hover:border-pink-500 px-1 py-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-purple-500  to-pink-500 hover:scale-105 text-sm sm:text-xl md:text-2xl">
                    <Link className="font-bold px-2.5 py-1  rounded-full bg-[#121212]" href={"/about"}>
                        About
                    </Link>
                </p>
                <p className="border-transparent hover:border-pink-500 px-1 py-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-purple-500  to-pink-500 hover:scale-105 text-sm sm:text-xl md:text-2xl">
                    <Link className="font-bold px-2.5 py-1  rounded-full bg-[#121212]" href={"/projects"}>
                        Projects
                    </Link>
                </p>
                <p className="border-transparent hover:border-pink-500 px-1 py-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-purple-500  to-pink-500 hover:scale-105 text-sm sm:text-xl md:text-2xl">
                    <Link className="font-bold px-2.5 py-1  rounded-full bg-[#121212]" href={"/contact"}>
                        Contact
                    </Link>
                </p>
            </div>

            <button className="block md:hidden">
                <TbMenuDeep size={30}/>
            </button>
        </nav>
    )
}