"use client"
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";
import NavLink from "./NevLink";
export default function Navbar({scrollToHero,scrollToAbout} : {scrollToHero : ()=>void,scrollToAbout : ()=>void;}) {

const navItem = [
    {
        label : "About",
        action : scrollToAbout
    },
    {
        label : "Projects",
         action : scrollToHero
    },
    {
        label : "Contact",
         action : scrollToHero
    },

]

    return (
        <nav className="flex justify-between px-4 sm:px-8 md:px-16  items-center py-2">
            <div>
                <Link href={"/"} onClick={scrollToHero}>
                    <h3 className="font-pacifico font-extrabold text-2xl sm:text-4xl md:text-6xl  tracking-widest">
                        <span className="bg-gradient-to-r  from-pink-600 to-purple-500 text-transparent bg-clip-text">PRA</span>
                        <span className="text-white">VIN</span>
                    </h3>
                </Link>
            </div>

            <div className="hidden md:flex gap-0 md:gap-3 text-white">
                {navItem.map((item,idx)=>(<NavLink key={idx} label={item.label} action={item.action} />))}
            </div>

            <button className="block md:hidden">
                <TbMenuDeep size={30}/>
            </button>
        </nav>
    )
}