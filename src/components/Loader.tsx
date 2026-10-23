import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  { text: "> initializing mayur.dev...", delay: 0 },
  { text: "> loading stack: TypeScript · Node.js · React", delay: 0.4 },
  { text: "> fetching projects... done", delay: 0.8 },
  { text: "> system ready.", delay: 1.2 },
];

function TypingLine({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 22);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started && displayed === "") return null;

  return (
    <motion.p
      className="text-sm font-mono text-muted-foreground leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <span className="text-primary">{displayed.startsWith(">") ? ">" : ""}</span>
      <span>{displayed.startsWith(">") ? displayed.slice(1) : displayed}</span>
      {displayed.length < text.length && (
        <span className="inline-block w-2 h-3.5 bg-primary/80 ml-0.5 animate-pulse align-middle" />
      )}
    </motion.p>
  );
}

export default function Loader({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setExiting(true);
      setTimeout(onDone, 600);
    }, 2600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-start justify-center px-8 md:px-24"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* top-left brand */}
          <motion.p
            className="absolute top-8 left-8 md:left-24 text-sm font-mono font-bold text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            mayur<span className="text-primary">.</span>dev
          </motion.p>

          {/* terminal window */}
          <motion.div
            className="w-full max-w-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* mac dots */}
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>

            <div className="border border-border/50 bg-card/30 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-3">
              {lines.map((line) => (
                <TypingLine key={line.text} text={line.text} delay={line.delay} />
              ))}
            </div>
          </motion.div>

          {/* bottom progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.4, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
