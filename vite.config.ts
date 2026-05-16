import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel-compatible build:
// - disable Cloudflare Worker plugin (Vercel uses a different runtime)
// - enable SPA mode so the build emits a static client bundle Vercel can serve directly
// Lovable preview (dev server) is unaffected; both work in parallel.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: { enabled: true },
  },
});
