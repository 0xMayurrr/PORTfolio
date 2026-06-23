import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Piece {
  typeLabel: string;
  title: string;
  description: string;
  cta: string;
  url: string;
}

const pieces: Piece[] = [
  {
    typeLabel: "Architecture Paper",
    title: "Beyond Identity: Rethinking Trust Infrastructure Through Zero-Knowledge Verification",
    description: "Full technical architecture of ZenProof — ZK-SNARK credential proofs, W3C DID integration, and privacy-preserving selective disclosure. IEEE-style paper covering the protocol design, trust model, and implementation approach.",
    cta: "Read Paper",
    url: "https://coderlegion.com/20276/beyond-identity-rethinking-trust-infrastructure-through-zero-knowledge-verification",
  },
  {
    typeLabel: "Essay · Medium",
    title: "The Future of Collective Intelligence: Where DAOs, Governance & AI Collide",
    description: "Exploring how AI-assisted governance tools change coordination in DAOs — reputation systems, decision support, and what it means when AI moves from tool to participant in decentralized governance.",
    cta: "Read Essay",
    url: "https://medium.com/@mayurkarthick2006/the-future-of-collective-intelligence-where-daos-governance-ai-collide-adb7cc189bfc",
  },
];

const WritingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="writing" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            // writing & research
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {pieces.map((piece, i) => (
            <motion.div
              key={piece.title}
              className="h-full"
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.1,
              }}
            >
              <div className="h-full flex flex-col border-brutal bg-card p-6 md:p-8 hover:border-primary transition-colors duration-200">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-3">
                    {piece.typeLabel}
                  </p>
                  <h3 className="font-mono text-xl font-bold mb-4 text-foreground leading-snug">
                    {piece.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                    {piece.description}
                  </p>
                </div>
                <div className="pt-6 mt-auto">
                  <a href={piece.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full gap-2 text-sm font-mono active:scale-[0.98]">
                      {piece.cta}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
