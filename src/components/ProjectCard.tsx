import React from 'react';
import Link from 'next/link';
import { Project } from '@/lib/projects';
import { ExternalLink, Star, Activity, Trophy, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
        project.starred
          ? 'bg-[#0e131f] border-[#00f0ff]/40 hover:border-[#00f0ff] shadow-xl shadow-[#00f0ff]/5'
          : 'bg-[#0e131f]/50 border-[#1e293b] hover:border-slate-600'
      }`}
    >
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono-code text-xs font-bold text-slate-500 group-hover:text-[#00f0ff] transition-colors">
              {project.id}
            </span>
            <span className="text-xs font-mono-code text-[#00f0ff] flex items-center gap-1 font-medium">
              {project.starred && <Star className="w-3.5 h-3.5 fill-[#00f0ff] text-[#00f0ff]" />}
              {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.hackathon && (
              <span className="px-2 py-0.5 rounded bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30 font-mono-code text-[10px] flex items-center gap-1 font-bold">
                <Trophy className="w-3 h-3" /> HACKATHON
              </span>
            )}
            <span
              className={`px-2 py-0.5 text-[10px] font-mono-code font-bold uppercase tracking-wider rounded border ${
                project.status === 'SHIPPED'
                  ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
                  : project.status === 'FLAGSHIP SYSTEM'
                  ? 'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>

        <p className="text-xs font-mono-code text-slate-400 mb-3">
          {project.subtitle}
        </p>

        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Metrics, Tech & Links */}
      <div className="pt-4 border-t border-[#1e293b]/60 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-code">
          <span className="text-slate-400 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#f59e0b]" /> {project.metrics}
          </span>
          
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-[#00f0ff] transition-colors flex items-center gap-1 text-xs"
              >
                <span>REPO</span> <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#00f0ff] hover:underline flex items-center gap-1 text-xs font-bold"
              >
                <span>LIVE</span> <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded bg-[#07090e] text-slate-400 border border-[#1e293b] text-[10px] font-mono-code"
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-[11px] font-mono-code text-slate-400 hover:text-[#00f0ff] transition-colors flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          >
            DOSSIER <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
