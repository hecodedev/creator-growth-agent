# AGENTS.md — Creator Growth Agent (Community Edition)

Instructions for AI agents (including Cursor) operating this kit.

## Product

Standalone **Cursor-native marketing agent kit** (not a hosted SaaS, not an auto-sender). Copy this folder into any repo — as root or subfolder. Do not assume Hub Clip, cleaningcompany, or any parent app exists. Research depends on available tools + owner sources; never invent contacts.

## Entry points

1. Read `.cursor/rules/creator-growth-agent.mdc`
2. Load business profile from:
   - `config/business-profile.yaml` (owner copy of the example), or
   - path provided by the user, or
   - `private-profiles/*.local.yaml` for private owner data (gitignored)
3. Run the requested workflow from `workflows/01-*.md` … `workflows/12-*.md`
4. Validate shape against `schemas/` when producing structured artifacts
5. Never treat `examples/` as live customer data — all labeled **SYNTHETIC**

## Non-negotiables

- Do not invent business facts, contacts, testimonials, or metrics
- Ask only for blocking missing information
- Draft outreach only; never auto-send; require human approval
- No secrets/credentials in outputs
- Honor opt-outs
- Separate evidence vs inference; use `unknown` when data is missing
- Label synthetic demos clearly
- Do not implement paywall/billing (Pro is roadmap-only)

## Suggested user prompts

- "Run workflow 01 onboarding using `config/examples/saas-b2b.synthetic.yaml`"
- "Qualify these prospects with workflow 05; show weights"
- "Draft outreach (workflow 06) for lead X — do not send"
- "Summarize experiment results (workflow 11); keep targets separate from results"

## Evaluation

Run `scripts/run_evaluations.sh` before claiming the kit is healthy.

## Private Hub Clip data

If the owner maintains Hub Clip privately, use `private-profiles/hubclip.local.yaml` (gitignored). Public template: `private-profiles/hubclip.local.example.yaml`.
