// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

const tailwindPlugin = /** @type {any} */ (tailwindcss());

// https://astro.build/config
export default defineConfig({
    site: 'https://yyhmsg.net',
    integrations: [mdx(), sitemap(), alpinejs()],
    experimental: {
        fonts: [
            {
                name: 'Nunito',
                cssVariable: '--font-nunito',
                provider: fontProviders.fontsource(),
                weights: ['300', '400', '600', '700'],
                styles: ['normal'],
            },
            {
                name: 'Big Shoulders Stencil Text',
                cssVariable: '--font-big-shoulders-stencil-text',
                provider: fontProviders.fontsource(),
                weights: ['300', '400', '700'],
                styles: ['normal'],
            },
            {
                name: 'Material Icons Outlined',
                cssVariable: '--font-material-icons-outlined',
                provider: fontProviders.fontsource(),
                weights: ['400'],
                styles: ['normal'],
                fallbacks: ['sans-serif'],
            },
        ],
    },
    vite: {
        plugins: [tailwindPlugin],
    },
});
