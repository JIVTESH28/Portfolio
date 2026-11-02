import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, CheckCircle2, Terminal } from 'lucide-react';

const DOCARMOR_STEPS = [
  {
    num: '01',
    title: 'SECURITY GATE',
    detail: 'Pre-ingestion defense barrier executing zip-bomb heuristic checks, file corruption detection, recursion depth validation, and zero-day payload containment before any file touches memory.'
  },
  {
    num: '02',
    title: 'MULTI-FORMAT PARSE',
    detail: 'Native Rust parsing engine handling PDF, DOCX, XLSX, TXT, JSON, and HTML with high-fidelity structural extraction and semantic markdown preservation.'
  },
  {
    num: '03',
    title: 'PII MASKING',
    detail: 'Zero-leakage regex & NER-driven detection pipeline that automatically masks emails, phone numbers, credit cards, IP addresses, and custom entity patterns with zero latency overhead.'
  },
  {
    num: '04',
    title: 'TOKEN & COST ESTIMATE',
    detail: 'Deterministic tokenization with tiktoken-rs running in microseconds, calculating model pricing, context budget limits, and prompt optimization before LLM API invocation.'
  },
  {
    num: '05',
    title: 'PARALLEL EXECUTION',
    detail: 'True multi-core document processing leveraging Rayon work-stealing algorithms, saturating CPU threads without Python GIL bottlenecks via PyO3 bindings.'
  },
  {
    num: '06',
    title: 'MCP TOOL RUNTIME',
    detail: 'Standardized Model Context Protocol (MCP) server interface allowing Claude, Gemini, and custom autonomous multi-agent systems to invoke DocArmor inspection tools natively.'
  }
];

export default function DocArmorDeepDive() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="opensource" className="relative w-full bg-black text-[#F8FAFC] py-24 sm:py-32 border-t border-white/[0.08] select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Eyebrow and Tagline */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#FF5722]" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#FF5722] font-semibold">
              FLAGSHIP OPEN SOURCE · 4,000+ PYPI INSTALLS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
            DocArmor: Pre-LLM Security Engine
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-3xl leading-relaxed">
            A guard that sits in front of LLMs and agents. Built independently, outside my day job, and distributed as a Python package with a Rust core.
          </p>
        </div>

        {/* Step-by-Step Architecture Pipeline */}
        <div className="pt-4 border-t border-white/[0.08]">
          <span className="font-mono text-[11px] tracking-[0.26em] uppercase text-neutral-500 block mb-6">
            DOCUMENT → MODEL, STEP BY STEP
          </span>

          <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
            {DOCARMOR_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`py-5 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group ${
                    isActive ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold tracking-tight ${
                        isActive ? 'text-[#FF5722]' : 'text-neutral-500 group-hover:text-neutral-300'
                      }`}
                    >
                      {step.num}
                    </span>

                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 pl-12 md:pl-0">
                    {isActive ? (
                      <span className="w-8 h-[2px] bg-[#FF5722] hidden md:block" />
                    ) : (
                      <span className="text-neutral-600 text-xs font-mono uppercase group-hover:text-neutral-400">
                        View detail →
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep Explanation Box */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#07090e] border border-white/[0.1] shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
                <span className="font-mono text-xs text-[#FF5722] font-semibold tracking-wider uppercase">
                  ACTIVE PHASE: {DOCARMOR_STEPS[activeStep].title}
                </span>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-4xl">
                {DOCARMOR_STEPS[activeStep].detail}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <a
                href="https://github.com/JIVTESH28/docarmor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-mono text-xs uppercase font-semibold hover:bg-neutral-200 transition-colors"
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>
              <a
                href="https://pypi.org/project/docarmor/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-white/20 text-white font-mono text-xs uppercase hover:bg-white/[0.05] transition-colors"
              >
                <span>PyPI Package ↗</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
