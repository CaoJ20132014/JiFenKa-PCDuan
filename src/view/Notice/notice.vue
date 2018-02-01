<template>
	<div class="notice_box border">
		<div class="box_top">
			<div>系统公告</div>
		</div>
		<div class="box_bot">
			<router-view/>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.notice_box{
		width: 988px;
		height: 538px;
		.box_top{
			height: 37px;
			border-bottom: 1px solid #e9e9e9;
			padding-top: 12px;
			div{
				width: 94px;
				height: 25px;
				border-left: 3px solid #7b5bc7;
				text-align: center;
				line-height: 25px;
				font-size: 16px;
				margin-left: 20px;
				color: #898989;
			}
		}
		.box_bot{
			width: 908px;
			height: 490px;
			padding: 0 40px;
		}
	}
</style>