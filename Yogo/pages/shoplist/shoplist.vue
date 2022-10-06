<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="im">
			<swiper-item v-for="i,index in data.list.pics" :key="index">
				<img :src="i.pics_big" alt="">
			</swiper-item>
		</swiper>
		<p class="red">￥{{data.list.goods_price}}</p>
		<!-- 中间 -->
		<view class="cen">
			<p>{{data.list.goods_name}}</p>
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
		<p v-html="data.list.goods_introduce"></p>


	</view>
</template>

<script lang="ts" setup>
	import http from '../request/http.js'
	import {
		useRoute
	} from 'vue-router'
	import {
		reactive
	} from 'vue'
	const data = reactive({
		list: [],
		shoplist: [],
		// shop:[],
		options: [{
			icon: 'chat',
			text: '客服'
		}, {
			icon: 'shop',
			text: '店铺',
			info: 0,
			infoBackgroundColor: '#007aff',
			infoColor: "#f5f5f5"
		}, {
			icon: 'cart',
			text: '购物车',
			info: 0
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
		customButtonGroup: [{
				text: '加入购物车',
				backgroundColor: 'linear-gradient(90deg, #1E83FF, #0053B8)',
				color: '#fff'
			},
			{
				text: '立即购买',
				backgroundColor: 'linear-gradient(90deg, #60F3FF, #088FEB)',
				color: '#fff'
			}
		],
		customButtonGroup1: [{
			text: '立即购买',
			backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
			color: '#fff'
		}]
	})
	// 获取id
	let route = useRoute()
	console.log(route.query.id);
	http(`/goods/detail?goods_id=${route.query.id}`).then(res => {
		data.list = res.message
	})
	// 点击购物车
	const onClick = (e) => {
		if (e.index == 2) {
			uni.switchTab({
				url: '/pages/car/car'
			})
		}
		// uni.showToast({
		// 	title: `点击${e.content.text}`,
		// 	icon: 'none'
		// })
	}
	const buttonClick = (e) => {
		if(e.index==0){
			data.shoplist=JSON.parse(localStorage.getItem('info'))?JSON.parse(localStorage.getItem('info')):[]
			let fin=data.shoplist.find(item=>item.goods_id==route.query.id)
			if(fin){
				fin.num++
				uni.showToast({
						title: `已有该商品，商品+1`,
						icon: 'none'
					})
			}else{
				data.shoplist.push({
					...data.list,
					num:1,
					flag:false
				})
				uni.showToast({
						title: `已添加`,
						icon: 'none'
					})
			}
			console.log(data.shoplist)
			localStorage.setItem('info',JSON.stringify(data.shoplist))
		}else{
			console.log('购买');
		}
	}
	// 购物车
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
