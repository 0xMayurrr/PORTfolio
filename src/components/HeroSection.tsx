import { motion } from "framer-motion";
import { Github, ArrowDown } from "lucide-react";
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
              Available for projects
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tight text-balance mb-6"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          I build things
          <br />
          for the <span className="text-primary">decentralized</span>
          <br />
          web<span className="text-primary animate-blink">_</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-xl text-pretty mb-10 font-body"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          Blockchain developer focused on wallets, DeFi protocols, and smart contract infrastructure. Currently shipping{" "}
          <span className="text-accent font-semibold">Credora Wallet</span>.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <a href="https://github.com/mayur" target="_blank" rel="noopener noreferrer">
            <Button variant="brutal" size="lg" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </a>
          <a href="#projects">
            <Button variant="outline" size="lg">
              View Work
            </Button>
          </a>
          <a href="#contact">
            <Button variant="ghost" size="lg" className="text-muted-foreground">
              Get in Touch
            </Button>
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
