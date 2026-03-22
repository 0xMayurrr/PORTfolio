import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitPullRequest, Code2 } from "lucide-react";

interface Contribution {
  repo: string;
  repoUrl: string;
  pr?: string;
  type: string;
  status: string;
}

const contributions: Contribution[] = [
  {
    repo: "OpenZeppelin/contracts-wizard",
    repoUrl: "https://github.com/OpenZeppelin/contracts-wizard",
    pr: "#782",
    type: "Documentation",
    status: "Submitted, CLA signed ✅",
  },
  {
    repo: "scaffold-eth/scaffold-eth-2",
    repoUrl: "https://github.com/scaffold-eth/scaffold-eth-2",
    type: "TypeScript + Blockchain",
    status: "Submitted ✅",
  },
  {
    repo: "servrox-solutions/panana-predictions",
    repoUrl: "https://github.com/servrox-solutions/panana-predictions",
    type: "API + React + CSS",
    status: "Submitted ✅",
  },
];

const OpenSourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="opensource" className="px-6 md:px-16 lg:px-24 py-24">
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
              <Code2 className="w-8 h-8 text-primary" />
              // open source
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Giving back to the ecosystem. I believe in collaborative building and open knowledge.
            </p>

            <div className="space-y-4">
              {[
                { value: "3", label: "PRs submitted" },
                { value: "3", label: "repos contributed" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary pl-4">
                  <div className="text-2xl font-bold font-mono text-foreground">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
              <p className="text-xs font-mono text-muted-foreground pt-2 leading-relaxed">
                focused on documentation,<br />useability, and bug fixes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {contributions.map((contrib, i) => (
              <motion.div
                key={contrib.repo}
                initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
                animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 + i * 0.08,
                }}
              >
                <div className="border-brutal bg-card p-5 md:p-6 hover:border-primary transition-colors duration-200">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <GitPullRequest className="w-4 h-4 text-primary flex-shrink-0" />
                      <a
                        href={contrib.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 truncate"
                      >
                        {contrib.repo}
                        {contrib.pr && <span className="text-muted-foreground ml-2 text-sm">{contrib.pr}</span>}
                      </a>
                    </div>
                    <a
                      href={contrib.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex-shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pl-6">
                    <span className="text-xs font-mono px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                      {contrib.type}
                    </span>
                    <span className="text-xs font-mono text-primary flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      {contrib.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OpenSourceSection;
