// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import icon from 'astro-icon';

import lenis from 'astro-lenis';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), lenis (), sitemap()],
  site: 'https://maxence-garandel.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});