<template>
	<view>
		<div class="top">
			<search-inp></search-inp>
		</div>
		<!-- 导航栏 -->
		<view class="nav">
			<ul>
				<li
					v-for="(i, index) in navlist"
					:key="index"
					:class="{ gl: navId == index }"
					@tap="tabgl(index)"
				>
					{{ i }}
				</li>
			</ul>
		</view>
		<!-- 下拉 -->
		<view class="select">
			<ul>
				<li v-for="(i, index) in 3">123</li>
			</ul>
		</view>

		<!-- 课程 -->
		<div class="boxx" v-if="navId==0">
			<hot-list :boxlist="boxlist" ></hot-list>
		</div>
		<!-- 文章 -->
		<div class="boxx" v-else-if="navId==1">
			<read-list :readlist="readlist" ></read-list>
		</div>
		<!-- 问答 -->
		<div class="boxx" v-else>
			<ask-list :asklist="asklist"></ask-list> 
		</div>
	</view>
</template>

<script>
	import http from '@/common/js/request.js';
	import { reactive, toRefs } from 'vue';

	export default {
		setup() {
			const data = reactive({
				navlist: ['课程', '文章', '问答'],
				navId: 0,
				boxlist: [],
				readlist: [],
				asklist: [],
			});
			// 点击高亮
			const tabgl = (index) => {
				console.log(index);
				data.navId = index;
				if (data.navId == 0) {
					getbox();
				} else if (data.navId == 1) {
					getread();
				} else {
					getask()
				}
			};
			// 获取数据
			const getbox = () => {
				http.post('/course/api/course/search').then((res) => {
					// console.log(res.data.data.records);
					data.boxlist = res.data.data.records;
				});
			};
			getbox();
			// 获取文章
			const getread = () => {
				http.post('/article/api/article/search',{current:1,size:10,id:data.readId}).then(res => {
					// console.log(res.data.data.records);
					data.readlist = res.data.data.records
				})
			}
			// getread()

			// 问答
			const getask=()=>{
				http.post('question/api/question/hot').then(res=>{
					// console.log(res.data.data.records);
					data.asklist=res.data.data.records
				})
				}
			// getask()
			
			return {
				tabgl,
				...toRefs(data),
			}
		},
	};
</script>

<style lang="scss">
	.boxx {
		width: 100%;
		margin-top: 60px;
	}
	.select {
		position: fixed;
		top: 120px;
		width: 100%;
		height: 40px;
		line-height: 30px;
		background-color: green;
		ul {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px;
		}
	}
	.gl {
		border-bottom: 3px solid #5ea9ff;
		color: #5ea9ff;
	}
	li {
		list-style: none;
	}
	.nav {
		width: 100%;
		line-height: 50px;
		height: 50px;
		margin-top: 60px;
		ul {
			display: flex;
			justify-content: space-around;
			// align-items: center;
		}
	}
</style>
