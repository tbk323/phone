<template>
	<view>
		<div class="box">
			<div class="login">
				<span @tap="back">×</span>
				<p class="wel">欢迎回来！</p>
				<div class="b">
					<p>手机号码 <input type="text" placeholder="请输入手机号码" v-model="mobile"></p>
					<p>验证码 <input type="text" placeholder="请输入手机验证码" v-model="tempwd">
					<button size="mini" class="btn">获取验证码</button></p>
					<p><button style="background-color:#345dc2 ;color: white" @tap="login">登录</button></p>
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
				mobile:'',
				tempwd:'',
			})
			// 返回
			const back=()=>{
				uni.navigateBack({
					
				})
			}
			// 获取登录接口
			const getlogin=()=>{
				http.post('/auth/login',{code:"123456",mobile:data.mobile}).then(res=>{
					console.log(res.data.data.userInfo);
					// console.log(res.data.data.access_token);
					localStorage.setItem('token',res.data.data.access_token)
					localStorage.setItem('userInfo', JSON.stringify(res.data.data.userInfo))
				})
			}
			getlogin()
			// 登录
			const login=()=>{
				if(data.mobile.length!==11||data.tempwd!=='123456'){
					uni.showToast({
						icon:'error',
						title:'请填写完整',
						duration:2000
					})
				}else{
					getlogin()
					data.mobile='',
					data.tempwd='',
					uni.navigateBack({
						
					})
				}
			}
			return {
				...toRefs(data),
				back,
				login
			};
		}
	}
</script>

<style lang="scss">
	.btn{
		position: absolute;
		right: 10px;
		margin-top: -30px;
		background-color: #345dc2;
		color: #fff;
	}
.box{
	width: 100%;
	height: 100vh;
	background-color: #eee;
	padding: 10px;
	.login{
		margin-left: 10px;
		background-color: #fff;
		width: 90%;
		height: 600px;
		// margin: 10px auto;
		span{
			display: inline-block;
			color: gray;
			font-size: 20px;
			margin: 35px;
		}
		.wel{
			font-size: 30px;
			font-weight: 700;
			margin-left: 30px;
		}
		.b{
			position: relative;
			padding: 10px;
			width: 340px;
			height: 300px;
			margin: 80px auto;
			p:nth-child(1),p:nth-child(2){
				color: gray;
				padding: 5px;
				background-color: #f8f6fc;
				margin: 20px;
				width: 330px;
				height: 40px;
			}
		}
	}
}
</style>
