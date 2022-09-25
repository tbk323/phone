<template>
	<view>

		<div class="inp">
			<uni-topinput></uni-topinput>
		</div>
		<!-- 导航栏 -->
		<view class="nav">
			<scroll-view scroll-x="true" :show-scrollbar="false">
				<ul class="gun">
					<li @click="all(0)" :class="{gl:readId==0}">推荐</li>
					<li v-for="i,index in navlist" :key="i.id" :class="{gl:i.id==readId}" @tap="tabcar(i.id)">{{i.name}}
					</li>
				</ul>
			</scroll-view>
		</view>
		<!-- 内容 -->
		<div class="boxx">
			<view class="box" v-for="i,index in readlist" :key="i.id" @click="details">
				<div class="left">
					<p>{{i.title}}</p>
					<p class="smll">{{i.summary}}</p>
					<p>{{i.nickName}}：<span>{{i.updateDate}}</span></p>
				</div>
				<div class="right" v-if="i.imageUrl">
					<img :src="i.imageUrl" alt="">
				</div>
			</view>
		</div>
	</view>
</template>

<script>
	import http from '../../common/js/request.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data = reactive({
				navlist: [],
				readlist: [],
				readId:0
			})
			// 跳转详情
			const details=()=>{
				uni.navigateTo({
					url:'./../reading-details/reading-details'
				})
			}
			// 切换
			const all=(i)=>{
				data.readId=i
				getread()
			}
			const tabcar=(id)=>{
				console.log(id);
				data.readId=id
				getread()
			}
			// 获取导航栏
			const getnav = () => {
				http.get('/article/api/category/label/list').then(res => {
					// console.log(res.data.data);
					data.navlist = res.data.data
				})
			}
			getnav()
			// 获取阅读内容
			const getread = () => {
				http.post('/article/api/article/search',{current:1,size:10,id:data.readId}).then(res => {
					// console.log(res.data.data.records);
					data.readlist = res.data.data.records
				})
			}
			getread()
			return {
				tabcar,
				all,
				details,
				...toRefs(data)
			};
		}
	}
</script>

<style lang="scss">
	.gun {
		display: flex;
		width: 90vh;
	}

	// 内容/
	.boxx {
		width: 100%;
		margin-top: 120px;
	}

	.box {
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #eee;
		display: flex;
		justify-content: space-around;
		padding: 20px;

		.left {
			flex: 7;
			width: 60%;

			p:first-child {
				font-weight: 700;
				font-size: 19px;
			}

			.smll {
				font-size: 14px;
				color: gray;
				margin-bottom: 25px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			span {
				font-size: 14px;
				color: gray;
			}
		}

		.right {
			margin-left: 10px;
			margin-right: 30px;
			flex: 3;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	// 导航栏/
	.nav {
		width: 100%;
		height: 60px;
		background-color: #fff;
		position: fixed;
		top: 50px;
		left: 0;

		ul {
			margin-left: -25px;
			justify-content: space-around;
			display: flex;
			align-items: center;

			li {
				text-align: center;
				// flex: 65%;
				width: 50%;
				height: 50px;
				line-height: 50px;
			}
		}
	}

	.gl {
		color: #007aff;
		border-bottom: #007aff solid 4px;
		font-size: 17px;
	}

	li {
		list-style: none;
	}
</style>
