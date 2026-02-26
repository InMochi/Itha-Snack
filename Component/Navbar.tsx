import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Promo", href: "#promo" },
  { label: "Find Us", href: "#findus" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-warm-brown/95 backdrop-blur-md border-b border-primary/20"
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-display text-2xl font-bold text-primary-foreground">
          Itha<span className="text-primary">Snack</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Buy Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-warm-brown/95 backdrop-blur-md border-t border-primary/20 pb-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-primary-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#buy"
              onClick={() => setOpen(false)}
              className="block text-center bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Buy Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
