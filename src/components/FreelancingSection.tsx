import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Gig {
  client: string;
  project: string;
  role: string;
  tech: string[];
  url: string;
}

const gigs: Gig[] = [
  {
    client: "Web-2-Gether",
    project: "Freelance Hub",
    role: "Lead Platform Creator",
    tech: ["React", "Node.js"],
    url: "https://web-2-gether.vercel.app/",
  },
  {
    client: "Timetotimenews",
    project: "News Portal",
    role: "Website Creator & Consultant",
    tech: ["WordPress"],
    url: "https://timetotimenews.com/",
  },
];

const FreelancingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="freelancing" className="px-6 md:px-16 lg:px-24 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          // freelancing
        </h2>
        <p className="text-muted-foreground font-body">
          Client work that shipped.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        {gigs.map((gig, i) => (
          <motion.div
            key={gig.client}
            className="border-brutal bg-card p-6 hover:border-primary transition-colors duration-200 group"
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1 + i * 0.1,
            }}
          >
            <h3 className="font-mono text-lg font-bold mb-1">{gig.project}</h3>
            <p className="text-sm text-accent font-mono mb-2">{gig.client}</p>
            <p className="text-sm text-muted-foreground font-body mb-4">{gig.role}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {gig.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>

            <a href={gig.url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-1.5 text-xs active:scale-[0.97]">
                <ExternalLink className="w-3 h-3" />
                Visit
              </Button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FreelancingSection;
