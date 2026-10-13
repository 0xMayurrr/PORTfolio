import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stack = [
  {
    category: "01. Languages",
    items: [
      "TypeScript", "JavaScript", "Go", "Python", "Java", "SQL", "C++", "Solidity"
    ]
  },
  {
    category: "02. Backend & APIs",
    items: [
      "Node.js", "Express", "REST APIs", "Webhooks", "Microservices", "System Architecture", "Middleware"
    ]
  },
  {
    category: "03. Frontend",
    items: [
      "React", "Next.js", "Tailwind CSS", "Redux", "HTML5", "CSS3", "Vite"
    ]
  },
  {
    category: "04. Mobile",
    items: [
      "React Native", "Expo", "Mobile UI"
    ]
  },
  {
    category: "05. Databases & Storage",
    items: [
      "PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "Schema Design"
    ]
  },
  {
    category: "06. Cloud & Infrastructure",
    items: [
      "Docker", "Vercel", "Railway", "AWS", "Linux", "Git / GitHub", "CI/CD"
    ]
  },
  {
    category: "07. Testing & Engineering",
    items: [
      "Vitest", "Jest", "Unit Testing", "API Security", "Performance Tuning", "Debugging"
    ]
  },
  {
    category: "08. AI & Machine Learning",
    items: [
      "OpenAI API", "Gemini API", "RAG Systems", "LangChain", "HuggingFace", "AI Agents", "FinBERT NLP"
    ]
  },
  {
    category: "09. Blockchain & Web3",
    items: [
      "Hardhat", "Ethers.js", "Wagmi", "OpenZeppelin", "ZK-SNARKs", "Semaphore", "W3C DIDs", "IPFS", "Ethereum", "Hyperledger Fabric"
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
