import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, ShieldCheck, Terminal, BrainCircuit, BookOpen } from 'lucide-react';
import ProjectModal from './ProjectModal';

const FEATURED_PROJECTS = [
  {
    slug: 'docarmor',
    title: 'DocArmor',
    subtitle: 'Pre-LLM Security & Multi-Agent Safety Framework',
    badge: '4,000+ PyPI Installs · Open Source',
    tag: 'RUST + PYO3 + MCP RUNTIME',
    icon: ShieldCheck,
    description:
      'Engineered an open-source pre-LLM document ingestion engine with zip-bomb protection, zero-leakage PII sanitization, Rayon work-stealing parallelism, and native Model Context Protocol (MCP) execution runtime for autonomous agents.',
    image: '/docarmor.jpg',
    github: 'https://github.com/JIVTESH28/docarmor',
    pypi: 'https://pypi.org/project/docarmor/',
    technologies: ['Rust', 'PyO3', 'Rayon', 'tiktoken-rs', 'Python', 'MCP'],
  },
  {
    slug: 'arsenal',
    title: 'ARSENAL — AI Personal Assistant',
    subtitle: 'Human-like Conversational Intelligence & Agent Workflows',
    badge: 'Autonomous Voice Agent',
    tag: 'LIVEKIT + GEMINI + MULTI-MODAL',
    icon: Terminal,
    description:
      'Designed and developed an AI-powered personal assistant enabling human-like voice conversational interaction and intelligent task execution. Built end-to-end agent workflows to interpret user intent, orchestrate actions, and deliver real-time sub-second responses.',
    image: '/arsenal.jpg',
    github: 'https://github.com/JIVTESH28',
    technologies: ['LiveKit', 'Google Gemini', 'LangChain', 'STT / TTS', 'Python'],
  },
  {
    slug: 'attendance-ai',
    title: 'AI Attendance & Face Recognition',
    subtitle: 'Biometric Embeddings & Semantic Vector Search',
    badge: 'Computer Vision & Vector DB',
    tag: 'QDRANT VECTOR DB + OPENCV + RAG',
    icon: BrainCircuit,
    description:
      'Developed an AI-powered attendance system enabling real-time face registration, recognition, and intelligent querying. Implemented embedding generation, vector similarity search in Qdrant, and a semantic natural language Q&A interface via LangChain.',
    image: '/facerec.jpg',
    github: 'https://github.com/JIVTESH28',
    technologies: ['Python', 'OpenCV', 'Qdrant Vector DB', 'LangChain', 'PyTorch'],
  },
];

export default function Projects() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  return (
    <section id="projects" className="relative w-full bg-black text-[#F8FAFC] border-t border-white/[0.08] overflow-hidden select-none py-20 sm:py-28 md:py-36">
      
      {/* Detail Case Study Modal */}
      {selectedSlug && (
        <ProjectModal slug={selectedSlug} onClose={() => setSelectedSlug(null)} />
      )}

      {/* Subtle ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 85% 25%, rgba(56, 189, 248, 0.035) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 15% 75%, rgba(255, 87, 34, 0.025) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1380px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-[#FF5722]" aria-hidden="true" />
            <p className="font-mono text-[11px] tracking-[0.26em] text-neutral-400 uppercase">
              PERSONAL FLAGSHIP WORKS
            </p>
          </div>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none m-0 font-sans select-none">
            PROJECTS
          </h2>
        </div>

        {/* 3 Personal Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.slug}
                className="flex flex-col justify-between rounded-2xl bg-[#07090e] border border-white/[0.09] hover:border-[#FF5722]/50 p-5 sm:p-6 transition-all duration-300 group shadow-xl"
              >
                <div>
                  {/* Project Image Frame */}
                  <div
                    onClick={() => setSelectedSlug(project.slug)}
                    className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black mb-5 border border-white/[0.06] cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 border border-white/10 text-neutral-300 backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-white text-black font-mono text-[11px] font-semibold flex items-center gap-1.5 shadow-lg">
                        <BookOpen size={13} />
                        <span>Read Case Study</span>
                      </span>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="flex items-center gap-1.5 mb-2 font-mono text-[10px] text-[#FF5722] tracking-wider uppercase font-semibold">
                    <Icon size={13} />
                    <span>{project.tag}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedSlug(project.slug)}
                    className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2 cursor-pointer hover:text-[#FF5722] transition-colors"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={() => setSelectedSlug(project.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-[#FF5722] transition-colors cursor-pointer"
                  >
                    <BookOpen size={13} />
                    <span>Case Study →</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase text-neutral-400 hover:text-white transition-colors"
                      >
                        <Github size={13} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.pypi && (
                      <a
                        href={project.pypi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase text-[#FF5722] hover:text-[#FF7043] transition-colors"
                      >
                        <span>PyPI ↗</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
