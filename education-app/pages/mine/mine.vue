<template>
	<view>
		<view class="top"></view>
		<div class="box">
			<!-- 登录成功 -->
			<div class="login" v-if="token" @tap="loginxq">
				<img :src="loginlist.imageUrl" alt="">
				<div>
					<span>{{loginlist.nickName}}</span>
					<p>用户名：{{loginlist.username}}</p>
				</div>
				<span class="triangle"></span>
			</div>
			<!-- 未登录 -->
			<div class="login" @tap="login" v-else>
				<img src="../../static/M.png" alt="">
				<span>请登录</span>
				<span class="triangle"></span>
			</div>
			
			<!-- 下面部分 -->
			<div class="login-one">
				<p>我的订单</p>
				<span class="triangle"></span>
			</div>
			<div class="login-one">
				<p>我的余额</p>
				<span class="triangle"></span>
			</div>
			<div class="login-one">
				<p>我的学习</p>
				<span class="triangle"></span>
			</div>
			<view class="cen"></view>
			<div class="login-one">
				<p>设置</p>
				<span class="triangle"></span>
			</div>
			<div class="login-one">
				<p>意见反馈</p>
				<span class="triangle"></span>
			</div>
			<div class="login-one">
				<p>关于我们</p>
				<span class="triangle"></span>
			</div>
		</div>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data=reactive({
				token:localStorage.getItem('token'),
				loginlist: []
			})
			data.loginlist = JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : []
			// 跳转
			const login=()=>{
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
			// 跳转用户详情
			const loginxq=()=>{
				uni.navigateTo({
					url:'../user-list/user-list'
				})
			}
			return {
				login,
				loginxq,
				...toRefs(data)
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
			font-weight: 700;
			font-size: 20px;
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
