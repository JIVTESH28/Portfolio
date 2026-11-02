import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COMPILE_STEPS = [
  {
    type: 'info',
    text: '▲ Turbopack compiler (Jivtesh.sys)',
    accent: '#FF5722',
    delay: 140,
  },
  {
    type: 'meta',
    text: '- Target: jivtesh.dev (Production Environment)',
    delay: 380,
  },
  {
    type: 'meta',
    text: '- Runtime: Rust PyO3 Engine · Rayon Concurrency',
    delay: 650,
  },
  {
    type: 'progress',
    text: '○ Compiling core systems & supply planning models...',
    delay: 950,
  },
  {
    type: 'success',
    prefix: '✓',
    text: 'Compiled /src/systems/docarmor.rs',
    stats: '(4,000+ PyPI distribution)',
    delay: 1350,
  },
  {
    type: 'success',
    prefix: '✓',
    text: 'Loaded Conversight.AI CP-SAT solvers & pipelines',
    stats: '(100% test parity)',
    delay: 1750,
  },
  {
    type: 'success',
    prefix: '✓',
    text: 'Autonomous agents & vector telemetry initialized',
    stats: '(Qdrant + LiveKit active)',
    delay: 2150,
  },
  {
    type: 'ready',
    prefix: '✓',
    text: 'Ready in 284ms',
    delay: 2550,
  },
];

export default function PortfolioLoader({ onComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const hasFinishedRef = useRef(false);

  const finish = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete?.();
    }, 600);
  };

  useEffect(() => {
    const timers = [];

    COMPILE_STEPS.forEach((step, idx) => {
      const timer = setTimeout(() => {
        setCurrentStepIndex(idx + 1);
        setProgress(((idx + 1) / COMPILE_STEPS.length) * 100);
      }, step.delay);
      timers.push(timer);
    });

    const holdTimer = setTimeout(() => {
      setProgress(100);
      const fadeTimer = setTimeout(() => {
        finish();
      }, 700);
      timers.push(fadeTimer);
    }, 2600);
    timers.push(holdTimer);

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black select-none"
          style={{ background: '#000000' }}
        >
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 45% at 50% 50%, rgba(255, 87, 34, 0.06) 0%, rgba(56, 189, 248, 0.02) 40%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-[620px] px-4 sm:px-8">
            <div className="rounded-xl bg-[#050608] border border-white/[0.1] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#030406]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-neutral-400 uppercase">
                  <span className="text-[#FF5722] font-bold">▲</span>
                  <span>Turbopack compiler</span>
                </div>
                <div className="text-[10px] font-mono text-neutral-600">localhost:5173</div>
              </div>

              {/* Console log outputs */}
              <div className="p-4 sm:p-6 font-mono text-[11px] xs:text-[12px] sm:text-[13px] leading-[1.7] sm:leading-[1.8] min-h-[250px] sm:min-h-[270px] flex flex-col justify-start">
                {COMPILE_STEPS.slice(0, currentStepIndex).map((step, idx) => (
                  <div key={idx} className="flex items-baseline gap-2">
                    {step.prefix ? (
                      <span className="text-emerald-400 font-bold">{step.prefix}</span>
                    ) : (
                      <span className="text-[#FF5722] font-bold">▲</span>
                    )}
                    <span className="text-neutral-200">{step.text}</span>
                    {step.stats && (
                      <span className="text-neutral-500 text-[10.5px]">{step.stats}</span>
                    )}
                  </div>
                ))}
                {currentStepIndex < COMPILE_STEPS.length && (
                  <div className="flex items-center gap-1 text-[#FF5722] pt-1">
                    <span className="w-2 h-4 bg-[#FF5722] animate-pulse inline-block" />
                  </div>
                )}
              </div>

              {/* Orange gradient progress line */}
              <div className="w-full bg-white/[0.05] h-[2px] relative overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF5722] to-[#FF7043] transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                    boxShadow: '0 0 10px rgba(255, 87, 34, 0.7)',
                  }}
                />
              </div>

            </div>

            {/* Skip Option */}
            <div className="mt-3 flex items-center justify-between text-[10.5px] font-mono text-neutral-400 px-1">
              <span>PORTFOLIO COMPILED</span>
              <button
                onClick={finish}
                className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 tracking-wider uppercase text-[10px]"
              >
                Click anywhere to skip ↗
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
