<template>
	<view>
		<view class="buy" style="padding: 10px;">
			<p>商品信息</p>
			<hot-list :boxlist="buylist"></hot-list>
		</view>
		<view class="pay">
			<p>支付方式</p>
			<p>支付宝</p>
			<p>微信支付</p>
			<p>商品金额 <span>￥{{buylist[0].priceOriginal}}</span></p>
			<p>优惠价 <span>￥{{buylist[0].priceOriginal}}</span></p>
		</view>
		<view class="bto">
			<p>实付金额：<span>{{buylist[0].priceOriginal}}</span></p>
			<p><button size="mini">立即支付</button></p>
		</view>
	</view>
</template>

<script>
	import http from '../../common/js/request.js'
	import {reactive,toRefs} from 'vue'
	import { useRoute } from 'vue-router'
	import {computed} from 'vue'
	export default {
		setup() {
			const route = useRoute()
			// const it=JSON.parse(route.query.it)
			const data=reactive({
				buylist:JSON.parse(route.query.it),
			})
			console.log(data.buylist);
			return {
				...toRefs(data)
			};
		}
		// computed: {
		// 	pay() {
		// 		let sub=0
		// 		data.buylist.forEach(item=>{
		// 			sub+=item.priceOriginal
		// 		})
		// 		return sub
		// 	}
		// },
	}
</script>

<style lang="scss">
	.bto{
		padding: 10px;
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		p{
			span{
				color: red;
				font-size: 18px;
			}
			button{
				margin-right: 20px;
				background-color: #345dc2;
				color: #eee;
				border-radius: 20px;
			}
		}
	}
.pay{
	width: 100%;
	padding: 10px;
	p{
		margin: 20px;
		border-bottom: 1px solid #eee;
		display: flex;
		justify-content: space-between;
		span{
			margin-right: 10px;
		}
	}
}
</style>
