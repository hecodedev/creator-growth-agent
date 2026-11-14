# Workflow 02 — Market research

## Objective

Map the market context for the configured business using cited sources. Separate verified findings from inference.

## Inputs

- Business profile
- Owner-approved sources (`data_sources.approved`) plus publicly checkable references the owner permits
- Geography / industry hints from profile

## Process

1. Restate the research question from profile goals (or ask if missing).
2. Gather market structure: customer alternatives, category norms, channel landscape, regulatory notes if relevant.
3. For every claim, attach **source + date** (publication or access date). If unknown, write `unknown`.
4. Tag each bullet as `evidence` or `inference`.
5. Explicitly avoid inventing market sizes, growth rates, or competitor revenue.
6. Call out pricing only as hypotheses unless `pricing_status` is validated/published.
7. Produce a research brief matching `schemas/research-brief.schema.json` when structured output is needed.

## Output format

1. **Objective**
2. **Verified findings**
3. **Evidence / sources** (source, date, what it supports)
4. **Recommendation**
5. **Next actions**
6. **Confidence & missing info**

## Guardrails

- No fake reports, surveys, or “according to industry experts” without a real citation
- Competitors: only those named by owner or clearly evidenced; label confidence
- Synthetic demos must stay labeled **SYNTHETIC**

## Done when

- Research question answered or blocked with precise missing inputs
- Every quantitative claim has source+date or is marked unknown
- Clear handoff to workflow 03 (ICP) or 08 (positioning)
