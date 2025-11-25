import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				mytext: ['var(--font-nunito)', 'sans-serif'],
				mytitles: ['var(--font-big-shoulders-stencil-text)', 'system-ui'],
				myicons: ['var(--font-material-icons-outlined)', 'sans-serif'],
			},
			colors: {
				myteal: {
					50: '#eff9f8',
					100: '#def3f0',
					200: '#bee7e1',
					300: '#9ddcd3',
					400: '#7dd0c4',
					500: '#5cc4b5',
					600: '#4a9d91',
					700: '#37766d',
					800: '#254e48',
					900: '#122724',
				},
				mygreen: {
					50: '#f5faf0',
					100: '#ecf5e1',
					200: '#d9ecc2',
					300: '#c5e2a4',
					400: '#b2d985',
					500: '#9fcf67',
					600: '#7fa652',
					700: '#5f7c3e',
					800: '#405329',
					900: '#202915',
				},
				mybrown: {
					50: '#f3f1ea',
					100: '#e8e3d5',
					200: '#d0c6aa',
					300: '#b9aa80',
					400: '#a18d55',
					500: '#8a712b',
					600: '#6e5a22',
					700: '#53441a',
					800: '#372d11',
					900: '#1c1709',
				},
			},
		},
	},
	plugins: [typography],
	corePlugins: {
		preflight: true,
	},
};
