import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jadey0804.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
