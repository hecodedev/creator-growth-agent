# Creator Growth Agent — Community Edition

**SPDX-License-Identifier:** Apache-2.0

A **reusable Cursor-native AI marketing agent kit** for research, customer acquisition, and marketing decisions.

Configure a YAML business profile, then run structured workflows: onboarding, market research, ICP, prospect research, lead qualification, personalized outreach drafts, customer discovery, positioning, campaigns, experiments, analytics, and growth recommendations.

### What this is not

- Not a hosted SaaS
- Not an autonomous platform that guarantees customers, revenue, or pipeline
- Not an auto-sending email/LinkedIn bot
- Not Hub Clip — gaming/creator profiles are **examples** or private local config only

**Requires:** [Cursor](https://cursor.com) (or a compatible agent host that loads `.cursor/rules`) and an AI model. Research quality depends on **your** tools and owner-provided sources. Without attributable sources, the agent must not invent companies, contacts, or URLs.

**License:** [Apache License 2.0](./LICENSE) — commercial use, modification, and redistribution are permitted when you follow the license (preserve license/notices; Apache-2.0 includes an express patent license and patent termination terms). Future Pro features may be separate and proprietary; **you do not need Pro to use Community Edition**.

---

## Main capabilities

| Capability | What you get |
|------------|----------------|
| Business onboarding | Capture a profile without inventing facts; ask only blockers |
| Market research | Evidence vs inference; sources + dates or `unknown` |
| ICP & prospects | Structured ICP; owner-sourced prospects only |
| Lead qualification | Scores 0–100 with configurable weights and rationales |
| Outreach drafts | Personalized drafts + human approval — never auto-send |
| Discovery & positioning | Interview synthesis; hypotheses labeled |
| Campaigns & experiments | Plans with **targets ≠ results** |
| Analytics & growth backlog | Summaries from provided data; prioritized next actions |
| Safety defaults | Opt-outs, no credentials in outputs, synthetic labels |

## Architecture overview

```text
User (Cursor) → .cursor/rules + AGENTS.md
              → business profile YAML (or private-profiles/*.local.yaml)
              → workflows/01–12 → markdown (+ optional JSON vs schemas/)
              → evaluations/ + scripts/ (QA)
```

More detail: [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).

---

## Installation

### A) Dedicated repository (recommended for public use)

Copy the contents of this kit so `README.md`, `LICENSE`, `workflows/`, and `.cursor/` are at the **repository root**.

### B) Subfolder inside an existing project

Copy the whole `creator-growth-agent/` directory into your project. Optionally append [`gitignore.fragment`](./gitignore.fragment) to the parent `.gitignore` (defense in depth; the kit’s own `.gitignore` still applies to nested paths).

```bash
# Example: validate after install
./scripts/run_evaluations.sh
```

## Quick Start (≈5 minutes)

Full guide: **[docs/QUICKSTART.md](./docs/QUICKSTART.md)** · Português: **[docs/QUICKSTART.pt-BR.md](./docs/QUICKSTART.pt-BR.md)**

1. Install (root or subfolder).
2. `cp config/business-profile.example.yaml config/business-profile.yaml`
3. Fill only what you know; set `output_language` (`en` or `pt-BR`).
4. In Cursor:
   `Run workflow 01 onboarding using my business profile. Ask only for blocking missing info. Do not invent facts.`
5. Continue with `03` → `05` → `06` (draft only) → `10` as needed.

## Business profile configuration

- Canonical fields: [`config/business-profile.example.yaml`](./config/business-profile.example.yaml)
- All fields optional until a workflow needs them; the agent asks only for **blocking** gaps
- Never invent business data, contacts, testimonials, or live metrics
- Private owner data: `private-profiles/*.local.yaml` (gitignored). Safe template: [`private-profiles/hubclip.local.example.yaml`](./private-profiles/hubclip.local.example.yaml)

Industry seeds (all **SYNTHETIC**): [`config/examples/`](./config/examples/).

## Workflow examples

| ID | Workflow |
|----|----------|
| 01 | Business onboarding |
| 02 | Market research |
| 03 | ICP definition |
| 04 | Prospect research |
| 05 | Lead qualification |
| 06 | Personalized outreach (approval required) |
| 07 | Customer discovery |
| 08 | Positioning & offer |
| 09 | Content & campaigns |
| 10 | Experiment management |
| 11 | Marketing analytics |
| 12 | Growth recommendations |

Suggested prompts: see [AGENTS.md](./AGENTS.md).

### Standard output format

1. Objective → 2. Verified findings → 3. Evidence / sources → 4. Recommendation → 5. Next actions → 6. Confidence & missing info

## Synthetic demonstration

Explore [`examples/`](./examples/) — labeled **SYNTHETIC**. Not live customers, not Hub Clip private data, not proof of conversion.

Conversational evaluation artifacts under [`evaluations/conversational/`](./evaluations/conversational/) are also synthetic (**PASS MOCK**, not real customer validation).

## Cursor compatibility

- Cursor (or compatible host) that can load [`.cursor/rules/creator-growth-agent.mdc`](./.cursor/rules/creator-growth-agent.mdc)
- An AI model available to the agent
- Optional web/research tools — if unavailable, prospect research must use owner-provided lists

## Limitations

- Quality depends on the model and the evidence you provide
- No built-in CRM sync, mailbox send, or paid data connectors in Community Edition
- Does not guarantee leads, meetings, or revenue
- JSON Schemas guide structure; they are not a heavyweight CI product

## Privacy and safety

- Honor opt-outs; do not circumvent via other channels
- Draft-only outreach; human approval required before send
- No API keys/tokens/passwords in outputs
- Keep real business profiles in gitignored `*.local.yaml`
- See [SECURITY.md](./SECURITY.md)

## License (Apache-2.0)

This project is licensed under the **Apache License, Version 2.0**. See [`LICENSE`](./LICENSE).

In plain terms (not a substitute for the license text):

- You **may** use it commercially, modify it, and redistribute it
- You **must** preserve the license and applicable notices when redistributing
- Apache-2.0 includes an **express patent license** and **patent termination** provisions

Community Edition does **not** require a paid Pro subscription.

Strategy / Pro boundary docs: [LICENSE_STRATEGY.md](./LICENSE_STRATEGY.md), [docs/LICENSE_STRATEGY.md](./docs/LICENSE_STRATEGY.md).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Please run `./scripts/run_evaluations.sh` before proposing changes.

## Community and future Pro roadmap

Community stays open and useful alone. Possible future Pro (separate, not required): approval audit trails, connector packs, team workspaces, managed evaluations, optional hosted runtime. Documented only — not implemented here.

## Docs map

| Doc | Purpose |
|-----|---------|
| [docs/QUICKSTART.md](./docs/QUICKSTART.md) | First-time setup (EN) |
| [docs/QUICKSTART.pt-BR.md](./docs/QUICKSTART.pt-BR.md) | Guia rápido (PT-BR) |
| [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) | How pieces fit |
| [docs/portfolio/GITHUB_PORTFOLIO.md](./docs/portfolio/GITHUB_PORTFOLIO.md) | Repo blurb / CV text |
| [docs/STAGE_1_1_PUBLIC_RELEASE_READINESS.md](./docs/STAGE_1_1_PUBLIC_RELEASE_READINESS.md) | Stage 1.1 validation |
| [docs/STAGE_1_2_PUBLIC_RELEASE_REPORT.md](./docs/STAGE_1_2_PUBLIC_RELEASE_REPORT.md) | Stage 1.2 release prep |
| [docs/IMPLEMENTATION_REPORT.md](./docs/IMPLEMENTATION_REPORT.md) | v1.0 implementation record |
| [CHANGELOG.md](./CHANGELOG.md) | Release history |
| [SECURITY.md](./SECURITY.md) | Security policy |
