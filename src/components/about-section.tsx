"use client";

import { Code2, Server, Database, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "React, Next.js, TypeScript, Tailwind CSS. Pixel-perfect UIs with accessible, responsive design and smooth animations.",
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Node.js, Express, ASP.NET Core. RESTful APIs, GraphQL, authentication systems, and microservice patterns.",
  },
  {
    icon: Database,
    title: "Data & Infrastructure",
    description:
      "PostgreSQL, Redis, Docker. Database design, query optimization, caching strategies, and CI/CD pipelines.",
  },
  {
    icon: Layers,
    title: "Architecture",
    description:
      "Monorepo tooling, WebSocket systems, AI/ML integrations, and cloud-native deployment strategies.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-600/10 text-brand-400 border border-brand-500/20 mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Building software that{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-purple-400">
                solves real problems
              </span>
            </h2>
            <div className="space-y-4 text-surface-400 leading-relaxed">
              <p>
                I&apos;m a full-stack software engineer passionate about building
                robust, scalable applications. My experience spans the entire
                development lifecycle: from database schema design to polished
                user interfaces.
              </p>
              <p>
                This portfolio ecosystem isn&apos;t just a collection of demos
                &mdash; it&apos;s a monorepo of interconnected, production-grade
                applications that share a design system, authentication layer,
                and deployment pipeline. Each project targets a specific
                engineering discipline.
              </p>
              <p>
                I believe in writing clean, type-safe code that other developers
                enjoy working with. Every project here follows best practices for
                testing, security, and performance.
              </p>
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-brand-400 mb-3" />
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-surface-400 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
