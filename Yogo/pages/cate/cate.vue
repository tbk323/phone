<template>
	<view>
		<!-- 顶部 -->
		<topinput></topinput>
		<!-- 大盒子 -->
		<div class="box">
			<!-- 左侧栏 -->
			<div class="left">
				<ul>
					<li v-for="i,index in data.leftlist" :key="i.cat_id"
					:class="{gl:i.cat_id==data.catid}"
					@tap="btn(i.cat_id,i.children)"
					>{{i.cat_name}}</li>
				</ul>
			</div>
			<!-- 右侧 -->
			<div class="right">
			<div v-for="i,index in data.rightlist" :key="index">
				<p>/{{i.cat_name}}/</p>
				<ul>
					<li v-for="child,ind in i.children">
						<img :src="child.cat_icon">
						<p>{{i.cat_name}}</p>
					</li>
				</ul>
			</div>
			</div>
		</div>
		
	</view>
</template>

<script lang="ts" setup>
	import {reactive} from 'vue';
	import http from '../request/http.js'
	const data=reactive({
		leftlist:[],
		catid:1,
		rightlist:[]
	})
	// 点击高亮
	const btn=(id,item)=>{
		console.log(item);
		data.catid=id
		data.rightlist=item
	}
	// 左侧侧边栏
	http('/categories').then(res=>{
		data.leftlist=res.message
		console.log(res.message);
	})
	
	
</script>

<style lang="scss">
	.gl{
		color: red;
	}
	.box{
		width: 100%;
		height: 100%;
		display: flex;
		.right{
			flex: 1;
			// height: 100%;
			overflow: hidden;
			p:first-child{
				text-align: center;
			}
			ul{
				width: 100%;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				li{
					flex: 25%;
					img{
						width: 150rpx;
						height: 150rpx;
					}
				}
			}
		}
		// 左侧栏
		.left{
			// width: 100%;
			ul{
				li{
					margin-top: 10rpx;
					width: 100%;
					height: 80rpx;
					line-height: 60rpx;
				}
			}
		}
	}
li{
	list-style: none;
}
</style>
