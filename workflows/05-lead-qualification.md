# Workflow 05 — Lead qualification (0–100)

## Objective

Score each prospect 0–100 with transparent weights. Prefer honesty about missing data over optimistic scores.

## Inputs

- Prospects from workflow 04
- Profile `scoring.weights` (defaults below if unset)
- ICP fit signals from workflow 03

## Default weights (must sum to 100)

| Dimension | Default | Meaning |
|-----------|---------|---------|
| fit | 30 | Match to ICP / offer |
| intent | 25 | Signals of active need |
| reachability | 20 | Legitimate channel available |
| timing | 15 | Urgency / triggering context |
| data_quality | 10 | Completeness/trust of evidence |

Owner overrides in the business profile replace defaults. Always print the weights used.

## Process

1. Load weights; verify they sum to 100 (normalize only with owner approval).
2. For each prospect, score each dimension 0–100 with a one-line rationale.
3. Composite = weighted average. Show math briefly.
4. If critical fields are `unknown`, cap `data_quality` and note impact on confidence.
5. Bucket: `priority` (80–100), `nurture` (50–79), `low` (1–49), `disqualify` (0 or anti-ICP).
6. Never inflate scores to “create pipeline.”
7. Emit `schemas/lead-score.schema.json` records.

## Output format

1. **Objective**
2. **Verified findings** (scores + rationales)
3. **Evidence / sources**
4. **Recommendation** (who to draft outreach for)
5. **Next actions**
6. **Confidence & missing info**

Include a **Weights used** line in Verified findings.

## Guardrails

- Missing data → lower score / confidence, not silent assumptions
- Opted-out → do not qualify for outreach; mark `opted_out`
- Synthetic demos labeled **SYNTHETIC**

## Done when

- Every scored lead shows dimensions, weights, composite, and bucket
- Clear input list for workflow 06 (still no sending)
