import React from 'react';
import { FileDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/[0.08] px-6 sm:px-10 py-4 select-none">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        
        {/* Monogram / Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center font-mono font-bold text-white text-sm shadow-md">
            JS
          </div>
          <span className="font-mono text-xs tracking-[0.22em] text-white uppercase font-bold">
            JIVTESH<span className="text-[#FF5722]">/</span>SYS
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
          <a href="#work" className="hover:text-white transition-colors">WORK</a>
          <a href="#opensource" className="hover:text-white transition-colors">OPEN SOURCE</a>
          <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </nav>

        {/* Resume Action Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-white hover:bg-white/[0.04] transition-all"
        >
          <span>RESUME</span>
          <span className="text-[#FF5722] text-sm">↓</span>
        </a>

      </div>
    </header>
  );
}
