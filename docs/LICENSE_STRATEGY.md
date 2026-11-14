# Layer B — Community vs Pro boundaries & commercial roadmap

**Community Edition license:** Apache License 2.0 (`SPDX-License-Identifier: Apache-2.0`). See root [`LICENSE`](../LICENSE).

This document defines product boundaries. **Community Edition does not implement paywalls, billing, license servers, or SaaS tenancy.** Users do **not** need to purchase Pro to use Community Edition.

## Community Edition (this kit)

Included under Apache-2.0:

- Cursor rule + `AGENTS.md`
- Business profile pattern (all fields optional unless blocking)
- Workflows 01–12
- Schemas + synthetic examples + evaluation suite
- Private local profile gitignore pattern
- Docs in English with PT-BR Quick Start

Explicitly excluded:

- Payment processing, seats, entitlements
- Forced cloud accounts
- Auto-send email/LinkedIn integrations
- Scrapers that invent or harvest contacts without owner-provided sources
- Claims of live customer results

## Pro Edition (roadmap — not built here)

Candidate capabilities (subject to change; may be proprietary / separately licensed):

1. **Approval audit trail** — signed human approvals for each outreach send
2. **Connector pack** — CRM / mailbox / analytics import with secret vaulting
3. **Team workspaces** — shared profiles, role-based editing, review queues
4. **Managed evaluations** — CI badge + regression corpus beyond the open 15 checks
5. **Hosted runtime (optional)** — managed environment while keeping Community portable
6. **Priority playbooks** — maintained vertical starter packs

## Commercial principles

- Community remains useful alone (no crippleware that blocks core workflows)
- Pro sells time-saving integrations, collaboration, and assurance — not basic prompting
- Vertical examples (including gaming/creator) stay examples, not branding
- Private customer profiles never ship in public repos
- Redistributors of Community must preserve Apache-2.0 license and notice requirements

## Implementation rule for contributors

If a PR adds billing, license key checks, or encrypted paywalls to this folder, reject it for Community Edition. Document the idea under Pro roadmap instead.
