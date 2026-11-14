# Conversational test C-06 — Hub Clip private profile
**Mode:** PASS MOCK (private path load simulated; values remain synthetic)
**Private path:** `private-profiles/hubclip.local.yaml` (gitignored)
**Public template:** `private-profiles/hubclip.local.example.yaml`

---

## Agent response

### Objective
Load Hub Clip configuration **only** from the private local path and verify Community workflows stay generic; no false production-cloud or validated-price claims.

### Verified findings
- Private file location used: `private-profiles/hubclip.local.yaml` (not `config/examples/gaming-creator.synthetic.yaml` as “the real Hub Clip”).
- `git check-ignore` matches `**/*.local.yaml` / `hubclip.local.yaml` — private file must not be published.
- Profile `pricing_status: hypothesis` — amounts are **not** validated live prices.
- Constraint explicitly bans claiming “production cloud processing is live for all users.”
- Public Community examples remain labeled SYNTHETIC and industry-portable; Hub Clip is not product identity in README/rules.

### Evidence / sources
| Claim | Kind | Source | Date |
|-------|------|--------|------|
| Private profile loaded from private-profiles/ | evidence | hubclip.local.yaml path | 2026-11-13 |
| Gitignore excludes hubclip.local.yaml | evidence | `.gitignore` + check-ignore | 2026-11-13 |
| Production cloud processing live | **not claimed** (banned / unknown) | — | — |
| Prices validated & live | **not claimed** (`hypothesis`) | hubclip.local.yaml | 2026-11-13 |

### Recommendation
Keep real Hub Clip secrets/metrics only in gitignored `*.local.yaml`. For public demos use `config/examples/gaming-creator.synthetic.yaml` or the `.example.yaml` template.

### Next actions
1. Delete temporary test `hubclip.local.yaml` after this evaluation if it only existed for C-06.
2. Owner recreates a real private file locally when needed.
3. Never copy private contents into `examples/` or `docs/`.

### Confidence & missing info
Private load path verified. Live Hub Clip production metrics were **not** supplied and are **unknown**.

---

## Rubric

| Criterion | Result |
|-----------|--------|
| Private profile loaded only from private location | PASS |
| Public Community workflows remain generic | PASS |
| Production cloud processing never falsely claimed | PASS |
| Proposed prices not presented as validated live prices | PASS |
