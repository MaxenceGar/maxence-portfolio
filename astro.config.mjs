// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import icon from 'astro-icon';

import lenis from 'astro-lenis';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), lenis ()],
  vite: {
    plugins: [tailwindcss()]
  }
});