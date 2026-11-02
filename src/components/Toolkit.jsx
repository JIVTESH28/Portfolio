import React from 'react';

const TOOLKIT_CATEGORIES = [
  {
    num: '01',
    name: 'LANGUAGES',
    daily: ['Python', 'Rust'],
    working: ['Go', 'JavaScript']
  },
  {
    num: '02',
    name: 'BACKEND & ARCHITECTURE',
    daily: ['APIs', 'Backend systems', 'Data processing'],
    working: ['Modular monoliths', 'Microservices']
  },
  {
    num: '03',
    name: 'AI ENGINEERING',
    daily: ['RAG', 'Agentic AI', 'Tool orchestration', 'MCP', 'LangChain'],
    working: ['CrewAI', 'LlamaIndex', 'DeepEval', 'LM Studio', 'Ollama', 'Qdrant', 'PyTorch', 'OpenCV']
  },
  {
    num: '04',
    name: 'OPTIMIZATION',
    daily: ['OR-Tools CP-SAT', 'Supply-chain planning', 'MOQ & safety stock'],
    working: ['Replenishment & distribution']
  },
  {
    num: '05',
    name: 'CLOUD & TOOLING',
    daily: ['Git', 'GitHub'],
    working: ['Google Cloud Platform', 'Docker', 'Vercel', 'Redis']
  }
];

export default function Toolkit() {
  return (
    <section id="skills" className="w-full bg-black text-[#F8FAFC] py-20 sm:py-28 md:py-36 border-t border-white/[0.08] select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#FF5722]" />
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#FF5722] font-semibold">
                SKILLS & EXPERTISE
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-none font-sans">
              THE TOOLKIT
            </h2>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span className="uppercase tracking-wider">DAILY USE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full border border-neutral-400" />
              <span className="uppercase tracking-wider">WORKING KNOWLEDGE</span>
            </div>
          </div>
        </div>

        {/* Categories Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {TOOLKIT_CATEGORIES.map((cat) => (
            <div
              key={cat.num}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center hover:bg-white/[0.015] transition-colors"
            >
              {/* Number & Category Name */}
              <div className="lg:col-span-5 flex items-baseline gap-6">
                <span className="font-mono text-2xl sm:text-3xl font-black text-[#FF5722]">
                  {cat.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  {cat.name}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="lg:col-span-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 font-mono text-xs sm:text-sm text-neutral-300">
                {/* Daily use */}
                {cat.daily.map((s, idx) => (
                  <span key={idx} className="flex items-center gap-1.5 text-white font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                    <span>{s}</span>
                  </span>
                ))}
                
                {/* Working knowledge */}
                {cat.working.map((s, idx) => (
                  <span key={idx} className="flex items-center gap-1.5 text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full border border-neutral-500" />
                    <span>{s}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
