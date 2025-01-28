// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';

// Supports weights 100-900
import '@fontsource/big-shoulders-stencil-text';
// Supports weights 200-900
import '@fontsource/nunito';

import '@fontsource/material-icons-outlined';

// https://astro.build/config
export default defineConfig({
    site: 'https://yyhmsg.net',
    integrations: [mdx(), sitemap(), alpinejs(), tailwind()],
});