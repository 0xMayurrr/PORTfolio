import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-16 relative">
      <div className="max-w-4xl">
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

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
