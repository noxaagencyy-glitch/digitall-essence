import { copyFile, cp, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const clientDir = join(distDir, "client");
const shellFile = join(clientDir, "_shell.html");

if (!existsSync(shellFile)) {
  throw new Error("Vercel build failed: dist/client/_shell.html was not generated.");
}

await copyFile(shellFile, join(clientDir, "index.html"));
await copyFile(shellFile, join(clientDir, "404.html"));

const entries = await readdir(clientDir, { withFileTypes: true });

for (const entry of entries) {
  const source = join(clientDir, entry.name);
  const destination = join(distDir, entry.name);
  await cp(source, destination, { recursive: true, force: true });
}

console.log("Prepared Vercel output in both dist/ and dist/client/.");