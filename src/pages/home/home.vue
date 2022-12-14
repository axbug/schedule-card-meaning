<template>
	<view>
		<view class="u-flex u-row-center" style="background-color: #ededed;padding: 20rpx 10rpx 20rpx 20rpx;">
			<view style="width: 80%;">
				<view>最近三年到达或旅经的城市：</view>
				<view class="u-tips-color">已选择 {{ cityNum }} 个</view>
			</view>
			<view style="width: 20%;"><u-button type="success" size="mini" @click="RouteResult()">下一步</u-button></view>
		</view>

		<view class="u-p-20">
			<u-collapse :accordion="false">
				<u-collapse-item v-for="itemList in cityList" :title="itemList.provinceName">
					<u-checkbox-group shape="circle" active-color="#00b578">
						<template v-for="item in itemList.citys">
							<u-checkbox v-model="item.checked" :name="item.cityName">{{ item.cityName }}</u-checkbox>
						</template>
					</u-checkbox-group>
				</u-collapse-item>
			</u-collapse>
		</view>
	</view>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { CITY_LIST } from '@/config/city.js';
import { SetStorage } from '@/util/index.js';

const cityList = reactive(CITY_LIST);
const cityNum = computed(() => {
	let num = 0;
	for (let itemList of cityList) {
		for (let item of itemList.citys) {
			if (item.checked) ++num;
		}
	}
	return num;
});

function RouteResult() {
	const citys = GetSelectCitys();
	if (citys.length === 0) {
		uni.showToast({
			title: '请先选择地区！',
			icon: 'none'
		});
		return;
	}
	SetStorage('info', JSON.stringify(citys));
	uni.redirectTo({
		url: '/pages/home/result'
	});
}

function GetSelectCitys() {
	const citys = [];
	for (let itemList of cityList) {
		for (let item of itemList.citys) {
			if (item.checked) {
				const province = itemList.provinceName === '直辖市/特别行政区' ? '' : itemList.provinceName;
				citys.push({
					province: province,
					city: item.cityName
				});
			}
		}
	}
	return citys;
}
</script>
