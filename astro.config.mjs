// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mlagowski.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});
