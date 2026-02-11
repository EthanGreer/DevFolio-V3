<div align="center">

# Ethan Greer | Full-Stack Ecosystem

**7 high-performance applications demonstrating modern architecture, real-time systems, and AI integration.**

[![Next.js](https://img.shields.io/badge/Next.js_15-000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.7-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma_6-2D3748?logo=prisma&logoColor=white)](https://prisma.io)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## Architecture

This portfolio hub serves as the central gateway to a microservices-inspired ecosystem — 6 standalone applications, each deployed independently and built to production standards.

```mermaid
graph TD
    HUB["🏠 DevFolio V3<br/><i>Portfolio Hub</i>"]

    HUB --> NTS["🔴 Nexus Ticket System<br/><i>Issue Tracking + RBAC</i>"]
    HUB --> LS["🟢 Lumina Storefront<br/><i>Headless Commerce</i>"]
    HUB --> ACD["🔵 Apex Crypto Terminal<br/><i>Financial Analytics</i>"]
    HUB --> SCE["🟣 Stratum Content Engine<br/><i>Headless CMS</i>"]
    HUB --> CAC["🟠 Codex AI Companion<br/><i>Generative Assistant</i>"]
    HUB --> SRC["🟡 Sync Realtime Hub<br/><i>WebSocket Server</i>"]

    style HUB fill:#4c6ef5,stroke:#3b5bdb,color:#fff
    style NTS fill:#1a1a2e,stroke:#ef4444,color:#fff
    style LS fill:#1a1a2e,stroke:#10b981,color:#fff
    style ACD fill:#1a1a2e,stroke:#3b82f6,color:#fff
    style SCE fill:#1a1a2e,stroke:#8b5cf6,color:#fff
    style CAC fill:#1a1a2e,stroke:#ec4899,color:#fff
    style SRC fill:#1a1a2e,stroke:#f59e0b,color:#fff
```

## The Applications

| Service | Stack | Key Patterns |
|---------|-------|-------------|
| **[Nexus Ticket System](https://github.com/EthanGreer/Nexus-Ticket-System)** | Prisma · NextAuth · SQLite | RBAC, Ticket State Machines, Relational DB Design |
| **[Lumina Storefront](https://github.com/EthanGreer/Lumina-Storefront)** | Zustand · Prisma · Stripe | Client State Management, Checkout Flows, Cart Persistence |
| **[Apex Crypto Terminal](https://github.com/EthanGreer/Apex-Crypto-Dash)** | Recharts · SWR · CoinGecko | Real-time Data Viz, API Caching, Graceful Degradation |
| **[Stratum Content Engine](https://github.com/EthanGreer/Stratum-Content-Engine)** | TipTap · Zod · Middleware | Rich Text Editing, Input Validation, Route Protection |
| **[Codex AI Companion](https://github.com/EthanGreer/Codex-AI-Companion)** | Vercel AI SDK · OpenAI | Streaming UI, Token Rendering, Mock/Live Modes |
| **[Sync Realtime Hub](https://github.com/EthanGreer/Sync-Realtime-Chat)** | Socket.io · Express | WebSocket Architecture, Presence Tracking, Multi-room |

## Tech Stack

```
Frontend        Next.js 15 (App Router) · React 19 · TypeScript 5.7
Styling         Tailwind CSS 3.4 · Custom Design System · Glassmorphism
State           Zustand · SWR · React Context
Database        Prisma 6 · SQLite
Auth            NextAuth v5 · Cookie-based Middleware
Real-time       Socket.io · Custom Express Server
AI              Vercel AI SDK · OpenAI (with mock fallback)
Charts          Recharts
Deployment      Vercel · GitHub Actions
```

## Quick Start

```bash
git clone https://github.com/EthanGreer/DevFolio-V3.git
cd DevFolio-V3
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the hub.

## Design Philosophy

- **Dark-mode Glassmorphism** — backdrop-blur effects with translucent borders
- **Shared Design Tokens** — brand (blue-indigo) and surface (neutral-gray) color scales
- **Typography** — Inter for UI, JetBrains Mono for code
- **Micro-animations** — fade-in, slide-up, and hover transitions throughout

---

<div align="center">
  <sub>Built with precision by <b>Ethan Greer</b></sub>
</div>
