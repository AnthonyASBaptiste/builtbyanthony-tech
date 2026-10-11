'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { projectsCatalog } from '@/lib/projects';
import { 
  Search, 
  Terminal, 
  Trophy, 
  ExternalLink, 
  Sparkles
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'ALL',
    'HACKATHONS',
    'AI & AGENTS',
    'DEV TOOLS & INFRA',
    'LEGAL TECH',
    'ENTERPRISE SAAS',
  ];

  const filteredProjects = projectsCatalog.filter((project) => {
    const matchesCategory =
      activeCategory === 'ALL' ||
      (activeCategory === 'HACKATHONS' ? Boolean(project.hackathon) : project.category === activeCategory);

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const hackathonCount = projectsCatalog.filter((p) => Boolean(p.hackathon)).length;

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-16">
        
        {/* Builder Hero Section */}
        <section className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#0e131f] to-[#07090e] border border-[#1e293b] overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.10),rgba(245,158,11,0.04)_40%,transparent_70%)] pointer-events-none"></div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono-code text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROJECT LABORATORY & BUILD REGISTRY</span>
            </div>

            <h1 className="max-w-3xl text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-none">
              Things I’ve built, broken, shipped & learned from.
            </h1>

            <p className="max-w-3xl text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
              Welcome to <strong>Built by Anthony</strong>. This is my builder workshop: an open registry of autonomous 
              AI agents, hackathon builds, production pipelines, and experimental systems built with open-weight models, Go, Python, and TypeScript.
            </p>

            {/* Quick Metrics HUD */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#1e293b] font-mono-code">
              <div className="p-3 bg-[#07090e]/80 rounded-xl border border-[#1e293b]">
                <span className="text-[11px] text-slate-400 uppercase block">Total Builds</span>
                <span className="text-xl font-bold text-white font-display">{projectsCatalog.length} Systems</span>
              </div>
              <div className="p-3 bg-[#07090e]/80 rounded-xl border border-[#1e293b]">
                <span className="text-[11px] text-slate-400 uppercase block">Hackathon MVPs</span>
                <span className="text-xl font-bold text-[#f59e0b] font-display">{hackathonCount} Sprints</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 bg-[#07090e]/80 rounded-xl border border-[#1e293b]">
                <span className="text-[11px] text-slate-400 uppercase block">Inference</span>
                <span className="text-xl font-bold text-[#00f0ff] font-display">Sovereign / Open</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 bg-[#07090e]/80 rounded-xl border border-[#1e293b] min-w-0">
                <span className="text-[11px] text-slate-400 uppercase block">Domain</span>
                <span className="text-xl font-bold text-emerald-400 font-display break-words">builtbyanthony.tech</span>
              </div>
            </div>

            {/* Cross-Link Bar to Career Site */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-400">
              <span>Looking for my professional career history?</span>
              <a
                href="https://anthonybaptiste.dev"
                target="_blank"
                rel="noreferrer"
                className="text-[#00f0ff] hover:underline flex items-center gap-1 font-bold"
              >
                VISIT ANTHONYBAPTISTE.DEV (12+ YRS CV & ROLES) <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Hackathon Highlight Card */}
        <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-amber-950/20 via-[#0e131f] to-[#07090e] border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#f59e0b] font-bold">
              <Trophy className="w-4 h-4" />
              <span>HACKATHON SPOTLIGHT // OCTOBER 2026</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-white">
              Hacktoberfest 2026: Briefly & Open-Source AI
            </h2>
            <p className="text-slate-300 text-sm font-sans leading-relaxed">
              Explore how <strong>Briefly</strong> was engineered over a weekend for DEV’s “Build for a Friend” challenge, 
              running local open-weight models (Gemma) to classify legal matters with 100% offline privacy.
            </p>
          </div>
          <Link
            href="/hackathons"
            className="px-5 py-3 rounded-xl bg-[#f59e0b] text-slate-950 font-display font-bold text-xs hover:bg-amber-400 transition-all flex items-center gap-2 flex-shrink-0 shadow-lg shadow-amber-500/10"
          >
            <span>EXPLORE HACKATHON HUB</span>
            <Trophy className="w-4 h-4" />
          </Link>
        </section>

        {/* Filter Controls & Search */}
        <section id="builds" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1e293b] pb-6">
            <div>
              <div className="text-xs font-mono-code text-[#00f0ff] tracking-widest uppercase mb-1 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> REPOSITORY INDEX
              </div>
              <h2 className="text-3xl font-display font-extrabold text-white tracking-tight">
                All Systems & Experiments
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search stack, keyword, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0e131f] border border-[#1e293b] rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00f0ff] font-mono-code"
              />
              <Search className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 font-mono-code text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#00f0ff] text-slate-950 border-[#00f0ff] font-bold shadow-md shadow-[#00f0ff]/20'
                    : 'bg-[#0e131f] text-slate-400 border-[#1e293b] hover:text-white hover:border-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Catalog Results Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="p-16 text-center border border-dashed border-[#1e293b] rounded-2xl font-mono-code text-xs text-slate-500 space-y-3">
              <p>NO PROJECTS FOUND MATCHING YOUR CURRENT SEARCH OR FILTER.</p>
              <button
                onClick={() => {
                  setActiveCategory('ALL');
                  setSearchQuery('');
                }}
                className="text-[#00f0ff] hover:underline"
              >
                [RESET FILTERS]
              </button>
            </div>
          )}
        </section>

      </main>

      {/* Structural Footer */}
      <footer className="border-t border-[#1e293b] mt-24 px-6 py-10 font-mono-code text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-slate-300 font-bold">BUILT BY ANTHONY // EXPERIMENTAL LAB</span>
            <div className="text-slate-500">
              Built with Next.js 16, React 19, and Tailwind CSS v4. Deployed on .tech.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://anthonybaptiste.dev"
              target="_blank"
              rel="noreferrer"
              className="text-[#00f0ff] hover:underline flex items-center gap-1 font-bold"
            >
              <span>ANTHONYBAPTISTE.DEV</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a
              href="https://github.com/AnthonyASBaptiste"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/anthonybaptiste/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
