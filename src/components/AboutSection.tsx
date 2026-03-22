import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          // about
        </h2>
      </motion.div>

      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="space-y-6"
        >
          {/* Identity Card */}
          <div className="border-brutal bg-card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
              <div>
                <span className="text-muted-foreground">name:</span>{" "}
                <span className="text-foreground font-medium">"Mayur P"</span>
              </div>
              <div>
                <span className="text-muted-foreground">role:</span>{" "}
                <span className="text-accent font-semibold">"Web3 Builder & AI Enthusiast"</span>
              </div>
              <div>
                <span className="text-muted-foreground">education:</span>{" "}
                <span className="text-foreground">"BSc - Computer Technology"</span>
              </div>
              <div>
                <span className="text-muted-foreground">openToWork:</span>{" "}
                <span className="text-primary font-semibold">true</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground font-body text-pretty leading-relaxed">
            Experience in building dApps, smart contracts, and AI-powered applications. I care about making technology accessible, secure, and genuinely useful — whether that's a decentralized marketplace or an intelligent campus assistant.
          </p>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <p className="text-sm font-mono text-foreground/80 mb-3">interests:</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="text-xs font-mono px-3 py-1.5 bg-secondary text-secondary-foreground border border-border hover:border-primary transition-colors duration-200"
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
          >
            <p className="text-sm font-mono text-foreground/80 mb-3">achievements:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((item) => (
                <div
                  key={item.text}
                  className="border-brutal bg-card p-3 flex items-center gap-3 hover:border-primary transition-colors duration-200"
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="font-mono text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
