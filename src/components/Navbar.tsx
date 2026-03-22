import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "projects", href: "#projects" },
  { label: "stack", href: "#stack" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : ""
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
    >
      <a href="#hero" className="font-mono font-bold text-lg text-foreground hover:text-primary transition-colors duration-200">
        mayur<span className="text-primary">.</span>
      </a>

      <div className="hidden sm:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
