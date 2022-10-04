<template>
		<view >
			<topinput></topinput>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="i,index in data.banlist" :key="i.id">
					<img :src="i.image_src" alt="">
				</swiper-item>
			</swiper>
		</view>
		<!-- 中间模块 -->
		<div class="cen">
			<ul>
				<li v-for="i,index in data.imglist" :key="i.id">
					<img :src="i.image_src" :alt="i.name">
				</li>
			</ul>
		</div>
		<!-- 布局图 -->
		<view class="home_florgoods">
		   <view class="" v-for="i,index in data.floorlist" :key="index">
		    <view class="">
		     <image class="home_florgoods_one" :src="i.floor_title.image_src" mode=""></image>
		    </view>
		    <view class="home_florgoods_flex">
		     <view class="">
		      <image class="home_florgoods_two" :src="i.product_list[0].image_src" mode=""></image>
		     </view>
		     <u-grid :col="2" class="home_florgoods_twos_views" :border="fasle">
		      <u-grid-item class="home_florgoods_twos_view" v-for="item,index in i.product_list">
		       <image class="home_florgoods_twos" :src="item.image_src" mode=""></image>
		      </u-grid-item>
		     </u-grid>
		    </view>
		   </view>
		  </view>
		</view>	
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import http from '../request/http.js'
const data=reactive({
		banlist:[],
		imglist:[],
		floorlist:[]
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
			// console.log(res.message);
			data.imglist=res.message
		})
	}
	getcen()
	// 楼层.
	const getfloor=()=>{
		http('/home/floordata').then(res=>{
			console.log(res.message);
			data.floorlist=res.message
		})
	}
	getfloor()
</script>

<style lang="scss">
	.home_florgoods_one {
	  width: 1000rpx;
	  height: 60rpx;
	 }
.home_florgoods_two {
	// margin-top: 20rpx;
  width: 300rpx;
  height: 500rpx;
 }

 .home_florgoods_twos {
  width: 220rpx;
  height: 220rpx;
 }

 .home_florgoods_twos_view:nth-of-type(1) {
  display: none;
 }

 .home_florgoods_flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 }

 .home_florgoods_twos_views {
  margin-top: -25rpx;
 }
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
