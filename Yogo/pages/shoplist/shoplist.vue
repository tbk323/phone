<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="im">
			<swiper-item v-for="i,index in list.pics" :key="index">
				<img :src="i.pics_big" alt="">
			</swiper-item>
		</swiper>
		<p class="red">￥{{list.goods_price}}</p>
		<!-- 中间 -->
		<view class="cen">
			<p>{{list.goods_name}}</p>
			<view class="right">
				<p>
					<uni-icons type="star"></uni-icons>
				</p>
				<p>收藏</p>
			</view>
		</view>
		<!-- 购物车 -->
		<view class="bto">
			<uni-goods-nav :options="data.options" :fill="true" :button-group="data.buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		<!-- 图文详情 -->
		<p class="red">图文详情</p>
		<p v-html="list.goods_introduce"></p>


	</view>
</template>

<script lang="ts" setup>
	import http from '../request/http.js'
	import {
		useRoute
	} from 'vue-router'
	import {
		ref,
		reactive
	} from 'vue'
	const list = ref([])
	// 获取id
	let route = useRoute()
	console.log(route.query.id);
	http(`/goods/detail?goods_id=${route.query.id}`).then(res => {
		console.log(res.message);
		list.value = res.message
	})
	// 点击购物车
	// const onClick(e) => {
	// 	uni.showToast({
	// 		title: `点击${e.content.text}`,
	// 		icon: 'none'
	// 	})
	// }
	// const buttonClick(e) => {
	// 	console.log(e)
	// 	// this.options[2].info++
	// }
	// 购物车
	const data = reactive({
		options: [{
			icon: 'chat',
			text: '客服'
		}, {
			icon: 'shop',
			text: '店铺',
			info: 2,
			infoBackgroundColor: '#007aff',
			infoColor: "#f5f5f5"
		}, {
			icon: 'cart',
			text: '购物车',
			info: 2
		}],
		buttonGroup: [{
				text: '加入购物车',
				backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
				color: '#fff'
			},
			{
				text: '立即购买',
				backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
				color: '#fff'
			}
		],
	})
</script>

<style lang="scss">
	.bto {
		width: 100%;
		height: 120rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.cen {
		padding: 10rpx;
		width: 100%;
		height: 90rpx;
		margin-top: 20rpx;
		border-bottom: 2rpx solid gray;
		border-top: 2rpx solid gray;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10rpx;

		p:first-child {
			width: 90%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.right {
			text-align: center;
			border-left: 1rpx solid #333;
			padding: 8rpx;
		}
	}

	.red {
		margin: 15rpx;
		color: red;
		font-weight: 600;
	}

	.im {
		width: 100%;
		height: 550rpx;

		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
