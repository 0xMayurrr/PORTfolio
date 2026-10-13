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
    title: "GlobalPay Hub",
    subtitle: "[Financial Infra] [Backend] [Integrations] [Production]",
    description: "Financial infrastructure platform integrating banking, FX, and KYC providers through a unified backend API. Engineered with webhooks, transaction retry mechanisms, error handling pipelines, and real-time ledger accounting for high reliability.",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "REST APIs", "Webhooks"],
    featured: true,
  },
  {
    title: "ShieldHire",
    subtitle: "[Hiring & Verification] [Full Stack] [SaaS]",
    description: "Enterprise applicant verification and screening system. Features automated background checks, credential validation API workflows, secure role-based access, and encrypted audit trail logging.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "RPCForge",
    subtitle: "[Distributed Systems] [API Gateway] [Infrastructure] [SaaS]",
    description: "Multi-provider high-availability RPC gateway and API load balancer. Eliminates single point-of-failure dependencies via automated node health monitoring, per-key rate limiting, and real-time telemetry analytics.",
    stack: ["Node.js", "Express", "React", "Supabase", "Docker", "Stripe", "Railway"],
    liveUrl: "https://rpcforge.dev",
    repoUrl: "https://github.com/0xMayurrr/RPCForge",
    featured: true,
  },
  {
    title: "Campus Aid Buddy",
    subtitle: "[AI Systems] [Full Stack] [Winner — Tech Masters '26]",
    description: "Role-based campus management platform powered by a Retrieval-Augmented Generation (RAG) backend. Features structured document ingestion, contextual QA pipelines, and high-concurrency request routing.",
    stack: ["React", "Node.js", "Firebase", "Gemini API", "RAG", "Tailwind CSS"],
    repoUrl: "https://github.com/0xMayurrr/Campus_Aid_buddy",
  },
  {
    title: "VibeStay",
    subtitle: "[AI / SaaS] [Full Stack] [Live]",
    description: "AI-assisted travel discovery platform. Integrates speech recognition and vector semantic search to match hospitality listings by natural language intent rather than static filter queries.",
    stack: ["JavaScript", "React", "OpenAI", "Google APIs", "REST APIs"],
    liveUrl: "https://vibestayy.netlify.app",
  },
  {
    title: "ZenProof",
    subtitle: "[Zero-Knowledge] [Identity Protocol] [Research Published]",
    description: "Privacy-preserving identity and credential verification system. Uses ZK-SNARKs and W3C DIDs to validate identity assertions without exposing raw database records.",
    stack: ["TypeScript", "ZK-SNARKs", "Semaphore", "W3C DIDs", "IPFS", "Ethereum"],
    repoUrl: "https://github.com/0xMayurrr/ZenProof",
  },
  {
    title: "Credora",
    subtitle: "[Enterprise Systems] [Distributed Ledger] [MeitY Submission]",
    description: "Enterprise credential verification infrastructure. Built with dual-layer authentication (X.509 MSP), automated anomaly detection models, and zero-knowledge data privacy modules.",
    stack: ["Go", "Hyperledger Fabric", "MetaMask", "X.509 MSP", "Node.js"],
    liveUrl: "https://credora-veripass.netlify.app",
  },
  {
    title: "ChainSplit",
    subtitle: "[Financial Tooling] [Full Stack] [Live]",
    description: "Non-custodial expense distribution application using isolated state vaults and greedy debt-minimization algorithms to optimize settlement execution.",
    stack: ["TypeScript", "React", "MongoDB", "Ethers.js", "Solidity"],
    liveUrl: "https://chainsplit.vercel.app",
    repoUrl: "https://github.com/0xMayurrr/ChainSplit",
  },
  {
    title: "OnTrade",
    subtitle: "[Automation Engine] [Workflow Builder] [AI]",
    description: "Node-based visual workflow builder. Compiles price triggers and reasoning nodes into automated, resilient execution pipelines.",
    stack: ["TypeScript", "React", "OpenAI", "Node.js", "Ethereum"],
    repoUrl: "https://github.com/0xMayurrr/Ontrade-Chain",
  },
  {
    title: "AI Smart Contract Auditor",
    subtitle: "[Static Analysis] [Security Tooling]",
    description: "Automated security engine that parses code syntax, identifies security vulnerability patterns, scores risk severity, and outputs refactored code fixes.",
    stack: ["TypeScript", "Node.js", "Solidity", "OpenAI API"],
    repoUrl: "https://github.com/0xMayurrr/AI-ContractAuditor",
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
            SELECTED_WORKS
          </h2>
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
              className="flex-shrink-0 border border-border/50 bg-card/40 backdrop-blur-md flex flex-col group relative overflow-hidden"
              style={{ width: CARD_WIDTH }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            >
              {/* Glowing Background Effect on Hover */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl z-0 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Card top bar */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-background/50">
                  <p className="text-[10px] font-mono text-primary uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {project.subtitle}
                  </p>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Clamped description to reduce text wall */}
                  <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2.5 py-1 bg-secondary/80 text-secondary-foreground rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex-1">
                        <Button variant="default" className="w-full gap-2 text-xs font-mono font-bold uppercase tracking-wider h-10 shadow-[0_0_15px_rgba(var(--primary),0.2)] hover:shadow-[0_0_25px_rgba(var(--primary),0.4)] transition-all">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Launch
                        </Button>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex-1">
                        <Button variant="outline" className="w-full gap-2 text-xs font-mono font-bold uppercase tracking-wider h-10 border-border/50 hover:bg-secondary">
                          <Github className="w-3.5 h-3.5" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
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
            className={`h-0.5 transition-all duration-300 ${i === active ? "bg-primary w-6" : "bg-border w-3"
              }`}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
