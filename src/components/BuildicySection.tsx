import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const BuildicySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="buildicy" className="px-6 md:px-16 lg:px-24 py-32 bg-secondary/10 border-y border-border/50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/2"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-widest flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            LEADERSHIP
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-4">
            BUILDICY
          </h2>
          <p className="text-xl md:text-2xl font-mono text-muted-foreground mb-8">
            CTO & Co-founder
          </p>
          
          <a href="https://buildicy.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-mono font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors group">
            <span className="border-b border-primary/30 group-hover:border-foreground transition-colors pb-1">Visit Website</span>
            <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right Column: Key Areas */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/2 flex flex-col justify-center gap-8"
        >
          <div className="border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors">
            <h3 className="text-lg font-bold font-mono text-foreground mb-2">Web3 Architecture</h3>
            <p className="text-sm text-muted-foreground font-body">Leading technical delivery for decentralized protocols and blockchain client work.</p>
          </div>
          
          <div className="border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors">
            <h3 className="text-lg font-bold font-mono text-foreground mb-2">Full-Stack Delivery</h3>
            <p className="text-sm text-muted-foreground font-body">Shipping scalable systems integrating Next.js, Node, and AI endpoints.</p>
          </div>

          <div className="border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors">
            <h3 className="text-lg font-bold font-mono text-foreground mb-2">Intern Mentorship</h3>
            <p className="text-sm text-muted-foreground font-body">Structuring learning paths and mentoring interns through live production builds.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BuildicySection;
