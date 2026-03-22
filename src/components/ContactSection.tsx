import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Twitter } from "lucide-react";

const links = [
  {
    label: "mayur@email.dev",
    href: "mailto:mayur@email.dev",
    icon: Mail,
  },
  {
    label: "github.com/mayur",
    href: "https://github.com/mayur",
    icon: Github,
  },
  {
    label: "@mayur_dev",
    href: "https://twitter.com/mayur_dev",
    icon: Twitter,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
          No forms. Just reach out.
        </p>
      </motion.div>

      <div className="space-y-4 max-w-md">
        {links.map((link, i) => (
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
              delay: 0.1 + i * 0.08,
            }}
          >
            <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            <span className="font-mono text-sm text-foreground">{link.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
