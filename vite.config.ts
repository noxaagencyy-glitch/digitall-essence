import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Lovable hosting needs the default Worker build so server routes (contact form,
// email queue) run. The static SPA build is used only when building on Vercel.
const isVercel = !!process.env.VERCEL;

export default defineConfig(
  isVercel
    ? {
        cloudflare: false,
        tanstackStart: {
          spa: { enabled: true },
          server: { entry: "server" },
        },
      }
    : {},
);
