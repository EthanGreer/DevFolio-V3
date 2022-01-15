import type { Metadata } from "next";
import "@/components/ui/globals.css";

export const metadata: Metadata = {
  title: "Ethan | Full-Stack Developer",
  description:
    "Full-stack software engineer specializing in React, Node.js, and cloud architecture. Explore my portfolio of production-grade applications.",
  keywords: [
    "full-stack developer",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
