import HeroSection from "../components/HeroSection";
import Navbar from "../components/Nevbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212] container mx-auto px-4 md:px-10">
      <div className="fixed top-0 left-0 right-3 bg-[#121212] z-50">
        <Navbar />
      </div>

      <div className="mt-25 md:px-10">
        <HeroSection
          name="pravin"
          description="Full-stack developer focused on building performant backend systems and modern UIs with React and Node.js. Passionate about solving real-world problems through code."
          imgUrl="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?semt=ais_hybrid&w=740"
        />
      </div>

    </main>
  );
}
