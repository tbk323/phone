<template>
	<view>
		<div class="boxx">
				<view class="box" v-for="i,index in boxlist" :key="i.id" @tap="buy">
					<div class="left">
						<img :src="i.mainImage" alt="">
					</div>
					<div class="right">
						<p>{{i.title}}</p>
						<p><span class="money"><img src="../../static/images/mine.png" alt="" ></span>{{i.nickName}}</p>
						<p>
						<span class="orange">
						<span class="money"><img src="../../static/images/money.png" alt="" ></span>{{i.priceDiscount}}</span>
						<span><span class="money"><img src="../../static/images/video.png" alt="" ></span>{{i.commTotal}}人在学</span> 
						</p>
					</div>
				</view>
		</div>
	</view>
</template>

<script>
	import {ref} from 'vue'
	export default {
		name:'hot-list',
		props:['boxlist'],
		setup() {
			const buy=()=>{
				uni.navigateTo({
					url:'/pages/details/details'
				})
			}
			return{
				buy
			}
		}
	}
</script>

<style lang="scss">
.boxx{
		padding-left: 10px;
		margin-top: 10px;
		width: 100%;
	}
	.box{
		flex: 1;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.left{
			flex: 4;

		}
		img{
			width: 100%;
			height: 90%;
			border-radius: 10px;
		}
		.right{
			.money{
				display: inline-block;
				width: 15px;
				height:15px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			flex: 6;
			padding: 15px;
			align-items: center;
			p:nth-child(1){
				font-weight: 700;
			}
			p:nth-child(2){
				font-size: 12px;
			}
			p{
				margin-top: 8px;
				.orange{
					color: orange;
					margin-right: 30px;
				}
			}
		}
	}
</style>