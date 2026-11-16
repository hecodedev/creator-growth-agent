import { describe, expect, it } from "vitest";

export function buildStudioHandoffUrl(packId: string, campaignId: string) {
  const qs = new URLSearchParams({ pack: packId, campaign: campaignId });
  return `/creative-studio?${qs.toString()}`;
}

describe("pack handoff", () => {
  it("encodes pack and campaign for studio route", () => {
    expect(buildStudioHandoffUrl("abc", "demo-launch-q4")).toBe(
      "/creative-studio?pack=abc&campaign=demo-launch-q4"
    );
  });
});