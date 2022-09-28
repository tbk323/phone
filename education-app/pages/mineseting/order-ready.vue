<template>
	<view>
		<div class="box">
			<p>支付方式</p>
			<p>支付宝 <span>0</span></p>
			<p>微信支付 <span>0</span></p>
		</div>
		<div class="bto">
			<p>实付金额</p><span>￥{{price}}</span>
		</div>
		<div class="bt"><button>立即支付</button></div>
	</view>
</template>

<script>
	import {ref} from 'vue'
	import {useRoute} from 'vue-router'
	export default {
		setup() {
			const route=useRoute()
			console.log(route.query.price);
			const price=ref(route.query.price)
			return {
				price
			};
		}
	}
</script>

<style lang="scss">
	.bt{
		width: 100%;
		height: 60px;
		margin-top: 40px;
		button{
			margin: 10px;
			border-radius: 20px;
			background-color: #345dc2;
			color: #fff;
		}
	}
	.bto{
		border-radius: 20px;
		height: 30px;
		padding: 10px;
		width: 90%;
		height: 40px;
		margin: 10px;
		border: 1px solid #eee;
		box-shadow: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		span{
			color: red;
			font-size: 18px;
		}
	}
.box{
	border-radius: 20px;
	padding: 10px;
	width: 90%;
	margin: 10px;
	height: 120px;
	border: 1px solid #eee;
	box-shadow: 10px;
	p{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		width: 100%;
		// line-height: 60px;
		border-bottom: 1px solid #eee;
	}
	p:nth-child(3){
		border: 0;
	}
}
</style>
