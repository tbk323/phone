<template>
	<view>
		<div class="box">
			<!-- 搜索框 -->
			<view class="inp">
				<input type="text" placeholder="请输入您搜索的商品" v-model="data.soucon" @input="sou">
				<button size="mini" v-show="data.soucon" @tap="erro">取消</button>
			</view>
			<view class="con" v-for="i,index in data.conlist" :key="i.goods_id" @tap="shoplist(i.goods_id)">
				{{i.goods_name}}
			</view>
		</div>
	</view>
</template>

<script lang="ts" setup>
	import http from '../request/http.js'
	import {reactive} from 'vue'
	const data=reactive({
		soucon:'',
		conlist:[]
	})
	// 跳转
	const shoplist=(id)=>{
		uni.navigateTo({
			url:`/pages/shoplist/shoplist?id=${id}`
		})
		// console.log(id);
	}
	// 搜索
	const sou=()=>{
		getsou()
	}
	// 取消
	const erro=()=>{
		data.soucon=''
		data.conlist=[]
	}
	// 获取搜索接口
	const getsou=()=>{
		http(`/goods/qsearch?query=${data.soucon}`).then(res=>{
			// console.log(res.message);
			data.conlist=res.message
		})
	}
</script>

<style lang="scss">
	.con{
		padding: 10rpx;
		width: 97%;
		line-height: 80rpx;
		border-bottom:2rpx solid #aaa;
		background-color: #fff;
		margin: 10rpx;
		overflow: hidden;
		 white-space: nowrap;
		text-overflow: ellipsis;
	}
.box{
	width: 100%;
	height: 100vh;
	background-color: #eee;
	.inp{
		padding: 30rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		input{
			padding-left: 20rpx;
			width: 80%;
			height: 80rpx;
			background-color: #fff;
		}
	}
}
</style>
