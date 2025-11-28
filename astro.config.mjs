// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte({ extensions: ['.svelte'] })],
  site: 'https://thisIsMatthewZhang.github.io',
  base: '/official-freelancer-page',

  vite: {
    plugins: [tailwindcss()]
  }
});