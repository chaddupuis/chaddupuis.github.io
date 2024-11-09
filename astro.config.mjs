// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

// Supports weights 100-900
import '@fontsource/big-shoulders-stencil-text';
// Supports weights 200-900
import '@fontsource/nunito';

import '@fontsource/material-icons-outlined';

// https://astro.build/config
export default defineConfig({
    site: 'https://yyhmsg.net',
    integrations: [mdx(), sitemap(), tailwind(), alpinejs()],
});


