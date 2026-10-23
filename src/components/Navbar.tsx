import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ResumeModal from "@/components/ResumeModal";

const navItems = [
  { label: "projects", href: "#projects" },
  { label: "stack", href: "#stack" },
  { label: "opensource", href: "#opensource" },
  { label: "experience", href: "#experience" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : ""
        }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
    >
      <a href="#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
        <img src="/logo.png" alt="mayur.dev" className="h-7 w-auto" />
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
        <ResumeModal buttonText="resume" variant="outline" size="sm" className="text-xs font-mono h-8 px-3" />
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-muted-foreground hover:text-foreground transition-colors duration-200"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-background border-b border-border px-6 py-4 flex flex-col gap-3 md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-200 py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <ResumeModal buttonText="View Resume" variant="default" size="sm" className="w-full justify-center" />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
