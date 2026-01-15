import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import TechStackSection from "@/components/sections/TechStack";
import ProjectsSection from "@/components/sections/Projects";
import ExperienceSection from "@/components/sections/Experience";
import ContactSection from "@/components/sections/Contact";
import { BlogSection } from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechStackSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
