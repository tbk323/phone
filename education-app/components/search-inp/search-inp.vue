<template>
	<view>
		<view class="top">
			<span @tap="back"></span>
			<view class="search">
				<img src="../../static/images/search.png" alt="" class="im">
				<input class="uni-input" focus placeholder="搜索你想要的内容" />
			</view>
			<span @tap="back">取消</span>
		</view>
	</view>
</template>

<script>
	export default {
		name:"search-inp",
		data() {
			const back=()=>{
				uni.navigateBack({
					
				})
			}
			return {
				back,
				  focus: false,
			};
		}
	}
</script>

<style lang="less">
	.top{
		// padding: 8px;
		background-color: #fff;
		top: 0px;
		border-bottom: 1px solid #eee;
		height: 50px;
		position: fixed;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		span:nth-child(1){
			display: inline-block;
			width: 10px;
			height: 10px;
			border-top: 1px solid black;
			border-left: 1px solid black;
			transform: rotate(-45deg);
		}
		span:nth-child(2){
			margin-right: 20px;
		}
		.im{
			width: 15px;
			height: 15px;
			position: absolute;
			left: 45px;
			top: 20px;
		}
	}
.search{
	padding-left: 40px;
	padding-top: 10px;
	width: 300px;
	height: 30px;
	background-color: #eee;
	border-radius: 20px;
}
</style>