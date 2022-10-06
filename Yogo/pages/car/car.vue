<template>
	<view>
		<div class="top">
			<button type="default">获取收货地址</button>
		</div>

		<!-- 中间 -->
		<view class="cen">
			<p>购物车</p>
		</view>
		<!-- 中间小人儿 -->
		<!-- <div class="im">
				<image src="../../static/yogo小人儿.png" mode=""></image>
			</div> -->
		<view>
			<view class="shop" v-for="i,index in list" :key="i.cat_id">
				<view class="chec">
					<label>
						<u-checkbox v-model="i.flag" @change="ck(i)" />
					</label>
				</view>
				<img :src="i.goods_big_logo" alt="">
				<view class="righ">
					<p>{{i.goods_name}}</p>
					<view class="bt">
						<span>￥{{i.goods_price}}</span>
						<span>
							<u-number-box v-model="i.num" :min='0'></u-number-box>
						</span>
					</view>
				</view>
			</view>
		</view>
		<!-- 下面导航栏 -->
		<view class="bto">
			<p>
				<u-checkbox @change="allck" v-model="ckall" />全选
			</p>
			<div class="right">
				<span>
					<p>合计：<span>￥{{price}}</span></p>
					<p>包含运费</p>
				</span>
				<span class="buy">结算({{numb}})</span>
			</div>
		</view>
	</view>
</template>

<script lang="ts">
	import http from '../request/http.js'
	import {
		reactive,
		toRefs,
		computed
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				ckall: false,
				list: []
			})
			data.list = JSON.parse(localStorage.getItem('info'))?JSON.parse(localStorage.getItem('info')):[]
			console.log(data.list);
			// 反选
			const ck = (i) => {
				i.flag = !i.flag
				console.log(i.flag);
				data.ckall = data.list.every(item => item.flag)
				console.log(data.ckall);
			}
			// 全选
			const allck = () => {
				data.ckall = !data.ckall
				// console.log(data.ckall);
				data.list.forEach(item => item.flag = data.ckall)
			}
			// 计算总数
			const numb = computed(()=>{
				let num=0
				data.list.forEach(item=>{
					if(item.flag==true){
						num+=item.num
					}else{
						return false
					}
				})
				return num
			})
			// 计算总价
			const price=computed(()=>{
				let num=0
				data.list.forEach(item=>{
					if(item.flag==true){
						num+=item.num*item.goods_price
					}
				})
				return num
			})
			return {
				...toRefs(data),
				ck,
				allck,
				numb,
				price
			}
		},
		onShow() {

		}
	}
</script>

<style lang="scss">
	.shop {
		width: 100%;
		height: 160rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid gray;
		padding: 20rpx;

		.bt {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}

		.chec {
			margin: 30rpx;
		}

		img {
			margin: 10rpx;
			width: 130rpx;
			height: 130rpx;
		}

		.righ {
			margin-left: 20rpx;
			flex: 1;

			p {
				overflow: hidden;

				text-overflow: ellipsis;

				display: -webkit-box;

				-webkit-line-clamp: 2;

				-webkit-box-orient: vertical;
			}

			.bt {
				span:first-child {
					color: red;
					font-size: 35rpx;
				}
			}
		}
	}

	.bto {
		position: fixed;
		bottom: 50px;
		left: 0;
		padding-left: 10rpx;
		width: 100%;
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid red;

		.right {
			display: flex;
			justify-content: space-between;
			align-items: center;

			p:first-child {
				margin-right: 10rpx;

				span {
					color: red;
					font-size: 18px;
					font-weight: 600;
				}
			}

			.buy {
				color: white;
				height: 120rpx;
				background-color: red;
				font-size: 18px;
				font-weight: 600;
				line-height: 120rpx;
				padding: 10rpx;
				box-sizing: border-box;
			}
		}
	}

	.im {
		width: 100%;
		height: 550rpx;
		text-align: center;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.cen {
		width: 100%;
		height: 90rpx;
		border-top: 1px solid red;
		border-bottom: 1px solid red;
		line-height: 90rpx;
		padding-left: 20rpx;

		p {
			font-size: 20px;
			color: red;
		}
	}

	.top {
		width: 100%;
		height: 90rpx;
		margin: 15rpx;
		text-align: center;

		button {
			width: 60%;
			border: green solid 1rpx;
			color: green;
		}
	}
</style>
