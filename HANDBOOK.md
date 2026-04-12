# 📘 Presenter Handbook — "AI Agents Meet the Cloud"

## Before the Session

### Setup (30 min before)
- [ ] Open deck: https://raj-microsoft.github.io/ms-demo-deck/
- [ ] Press `S` to open speaker notes view (separate window)
- [ ] Open Azure Portal in a browser tab (portal.azure.com)
- [ ] Open Telegram on phone (OpenClaw chat ready)
- [ ] Have terminal/TUI ready for live demo
- [ ] Test internet connection

### Azure Resources (pre-deployed)
All in `rg-demo-showcase`, West Europe:
- Web App: `freelancer-saas-web` → freelancer-saas-web.azurewebsites.net
- SQL: `freelancer-saas-sql.database.windows.net` / `freelancerdb`
- Storage: `freelancersaasstor`
- Functions: `freelancer-saas-func`
- App Insights: `freelancer-saas-insights`

---

## The Flow (45 minutes)

### Act 1: Set the Stage (0-8 min)

**Slide 1 — Title** (30 sec)
- "Thanks for being here."
- Don't oversell. Be casual.

**Slide 2 — What this IS and IS NOT** (2 min)
- ✕ NOT a product pitch for OpenClaw
- ✕ NOT "another AI demo"
- ✓ IS about agents that operate infrastructure
- ✓ IS about why Azure is uniquely positioned
- KEY LINE: "I'm not selling you OpenClaw. I'm showing you a pattern."

**Slide 3 — Key Message** (1 min)
- Read it. Let it land. Don't rush.
- "AI agents are moving from code assistants to infrastructure operators. Azure is the platform that makes this safe and powerful."
- You'll repeat this at the end. Tell them: "Write this down."

**Slides 4-6 — The Shift** (4 min)
- Conductor → Orchestrator (Addy Osmani)
- 8 Levels bar chart — "Most of us are at 3-4. The opportunity is at 6-8."
- Beyond code assistance — deploy, monitor, incident-respond
- PAUSE after "This is where OpenClaw sits" — let them absorb

### Act 2: Address the Objection (8-14 min)

**Slides 7-8 — Why Not Just GHCP?** (3 min)
- Don't be defensive. Acknowledge GHCP is great.
- Side-by-side comparison: pair programmer vs SRE
- KEY LINE: "GHCP is your pair programmer. OpenClaw is your SRE that never sleeps."
- "This isn't either/or — it's both."

**Slides 9-10 — What IS OpenClaw / What it's NOT** (3 min)
- Be honest about limitations
- "It's not enterprise-ready. It makes mistakes. It's a proof of concept."
- This builds trust. The audience respects honesty.

### Act 3: The Demo (14-30 min)

**Slide 11 — Live Demo intro** (30 sec)
- "No more slides. Let's build something."
- Switch to Telegram/terminal if doing live demo
- OR walk through the mockup slides

**Slides 12-16 — Build flow** (8 min)
- Conversation → Architecture → Bicep → Deploy → Wow
- If live: type the prompt, let OpenClaw respond
- If mockup: walk through chat bubbles, pause on code blocks
- SHOW Azure Portal — resources appearing in real-time

**Slides 17-18 — Incident Response** (4 min)
- "It's 3 AM. Your phone buzzes."
- Walk through the chat — diagnosis → rollback → verified
- KEY LINE: "What would take an on-call engineer 30 minutes happened in 2."

**Slides 19-20 — FinOps** (4 min)
- Cost table — let them read it
- "€160K per year. Found in 12 minutes."
- KEY LINE: "Not recommendations in a PDF — real savings, implemented live."

### Act 4: The Serious Part (30-38 min)

**Slides 21-25 — Security & Governance** (8 min)
- DON'T skip this. This is where you win the room.
- "What can go wrong?" — be honest (hallucination, over-provisioning, prompt injection)
- "What's in our control?" — Azure AD, Policy, Locks, Approval gates
- "What's NOT yet in our control?" — credential scope, agent trust, evolving space
- KEY LINE: "Azure's governance was built for humans. AI agents follow the rules better."
- Let this line BREATHE. It's the CISO killer.

### Act 5: Close (38-45 min)

**Slide 26 — 3 Key Takeaways** (2 min)
1. Agents are moving from code → infrastructure
2. Azure makes agentic operations safe
3. Your customers will bring their own agents
- Read them slowly. One at a time.

**Slide 27 — Resources** (1 min)
- Don't read every link. Just say "everything's here."
- Mention OpenClaw + Addy Osmani article as starting points

**Slides 28-29 — Close** (2 min)
- Repeat the key message from Slide 3
- "Every meeting should end with something running."
- "The agent doesn't matter. The platform does. And that platform is Azure."
- PAUSE. Let it land. Then: "Questions?"

---

## Tips

### If someone asks "Can't Copilot do this?"
"Yes and no. Copilot writes great code. But deploying infrastructure from Telegram at 3 AM, running 14 cron jobs monitoring your costs, maintaining memory across sessions — that's a different tier. This isn't either/or. It's both."

### If someone asks "Is this production-ready?"
"No. And I said that on slide 10. This is a pattern, not a product. The Azure governance stack underneath IS production-ready. The agent layer is evolving fast."

### If someone asks "What about security?"
"Great question — I have 4 slides on exactly that. The short answer: least privilege, Azure Policy, human approval gates, full audit trail. Agents are actually better at following governance rules than humans."

### If the live demo fails
Don't panic. Say: "This is exactly why we talked about what can go wrong." Then walk through the mockup slides. The audience will appreciate the honesty.

### Energy management
- Start casual (Act 1)
- Build energy through the demo (Act 3)
- Get serious for security (Act 4)
- End strong and confident (Act 5)

---

## Keyboard Shortcuts (Reveal.js)
- `→` / `↓` — Next slide
- `←` / `↑` — Previous slide
- `S` — Speaker notes view
- `F` — Fullscreen
- `O` — Overview mode
- `B` — Black screen (pause)
- `ESC` — Exit fullscreen/overview

---

## Quick Links
- **Deck:** https://raj-microsoft.github.io/ms-demo-deck/
- **Deck (SWA):** https://witty-dune-0c7991403.1.azurestaticapps.net
- **PPTX:** https://github.com/raj-microsoft/ms-demo-deck/raw/master/deck.pptx
- **Showcase:** https://proud-river-066d3da03.1.azurestaticapps.net
- **OpenClaw:** https://openclaw.ai
- **Addy Osmani:** https://addyosmani.com/blog/code-agent-orchestra/

---

*Prepared by Benji 🐾 — April 9, 2026*
