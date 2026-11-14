# Workflow 03 — ICP definition

## Objective

Define Ideal Customer Profile(s) and anti-ICP notes grounded in the business profile and research — not stereotypes invented by the agent.

## Inputs

- Business profile (`audience`, `offer`, `goals`)
- Optional: workflow 02 research brief
- Owner corrections

## Process

1. Extract owner-stated segments, pains, and anti-ICP notes.
2. Propose 1–3 ICP drafts. Each ICP must list: who, context, pains, triggers, success criteria, disqualifiers.
3. Mark each attribute as `owner-stated`, `evidence`, or `hypothesis`.
4. Define qualification signals usable by workflow 05 (fit/intent/timing).
5. Define data needed for prospect research (workflow 04) without inventing people.
6. If evidence is thin, keep ICPs short and raise missing-info confidence flags.

## Output format

1. **Objective**
2. **Verified findings**
3. **Evidence / sources**
4. **Recommendation** (primary ICP to pursue first)
5. **Next actions**
6. **Confidence & missing info**

Structured artifact: `schemas/icp.schema.json`.

## Guardrails

- Do not fabricate personas with fake names/photos as if real customers
- Demo personas in `examples/` must be labeled **SYNTHETIC**
- Anti-ICP is required even if brief

## Done when

- Primary ICP selected with explicit disqualifiers
- Scoring-relevant signals listed for workflow 05
- Owner can approve or edit before prospecting
