<<<<<<< HEAD
import {
	defineConfig
} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import progress from 'vite-plugin-progress'
import {
	resolve
} from "path"

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
			},
		},
	},
	plugins: [
		progress({
		  format: 'building [:bar] :percent',
		  total: 100,
		  width: 100,
		  complete: '=',
		  incomplete: '',
		}),
		uni()
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	}
})
=======
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
})
>>>>>>> 8bbf6f4 (🎨 创建脚手架)
