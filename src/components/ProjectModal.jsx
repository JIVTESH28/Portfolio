import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ShieldCheck, Terminal, BrainCircuit, BookOpen } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectDetails';

export default function ProjectModal({ slug, onClose }) {
  if (!slug || !PROJECT_DETAILS[slug]) return null;

  const project = PROJECT_DETAILS[slug];

  // Prevent background body scroll while modal is active and pause Lenis smoothly
  useEffect(() => {
    window.__lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.__lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 md:p-8 select-none"
        data-lenis-prevent
      >
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Window Container (Clean fixed aspect with internal scroll) */}
        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[88vh] bg-[#08090f] border border-white/[0.14] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.98)] overflow-hidden flex flex-col z-10"
        >
          {/* Top Bar with Category & Close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#05060a] shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722]" />
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div 
            data-lenis-prevent 
            className="flex-1 min-h-0 p-6 sm:p-8 md:p-10 overflow-y-auto overscroll-contain space-y-8 font-sans"
          >
            
            {/* Title & Subtitle */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="font-mono text-xs text-[#FF5722] font-semibold tracking-widest uppercase">
                  {project.badge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-3">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* Controlled Image Frame */}
            <div className="relative w-full max-h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto max-h-[380px] object-contain object-center"
              />
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-5 rounded-2xl bg-[#040508] border border-white/[0.08]">
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                    {m.label}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-white">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Problem & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-white/[0.08]">
              <div>
                <h4 className="font-mono text-xs tracking-widest uppercase text-[#FF5722] font-bold mb-3">
                  // THE ENGINEERING CHALLENGE
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs tracking-widest uppercase text-white font-bold mb-3">
                  // ARCHITECTURAL OVERVIEW
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>
            </div>

            {/* Detailed Pipeline Breakdown */}
            <div className="pt-4 border-t border-white/[0.08]">
              <h4 className="font-mono text-xs tracking-widest uppercase text-neutral-400 font-bold mb-4">
                // SYSTEM EXECUTION LIFECYCLE
              </h4>
              <div className="space-y-3">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h5 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                      <span className="text-[#FF5722]">▶</span>
                      <span>{item.phase}</span>
                    </h5>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed pl-4">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-3 font-semibold">
                TECHNOLOGY & TOOLING STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] text-neutral-200 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer with Actions */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.08] bg-[#05060a] shrink-0">
            <span className="font-mono text-xs text-neutral-500">
              Jivtesh Sulochan · Technical Case Study
            </span>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono uppercase text-white transition-all border border-white/10"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.pypi && (
                <a
                  href={project.pypi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF5722] hover:bg-[#FF7043] text-xs font-mono uppercase text-black font-semibold transition-all"
                >
                  <span>PyPI Package ↗</span>
                </a>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
