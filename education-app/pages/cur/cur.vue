<template>
	<view>
		<div class="box">
			<!-- 左侧侧边栏、 -->
			<view class="left">
				<ul>
					<li v-for="i,index in leftlist" :key="i.id">
						<span @tap="tabcur(i,index)" :class="{gl:curid==i.id}">{{i.name}}</span>
					</li>
				</ul>
			</view>
			<!-- 右侧侧边栏 -->
			<view class="right">
				<ul>
					<li v-for="i,index in toplist" :key="i.id">{{i.name}}</li>
				</ul>
			</view>
		</div>
	</view>
</template>

<script>
	import http from '../../common/js/request.js'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				curid: 1,
				leftlist: [],
				toplist: []
			})
			const getleft=()=>{
				http.get('/article/api/category/label/list').then(res => {
					data.leftlist = res.data.data
					data.toplist = res.data.data[data.curid-1].labelList
				})
			}
			 getleft()
			// 高亮
			const tabcur = (item, index) => {
				data.curid = item.id
				data.toplist=item.labelList
			}
			return {
				...toRefs(data),
				tabcur,
			};
		}
	}
</script>

<style lang="scss">
	.gl {
		color: #345dc2;
		font-weight: 700;
		font-size: 18px;
	}

	li {
		list-style: none;
	}

	.box {
		width: 100%;
		display: flex;
		justify-content: space-between;
		height: 1080px;

		.left {
			flex: 3;
			align-items: center;

			ul {
				height: 100%;
				box-sizing: border-box;
				background-color: #f8f9fb;
				padding: 10px;

				li {
					width: 100%;
					height: 60px;
					text-align: center;
					color: gray;
				}
			}
		}

		.right {
			flex: 7;

			ul {
				margin-left: -40px;
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				li {
					// flex: 30%;
					width: 35%;
					height: 40px;
					text-align: center;
					line-height: 40px;
					background-color: #eee;
					margin: 10px;
					border-radius: 25px;
				}
			}
		}
	}
</style>
