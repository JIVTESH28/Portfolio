import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/[0.06] py-8 text-neutral-500 font-mono text-xs select-none">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
          <span className="text-neutral-400">Jivtesh Sulochan · Product Engineer</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>Conversight.AI</span>
          <span className="text-white/20">/</span>
          <span>Bannari Amman Institute of Technology</span>
          <span className="text-white/20">/</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
