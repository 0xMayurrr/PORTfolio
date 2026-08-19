import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 lg:px-24 pt-24 pb-16 relative">
      <div className="flex-1 w-full max-w-2xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Web3 Infrastructure Engineer · GetNow Solutions
            </span>
          </div>
        </motion.div>

        <motion.p
          className="text-sm font-mono text-muted-foreground mb-3 tracking-wide flex items-center gap-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          <span className="text-primary">&gt;</span> system.init()
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-balance mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Mayur P<span className="text-primary animate-pulse">.</span>
        </motion.h1>

        <motion.div
          className="flex flex-col gap-2 mb-8 border-l-2 border-primary pl-5 py-1"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
        >
          <p className="text-xl md:text-2xl font-mono font-bold text-foreground">
            Web3 Infrastructure Engineer
          </p>
          <p className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest">
            RPC Gateways // ZK Protocols // AI Systems
          </p>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-lg text-pretty mb-10 font-body leading-relaxed"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          I engineer the critical layers beneath modern dApps. No fluff, just scalable infrastructure, non-custodial smart contracts, and privacy-preserving identity systems.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <a href="#projects">
            <Button variant="brutal" size="lg" className="gap-2 font-mono">
              Explore my work
            </Button>
          </a>
          <a href="https://coderlegion.com/20276/beyond-identity-rethinking-trust-infrastructure-through-zero-knowledge-verification" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="font-mono">
              Read my research
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <a href="https://github.com/0xMayurrr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/mayurp03/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Right Column: Images */}
      <motion.div
        className="flex-1 w-full mt-16 lg:mt-0 flex flex-col items-center justify-center relative z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Glowing circular profile pic element */}
        <div className="relative mb-12 group">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary via-accent/50 to-primary/20 blur-lg opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-50 z-10 pointer-events-none"></div>
          <img
            src="/Mayur.jpg"
            alt="Mayur Profile"
            className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-background shadow-2xl z-20 transition-transform duration-700 group-hover:scale-105"
            draggable="false"
          />
        </div>

        {/* Live GitHub Stats (Mac OS Window Style) */}
        <motion.div
          className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mt-8 group cursor-crosshair"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, rotate: -1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl flex flex-col group-hover:border-primary/50 transition-colors duration-500">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/30 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                LIVE
              </div>
            </div>

            {/* Live Stats Content */}
            <div className="flex flex-col bg-background/50 px-2 pt-2 pb-1">
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=0xMayurrr&bg_color=00000000&color=58a6ff&line=58a6ff&point=39d353&area=true&area_color=39d35320&hide_border=true&radius=4"
                alt="GitHub Contribution Graph"
                className="w-full h-auto mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity"
                draggable="false"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex flex-col items-center gap-2">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
