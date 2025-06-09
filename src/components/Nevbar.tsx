"use client"
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import NavLink from "./NevLink";
import { useState } from "react";
export default function Navbar({ scrollToHero, scrollToAbout ,scrollToProject,scrollToContact}: { scrollToHero: () => void, scrollToAbout: () => void,scrollToProject: () => void,scrollToContact: () => void; }) {

const [isOpen, setIsOpen] = useState(false)

    const navItem = [
        {
            label: "About",
            action: scrollToAbout
        },
        {
            label: "Projects",
            action: scrollToProject
        },
        {
            label: "Contact",
            action: scrollToContact
        },

    ]

    return (
        <nav className="shadow-md shadow-purple-500 rounded-b-lg">
            <div className="flex justify-between px-4 sm:px-8 md:px-16  items-center py-2">
                <div>
                    <Link href={"/"} onClick={scrollToHero}>
                        <h3 className="font-pacifico font-extrabold text-2xl sm:text-4xl md:text-6xl  tracking-widest">
                            <span className="bg-gradient-to-r  from-pink-600 to-purple-500 text-transparent bg-clip-text">PRA</span>
                            <span className="text-white">VIN</span>
                        </h3>
                    </Link>
                </div>
                <button onClick={()=>setIsOpen(!isOpen)} className="block md:hidden">
                   {!isOpen ? <TbMenuDeep size={30} /> : <IoClose size={30} />}
                </button>

                <div className="hidden md:flex gap-0 md:gap-3 text-white">
                    {navItem.map((item, idx) => (<NavLink key={idx} label={item.label} action={item.action} />))}
                </div>
            </div>

           <div
  className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out flex-col gap-3 text-white ${
    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
  }`}
>
                {navItem.map((item, idx) => (
                    <NavLink key={idx} label={item.label} action={()=>{
                        item.action()
                        setIsOpen(false)
                    }} />
               ))}
            </div>
        </nav>
    )
}