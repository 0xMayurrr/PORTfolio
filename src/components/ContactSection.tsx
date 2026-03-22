import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Send, Mail } from "lucide-react";
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
              <Mail className="w-8 h-8 text-primary" />
              // contact
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Let's build something together. I'm always open to discussing products, design work, or potential partnerships.
            </p>

            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-sm font-bold font-mono text-foreground">&lt; 24hrs</div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">avg response time</div>
              </div>
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">good for</p>
                {["collabs", "contracts", "just saying hi"].map((item) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5 border-brutal bg-card p-6 md:p-8"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              
              <div className="relative">
                <label htmlFor="name" className="text-xs font-mono text-muted-foreground mb-1.5 block uppercase tracking-wide">
                  name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className="w-full bg-background border border-border px-4 py-3 font-mono text-sm text-foreground rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-xs font-mono text-muted-foreground mb-1.5 block uppercase tracking-wide">
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className="w-full bg-background border border-border px-4 py-3 font-mono text-sm text-foreground rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300"
                  placeholder="you@email.com"
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground mb-1.5 block uppercase tracking-wide">
                  message
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="w-full bg-background border border-border px-4 py-3 font-mono text-sm text-foreground rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300 resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <div className="relative pt-2">
                <Button
                  type="submit"
                  className="w-full gap-2 font-mono active:scale-[0.98] transition-transform duration-200 h-12 text-base"
                  disabled={status === "sending"}
                >
                  <Send className="w-4 h-4" />
                  {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send Message"}
                </Button>

                {status === "error" && (
                  <p className="text-xs font-mono text-destructive mt-3 text-center">Something went wrong. Try again.</p>
                )}
              </div>
            </motion.form>

            {/* Socials & Info */}
            <div className="flex flex-col gap-6 pt-2">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="border-brutal bg-card p-6 hover:border-primary transition-colors duration-200"
              >
                <h3 className="text-lg font-mono font-bold mb-4">// Find me online</h3>
                <div className="flex flex-col gap-4">
                  {socials.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 group-hover:text-primary border border-transparent group-hover:border-primary/20 transition-all duration-300">
                        <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">{link.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
