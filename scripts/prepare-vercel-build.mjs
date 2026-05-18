import { existsSync } from "node:fs";
import { copyFile, cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const clientDir = join("dist", "client");
const shellFile = join(clientDir, "_shell.html");

if (!existsSync(shellFile)) {
  throw new Error(
    "Vercel build failed: TanStack Start did not generate dist/client/_shell.html. Check the first build error above; publishing a hand-written shell breaks hydration.",
  );
}

await copyFile(shellFile, join(clientDir, "index.html"));
await copyFile(shellFile, join(clientDir, "404.html"));

const outputDir = join(".vercel", "output");
const staticDir = join(outputDir, "static");

await rm(outputDir, { recursive: true, force: true });
await mkdir(staticDir, { recursive: true });
await cp(clientDir, staticDir, { recursive: true, force: true });
await writeFile(
  join(outputDir, "config.json"),
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
    2,
  )}\n`,
);

console.log("Prepared Vercel output using the TanStack Start SPA shell.");