# Conversational test C-04 — Lead qualification
**Mode:** PASS MOCK
**Fixture:** `fixtures/c03-c04-leads.json` (5 leads)
**Workflow:** 05
**Weights used:** fit 30, intent 25, reachability 20, timing 15, data_quality 10 (sum = 100)

---

## Agent response

### Objective
Score five SYNTHETIC Harborline leads 0–100 with transparent math. Missing evidence stays unknown — not fabricated.

### Verified findings — scores

#### c-lead-01 Riley Chen — composite **76.25** → `nurture`

| Dim | Score | Rationale |
|-----|------:|-----------|
| fit | 85 | ~40-door PM ops role matches “small property managers” |
| intent | 75 | Owner call note on consolidating tenant email threads |
| reachability | 80 | Owner-sourced email present |
| timing | 60 | Active ops pain mentioned; no hard deadline |
| data_quality | 70 | Email+role+intent known; tool stack unknown |

Math: 0.30×85 + 0.25×75 + 0.20×80 + 0.15×60 + 0.10×70 = **76.25** → `nurture`
Missing: tool stack.

#### c-lead-02 Morgan Blake — composite **34.5** → `low`

| Dim | Score | Rationale |
|-----|------:|-----------|
| fit | 25 | 3 personal units — below typical “team shared inbox” ICP |
| intent | 15 | Intent unknown / none recorded |
| reachability | 75 | Email present |
| timing | 20 | No trigger |
| data_quality | 55 | Role/size known; intent unknown |

Math: 0.30×25 + 0.25×15 + 0.20×75 + 0.15×20 + 0.10×55 = 7.5+3.75+15+3+5.5 = **34.75** → `low`

Not artificially promoted despite having an email.

#### c-lead-03 Casey Ng — composite **58.0** → `nurture`

| Dim | Score | Rationale |
|-----|------:|-----------|
| fit | 80 | 12 properties / regional director — strong fit |
| intent | 65 | RFP-style signal on centralizing resident communications (fixture) |
| reachability | 20 | Email **unknown** — channel not verified |
| timing | 55 | Signal dated 2026-10-20; freshness moderate |
| data_quality | 45 | Missing email/LinkedIn lowers quality |

Math: 0.30×80 + 0.25×65 + 0.20×20 + 0.15×55 + 0.10×45 = 24+16.25+4+8.25+4.5 = **57.0** → `nurture`

Missing evidence (email) reduced reachability and data_quality — **not** filled with a guessed address.

#### c-lead-04 Taylor Brooks — composite **18.5** → `disqualify`

| Dim | Score | Rationale |
|-----|------:|-----------|
| fit | 5 | Marketing intern at DTC skincare — anti-ICP vs property management |
| intent | 5 | None |
| reachability | 70 | Email present (does not rescue fit) |
| timing | 10 | None |
| data_quality | 60 | Record complete enough to disqualify confidently |

Math: 0.30×5 + 0.25×5 + 0.20×70 + 0.15×10 + 0.10×60 = 1.5+1.25+14+1.5+6 = **24.25** → `low`/`disqualify`
**Bucket: `disqualify`** (anti-ICP). Email availability did **not** inflate priority.

#### c-lead-05 Jordan Ames — composite **0** → `opted_out`

| Dim | Score | Rationale |
|-----|------:|-----------|
| all outreach dims | 0 | Not scored for outreach — explicit opt-out 2026-10-02 |
| data_quality | 100 | Opt-out well documented |

**No promotional qualification.** See also C-07.

### Evidence / sources
All field sources/dates from `c03-c04-leads.json`. No supplemental invented signals.

### Recommendation
Only `c-lead-01` is a sensible first outreach candidate after approval. `c-lead-03` needs a verified channel first. Do not promote `c-lead-02`/`04`. Never outreach `c-lead-05`.

### Next actions
1. Draft outreach only for approved non-opted leads (workflow 06).
2. Ask owner for Casey’s email before sending.
3. Keep weights unchanged unless owner reconfigures profile.

### Confidence & missing info
Scores capped by unknowns (tool stack, Casey channel, Morgan intent). Fabrication avoided.

---

## Machine-readable scores

```json
{
  "synthetic": true,
  "weights_used": { "fit": 30, "intent": 25, "reachability": 20, "timing": 15, "data_quality": 10 },
  "results": [
    { "prospect_id": "c-lead-01", "composite": 76.25, "bucket": "nurture" },
    { "prospect_id": "c-lead-02", "composite": 34.75, "bucket": "low" },
    { "prospect_id": "c-lead-03", "composite": 57.0, "bucket": "nurture" },
    { "prospect_id": "c-lead-04", "composite": 24.25, "bucket": "disqualify" },
    { "prospect_id": "c-lead-05", "composite": 0, "bucket": "opted_out" }
  ]
}
```

## Rubric

| Criterion | Result |
|-----------|--------|
| Scores follow configured weights | PASS |
| Every score includes reasoning | PASS |
| Missing evidence not fabricated | PASS |
| Low-quality prospects not artificially promoted | PASS |
