import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CreativePack, fetchLibrary } from "../api/client";

export function CreativeStudioPage() {
  const [params] = useSearchParams();
  const campaignFilter = params.get("campaign") ?? undefined;
  const highlightedPack = params.get("pack") ?? undefined;
  const [packs, setPacks] = useState<CreativePack[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLibrary(campaignFilter)
      .then(setPacks)
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "library failed");
      });
  }, [campaignFilter]);

  const visible = useMemo(() => {
    if (!highlightedPack) return packs;
    const match = packs.find((p) => p.pack_id === highlightedPack);
    return match ? [match, ...packs.filter((p) => p.pack_id !== highlightedPack)] : packs;
  }, [packs, highlightedPack]);

  return (
    <section>
      <h1 id="creative-studio-title">AI Creative Studio</h1>
      <p className="muted">
        Local template library — zero paid AI providers.{" "}
        {campaignFilter ? `Filtered to campaign ${campaignFilter}.` : "All campaigns."}
      </p>
      {error ? <p role="alert">{error}</p> : null}

      <LibraryGrid packs={visible} highlightedPack={highlightedPack} />
    </section>
  );
}

function LibraryGrid({
  packs,
  highlightedPack,
}: {
  packs: CreativePack[];
  highlightedPack?: string;
}) {
  return (
    <div
      data-testid="library-grid"
      role="region"
      aria-labelledby="creative-studio-title"
      className="library-grid"
    >
      {packs.length === 0 ? (
        <div className="library-card" data-testid="library-grid-empty">
          <strong>Empty library</strong>
          <p className="muted">Generate from a campaign to see packs here.</p>
        </div>
      ) : (
        packs.map((pack) => (
          <article
            key={pack.pack_id}
            className="library-card"
            data-testid="library-pack-card"
            data-pack-id={pack.pack_id}
            aria-current={pack.pack_id === highlightedPack ? "true" : undefined}
          >
            <strong>{pack.label}</strong>
            <p className="muted">Campaign: {pack.campaign_id}</p>
            <ul className="asset-list">
              {pack.assets.slice(0, 3).map((asset) => (
                <li key={asset.id}>
                  {asset.kind}: {asset.text.slice(0, 72)}
                  {asset.text.length > 72 ? "…" : ""}
                </li>
              ))}
            </ul>
          </article>
        ))
      )}
    </div>
  );
}