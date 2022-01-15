"use client";

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ethan",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ethan",
    href: "https://linkedin.com",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-600/10 text-brand-400 border border-brand-500/20 mb-4">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-surface-400 text-lg mb-12 max-w-xl mx-auto">
          I&apos;m currently open to new opportunities. Whether you have a
          project in mind or just want to connect, I&apos;d love to hear
          from you.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-brand-400 mx-auto mb-3" />
              <p className="text-sm font-medium text-white mb-1">{label}</p>
              <p className="text-xs text-surface-500 group-hover:text-surface-400 transition-colors flex items-center justify-center gap-1">
                {value}
                <ArrowUpRight className="w-3 h-3" />
              </p>
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium bg-brand-600 hover:bg-brand-500 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.98]"
        >
          Send me an email
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
