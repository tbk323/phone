<template>
	<view>
		<view class="ban">
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
					:duration="duration">
					<swiper-item>
						<img src="http://m.mengxuegu.com/static/images/banner1.jpg" alt="">
					</swiper-item>
					<swiper-item>
						<img src="http://m.mengxuegu.com/static/images/banner2.jpg" alt="">
					</swiper-item>
					<swiper-item>
						<img src="http://m.mengxuegu.com/static/images/banner3.jpg" alt="">
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		setup() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			};
		}
	}
</script>

<style lang="scss">
.ban{
	width: 90%;
	height: 40rpx;
	margin-top: 90rpx;
	padding: 10rpx;
	img{
		width: 100%;
		height: 100%;
	}
}
</style>