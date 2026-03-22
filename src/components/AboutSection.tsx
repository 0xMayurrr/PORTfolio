import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

const interests = [
  "Problem Solving", "Smart Assistants", "Secure Payments",
  "Mobile Apps", "User Experience", "Data Security",
  "Startups", "Automation",
];

const achievements = [
  { emoji: "🏆", text: "Innovation Competition Winner" },
  { emoji: "🚀", text: "10+ Hackathons" },
  { emoji: "🌍", text: "Community Project Helper" },
  { emoji: "🛡️", text: "Secure Systems Creator" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <div className="sticky top-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
              <User className="w-8 h-8 text-primary" />
              // about
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Dive into the background of a passionate developer obsessed with creating real value.
            </p>

            {/* Stats */}
            <div className="space-y-4">
              {[
                { value: "8+", label: "projects shipped" },
                { value: "10+", label: "hackathons" },
                { value: "2024 -Now", label: "building in public" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary pl-4">
                  <div className="text-2xl font-bold font-mono text-foreground">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-6"
          >
            {/* Identity Card */}
            <div className="border-brutal bg-card p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-xs uppercase tracking-widest">name</span>
                  <span className="text-foreground font-medium text-base">Mayur P</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-xs uppercase tracking-widest">role</span>
                  <span className="text-accent font-semibold text-base">Web3 Builder & AI Enthusiast</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-xs uppercase tracking-widest">education</span>
                  <span className="text-foreground text-base">BSc - Computer Technology</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-xs uppercase tracking-widest">openToWork</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-primary font-semibold text-base">true</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="p-6 md:p-8 border border-border bg-card">
              <p className="text-muted-foreground font-body text-pretty text-lg leading-relaxed">
                Experience in building dApps, smart contracts, and AI-powered applications. I care about making technology accessible, secure, and genuinely useful — whether that's a decentralized marketplace or an intelligent campus assistant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interests */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="p-6 border border-border bg-card"
              >
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground/80 mb-4">interests:</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="text-xs font-mono px-3 py-1.5 bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200 rounded-md"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="p-6 border border-border bg-card"
              >
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground/80 mb-4">achievements:</p>
                <div className="flex flex-col gap-3">
                  {achievements.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg transition-colors duration-200 group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">{item.emoji}</span>
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
