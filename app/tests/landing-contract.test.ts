import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

describe("Luna website route contract", () => {

  test("keeps public landing and full app routes separate", () => {
    const landingRoute = readFileSync(new URL("../src/routes/index.tsx", import.meta.url), "utf8");
    const appRoute = readFileSync(new URL("../src/routes/app.tsx", import.meta.url), "utf8");

    expect(landingRoute).toContain("<Hero />");
    expect(appRoute).toContain('createFileRoute("/app")');
    expect(appRoute).toContain("previewMode");
  });

  test("ships the canonical generations workspace recipe", () => {
    const layout = readFileSync(new URL("../src/layouts/custom.tsx", import.meta.url), "utf8");

    expect(layout).toContain('id: "generations"');
    expect(layout).toContain('mode="generations"');
    expect(layout).toContain("<UserGenerations demo");
    expect(layout).toContain("<PromptBox.Root");
  });
});
