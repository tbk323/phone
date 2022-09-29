<template>
		<view >
		<div class="inp">
			<u-button>搜索</u-button>
		</div>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="i,index in data.banlist" :key="i.id">
					<img :src="i.image_src" alt="">
				</swiper-item>
			</swiper>
		</view>
		<div class="cen">
			<ul>
				<li v-for="i,index in data.imglist" :key="i.id">
					<img :src="i.image_src" alt="">
				</li>
			</ul>
		</div>
		</view>	
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import http from '../request/http.js'
const data=reactive({
		banlist:[],
		imglist:[]
	})
	// 轮播图
	const getban=()=>{
		http('/home/swiperdata').then(res=>{
			// console.log(res.message);
			data.banlist=res.message
		})
	}
	getban()
	// 中间模块
	const getcen=()=>{
		http('/home/catitems').then(res=>{
			console.log(res.message);
			data.imglist=res.message
		})
	}
	getcen()
</script>

<style lang="scss">
	.cen{
		width: 95%;
		height: 180rpx;
		margin-top: 80px;
		ul{
			display: flex;
			justify-content: space-around;
			align-items: center;
			li{
				padding: 10rpx;
				list-style: none;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.banner{
		width: 100%;
		height: 160rpx;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.inp{
		width: 100%;
		height: 100rpx;
		background-color:red;
		padding: 10rpx;
		u-button{
			width: 90%;
			// height: 20rpx;
			background-color: skyblue;
		}
	}
</style>
