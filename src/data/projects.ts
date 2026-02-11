export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  href: string;
  repo: string;
  icon: string;
  gradient: string;
  tags: string[];
  focus: string;
  status: "live" | "coming-soon";
}

export const projects: Project[] = [
  {
    id: "nexus-ticket-system",
    title: "Nexus Ticket System",
    description: "Enterprise-grade issue tracking with role-based access control, ticket workflows, priority filtering, and team-based assignment.",
    longDescription:
      "A full-featured ticket management platform demonstrating enterprise patterns: NextAuth authentication, role-based authorization (Admin/Developer), complex ticket state machines, Prisma ORM with SQLite, and relational database design.",
    href: "https://github.com/EthanGreer/Nexus-Ticket-System",
    repo: "https://github.com/EthanGreer/Nexus-Ticket-System",
    icon: "Bug",
    gradient: "from-red-500 to-orange-500",
    tags: ["Next.js", "Prisma", "SQLite", "NextAuth", "RBAC"],
    focus: "Auth, CRUD, Database Design",
    status: "live",
  },
  {
    id: "lumina-storefront",
    title: "Lumina Storefront",
    description: "Headless commerce engine with persistent cart state, product filtering, and integrated Stripe checkout flow.",
    longDescription:
      "A complete headless commerce application featuring complex UI state management with Zustand, product catalog with filtering/search, persistent shopping cart, mock Stripe checkout flow, and order history tracking.",
    href: "https://github.com/EthanGreer/Lumina-Storefront",
    repo: "https://github.com/EthanGreer/Lumina-Storefront",
    icon: "ShoppingCart",
    gradient: "from-emerald-500 to-teal-500",
    tags: ["Zustand", "Prisma", "Next.js", "Stripe Integration"],
    focus: "State Management, Payment Integration",
    status: "live",
  },
  {
    id: "apex-crypto-dash",
    title: "Apex Crypto Terminal",
    description: "Real-time financial analytics dashboard with live market data, interactive charts, and intelligent caching.",
    longDescription:
      "A real-time crypto terminal fetching live data from the CoinGecko API, with interactive Recharts area charts, SWR-powered auto-refresh, sortable market table, and graceful fallback to mock data when rate-limited.",
    href: "https://github.com/EthanGreer/Apex-Crypto-Dash",
    repo: "https://github.com/EthanGreer/Apex-Crypto-Dash",
    icon: "BarChart3",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["Recharts", "SWR", "CoinGecko API", "Real-time"],
    focus: "API Integration, Data Visualization",
    status: "live",
  },
  {
    id: "stratum-content-engine",
    title: "Stratum Content Engine",
    description: "Headless CMS with TipTap rich text editing, Zod validation, middleware-protected admin routes, and a public blog.",
    longDescription:
      "A secure headless content management system featuring TipTap rich text editing, Zod input validation, cookie-based middleware authentication protecting admin routes, and a typography-focused public blog. Demonstrates security best practices and content workflows.",
    href: "https://github.com/EthanGreer/Stratum-Content-Engine",
    repo: "https://github.com/EthanGreer/Stratum-Content-Engine",
    icon: "FileText",
    gradient: "from-purple-500 to-violet-500",
    tags: ["TipTap", "Zod", "Middleware Auth", "Prisma"],
    focus: "Security, Rich Text, Content Workflows",
    status: "live",
  },
  {
    id: "codex-ai-companion",
    title: "Codex AI Companion",
    description: "Generative engineering assistant with streaming responses, syntax-highlighted code blocks, and prompt library.",
    longDescription:
      "An AI-powered generative engineering assistant built with Vercel AI SDK, featuring streaming responses with token-by-token rendering, react-markdown with Prism syntax highlighting, a curated prompt template library, and seamless mock/live mode switching.",
    href: "https://github.com/EthanGreer/Codex-AI-Companion",
    repo: "https://github.com/EthanGreer/Codex-AI-Companion",
    icon: "Brain",
    gradient: "from-pink-500 to-rose-500",
    tags: ["Vercel AI SDK", "Streaming", "react-markdown", "Prism"],
    focus: "AI/ML Integration, Streaming UI",
    status: "live",
  },
  {
    id: "sync-realtime-chat",
    title: "Sync Realtime Hub",
    description: "High-concurrency WebSocket server with multi-room channels, typing indicators, live presence tracking, and glassmorphism UI.",
    longDescription:
      "A real-time communication hub powered by a custom Express + Socket.io server, featuring multi-room channels, live user presence tracking, typing indicators, emoji quick-pick, and in-memory message history. Demonstrates WebSocket architecture and full-stack Node.js mastery.",
    href: "https://github.com/EthanGreer/Sync-Realtime-Chat",
    repo: "https://github.com/EthanGreer/Sync-Realtime-Chat",
    icon: "MessageCircle",
    gradient: "from-amber-500 to-yellow-500",
    tags: ["Socket.io", "Express", "WebSocket", "Real-time"],
    focus: "WebSockets, Real-time Architecture",
    status: "live",
  },
];
