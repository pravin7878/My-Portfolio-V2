"use client"

import { useRef } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Nevbar";
import { About } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
// import {scrollIntoView} from "react"

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  // const skillRef = useRef(null)


  return ( <>
    <main className="w-full bg-[#121212] px-4 md:px-8">
      <div className="fixed top-0 right-0 left-0 bg-[#121212] z-50">
        <Navbar
          scrollToHero={() => { heroRef.current?.scrollIntoView({ behavior: "smooth" }) }}
          scrollToAbout={() => { aboutRef.current?.scrollIntoView({ behavior: "smooth" }) }}
        />
      </div>

      <div ref={heroRef} className="pt-16 md:pt-25 w-full md:px-10">
        <HeroSection
          name="pravin"
          description="Full-stack developer focused on building performant backend systems and modern UIs with React and Node.js. Passionate about solving real-world problems through code."
          imgUrl="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?semt=ais_hybrid&w=740"
        />
      </div>

      <div  ref={aboutRef} className="scroll-mt-16">
        <About
          aboutImage="https://img.freepik.com/premium-vector/codding-vector-background_616507-167.jpg"
          aboutDescription="Hi, I'm Pravin, a passionate and detail-oriented Full-Stack Web Developer with a strong foundation in frontend and backend technologies. I specialize in building responsive, high-performance web applications using modern tools like React.js, Next.js, Tailwind CSS, and Node.js.

My journey began with curiosity and turned into a commitment to creating clean, maintainable, and user-focused digital experiences. Whether it's crafting intuitive user interfaces or developing robust server-side APIs, I enjoy solving real-world problems through code.

I'm constantly exploring new technologies and improving my skills to deliver better products and experiences. Let's build something amazing together!"
        />
      </div>
        <SkillSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />

    </main>
        <Footer />
       </>
  );
}
