import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const Loader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [logs, setLogs] = useState([
    "INITIALIZING CORE SYSTEM...",
    "LOADING RUST VIRTUAL ENVIRONMENT...",
    "MOUNTING COMPUTE ENGINE & RAYON RUNTIME...",
    "FETCHING ENTERPRISE ARTIFACTS..."
  ]);
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 70);

    const logTimer = setInterval(() => {
      setCurrentLog((prev) => (prev < 3 ? prev + 1 : prev));
    }, 450);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050608] select-none px-6"
    >
      {/* Ambient Radial background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 70%)"
        }}
      />

      <div className="relative w-full max-w-[580px]">
        {/* Terminal Window Box */}
        <div className="rounded-2xl bg-[#090b10] border border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden backdrop-blur-xl">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#06080c]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-neutral-400 uppercase">
              <Terminal size={13} className="text-cyan-400" />
              <span>Turbopack · Jivtesh.sys</span>
            </div>
            <div className="text-[11px] font-mono text-cyan-400/80 font-semibold">
              {percent}%
            </div>
          </div>

          {/* Console stream */}
          <div className="p-6 font-mono text-xs text-neutral-300 min-h-[170px] flex flex-col justify-end space-y-2">
            {logs.slice(0, currentLog + 1).map((log, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">▲</span>
                <span className="text-neutral-300">{log}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-cyan-400 pt-1">
              <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
              <span className="text-neutral-500 text-[11px]">Compiling production build...</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/[0.05] h-[2px] relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-500"
              style={{
                width: `${percent}%`,
                boxShadow: "0 0 12px rgba(6, 182, 212, 0.8)"
              }}
            />
          </div>

        </div>

        {/* Skip trigger */}
        <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-neutral-500 px-2">
          <span>PORTFOLIO COMPILED</span>
          <button
            onClick={onComplete}
            className="hover:text-cyan-400 transition-colors cursor-pointer uppercase tracking-wider text-[10px]"
          >
            Click to enter ↗
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
