import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { SiGithub, SiInstagram } from "react-icons/si";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export function NavBar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/tushar-ksk", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tusharkaushik1328", label: "LinkedIn" },
    { icon: SiInstagram, href: "https://www.instagram.com/nonit_kaushik", label: "Instagram" },
    { icon: Mail, href: "mailto:tusharkaushik1328@gmail.com", label: "Email" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/70 backdrop-blur-md border-b border-border/50 shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-display font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity">
          Tushar.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 px-6 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} className="relative group py-1">
                <span className={`text-sm font-medium transition-colors ${
                  location === link.path ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {link.name}
                </span>
                {location === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Desktop Right (Socials & Theme) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="w-px h-6 bg-border/50 mx-2" />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium p-3 rounded-xl transition-colors ${
                    location === link.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border/50 my-2" />
              <div className="flex items-center justify-center gap-6 pt-2">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
