import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const contributions = [
  { 
    repo: "OpenZeppelin", 
    type: "Fixed yarn classic v1.x install docs in Contracts Wizard", 
    status: "Merged", 
    url: "https://github.com/OpenZeppelin/contracts-wizard/pull/782" 
  },
  { 
    repo: "Scaffold-ETH 2", 
    type: "Made contractAddress optional in useScaffoldReadContract", 
    status: "Shipped", 
    url: "https://github.com/scaffold-eth/scaffold-eth-2" 
  },
  { 
    repo: "Panana Predictions", 
    type: "Added HuggingFace FinBERT sentiment oracle", 
    status: "Shipped", 
    url: "https://github.com/servrox-solutions/panana-predictions" 
  },
];

const OpenSourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="opensource" className="px-6 md:px-16 lg:px-24 py-20 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-end justify-between"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
            OPEN_SOURCE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contributions.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border bg-card/20 p-6 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-sm uppercase tracking-widest border border-primary/20">
                  {item.status}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-2">
                {item.repo}
              </h3>
              <p className="text-sm font-body text-muted-foreground mt-auto">
                {item.type}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
