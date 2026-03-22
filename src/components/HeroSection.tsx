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
              Open to work
            </span>
          </div>
        </motion.div>

        <motion.p
          className="text-sm font-mono text-muted-foreground mb-3 tracking-wide"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          # hello
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tight text-balance mb-4"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          MAYUR P<span className="text-primary animate-blink">_</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-accent font-mono font-semibold mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
        >
          Digital Solutions Creator
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-xl text-pretty mb-10 font-body"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          I build fast, secure, and smart web applications that solve real problems — from decentralized platforms to AI-powered tools.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <a href="#contact">
            <Button variant="brutal" size="lg" className="gap-2 font-mono">
              EXECUTE_CONTACT
            </Button>
          </a>
          <a href="#projects">
            <Button variant="outline" size="lg" className="font-mono">
              VIEW_LOGS
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
          className="relative w-full max-w-sm md:max-w-md lg:max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl flex flex-col">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-2 text-xs font-mono text-white/50 flex-1 text-center truncate pr-8">
                github.com/0xMayurrr
              </div>
            </div>
            
            {/* Live Stats Content */}
            <div className="flex flex-col bg-[#0d1117] px-2 pt-2 pb-1">
              {/* GitHub Contribution Activity Graph */}
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=0xMayurrr&bg_color=0d1117&color=58a6ff&line=58a6ff&point=39d353&area=true&area_color=39d35320&hide_border=true&radius=4"
                alt="GitHub Contribution Graph"
                className="w-full h-auto"
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
