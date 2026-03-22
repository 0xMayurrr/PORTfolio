import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface TechCategory {
  name: string;
  items: { name: string; level: "proficient" | "learning" }[];
}

const techCategories: TechCategory[] = [
  {
    name: "Blockchain",
    items: [
      { name: "Solidity", level: "proficient" },
      { name: "ethers.js", level: "proficient" },
      { name: "Web3.js", level: "proficient" },
      { name: "Hardhat", level: "proficient" },
      { name: "Foundry", level: "proficient" },
      { name: "The Graph", level: "learning" },
      { name: "wagmi", level: "proficient" },
      { name: "Chainlink", level: "learning" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", level: "proficient" },
      { name: "Next.js", level: "proficient" },
      { name: "TypeScript", level: "proficient" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Framer Motion", level: "learning" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", level: "proficient" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "Redis", level: "learning" },
      { name: "GraphQL", level: "proficient" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", level: "proficient" },
      { name: "Docker", level: "proficient" },
      { name: "CI/CD", level: "proficient" },
      { name: "Vercel", level: "proficient" },
    ],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [activeCategory, setActiveCategory] = useState("Blockchain");

  return (
    <section id="stack" className="px-6 md:px-16 lg:px-24 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          // stack
        </h2>
        <p className="text-muted-foreground font-body">
          What I work with daily.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-8">
        {techCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`text-sm font-mono px-4 py-2 border-2 transition-all duration-150 active:scale-[0.97] ${
              activeCategory === cat.name
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
        {techCategories
          .find((c) => c.name === activeCategory)
          ?.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.05,
              }}
              className="border-brutal bg-card p-4 flex items-center justify-between group hover:border-primary transition-colors duration-200"
            >
              <span className="font-mono text-sm font-medium">{item.name}</span>
              {item.level === "learning" && (
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                  learning
                </span>
              )}
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default TechStackSection;
