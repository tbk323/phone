<template>
	<view>
		<!-- 顶部输入框 -->
		<div class="top">
			<search-inp></search-inp>
		</div>
		<view class="hotsear">
			<p>热门搜索</p>
		</view>
		<view class="cen">
			<ul>
				<li v-for="i,index in list">{{i}}</li>
			</ul>
		</view>
		<!-- 历史搜索 -->
		<view class="bto">
			<p>历史搜索</p>
			<span>清空</span>
		</view>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data=reactive({
				list:['Java','Python','Vue.js','React','SpringBoot','SpringCloud']
			})
			return {
				...toRefs(data)
			};
		}
	}
</script>

<style lang="scss">
	.bto{
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		span{
			margin-right: 20px;
			color: gray;
			font-size: 14px;
		}
	}
	.cen{
		width: 100%;
		height: 120px;
		// background-color: green;
		ul{
			margin-left: -20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			li{
				color: gray;
				padding: 10px;
				// width: 15%;
				background-color: #fff;
				margin: 5px;
				border-radius: 10px;
				border: 1px solid gray;
			}
		}
	}
	.hotsear{
		margin-top: 60px;
		padding: 10px;
		font-size: 18px;
		font-weight: 700;
	}
.top{
	position: fixed;
	top: 0;
	left: 0;
}
li{ 
	list-style: none;
}
</style>
