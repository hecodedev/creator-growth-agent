# Contributing

Thanks for improving Creator Growth Agent Community Edition.

**License:** contributions are intended under **Apache License 2.0** (`SPDX-License-Identifier: Apache-2.0`) unless you state otherwise in advance. See [`LICENSE`](./LICENSE).

## Ground rules

1. Keep the kit **industry-independent**. Hub Clip / gaming-creator content stays in examples only.
2. Do not add real customer data, private Hub Clip profiles, secrets, or live metrics.
3. Label synthetic fixtures with `synthetic: true` and visible **SYNTHETIC** text in prose.
4. Outreach features must remain draft-only with human approval — no auto-send helpers.
5. Prefer actionable workflow edits over promotional fluff.
6. Do not implement billing, license locks, or SaaS paywalls in this edition.
7. English is the default for docs; `output_language` may be `pt-BR` or others via profile.

## How to work

1. Branch from your fork (when this kit lives in its own repo).
2. Make focused changes under `creator-growth-agent/` paths.
3. Update schemas if structured output shapes change.
4. Add/adjust evaluation coverage for new safety rules.
5. Run `./scripts/run_evaluations.sh` and fix failures.
6. Update `CHANGELOG.md`.

## Commit style

Use clear, descriptive messages (e.g., `Add experiment schema guard for target vs result`).

## Reporting issues

Include: workflow id, profile language, whether data was synthetic, and the confidence/missing-info section from the agent output. Never paste secrets.
