import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { getProjectBySlug } from '@/lib/projects';
import { 
  ArrowLeft, 
  ExternalLink, 
  Activity, 
  CheckCircle2, 
  Trophy, 
  Terminal, 
  Cpu, 
  Code2 
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Build Dossier | Built by Anthony`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#1e293b] pb-4 font-mono-code text-xs">
          <Link
            href="/"
            className="text-[#00f0ff] hover:underline flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ALL BUILDS
          </Link>
          <span className="text-slate-500">
            SYSTEM_DOSSIER // {project.id}
          </span>
        </div>

        {/* Project Header Block */}
        <header className="p-8 bg-[#0e131f] border border-[#1e293b] rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00f0ff]/10 to-transparent pointer-events-none"></div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> {project.categoryLabel}
            </span>

            <div className="flex items-center gap-2">
              {project.hackathon && (
                <span className="px-2.5 py-0.5 rounded bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30 font-mono-code text-xs font-bold flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5" /> HACKATHON
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 font-mono-code text-xs font-bold uppercase">
                {project.status}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base font-mono-code text-slate-400">
              {project.subtitle}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#00f0ff] text-slate-950 font-display font-bold text-xs hover:bg-cyan-300 transition-all flex items-center gap-1.5 shadow-md shadow-[#00f0ff]/20"
              >
                <span>LAUNCH LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#07090e] border border-[#1e293b] text-slate-300 hover:text-white hover:border-[#00f0ff]/50 transition-all font-mono-code text-xs flex items-center gap-1.5"
              >
                <Code2 className="w-3.5 h-3.5" /> VIEW ON GITHUB
              </a>
            )}
          </div>
        </header>

        {/* Telemetry Metrics */}
        <section className="p-5 bg-[#0e131f]/60 border border-[#1e293b] rounded-2xl flex items-center gap-3 font-mono-code text-xs">
          <Activity className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
          <span className="text-slate-300">
            <strong>Key Metrics:</strong> {project.metrics}
          </span>
        </section>

        {/* Deep Dive Description */}
        <section className="space-y-4">
          <h2 className="text-xl font-display font-bold text-white border-b border-[#1e293b] pb-2">
            System Overview
          </h2>
          <p className="text-slate-300 text-base font-sans leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Build Log & Technical Decisions */}
        {project.buildLog && (
          <section className="space-y-6">
            <h2 className="text-xl font-display font-bold text-white border-b border-[#1e293b] pb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00f0ff]" />
              <span>Architectural Decisions & Build Log</span>
            </h2>

            <p className="text-slate-300 text-sm font-sans leading-relaxed">
              {project.buildLog.overview}
            </p>

            <div className="space-y-3">
              <h3 className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-wider">
                ENGINEERING SPECIFICATIONS
              </h3>
              <div className="space-y-2 font-sans text-sm text-slate-300">
                {project.buildLog.architectureNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0e131f] border border-[#1e293b]">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff] flex-shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.buildLog.lessonsLearned.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-mono-code text-[#f59e0b] uppercase tracking-wider">
                  LESSONS LEARNED & TAKEAWAYS
                </h3>
                <div className="space-y-2 font-sans text-sm text-slate-300">
                  {project.buildLog.lessonsLearned.map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0e131f] border border-[#1e293b]">
                      <span className="text-[#f59e0b] font-mono-code font-bold">▸</span>
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Tech Stack Chips */}
        <section className="space-y-3 border-t border-[#1e293b] pt-6">
          <h3 className="text-xs font-mono-code text-slate-400 uppercase tracking-widest">
            TECHNOLOGIES & RUNTIMES
          </h3>
          <div className="flex flex-wrap gap-2 font-mono-code text-xs">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-xl bg-[#0e131f] text-slate-300 border border-[#1e293b]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-slate-500">
          <Link href="/" className="text-[#00f0ff] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> RETURN TO ALL BUILDS
          </Link>
          <a
            href="https://anthonybaptiste.dev"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            VIEW PROFESSIONAL CAREER SITE (anthonybaptiste.dev) →
          </a>
        </footer>

      </main>
    </div>
  );
}
