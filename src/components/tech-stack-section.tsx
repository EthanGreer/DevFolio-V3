"use client";

interface TechItem {
  name: string;
  category: string;
}

const techStack: TechItem[] = [
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Runtime" },
  { name: "Express", category: "Backend" },
  { name: "ASP.NET Core", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Socket.io", category: "Real-time" },
  { name: "Zustand", category: "State" },
  { name: "Recharts", category: "Visualization" },
  { name: "OpenAI API", category: "AI/ML" },
  { name: "Stripe", category: "Payments" },
  { name: "NextAuth.js", category: "Auth" },
  { name: "Turborepo", category: "Tooling" },
  { name: "Docker", category: "DevOps" },
  { name: "Framer Motion", category: "Animation" },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-600/10 text-brand-400 border border-brand-500/20 mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            A carefully chosen stack optimized for developer experience,
            type safety, and production reliability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-brand-500/30 transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-medium text-surface-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-medium text-surface-600 uppercase tracking-wider">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
