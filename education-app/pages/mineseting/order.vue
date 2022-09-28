<template>
	<view>
		<div class="box" v-for="i,index in list" :key="i.id">
			<p>{{i.createDate}} <span>订单号：{{i.orderId}}</span></p>
			<hot-list :boxlist="i.courseList"></hot-list>
			<div class="bto">
				<p>待支付</p>
				<div class="bto-one">
					实付：<span>￥{{i.priceDiscount}}</span>
					<p><button size="mini">取消订单</button>
					<button size="mini" style="background-color: red;color: white;"
					@click="order(i.priceDiscount)"
					>立即支付 </button></p>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import http from '../../common/js/request.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data=reactive({
				list:[]
			})
			const order=(price)=>{
				console.log(price);
				uni.navigateTo({
					url:`./order-ready?price=${price}`
				})
			}
			http.get('/pay/order/user/list').then(res=>{
				console.log(res.data.data);
				data.list=res.data.data
			})
			return {
				order,
				...toRefs(data)
			};
		}
	}
</script>

<style lang="scss">
	.bto{
		width: 97%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		p:nth-child(1){
			color: red;
		}
		span{
			font-size: 20px;
			color: red;
		}
		button{
			margin: 5px;
		}
	}
.box{
	width: 100%;
	padding: 10px;
	p:nth-child(1){
		font-size: 14px;
		span{
			margin-left: 20px;
		}
	}
}
</style>
