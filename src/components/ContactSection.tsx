import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    label: "github.com/0xMayurrr",
    href: "https://github.com/0xMayurrr",
    icon: Github,
  },
  {
    label: "linkedin.com/in/mayurp03",
    href: "https://www.linkedin.com/in/mayurp03/",
    icon: Linkedin,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/meelveow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 pb-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          // contact
        </h2>
        <p className="text-muted-foreground font-body">
          Let's build something together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div>
            <label htmlFor="name" className="text-xs font-mono text-muted-foreground mb-1.5 block">
              name
            </label>
            <input
              id="name"
              type="text"
              required
              maxLength={100}
              value={formState.name}
              onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
              className="w-full bg-card border-brutal px-4 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-200"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-mono text-muted-foreground mb-1.5 block">
              email
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={255}
              value={formState.email}
              onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
              className="w-full bg-card border-brutal px-4 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-200"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-mono text-muted-foreground mb-1.5 block">
              message
            </label>
            <textarea
              id="message"
              required
              maxLength={1000}
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
              className="w-full bg-card border-brutal px-4 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          <Button
            type="submit"
            variant="brutal"
            className="gap-2 font-mono active:scale-[0.97]"
            disabled={status === "sending"}
          >
            <Send className="w-3.5 h-3.5" />
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send Message"}
          </Button>

          {status === "error" && (
            <p className="text-xs font-mono text-destructive">Something went wrong. Try again.</p>
          )}
        </motion.form>

        {/* Socials */}
        <div className="space-y-4">
          {socials.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border-brutal bg-card p-4 hover:border-primary transition-all duration-200 group active:scale-[0.98]"
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + i * 0.08,
              }}
            >
              <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              <span className="font-mono text-sm text-foreground">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
