import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api/disease': {
				target: 'https://disease.sh',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/disease/, '')
			}
		}
	}
});
