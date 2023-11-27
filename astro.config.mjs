import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import auth from "auth-astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), auth()],
  adapter: node({
    mode: "standalone"
  })
});