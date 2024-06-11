// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	root: '.',
	build: {
		rollupOptions: {
			input: {
				main: 'index.html',
				dashboard: resolve(__dirname, 'Dashboard/index.html'),
				dashboard_cdi: resolve(__dirname, 'Dashboard/CDI/index.html'),
				dashboard_clj: resolve(__dirname, 'Dashboard/CLJ/index.html'),
				dashboard_corad: resolve(__dirname, 'Dashboard/CORAD/index.html'),
				dashboard_crimsoc: resolve(__dirname, 'Dashboard/CRIMSOC/index.html'),
				dashboard_crimtic: resolve(__dirname, 'Dashboard/CRIMTIC/index.html'),
				dashboard_lea: resolve(__dirname, 'Dashboard/LEA/index.html')
			},
			output: {
				dir: 'dist',
				entryFileNames: '[name].js',
				chunkFileNames: 'chunks/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash][extname]'
			}
		}
	},
	server: {
		open: true,
	}
});