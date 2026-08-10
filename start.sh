#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

if curl -fsS "http://127.0.0.1:8000/" >/dev/null 2>&1; then
  echo "Static server is already available on port 8000."
else
  echo "Starting static server on port 8000..."
  python3 -m http.server 8000 --bind 127.0.0.1 &
  SERVER_PID=$!

  for _ in {1..50}; do
    if curl -fsS "http://127.0.0.1:8000/" >/dev/null 2>&1; then
      break
    fi
    sleep 0.1
  done
fi

if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "http://localhost:8000/" >/dev/null 2>&1 || true
elif command -v open >/dev/null 2>&1; then
  open "http://localhost:8000/" >/dev/null 2>&1 || true
else
  echo "Open this page in your browser: http://localhost:8000/"
fi

echo "Portfolio is live at: http://localhost:8000/"
