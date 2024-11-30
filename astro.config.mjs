// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
	site: 'https://dotd-inc.github.io',
	base: '/sukugiru_personal_theme',
	redirects: {
		"/sukugiru_personal_theme/theme" : "/sukugiru_personal_theme",
	},
});
