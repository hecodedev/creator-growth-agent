# Workflow 04 — Prospect research

## Objective

Research specific prospects or accounts using only real, attributable information. Never invent contacts.

## Inputs

- Approved ICP (workflow 03)
- Owner-provided prospect list and/or permissioned public sources
- Opt-out list (if any)

## Process

1. Confirm the prospect universe source (owner list, CRM export, public directory). If none, stop and ask — do not invent leads.
2. Skip any opted-out parties.
3. For each prospect, collect: identity, role/context, relevant public signals, possible contact channels, data freshness.
4. Record **source + date** per field. Use `unknown` when not found.
5. Separate firmographic/fit signals from intent signals.
6. Flag low data quality explicitly.
7. Emit rows compatible with `schemas/prospect.schema.json`.

## Output format

1. **Objective**
2. **Verified findings** (per prospect or summary table)
3. **Evidence / sources**
4. **Recommendation** (who to qualify next)
5. **Next actions**
6. **Confidence & missing info**

## Guardrails

- **Never invent** emails, phone numbers, social handles, or employees
- Do not scrape or store credentials
- If a field cannot be verified, write `unknown` — do not guess
- Synthetic portfolio prospects must remain labeled **SYNTHETIC**

## Done when

- Prospect set is owner-sourced or explicitly synthetic demo data
- Each prospect has sources/dates or unknowns
- Ready for workflow 05 qualification
