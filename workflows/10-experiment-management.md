# Workflow 10 — Experiment management

## Objective

Design and track marketing experiments with explicit hypotheses, targets, and separate results.

## Inputs

- Hypotheses from discovery/positioning/campaigns
- Owner capacity constraints
- Baseline metrics if known (else `unknown`)

## Process

1. Write hypothesis in falsifiable form.
2. Define primary metric, guardrail metrics, target, minimum sample/time.
3. Define variants and traffic/assignment method at a practical level.
4. Pre-register what “success / inconclusive / fail” means.
5. While running: log observations with dates; do not backfill invented numbers.
6. At close: record results separately from targets; state decision.
7. Schema: `schemas/experiment.schema.json`.

## Output format

1. **Objective**
2. **Verified findings**
3. **Evidence / sources**
4. **Recommendation** (ship / iterate / kill)
5. **Next actions**
6. **Confidence & missing info**

## Guardrails

- **Targets ≠ results** — never overwrite targets with outcomes in the same field
- No fabricated lift percentages
- Pricing tests remain hypotheses until owner validation
- Synthetic experiment logs labeled **SYNTHETIC**

## Done when

- Experiment card complete with decision criteria
- Results section empty or real — never mocked as live unless synthetic demo
