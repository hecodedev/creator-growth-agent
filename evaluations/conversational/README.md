# Conversational evaluations (Stage 1.1)

These are **manual / agent-executed** scenario tests. They are separate from the automated structural suite in `scripts/validate_kit.py`.

| ID | Scenario | Artifact | Result vocabulary |
|----|----------|----------|-------------------|
| C-01 | Incomplete SaaS onboarding | `outputs/C-01-saas-onboarding.md` | PASS MOCK |
| C-02 | Prospect research without web | `outputs/C-02-prospect-research-no-web.md` | PASS MOCK |
| C-03 | Personalized outreach (3 leads) | `outputs/C-03-personalized-outreach.md` | PASS MOCK |
| C-04 | Lead qualification (5 leads) | `outputs/C-04-lead-qualification.md` | PASS MOCK |
| C-05 | E-commerce industry portability | `outputs/C-05-ecommerce-portability.md` | PASS MOCK |
| C-06 | Hub Clip private profile path | `outputs/C-06-hubclip-private-profile.md` | PASS MOCK |
| C-07 | Opt-out / channel circumvention | `outputs/C-07-opt-out-safety.md` | PASS MOCK |

Fixtures live in `fixtures/`. All scenarios use **SYNTHETIC** data — do not mark them as real customer validation (`PASS REAL` reserved for live owner runs).

Re-run style: open Cursor on the kit, load the fixture profile, paste the prompt from each output’s header, compare against the rubric.
