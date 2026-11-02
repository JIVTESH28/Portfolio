import React, { useState } from 'react';
import { Copy, Check, Calendar, Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [meetingSubmitted, setMeetingSubmitted] = useState(false);
  const [meetingData, setMeetingData] = useState({
    name: '',
    email: '',
    topic: '',
    date: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('jivtesh03@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMeetingSubmit = (e) => {
    e.preventDefault();
    if (!meetingData.name || !meetingData.email) return;
    
    // Construct pre-filled mailto request for meeting schedule
    const subject = encodeURIComponent(`Meeting Request from ${meetingData.name}`);
    const body = encodeURIComponent(
      `Hi Jivtesh,\n\nI would like to schedule a conversation with you.\n\nName: ${meetingData.name}\nEmail: ${meetingData.email}\nProposed Date/Time: ${meetingData.date || 'Flexible'}\nTopic / Details: ${meetingData.topic || 'General discussion'}\n\nBest,\n${meetingData.name}`
    );
    
    window.location.href = `mailto:jivtesh03@gmail.com?subject=${subject}&body=${body}`;
    setMeetingSubmitted(true);
  };

  return (
    <div id="contact" className="relative w-full bg-black text-[#F8FAFC] py-20 sm:py-32 lg:py-36 border-t border-b border-white/[0.08] select-none">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-10 md:px-14 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Heading & Availability */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start">
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span className="w-5 h-px bg-[#FF5722]" aria-hidden="true" />
              <p className="font-mono text-xs sm:text-[13px] tracking-[0.24em] text-[#FF5722] uppercase font-semibold m-0">
                CONTACT & COLLABORATION
              </p>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 mb-8 sm:mb-10 text-xs font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="uppercase tracking-[0.18em] text-[11px] text-neutral-300 font-medium">
                OPEN TO SELECT ENGINEERING ROLES & AI SYSTEMS
              </span>
            </div>

            {/* Editorial Headline */}
            <h2 className="text-[2.2rem] xs:text-[2.75rem] sm:text-6xl md:text-7xl xl:text-[4.5rem] font-black text-white uppercase tracking-tight leading-[0.98] mb-8 font-sans">
              LET'S BUILD<br />
              SOMETHING<br />
              EXTRAORDINARY.
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-lg mb-8">
              Have a high-throughput backend initiative, mathematical optimization model, or agentic system worth discussing? Send an email or request a direct meeting below.
            </p>

            {/* Direct Copy Email Box */}
            <div className="rounded-2xl bg-[#07090e] border border-white/[0.08] p-5 flex items-center justify-between group hover:border-white/20 transition-all max-w-md mb-8">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#FF5722]" />
                <span className="font-mono text-sm sm:text-base text-white">jivtesh03@gmail.com</span>
              </div>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-neutral-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location & Social */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <MapPin size={14} className="text-[#FF5722]" />
                <span>Nagercoil, Tamil Nadu, India · Remote & Relocation Ready</span>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/JIVTESH28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/30 text-xs font-mono text-neutral-200 transition-all"
                >
                  <FaGithub size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/jivtesh-sulochan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/30 text-xs font-mono text-neutral-200 transition-all"
                >
                  <FaLinkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule A Meeting Interactive Form */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between pt-10 border-t border-white/[0.08] lg:border-t-0 lg:pt-0 lg:pl-10 xl:pl-14 lg:border-l border-white/[0.08]">
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-4 h-px bg-[#FF5722]" aria-hidden="true" />
                  <p className="font-mono text-xs tracking-[0.22em] text-[#FF5722] uppercase font-semibold m-0">
                    SCHEDULE A CONVERSATION
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Request a Direct Meeting</h3>
                <p className="text-xs text-neutral-400 font-light mt-1">
                  Submit your details below to schedule an engineering or collaboration call.
                </p>
              </div>

              <form onSubmit={handleMeetingSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={meetingData.name}
                    onChange={(e) => setMeetingData({ ...meetingData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090b12] border border-white/[0.1] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF5722] font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={meetingData.email}
                    onChange={(e) => setMeetingData({ ...meetingData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090b12] border border-white/[0.1] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF5722] font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                    Preferred Date & Time / Notes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next Tuesday 3:00 PM IST or flexible"
                    value={meetingData.date}
                    onChange={(e) => setMeetingData({ ...meetingData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090b12] border border-white/[0.1] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF5722] font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                    Discussion Topic
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell me a bit about the project, role, or challenge..."
                    value={meetingData.topic}
                    onChange={(e) => setMeetingData({ ...meetingData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090b12] border border-white/[0.1] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF5722] font-mono transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#FF5722] hover:bg-[#FF7043] text-black font-semibold font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FF5722]/20 cursor-pointer"
                >
                  <Calendar size={16} />
                  <span>Send Meeting Request</span>
                </button>

                {meetingSubmitted && (
                  <p className="text-center font-mono text-xs text-emerald-400 pt-2">
                    ✓ Opening your email client to send the meeting request to Jivtesh.
                  </p>
                )}
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
