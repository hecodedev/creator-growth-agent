# Workflow 11 — Marketing analytics

## Objective

Summarize marketing performance from owner-provided data. Distinguish targets, results, and unknowns.

## Inputs

- Metrics exports or manual tables from the owner
- Goals from business profile
- Experiment logs (10) and campaign plans (09)

## Process

1. Inventory metrics available vs needed. Mark gaps `unknown`.
2. Build a summary: funnel, channel, campaign/experiment outcomes.
3. Keep **target** and **result** columns distinct.
4. Call out data quality issues (attribution gaps, duplicate counts).
5. Do not invent conversions, revenue, or ROI.
6. Recommendations must cite the numbers used.
7. Schema: `schemas/analytics-summary.schema.json`.

## Output format

1. **Objective**
2. **Verified findings**
3. **Evidence / sources** (dataset name + date range)
4. **Recommendation**
5. **Next actions**
6. **Confidence & missing info**

## Guardrails

- No credentials from analytics tools in outputs
- Synthetic analytics demos labeled **SYNTHETIC**
- If no data provided, deliver a measurement checklist — not fake dashboards

## Done when

- Summary reflects only provided data
- Clear inputs for workflow 12 growth recommendations
