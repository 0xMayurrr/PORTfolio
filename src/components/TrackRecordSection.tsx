import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Users, Flame } from "lucide-react";

const records = [
  { name: "Tech Masters '26", result: "1st Place Winner" },
  { name: "RAC-A-THON", result: "1st Place Winner" },
  { name: "Google Dev Hackathon", result: "Runner Up" },
  { name: "HACKTU 6.0", result: "Top Finalist" },
  { name: "WE Hack", result: "Top 6 Winner" },
  { name: "Hack N Win 2.0", result: "Finalist" },
  { name: "Deep Funding Round", result: "Top 5 Global" },
  { name: "Hack Beyond Limits", result: "Lead Organizer (200+ Devs)" },
  { name: "Smart India Hackathon", result: "Technical Mentor" },
  { name: "Build on Aptos", result: "Finalist" },
];

const stats = [
  { icon: Trophy, label: "15+ HACKATHONS", sub: "Rapid Product Building" },
  { icon: Award, label: "7+ WINS & TOP FINISHES", sub: "Proven Problem Solving" },
  { icon: Users, label: "200+ PARTICIPANTS", sub: "Organized Hack Beyond Limits" },
  { icon: Flame, label: "STUDENT MENTOR", sub: "Mentored SIH & Team Builds" },
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
          <p className="text-xs font-mono text-primary uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            RAPID_EXECUTION_&_LEADERSHIP
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
            HACKATHONS_&_RECORD
          </h2>
        </motion.div>

        {/* Hackathon Summary Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-border/60 bg-card/40 p-4 rounded-lg backdrop-blur-sm flex items-center gap-4"
            >
              <div className="p-2.5 rounded-md bg-primary/10 border border-primary/20 text-primary">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold text-foreground tracking-wide">{item.label}</p>
                <p className="text-[11px] font-mono text-muted-foreground">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Record Cards */}
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
