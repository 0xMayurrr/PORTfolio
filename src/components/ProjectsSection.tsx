import { motion, useInView, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, FolderGit2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Credora",
    subtitle: "Digital Certificate Issuer",
    description:
      "Blockchain-based certificate issuance and verification platform using Hyperledger Fabric with zero-knowledge proofs for privacy-preserving credential validation.",
    stack: ["Hyperledger Fabric", "Node.js", "React.js", "ZK Proofs", "IPFS"],
    liveUrl: "https://credora.netlify.app/",
    featured: true,
  },
  {
    title: "RPCForge",
    subtitle: "Gateway Service",
    description:
      "Custom JSON-RPC gateway service for Ethereum node interactions with request routing, caching, and load balancing.",
    stack: ["Node.js", "Express.js", "React.js", "JSON-RPC", "Ethereum"],
    repoUrl: "https://github.com/0xMayurrr/RPCForge",
  },
  {
    title: "ChainSplit",
    subtitle: "Decentralized Expense Splitting",
    description:
      "A decentralized expense splitting platform on Cronos EVM using a greedy debt-minimization algorithm for peer-to-peer settlements without middlemen.",
    stack: ["Solidity", "Cronos EVM", "React", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://chain-split.vercel.app",
    repoUrl: "https://github.com/0xMayurrr/ChainSplit",
  },
  {
    title: "OnTrade",
    subtitle: "Automated Trading Tool",
    description:
      "Visual workflow builder for automated crypto trading strategies using AI-powered decision nodes and on-chain execution.",
    stack: ["React.js", "React Flow", "Node.js", "OpenAI API", "Ethers.js"],
    liveUrl: "https://on-trade.netlify.app/",
  },
  {
    title: "Campus Aid",
    subtitle: "Smart College Assistant",
    description:
      "AI-powered campus assistant that handles queries about courses, events, and resources using natural language processing.",
    stack: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "Firebase"],
    liveUrl: "https://campus-aid-buddy-440ad.web.app/",
  },
  {
    title: "Rotaract Dashboard",
    subtitle: "Charity Manager",
    description:
      "Full-stack management platform for Rotaract club operations with transparent fund tracking on blockchain.",
    stack: ["React.js", "Node.js", "MongoDB", "Hyperledger Fabric", "REST APIs"],
    liveUrl: "https://rotdashboard.netlify.app/",
  },
];

const CARD_WIDTH = 360;
const CARD_GAP = 20;
const STEP = CARD_WIDTH + CARD_GAP;

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(projects.length - 1, a + 1));

  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24 overflow-hidden">
      {/* Header */}
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            // projects
          </h2>
          <p className="text-muted-foreground font-body text-sm">
            things i've built. drag or use the arrows.
          </p>
        </div>

        {/* Arrow controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground mr-2">
            {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            onClick={prev}
            disabled={active === 0}
            className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            disabled={active === projects.length - 1}
            className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Carousel track */}
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-5 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: -((projects.length - 1) * STEP),
            right: 0,
          }}
          dragElastic={0.08}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          animate={{ x: -(active * STEP) }}
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
          onDragEnd={(_, info) => {
            const threshold = STEP / 3;
            if (info.offset.x < -threshold) next();
            else if (info.offset.x > threshold) prev();
          }}
          style={{ width: `${projects.length * STEP}px` }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="flex-shrink-0 border-brutal bg-card flex flex-col"
              style={{ width: CARD_WIDTH }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            >
              {/* Card top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                {project.featured && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary border border-primary px-2 py-0.5">
                    featured
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl font-bold font-mono tracking-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 bg-secondary text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Button variant="outline" size="sm" className="gap-1.5 text-xs font-mono active:scale-[0.97]">
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </Button>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="sm" className="gap-1.5 text-xs font-mono text-muted-foreground active:scale-[0.97]">
                        <Github className="w-3 h-3" />
                        Source
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      {/* Dot indicators */}
      <motion.div
        className="flex gap-1.5 mt-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-0.5 transition-all duration-300 ${
              i === active ? "bg-primary w-6" : "bg-border w-3"
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
