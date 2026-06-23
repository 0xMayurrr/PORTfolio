import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const insights = [
  {
    title: "Beyond Identity: Rethinking Trust Infrastructure Through Zero-Knowledge Verification",
    type: "Architecture Paper",
    url: "https://coderlegion.com/20276/beyond-identity-rethinking-trust-infrastructure-through-zero-knowledge-verification"
  },
  {
    title: "The Future of Collective Intelligence: Where DAOs, Governance & AI Collide",
    type: "Essay",
    url: "https://medium.com/@mayurkarthick2006/the-future-of-collective-intelligence-where-daos-governance-ai-collide-adb7cc189bfc"
  },
  {
    title: "Where does ZK selective disclosure actually break in real-world credentials?",
    type: "Research Note",
    url: "#"
  },
  {
    title: "What actually fails in RPC infra at scale? Stale cache vs. Consistency.",
    type: "Research Note",
    url: "#"
  }
];

const InsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="insights" className="px-6 md:px-16 lg:px-24 py-32 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-widest flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            WRITING_AND_RESEARCH
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
            INSIGHTS
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-border/50">
          {insights.map((item, i) => {
            const isClickable = item.url !== "#";
            const Container = isClickable ? "a" : "div";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              >
                <Container
                  href={isClickable ? item.url : undefined}
                  target={isClickable ? "_blank" : undefined}
                  rel={isClickable ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border/50 transition-colors duration-300 ${isClickable ? "hover:bg-secondary/20 cursor-pointer px-4 -mx-4 rounded-lg" : "px-4 -mx-4"}`}
                >
                  <div className="flex flex-col gap-2 md:max-w-[70%]">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      {item.type}
                    </p>
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 ${isClickable ? "group-hover:text-primary" : ""}`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="mt-4 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4">
                    <div className={`h-px w-12 hidden md:block transition-colors duration-300 ${isClickable ? "bg-primary" : "bg-border"}`} />
                    {isClickable ? (
                      <ArrowUpRight className="w-6 h-6 text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                    ) : (
                      <span className="text-xs font-mono text-muted-foreground uppercase">Internal</span>
                    )}
                  </div>
                </Container>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
