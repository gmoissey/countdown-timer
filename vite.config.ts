import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
	base: '/countdown-timer/',
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				searchForWorkspaceRoot(process.cwd()),
				'/public/backgrounds', '/public/sounds'
			  ]
		}
	}
});
