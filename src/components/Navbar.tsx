import React from 'react';
import Link from 'next/link';
import { Terminal, ExternalLink, Trophy, Cpu, Flame } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1e293b] bg-[#07090e]/95 backdrop-blur-md">
      {/* Top Telemetry & Cross-Link Ribbon */}
      <div className="border-b border-[#1e293b]/60 px-6 py-1.5 text-[11px] font-mono-code flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#00f0ff]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping"></span>
            LAB STATUS // ACTIVE
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden sm:inline text-slate-400">PROJECT LABORATORY & HACKATHON HUB</span>
        </div>

        {/* Link back to professional site */}
        <div className="flex items-center gap-2">
          <a
            href="https://anthonybaptiste.dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-900 border border-[#1e293b] text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 transition-all font-mono-code text-[11px] group"
          >
            <span>CAREER PORTFOLIO: anthonybaptiste.dev</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main Lab Nav */}
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0e131f] to-[#07090e] border border-[#00f0ff]/50 flex items-center justify-center text-[#00f0ff] group-hover:border-[#00f0ff] group-hover:shadow-md group-hover:shadow-[#00f0ff]/20 transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-white text-base tracking-tight group-hover:text-[#00f0ff] transition-colors">
                BUILT BY ANTHONY
              </span>
              <span className="px-1.5 py-0.2 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono-code text-[9px] font-bold">
                LAB
              </span>
            </div>
            <span className="font-mono-code text-[10px] text-slate-500 block -mt-0.5">
              Software • AI Experiments • Hackathons
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono-code text-xs text-slate-300">
          <Link href="/#builds" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#00f0ff]" /> All Builds
          </Link>
          <Link href="/hackathons" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-[#f59e0b]" /> Hackathons
          </Link>
          <Link href="/#experiments" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#10b981]" /> Experiments
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/AnthonyASBaptiste"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-[#0e131f] border border-[#1e293b] text-slate-200 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-all font-mono-code text-xs flex items-center gap-2"
          >
            <span>GITHUB</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>
      </div>
    </header>
  );
}
