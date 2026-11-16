#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
set -a
# shellcheck disable=SC1091
source .cga-qa-452
set +a

export VITE_API_BASE="$CGA_API_BASE"

if [[ ! -d apps/api/.venv ]]; then
  python3 -m venv apps/api/.venv
  (cd apps/api && .venv/bin/pip install -e '.[dev]')
fi
if [[ ! -d node_modules ]]; then
  npm install
fi
apps/web/node_modules/.bin/playwright install chromium >/dev/null 2>&1 || npx playwright install chromium

SESSION="cga-qa-452"
tmux -f /exec-daemon/tmux.portal.conf has-session -t "=$SESSION" 2>/dev/null && tmux -f /exec-daemon/tmux.portal.conf kill-session -t "=$SESSION" || true

tmux -f /exec-daemon/tmux.portal.conf new-session -d -s "$SESSION" -c "$ROOT" -- bash -lc '
  set -euo pipefail
  set -a; source .cga-qa-452; set +a
  apps/api/.venv/bin/uvicorn cga_api.main:app --host "$CGA_API_HOST" --port "$CGA_API_PORT"
'

tmux -f /exec-daemon/tmux.portal.conf new-session -d -s "${SESSION}-web" -c "$ROOT/apps/web" -- bash -lc '
  set -euo pipefail
  set -a; source ../../.cga-qa-452; set +a
  export VITE_API_BASE="$CGA_API_BASE"
  npm run dev
'

sleep 3
npm run qa452:e2e --workspace @cga/web