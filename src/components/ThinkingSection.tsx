import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, ExternalLink } from "lucide-react";

interface Thought {
  category: string;
  heading: string;
  body: string;
  linkText?: string;
  linkUrl?: string;
}

const thoughts: Thought[] = [
  {
    category: "ZK / Identity",
    heading: "Where does ZK selective disclosure actually break?",
    body: "The ZenProof architecture works cleanly in theory — prove X without revealing Y. But in real credential systems, the correlation problem doesn't disappear just because you've hidden the raw data. I'm working through where selective disclosure is genuinely privacy-preserving versus where it just defers the leak.",
  },
  {
    category: "RPC Infra",
    heading: "What actually fails in RPC infra at scale?",
    body: "Building RPCForge surfaced the obvious failure modes — node downtime, latency spikes, rate limit cliffs. The subtler ones are more interesting: how stale does a cached RPC response have to be before it's actively unsafe? Where does multi-node failover introduce its own consistency bugs?",
  },
  {
    category: "Multi-chain",
    heading: "Soroban vs EVM — what's genuinely different?",
    body: "Working on a Stellar/Soroban ZK integration right now. Most multi-chain comparisons stay surface-level. The execution model diverges in ways that matter for protocol architecture — not just syntax, but how you think about state, fees, and composability.",
  },
  {
    category: "AI + Governance",
    heading: "Can AI improve DAO governance, or does it just move the trust problem?",
    body: "AI-assisted decision support in DAOs sounds compelling — smarter proposals, better participation, data-driven votes. But the trust problem doesn't disappear; it migrates to whoever trains the model. I wrote about this intersection.",
    linkText: "Read the essay",
    linkUrl: "https://medium.com/@mayurkarthick2006/the-future-of-collective-intelligence-where-daos-governance-ai-collide-adb7cc189bfc",
  },
];

const ThinkingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="thinking" className="px-6 md:px-16 lg:px-24 py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <Brain className="w-8 h-8 text-primary" />
            // what i'm thinking about
          </h2>
          <p className="text-muted-foreground font-body text-sm max-w-2xl">
            Problems I'm actively working through — not answers, just the questions.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {thoughts.map((thought, i) => (
            <motion.div
              key={thought.category}
              className="h-full"
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.1,
              }}
            >
              <div className="h-full flex flex-col border-brutal bg-card p-6 md:p-8 hover:border-primary transition-colors duration-200">
                <div className="flex-1">
                  <p className="text-xs text-primary font-mono uppercase tracking-widest mb-3">
                    {thought.category}
                  </p>
                  <h3 className="font-mono text-xl font-bold mb-4 text-foreground leading-snug">
                    {thought.heading}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                    {thought.body}
                  </p>
                </div>
                {thought.linkUrl && thought.linkText && (
                  <div className="pt-4 border-t border-border mt-auto">
                    <a
                      href={thought.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono hover:text-primary transition-colors"
                    >
                      {thought.linkText}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThinkingSection;
