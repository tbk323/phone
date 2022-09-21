<template>
	<view>
		<div class="top">
			<input type="text" class="inp" placeholder="搜索你想要的内容">
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.top{
	width: 100%;
	background-color:#0071b6;
	height: 80rpx;
	padding: 10px;
	position: fixed;
	top: 0;
	left: 0;
	.inp{
		width: 90%;
		height: 60rpx;
		background-color: #fff;
		border-radius: 50rpx;
		margin-left: 10rpx;
		text-align: center;
	}
}
</style>
