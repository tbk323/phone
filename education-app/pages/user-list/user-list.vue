<template>
	<view>
			<div class="box">
				<!-- 登录成功 -->
				<div class="login" >
					<span>头像</span>
					<img src="../../static/M.png" alt="">
					<span class="triangle"></span>
				</div>
				
				<!-- 下面部分 -->
				<div class="login-one">
					<p>用户名</p>
					<span class="triangle"></span>
				</div>
				<div class="login-one">
					<p>手机号</p>
					<span class="triangle"></span>
				</div>
				
				<view class="cen"></view>
				<div class="login-one">
					<p>昵称</p>
					<span class="triangle"></span>
				</div>
				<div class="login-one">
					<p>性别</p>
					<span class="triangle"></span>
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
.triangle{
		display: inline-block;
		width: 10px;
		height: 10px;
		border-top: 1px solid black;
		border-left: 1px solid black;
		transform: rotate(135deg);
	}
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
			font-size: 18px;
		}
		.triangle{
			right: 40px;
			position: absolute;
			color: gray;
			font-size: 23px;
		}
		img{
			margin-right: 10px;
			width: 70px;
			height: 70px;
			border-radius: 50px;
		}
		p{
			font-size: 14px;
			color: gray;
		}
	}
	.box{
		width: 100%;
		background-color: #fff;
		height: 580px;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
	}
</style>
