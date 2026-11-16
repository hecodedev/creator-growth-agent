# CGA API 0.5.2

Local FastAPI service for Stage 4.5.2 AI Creative Studio. Generation uses **local templates only** (no paid AI providers).

```bash
cd apps/api
python -m venv .venv && source .venv/bin/activate
pip install -e '.[dev]'
uvicorn cga_api.main:app --host 127.0.0.1 --port 8452
```