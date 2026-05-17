import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync } from "node:fs";
import { copyFile, cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";

async function findClientEntry(clientDir: string) {
  const assetsDir = join(clientDir, "assets");
  if (!existsSync(assetsDir)) return undefined;

  const entries = await readdir(assetsDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".js")) continue;
    const file = join(assetsDir, entry.name);
    const source = await readFile(file, "utf8");
    if (source.includes("hydrateRoot(document")) return `assets/${entry.name}`;
  }

  const indexEntry = entries.find(
    (entry) => entry.isFile() && /^index-[\w-]+\.js$/.test(entry.name),
  );
  return indexEntry ? `assets/${indexEntry.name}` : undefined;
}

async function writeStaticShell(clientDir: string, destination: string) {
  const clientEntry = await findClientEntry(clientDir);
  if (!clientEntry) return false;

  const assetsDir = join(clientDir, "assets");
  const assetEntries = existsSync(assetsDir) ? await readdir(assetsDir, { withFileTypes: true }) : [];
  const stylesheet = assetEntries.find((entry) => entry.isFile() && entry.name.endsWith(".css"));
  const stylesheetTag = stylesheet
    ? `<link rel="stylesheet" href="/assets/${basename(stylesheet.name)}">`
    : "";

  await writeFile(
    destination,
    `<!doctype html><html lang="ro"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${stylesheetTag}<title>NOXA Agency</title><meta name="description" content="NOXA Agency builds premium, high-converting websites."></head><body><script type="module" src="/${clientEntry}"></script></body></html>\n`,
  );
  return true;
}

function vercelStaticOutputPlugin() {
  return {
    name: "vercel-static-output",
    async closeBundle() {
      const distDir = "dist";
      const clientDir = join(distDir, "client");
      await mkdir(clientDir, { recursive: true });
      const shellFile = [
        join(clientDir, "_shell.html"),
        join(distDir, "_shell.html"),
        join(clientDir, "index.html"),
        join(distDir, "index.html"),
      ].find((file) => existsSync(file));

      if (shellFile) {
        await copyFile(shellFile, join(clientDir, "_shell.html"));
      } else if (!(await writeStaticShell(clientDir, join(clientDir, "_shell.html")))) {
        return;
      }

      await copyFile(join(clientDir, "_shell.html"), join(clientDir, "index.html"));
      await copyFile(join(clientDir, "_shell.html"), join(clientDir, "404.html"));

      const entries = await readdir(clientDir, { withFileTypes: true });
      for (const entry of entries) {
        await cp(join(clientDir, entry.name), join(distDir, entry.name), {
          recursive: true,
          force: true,
        });
      }

      const vercelOutputDir = join(".vercel", "output");
      const vercelStaticDir = join(vercelOutputDir, "static");
      await rm(vercelOutputDir, { recursive: true, force: true });
      await mkdir(vercelStaticDir, { recursive: true });
      await cp(clientDir, vercelStaticDir, { recursive: true, force: true });
      await writeFile(
        join(vercelOutputDir, "config.json"),
        `${JSON.stringify(
          {
            version: 3,
            routes: [
              { src: "^/assets/(.*)$", dest: "/assets/$1" },
              { src: "^/favicon\\.ico$", dest: "/favicon.ico" },
              { src: "^/(.*)$", dest: "/index.html" },
            ],
          },
          null,
          2
        )}\n`
      );

      await mkdir(dirname(join(distDir, ".vercel-static-ready")), { recursive: true });
      await writeFile(join(distDir, ".vercel-static-ready"), "ready\n");
      console.log("Vercel static output prepared: dist/, dist/client/, and .vercel/output/static/.");
    },
  };
}

export default defineConfig({
  plugins: [vercelStaticOutputPlugin()],
  tanstackStart: {
    server: { entry: "server" },
  },
});
