<template>
	<view>
		<view @click="ChangeToolsShow(false)">
			<u-image src="@/static/header-top.jpeg" width="100%" height="100%" mode="widthFix"></u-image>

			<view class="box">
				<view class="u-text-center u-font-16">
					<view class="box_header">请收下绿色行程卡</view>
					<view class="box_title">2020***2022的动态行程卡</view>
					<view class="box_content">停止于: 2022.12.13 00:00:00</view>
				</view>
				<view class="u-flex u-row-center u-m-30">
					<u-image class="logo" src="@/static/logo.png" width="40%" height="100%" mode="widthFix"></u-image>
				</view>
				<view class="u-font-20" style="font-weight: 700;padding: 10rpx 40rpx 30rpx 40rpx;">
					<text class="u-tips-color u-font-13">您于 2020 - 2022 年到达或旅经:</text>
					<text class="u-p-l-10 u-font-14">{{ CitysList }}</text>
				</view>
			</view>

			<view class="u-m-t-30">
				<text class="u-font-12" style="color: #F8F8F8;">{{ announce }}</text>
			</view>

			<view class="u-m-t-40">
				<u-divider bg-color="transparent" color="#F8F8F8" border-color="#F8F8F8" :font-size="28">{{ footer }}</u-divider>
			</view>
		</view>

		<view v-show="!isHideTools">
			<view class="u-flex u-row-center u-col-center u-m-t-30">
				<u-switch v-model="isHideProvince" :size="22" active-color="#00b578"></u-switch>
				<text class="u-p-l-20" style="color: #F8F8F8;font-weight: 700;">隐藏省份名称</text>
			</view>

			<view class="u-flex u-m-t-30">
				<view class="u-flex-4 u-text-center"><u-button size="mini" type="success" @click="RedirectToHome()">✍ 重新填写</u-button></view>
				<view class="u-flex-4 u-text-center"><u-button size="mini" type="primary" @click="RouteToBlog()">🚀 作者博客</u-button></view>
				<view class="u-flex-4 u-text-center"><u-button size="mini" type="warning" @click="ChangeToolsShow(true)">📸 开始截图</u-button></view>
			</view>

			<view class="u-text-center u-m-t-50" style="color: #F8F8F8;">© 2021 阿轩的BUG</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { GetStorage } from '@/util/index.js';
import { RedirectToHome } from '@/util/index.js';
const announce = '12月13日0时起, 正式下线“通信行程卡”服务，“通信行程卡” 短信、网页、微信小程序、支付宝小程序、APP等所有渠道同步下线!';
const footer = '三年了，再见！';

const isHideProvince = ref(false);
const isHideTools = ref(false);
const citys = ref([]);

onMounted(() => {
	const data = GetStorage('info');
	try {
		const list = JSON.parse(data);
		if (list.length === 0) throw '无数据！';
		citys.value = list;
	} catch (e) {
		RedirectToHome();
	}
});

const CitysList = computed(() => {
	const list = [];
	for (let item of citys.value) {
		let _ = '';
		if (!isHideProvince.value) _ = item.province;
		_ += item.city;
		list.push(_);
	}
	return list.join('、');
});

const RouteToBlog = () => location.href = "//blog.yxbug.cn"

function ChangeToolsShow(state) {
	isHideTools.value = state;
}
</script>

<style lang="scss">
page {
	width: 100vw;
	min-height: 100vh;
	left: 0;
	top: 0;
	background: #2da568;
	padding: 8% 10%;
}

.box {
	width: 100%;
	margin: 0 auto;
	min-height: 200px;
	background: #fff;
	border-radius: 20px;
	position: relative;
	&_header {
		height: 90rpx;
		line-height: 90rpx;
		color: #2ea468;
		font-weight: 700;
		background-image: url('./static/header.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: top;
		border-radius: 40rpx 40rpx 0 0;
	}
	&_title {
		color: #414141;
		font-weight: 700;
		margin: 20rpx auto;
	}
	&_content {
		color: #949494;
		text-align: center;
		margin: 10rpx auto;
		font-size: 32rpx;
		font-weight: 700;
	}
}

.logo {
	animation: logo-bounce 1.25s linear infinite;
}

@keyframes logo-bounce {
	0% {
		transform: scale(1);
		opacity: 1;
	}

	50% {
		transform: scale(0.9);
		opacity: 0.85;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
</style>
