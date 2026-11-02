import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import PortfolioLoader from './components/PortfolioLoader';
import GooeyNav from './components/GooeyNav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import DocArmorDeepDive from './components/DocArmorDeepDive';
import Toolkit from './components/Toolkit';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-[#F8FAFC]">
      {/* ── 1. TURBOPACK TERMINAL COMPILER PRELOADER ── */}
      {loading && (
        <PortfolioLoader onComplete={() => setLoading(false)} />
      )}

      {/* ── 2. EXACT GOOEY NAVIGATION ── */}
      <div className="fixed top-0 left-0 right-0 z-50 py-5 px-6 sm:px-12 flex items-center justify-between pointer-events-none">
        {/* Brand */}
        <a
          href="#home"
          className="pointer-events-auto text-white text-base font-mono tracking-tight hover:opacity-80 transition-opacity font-bold flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
          <span>JIVTESH SULOCHAN</span>
        </a>

        {/* Gooey Nav */}
        <div className="pointer-events-auto">
          <GooeyNav />
        </div>

        {/* Right CTA / Resume */}
        <div className="hidden lg:block pointer-events-auto">
          <a
            href="mailto:jivtesh03@gmail.com"
            className="px-4 py-2 rounded-full border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-white hover:bg-white/[0.04] transition-all"
          >
            LET'S TALK →
          </a>
        </div>
      </div>

      {/* ── 3. STICKY HERO CURTAIN LAYER ── (pinned behind all content sections for authentic scroll reveal) */}
      <section id="hero" className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        <div id="home" className="absolute top-0 left-0 w-0 h-0 pointer-events-none" aria-hidden="true" />
        <Hero />
      </section>

      {/* ── 4. CURTAIN STACK: Slides up smoothly over the pinned Hero ── */}
      <div className="relative z-10 w-full bg-black shadow-[0_-25px_60px_rgba(0,0,0,0.95)]">
        
        {/* About section: 3-column editorial (31fr 46fr 23fr) with live CountUp milestones */}
        <About />

        {/* Experience section: physics parallax scroll displacement with cursor canvas-reveal dot matrix */}
        <Experience />

        {/* Flagship Open Source Deep Dive (DocArmor: Steps 01 to 06) */}
        <DocArmorDeepDive />

        {/* The Toolkit section: Categorized matrix with daily use / working knowledge */}
        <Toolkit />

        {/* Personal Projects section: DocArmor, ARSENAL, Face Recognition */}
        <div id="work">
          <Projects />
        </div>

        {/* Contact section: Direct copy-to-clipboard, phone, verified email */}
        <Contact />

        {/* Minimal editorial footer */}
        <Footer />

      </div>
    </div>
  );
}
