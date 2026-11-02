import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowDownRight } from 'lucide-react';

export default function Hero() {
  const heroContentRef = useRef(null);

  // Directional stretch spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 28, stiffness: 100, mass: 1.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!heroContentRef.current) return;
    const rect = heroContentRef.current.getBoundingClientRect();
    const normX = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width - 0.5) * 2));
    const normY = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height - 0.5) * 2));
    x.set(normX * 14);
    y.set(normY * 8);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative w-full h-screen min-h-[640px] overflow-hidden select-none bg-black font-sans flex items-center">
      
      {/* ── TECHNICAL BACKGROUND GRID ── (as seen in user uploaded screenshot 1) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Subtle warm orange glow in center right */}
      <div
        className="absolute right-[20%] top-[40%] w-[450px] h-[450px] rounded-full pointer-events-none blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 87, 34, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 pt-16">
        <motion.div
          ref={heroContentRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: smoothX, y: smoothY }}
          className="flex flex-col items-start max-w-4xl"
        >
          {/* Eyebrow: PRODUCT ENGINEER · CONVERSIGHT AI */}
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
            <span className="font-mono text-xs sm:text-sm tracking-[0.24em] text-neutral-300 uppercase font-semibold">
              PRODUCT ENGINEER · CONVERSIGHT AI
            </span>
          </div>

          {/* Massively Bold Stacked Headline: JIVTESH (SOLID) / SULOCHAN. (HOLLOW OUTLINE + DOT) */}
          <div className="flex flex-col mb-8 leading-[0.88] select-none">
            <span
              className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter uppercase"
              style={{
                fontFamily: 'var(--font-headline), -apple-system, sans-serif',
              }}
            >
              JIVTESH
            </span>
            <div className="flex items-baseline">
              <span
                className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase text-transparent"
                style={{
                  fontFamily: 'var(--font-headline), -apple-system, sans-serif',
                  WebkitTextStroke: '2px #FFFFFF',
                }}
              >
                SULOCHAN
              </span>
              <span className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#FF5722] inline-block ml-1 sm:ml-2 shadow-[0_0_12px_#FF5722]" />
            </div>
          </div>

          {/* Intro Narrative */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl mb-10">
            I build backend systems, applied AI and optimization software that has to work under real operational constraints — not just in a demo.
          </p>

          {/* Buttons: View the work (pill with down-right arrow) + LET'S TALK */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-12">
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View the work</span>
              <ArrowDownRight size={18} />
            </a>

            <a
              href="#contact"
              className="font-mono text-xs sm:text-sm uppercase tracking-widest text-white hover:text-[#FF5722] transition-colors border-b border-white pb-0.5 flex items-center gap-1.5"
            >
              <span>LET'S TALK</span>
              <span>→</span>
            </a>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-5 text-neutral-400">
            <a
              href="https://github.com/JIVTESH28"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jivtesh-sulochan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jivtesh03@gmail.com"
              aria-label="Email"
              className="hover:text-white transition-colors"
            >
              <FileText size={20} />
            </a>
          </div>

        </motion.div>
      </div>

    </section>
  );
}
