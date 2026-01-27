# Portfolio Website — Vivek Agarwal

## Tech Stack
- Astro + Tailwind CSS v4 + TypeScript
- Dark minimal theme, fully responsive (mobile-first)
- Homepage: single-page scroll with smooth-scroll nav
- Each project gets its own dedicated page (`/projects/[slug]`) — micro-startup landing page style

## Design
- Background: #0a0a0a, text: #e5e5e5
- Font: Inter (Google Fonts)
- Subtle fade-in animations (Intersection Observer)
- Responsive: hamburger nav on mobile, grid on desktop

---

## Website Content

### Hero
- **Photo:** Profile picture [placeholder]
- **Name:** Vivek Agarwal
- **Title:** Infrastructure & AI Engineer @ FinalRoundAI
- **Status line:** Currently exploring startups, fintech, distributed systems, and tracing & observability.
- **Socials (icon row below photo):** GitHub, LinkedIn, Twitter, Email — displayed as platform icons

### About
Three core interests:
1. **Distributed Systems** — Building reliable systems where components fail; focus on observability and fault tolerance
2. **AI Infrastructure** — Multi-agent orchestration, LLM observability, making AI debuggable and reliable at scale
3. **Fintech** — Democratizing financial access; building tools for retail Indian markets

### Experience

**FinalRoundAI — Infrastructure & AI Engineer (Sept 2025–Present)**
- Architected distributed multi-agent system for Hellyeah AI using Agno orchestration and LangFuse for LLM observability
- Built RAG pipelines for async evaluations powering AI-driven interview feedback
- Created MCP-based integrations for agentic control on Google & Meta Ads
- Managed GitOps (Argo CD) deployments with hybrid observability (Datadog + LGTM)

**Stealth Fintech Startup — Co-Founder**
- Architected end-to-end MFT platform for retail Indian markets
- Built ultra-low-latency (<50ms) UDP market feed using Rust
- Designed custom MCP server to power AI-driven trading clients with real-time market data

**Aspora (Vance) — DevOps Engineer (Apr–Sept 2025)**
- Designed observability infrastructure for 25+ services (queues, databases, APM, logs)
- Architected Airflow-orchestrated ETL workflows to Redshift
- Implemented Debezium-based CDC system for real-time order processing
- Zero-downtime service migrations with Terraform and Terragrunt

**Embeddings Corporation — Software Engineer (Mar–Apr 2025)**
- Built search-based evaluations using OpenSearch and embedding models
- Worked on LLM and RAG architectures for document Q&A systems

**Soundverse AI — Backend & DevOps Lead (Sept 2024–Mar 2025)**
- Led complete backend migration from Next.js + MongoDB to FastAPI + PostgreSQL
- Scaled platform to 385,000+ users with priority-based processing
- Architected GPU cluster for LLM model inference with parallelization
- Built acknowledgment-based WebSocket delivery for reliable real-time communication
- Built data attribution platform using Qdrant vector database

**Sigma Cranes & Hoists — Full Stack Engineer, Freelance (Jun–Aug 2024)**
- Built interactive 3D spares purchasing platform for industrial machinery
- Developed internal ERP system to digitize legacy records

### Projects (Personal/Independent)
Homepage shows a card grid with name, one-liner, and tech tags. Each card links to a dedicated project page (`/projects/[slug]`).

**Each project page is a micro-startup landing page with:**
- Hero banner with project name + tagline
- Problem / Solution narrative (non-technical)
- Technical deep-dive (architecture, stack decisions, challenges)
- Screenshots / diagrams / demo images
- Links: Live deployment (if any), GitHub repo
- Tech stack badges

**Projects:**

**EcoTokens** → `/projects/ecotokens`
Web3 carbon credit marketplace on Ethereum. NFT-based carbon offsets, smart contract automation, ML-based credit prediction.
Tech: React, Node.js, MongoDB, Solidity, Web3.js, MetaMask

**Memory Insight** → `/projects/memory-insight`
Forensic memory analysis platform. Simplifies complex CLI operations with async memory capture and analysis via microservices.
Tech: Next.js, FastAPI, Python, AWS S3, Volatility3, PostgreSQL, RabbitMQ

**SIH 2024 SCADA** → `/projects/sih-scada`
SCADA system for Gas Authority of India Ltd. Smart India Hackathon 2024 winner.

**Bounty Hub** → `/projects/bounty-hub`
Base Network ETH + GitHub-based open-source bounty dispenser.
Tech: JavaScript, Ethereum/Base

**OpenTelemetry MCP** → `/projects/otel-mcp`
MCP server for observability tooling.
Tech: Python

**Socket Chat** → `/projects/socket-chat`
Real-time chat application with personal and channel-based messaging.
Tech: React.js, Node.js, MongoDB, Socket.io

**Compute Village** → `/projects/compute-village`
Distributed compute project.
Tech: TypeScript

### Skills
Displayed as an icon/logo web — each skill shown with its official logo arranged in a visual constellation/cloud layout, grouped loosely by category.

- **Languages:** TypeScript, JavaScript, Rust, Python, HCL
- **Frameworks:** React, Next.js, Node.js, FastAPI, Socket.io, Redux, Agno, Axum
- **Databases:** PostgreSQL, MongoDB, Firebase, Redis, Pinecone, Qdrant, OpenSearch
- **Messaging:** Kafka, NATS
- **DevOps:** Docker, Kubernetes, Terraform, Terragrunt, AWS, GCP, ArgoCD
- **Observability:** OTEL, Grafana, Prometheus, Loki, Jaeger, Datadog
- **GenAI:** LLMs, RAG, Embeddings, MCP Servers, Multi-agent systems, LangFuse

### Achievements
Each achievement has a photo and a 2-line description.

- **Rashtrapati Bhavan Invite** — Photo: [placeholder]
  Invited by the President of India on the 76th Independence Day. Recognized for outstanding contribution at a national level.

- **SIH 2024 Winners** — Photo: [placeholder]
  Won Smart India Hackathon 2024, building a SCADA system for GAIL. Competed against 80,000+ teams nationwide.

- **Innerve 9.0 Winners** — Photo: [placeholder]
  1st place at Innerve 9.0, Army Institute of Technology. Outperformed 1,250+ teams.

- **SheCodes 2024 — Blockchain Track Winner** — Photo: [placeholder]
  Built a decentralised carbon credits marketplace. Won 1st place in the blockchain track among 70 teams.

- **5+ Hackathon Wins** — Photo: [placeholder]
  Consistent track record across national and international hackathons, competing against 100,000+ teams cumulatively.

### Volunteering

- **Point Blank — Elite Coding Club, DSCE** — Photo: [placeholder]
  Part of an elite group of passionate techies — mentored by seniors with 8+ years of industry experience. Learned system design, worked on real projects, and taught juniors from internship and company learnings. Active in "Random & Fresh Blood," a community channel where members discuss everything from SF technologies to compilers. Beyond tech: house parties, treks, and a tight-knit crew that made college memorable.

- **Literary Society, DSCE — Debate & MUN** — Photo: [placeholder]
  Member for 2 years across the Debate Society and Model United Nations. Attended 30+ college fests, winning at 12–13 per year — debates, extempore, MUN conferences. Built public speaking skills, learned to evaluate the world critically, and formed lasting friendships with seniors and juniors alike. Concerts, fests, and more fests than anyone can count.

### Contact
- Email: agarwalvivek2902@gmail.com
- GitHub: github.com/agarwalvivek29
- LinkedIn: linkedin.com/in/agarwalvivek29
- Twitter: twitter.com/agarwalvivek29

---

## Implementation Steps
1. Scaffold Astro project with Tailwind
2. Create base layout (dark theme, fonts, SEO meta)
3. Build Navbar (sticky, responsive hamburger)
4. Build Hero section
5. Build About section (3 interest cards)
6. Build Experience timeline
7. Build Projects grid
8. Build Skills section (categorized chips)
9. Build Achievements section
10. Build Contact + Footer
11. Compose index.astro
12. Add scroll fade-in animations
13. Verify responsive behavior

## Verification
- `npm run dev` — all sections render correctly
- Test mobile/tablet/desktop breakpoints
- Verify nav smooth-scroll and hamburger toggle
- `npm run build` — clean production build
