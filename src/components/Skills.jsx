import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Layers, Database, Cpu, Wrench } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: '01',
    title: 'LANGUAGES',
    accent: '#FF5722',
    icon: Terminal,
    skills: ['Python', 'Rust', 'Go', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: '02',
    title: 'FRAMEWORKS & AI ORCHESTRATION',
    accent: '#F97316',
    icon: Layers,
    skills: ['LangChain', 'CrewAI', 'LlamaIndex', 'TensorFlow', 'PyTorch', 'Model Context Protocol (MCP)'],
  },
  {
    id: '03',
    title: 'OPTIMIZATION & ENGINES',
    accent: '#EAB308',
    icon: Cpu,
    skills: ['OR-Tools (CP-SAT)', 'Rayon Work-Stealing', 'PyO3 Native Bindings', 'Supply Chain SDK', 'tiktoken-rs'],
  },
  {
    id: '04',
    title: 'DATABASES & VECTOR TOPOLOGIES',
    accent: '#38BDF8',
    icon: Database,
    skills: ['Qdrant Vector DB', 'Redis', 'PostgreSQL', 'DuckDB', 'MongoDB'],
  },
  {
    id: '05',
    title: 'DEV TOOLS & INFRA',
    accent: '#F59E0B',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Docker', 'Google Cloud Platform', 'Ollama', 'LM Studio', 'Vercel'],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="w-full relative overflow-hidden py-20 sm:py-28 md:py-32 bg-black text-[#F8FAFC]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 20% 30%, rgba(56, 189, 248, 0.035) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 85% 70%, rgba(245, 158, 11, 0.03) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 md:mb-14 cursor-default w-fit group">
          <span className="w-5 h-px bg-[#FF5722]" aria-hidden="true" />
          <p className="text-xs sm:text-sm tracking-[0.22em] uppercase font-mono m-0 font-semibold text-[#FF5722]">
            SKILLS & TECHNICAL ARCHITECTURE
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="relative rounded-2xl bg-[#090b10] border border-white/[0.08] p-6 overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:border-white/20 transition-all group"
              >
                {/* Accent Top Stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-75 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, ${cat.accent} 0%, transparent 80%)`,
                  }}
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-bold tracking-tight" style={{ color: cat.accent }}>
                      {cat.id}
                    </span>
                    <span className="text-white/20">/</span>
                    <h3 className="font-sans text-[14px] font-bold uppercase tracking-tight text-white m-0">
                      {cat.title}
                    </h3>
                  </div>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/[0.08]"
                    style={{ color: cat.accent }}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] font-mono text-xs text-neutral-200 tracking-wide hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.accent }} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
