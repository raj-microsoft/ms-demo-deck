const PptxGenJS = require("pptxgenjs");
const pptx = new PptxGenJS();

// -- Theme --
const BG = "09090B";
const BG2 = "18181B";
const AZURE = "0078D4";
const AZURE_LIGHT = "50A0E6";
const EMERALD = "10B981";
const AMBER = "F59E0B";
const RED = "EF4444";
const VIOLET = "8B5CF6";
const WHITE = "FFFFFF";
const DIM = "71717A";
const DIMMER = "52525B";
const FONT = "Segoe UI";
const MONO = "Consolas";

pptx.author = "Raj Balakrishnan";
pptx.company = "Microsoft";
pptx.subject = "AI Agents Meet the Cloud";
pptx.title = "When AI Agents Meet the Cloud";
pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5

function addBg(slide, color = BG) {
  slide.background = { color };
}

function titleSlide(title, subtitle, notes, opts = {}) {
  const slide = pptx.addSlide();
  addBg(slide, opts.bg || BG);
  if (opts.pill) {
    slide.addText(opts.pill, { x: 0, y: 1.0, w: "100%", h: 0.4, align: "center", fontSize: 11, fontFace: FONT, color: AZURE_LIGHT, bold: true });
  }
  const titleY = opts.pill ? 1.5 : 1.8;
  slide.addText(title, { x: 0.8, y: titleY, w: 11.73, h: 2.0, align: "center", fontSize: opts.fontSize || 36, fontFace: FONT, color: WHITE, bold: true, lineSpacingMultiple: 1.1, isTextBox: true });
  if (subtitle) {
    slide.addText(subtitle, { x: 1.5, y: titleY + 2.1, w: 10.33, h: 1.2, align: "center", fontSize: 16, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.4 });
  }
  if (opts.footer) {
    slide.addText(opts.footer, { x: 0, y: 6.5, w: "100%", h: 0.4, align: "center", fontSize: 10, fontFace: FONT, color: DIMMER });
  }
  if (notes) slide.addNotes(notes);
  return slide;
}

// ===== SLIDE 1: Title =====
const s1 = pptx.addSlide();
addBg(s1);
s1.addText("Microsoft Netherlands · Internal Session · 2026", { x: 0, y: 1.0, w: "100%", h: 0.35, align: "center", fontSize: 10, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s1.addText([
  { text: "When ", options: { color: WHITE } },
  { text: "AI Agents", options: { color: AZURE_LIGHT } },
  { text: "\nMeet the Cloud", options: { color: WHITE } },
], { x: 0.8, y: 1.6, w: 11.73, h: 2.2, align: "center", fontSize: 40, fontFace: FONT, bold: true, lineSpacingMultiple: 1.1 });
s1.addText("From code assistants to infrastructure operators.\nWhat this means for Azure — and for your customers.", { x: 2, y: 3.9, w: 9.33, h: 1.0, align: "center", fontSize: 16, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.4 });
s1.addText("Raj Balakrishnan · Sr. Cloud Solution Architect · Western Europe", { x: 0, y: 5.5, w: "100%", h: 0.4, align: "center", fontSize: 10, fontFace: FONT, color: DIMMER });
s1.addNotes('Hey everyone. Thanks for being here. I know "AI demo" probably triggers an involuntary eye roll at this point — so let me start by being direct about what the next 45 minutes are, and what they\'re not.');

// ===== SLIDE 2: Before we start =====
const s2 = pptx.addSlide();
addBg(s2);
s2.addText("Before we start.", { x: 0, y: 0.8, w: "100%", h: 0.8, align: "center", fontSize: 36, fontFace: FONT, color: WHITE, bold: true });
const items2 = [
  { mark: "✕", markColor: RED, text: 'This is not a product pitch for OpenClaw' },
  { mark: "✕", markColor: RED, text: 'This is not "another AI demo"' },
  { mark: "✓", markColor: EMERALD, text: 'This is about a paradigm shift:\nagents that operate infrastructure, not just write code' },
  { mark: "✓", markColor: EMERALD, text: 'This is about why Azure is uniquely positioned\nfor the agentic era' },
];
items2.forEach((item, i) => {
  s2.addText([
    { text: item.mark + "  ", options: { color: item.markColor, bold: true, fontSize: 20 } },
    { text: item.text, options: { color: WHITE, fontSize: 16 } },
  ], { x: 2.0, y: 1.9 + i * 1.0, w: 9.33, h: 0.9, align: "center", fontFace: FONT, lineSpacingMultiple: 1.2 });
});
s2.addText("I'll use an open-source agent called OpenClaw as a demo vehicle.\nBut the patterns apply to any agent your customers bring to Azure.", { x: 1.5, y: 5.8, w: 10.33, h: 0.8, align: "center", fontSize: 11, fontFace: FONT, color: DIMMER, italic: true });
s2.addNotes("I'm not selling you OpenClaw. I don't work for them. I'm showing you a pattern that's coming whether we're ready or not. AI agents that don't just write code — they deploy infrastructure, respond to incidents, optimize costs. OpenClaw is one example. Your customers will bring their own. The question is: are we ready to help them do it safely on Azure?");

// ===== SLIDE 3: Key message quote =====
const s3 = pptx.addSlide();
addBg(s3);
s3.addText([
  { text: '"AI agents are moving from code assistants\nto infrastructure operators.\n\n', options: { color: "D4D4D8", italic: true } },
  { text: 'Azure is the platform that makes this\nsafe and powerful."', options: { color: AZURE_LIGHT, italic: true } },
], { x: 1.5, y: 1.5, w: 10.33, h: 3.5, align: "center", fontSize: 24, fontFace: FONT, lineSpacingMultiple: 1.3 });
s3.addText("Remember this. I'll come back to it.", { x: 0, y: 5.5, w: "100%", h: 0.4, align: "center", fontSize: 12, fontFace: FONT, color: DIMMER });
s3.addNotes("This is the key message of this entire session. Write it down if you want. AI agents are moving from code assistants to infrastructure operators. Azure is the platform that makes this safe and powerful. Everything I show you today ladders up to this.");

// ===== SLIDE 4: The Shift - Conductor to Orchestrator =====
const s4 = pptx.addSlide();
addBg(s4);
s4.addText("The Shift", { x: 0, y: 0.5, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s4.addText([
  { text: "From ", options: { color: WHITE } },
  { text: "conductor", options: { color: AZURE_LIGHT } },
  { text: " to ", options: { color: WHITE } },
  { text: "orchestrator", options: { color: AZURE_LIGHT } },
], { x: 0, y: 0.9, w: "100%", h: 0.8, align: "center", fontSize: 32, fontFace: FONT, bold: true });
s4.addText("Addy Osmani's framework for how AI coding is evolving.", { x: 0, y: 1.7, w: "100%", h: 0.5, align: "center", fontSize: 14, fontFace: FONT, color: DIM });

// Card: Conductor
s4.addShape(pptx.ShapeType.roundRect, { x: 1.5, y: 2.5, w: 4.8, h: 2.8, fill: { color: "27272A", transparency: 40 }, line: { color: "3F3F46", width: 1 }, rectRadius: 0.15 });
s4.addText("🎵 Conductor", { x: 1.7, y: 2.6, w: 4.4, h: 0.5, fontSize: 16, fontFace: FONT, color: WHITE, bold: true });
s4.addText("One agent, synchronous. You guide it line by line. Your context window is the ceiling. This is where most people are today.", { x: 1.7, y: 3.2, w: 4.4, h: 1.8, fontSize: 12, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.4 });

// Card: Orchestrator
s4.addShape(pptx.ShapeType.roundRect, { x: 7.0, y: 2.5, w: 4.8, h: 2.8, fill: { color: "27272A", transparency: 40 }, line: { color: "0078D4", width: 1 }, rectRadius: 0.15 });
s4.addText("🎼 Orchestrator", { x: 7.2, y: 2.6, w: 4.4, h: 0.5, fontSize: 16, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s4.addText("Multiple agents, asynchronous. You plan and verify. Each agent has its own context, scope, responsibility. The codebase is your canvas.", { x: 7.2, y: 3.2, w: 4.4, h: 1.8, fontSize: 12, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.4 });

s4.addText('Source: Addy Osmani — "The Code Agent Orchestra" (O\'Reilly AI CodeCon, March 2026)', { x: 0, y: 5.8, w: "100%", h: 0.4, align: "center", fontSize: 9, fontFace: FONT, color: DIMMER });
s4.addNotes("Addy Osmani gave a great talk at O'Reilly last week about this. He describes the shift from being a conductor — where you guide a single AI in real time — to being an orchestrator, where you manage a team of agents working asynchronously. Most developers today are conductors. The best ones are becoming orchestrators. But here's what nobody's talking about yet: there's a level BEYOND orchestrating code agents. And that's orchestrating infrastructure agents.");

// ===== SLIDE 5: 8 Levels =====
const s5 = pptx.addSlide();
addBg(s5);
s5.addText([
  { text: "Steve Yegge's ", options: { color: WHITE } },
  { text: "8 Levels", options: { color: AZURE_LIGHT } },
  { text: " of AI-Assisted Coding", options: { color: WHITE } },
], { x: 0, y: 0.4, w: "100%", h: 0.7, align: "center", fontSize: 24, fontFace: FONT, bold: true });

const levels = [
  { n: 1, label: "No AI", w: 0.5, color: "3F3F46", text: "—" },
  { n: 2, label: "Autocomplete", w: 1.0, color: "3F3F46", text: "Tab-tab-tab" },
  { n: 3, label: "Chat assistant", w: 1.8, color: "4A3A10", text: "← Most people" },
  { n: 4, label: "Inline agent", w: 2.5, color: "4A3A10", text: "← are here" },
  { n: 5, label: "Full agent mode", w: 3.3, color: "2E1F5E", text: "GHCP Agent Mode" },
  { n: 6, label: "Multi-agent", w: 4.2, color: "0C3A6E", text: "Orchestration begins" },
  { n: 7, label: "Agent teams", w: 5.2, color: "0A4A3A", text: "Autonomous operations" },
  { n: 8, label: "Full autonomy", w: 6.2, color: "0D5E3A", text: "Infra operators ★" },
];
levels.forEach((lv, i) => {
  const y = 1.3 + i * 0.65;
  s5.addText(String(lv.n), { x: 1.0, y, w: 0.4, h: 0.5, fontSize: 11, fontFace: FONT, color: DIMMER, bold: true, align: "right" });
  s5.addText(lv.label, { x: 1.5, y, w: 2.0, h: 0.5, fontSize: 11, fontFace: FONT, color: DIM, align: "right" });
  s5.addShape(pptx.ShapeType.roundRect, { x: 3.7, y: y + 0.05, w: lv.w, h: 0.4, fill: { color: lv.color }, rectRadius: 0.05 });
  s5.addText(lv.text, { x: 3.8, y, w: lv.w - 0.1, h: 0.5, fontSize: 9, fontFace: FONT, color: WHITE, bold: true });
});
s5.addText("GHCP excels at levels 3–5. The opportunity — and the risk — lives at levels 6–8.", { x: 0, y: 6.7, w: "100%", h: 0.4, align: "center", fontSize: 11, fontFace: FONT, color: DIMMER });
s5.addNotes("Steve Yegge laid out 8 levels of AI-assisted coding. Most developers are at level 3 or 4 — chat assistants and inline agents. GitHub Copilot absolutely dominates levels 3 through 5. It's the best tool there is for writing code with AI. But levels 6 through 8 — multi-agent orchestration, agent teams, full autonomy — that's a different game entirely. That's where agents stop writing code and start operating infrastructure. And that's where this conversation gets interesting for us.");

// ===== SLIDE 6: What's beyond code assistance =====
const s6 = pptx.addSlide();
addBg(s6);
s6.addText([
  { text: "What's ", options: { color: WHITE } },
  { text: "beyond", options: { color: AZURE_LIGHT } },
  { text: " code assistance?", options: { color: WHITE } },
], { x: 0, y: 0.5, w: "100%", h: 0.7, align: "center", fontSize: 26, fontFace: FONT, bold: true });

const cards6 = [
  { emoji: "🚀", title: "Deploy", color: VIOLET, desc: "Agents that provision infrastructure from a conversation. Architecture → Bicep → Azure, in minutes." },
  { emoji: "🚨", title: "Respond", color: RED, desc: "3 AM incident? Agent diagnoses, proposes fix, executes with approval. From your phone." },
  { emoji: "💰", title: "Optimize", color: AMBER, desc: "Continuous FinOps. Find waste, right-size, enforce budgets. Not annual reviews — real-time." },
];
cards6.forEach((c, i) => {
  const x = 1.2 + i * 3.8;
  s6.addShape(pptx.ShapeType.roundRect, { x, y: 1.6, w: 3.4, h: 2.8, fill: { color: "27272A", transparency: 40 }, line: { color: c.color, width: 1, transparency: 60 }, rectRadius: 0.15 });
  s6.addText(c.emoji + " " + c.title, { x: x + 0.2, y: 1.8, w: 3.0, h: 0.5, fontSize: 16, fontFace: FONT, color: c.color, bold: true });
  s6.addText(c.desc, { x: x + 0.2, y: 2.4, w: 3.0, h: 1.6, fontSize: 12, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.4 });
});
s6.addText([
  { text: "This is where ", options: { color: DIM } },
  { text: "OpenClaw", options: { color: AZURE_LIGHT } },
  { text: " sits — not competing with GHCP, ", options: { color: DIM } },
  { text: "extending beyond it.", options: { color: WHITE, bold: true } },
], { x: 0, y: 5.0, w: "100%", h: 0.6, align: "center", fontSize: 14, fontFace: FONT });
s6.addNotes("Deploy infrastructure from a conversation. Respond to incidents autonomously. Optimize costs continuously. This is what agents at level 6 and above do. And this is exactly where OpenClaw sits — not trying to replace GitHub Copilot at writing code, but extending into territory Copilot doesn't cover.");

// ===== SLIDE 7: The Objection =====
const s7 = titleSlide([
  { text: '"Can\'t I do all this\nwith ', options: { color: WHITE } },
  { text: 'GitHub Copilot', options: { color: AZURE_LIGHT } },
  { text: '?"', options: { color: WHITE } },
], "Let's address this head-on.", "I know you're thinking it. Some of you are already typing it in Teams. \"Can't Copilot do all of this?\" It's a fair question. Let me be direct.", { pill: "The Objection" });

// ===== SLIDE 8: Comparison =====
const s8 = pptx.addSlide();
addBg(s8);

// Left card
s8.addShape(pptx.ShapeType.roundRect, { x: 0.6, y: 0.5, w: 5.7, h: 5.8, fill: { color: "27272A", transparency: 40 }, line: { color: "3F3F46", width: 1 }, rectRadius: 0.15 });
s8.addText("GitHub Copilot", { x: 0.8, y: 0.7, w: 5.3, h: 0.6, align: "center", fontSize: 20, fontFace: FONT, color: WHITE, bold: true });
const ghcpItems = ["Writes code in your IDE", "Excellent at that — best in class", "Runs in VS Code / JetBrains", "Session ends when you close the tab", "Single-user, single-session"];
ghcpItems.forEach((t, i) => {
  s8.addText("●  " + t, { x: 1.2, y: 1.5 + i * 0.55, w: 4.8, h: 0.5, fontSize: 13, fontFace: FONT, color: DIM });
});
s8.addText("Your pair programmer.", { x: 0.8, y: 4.6, w: 5.3, h: 0.5, align: "center", fontSize: 14, fontFace: FONT, color: EMERALD, bold: true });

// Divider
s8.addShape(pptx.ShapeType.line, { x: 6.66, y: 0.8, w: 0, h: 5.2, line: { color: "3F3F46", width: 1 } });

// Right card
s8.addShape(pptx.ShapeType.roundRect, { x: 7.03, y: 0.5, w: 5.7, h: 5.8, fill: { color: "27272A", transparency: 40 }, line: { color: AZURE, width: 1 }, rectRadius: 0.15 });
s8.addText("Autonomous Agent", { x: 7.23, y: 0.7, w: 5.3, h: 0.6, align: "center", fontSize: 20, fontFace: FONT, color: AZURE_LIGHT, bold: true });
const agentItems = ["Operates infrastructure, not just code", "Deploys from Telegram, Teams, WhatsApp", "Responds to 3 AM incidents from your phone", "Runs 13 cron jobs: costs, email, GitHub, monitoring", "Memory across sessions — learns your environment"];
agentItems.forEach((t, i) => {
  s8.addText("●  " + t, { x: 7.6, y: 1.5 + i * 0.55, w: 4.8, h: 0.5, fontSize: 13, fontFace: FONT, color: DIM });
});
s8.addText("Your SRE that never sleeps.", { x: 7.23, y: 4.6, w: 5.3, h: 0.5, align: "center", fontSize: 14, fontFace: FONT, color: AZURE_LIGHT, bold: true });

s8.addText([
  { text: "This isn't either/or — it's ", options: { color: DIM } },
  { text: "both", options: { color: WHITE, bold: true } },
  { text: ".\nGHCP for code. Agents for everything else.", options: { color: DIM } },
], { x: 0, y: 6.3, w: "100%", h: 0.7, align: "center", fontSize: 14, fontFace: FONT, lineSpacingMultiple: 1.3 });
s8.addNotes("GitHub Copilot is your pair programmer. It's brilliant at that. I use it every day. But it can't deploy infrastructure from Telegram at 3 AM. It can't run cron jobs monitoring your Azure spend. It doesn't have memory between sessions. It doesn't operate your cloud — it writes code in your IDE. OpenClaw, or any autonomous agent, is the SRE that never sleeps. They're complementary. Use both.");

// ===== SLIDE 9: What is OpenClaw =====
const s9 = pptx.addSlide();
addBg(s9);
s9.addText("Honest, Not Hype", { x: 0, y: 0.3, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s9.addText([
  { text: "What is ", options: { color: WHITE } },
  { text: "OpenClaw", options: { color: AZURE_LIGHT } },
  { text: "?", options: { color: WHITE } },
], { x: 0, y: 0.65, w: "100%", h: 0.7, align: "center", fontSize: 30, fontFace: FONT, bold: true });

const cards9 = [
  [
    { emoji: "🔓", title: "Open Source", desc: "Self-hosted. Your credentials.\nNo vendor lock-in." },
    { emoji: "📱", title: "Multi-Channel", desc: "Telegram, Teams, Discord,\nWhatsApp, CLI." },
    { emoji: "🔌", title: "Authenticated", desc: "Real Azure CLI, GitHub,\nGraph API access." },
  ],
  [
    { emoji: "🧠", title: "Memory", desc: "Context continuity across\nsessions. Learns your env." },
    { emoji: "⏰", title: "Proactive", desc: "Cron jobs, heartbeats,\nscheduled monitoring." },
    { emoji: "🧩", title: "Extensible", desc: "Skills marketplace.\nWrite & share your own." },
  ],
];
cards9.forEach((row, ri) => {
  row.forEach((c, ci) => {
    const x = 0.8 + ci * 4.0;
    const y = 1.6 + ri * 2.5;
    s9.addShape(pptx.ShapeType.roundRect, { x, y, w: 3.6, h: 2.0, fill: { color: "27272A", transparency: 40 }, line: { color: "3F3F46", width: 1 }, rectRadius: 0.12 });
    s9.addText(c.emoji + " " + c.title, { x: x + 0.2, y: y + 0.15, w: 3.2, h: 0.45, fontSize: 14, fontFace: FONT, color: WHITE, bold: true });
    s9.addText(c.desc, { x: x + 0.2, y: y + 0.65, w: 3.2, h: 1.1, fontSize: 11, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.3 });
  });
});
s9.addNotes("So what is OpenClaw specifically? Open-source autonomous agent. Self-hosted — runs on your machine or VM, uses your Azure credentials. Multi-channel — works from Telegram, Teams, Discord, WhatsApp. Authenticated access to Azure CLI, GitHub, Graph API. Has memory across sessions. Runs cron jobs proactively. Extensible with a skills system.");

// ===== SLIDE 10: What OpenClaw is NOT =====
const s10 = pptx.addSlide();
addBg(s10);
s10.addText([
  { text: "What OpenClaw is ", options: { color: WHITE } },
  { text: "NOT", options: { color: RED } },
  { text: ".", options: { color: WHITE } },
], { x: 0, y: 0.7, w: "100%", h: 0.7, align: "center", fontSize: 30, fontFace: FONT, bold: true });
const notItems = [
  "Not production-ready enterprise software",
  "Not trying to replace GitHub Copilot",
  "Not a Microsoft product",
  "Not magic — it makes mistakes, hallucinates, needs guardrails",
];
notItems.forEach((t, i) => {
  s10.addText("●  " + t, { x: 2.5, y: 1.8 + i * 0.65, w: 8.33, h: 0.55, fontSize: 15, fontFace: FONT, color: DIM });
});
s10.addText([
  { text: "It's a ", options: { color: DIM } },
  { text: "pattern", options: { color: WHITE, bold: true } },
  { text: ". A proof of concept.\n", options: { color: DIM } },
  { text: "A glimpse of what's coming.", options: { color: AZURE_LIGHT } },
], { x: 0, y: 4.5, w: "100%", h: 1.0, align: "center", fontSize: 16, fontFace: FONT, lineSpacingMultiple: 1.4 });
s10.addNotes("Let me be honest about what it's not. It's not enterprise-ready. It's not a Microsoft product. It's not trying to replace Copilot. And it's not magic — it hallucinates, it makes mistakes, it needs guardrails. But it's a pattern. A working proof of concept of what autonomous agents operating on Azure look like. And your customers? They're going to build their own versions. That's why this matters.");

// ===== SLIDE 11: Live Demo divider =====
titleSlide([
  { text: "Let's build something.\n", options: { color: WHITE } },
  { text: "Right now.", options: { color: AZURE_LIGHT } },
], "Conversation → Architecture → Bicep → Deploy → App live.", "Enough theory. Let me show you. I'm going to have a conversation with an AI agent and we're going to go from a customer request to a running app on Azure. Live.", { pill: "Live Demo", fontSize: 38 });

// ===== SLIDE 12: Demo - Conversation (chat mockup) =====
const s12 = pptx.addSlide();
addBg(s12);
s12.addText("Demo — Step 1", { x: 0, y: 0.3, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s12.addText("The Conversation", { x: 0, y: 0.7, w: "100%", h: 0.6, align: "center", fontSize: 24, fontFace: FONT, color: WHITE, bold: true });

// User bubble
s12.addShape(pptx.ShapeType.roundRect, { x: 5.5, y: 1.6, w: 6.5, h: 1.4, fill: { color: "0078D4", transparency: 80 }, line: { color: AZURE, width: 1, transparency: 50 }, rectRadius: 0.15 });
s12.addText("👤", { x: 12.1, y: 1.65, w: 0.5, h: 0.5, fontSize: 16 });
s12.addText("We need a web app where freelancers can manage contracts, generate invoices, and track time. It needs user auth and a database.", { x: 5.7, y: 1.7, w: 6.1, h: 1.2, fontSize: 12, fontFace: FONT, color: WHITE, lineSpacingMultiple: 1.4 });

// Bot bubble
s12.addShape(pptx.ShapeType.roundRect, { x: 1.0, y: 3.3, w: 7.5, h: 2.0, fill: { color: "27272A", transparency: 40 }, line: { color: "3F3F46", width: 1 }, rectRadius: 0.15 });
s12.addText("🐾", { x: 0.4, y: 3.35, w: 0.5, h: 0.5, fontSize: 16 });
s12.addText("Got it. I'll design this with: Next.js on App Service, Azure SQL for data, Blob Storage for file uploads, AD B2C for auth, and an Azure Function for Stripe webhooks. Let me draw the architecture and generate the Bicep...", { x: 1.2, y: 3.4, w: 7.1, h: 1.8, fontSize: 12, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.4 });

s12.addShape(pptx.ShapeType.roundRect, { x: 3.5, y: 5.7, w: 6.33, h: 0.55, fill: { color: "0078D4", transparency: 85 }, line: { color: AZURE, width: 1, transparency: 60 }, rectRadius: 0.08 });
s12.addText("🎯 Plain English → structured architecture in seconds", { x: 3.5, y: 5.7, w: 6.33, h: 0.55, align: "center", fontSize: 12, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s12.addNotes("Customer describes what they need in plain English. The agent immediately breaks it down into Azure services — App Service, SQL, Storage, B2C, Functions. No requirements doc. No three-week architecture review. Just a conversation.");

// ===== SLIDE 13: Architecture =====
const s13 = pptx.addSlide();
addBg(s13);
s13.addText("Demo — Step 2", { x: 0, y: 0.3, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s13.addText("Architecture materializes", { x: 0, y: 0.7, w: "100%", h: 0.6, align: "center", fontSize: 24, fontFace: FONT, color: WHITE, bold: true });

const archItems = [
  [
    { emoji: "🌐", name: "Next.js", sub: "App Service", color: AZURE },
    { emoji: "🗄️", name: "Azure SQL", sub: "Contracts & Invoices", color: "06B6D4" },
    { emoji: "📦", name: "Blob Storage", sub: "File uploads", color: VIOLET },
  ],
  [
    { emoji: "🔐", name: "AD B2C", sub: "Auth", color: EMERALD },
    { emoji: "⚡", name: "Functions", sub: "Stripe webhooks", color: "F97316" },
    { emoji: "📊", name: "App Insights", sub: "Monitoring", color: AMBER },
  ],
];
archItems.forEach((row, ri) => {
  row.forEach((item, ci) => {
    const x = 1.0 + ci * 4.1;
    const y = 1.7 + ri * 2.5;
    s13.addShape(pptx.ShapeType.roundRect, { x, y, w: 3.3, h: 1.8, fill: { color: "27272A", transparency: 40 }, line: { color: item.color, width: 1, transparency: 50 }, rectRadius: 0.12 });
    s13.addText(item.emoji, { x, y: y + 0.15, w: 3.3, h: 0.5, align: "center", fontSize: 22 });
    s13.addText(item.name, { x, y: y + 0.7, w: 3.3, h: 0.4, align: "center", fontSize: 14, fontFace: FONT, color: WHITE, bold: true });
    s13.addText(item.sub, { x, y: y + 1.1, w: 3.3, h: 0.4, align: "center", fontSize: 10, fontFace: FONT, color: DIMMER });
  });
  // arrows between items in row
  if (ri === 0 || ri === 1) {
    s13.addText("↔", { x: 4.1, y: 1.7 + ri * 2.5 + 0.5, w: 0.8, h: 0.5, align: "center", fontSize: 18, color: AZURE_LIGHT });
    s13.addText("↔", { x: 8.2, y: 1.7 + ri * 2.5 + 0.5, w: 0.8, h: 0.5, align: "center", fontSize: 18, color: AZURE_LIGHT });
  }
});
s13.addNotes("The agent generates a visual architecture. Customer sees their words turning into infrastructure. Six Azure services, wired together, from one paragraph of requirements.");

// ===== SLIDE 14: Bicep code =====
const s14 = pptx.addSlide();
s14.background = { color: "0D1117" };
s14.addText("Demo — Step 3", { x: 0, y: 0.2, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s14.addText("Generated Bicep — real, deployable IaC", { x: 0, y: 0.5, w: "100%", h: 0.4, align: "center", fontSize: 14, fontFace: FONT, color: DIMMER });

const bicepCode = `// Auto-generated from conversation
param location string = resourceGroup().location
param appName string = 'freelancer-saas'

resource appServicePlan 'Microsoft.Web/serverfarms@2023-12-01' = {
  name: '\${appName}-plan'
  location: location
  sku: { name: 'B1', tier: 'Basic' }
  kind: 'linux'
  properties: { reserved: true }
}

resource webApp 'Microsoft.Web/sites@2023-12-01' = {
  name: '\${appName}-web'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|20-lts'
      appSettings: [
        { name: 'DATABASE_URL', value: sqlServer.properties... }
        { name: 'AZURE_STORAGE_CONNECTION', value: storage... }
      ]
    }
  }
}
// + SQL Server, Storage, App Insights, Functions...`;

s14.addShape(pptx.ShapeType.roundRect, { x: 1.5, y: 1.0, w: 10.33, h: 5.5, fill: { color: "161B22" }, line: { color: "30363D", width: 1 }, rectRadius: 0.12 });
s14.addText(bicepCode, { x: 1.8, y: 1.2, w: 9.73, h: 5.1, fontSize: 10, fontFace: MONO, color: "E6EDF3", lineSpacingMultiple: 1.2, valign: "top" });
s14.addNotes("Real Bicep. Specific to this customer's requirements — not a generic template. App Service on Linux, Node 20, app settings wired to the SQL server and storage account. The agent generates the full file — SQL, storage, monitoring, everything.");

// ===== SLIDE 15: Deploy =====
const s15 = pptx.addSlide();
s15.background = { color: "0D1117" };
s15.addText("Demo — Step 4", { x: 0, y: 0.2, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s15.addText("Deploy to Azure — live", { x: 0, y: 0.5, w: "100%", h: 0.4, align: "center", fontSize: 14, fontFace: FONT, color: DIMMER });

const deployCode = `az group create --name rg-freelancer-saas --location westeurope

az deployment group create \\
  --resource-group rg-freelancer-saas \\
  --template-file main.bicep \\
  --parameters appName=freelancer-saas

# ✓ App Service Plan ............ created (12s)
# ✓ App Service ................. created (18s)
# ✓ SQL Server .................. created (45s)
# ✓ SQL Database ................ created (22s)
# ✓ Storage Account ............. created (8s)
# ✓ Application Insights ........ created (6s)
#
# 🚀 Deployment complete in 1m 51s
# 🌐 https://freelancer-saas-web.azurewebsites.net`;

s15.addShape(pptx.ShapeType.roundRect, { x: 1.5, y: 1.0, w: 10.33, h: 4.8, fill: { color: "161B22" }, line: { color: "30363D", width: 1 }, rectRadius: 0.12 });
s15.addText(deployCode, { x: 1.8, y: 1.2, w: 9.73, h: 4.4, fontSize: 11, fontFace: MONO, color: "E6EDF3", lineSpacingMultiple: 1.25, valign: "top" });

s15.addShape(pptx.ShapeType.roundRect, { x: 3.5, y: 6.1, w: 6.33, h: 0.55, fill: { color: "0078D4", transparency: 85 }, line: { color: AZURE, width: 1, transparency: 60 }, rectRadius: 0.08 });
s15.addText("🎯 Conversation → running infrastructure: ~2 minutes", { x: 3.5, y: 6.1, w: 6.33, h: 0.55, align: "center", fontSize: 12, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s15.addNotes("Resource group created. Bicep deployed. Six resources provisioned. Under 2 minutes. The customer can see each resource appearing in the Azure portal in real-time. This is the moment jaws drop.");

// ===== SLIDE 16: Wow moment =====
const s16 = pptx.addSlide();
addBg(s16);
s16.addText("🤯", { x: 0, y: 1.2, w: "100%", h: 1.5, align: "center", fontSize: 72 });
s16.addText("That just happened.", { x: 0, y: 2.8, w: "100%", h: 0.8, align: "center", fontSize: 36, fontFace: FONT, color: WHITE, bold: true });
s16.addText([
  { text: "Customer described an idea in plain English.\n", options: { color: DIM } },
  { text: "Minutes later, it's running in Azure.", options: { color: AZURE_LIGHT } },
], { x: 1.5, y: 3.8, w: 10.33, h: 1.0, align: "center", fontSize: 16, fontFace: FONT, lineSpacingMultiple: 1.4 });
s16.addNotes("Let that sink in. A customer walked in with an idea. They described it. And before the coffee got cold, it's running in Azure. But building is only half the story. Let me show you what happens after deployment.");

// ===== SLIDE 17: Incident divider =====
const s17 = pptx.addSlide();
addBg(s17);
s17.addText("Demo — Operations", { x: 0, y: 1.2, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: RED, bold: true });
s17.addText([
  { text: "It's 3 AM.\n", options: { color: WHITE } },
  { text: "Your app is down.", options: { color: RED } },
], { x: 0, y: 1.8, w: "100%", h: 1.5, align: "center", fontSize: 36, fontFace: FONT, bold: true, lineSpacingMultiple: 1.2 });
s17.addText("What does an autonomous agent do?", { x: 0, y: 3.5, w: "100%", h: 0.6, align: "center", fontSize: 16, fontFace: FONT, color: DIM });
s17.addNotes("Building is impressive. But your customers don't just build — they operate. They get woken up at 3 AM. Let me show you what happens.");

// ===== SLIDE 18: Incident chat =====
const s18 = pptx.addSlide();
addBg(s18);

// Bot alert bubble
s18.addText("🐾", { x: 1.0, y: 0.6, w: 0.5, h: 0.5, fontSize: 16 });
s18.addShape(pptx.ShapeType.roundRect, { x: 1.6, y: 0.5, w: 8.0, h: 2.0, fill: { color: "27272A", transparency: 40 }, line: { color: "3F3F46", width: 1 }, rectRadius: 0.15 });
s18.addText("⚠️ Alert: freelancer-saas-web returning 500s.\n94% error rate in last 5 min.\n\nRoot cause: DATABASE_URL changed 12 min ago to a non-existent server. Want me to roll back?", { x: 1.8, y: 0.6, w: 7.6, h: 1.8, fontSize: 12, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.4 });

// User response
s18.addShape(pptx.ShapeType.roundRect, { x: 8.0, y: 2.9, w: 3.0, h: 0.6, fill: { color: "0078D4", transparency: 80 }, line: { color: AZURE, width: 1, transparency: 50 }, rectRadius: 0.12 });
s18.addText("Roll it back", { x: 8.0, y: 2.9, w: 2.7, h: 0.6, align: "center", fontSize: 13, fontFace: FONT, color: WHITE });
s18.addText("👤", { x: 11.1, y: 2.9, w: 0.5, h: 0.5, fontSize: 16 });

// Bot response
s18.addText("🐾", { x: 1.0, y: 3.8, w: 0.5, h: 0.5, fontSize: 16 });
s18.addShape(pptx.ShapeType.roundRect, { x: 1.6, y: 3.8, w: 7.0, h: 1.6, fill: { color: "27272A", transparency: 40 }, line: { color: "3F3F46", width: 1 }, rectRadius: 0.15 });
s18.addText("✅ Config reverted. App restarted.\n0% error rate. 142ms response time.\n\nPost-incident report → Notion link", { x: 1.8, y: 3.9, w: 6.6, h: 1.4, fontSize: 12, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.4 });

s18.addText("Two words from your phone. Incident resolved. Report generated.\nWhat would normally take 30 minutes took 2.", { x: 0, y: 5.8, w: "100%", h: 0.8, align: "center", fontSize: 12, fontFace: FONT, color: DIMMER });
s18.addNotes("The agent detected it, diagnosed it, and asked for permission. Two words from your phone: \"Roll it back.\" Done. App healthy. Incident report generated. The entire war room is a chat thread. From your bed. This is what autonomous operations looks like.");

// ===== SLIDE 19: FinOps =====
const s19 = pptx.addSlide();
addBg(s19);
s19.addText("Demo — FinOps", { x: 0, y: 0.2, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: AMBER, bold: true });
s19.addText([
  { text: "Your Azure bill: ", options: { color: WHITE } },
  { text: "€40K/month", options: { color: AMBER } },
], { x: 0, y: 0.6, w: "100%", h: 0.6, align: "center", fontSize: 24, fontFace: FONT, bold: true });

const finopsCode = `# Agent queries Cost Management API:
# ┌─────────────────────────────────────┬─────────┐
# │ Issue                               │ Savings │
# ├─────────────────────────────────────┼─────────┤
# │ 12 VMs at 8% CPU (D4s → B2ms)      │  €4,800 │
# │ Dev/test running 24/7               │  €2,600 │
# │ 23 orphaned disks                   │  €1,100 │
# │ 8 unused public IPs                 │    €320 │
# │ No reserved instances               │  €3,200 │
# │ Premium storage on cold data        │  €1,400 │
# ├─────────────────────────────────────┼─────────┤
# │ TOTAL MONTHLY SAVINGS               │ €13,420 │
# └─────────────────────────────────────┴─────────┘`;

s19.addShape(pptx.ShapeType.roundRect, { x: 1.5, y: 1.4, w: 10.33, h: 3.5, fill: { color: "161B22" }, line: { color: "30363D", width: 1 }, rectRadius: 0.12 });
s19.addText(finopsCode, { x: 1.8, y: 1.5, w: 9.73, h: 3.3, fontSize: 10.5, fontFace: MONO, color: "E6EDF3", lineSpacingMultiple: 1.2, valign: "top" });

// Stats
const stats19 = [
  { value: "€160K", label: "Annual savings", color: AMBER },
  { value: "12 min", label: "Time to find & fix", color: EMERALD },
  { value: "1", label: "Conversation", color: AZURE_LIGHT },
];
stats19.forEach((s, i) => {
  const x = 2.0 + i * 3.5;
  s19.addText(s.value, { x, y: 5.2, w: 3.0, h: 0.8, align: "center", fontSize: 36, fontFace: FONT, color: s.color, bold: true });
  s19.addText(s.label, { x, y: 5.9, w: 3.0, h: 0.4, align: "center", fontSize: 10, fontFace: FONT, color: DIMMER });
});
s19.addNotes("€160K per year. Found in 12 minutes. Implemented in a single conversation. Not a PDF report that sits in someone's inbox. Actual changes, with guardrails, with the customer watching. This is FinOps on autopilot.");

// ===== SLIDE 20: Security divider =====
const s20 = pptx.addSlide();
addBg(s20);
s20.addText("The Serious Part", { x: 0, y: 1.5, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: RED, bold: true });
s20.addText([
  { text: '"But isn\'t this\n', options: { color: WHITE } },
  { text: 'dangerous?"', options: { color: RED } },
], { x: 0, y: 2.0, w: "100%", h: 1.5, align: "center", fontSize: 38, fontFace: FONT, bold: true, lineSpacingMultiple: 1.1 });
s20.addText("Let's talk about what can go wrong.", { x: 0, y: 3.8, w: "100%", h: 0.5, align: "center", fontSize: 16, fontFace: FONT, color: DIM });
s20.addNotes('Now the question every responsible engineer is thinking. "You\'re giving an AI agent access to production infrastructure? Are you insane?" Fair question. Let\'s be honest about the risks.');

// ===== SLIDE 21: What can go wrong =====
const s21 = pptx.addSlide();
addBg(s21);
s21.addText([
  { text: "What can go ", options: { color: WHITE } },
  { text: "wrong", options: { color: RED } },
  { text: "?", options: { color: WHITE } },
], { x: 0, y: 0.4, w: "100%", h: 0.7, align: "center", fontSize: 28, fontFace: FONT, bold: true });

const wrongCards = [
  { title: "Misinterpretation", desc: '"Delete the test environment" → deletes production. Ambiguous commands are the #1 risk.' },
  { title: "Over-provisioning", desc: "Agent spins up D64s_v5 when B2ms would do. LLMs default to \"more\" unless constrained." },
  { title: "Data access", desc: "Agent with broad RBAC could read Key Vault secrets, customer data, logs it shouldn't see." },
  { title: "Runaway loops", desc: "Agent retries a failed deployment 47 times. Each retry creates resources. Bill goes nuclear." },
];
wrongCards.forEach((c, i) => {
  const x = 0.6 + (i % 2) * 6.2;
  const y = 1.4 + Math.floor(i / 2) * 2.4;
  s21.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.8, h: 2.0, fill: { color: "27272A", transparency: 40 }, line: { color: RED, width: 1, transparency: 60 }, rectRadius: 0.12 });
  s21.addText(c.title, { x: x + 0.3, y: y + 0.15, w: 5.2, h: 0.45, fontSize: 15, fontFace: FONT, color: RED, bold: true });
  s21.addText(c.desc, { x: x + 0.3, y: y + 0.65, w: 5.2, h: 1.1, fontSize: 11, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.3 });
});
s21.addText("These are real risks. Not theoretical. Let's talk about what's in our control.", { x: 0, y: 6.2, w: "100%", h: 0.4, align: "center", fontSize: 11, fontFace: FONT, color: DIMMER });
s21.addNotes("I'm not going to sugarcoat this. An agent can misinterpret commands. It can over-provision. It can access data it shouldn't. It can get stuck in loops and burn through your budget. These are real risks. But — and this is the key insight — Azure already has the governance stack to handle this.");

// ===== SLIDE 22: What's in our control =====
const s22 = pptx.addSlide();
addBg(s22);
s22.addText([
  { text: "What's ", options: { color: WHITE } },
  { text: "in our control", options: { color: EMERALD } },
], { x: 0, y: 0.3, w: "100%", h: 0.6, align: "center", fontSize: 28, fontFace: FONT, bold: true });

const controlCards = [
  [
    { emoji: "🔐", title: "Azure AD + RBAC", desc: "Least privilege. Scoped tokens. Time-limited, revocable." },
    { emoji: "⚖️", title: "Azure Policy", desc: "Deny by default. Agent can't create non-compliant resources." },
    { emoji: "🔒", title: "Resource Locks", desc: "CanNotDelete on production. No override without human." },
  ],
  [
    { emoji: "🚧", title: "Human-in-the-Loop", desc: "Approval gates for destructive ops. No YOLO mode." },
    { emoji: "📝", title: "Activity Log", desc: "Every action traced. Full audit trail." },
    { emoji: "🧱", title: "Agent Sandboxing", desc: "Deny lists, command allowlists, resource group boundaries." },
  ],
];
controlCards.forEach((row, ri) => {
  row.forEach((c, ci) => {
    const x = 0.8 + ci * 4.0;
    const y = 1.1 + ri * 2.6;
    s22.addShape(pptx.ShapeType.roundRect, { x, y, w: 3.6, h: 2.1, fill: { color: "27272A", transparency: 40 }, line: { color: EMERALD, width: 1, transparency: 60 }, rectRadius: 0.12 });
    s22.addText(c.emoji + " " + c.title, { x: x + 0.2, y: y + 0.15, w: 3.2, h: 0.45, fontSize: 13, fontFace: FONT, color: EMERALD, bold: true });
    s22.addText(c.desc, { x: x + 0.2, y: y + 0.65, w: 3.2, h: 1.2, fontSize: 11, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.3 });
  });
});
s22.addNotes("Here's what IS in our control. Azure AD and RBAC for least privilege. Azure Policy — deny by default, the agent literally cannot create non-compliant resources. Resource Locks — CanNotDelete on anything important. Human approval gates for destructive operations. Full audit trail in Activity Log. And agent-level sandboxing. This is Azure's governance stack. It was built for humans. And it works even better for agents, because agents actually follow the rules.");

// ===== SLIDE 23: What's NOT yet in our control =====
const s23 = pptx.addSlide();
addBg(s23);
s23.addText([
  { text: "What's ", options: { color: WHITE } },
  { text: "NOT yet", options: { color: RED } },
  { text: " in our control", options: { color: WHITE } },
], { x: 0, y: 0.5, w: "100%", h: 0.7, align: "center", fontSize: 28, fontFace: FONT, bold: true });

const notYetItems = [
  "Hallucination in IaC generation — Agent might generate Bicep that compiles but does the wrong thing",
  "Token/credential scope management — Still largely manual. No standard tooling yet",
  "Agent-to-agent trust — No standard for how agents delegate to each other safely",
  "Prompt injection in multi-user scenarios — Shared agent surfaces are an attack vector",
  "Cost ceiling enforcement — Azure Budgets alert but don't hard-stop a runaway agent",
];
notYetItems.forEach((t, i) => {
  s23.addText("●  " + t, { x: 1.5, y: 1.5 + i * 0.8, w: 10.33, h: 0.7, fontSize: 13, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.3 });
});
s23.addText([
  { text: "This is an evolving space. Governance patterns are still forming.\n", options: { color: DIM } },
  { text: "That's exactly why your customers need you.", options: { color: WHITE, bold: true } },
], { x: 0, y: 5.8, w: "100%", h: 0.8, align: "center", fontSize: 13, fontFace: FONT, lineSpacingMultiple: 1.3 });
s23.addNotes("Let me be honest about what we DON'T control yet. Hallucination in IaC — an agent can generate Bicep that compiles but provisions the wrong thing. Credential scope is still manual. There's no standard for agent-to-agent trust. Prompt injection is a real risk in shared surfaces. And Azure Budgets alert but don't hard-stop a runaway agent. These are open problems. Governance patterns are still forming. And that's exactly why your customers need you — to help them navigate this responsibly.");

// ===== SLIDE 24: Governance quote =====
const s24 = pptx.addSlide();
addBg(s24);
s24.addText([
  { text: '"Azure\'s governance was built for humans.\nIt works ', options: { color: "D4D4D8", italic: true } },
  { text: 'even better', options: { color: AZURE_LIGHT, italic: true } },
  { text: ' for AI agents —\nbecause agents actually follow the rules."', options: { color: "D4D4D8", italic: true } },
], { x: 1.5, y: 2.0, w: 10.33, h: 2.5, align: "center", fontSize: 24, fontFace: FONT, lineSpacingMultiple: 1.4 });
s24.addNotes("This is the line for your customer meetings. Humans skip steps, forget to tag resources, leave dev environments running. Agents don't. They follow RBAC to the letter. They respect policies. They log everything. Azure governance was designed for humans. Agents are actually better at following it. That's your Azure story for the agentic era.");

// ===== SLIDE 25: Key Takeaways =====
const s25 = pptx.addSlide();
addBg(s25);
s25.addText("Key Takeaways", { x: 0, y: 0.3, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s25.addText("Three things to remember.", { x: 0, y: 0.7, w: "100%", h: 0.7, align: "center", fontSize: 30, fontFace: FONT, color: WHITE, bold: true });

const takeaways = [
  { title: "AI agents are moving from code assistants\nto infrastructure operators", sub: "This isn't future speculation — it's happening now." },
  { title: "Azure is the platform that makes agentic\noperations safe and powerful", sub: "Identity, Policy, Cost Management, Monitoring — the full stack." },
  { title: "Your customers will bring their own agents.\nHelp them do it right.", sub: "The agent doesn't matter. The platform does." },
];
takeaways.forEach((t, i) => {
  const y = 1.7 + i * 1.7;
  s25.addText(String(i + 1), { x: 2.0, y, w: 0.8, h: 0.9, fontSize: 36, fontFace: FONT, color: AZURE_LIGHT, bold: true, valign: "top" });
  s25.addText(t.title, { x: 3.0, y, w: 8.0, h: 0.8, fontSize: 16, fontFace: FONT, color: WHITE, bold: true, lineSpacingMultiple: 1.2, valign: "top" });
  s25.addText(t.sub, { x: 3.0, y: y + 0.85, w: 8.0, h: 0.4, fontSize: 11, fontFace: FONT, color: DIMMER });
});
s25.addNotes("Three things. One: agents are moving from code to infrastructure. This is happening now. Two: Azure is the platform that makes it safe — identity, policy, cost management, monitoring. Three: your customers will bring their own agents. They need you to help them do it right. The agent is replaceable. The platform isn't.");

// ===== SLIDE 26: Resources =====
const s26 = pptx.addSlide();
addBg(s26);
s26.addText("Where to go from here", { x: 0, y: 0.3, w: "100%", h: 0.35, align: "center", fontSize: 11, fontFace: FONT, color: AZURE_LIGHT, bold: true });
s26.addText("Resources", { x: 0, y: 0.7, w: "100%", h: 0.7, align: "center", fontSize: 30, fontFace: FONT, color: WHITE, bold: true });

const resources = [
  { emoji: "🤖", title: "openclaw.ai / github.com/openclaw/openclaw", desc: "Open-source agent framework — try it yourself" },
  { emoji: "🎼", title: 'Addy Osmani — "The Code Agent Orchestra"', desc: "The conductor → orchestrator framework" },
  { emoji: "🤝", title: "Azure AI Agent Service", desc: "Microsoft's own take on managed AI agents" },
  { emoji: "🔧", title: "Copilot Studio + Azure integration", desc: "Build enterprise agents with Microsoft's tooling" },
  { emoji: "📊", title: "This deck + demo showcase", desc: "Deployed on Azure Static Web Apps" },
];
resources.forEach((r, i) => {
  const y = 1.6 + i * 0.95;
  s26.addText(r.emoji, { x: 1.5, y, w: 0.6, h: 0.5, fontSize: 18 });
  s26.addText(r.title, { x: 2.2, y, w: 9.0, h: 0.4, fontSize: 14, fontFace: FONT, color: AZURE_LIGHT });
  s26.addText(r.desc, { x: 2.2, y: y + 0.38, w: 9.0, h: 0.35, fontSize: 11, fontFace: FONT, color: DIMMER });
});
s26.addNotes("Resources. OpenClaw if you want to try the specific tool I demoed. Addy Osmani's article for the orchestration framework. Azure AI Agent Service for Microsoft's take. Copilot Studio for enterprise scenarios. And this deck is live on Azure Static Web Apps — feel free to share it.");

// ===== SLIDE 27: Closing quote =====
const s27 = pptx.addSlide();
addBg(s27);
s27.addText([
  { text: '"AI agents are moving from code assistants\nto infrastructure operators.\n\n', options: { color: "D4D4D8", italic: true, fontSize: 22 } },
  { text: 'Azure is the platform that makes this\nsafe and powerful."', options: { color: AZURE_LIGHT, italic: true, fontSize: 22 } },
], { x: 1.5, y: 1.2, w: 10.33, h: 3.0, align: "center", fontFace: FONT, lineSpacingMultiple: 1.3 });
s27.addText("Your customers will bring their own agents.\nBe ready.", { x: 0, y: 4.5, w: "100%", h: 0.8, align: "center", fontSize: 14, fontFace: FONT, color: DIM, lineSpacingMultiple: 1.4 });
s27.addNotes("Same slide I showed at the start. Same message. AI agents are moving from code assistants to infrastructure operators. Azure is the platform that makes this safe and powerful. Your customers will bring their own agents. Be ready.");

// ===== SLIDE 28: Final =====
const s28 = pptx.addSlide();
addBg(s28);
s28.addText([
  { text: '"Every meeting should end with\n', options: { color: WHITE } },
  { text: 'something running."', options: { color: AZURE_LIGHT } },
], { x: 0, y: 1.2, w: "100%", h: 1.5, align: "center", fontSize: 30, fontFace: FONT, bold: true, lineSpacingMultiple: 1.2 });
s28.addText([
  { text: "The agent doesn't matter.\nThe platform does.\nAnd that platform is ", options: { color: DIM } },
  { text: "Azure", options: { color: AZURE_LIGHT } },
  { text: ".", options: { color: DIM } },
], { x: 0, y: 3.2, w: "100%", h: 1.5, align: "center", fontSize: 16, fontFace: FONT, lineSpacingMultiple: 1.4 });
s28.addText("Raj Balakrishnan · rajba@microsoft.com · aka.ms/helloraj", { x: 0, y: 5.5, w: "100%", h: 0.4, align: "center", fontSize: 11, fontFace: FONT, color: DIMMER });
s28.addNotes("Every meeting should end with something running. Not a slide deck. Not a follow-up email. Something the customer can click, test, and show their boss. The agent framework will keep changing. But Azure is where it all runs. Thanks everyone. Happy to take questions.");

// ===== SLIDE 29: Questions =====
const s29 = pptx.addSlide();
addBg(s29);
s29.addText("🎤", { x: 0, y: 2.0, w: "100%", h: 1.5, align: "center", fontSize: 80 });
s29.addText("Questions?", { x: 0, y: 3.8, w: "100%", h: 0.8, align: "center", fontSize: 32, fontFace: FONT, color: DIM, italic: true });

// -- Write --
pptx.writeFile({ fileName: "C:\\Users\\dev\\projects\\ms-demo-deck\\deck.pptx" })
  .then(() => console.log("✅ deck.pptx created successfully!"))
  .catch(err => console.error("Error:", err));
