<template>
	<view>
		<view class="top"></view>
		<div class="box">
			<div class="login">
				<img src="../../static/M.png" alt="">
				<span>请登录</span>
				<span class="rh">></span>
			</div>
			<div class="login-one">
				<p>我的订单</p>
				<span>></span>
			</div>
			<div class="login-one">
				<p>我的余额</p>
				<span>></span>
			</div>
			<div class="login-one">
				<p>我的学习</p>
				<span>></span>
			</div>
			<view class="cen"></view>
			<div class="login-one">
				<p>设置</p>
				<span>></span>
			</div>
			<div class="login-one">
				<p>意见反馈</p>
				<span>></span>
			</div>
			<div class="login-one">
				<p>关于我们</p>
				<span>></span>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.cen{
		width: 100%;
		height: 20px;
		background-color: #eee;
	}
	.login-one{
		box-sizing: border-box;
		padding: 20px;
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #eee;
		display: flex;
		// justify-content: space-between;
		align-items: center;
		span{
			right: 20px;
			position: absolute;
			font-weight: 700;
			font-size: 20px;
			color: gray;
		}
	}
	
	.login{
		position: relative;
		padding: 10px;
		width: 100%;
		height: 90px;
		border-bottom: 1px solid #eee;
		display: flex;
		// justify-content: space-between;
		align-items: center;
		span{
			font-weight: 700;
			font-size: 20px;
		}
		.rh{
			right: 40px;
			position: absolute;
			color: gray;
			font-size: 23px;
		}
	}
.top{
	width: 100%;
	height: 80px;
	background-color: #345dc2;
}
.box{
	width: 100%;
	background-color: #fff;
	height: 580px;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	margin-top: -25px;
}
</style>
