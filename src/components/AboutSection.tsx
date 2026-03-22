import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          // about
        </h2>
      </motion.div>

      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="space-y-5 text-muted-foreground font-body text-pretty leading-relaxed"
        >
          <p>
            I got into blockchain because I was frustrated with how financial systems work — opaque, slow, and built for institutions, not people. The moment I deployed my first smart contract and realized{" "}
            <span className="text-foreground font-medium">code could replace trust</span>, I was done with traditional software.
          </p>

          <p>
            Now I spend my time at the intersection of cryptography and user experience. Most crypto products are unusable. I believe the best wallet is the one you forget you're using — it should feel like the internet, not a command line.
          </p>

          <p>
            Right now I'm deep in{" "}
            <span className="text-accent font-semibold">Credora Wallet</span> — bringing off-chain credit data on-chain to make DeFi lending actually work for real people. Before that, I built yield aggregators, governance modules, and a few things I probably shouldn't talk about.
          </p>

          <div className="border-l-2 border-primary pl-4 mt-8">
            <p className="text-sm font-mono text-foreground/80">
              Currently learning:
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Zero-knowledge proofs, account abstraction (ERC-4337), and cross-chain messaging patterns. The goal is wallets that are chain-agnostic and privacy-preserving by default.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
