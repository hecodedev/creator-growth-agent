import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  CreativePack,
  fetchCampaign,
  fetchLibrary,
  generateCreatives,
} from "../api/client";

export function CampaignPage() {
  const { campaignId = "demo-launch-q4" } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("Loading…");
  const [packs, setPacks] = useState<CreativePack[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!campaignId) return;
    const [campaign, library] = await Promise.all([
      fetchCampaign(campaignId),
      fetchLibrary(campaignId),
    ]);
    setName(campaign.name);
    setPacks(library);
  }, [campaignId]);

  useEffect(() => {
    refresh().catch((err: unknown) => {
      setError(err instanceof Error ? err.message : "load failed");
    });
  }, [refresh]);

  async function onGenerate() {
    if (!campaignId) return;
    setBusy(true);
    setError(null);
    try {
      const pack = await generateCreatives(
        campaignId,
        `${campaignId}-qa452-handoff`
      );
      await refresh();
      navigate(
        `/creative-studio?pack=${encodeURIComponent(pack.pack_id)}&campaign=${encodeURIComponent(campaignId)}`
      );
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "generation failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section>
      <h1>Campaign: {campaignId}</h1>
      <p className="muted">{name}</p>

      <div className="panel">
        <h2>Creatives</h2>
        <p className="muted">
          Generate a SYNTHETIC pack using local templates (no paid AI).
        </p>
        <button
          type="button"
          className="btn-primary"
          data-testid="campaign-generate-creatives"
          aria-label="Generate Creatives"
          disabled={busy}
          onClick={() => void onGenerate()}
        >
          Generate Creatives
        </button>
        <p className="muted" style={{ marginTop: "0.75rem" }}>
          Open studio after handoff:{" "}
          <Link to="/creative-studio" data-testid="campaign-studio-link">
            AI Creative Studio
          </Link>
        </p>
        {error ? <p role="alert">{error}</p> : null}
      </div>

      <section
        data-testid="campaign-creatives"
        aria-label="Campaign creatives"
        className="panel"
      >
        <h2>On-campaign assets</h2>
        {packs.length === 0 ? (
          <p className="muted" data-testid="campaign-creatives-empty">
            No packs yet. Use Generate Creatives to create a local draft pack.
          </p>
        ) : (
          <ul className="asset-list">
            {packs.map((pack) => (
              <li key={pack.pack_id}>
                <strong>{pack.label}</strong> — {pack.assets.length} assets (
                {pack.provider})
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}