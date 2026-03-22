import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Layers } from "lucide-react";

interface TechCategory {
  name: string;
  items: { name: string; level: "proficient" | "learning" }[];
}

const techCategories: TechCategory[] = [
  {
    name: "Web3",
    items: [
      { name: "Solidity", level: "proficient" },
      { name: "Ethereum", level: "proficient" },
      { name: "Web3.js/Ethers.js", level: "proficient" },
      { name: "Hardhat", level: "proficient" },
      { name: "MetaMask", level: "proficient" },
      { name: "IPFS", level: "proficient" },
      { name: "Hyperledger Fabric", level: "proficient" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", level: "proficient" },
      { name: "Next.js", level: "proficient" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Three.js", level: "learning" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", level: "proficient" },
      { name: "Python", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "MySQL", level: "proficient" },
    ],
  },
  {
    name: "AI/ML",
    items: [
      { name: "OpenAI API", level: "proficient" },
      { name: "Machine Learning", level: "learning" },
      { name: "Data Analysis", level: "proficient" },
      { name: "LangChain", level: "learning" },
    ],
  },
  {
    name: "Deployment",
    items: [
      { name: "Vercel", level: "proficient" },
      { name: "Docker", level: "proficient" },
      { name: "Git/GitHub", level: "proficient" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Figma", level: "proficient" },
      { name: "VS Code", level: "proficient" },
      { name: "Postman", level: "proficient" },
    ],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [activeCategory, setActiveCategory] = useState("Web3");

  return (
    <section id="stack" className="px-6 md:px-16 lg:px-24 py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <div className="sticky top-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
              <Layers className="w-8 h-8 text-primary" />
              // stack
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              My technical arsenal. Evolving constantly to build faster, smarter, and scalable applications.
            </p>

            {/* Category list */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">categories</p>
              {techCategories.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between">
                  <span className="text-sm font-mono text-foreground">{cat.name}</span>
                  <span className="text-xs font-mono text-muted-foreground">{cat.items.length} tools</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8">
          <div className="flex flex-wrap gap-2 mb-8 p-1 bg-background/50 rounded-lg border border-border inline-flex">
            {techCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`text-sm font-mono px-4 py-2 rounded-md transition-all duration-300 active:scale-[0.97] ${
                  activeCategory === cat.name
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-muted"
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
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {techCategories
              .find((c) => c.name === activeCategory)
              ?.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.05,
                  }}
                  className="bg-card/40 backdrop-blur-sm border border-border/50 p-4 rounded-xl flex flex-col items-center justify-center text-center group hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_15px_rgba(var(--primary),0.1)] transition-all duration-300"
                >
                  <span className="font-mono text-sm md:text-base font-medium mb-1 group-hover:text-primary transition-colors">{item.name}</span>
                  {item.level === "learning" ? (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      learning
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground group-hover:text-primary/70 transition-colors">
                      proficient
                    </span>
                  )}
                </motion.div>
              ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
