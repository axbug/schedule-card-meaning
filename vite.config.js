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
	base:"./",
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
	},
	server:{
		port:3000
	}
})
