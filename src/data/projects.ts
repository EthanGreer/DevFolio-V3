export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  href: string;
  icon: string;
  gradient: string;
  tags: string[];
  focus: string;
  status: "live" | "coming-soon";
}

export const projects: Project[] = [
  {
    id: "bug-tracker",
    title: "Bug Tracker / PM Tool",
    description: "Enterprise-grade project management with role-based access, ticket workflows, and priority filtering.",
    longDescription:
      "A full-featured bug tracking and project management application demonstrating enterprise patterns: authentication, authorization with role-based access (Admin/Dev), complex ticket state machines, and relational database design.",
    href: "/apps/bug-tracker",
    icon: "Bug",
    gradient: "from-red-500 to-orange-500",
    tags: ["Next.js", "Prisma", "SQLite", "NextAuth", "RBAC"],
    focus: "CRUD, Auth, Database Design",
    status: "live",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Store",
    description: "Full shopping experience with cart management, product filtering, and Stripe checkout integration.",
    longDescription:
      "A complete e-commerce application featuring complex UI state management with Zustand, product catalog with filtering/search, persistent shopping cart, mock Stripe checkout flow, and order history tracking.",
    href: "/apps/ecommerce",
    icon: "ShoppingCart",
    gradient: "from-emerald-500 to-teal-500",
    tags: ["Zustand", "Prisma", "Next.js", "Mock Stripe"],
    focus: "State Management, Payment Integration",
    status: "live",
  },
  {
    id: "dashboard",
    title: "Crypto Dashboard",
    description: "Live cryptocurrency prices, interactive charts, and market data powered by CoinGecko API.",
    longDescription:
      "A real-time crypto dashboard fetching live data from the CoinGecko API, with interactive Recharts area charts, SWR-powered auto-refresh, sortable market table, and graceful fallback to mock data when rate-limited.",
    href: "/apps/dashboard",
    icon: "BarChart3",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["Recharts", "SWR", "CoinGecko API", "Real-time"],
    focus: "API Integration, Data Visualization",
    status: "live",
  },
  {
    id: "cms",
    title: "Secure CMS & Blog",
    description: "Middleware-protected admin panel with TipTap rich text editor, Zod validation, and clean public blog.",
    longDescription:
      "A secure content management system with TipTap rich text editing, Zod input validation, cookie-based middleware authentication protecting admin routes, and a typography-focused public blog. Demonstrates security best practices and content workflows.",
    href: "/apps/cms",
    icon: "FileText",
    gradient: "from-purple-500 to-violet-500",
    tags: ["TipTap", "Zod", "Middleware Auth", "Prisma"],
    focus: "Security, Rich Text, CRUD",
    status: "live",
  },
  {
    id: "ai-app",
    title: "AI Developer Companion",
    description: "Streaming AI chat with syntax-highlighted code blocks, prompt library, and mock/live dual mode.",
    longDescription:
      "An AI-powered developer companion built with Vercel AI SDK, featuring streaming responses with token-by-token rendering, react-markdown with Prism syntax highlighting, a curated prompt template library, and seamless mock/live mode switching. Demonstrates modern AI integration patterns.",
    href: "/apps/ai-app",
    icon: "Brain",
    gradient: "from-pink-500 to-rose-500",
    tags: ["Vercel AI SDK", "Streaming", "react-markdown", "Prism"],
    focus: "AI/ML Integration, Streaming UI",
    status: "live",
  },
  {
    id: "chat",
    title: "Social Hub Chat",
    description: "Real-time multi-room chat with Socket.io, typing indicators, live presence, and glassmorphism UI.",
    longDescription:
      "A real-time chat application powered by a custom Express + Socket.io server, featuring multi-room channels, live user presence tracking, typing indicators, emoji quick-pick, and in-memory message history. Demonstrates WebSocket architecture and full-stack Node.js mastery.",
    href: "/apps/chat",
    icon: "MessageCircle",
    gradient: "from-amber-500 to-yellow-500",
    tags: ["Socket.io", "Express", "WebSocket", "Real-time"],
    focus: "WebSockets, Real-time Architecture",
    status: "live",
  },
];
