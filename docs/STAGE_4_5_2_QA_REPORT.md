# Stage 4.5.2 — AI Creative Studio QA Report

**QA profile:** `.cga-qa-452`  
**Executed:** 2026-11-16 (Atlantic/Reykjavik)  
**Environment:** Cloud Agent VM — API `127.0.0.1:8452`, Web `127.0.0.1:3452`

---

## 1. QA stack bootstrap

| Step | Command | Result |
|------|---------|--------|
| Load env | `set -a && source .cga-qa-452 && set +a` | PASS |
| API 0.5.2 | `uvicorn cga_api.main:app` (tmux `cga-qa-452`) | PASS |
| Web | `npm run dev` in `apps/web` (tmux `cga-qa-452-web`) | PASS |
| Health | `GET /health` → `version: 0.5.2` | PASS |

---

## 2. Automated regression

| Suite | Command | Result |
|-------|---------|--------|
| Kit evals | `./scripts/run_evaluations.sh` | **16/16 PASS** |
| API unit | `apps/api/.venv/bin/pytest -q` | **3 passed** |
| Web unit | `npm run test --workspace @cga/web` | **1 passed** |
| Typecheck | `npm run typecheck --workspace @cga/web` | PASS |
| Lint | `npm run lint --workspace @cga/web` | PASS |
| Build | `npm run build --workspace @cga/web` | PASS |

---

## 3. Browser E2E (`_qa452_browser_e2e.mjs`)

**Script:** `apps/web/scripts/_qa452_browser_e2e.mjs`  
**Outcome:** **PASS** — log: `E2E PASS: Stage 4.5.2 AI Creative Studio flow`

| Case | Assertion |
|------|-----------|
| Nav label | `getByTestId('nav-ai-creative-studio')` text === `AI Creative Studio` |
| Campaign creatives shell | `campaign-creatives` visible **before** generation |
| Generate control | `campaign-generate-creatives` is a single `<button>` without nested link/button |
| Handoff | URL matches `/creative-studio?pack=` after click |
| Library grid | `library-grid` visible (`display`/`visibility` not hidden) |
| Pack content | ≥1 `library-pack-card` after generation |

### Previously failing areas (0.5.2) — status

| Failure mode | Status |
|--------------|--------|
| Nested Link+Button | **Fixed** |
| `campaign-creatives` only when assets exist | **Fixed** |
| `library-grid` hidden | **Fixed** |
| Selector mismatches | **Fixed** |

---

## 4. Visual evidence

Screenshots captured via `apps/web/scripts/_qa452_screenshots.mjs`:

| File | Scene |
|------|-------|
| `docs/screenshots/stage-4-5-2/01-dashboard.png` | Dashboard + nav |
| `docs/screenshots/stage-4-5-2/02-campaign-creatives.png` | Campaign panel + empty creatives region |
| `docs/screenshots/stage-4-5-2/03-studio-library-grid.png` | Studio library after handoff |

---

## 5. Security / policy

- No API keys or paid provider credentials in repo or `.cga-qa-452`
- All generated marketing copy labeled **SYNTHETIC** in API models
- No auto-send or external network calls for generation

---

## 6. Residual risks

| Risk | Mitigation |
|------|------------|
| Ephemeral in-memory library | Documented; restart API clears packs — acceptable for QA452 |
| Manual approval still required for real outreach | Workflow `06` rules unchanged |

---

## 7. QA sign-off

**Stage 4.5.2 AI Creative Studio completion:** **PASS** for profile `452` with zero paid AI providers.