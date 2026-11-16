from __future__ import annotations

import os
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from cga_api import __version__
from cga_api.creative import generate_pack
from cga_api.models import (
    GenerateCreativesRequest,
    GenerateCreativesResponse,
    HealthResponse,
    LibraryResponse,
)

ROOT = Path(__file__).resolve().parents[3]
_library: list = []


def _resolve_profile(path: str | None) -> Path | None:
    if not path:
        env = os.environ.get("CGA_SYNTHETIC_PROFILE")
        if env:
            path = env
        else:
            return None
    candidate = Path(path)
    if not candidate.is_absolute():
        candidate = ROOT / path
    return candidate if candidate.is_file() else None


app = FastAPI(title="Creator Growth Agent API", version=__version__)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(version=__version__)


@app.get("/api/v0.5.2/campaigns/{campaign_id}")
def get_campaign(campaign_id: str) -> dict:
    return {
        "campaign_id": campaign_id,
        "name": "SYNTHETIC — Q4 launch nurture",
        "status": "draft",
        "synthetic": True,
        "creative_asset_count": sum(1 for p in _library if p.campaign_id == campaign_id),
    }


@app.post("/api/v0.5.2/campaigns/generate-creatives", response_model=GenerateCreativesResponse)
def post_generate_creatives(body: GenerateCreativesRequest) -> GenerateCreativesResponse:
    profile = _resolve_profile(body.profile_path)
    pack = generate_pack(
        body.campaign_id,
        profile_path=profile,
        pack_label=body.pack_label,
    )
    _library.insert(0, pack)
    return GenerateCreativesResponse(pack=pack)


@app.get("/api/v0.5.2/creative-library", response_model=LibraryResponse)
def get_library(campaign_id: str | None = None) -> LibraryResponse:
    packs = _library
    if campaign_id:
        packs = [p for p in _library if p.campaign_id == campaign_id]
    return LibraryResponse(packs=packs)


@app.get("/api/v0.5.2/creative-packs/{pack_id}")
def get_pack(pack_id: str) -> dict:
    for pack in _library:
        if pack.pack_id == pack_id:
            return pack.model_dump()
    raise HTTPException(status_code=404, detail="pack not found")