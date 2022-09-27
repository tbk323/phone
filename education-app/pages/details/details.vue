<template>
	<view class="deatlist">
		<!-- 顶部 -->
		<div class="top">
			<span class="black" @tap="back">
				<span class="triangle"></span>
			</span>
			<img :src="detalist.mainImage" alt="">
		</div>
		<!-- 中间 -->
		<div class="cen">
			<p><span class="red">￥254.18 </span><span  class="gray">￥{{detalist.priceDiscount}}</span> <span class="he">优惠价</span></p>
			<h3>{{detalist.title}}</h3>
			<p><span class="gray">{{detalist.goodRate}}好评</span> <span  class="gray">{{detalist.studyTotal}}人在学</span></p>
		</div>
		<!-- tab栏 -->
		<view class="tab">
			<ul>
				<li v-for="i,index in tab" :key="index" :class="{gl:index==curindex}" @tap="active(index)">{{i}}</li>
			</ul>
		</view>
		<!-- 详情-->
		<view class="bto" v-if="curindex==0">
			<p><img :src="imglist" alt=""></p>
		</view>
		<!--  章节 -->
		<view class="txt-box" v-else-if="curindex==1" >
			<view class="txt" v-for="i,index in textlist" :key="i.id">
				<h3>{{i.name}}</h3>
				<p v-for="child,ind in i.sectionList" :key="child.id">
					<span class="black-one" @tap="back">
						<span class="triangle-one"></span>
					</span>
					{{child.name}}
					</p>
			</view>
		</view>
		<!-- 评论 -->
		<div class="talk-one" v-else-if="curindex==2">
			<view class="talk" v-for="i,index in talklist" :key="i.id" >
				<div class="im">
					<img :src="i.userImage" alt="">
					<span>
					<p>{{i.nickName}}</p>
					<p>{{i.createDate}}年</p>
					</span>
				</div>
				<p>{{i.content}}</p>
				<!-- <p v-for="chid,inx in i.children" :key="inx"> -->
					<span class="teach">讲师回复：</span>
				<!-- </p> -->
			</view>
		</div>
		<!-- 套餐 -->
		<div v-else>
			<view class="Package" v-for="i,index in packlist" :key="i.id">
				<p>{{i.title}}</p>
				<hot-list :boxlist="i.list"></hot-list> 
				<p class="red">￥{{i.totalPrice}} <span>￥{{i.groupPrice}}</span><span @tap="buy(i.list)">购买套餐</span></p>
			</view>
		</div>
		<div class="look">
			<button @tap="look">立即观看</button>
		</div>
	</view>
</template>

<script>
	import http from '../../common/js/request.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data=reactive({
				tab:['详情','章节','评论','套餐'],
				curindex:0,
				detalist:'',
				imglist:'',
				textlist:[],
				talklist:[],
				packlist:[],
				// packone:[]
			})
			// 购买
			const buy=(item)=>{;
				let it=JSON.stringify(item)
				uni.navigateTo({
					url:`../buylist/buylist?it=${it}`
				})
			}
			// 立即观看
			const look=()=>{
				uni.navigateTo({
					url:'../look-now/look-now'
				})
			}
			// 高亮
			const active=(index)=>{
				data.curindex=index
			}
			// 返回
			const back=()=>{
				
				uni.switchTab({
					url:'../index/index'
				})
			}
			// 获取详情接口
			const getdeta=()=>{
				http.get('/course/api/course/null').then(res=>{
					// console.log(res.data.data);
					data.detalist=res.data.data
					data.imglist=data.detalist.detailUrls[0]
				})
			}
			getdeta()
			// 获取章节接口
			const gettext=()=>{
				http.get('/course/api/chapter/section/list/null').then(res=>{
					data.textlist=res.data.data
					// console.log(res.data.data);
				})
			}
			gettext()
			// 获取评论接口 
			const gettalk=()=>{
				http.get('/course/api/comment/list/null').then(res=>{
					data.talklist=res.data.data
					// console.log(res.data.data);
				})
			}
			gettalk()
			// 获取套餐接口
			const getpack=()=>{
				http.get('/course/api/group/list/null').then(res=>{
					data.packlist=res.data.data
					// data.packone=res.data.data.list
					// console.log(res.data.data);
				})
			}
			getpack()
			return {
				active,
				back,
				look,
				buy,
				...toRefs(data)
			};
		}
	}
</script>

<style lang="scss">
	.deatlist{
		width: 100%;
		height:1800px;
	}
	.look{
		padding: 10px;
		position: fixed;
		left: 0;
		bottom: 0;
		line-height: 60px;
		width: 100%;
		height: 60px;
		background-color: #fff;
		button{
			width: 90%;
			background-color: #345dc2;
			color: #fff;
			border-radius: 15px;
		}
	}
	.red{
		color: red;
		font-weight: 700;
		span:first-child{
			color: gray;
			font-size: 16px;
		}
		span:last-child{
			margin-left: 100px;
		}
	}
	.Package{
		margin: 10px;
		border: 1px solid gray;
		border-radius: 20px;
		width: 90%;
		padding: 10px;
		p{
			font-size: 20px;
			
		}
	}
	.talk{
		width: 100%;
		height: 120px;
		border-bottom: 1px solid gray;
		padding: 20px;
		.teach{
			display: inline-block;
			width: 350px;
			height: 30px;
			background-color: #eee;
			padding: 10px;
		}
		.im{
			width: 100%;
			display: flex;
			// height: 40px;
			margin-bottom: 10px;
			p:nth-child(1){
				margin-left: 10px;
				font-weight: 700;
			}
			p:nth-child(2){
				margin-left: 10px;
				color: gray;
				font-size: 14px;
			}
		}
			img{
				width: 40px;
				height: 40px;
				border-radius: 50px;
			}
	}
	.txt{
		width: 100%;
		padding: 10px;
		p{
			margin: 20px;
			border-bottom: 1px solid #eee;
		}
		.black-one{
			text-align: center;
			line-height: 20px;
			display: inline-block;
			background-color: #333;
			width: 20px;
			border-radius: 50px;
		}
		.triangle-one{
			margin-top: -8px;
			display: inline-block;
			width: 5px;
			height: 5px;
			border-top: 1px solid white;
			border-left: 1px solid white;
			transform: rotate(135deg);
			}
	}
	.bto{
		width: 100%;
		height: 100%;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.gl{
		color: #3093ff;
		border-bottom: 1px solid #3093ff;
	}
	.tab{
		width: 100%;
		height: 50px;
		li{
			list-style: none;
		}
		ul{
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-left: -20px;
		}
	}
	.he{
		color: red;
		text-align: center;
		display: inline-block;
		width: 60px;
		height: 20px;
		border: 1px solid red;
		border-radius: 30px;
	}
	.cen{
		width: 100%;
		height: 80px;
		padding: 10px;
		.red{
			font-size: 20px;
			font-weight: 700;
			color: red;
		}
		.gray{
			font-size: 16px;
			color: gray;
		}
	}
.top{
	width: 100%;
	height: 250px;
	background-color: green;
	padding: 10px;
	img{
		width: 95%;
		height: 100%;
	}
	.black{
		top: 20px;
		left: 20px;
		position: absolute;
		text-align: center;
		line-height: 30px;
		display: inline-block;
		background-color: #333;
		width: 30px;
		height: 30px;
		border-radius: 50px;
	}
	.triangle{
		display: inline-block;
		width: 10px;
		height: 10px;
		border-top: 2px solid white;
		border-left: 2px solid white;
		transform: rotate(-45deg);
		}
}
</style>
