import { Winner } from "../components/WinnersGallery";

export const hackasu1Winners: Winner[] = [
  // ── Education & Social Good ──────────────────────────────────────────────

  {
    id: "edu-first-place",
    placement: "🏆 1st Place",
    teamName: "GamEd.AI",
    projectName: "GamEd.AI",
    tagline: "Play it. Learn it. Master it.",
    description: `
**GamEd.AI** converts any text — a paragraph, a concept, or a question — into an **interactive mini-game** that teaches through play.

It builds visual stories, puzzles, and reasoning challenges that guide students to understand concepts, not just recall them. Each click, drag, or decision becomes a signal of mastery — making it both a learning platform and an assessment engine.

**Key Features:**
- Text-to-game engine using NLP to extract key learning concepts
- Reasoning graph that converts ideas into interactive story nodes and puzzles
- One-click "Generate Game" interface from raw text
- Auto-reasoning path tracker that visualizes student logic
- AI-proof tasks requiring reasoning, not memorization

*Technologies used:* Claude API, FastAPI, React, Canvas/WebGL, OpenAI, LangChain, PostgreSQL, Redis, TypeScript
    `,
    members: ["Mayank Vyas", "Yash Sanjiv Shah", "Shiven Agarwal", "Priyanuj Bordoloi", "Ashish Raj Shekhar"],
    links: {
      github: "https://github.com/Mayank-glitch-cpu/Claude_Hackathon",
      devpost: "https://devpost.com/software/gamed-ai",
    },
    accentColor: "#FFD700",
  },

  {
    id: "edu-second-place",
    placement: "🥈 2nd Place",
    teamName: "Let's Lock In",
    projectName: "Let's Lock In",
    tagline: "An ADHD-smart study platform that makes focus feel like a game, not a fight.",
    description: `
**Let's Lock In** syncs with Canvas LMS to transform overwhelming coursework into manageable, motivating tasks for students with ADHD.

Around 15–17% of college students report ADHD symptoms. This platform was built for how ADHD brains actually work — turning structure, focus, and organization into something engaging, rewarding, and supportive.

**Key Features:**
- Fetches assignments, due dates, and effort estimates from Canvas
- Gamified streaks, badges, and progress bars to build momentum
- Pomodoro-style work chunking for focused sessions
- Optional attention checks via face/pose estimation (MediaPipe)
- In-app notes, summaries, and study cheatsheets

*Technologies used:* React.js, Node.js, Express, PostgreSQL, OAuth2, MediaPipe
    `,
    members: ["Himanshu Chowdary Kolla", "anushka Tiwari", "Chaitanya Nookala", "vishnu uppalapati"],
    links: {
      github: "https://github.com/anushhkuh/HackASU",
      devpost: "https://devpost.com/software/let-s-lock-in",
    },
    accentColor: "#C0C0C0",
  },

  {
    id: "edu-third-place",
    placement: "🥉 3rd Place",
    teamName: "Impulsa",
    projectName: "Impulsa",
    tagline: "Making the journey of studying and working abroad easier.",
    description: `
**Impulsa** is an AI-powered platform that helps students and professionals adapt to life abroad, focusing on the emotional and social sides of culture shock.

The app combines **interactive learning sections** (inspired by Duolingo's level-based approach) with **AI chat** powered by Claude and GPT. Users can practice cultural scenarios, ask questions, and progress through levels designed to improve real-world understanding.

**Key Features:**
- Level-based cultural learning modules
- Claude-powered AI chat for cultural Q&A
- Demo forum for community insight sharing
- Polished, globally-accessible UI

*Technologies used:* React, TypeScript, Next.js, Tailwind CSS, Clerk, Claude API
    `,
    members: ["Matthew Cruz", "Lakshya Dhingra", "Jesus Aguilar"],
    links: {
      github: "https://github.com/picfire/HackASU",
      demo: "https://hack-asu.vercel.app/",
      devpost: "https://devpost.com/software/impulsa",
    },
    accentColor: "#CD7F32",
  },

  // ── Developer Tools ──────────────────────────────────────────────────────

  {
    id: "dev-first-place",
    placement: "🏆 1st Place",
    teamName: "VisionForge",
    projectName: "VisionForge",
    tagline: "Instantly design powerful neural networks with zero code.",
    description: `
**VisionForge** is a no-code development environment that lets users visually design, replicate, and experiment with deep learning architectures — then export clean, production-ready PyTorch or TensorFlow code in minutes.

While many no-code tools exist for agents, VisionForge fills a clear gap: designing the core deep learning architectures that power those agents.

**Key Features:**
- Drag-and-drop canvas for building full ML pipelines
- HuggingFace model import for hybrid/multimodal experiments
- Claude AI assistant for natural language architecture modification
- One-click PyTorch / TensorFlow code export
- Real-time tensor shape inference across branching and skip connections

*Technologies used:* React 19, TypeScript, Vite, Tailwind CSS, ReactFlow, Django, Claude AI, Zustand, Framer Motion
    `,
    members: ["Aaditya Jindal", "Bhavya Shah", "Aakash Khepar", "Gunbir Singh"],
    links: {
      github: "https://github.com/devgunnu/visionforge",
      demo: "https://visionforge-bz3s.onrender.com/project",
      devpost: "https://devpost.com/software/visionforge-hukvsz",
    },
    accentColor: "#FFD700",
  },

  {
    id: "dev-second-place",
    placement: "🥈 2nd Place",
    teamName: "Crodex",
    projectName: "Crodex",
    tagline: "Switch stacks without rewriting — AI-powered framework conversion.",
    description: `
**CrodeX** converts code between frameworks using AI, preserving logic and functionality so development teams can switch stacks without losing the value in existing code.

It reduces migration effort from weeks to hours, demonstrating how AI can automate technical tasks while preserving business logic.

**Key Features:**
- Detects frameworks from file patterns and dependencies
- AI-powered conversion using Anthropic and Gemini APIs
- Supports Flask, Django, Spring Boot, and more
- Real-time progress tracking via Server-Sent Events
- Session-based project state management

*Technologies used:* Flask, Python, Anthropic API, Google Gemini API, Redis, HTML5, CSS3, JavaScript ES6+
    `,
    members: ["Abhinav Reja", "Keyur Ashok Madane", "Sumedh Gajbhiye", "Ukani Vedant"],
    links: {
      github: "https://github.com/abhinavReja/CrodeX-Development",
      devpost: "https://devpost.com/software/crodex",
    },
    accentColor: "#C0C0C0",
  },

  {
    id: "dev-third-place",
    placement: "🥉 3rd Place",
    teamName: "unbored",
    projectName: "unbored",
    tagline: "Take the boredom out of onboarding.",
    description: `
**unbored** turns any GitHub repository into a polished onboarding site in minutes — giving new contributors a "first hour" experience without weeks of reading scattered READMEs and closed PRs.

New contributors routinely spend 2–4 weeks piecing together tribal knowledge. We think there's a better way.

**Key Features:**
- AI-generated architecture overview summarizing services, modules, and data flow
- Setup guide with pitfalls mined from historical issues and PRs
- Interactive file dependency graph (Tree-sitter import parsing)
- FAQ auto-generated from recurring questions in repo history
- Exports a static Docusaurus site ready for GH Pages / Netlify / Vercel

*Technologies used:* Python, Typer CLI, Claude API, AWS Bedrock, Lambda, Docusaurus, Node.js, TypeScript, React
    `,
    members: ["Pranjal Padakannaya", "Akash Bagchi", "Akshaya Nadathur", "Sachin Shivanand Shankarikoppa"],
    links: {
      github: "https://github.com/akashbagchi/claude-builder-2025",
      devpost: "https://devpost.com/software/unbored-take-the-boredom-out-of-onboarding",
    },
    accentColor: "#CD7F32",
  },

  // ── Polymarket x Claude ──────────────────────────────────────────────────

  {
    id: "poly-first-place",
    placement: "📊 1st Place — Polymarket x Claude",
    teamName: "Kairos",
    projectName: "Kairos",
    tagline: "A personalized one-stop agentic workflow for prediction markets.",
    description: `
**Kairos** is a "markets mission control" that syncs Polymarket, Nevua, Adjacent, and Claude to find mispricing, manage alerts, and prove outcomes — all in one coherent workspace.

A Claude-powered copilot with persistent memory stores your trades and rules, then anticipates your next move.

**Key Features:**
- Claude-powered agent with persistent trade memory (Postgres JSONB)
- Coherence module: streams live Polymarket prices, encodes overlapping markets as a boolean matrix, and runs feasibility checks
- Nevua integration for server-side watchlists and live alerts
- Adjacent API "Newsroom Mode" pairing market movers with journalism
- Factor graph + message passing for interpretable probability beliefs
- Arena module that red-teams resolution criteria for exploits

*Technologies used:* Next.js 15, React 19, NextAuth 5, Prisma, Neon/Postgres, Tailwind v4, Radix UI, Recharts, TypeScript
    `,
    members: ["Aashir Javed"],
    links: {
      github: "https://github.com/Aaxhirrr/kairos",
      devpost: "https://devpost.com/software/kairos-3qnji4",
    },
    accentColor: "#8b5cf6",
  },

  {
    id: "poly-second-place",
    placement: "🥈 2nd Place — Polymarket x Claude",
    teamName: "gibbsAlpha",
    projectName: "gibbsAlpha",
    tagline: "Market data turned into real insight via a multi-agent reasoning pipeline.",
    description: `
**gibbsAlpha** converts raw market data into structured, reliable insight using an EMNLP-grade multi-agent reasoning pipeline directly inspired by recent research.

Instead of a black-box chatbot, it behaves like a coordinated research team.

**Agent Pipeline:**
- **Analyzer Agent** — statistical checks, conditional probabilities, and expected value reasoning
- **Context Agent** — narrative structure from market history and cross-asset signals
- **Risk Agent** — uncertainty, volatility, and fragility evaluation
- **Synthesizer Agent** — merges partial analyses into one clear, human-readable explanation

*Technologies used:* Claude 3.5 Sonnet, n8n orchestration, Next.js 14, Node.js/Express, Supabase, Polymarket API, WebSockets, TypeScript, Tailwind
    `,
    members: ["Utkarsh Byahut", "Muhammed Topiwala"],
    links: {
      github: "https://github.com/muhammedhunaid/vibe-trading",
      demo: "https://vibe-trading-chi.vercel.app/",
      devpost: "https://devpost.com/software/gibbsalpha",
    },
    accentColor: "#6366f1",
  },

  // ── EtherFi x Claude ─────────────────────────────────────────────────────

  {
    id: "etherfi-first-place",
    placement: "⛓️ 1st Place — EtherFi x Claude",
    teamName: "GitAccountable",
    projectName: "GitAccountable",
    tagline: "Stake crypto, commit code daily, or lose it all.",
    description: `
**GitAccountable** is a crypto-accountability app where you put real skin in the game: stake 0.01 ETH, commit to 7 days of GitHub activity, and either claim your stake plus staking rewards — or forfeit everything if you miss a day.

A Chainlink oracle verifies your commits daily. No cheating.

**Key Features:**
- Solidity smart contract (Foundry) integrating mock Ether.Fi liquid staking
- Chainlink Functions oracle querying the GitHub API for daily commit verification
- React frontend with Wagmi/RainbowKit for Web3 interactions
- Mock liquid staking rewards working alongside smart contract accountability logic

*Technologies used:* Solidity, Foundry, Chainlink, Ether.Fi, React, Wagmi, RainbowKit, Node.js, GitHub API
    `,
    members: ["John G", "Jacob Blemaster"],
    links: {
      github: "https://github.com/johng2023/gitAccountable",
      devpost: "https://devpost.com/software/gitaccountable",
    },
    accentColor: "#10b981",
  },

  {
    id: "etherfi-second-place",
    placement: "🥈 2nd Place — EtherFi x Claude",
    teamName: "Yield Quest",
    projectName: "Yield Quest",
    tagline: "A no-loss prediction game powered by EtherFi weETH with Claude AI as your Game Master.",
    description: `
**Yield Quest** transforms DeFi engagement by letting you play prediction markets using only the yield generated from your staked weETH — your principal stays 100% safe and withdrawable at any time.

Think of it as a gamified yield layer on top of EtherFi's liquid staking.

**Key Features:**
- Deposit weETH → earn Yield Credits (YC) → bet only YC on binary YES/NO markets
- Claude AI (Haiku 4.5) as Game Master: personalized quests, probability hints, and automated trading mode
- 7 achievements with rarity tiers (Common → Legendary)
- Global leaderboards: Accuracy, Wisdom Index, and Quest Masters
- Wisdom Index = composite score (accuracy 50% + yield efficiency 30% + streak bonus 20%)

*Technologies used:* Next.js, Solidity, React, Prisma, Anthropic SDK, RainbowKit, Wagmi, Tailwind CSS, TypeScript
    `,
    members: ["Ashwanth Balakrishnan"],
    links: {
      github: "https://github.com/ashwanthbalakrishnan5/hack-asu-etherfi",
      demo: "https://yieldquest.ashwanthbk.com/",
      devpost: "https://devpost.com/software/yield-quest",
    },
    accentColor: "#f59e0b",
  },

  {
    id: "etherfi-third-place",
    placement: "🥉 3rd Place — EtherFi x Claude",
    teamName: "E.V.O.",
    projectName: "E.V.O.",
    tagline: "Smart Options. Instant Premiums.",
    description: `
**E.V.O. (Ether.fi Vault Options)** is a full-stack decentralized application allowing eETH holders to earn additional premium income on their assets through two core collateralized strategies.

**Strategies:**
- **Covered Calls**: Lock eETH as collateral, sell call options, earn instant USDT premium
- **Cash-Secured Puts**: Lock USDT, sell put options, earn instant USDT premium

**Key Features:**
- Instant premium payment at collateral lock time (not at expiry)
- Claude API integration for plain-English trade risk/reward analysis
- Real-time APR calculation engine via Node.js backend
- Live market data via Tatum.io integration
- One-command local deploy: contracts, test wallets, and servers

*Technologies used:* Solidity, Hardhat, Next.js 14, React, Wagmi, Viem, RainbowKit, Node.js, TypeScript, Claude API
    `,
    members: ["Aditya Kumar", "Dhanush Koyi", "Dhyan Sanjaykumar Patel"],
    links: {
      github: "https://github.com/Dhyan118/EVO",
      devpost: "https://devpost.com/software/e-v-o",
    },
    accentColor: "#ef4444",
  },
];

// Convenience filtered exports
export const eduSocialGoodWinners = hackasu1Winners.filter((w) =>
  ["edu-first-place", "edu-second-place", "edu-third-place"].includes(w.id)
);

export const developerToolsWinners = hackasu1Winners.filter((w) =>
  ["dev-first-place", "dev-second-place", "dev-third-place"].includes(w.id)
);

export const polymarketWinners = hackasu1Winners.filter((w) =>
  w.id.startsWith("poly-")
);

export const etherfiWinners = hackasu1Winners.filter((w) =>
  w.id.startsWith("etherfi-")
);