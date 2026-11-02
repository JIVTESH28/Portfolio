import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
    >
      <nav
        className={`w-full max-w-5xl rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between ${
          scrolled ? "glass-nav shadow-2xl shadow-cyan-950/20" : "bg-white/[0.02] border border-white/5"
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-xs tracking-wider text-black shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            JS
          </div>
          <span className="font-medium text-sm tracking-tight text-neutral-200 group-hover:text-white transition-colors">
            Jivtesh Sulochan
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-neutral-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.05] transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/JIVTESH28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-cyan-400 transition-colors p-1.5"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://linkedin.com/in/jivtesh-sulochan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-cyan-400 transition-colors p-1.5"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-cyan-400 transition-colors p-1.5"
            aria-label="Twitter/X"
          >
            <BsTwitterX size={15} />
          </a>
          <a
            href="#contact"
            className="ml-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-300 p-1"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 rounded-3xl glass-nav p-6 flex flex-col gap-4 md:hidden shadow-2xl border border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-200 hover:text-cyan-400 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 pt-3 border-t border-white/10">
              <a href="https://github.com/JIVTESH28" target="_blank" rel="noreferrer" className="text-neutral-300">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/jivtesh-sulochan" target="_blank" rel="noreferrer" className="text-neutral-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
