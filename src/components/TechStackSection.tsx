import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stack = [
  {
    category: "Web3 & Blockchain",
    items: [
      "Solidity", "Hardhat", "Ethers.js", "Wagmi", "OpenZeppelin",
      "ZK-SNARKs", "Semaphore", "W3C DIDs", "IPFS",
      "Ethereum", "Polygon", "Arbitrum", "Base", "Aptos"
    ]
  },
  {
    category: "Full Stack Engineering",
    items: [
      "TypeScript", "JavaScript", "React", "Next.js",
      "Node.js", "Express", "PostgreSQL", "MongoDB",
      "Supabase", "Docker", "Vercel", "Railway"
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      "OpenAI API", "Gemini API", "HuggingFace",
      "LangChain", "RAG Systems", "AI Agents",
      "FinBERT NLP"
    ]
  }
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="stack" className="px-6 md:px-16 lg:px-24 py-20 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
            CORE_STACK
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-card/20 p-6 rounded-lg backdrop-blur-sm group hover:border-primary/50 transition-colors"
            >
              <h3 className="text-sm font-mono font-bold border-b border-border/50 pb-3 mb-4 text-foreground flex items-center justify-between">
                {group.category}
                <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="text-xs font-mono px-2 py-1 bg-secondary/50 border border-border/50 rounded-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
