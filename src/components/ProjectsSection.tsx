import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  problem: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  snippet?: string;
}

const projects: Project[] = [
  {
    title: "Credora Wallet",
    description:
      "A non-custodial wallet with on-chain credit scoring integration. Users connect, verify creditworthiness, and access undercollateralized DeFi lending — all from one interface.",
    problem: "DeFi lending requires overcollateralization. Credora bridges off-chain credit data on-chain to unlock capital-efficient borrowing.",
    stack: ["Solidity", "React", "ethers.js", "Hardhat", "TypeScript"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    snippet: `// Credit attestation verification
const isValid = await credora.verify(
  attestation.hash,
  attestation.signature,
  { minScore: 650 }
);`,
  },
  {
    title: "DeFi Yield Aggregator",
    description:
      "Smart contract system that routes liquidity across protocols to maximize APY. Auto-compounds and rebalances based on gas-adjusted returns.",
    problem: "Manual yield farming across protocols is time-consuming and gas-inefficient.",
    stack: ["Solidity", "Web3.js", "Next.js", "The Graph"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "NFT Governance Module",
    description:
      "On-chain governance where voting power derives from NFT holdings and staking duration. Includes delegation, time-locked proposals, and quadratic voting.",
    problem: "Token-based governance is plutocratic. NFT-weighted voting with time-lock creates more aligned decision making.",
    stack: ["Solidity", "Foundry", "React", "wagmi"],
    repoUrl: "#",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.article
      ref={ref}
      className={`border-brutal bg-card p-6 md:p-8 transition-all duration-200 hover:border-primary group ${
        project.featured ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className={`${project.featured ? "md:flex md:gap-8" : ""}`}>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            {project.featured && (
              <span className="text-xs font-mono uppercase tracking-widest text-accent border border-accent px-2 py-0.5">
                Featured
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold font-mono tracking-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-muted-foreground text-pretty mb-3 font-body">
            {project.description}
          </p>

          <p className="text-sm text-muted-foreground/70 mb-5 font-body italic">
            ↳ {project.problem}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                  <ExternalLink className="w-3 h-3" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground">
                  <Github className="w-3 h-3" />
                  Source
                </Button>
              </a>
            )}
          </div>
        </div>

        {project.featured && project.snippet && (
          <div className="mt-6 md:mt-0 md:w-80 flex-shrink-0">
            <div className="bg-background border-brutal p-4 overflow-x-auto">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              </div>
              <pre className="text-xs font-mono text-muted-foreground leading-relaxed">
                <code>{project.snippet}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          // projects
        </h2>
        <p className="text-muted-foreground font-body">
          Things I've built that solve real problems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
