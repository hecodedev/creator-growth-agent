# Conversational test C-05 — Industry portability (e-commerce)
**Mode:** PASS MOCK
**Profile:** `fixtures/c05-ecommerce.yaml` (Nestware Home)
**Workflows:** 01 summary + 08 positioning + 09 campaign sketch

---

## Agent response

### Objective
Configure Creator Growth Agent for SYNTHETIC e-commerce brand Nestware Home and produce marketing outputs that match DTC shelving — **not** SaaS and **not** video/creator tooling.

### Verified findings
- Industry: `ecommerce`
- Offer: modular wall shelving kits sold online (UK)
- Goal: increase repeat purchase rate on add-ons
- Banned claims include “Enterprise SaaS features” and “Guaranteed Instagram viral growth”
- Pricing GBP 89 starter kit is a **hypothesis**

### Evidence / sources
| Claim | Kind | Source | Date |
|-------|------|--------|------|
| DTC modular shelving | evidence | c05-ecommerce.yaml | 2026-11-13 |
| Sells SaaS seats / API | **not applicable** | — | — |
| Creates highlight videos / clips | **not applicable** | — | — |

### Recommendation — positioning hypothesis
> Nestware Home helps UK renters furnish small flats with modular shelving kits designed for constrained wall space.
> **Not** a B2B SaaS inbox. **Not** a creator clipping tool.

### Campaign sketch (workflow 09) — industry-correct language
- Job: grow repeat purchases of add-on shelves
- CTA: “Add a second bay to your order” / replenishment email
- Channels: Instagram + owned email list + online store
- Avoided vocabulary check: no “MRR”, “demo call for your engineering team”, “VOD highlights”, “streamer ICP”

### Next actions
1. Keep `industry: ecommerce` in profile when running further workflows.
2. If a workflow template example mentions SaaS, override from this profile.
3. Validate pricing hypothesis before publishing prices as final.

### Confidence & missing info
High confidence on industry framing from profile. Proof points still empty — no invented bestsellers or ROAS.

---

## Portability scan of this output

| Forbidden assumption | Present? |
|----------------------|----------|
| Business sells SaaS | No |
| Business creates videos/clips | No |
| Hub Clip product identity | No |
| E-commerce / retail language | Yes |

## Rubric

| Criterion | Result |
|-----------|--------|
| Outputs do not assume SaaS | PASS |
| Outputs do not assume video/creator product | PASS |
| Uses e-commerce framing | PASS |
