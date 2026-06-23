import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

const records = [
  { name: "Tech Masters '26", result: "Winner" },
  { name: "RAC-A-THON", result: "Winner" },
  { name: "Google Dev Hackathon", result: "Runner Up" },
  { name: "HACKTU 6.0", result: "Finalist" },
  { name: "WE Hack", result: "Top 6" },
  { name: "Hack N Win 2.0", result: "Finalist" },
  { name: "Deep Funding Round", result: "Top 5" },
  { name: "Build on Aptos", result: "Finalist" },
  { name: "Pivot Hackathon", result: "Finalist" },
  { name: "Hack Beyond Limits", result: "Organizer" },
  { name: "Smart India Hackathon", result: "Mentor" },
];

const TrackRecordSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="track-record" className="px-6 md:px-16 lg:px-24 py-20 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
            TRACK_RECORD
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {records.map((record, i) => (
            <motion.div
              key={record.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group border border-border bg-card/20 p-4 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors flex flex-col items-start justify-center"
            >
              <Trophy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
              <h3 className="text-sm font-bold tracking-tight text-foreground line-clamp-1 mb-1 group-hover:text-primary transition-colors">
                {record.name}
              </h3>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                {record.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
