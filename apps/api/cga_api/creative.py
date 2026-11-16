from __future__ import annotations

import re
import uuid
from pathlib import Path

import yaml

from cga_api.models import CreativeAsset, CreativePack


def _slug(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "campaign"


def load_business_name(profile_path: Path | None) -> str:
    if profile_path is None or not profile_path.is_file():
        return "Your brand"
    data = yaml.safe_load(profile_path.read_text(encoding="utf-8")) or {}
    business = data.get("business") or {}
    return business.get("name") or "Your brand"


def generate_pack(
    campaign_id: str,
    *,
    profile_path: Path | None = None,
    pack_label: str | None = None,
) -> CreativePack:
    """Rule-based creative generation — no external AI APIs."""
    brand = load_business_name(profile_path)
    label = pack_label or f"{_slug(campaign_id)}-pack"
    pack_id = str(uuid.uuid4())
    assets = [
        CreativeAsset(
            id=f"{pack_id}-headline",
            kind="headline",
            text=f"{brand}: fewer inbox misses for your team",
        ),
        CreativeAsset(
            id=f"{pack_id}-primary",
            kind="primary_text",
            text=(
                f"Campaign `{campaign_id}` — draft copy generated locally from your "
                f"business profile. Review before publish; SYNTHETIC demo only."
            ),
        ),
        CreativeAsset(
            id=f"{pack_id}-cta",
            kind="cta",
            text="See how it works",
        ),
        CreativeAsset(
            id=f"{pack_id}-alt",
            kind="image_alt",
            text=f"Illustration: {brand} shared inbox workflow (placeholder, no image API)",
        ),
    ]
    return CreativePack(
        pack_id=pack_id,
        campaign_id=campaign_id,
        label=label,
        assets=assets,
    )