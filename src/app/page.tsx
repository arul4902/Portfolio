import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Engineering from "@/components/sections/Engineering";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustStrip />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Engineering />
      <Contact />
    </div>
  );
}
