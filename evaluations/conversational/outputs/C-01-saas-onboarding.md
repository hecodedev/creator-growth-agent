# Conversational test C-01 — SaaS startup onboarding
**Mode:** PASS MOCK (synthetic incomplete profile; agent response produced under kit rules)
**Profile:** `fixtures/c01-incomplete-saas.yaml`
**Workflows exercised:** 01 onboarding → 08 positioning hypothesis (gated)

---

## Agent response (as Creator Growth Agent)

### Objective
Onboard SYNTHETIC business **Harborline** from an incomplete profile and produce only evidence-backed next steps — including a positioning **hypothesis**, without inventing traction.

### Verified findings
- **Evidence:** Business name is Harborline; stage `early`; geography United States; rough offer “Shared inbox for small property managers” (owner fixture, 2026-11-13).
- **Evidence:** `synthetic: true`; compliance forbids invented metrics/contacts; never auto-send.
- **Missing (not invented):** one_liner, website, goals, ICP segments, brand voice, differentiators, pricing (`pricing_status: unknown`), proof points.

### Blocking questions only (asked; not filled with guesses)
1. What one-sentence outcome does Harborline deliver for property managers?
2. What is the primary goal for the next 90 days (e.g., discovery calls, waitlist)?
3. Is any pricing a hypothesis, validated, or still unknown?

*(Non-blocking for onboarding itself: website URL, brand voice — ask later when outreach/campaigns start.)*

### Evidence / sources
| Claim | Kind | Source | Date |
|-------|------|--------|------|
| Name, stage, geography, offer phrase | evidence | c01-incomplete-saas.yaml | 2026-11-13 |
| Customer count / revenue / logos | unknown | — | unknown |
| “Product-market fit achieved” | not claimed | — | — |

### Positioning hypothesis (labeled inference — not a fact)
> **Hypothesis:** Harborline helps small US property managers keep tenant conversations in one shared inbox instead of scattered personal email.
> **Basis:** owner offer phrase only. **Not validated.** No customers, conversion rates, or case studies asserted.

### Recommendation
1. Complete the three blocking answers above.
2. Run workflow 03 (ICP) only after a one_liner + goal exist.
3. Do **not** run public campaign copy until `banned_claims` and proof policy are set.

### Next actions
1. Owner answers the three questions.
2. Save updated profile (still `synthetic: true` for this test).
3. Optionally run workflow 07 interview guide — not prospect invention.

### Confidence & missing info
**Low–medium.** Profile is intentionally sparse. Traction, customers, and pricing remain **unknown** — not fabricated.

---

## Rubric

| Criterion | Result |
|-----------|--------|
| Identifies missing information | PASS |
| Asks only necessary questions | PASS (3 blockers) |
| Separates assumptions from facts | PASS (hypothesis labeled) |
| Actionable positioning hypothesis | PASS |
| Avoids inventing traction/customers | PASS |
