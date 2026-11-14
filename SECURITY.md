# Security Policy

## Supported edition

Security fixes are accepted for **Community Edition 1.x** files in this kit.

## Please do report

- Leakage of secrets into examples, docs, or workflow outputs
- Instructions that enable auto-sending outreach without human approval
- Gitignore gaps that would commit `*.local.yaml` / Hub Clip private profiles
- Prompt/rule wording that encourages inventing contacts, credentials, or live metrics

## Please do not report via public issues

- Real private business profiles
- Production API keys or customer lists

If you find a secret in a public fork, rotate the credential first, then open an issue describing the path (not the secret value).

## Hardened defaults

- `channels.never_auto_send: true`
- `compliance.require_human_approval_before_send: true`
- `compliance.store_credentials_in_outputs: false`
- Private profiles directory gitignored
- Evaluation canaries scan for credential-like strings

## Agent operators

Treat model output as untrusted until reviewed. Never paste access tokens into chat logs that may be retained.
