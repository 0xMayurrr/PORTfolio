import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Terminal } from "lucide-react";
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
              <Terminal className="w-8 h-8 text-primary" />
              // freelancing
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Client work that shipped. Translating business requirements into functional digital products.
            </p>

            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-bold font-mono text-foreground">2</div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">clients served</div>
              </div>
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">i can help with</p>
                {["web apps", "landing pages", "web3 integration", "consulting"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-sm font-mono text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gigs.map((gig, i) => (
              <motion.div
                key={gig.client}
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
                    <h3 className="font-mono text-xl md:text-2xl font-bold mb-2 text-foreground">{gig.project}</h3>
                    <p className="text-sm text-accent font-mono uppercase tracking-widest mb-3">{gig.client}</p>
                    <p className="text-sm text-muted-foreground font-body mb-6 leading-relaxed">{gig.role}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {gig.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2 py-0.5 bg-secondary text-secondary-foreground border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border mt-auto">
                    <a href={gig.url} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                      <Button variant="outline" className="w-full gap-2 text-sm font-mono active:scale-[0.98]">
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </Button>
                    </a>
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

export default FreelancingSection;
