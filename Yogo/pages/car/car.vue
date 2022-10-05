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
	<div class="im">
		<image src="../../static/yogo小人儿.png" mode=""></image>
	</div>
	
	<!-- 下面导航栏 -->
	<view class="bto">
		<p><checkbox value="cb" :checked="data.ckall" />全选</p>
			<div class="right">
				<span>
					<p>合计：<span>￥0</span></p>
					<p>包含运费</p>
				</span>
				<span class="buy">结算(0)</span>
		</div>
	</view>
	</view>
</template>

<script lang="ts" setup>
	import http from '../request/http.js'
	import {reactive} from 'vue'
	const data=reactive({
		ckall:false,
	})
</script>

<style lang="scss">
	.bto{
		position: fixed;
		bottom: 50px;
		left: 0;
		padding-left: 10rpx;
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid red;
		.right{
			display: flex;
			justify-content: space-between;
			align-items: center;
			p:first-child{
				margin-right: 10rpx;
				span{
					color: red;
					font-size: 18px;
					font-weight: 600;
				}
			}
			.buy{
					color: white;
					height: 90rpx;
					background-color: red;
					font-size: 18px;
					font-weight: 600;
					line-height: 80rpx;
					padding: 10rpx;
					box-sizing: border-box;
			}
		}
	}
	.im{
		width: 100%;
		height: 550rpx;
		text-align: center;
		image{
			width: 100%;
			height: 100%;
		}
	}
.cen{
	width: 100%;
	height: 90rpx;
	border-top: 1px solid red;
	border-bottom: 1px solid red;
	line-height: 90rpx;
	padding-left: 20rpx;
	p{
		font-size: 20px;
		color: red;
	}
}
.top{
	width: 100%;
	height: 90rpx;
	margin: 15rpx;
	text-align: center;
	button{
		width: 60%;
		border: green solid 1rpx;
		color: green;
	}
}
</style>
