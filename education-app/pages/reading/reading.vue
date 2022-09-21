<template>
	<view>
		<!-- <li v-for="i,index in navlist" :key="i.id" :class="{gl:readId==i.id}" @tap="readId=i.id"> -->
		<div class="inp">
			<uni-topinput></uni-topinput>
		</div>
	</view>
</template>

<script>
	import http from '../../common/js/request.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data=reactive({
				navlist:[],
				readId:1
			})
			// 获取导航栏
			const getnav=()=>{
				http.get('/article/api/category/label/list').then(res=>{
					console.log(res.data.data);
					data.navlist=res.data.data
				})
			}
			getnav()
			return {
				...toRefs(data)
			};
		}
	}
</script>

<style lang="scss">
	.gl{
		color: #007aff;
		border-bottom: #007aff solid 1px;
		font-size: 17px;
	}
	li{
		list-style: none;
	}
.nav{
	width: 100%;
	height: 65px;
	background-color: #eee;
	position: fixed;
	top: 160px;
	left: 0;
	padding: 10px;
	ul{
		margin-left: -20px;
		width: 100%;
		display: flex;
		align-items: center;
		li{
			width: 10%;
			height: 65px;
			border: 1px solid red;
		}
	}
}
</style>
