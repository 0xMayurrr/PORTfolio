import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import BuildicySection from "@/components/BuildicySection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        {/* <BuildicySection /> */}
        <ProjectsSection />
        <TechStackSection />
        <OpenSourceSection />
        <TrackRecordSection />
        <InsightsSection />
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
