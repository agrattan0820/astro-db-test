import db from "@astrojs/db";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: "server",
  vite: {
    optimizeDeps: {
      exclude: ["oslo"],
    },
  },
  adapter: vercel(),
});
