/**
 * Stage 4.5.2 browser E2E — expects QA env (.cga-qa-452) + API 0.5.2 + Vite web.
 */
import { chromium } from "playwright";

const webBase = process.env.CGA_WEB_BASE ?? "http://127.0.0.1:3452";
const apiBase = process.env.CGA_API_BASE ?? "http://127.0.0.1:8452";
const campaignId = process.env.CGA_DEFAULT_CAMPAIGN_ID ?? "demo-launch-q4";

function fail(msg) {
  console.error(`E2E FAIL: ${msg}`);
  process.exitCode = 1;
}

async function waitForHealthy() {
  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${apiBase}/health`);
      if (res.ok) {
        const body = await res.json();
        if (body.version === "0.5.2") return;
      }
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("API 0.5.2 health check timed out");
}

async function main() {
  await waitForHealthy();

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];

  try {
    await page.goto(`${webBase}/`, { waitUntil: "networkidle" });

    const studioNav = page.getByTestId("nav-ai-creative-studio");
    await studioNav.waitFor({ state: "visible" });
    const navText = (await studioNav.innerText()).trim();
    if (navText !== "AI Creative Studio") {
      fail(`nav label expected "AI Creative Studio", got "${navText}"`);
    }

    await page.getByTestId("dashboard-open-campaign").click();
    await page.waitForURL(`**/campaigns/${campaignId}`);

    const creativesSection = page.getByTestId("campaign-creatives");
    await creativesSection.waitFor({ state: "visible" });

    const generate = page.getByTestId("campaign-generate-creatives");
    await generate.waitFor({ state: "visible" });
    const tag = await generate.evaluate((el) => el.tagName.toLowerCase());
    if (tag !== "button") {
      fail(`Generate Creatives must be a single button (found <${tag}>)`);
    }
    const nestedInteractive = await generate.evaluate((el) =>
      Boolean(el.querySelector("a,button"))
    );
    if (nestedInteractive) {
      fail("Generate Creatives must not nest Link+Button");
    }

    await generate.click();
    await page.waitForURL(/\/creative-studio\?pack=/);

    const grid = page.getByTestId("library-grid");
    await grid.waitFor({ state: "visible" });
    const hidden = await grid.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.display === "none" || style.visibility === "hidden";
    });
    if (hidden) {
      fail("library-grid must remain visible after handoff");
    }

  const packCards = page.getByTestId("library-pack-card");
    const count = await packCards.count();
    if (count < 1) {
      fail("expected at least one library pack after generation");
    }

    await studioNav.click();
    await page.waitForURL(/\/creative-studio/);
    await page.getByTestId("library-grid").waitFor({ state: "visible" });

    console.log("E2E PASS: Stage 4.5.2 AI Creative Studio flow");
  } catch (err) {
    errors.push(err instanceof Error ? err.message : String(err));
    fail(errors.join("; "));
  } finally {
    await browser.close();
    if (errors.length) process.exit(1);
  }
}

main().catch((err) => {
  fail(err instanceof Error ? err.message : String(err));
  process.exit(1);
});