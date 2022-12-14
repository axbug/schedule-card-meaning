import {
	createSSRApp
} from "vue";
import App from "./App.vue";
<<<<<<< HEAD
import uView from 'vk-uview-ui';
export function createApp() {
	const app = createSSRApp(App);
	app.use(uView);
=======
export function createApp() {
	const app = createSSRApp(App);
>>>>>>> 8bbf6f4 (🎨 创建脚手架)
	return {
		app,
	};
}
