"use client";

import Link from "next/link";
import {
  Bug,
  ShoppingCart,
  BarChart3,
  FileText,
  Brain,
  MessageCircle,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import type { Project } from "@/data/projects";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bug,
  ShoppingCart,
  BarChart3,
  FileText,
  Brain,
  MessageCircle,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconMap[project.icon] ?? Bug;

  return (
    <div
      className="group relative rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient accent top */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="p-6 sm:p-8">
        {/* Icon + status */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}
            style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))` }}
          >
            <Icon className={`w-6 h-6 text-white`} />
          </div>
          {project.status === "live" ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Coming Soon
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-surface-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Focus area */}
        <div className="mb-5">
          <span className="text-xs font-medium text-surface-500 uppercase tracking-wider">
            Focus:{" "}
          </span>
          <span className="text-xs text-surface-300">{project.focus}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-surface-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {project.status === "live" ? (
            <Link
              href={project.href}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-brand-600/20 text-brand-300 hover:bg-brand-600/30 border border-brand-500/20 hover:border-brand-500/40 transition-all"
            >
              View Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/5 text-surface-500 border border-white/5 cursor-not-allowed">
              View Project
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          )}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-surface-500 hover:text-surface-300 transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
