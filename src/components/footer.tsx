import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-surface-500">
            <Code2 className="w-4 h-4" />
            <span className="text-sm">
              &copy; {new Date().getFullYear()} Ethan. Built with Next.js &
              Turborepo.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-surface-500 hover:text-surface-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-surface-500 hover:text-surface-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-sm text-surface-500 hover:text-surface-300 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
