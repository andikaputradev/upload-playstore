import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";

function getAllFiles(dir: string, extensions: string[]): string[] {
  const results: string[] = [];

  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") {
        continue;
      }
      results.push(...getAllFiles(fullPath, extensions));
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }

  return results;
}

describe("Typography: no em dash or en dash", () => {
  const rootDir = path.resolve(__dirname, "../..");
  const srcDir = path.resolve(rootDir, "src");

  const srcFiles = getAllFiles(srcDir, [".ts", ".tsx", ".css"]);
  const rootFiles = ["README.md", "DESIGN.md", "AGENTS.md"]
    .map((f) => path.resolve(rootDir, f))
    .filter((f) => fs.existsSync(f));

  const allFiles = [...srcFiles, ...rootFiles];

  it("should have files to scan", () => {
    expect(allFiles.length).toBeGreaterThan(0);
  });

  for (const file of allFiles) {
    const relativePath = path.relative(rootDir, file);

    it(`${relativePath} has no em dash (U+2014)`, () => {
      const content = fs.readFileSync(file, "utf-8");
      const emDash = "\u2014";
      expect(content).not.toContain(emDash);
    });

    it(`${relativePath} has no en dash (U+2013)`, () => {
      const content = fs.readFileSync(file, "utf-8");
      const enDash = "\u2013";
      expect(content).not.toContain(enDash);
    });
  }
});
