# Workflow 06 — Personalized outreach (human approval required)

## Objective

Draft personalized outreach for qualified leads. **Never send. Never auto-send.** Human approval is mandatory.

## Inputs

- Qualified leads (workflow 05) not opted-out
- Business profile brand voice, offer, banned claims
- Channel preference from profile

## Process

1. Confirm `compliance.require_human_approval_before_send: true` and `channels.never_auto_send: true`.
2. Skip opted-out leads.
3. For each lead, draft message(s) with: channel, subject/hook, body, personalization evidence used, CTA.
4. Avoid banned claims and unvalidated capabilities/pricing-as-final.
5. Include an **Approval block** the human must complete before send.
6. State explicitly: `send_status: draft_only`.
7. Emit `schemas/outreach-draft.schema.json`.

## Approval block (required in every draft pack)

```text
APPROVAL REQUIRED
[ ] I reviewed personalization facts against sources
[ ] I confirm recipient is not opted out
[ ] I approve sending via <channel>
Approver name: ________
Date: ________
```

## Output format

1. **Objective**
2. **Verified findings** (personalization facts only)
3. **Evidence / sources**
4. **Recommendation** (which draft to send first, if any)
5. **Next actions** (human send steps — agent does not send)
6. **Confidence & missing info**

## Guardrails

- **Never** claim a message was sent
- **Never** include credentials, magic links with secrets, or private CRM tokens
- If contact channel is `unknown`, draft content but mark **blocked from send** until channel verified
- Synthetic examples labeled **SYNTHETIC**

## Done when

- Drafts exist with approval checklists
- `send_status` is `draft_only` for all items
- Owner has clear manual send instructions
