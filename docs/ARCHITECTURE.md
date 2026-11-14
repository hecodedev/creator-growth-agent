# Architecture (Community Edition)

## Design goals

1. **Cursor-native** — rules + markdown workflows + YAML config; no required server
2. **Configurable** — one business profile drives language, scoring weights, compliance
3. **Evidence-based** — standard output sections; schemas for structured artifacts
4. **Safe by default** — draft-only outreach, gitignored private profiles, eval canaries
5. **Portable** — copy the folder into any repo

## Runtime model

```text
User / Cursor agent
        │
        ▼
.cursor/rules/creator-growth-agent.mdc  +  AGENTS.md
        │
        ▼
config business profile (or private-profiles/*.local.yaml)
        │
        ▼
workflows/01–12  ──►  markdown (+ optional JSON vs schemas/)
        │
        ▼
examples/ (synthetic)   evaluations/ + scripts/ (QA)
```

## Config

`config/business-profile.example.yaml` is the canonical field catalog. Owner copies it. All fields optional until a workflow declares blockers; the agent asks only for blocking gaps.

## Private Hub Clip separation

| Artifact | Tracked? |
|----------|----------|
| `private-profiles/hubclip.local.example.yaml` | Yes (safe template) |
| `private-profiles/hubclip.local.yaml` | **No** (gitignored) |
| `config/examples/gaming-creator.synthetic.yaml` | Yes (SYNTHETIC example) |

## Non-goals

- Nested git repositories inside this kit
- Publishing secrets
- Implementing Pro billing
