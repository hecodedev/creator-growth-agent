const API_BASE = import.meta.env.VITE_API_BASE ?? "";

export type CreativeAsset = {
  id: string;
  kind: string;
  text: string;
  synthetic: boolean;
};

export type CreativePack = {
  pack_id: string;
  campaign_id: string;
  label: string;
  assets: CreativeAsset[];
  synthetic: boolean;
  provider: string;
};

export async function fetchCampaign(campaignId: string) {
  const res = await fetch(`${API_BASE}/api/v0.5.2/campaigns/${campaignId}`);
  if (!res.ok) throw new Error(`campaign ${campaignId} failed`);
  return res.json() as Promise<{ campaign_id: string; name: string; creative_asset_count: number }>;
}

export async function generateCreatives(campaignId: string, packLabel?: string) {
  const res = await fetch(`${API_BASE}/api/v0.5.2/campaigns/generate-creatives`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      campaign_id: campaignId,
      profile_path: "config/examples/saas-b2b.synthetic.yaml",
      pack_label: packLabel,
    }),
  });
  if (!res.ok) throw new Error("generate creatives failed");
  const data = (await res.json()) as { pack: CreativePack };
  return data.pack;
}

export async function fetchLibrary(campaignId?: string) {
  const qs = campaignId ? `?campaign_id=${encodeURIComponent(campaignId)}` : "";
  const res = await fetch(`${API_BASE}/api/v0.5.2/creative-library${qs}`);
  if (!res.ok) throw new Error("library fetch failed");
  const data = (await res.json()) as { packs: CreativePack[] };
  return data.packs;
}