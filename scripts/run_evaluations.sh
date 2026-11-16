#!/usr/bin/env bash
# Repeatable evaluation entrypoint — stdlib Python only.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "== Creator Growth Agent — evaluations =="
echo "Root: $ROOT"

if ! command -v python3 >/dev/null 2>&1; then
  echo "BLOCKED: python3 not found"
  exit 2
fi

python3 "$ROOT/scripts/validate_kit.py"
echo
echo "== Extra structural checks =="

# Workflows 01-12 exist
missing=0
for i in $(seq -w 1 12); do
  if ! ls "$ROOT/workflows/$i"-*.md >/dev/null 2>&1; then
    echo "Missing workflow $i"
    missing=1
  fi
done

# .gitignore protects private profiles
if ! grep -q 'private-profiles/\*' "$ROOT/.gitignore"; then
  echo "gitignore missing private-profiles/*"
  missing=1
fi
if ! grep -q 'hubclip.local.yaml' "$ROOT/.gitignore"; then
  echo "gitignore missing hubclip.local.yaml"
  missing=1
fi

# Owner-local private file is allowed (gitignored). Warn for public-tree hygiene.
if [[ -f "$ROOT/private-profiles/hubclip.local.yaml" ]]; then
  echo "NOTE: private-profiles/hubclip.local.yaml present (gitignored). Omit from public distribution archives."
fi

if [[ "$missing" -ne 0 ]]; then
  echo "Structural checks failed"
  exit 1
fi

echo "Structural checks passed."
echo "Done."
