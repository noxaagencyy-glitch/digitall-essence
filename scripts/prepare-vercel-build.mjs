import { copyFile, cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const clientDir = join(distDir, "client");
const shellFile = [join(clientDir, "_shell.html"), join(distDir, "_shell.html")].find((file) =>
  existsSync(file),
);

if (!shellFile) {
  throw new Error(
    "Vercel build failed: no app shell was generated. Expected dist/_shell.html or dist/client/_shell.html.",
  );
}

await copyFile(shellFile, join(clientDir, "index.html"));
await copyFile(shellFile, join(clientDir, "404.html"));

const entries = await readdir(clientDir, { withFileTypes: true });

for (const entry of entries) {
  const source = join(clientDir, entry.name);
  const destination = join(distDir, entry.name);
  await cp(source, destination, { recursive: true, force: true });
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

console.log("Prepared Vercel output in dist/, dist/client/, and .vercel/output/static/.");