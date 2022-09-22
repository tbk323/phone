<template>
	<view>
		<div class="box" >
			<div class="box-one" v-for="i,index in asklist" :key="i.id">
				<p>{{i.title}}</p>
				<p><span>{{i.reply}}回答</span><span>{{i.viewCount}}浏览</span>
					<span>{{i.nickName}}：{{i.createDate}}</span>
				</p>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		props:['asklist'],
		// name:"aks-list",
		setup() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.box-one{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #eee;
		margin-top: 20px;
		padding: 15px;
	}
	.box{
		margin-top: 20px;
		width: 100%;
		p:nth-child(1){
			font-weight: 700;
			font-size: 18px;
		}
		p:nth-child(2){
			font-size: 14px;
			color: gray;
			span:nth-child(3){
				float: right;
				margin-right: 60px;
			}
			span:nth-child(2){
				margin-left: 20px;
			}
		}
		
	}
</style>