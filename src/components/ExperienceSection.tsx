import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-20 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Left Side: Timeline */}
          <div className="relative pl-5 border-l border-border/40 lg:w-3/5 flex flex-col gap-12">
            {/* GetNow Solutions */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  Software Engineer Intern
                </h3>
                <span className="text-sm font-mono text-muted-foreground">
                  @ GetNow Solutions
                </span>
              </div>

              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
                March 2026 — Present
              </p>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xl">
                  <span className="text-primary/50 mr-2 font-mono">{"->"}</span>
                  Engineered <strong className="text-foreground font-semibold">GlobalPay Hub</strong>, a production financial infrastructure platform integrating banking, FX, and KYC providers via unified backend APIs.
                </p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xl">
                  <span className="text-primary/50 mr-2 font-mono">{"->"}</span>
                  Built resilient transaction processing pipelines with webhook ingestion, idempotency controls, retry mechanics, and automated error recovery.
                </p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xl">
                  <span className="text-primary/50 mr-2 font-mono">{"->"}</span>
                  Designed high-reliability database schemas, optimized API query latency, participated in code reviews, and managed production deployments.
                </p>
              </div>
            </motion.div>

            {/* E-Cell */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  Head of Technical Innovation
                </h3>
                <span className="text-sm font-mono text-muted-foreground">
                  @ E-Cell Incubation Cell
                </span>
              </div>

              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
                2024 — 2026
              </p>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xl">
                  <span className="text-primary/50 mr-2 font-mono">{"->"}</span>
                  Led student incubation programs, guiding product architecture, backend design, and MVP validation for early-stage software projects.
                </p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xl">
                  <span className="text-primary/50 mr-2 font-mono">{"->"}</span>
                  Organized hackathons (including Hack Beyond The Limits with 200+ participants), developer bootcamps, and technical workshops.
                </p>
              </div>
            </motion.div>

            {/* AICRASIE */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  Innovation Ambassador
                </h3>
                <span className="text-sm font-mono text-muted-foreground">
                  @ AICRASIE
                </span>
              </div>

              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
                Feb 2026 — May 2026
              </p>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xl">
                  <span className="text-primary/50 mr-2 font-mono">{"->"}</span>
                  Advocated software engineering best practices, system architecture, and AI technology integration across university student chapters.
                </p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xl">
                  <span className="text-primary/50 mr-2 font-mono">{"->"}</span>
                  Mentored student teams on API design, backend reliability, and rapid problem-solving for national hackathons.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Data Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/5 flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm border border-border bg-card/20 p-6 rounded-lg backdrop-blur-sm flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-xs font-mono text-muted-foreground">STATUS</span>
                <span className="text-xs font-mono text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  AVAILABLE_FOR_HIRING
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Focus</span>
                  <span className="text-sm font-medium text-right">Backend & Full-Stack Systems</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">Current Stack</span>
                  <span className="text-sm font-medium text-right">TypeScript / Node / Node.js / Go / SQL</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">Execution Flow</span>
                  <span className="text-xs font-mono text-primary text-right">BUILD → INTEGRATE → SHIP</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span className="text-sm font-medium text-right">Remote / Open to Relocation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
