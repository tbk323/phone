<template>
	<view>
		<!-- 视频 -->
		<view class="top">
			<video :src="vedo" v-if="vedo"></video>
			<img :src="list.mainImage" alt="" v-else>
		</view>
		<!-- 文字 -->
		<div class="cen">
			<h3>{{list.title}}</h3>
			<p @tap="back">详情<span class="triangle"></span></p>
		</div>
		<!-- 下面部分 -->
		<div class="txt-box">
			<div class="txt" v-for="i,index in txtlist" :key="i.id">
				<h3>{{i.name}}</h3>
				<p v-for="child,ind in i.sectionList" :key="child.id" @tap="vedos(child.videoUrl)"> 
				<span class="black"><span class="triangle"></span></span>
				 {{child.name}}
				 </p>
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
				list:[],
				txtlist:[],
				vedo:''
			})
			// 跳转详情
			const back=()=>{
				uni.navigateTo({
					url:'../details/details'
				})
			}
			// 点击视频
			const vedos=(videoUrl)=>{
				console.log(videoUrl);
				data.vedo=videoUrl
			}
			// 获取接口
			const getlist=()=>{
				http.get('/course/api/course/null').then(res=>{
					data.list=res.data.data
					console.log(data.list);
				})
			}
			getlist()
			// 获取文字接口 
			const gettxt=()=>{
				http.get('/course/course/buy/list/null').then(res=>{
					data.txtlist=res.data.data
					// console.log(res.data.data);
				})
			}
			gettxt()
			return {
				vedos,
				back,
				...toRefs(data)
			};
		}
	}
</script>

<style lang="scss">
	.txt-box{
		width: 100%;
		padding: 10px;
		p{
			margin: 20px;
			border-bottom: 1px solid #eee;
		}
	}
	.cen{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #eee;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 15px;
	}
.top{
	padding: 5px;
	border-bottom: 1px solid #eee;
	width: 100%;
	height: 250px;
	video{
		width: 100%;
		height: 100%;
	}
	img{
		width: 100%;
		height: 100%;
	}
}
.triangle{
	display: inline-block;
	width: 10px;
	height: 10px;
	border-top: 2px solid #333;
	border-left: 2px solid #333;
	transform: rotate(135deg);
}
.black{
	color: white;
		text-align: center;
		line-height: 20px;
		display: inline-block;
		background-color: #333;
		width: 20px;
		height: 20px;
		border-radius: 50px;
		.triangle{
			display: inline-block;
			width: 5px;
			height: 5px;
			border-top: 2px solid #fff;
			border-left: 2px solid #fff;
			transform: rotate(135deg);
		}
	}
</style>
