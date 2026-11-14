# Workflow 01 — Business onboarding

## Objective

Capture a usable business profile without inventing facts. Produce a completed or explicitly gapped profile ready for later workflows.

## Inputs

- Owner answers (chat or file)
- Optional seed: `config/business-profile.example.yaml` or an industry example under `config/examples/`
- Optional private path: `private-profiles/*.local.yaml`

## Process

1. Explain that all fields are optional until a later workflow needs them.
2. Collect only what the owner can verify today: name, one-liner, offer, stage, geography, goals, constraints, language.
3. Set `pricing_status` honestly (`unknown` / `hypothesis` / `validated` / `published`).
4. Set compliance flags: no inventing contacts/metrics; never auto-send; honor opt-outs.
5. Confirm scoring weight defaults or owner overrides (must sum to 100).
6. Write the profile YAML. If private owner data, prefer `private-profiles/*.local.yaml`.
7. List **blocking gaps** for the next workflow the owner wants to run.

## Blocking fields (only when next step needs them)

| Next workflow | Typically blocking |
|---------------|--------------------|
| 02 Market research | industry or offer + geography |
| 03 ICP | audience seeds or offer |
| 06 Outreach | brand voice + offer + compliance flags |
| 11 Analytics | goals + what was measured |

## Output format

1. **Objective**
2. **Verified findings** (only owner-confirmed facts)
3. **Evidence / sources** (owner statements + dates)
4. **Recommendation** (which workflow next; which gaps to close)
5. **Next actions**
6. **Confidence & missing info**

Also emit/update profile YAML conforming to `schemas/business-profile.schema.json`.

## Done when

- Profile file exists with `profile_id`, `synthetic` flag, and `compliance.require_human_approval_before_send: true`
- Missing fields are listed as `unknown` / `null`, not filled with guesses
- Owner knows the single next workflow to run
