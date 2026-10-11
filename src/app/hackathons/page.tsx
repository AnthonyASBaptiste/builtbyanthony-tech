import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { getHackathonProjects } from '@/lib/projects';
import { 
  Trophy, 
  ArrowLeft, 
  ExternalLink,
  Calendar, 
  CheckCircle2, 
  Code2 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hackathon Hub | Built by Anthony',
  description:
    'Dedicated hackathon showcase and build logs by Anthony Baptiste. Hacktoberfest 2026, IBM Dev Day, and Demo Day sprints.',
};

export default function HackathonsPage() {
  const hackathons = getHackathonProjects();

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-16">
        
        {/* Header Block */}
        <header className="space-y-6 border-b border-[#1e293b] pb-8">
          <Link
            href="/"
            className="text-xs font-mono-code text-[#00f0ff] hover:underline flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> RETURN TO ALL BUILDS
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] font-mono-code text-xs font-bold">
              <Trophy className="w-3.5 h-3.5" />
              <span>HACKATHON SPRINT VAULT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
              Competitions, Sprints & Hackathons
            </h1>

            <p className="text-slate-300 text-base font-sans leading-relaxed max-w-3xl">
              Rapid execution, strict constraints, and working software. Here is how I approach hackathons: 
              solving authentic problems, deploying open-weight and sovereign models, and shipping production-grade MVPs within hours.
            </p>
          </div>
        </header>

        {/* Hackathon Entries */}
        <div className="space-y-12">
          {hackathons.map((item) => (
            <article
              key={item.slug}
              className="p-8 bg-[#0e131f] border border-[#1e293b] rounded-3xl space-y-8 hover:border-[#f59e0b]/40 transition-all duration-300 relative group shadow-2xl"
            >
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e293b]/60 pb-6">
                <div>
                  <span className="text-xs font-mono-code text-[#f59e0b] flex items-center gap-1.5 font-bold uppercase tracking-wider mb-1">
                    <Trophy className="w-3.5 h-3.5" /> {item.hackathon?.name}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {item.title}
                  </h2>
                  <p className="text-xs font-mono-code text-slate-400 mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 font-mono-code text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" /> {item.hackathon?.eventDate}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                    {item.hackathon?.outcome || 'SHIPPED MVP'}
                  </span>
                </div>
              </div>

              {/* The Prompt & The Challenge */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-[#07090e]/70 border border-[#1e293b] rounded-2xl space-y-2">
                  <span className="text-[11px] font-mono-code text-[#f59e0b] uppercase tracking-wider block font-bold">
                    THE PROMPT & CONSTRAINTS
                  </span>
                  <p className="text-xs font-sans text-slate-300 leading-relaxed">
                    {item.hackathon?.theme || item.hackathon?.prompt}
                  </p>
                </div>

                <div className="p-5 bg-[#07090e]/70 border border-[#1e293b] rounded-2xl space-y-2">
                  <span className="text-[11px] font-mono-code text-[#00f0ff] uppercase tracking-wider block font-bold">
                    THE SOLUTION
                  </span>
                  <p className="text-xs font-sans text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Build Log Highlights */}
              {item.buildLog && (
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-mono-code text-slate-300 uppercase tracking-widest flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#00f0ff]" /> ARCHITECTURAL DECISIONS & TAKEAWAYS
                  </h3>

                  <div className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-300">
                    {item.buildLog.architectureNotes.map((note, nIdx) => (
                      <div key={nIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00f0ff] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack & Links */}
              <div className="pt-6 border-t border-[#1e293b]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-code text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded bg-[#07090e] text-slate-400 border border-[#1e293b] text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-[#07090e] border border-[#1e293b] text-slate-200 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-all flex items-center gap-1.5 font-bold"
                    >
                      <Code2 className="w-3.5 h-3.5" /> VIEW CODE REPO
                    </a>
                  )}
                  {item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-[#00f0ff] text-slate-950 font-bold hover:bg-cyan-300 transition-all flex items-center gap-1.5"
                    >
                      <span>TRY LIVE SYSTEM</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] mt-24 px-6 py-10 font-mono-code text-xs text-slate-500 text-center">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>BUILT BY ANTHONY // HACKATHON HUB</span>
          <a
            href="https://anthonybaptiste.dev"
            target="_blank"
            rel="noreferrer"
            className="text-[#00f0ff] hover:underline"
          >
            ANTHONYBAPTISTE.DEV →
          </a>
        </div>
      </footer>
    </div>
  );
}
