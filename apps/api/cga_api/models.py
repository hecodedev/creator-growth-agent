from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: Literal["ok"] = "ok"
    version: str
    provider_mode: Literal["local_template"] = "local_template"


class CreativeAsset(BaseModel):
    id: str
    kind: Literal["headline", "primary_text", "cta", "image_alt"]
    text: str
    synthetic: bool = True


class GenerateCreativesRequest(BaseModel):
    campaign_id: str
    profile_path: str | None = None
    pack_label: str | None = None


class CreativePack(BaseModel):
    pack_id: str
    campaign_id: str
    label: str
    assets: list[CreativeAsset]
    synthetic: bool = True
    provider: Literal["local_template"] = "local_template"


class GenerateCreativesResponse(BaseModel):
    pack: CreativePack


class LibraryResponse(BaseModel):
    packs: list[CreativePack]