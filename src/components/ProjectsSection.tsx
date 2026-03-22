import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
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
    title: "CronoSmart",
    subtitle: "Secure Marketplace",
    description:
      "Decentralized marketplace built on Cronos EVM with escrow-based transactions and seller verification.",
    stack: ["Solidity", "Cronos EVM", "Node.js", "MongoDB", "React.js"],
    repoUrl: "https://github.com/0xMayurrr/Cronosmart",
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
  {
    title: "OrgaChain",
    subtitle: "Supply Tracker",
    description:
      "End-to-end supply chain tracking solution with on-chain provenance verification and decentralized storage.",
    stack: ["React.js", "Solidity", "Ethers.js", "IPFS", "Node.js"],
    liveUrl: "https://orga-chain.vercel.app/",
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
        delay: index * 0.08,
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        {project.featured && (
          <span className="text-xs font-mono uppercase tracking-widest text-accent border border-accent px-2 py-0.5">
            Featured
          </span>
        )}
        <h3 className="text-xl md:text-2xl font-bold font-mono tracking-tight">
          {project.title}
        </h3>
      </div>

      <p className="text-sm font-mono text-primary mb-3">{project.subtitle}</p>

      <p className="text-muted-foreground text-pretty mb-4 font-body text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
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
            <Button variant="outline" size="sm" className="gap-1.5 text-xs active:scale-[0.97]">
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </Button>
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground active:scale-[0.97]">
              <Github className="w-3 h-3" />
              Source
            </Button>
          </a>
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
