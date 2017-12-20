<template>
	<div class="detail_box">
		<div class="detail_top">{{title}}</div>
		<div class="detail_con">
			尊敬的用户：<br />
				受市场环境影响，自2017年10月31日10:10起，全国中石化500-1000元面值回收折扣将调整为：9.7-9.94折，2017年10月31日10:10前提交的卡密结算时按照调整前的折扣结算。        
			为保证您的利益，请您提交卡密前查看“快速销卡折扣推荐”，给您带来的不便敬请谅解。<br />
			1. 智能提交，多渠道分销，省时省力；<br />
			2. 加密操作，安全保障，为您保驾护航；<br />
			3. 时销时结，利润透明，快速提现<br />
			4. 专业“卡密兑换顾问”，为您提供售后服务，欢迎点击平台右侧在线客服“卡密兑换顾问”联系，或直接添加QQ：2355936152，联系电话：13021609389 。
		</div>
		<p class="public_p">杭州天缘网络技术有限公司</p>
		<p class="public_p">{{time}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "全国中石化500-1000元面值回收折扣调整通知",
				time: "2017-11-09 22:10:55"
			}
		},
		mounted(){
			console.log(this.$route.params.id)
		},
		methods:{
			
		}
	}
</script>

<style>
	.detail_box{
		width: 100%;
		height: 100%;
	}
	.detail_box .detail_top{
		width: 100%;
		height: 64px;
		line-height: 64px;
		color: #7b5bc7;
		font-size: 20px;
		border-bottom: 1px solid #e9e9e9;
	}
	.detail_con{
		font-size: 16px;
		line-height: 30px;
		margin-bottom: 60px;
	}
	.public_p{
		width: 800px;
		font-size: 16px;
		text-align: right;
		line-height: 30px;
	}
</style>