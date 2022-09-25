<template>
	<view>
		<!-- 顶部 -->
		<view class="top">
			<h3>{{list.title}}</h3>
			<p><img :src="list.userImage" alt="">
			{{list.nickName}}. <span>{{list.createDate}}</span>. <span>{{list.viewCount}}人阅读</span></p>
			<p v-html="list.htmlContent"></p>
		</view>
		<!-- 中间线 -->
		<p class="fen"></p>
		<view class="cen">
			<h3>热门评论</h3>
		</view>
		<!-- 下面内容 -->
		<view class="bto" v-for="i,index in btolist" :key="i.id">
			<p><img :src="i.userImage" alt=""></p>
			<div class="right">
				<p><span>{{i.nickName}}</span> <span>{{i.createDate}}</span></p>
				<p>{{i.content}}</p>
			</div>
		</view>
		<!-- 下面提交 -->
		<div class="btn">
			<p><input type="text" placeholder="有何高见,展开讲讲"></p>
			<button size="mini">提交</button>
		</div>
	</view>
</template>

<script>
	import http from '../../common/js/request.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data=reactive({
				list:[],
				btolist:[]
			})
			// 获取上面内容
		const getbox=()=>{
			http.get('/article/api/article/10').then(res=>{
				// console.log(res.data.data);
				data.list=res.data.data
			})
		}
		getbox()
		// 获取下面内容
		const getbto=()=>{
			http.get('/article/api/comment/list/10').then(res=>{
				console.log(res.data.data);
				data.btolist=res.data.data
			})
		}
		getbto()
			return {
				...toRefs(data)
			};
		}
	}
</script>

<style lang="scss">
	.btn{
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 20px;
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		input{
			padding: 5px;
			width: 300px;
			height: 30px;
			border-radius: 10px;
			background-color: #f8f9fb;
		}
	}
	.bto{
		width: 100%;
		padding: 10px;
		display: flex;
		.right{
			flex: 1;
			margin-left: 20px;
			span{
				font-size: 14px;
				color: gray;
			}
			span:nth-child(2){
				float:right;
				margin-right: 40px;
			}
		}
		img{
			width: 20px;
			height: 20px;
			border-radius: 50px;
		}
	}
	.fen{
		width: 100%;
		height: 10px;
		background-color: #eee;
	}
	.cen{
		box-sizing: border-box;
		width: 100%;
		line-height: 25px;
		height: 25px;
		margin:20px 20px;
		border-left: 3px solid #345dc2;
		vertical-align: middle;
		h3{
			margin-left: 15px;
		}
	}
.top{
	width: 90%;
	padding: 20px;
	span{
		color: gray;
		font-size: 14px;
	}
	img{
		width: 20px;
		height: 20px;
		border-radius: 50px;
	}
}
</style>
