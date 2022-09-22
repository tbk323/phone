<template>
	<view>
		<div class="boxx">
			<view class="box" v-for="i,index in readlist" :key="i.id">
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
	export default {
		props: ['readlist'],
		// name:"read-list",
		setup() {
			return {

			};
		}
	}
</script>

<style lang="scss">
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
</style>
