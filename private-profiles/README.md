# Private profiles

This folder holds **owner-only** business configs that must never be committed.

## Rules

- Copy `../config/business-profile.example.yaml` or a public `*.local.example.yaml` into a local file such as `hubclip.local.yaml`.
- Fill in real business details only in `*.local.yaml` files.
- `hubclip.local.yaml` and all other `*.local.yaml` files are gitignored by the kit `.gitignore`.
- Safe public templates may live here as `*.local.example.yaml` (synthetic or redacted only).

## Hub Clip (owner)

If you are building for Hub Clip privately:

1. Copy `hubclip.local.example.yaml` → `hubclip.local.yaml`
2. Replace placeholders with real values
3. Confirm `git status` does **not** list `hubclip.local.yaml` before any commit
4. Point Cursor at that path when running workflows (see `AGENTS.md`)

Community Edition never treats Hub Clip as product identity. Gaming/creator profiles are examples only.
