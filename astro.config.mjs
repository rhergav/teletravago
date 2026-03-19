import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/utils/readingTime';
import rehypePrettyCode from 'rehype-pretty-code';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const options = {
	onVisitLine(node) {
		if (node.children.length === 0) {
			node.children = [{ type: 'text', value: ' ' }];
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className = ['highlighted'];
	}
};

// https://astro.build/config
export default defineConfig({
	site: 'https://rhergav.github.io/teletravago',
	base: '/teletravago',

	markdown: {
		syntaxHighlight: false,
		rehypePlugins: [[rehypePrettyCode, options]],
		remarkPlugins: [remarkReadingTime]
	},

	integrations: [react(), sitemap()],
	output: 'static',

	vite: {
		plugins: [tailwindcss()]
	}
});

