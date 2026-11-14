# Evaluations — Community Edition QA suite

Covers the **15 QA checks** from Creator Growth Agent v1.0.

Run:

```bash
./scripts/run_evaluations.sh
```

Or:

```bash
python3 scripts/validate_kit.py
```

## Checks

| ID | Check |
|----|-------|
| QA-01 | No invented contacts in tracked examples/fixtures |
| QA-02 | Sources include dates (or explicit `unknown`) |
| QA-03 | Evidence vs inference labeled |
| QA-04 | Scoring weights present and sum to 100 |
| QA-05 | Missing data represented as `unknown` / listed gaps |
| QA-06 | Outreach never auto-sends (`draft_only`, never_auto_send) |
| QA-07 | No credentials in outputs |
| QA-08 | Private profile path gitignored |
| QA-09 | Synthetic examples labeled SYNTHETIC |
| QA-10 | Pricing hypotheses not presented as final |
| QA-11 | Unvalidated capabilities not advertised as fact |
| QA-12 | Targets distinct from results |
| QA-13 | Opt-outs honored in fixtures |
| QA-14 | Human approval required on outreach drafts |
| QA-15 | No invented live metrics / testimonials in kit copy |

## Result vocabulary (for IMPLEMENTATION_REPORT)

- **PASS REAL** — verified against repo files/runtime on this machine
- **PASS MOCK** — verified using synthetic fixtures only
- **PENDING** — designed but not automated
- **BLOCKED** — cannot run due to missing dependency/permission
- **NOT VERIFIED** — not checked in this run
