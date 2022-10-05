<template>
	<view>
		<div class="inp">
			<u-button class="btn" @click="$router.push('/pages/searchcon/searchcon')">搜索</u-button>
		</div>
		
	</view>
</template>

<script>
	export default {
		name:"topinput",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.inp{
		width: 100%;
		height: 100rpx;
		background-color:red;
		padding: 10rpx;
		.btn{
			width: 90%;
		}
	}
</style>