# Quick Start (English) — 5 minutes

Creator Growth Agent is a **reusable Cursor-native AI marketing agent kit**.
It is **not** an autonomous marketing platform, hosted SaaS, or auto-sending CRM.

## What you need

- [Cursor](https://cursor.com) (or compatible agent environment that loads `.cursor/rules`)
- An AI model available inside Cursor
- Optional: web/research tools — **without them, prospect research must use owner-provided lists** (the agent must not invent contacts)

## Install (two options)

### A) Kit as its own repo root (recommended for public release)

Copy the contents of `creator-growth-agent/` so that `README.md`, `workflows/`, and `.cursor/` sit at the repository root.

### B) Kit as a subfolder inside another project

Copy the whole `creator-growth-agent/` directory into your project. Optionally paste [`gitignore.fragment`](../gitignore.fragment) into the parent `.gitignore`.

## Configure

```bash
cp config/business-profile.example.yaml config/business-profile.yaml
# or: cp config/business-profile.example.yaml private-profiles/my-business.local.yaml
```

Fill only what you know. Leave the rest `null`. Set `output_language` (`en` or `pt-BR`).

## Run your first workflow

In Cursor chat:

```text
Read AGENTS.md and .cursor/rules/creator-growth-agent.mdc.
Run workflow 01 business onboarding using config/business-profile.yaml.
Do not invent missing business facts — ask me only for blocking fields.
```

## Useful next prompts

```text
Run workflow 03 ICP from my profile.
Qualify these owner-provided leads with workflow 05; show weights.
Draft outreach with workflow 06 for lead X — draft only, do not send.
Create an experiment card with workflow 10; keep targets separate from results.
```

## Validate the kit

```bash
./scripts/run_evaluations.sh
```

## Limitations (read once)

- Outreach is **never** auto-sent; you approve and send manually.
- No invented contacts, testimonials, or live metrics.
- Research quality depends on **your** tools and owner-provided sources.
- Examples under `examples/` and `config/examples/` are **SYNTHETIC**.
- Hub Clip / gaming-creator files are examples or private local config — not product identity.
- Community Edition has no billing, connectors pack, or hosted runtime.

## Português

See [QUICKSTART.pt-BR.md](./QUICKSTART.pt-BR.md).
