import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import FreelancingSection from "@/components/FreelancingSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div className="mx-6 md:mx-16 lg:mx-24 border-t border-border" />
        <ProjectsSection />
        <div className="mx-6 md:mx-16 lg:mx-24 border-t border-border" />
        <TechStackSection />
        <div className="mx-6 md:mx-16 lg:mx-24 border-t border-border" />
        <OpenSourceSection />
        <div className="mx-6 md:mx-16 lg:mx-24 border-t border-border" />
        <FreelancingSection />
        <div className="mx-6 md:mx-16 lg:mx-24 border-t border-border" />
        <ExperienceSection />
        <div className="mx-6 md:mx-16 lg:mx-24 border-t border-border" />
        <AboutSection />
        <div className="mx-6 md:mx-16 lg:mx-24 border-t border-border" />
        <ContactSection />
      </main>
      <footer className="px-6 md:px-16 lg:px-24 py-6 border-t border-border">
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} Mayur P. Built with conviction, not templates.
        </p>
      </footer>
    </div>
  );
};

export default Index;
