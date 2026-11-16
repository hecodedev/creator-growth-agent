from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from cga_api.main import ROOT, app

client = TestClient(app)


@pytest.fixture(autouse=True)
def clear_library() -> None:
    import cga_api.main as main_mod

    main_mod._library.clear()


def test_health_reports_version_052() -> None:
    res = client.get("/health")
    assert res.status_code == 200
    body = res.json()
    assert body["version"] == "0.5.2"
    assert body["provider_mode"] == "local_template"


def test_generate_creatives_uses_local_templates() -> None:
    profile = ROOT / "config/examples/saas-b2b.synthetic.yaml"
    res = client.post(
        "/api/v0.5.2/campaigns/generate-creatives",
        json={
            "campaign_id": "demo-launch-q4",
            "profile_path": str(profile.relative_to(ROOT)),
        },
    )
    assert res.status_code == 200
    pack = res.json()["pack"]
    assert pack["provider"] == "local_template"
    assert pack["synthetic"] is True
    assert len(pack["assets"]) >= 3
    assert "Northlane" in pack["assets"][0]["text"] or "SYNTHETIC" in pack["assets"][0]["text"]


def test_library_lists_generated_pack() -> None:
    client.post(
        "/api/v0.5.2/campaigns/generate-creatives",
        json={"campaign_id": "c-1", "pack_label": "handoff-pack"},
    )
    res = client.get("/api/v0.5.2/creative-library")
    assert res.status_code == 200
    packs = res.json()["packs"]
    assert len(packs) == 1
    assert packs[0]["label"] == "handoff-pack"