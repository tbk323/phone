<template>
	<view>
		<view class="top">
			<h2>水所拿着花</h2>
			<p><img :src="list.userImage" alt="">{{list.nickName}} .<span>{{list.updateDate}}</span></p>
			<p v-html="list.htmlContent"></p>
		</view>
		<!-- 下面部分 -->
		<div class="cen">
			<span></span>
			<h3>一个回答</h3>
		</div>
		<div class="txt" v-for="i,index in txtlist" :key="i.id">
			<img :src="i.userImage" alt="">
			<div class="txt-one">
				<p>{{i.nickName}} <span>1999年</span></p>
				<p v-html="i.mdContent"></p>
				<p v-html="i.htmlContent"></p>
			</div>
		</div>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	import http from '../../common/js/request.js'
	export default {
		setup() {
			const data=reactive({
				list:[],
				txtlist:[]
			})
			// 情球接口
			const getlist=()=>{
				http.get('/question/api/question/10').then(res=>{
					// console.log(res.data.data);
					data.list=res.data.data
				})
			}
			getlist()
			// 请求回答接口 
			const getak=()=>{
				http.get('/question/api/reply/list/10').then(res=>{
					// console.log(res.data.data);
					data.txtlist=res.data.data
				})
			}
			getak()
			return {
				...toRefs(data)
			};
		}
	}
</script>

<style lang="scss">
	.txt{
		width: 100%;
		margin-top: 10px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
		img{
			width: 35px;
			height:35px;
			margin-right: 10px;
			border-radius: 50px;
		}
		.txt-one{
			flex: 1;
			width: 100%;
			height: 80px;
			p:nth-child(1){
				color: gray;
				font-size: 14px;
				span{
					margin-left: 220px;
				}
			}
		}
	}
	.cen{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid gray;
		padding: 10px;
		align-items: center;
		display: flex;
		h3{
			flex: 1;
		}
		span{
			width: 20px;
			height: 20px;
			display: inline-block;
			border-left: 2px solid darkblue;
		}
	}
.top{
	width: 100%;
	border-bottom: #eee solid 15px;
	background-color: #fff;
	padding: 10px;
	p{
		margin: 10px;
	}
	img{
		width: 35px;
		height:35px;
		border-radius: 50px;
	}
}
</style>
