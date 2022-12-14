import {
	CACHE_NAME
} from "@/config/option.js"

export const GetCacheName = name => {
	return `${CACHE_NAME}-${name}`
}

export const SetStorage = (name, value) => {
	uni.setStorageSync(GetCacheName(name), value);
}

export const GetStorage = name => {
	return uni.getStorageSync(GetCacheName(name))
}

export const RedirectToHome = () => {
	uni.redirectTo({
		url: '/pages/home/home'
	});
}
