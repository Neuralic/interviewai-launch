import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["Product", "Features", "Pricing", "Customers", "Docs"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-[72px] md:h-[72px]">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="InterviewAI" className="h-10" />
            <span className="text-xl font-bold text-foreground">InterviewAI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </a>
            <a
              href="#"
              className="bg-success text-success-foreground font-semibold rounded-lg px-6 py-2.5 hover:opacity-90 transition-opacity"
            >
              Start Free Trial
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-card pt-20"
          >
            <button
              className="absolute top-5 right-5 p-2 text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xl font-medium text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a href="#" className="text-lg font-medium text-muted-foreground">Sign In</a>
              <a href="#" className="bg-success text-success-foreground font-semibold rounded-lg px-8 py-3 mt-4">
                Start Free Trial
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
