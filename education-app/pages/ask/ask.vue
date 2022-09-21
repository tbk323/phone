<template>
	<view>
		<!-- input -->
		<div class="inp">
			<uni-topinput></uni-topinput>
		</div>
		<!-- 导航栏 -->
		<view class="top">
			<ul>
				<li v-for="i,index in toplist" :key="index"
				:class="{gl:index==askId}" @tap="tz(index)"
				>{{i}}</li>
			</ul>
		</view>
		<!-- 内容 -->
		<div class="box" >
			<div class="box-one" v-for="i,index in hotlist" :key="i.id">
				<p>{{i.title}}</p>
				<p><span>{{i.reply}}回答</span><span>{{i.viewCount}}浏览</span>
					<span>{{i.nickName}}：{{i.createDate}}</span>
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
				askId:0,
				toplist:['热门回答','最新问题','等待回答'],
				hotlist:[]
			})
			// 方法
			const tz=(index)=>{
				data.askId=index
				if(data.askId==0){
					getaskhot()
				}else if(data.askId==1){
					getasknew()
				}else{
					getaskwait()
				}
			}
			// 获取热门
			const getaskhot=()=>{
				http.post('question/api/question/hot').then(res=>{
					// console.log(res.data.data.records);
					data.hotlist=res.data.data.records
				})
			}
			getaskhot()
			// 最新问题
			const getasknew=()=>{
				http.post('/question/api/question/new').then(res=>{
					// console.log(res.data.data.records);
					data.hotlist=res.data.data.records
				})
			}
			// getasknew()
			// 等待回答
			const getaskwait=()=>{
				http.post('/question/api/question/wait').then(res=>{
					// console.log(res.data.data.records);
					data.hotlist=res.data.data.records
				})
			}
			// getasknew()
			return {
				tz,
				...toRefs(data)
			};
		}
	}
</script>

<style lang="scss">
	.box-one{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #eee;
		margin-top: 20px;
		padding: 15px;
	}
	.box{
		margin-top: 20px;
		width: 100%;
		p:nth-child(1){
			font-weight: 700;
			font-size: 18px;
		}
		p:nth-child(2){
			font-size: 14px;
			color: gray;
			span:nth-child(3){
				float: right;
				margin-right: 60px;
			}
			span:nth-child(2){
				margin-left: 20px;
			}
		}
		
	}
	.top{
		width: 100%;
		height: 50px;
		background-color: #fff;
		position: fixed;
		top: 50px;
		left: 0;
		ul{
			margin-left: -25px;
			justify-content: space-around;
			display: flex;
			align-items: center;
			li{
				text-align: center;
				flex: 20%; 
				// border: 1px solid #007aff;
				height: 50px;
				line-height: 50px;
			}
		}
	}
	li{
		list-style: none;
	}
	.gl{
		color: #527aff;
		border-bottom: 1px solid #527aff;
	}
</style>
