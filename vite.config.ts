import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync } from "node:fs";
import { copyFile, cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

function vercelStaticOutputPlugin() {
  return {
    name: "vercel-static-output",
    async closeBundle() {
      const distDir = "dist";
      const clientDir = join(distDir, "client");
      const shellFile = join(clientDir, "_shell.html");

      if (!existsSync(shellFile)) return;

      await copyFile(shellFile, join(clientDir, "index.html"));
      await copyFile(shellFile, join(clientDir, "404.html"));

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

// Vercel-compatible build:
// - disable Cloudflare Worker plugin (Vercel uses a different runtime)
// - enable SPA mode so the build emits a static client bundle Vercel can serve directly
// Lovable preview (dev server) is unaffected; both work in parallel.
export default defineConfig({
  plugins: [vercelStaticOutputPlugin()],
  cloudflare: false,
  tanstackStart: {
    spa: { enabled: true },
  },
});
