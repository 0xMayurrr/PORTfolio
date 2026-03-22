import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left: Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <div className="sticky top-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              // current focus
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
              what i've been up to lately.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">focus areas</p>
              {[
                "blockchain dApps",
                "smart contracts",
                "ai-powered interfaces",
                "open source",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span className="text-sm font-mono text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="border-brutal bg-card p-8 md:p-10 hover:border-primary transition-colors duration-300"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6">
              <h3 className="text-xl md:text-2xl font-bold font-mono">
                Independent Developer
              </h3>
              <span className="text-sm font-mono text-primary">
                2024 — Present
              </span>
            </div>

            {/* Main text */}
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              Building cool shit on the web — both web2 and web3. 8+ projects ranging from blockchain wallets and dApps to creative web apps and experimental interfaces. Focus on making things that look good, feel smooth, and actually work.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["web3", "dApps", "blockchain", "react", "node.js", "solidity", "ai tools", "open source"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-foreground transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
