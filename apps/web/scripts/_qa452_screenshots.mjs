import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const webBase = process.env.CGA_WEB_BASE ?? "http://127.0.0.1:3452";
const outDir = path.resolve("../../docs/screenshots/stage-4-5-2");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto(`${webBase}/`);
await page.screenshot({ path: path.join(outDir, "01-dashboard.png"), fullPage: true });
await page.getByTestId("dashboard-open-campaign").click();
await page.waitForURL("**/campaigns/**");
await page.screenshot({ path: path.join(outDir, "02-campaign-creatives.png"), fullPage: true });
await page.getByTestId("campaign-generate-creatives").click();
await page.waitForURL(/creative-studio/);
await page.screenshot({ path: path.join(outDir, "03-studio-library-grid.png"), fullPage: true });
await browser.close();
console.log(`Screenshots saved to ${outDir}`);