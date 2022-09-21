<template>
	<view class="login">
		<view class="top">
			<!-- inp -->
			<uni-topinput></uni-topinput>
			<!-- banner -->
			<banner></banner>
		</view>
		<!-- 中间模块 -->
		<view class="cen">
			<ul>
				<li v-for="i,index in cenlist" :key="index">{{i.name}}</li>
				<li>全部分类</li>
			</ul>
		</view>
		<!-- 热门推荐 -->
		<view class="hot">
			<p>热门推荐<span class="redcon">HOT</span></p>
			<span>全部></span>
		</view>
		<hot-list :boxlist="boxlist"></hot-list>
		<!-- 近期上新 -->
		<view class="boxx">
			<view class="hot">
				<p>近期上新<span class="redcon">NEW</span></p>
				<span>全部></span>
			</view>
			<div class="new">
				<scroll-view scroll-x="true" :show-scrollbar="false">
					<div style="display: flex;">
						<div class="new-one" v-for="i,index in boxlist" :key="i.id">
							<img :src="i.mainImage" alt="">
							<p>{{i.title}}</p>
							<p><span class="money"><img src="../../static/images/mine.png" alt="" ></span>{{i.nickName}}</p>
							<p>
							<span class="orange">
							<span class="money"><img src="../../static/images/money.png" alt="" ></span>{{i.priceDiscount}}</span>
							<span><span class="money"><img src="../../static/images/video.png" alt="" ></span>{{i.commTotal}}人在学</span> 
							</p>
						</div>
					</div>
				</scroll-view>
			</div>
		</view>
	<!-- 免费精选 -->
	<div class="boxx">
		<view class="hot">
			<p>免费精选<span class="redcon">FREE</span></p>
			<span>全部></span>
		</view>
		<hot-list :boxlist="boxlist"></hot-list>
	</div>
	<!-- 付费精品 -->
	<div class="boxx">
		<view class="hot">
			<p>付费精品<span class="redcon">NICE</span></p>
			<span>全部></span>
		</view>
		<hot-list :boxlist="boxlist"></hot-list>
	</div>
	</view>
</template>

<script>
	import  http from '../../common/js/request.js'
	import {ref,reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data=reactive({
				cenlist:[],
				boxlist:[],
			})
			// 请求模块接口
			const getcen = ()=> {
				http.get('article/api/category/label/list').then(res=>{
					data.cenlist=res.data.data.slice(0,7)
				})
			}
			getcen()
			// 请求热门接口
			const getbox = ()=> {
				http.post('/course/api/course/search ',{sort: "hot", current: 1, size: 10}).then(res=>{
					data.boxlist=res.data.data.records
				})
			}
			getbox()
			return {
				// 内容
				...toRefs(data),
			};
		},
		
	}
</script>

<style lang="scss">
	.hot{
		.redcon{
			margin-left: 7px;
			padding-left: 10px;
			display: inline-block;
			width: 10px;
			height: 20px;
			color: white;
			background-color: red;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
		}
		margin-top: 20px;
		margin-left: 10px;
		width: 100%;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		p{
			margin-left: 15px;
			font-size: 20px;
		}
		span{
			padding-right:35px;
			font-size: 13px;
			color: gray;
		}
	}
	.new{
		width: 100%;
		height: 180px;
		.new-one{
			.money{
				display: inline-block;
				width: 15px;
				height:15px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			border-radius: 10px;
			margin: 5px;
			padding: 10px;
			width: 180px;
			background-color: #fff;
			height: 170px;
			p:nth-child(1){
				font-weight: 700;
			}
			p:nth-child(2){
				font-size: 14px;
			}
			p{
				span{
					font-size: 14px;
				}
				.orange{
					font-size: 16px;
					color: orange;
					margin-right: 10px;
				}
			}
		}
		img{
			width: 150px;
			height: 70px;
		}
	}
	.login{
		width: 100%;
		height: 1080px;
	}
	.cen{
		width: 100%;
		height: 120px;
		margin-top: 20rpx;
		ul{
			margin-left: -45px;
			width: 100%;
			height: 120px;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			align-items: center;
		}
		li{
			border-radius:20rpx ;
			box-sizing: border-box;
			// flex: 17%;
			width: 20%;
			height: 80rpx;
			list-style: none;
			background-color: #eee;
			margin-left: 10px;
			text-align: center;
			line-height: 40px;
		}
	}
.top{
	width: 100%;
	background-color: #0071b6;
	height: 210px;
	padding: 10px;
}
</style>
