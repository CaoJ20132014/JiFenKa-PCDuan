<template>
	<div class="detail_box">
		<div class="detail_top" v-text="title"></div>
		<div class="detail_con" v-text="content"></div>
		<p class="public_p">杭州天缘网络技术有限公司</p>
		<!-- <p class="public_p">{{time}}</p> -->
	</div>
</template>

<script>
	import Public from '@/until/until';
	import { NoticeDetail } from '@/until/getData';
	export default {
		data() {
			return {
				title: "",
				time: "",
				content: ""
			}
		},
		mounted(){
			let ID = this.$route.params.id;
			NoticeDetail({id: ID}).then(res => {
				//console.log(res);
				if (res.code == '1') {
					this.title = res.list.title;
					this.content = res.list.content;
				} else {
					
				}
			}).catch(err => {
				//console.log(err);
			});
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.detail_box{
		width: 100%;
		height: 100%;
		.detail_top{
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
			text-indent: 2em;
			padding-top: 40px;
			color: rgb(116, 113, 113);
		}
		.public_p{
			width: 800px;
			font-size: 16px;
			text-align: right;
			line-height: 30px;
		}
	}
</style>