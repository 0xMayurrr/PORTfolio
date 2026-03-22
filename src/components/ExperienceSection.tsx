import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  period: string;
  role: string;
  active?: boolean;
}

const timeline: TimelineItem[] = [
  { period: "2024 — Present", role: "Independent Software Creator", active: true },
  { period: "2023 — Present", role: "Digital Innovator & Builder", active: true },
  { period: "2023", role: "Community Project Helper" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          // experience
        </h2>
      </motion.div>

      <div className="max-w-xl relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.period + item.role}
              className="relative pl-8"
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.1,
              }}
            >
              {/* Dot */}
              <div
                className={`absolute left-0 top-1.5 w-[15px] h-[15px] border-2 ${
                  item.active
                    ? "border-primary bg-primary/20"
                    : "border-border bg-card"
                }`}
              />
              <p className="text-xs font-mono text-muted-foreground mb-1">
                {item.period}
              </p>
              <p className="font-mono text-sm font-medium text-foreground">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
