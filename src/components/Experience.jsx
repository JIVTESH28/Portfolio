import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValue,
} from 'framer-motion';
import { CanvasRevealEffect } from './ui/canvas-reveal-effect';
import { Briefcase, Calendar, CheckCircle2, Award, Zap, Layers, Cpu, ArrowUpRight } from 'lucide-react';

function ExperienceWorkCard({
  colors = [[255, 87, 34]],
  radius = 260,
  style,
  className,
  children,
}) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    mousePosRef.current = { x, y };
  }

  function handleMouseEnter(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    mousePosRef.current = { x, y };
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  const accentRgb = colors[0].join(', ');

  return (
    <motion.div style={style} className="relative h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 360, damping: 22 }}
        className={`group relative rounded-[28px] bg-[#07090e] p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-white/[0.1] hover:border-[rgba(${accentRgb},0.4)] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.95)] hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.98),0_0_32px_-4px_rgba(${accentRgb},0.28)] transition-all duration-400 overflow-hidden h-full ${className || ''}`}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgb(${accentRgb}) 50%, transparent 100%)`,
            opacity: isHovering ? 1 : 0.6,
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[28px] overflow-hidden transition-opacity duration-300"
          style={{ opacity: isHovering ? 1 : 0 }}
          aria-hidden="true"
        >
          <CanvasRevealEffect
            animationSpeed={3.5}
            containerClassName="absolute inset-0 pointer-events-none"
            colors={colors}
            dotSize={2.0}
            gridSpacing={7}
            radius={radius}
            mousePosRef={mousePosRef}
          />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full pointer-events-auto">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    setIsMobile(mql.matches);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 92%', 'start 8%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.0005,
  });

  const d = isMobile ? 0.45 : 1;

  const headingX = useTransform(smoothProgress, [0, 0.98], [-60 * d, 0]);
  const headingY = useTransform(smoothProgress, [0, 0.98], [-40 * d, 0]);
  const headingOpacity = useTransform(smoothProgress, [0, 0.5], [0.4, 1]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full bg-black text-[#F8FAFC] pt-24 sm:pt-32 pb-28 sm:pb-36 overflow-hidden select-none"
    >
      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

        {/* ── CRISP CLEAN EDITORIAL HEADING ── */}
        <div className="mb-14 sm:mb-18">
          <div className="flex flex-col items-start gap-2">
            
            {/* Main Headline */}
            <motion.h2
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                    x: headingX,
                    y: headingY,
                    opacity: headingOpacity,
                  }
              }
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none m-0 font-sans select-none"
            >
              EXPERIENCE
            </motion.h2>

            {/* Clean Cursive Sub-Badge (Positioned cleanly below to avoid overlapping text) */}
            <div className="flex items-center gap-2 pt-1">
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF5722] tracking-normal select-none"
              >
                at Conversight.AI
              </span>
            </div>

          </div>

          {/* Sub-label banner */}
          <div className="mt-5 flex flex-wrap items-center gap-3 pt-3 border-t border-white/[0.08]">
            <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#FF5722] uppercase font-bold">
              CONVERSIGHT.AI · TOTAL TENURE: FEB 2025 – PRESENT (~2 YEARS)
            </span>
            <span className="text-white/20">•</span>
            <span className="font-mono text-xs sm:text-sm tracking-wider text-neutral-300">
              Coimbatore, Tamil Nadu
            </span>
          </div>
        </div>

        {/* ── DUAL TIMELINE BREAKDOWN: FULL-TIME & INTERNSHIP ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Phase 1: Full-Time Role */}
          <div className="rounded-3xl bg-[#090b12] border border-[#FF5722]/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#FF5722]/20 border-b border-l border-[#FF5722]/40 rounded-bl-xl font-mono text-[11px] text-[#FF5722] font-bold uppercase tracking-wider">
              CURRENT POSITION
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
                <h3 className="text-2xl font-bold text-white tracking-tight">Product Engineer</h3>
              </div>
              <div className="font-mono text-xs text-neutral-400 mb-6 flex items-center gap-2">
                <span className="text-[#FF5722]">Conversight.AI, Coimbatore</span>
                <span>•</span>
                <span>June 2026 – Present</span>
              </div>

              <ul className="space-y-3.5 text-sm text-neutral-300 leading-relaxed font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
                  <span>Led the design and development of the <strong>Supply Planner</strong> application end-to-end, partnering closely with cross-functional teams to architect a custom Supply Chain SDK usable standalone or integrated into client ERP tools.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
                  <span>Collaborated with engineering & product teams to implement planning and optimization logic using Google OR-Tools CP-SAT solver, constructing automated purchase order (PO) generation workflows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
                  <span>Formulated Minimum Order Quantity (MOQ) and dynamic Safety Stock (SS) calculations rooted in rigorous mathematical models and statistical distribution curves.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
                  <span>Maintained two mission-critical production platforms powering enterprise inventory replenishment decisions.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/[0.08]">Python</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/[0.08]">OR-Tools CP-SAT</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/[0.08]">Supply Chain SDK</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/[0.08]">ERP Integrations</span>
            </div>
          </div>

          {/* Phase 2: Internship Role */}
          <div className="rounded-3xl bg-[#090b12] border border-white/[0.1] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-white/[0.05] border-b border-l border-white/10 rounded-bl-xl font-mono text-[11px] text-neutral-400 font-semibold uppercase tracking-wider">
              1 YEAR 4 MONTHS
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
                <h3 className="text-2xl font-bold text-white tracking-tight">Product Engineering Intern</h3>
              </div>
              <div className="font-mono text-xs text-neutral-400 mb-6 flex items-center gap-2">
                <span className="text-[#38BDF8]">Conversight.AI, Coimbatore</span>
                <span>•</span>
                <span>Feb 10, 2025 – May 2026</span>
              </div>

              <ul className="space-y-3.5 text-sm text-neutral-300 leading-relaxed font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Contributed to core AI agent development, supporting the architectural design, prompt validation, and stress-testing of production agentic workflows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Demonstrated strong technical ownership and collaborative delivery across engineering sprints, earning direct transition into a full-time engineering position.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Researched multi-agent graph orchestration and tool-calling execution bounds, establishing baseline metrics for low-latency agent tasks.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/[0.08]">AI Agents</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/[0.08]">Agentic Workflows</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/[0.08]">Prompt Engineering</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/[0.08]">Python</span>
            </div>
          </div>

        </div>

        {/* ── TECHNICAL DEEP-DIVE SPOTLIGHT CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">

          {/* CARD 01 */}
          <ExperienceWorkCard colors={[[255, 87, 34], [255, 112, 67]]}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-[#FF5722] uppercase font-semibold">
                  CONSTRAINT OPTIMIZATION
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                CP-SAT Solver Integration
              </h3>

              <p className="text-[13.5px] text-neutral-300 leading-relaxed font-light mb-5">
                Modeled discrete multi-constraint planning equations using Google OR-Tools CP-SAT solver, mapping vendor lead times, warehouse volume caps, and demand surges into deterministic PO recommendations.
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/[0.08] font-mono text-xs text-[#FF5722]">
              Algorithm: Integer & Constraint Satisfaction
            </div>
          </ExperienceWorkCard>

          {/* CARD 02 */}
          <ExperienceWorkCard colors={[[245, 158, 11], [251, 191, 36]]}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-[#F59E0B] uppercase font-semibold">
                  PRODUCTION RELIABILITY
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                2 Production Systems Live
              </h3>

              <p className="text-[13.5px] text-neutral-300 leading-relaxed font-light mb-5">
                Maintained 99.9% availability across dual production instances serving enterprise clients, validating input integrity and eliminating inventory stockouts through proactive safety stock alerts.
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/[0.08] font-mono text-xs text-[#F59E0B]">
              Uptime & Performance: Mission-Critical
            </div>
          </ExperienceWorkCard>

          {/* CARD 03 */}
          <ExperienceWorkCard colors={[[56, 189, 248], [14, 165, 233]]}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-[#38BDF8] uppercase font-semibold">
                  CAREER PROGRESSION
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                Internship → Full-Time
              </h3>

              <p className="text-[13.5px] text-neutral-300 leading-relaxed font-light mb-5">
                Transitioned seamlessly from an intensive 16-month product engineering internship into full-time product engineer role, taking complete technical ownership of core supply chain SDK architectures.
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/[0.08] font-mono text-xs text-[#38BDF8]">
              Proven Ownership & Growth
            </div>
          </ExperienceWorkCard>

        </div>

      </div>
    </section>
  );
}
