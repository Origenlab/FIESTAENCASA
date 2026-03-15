import sitemap from '@astrojs/sitemap';import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fiestaencasa.com.mx',
  build: { format: 'file' }
  integrations: [sitemap()],
});
