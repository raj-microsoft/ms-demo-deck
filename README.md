# 🎤 AI Agents Meet the Cloud — Microsoft Netherlands

> Internal presentation for Azure Solution Engineers, Sales Specialists & Account Executives.

## 🌐 Live Links

| What | URL |
|------|-----|
| **📺 Deck (GitHub Pages)** | [raj-microsoft.github.io/ms-demo-deck](https://raj-microsoft.github.io/ms-demo-deck/) |
| **📺 Deck (Azure SWA)** | [witty-dune-0c7991403.1.azurestaticapps.net](https://witty-dune-0c7991403.1.azurestaticapps.net) |
| **📥 PowerPoint (29 slides)** | [Download deck.pptx](https://github.com/raj-microsoft/ms-demo-deck/raw/master/deck.pptx) |
| **🖥️ Demo Showcase App** | [proud-river-066d3da03.1.azurestaticapps.net](https://proud-river-066d3da03.1.azurestaticapps.net) |

## 🎯 Story Arc

1. **Opening** — What this IS and IS NOT (not a product pitch, not "another AI demo")
2. **The Shift** — From code assistants to infrastructure operators (Addy Osmani's conductor → orchestrator)
3. **Why Not Just GHCP?** — "Your pair programmer vs your SRE that never sleeps"
4. **What Is OpenClaw** — Honest capabilities + what it's NOT
5. **Live Demo** — Conversation → Architecture → Bicep → Deploy → Incident → FinOps
6. **Security & Governance** — What can go wrong, what's in/not in control
7. **Key Takeaways** — 3 things to remember
8. **Resources** — Where to go from here
9. **Close** — "The agent doesn't matter. The platform does. And that's Azure."

## 📂 Files

| File | Description |
|------|-------------|
| `index.html` | Reveal.js 5.1 single-file presentation deck |
| `deck.pptx` | PowerPoint version (29 slides, dark theme, Azure branding) |
| `build-pptx.js` | Script to regenerate the PPTX from index.html |

## 🛠️ Tech

- [Reveal.js 5.1](https://revealjs.com) via CDN
- [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- Dark theme with Azure blue accents (`#0078d4`)
- Mobile responsive (CSS media queries for <800px)
- Speaker notes on every slide (`S` key)
- Hosted on GitHub Pages + Azure Static Web Apps (Free tier, West Europe)

## 🔗 Related

- 📖 [Demo Showcase Repo](https://github.com/raj-microsoft/ms-demo-showcase)
- 🐾 [OpenClaw](https://openclaw.ai) | [Docs](https://docs.openclaw.ai)
- 📚 [Addy Osmani — The Code Agent Orchestra](https://addyosmani.com/blog/code-agent-orchestra/)

## 🏗️ Azure Resources

| Resource | Type | Status |
|----------|------|--------|
| `freelancer-saas-web` | App Service (B1, Linux) | Deployed |
| `freelancer-saas-sql` | Azure SQL Server | Online |
| `freelancerdb` | SQL Database (Basic) | Online |
| `freelancersaasstor` | Storage Account | Active |
| `freelancer-saas-func` | Azure Functions | Active |
| `freelancer-saas-insights` | Application Insights | Active |
| `ms-demo-deck` | Static Web App | Live |
| `ms-demo-showcase` | Static Web App | Live |

All in resource group `rg-demo-showcase`, West Europe.

---

*Built by Benji 🐾 for Raj — powered by OpenClaw*
