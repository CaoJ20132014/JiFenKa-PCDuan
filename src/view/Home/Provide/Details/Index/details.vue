<template>
	<div class="detail_box border" :style="{'height': outsideHeight+'px'}">
		<div class="box_top">
			<div>供货明细</div>
		</div>
		<div class="box_bot" :style="{'height': insideHeight+'px'}">
			<div class="one_many">
				<ul>
					<li v-bind:class="{'pur_active': flag == '1'}" @click="change(1)">充值卡供货</li>
					<li v-bind:class="{'pur_active': flag == '2'}" @click="change(2)">其他资源供货</li>
				</ul>
			</div>
			<router-view @indexChange="changeHeight"></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: '1',
				outsideHeight: 538,
				insideHeight: 488
			}
		},
		mounted(){
			this.judgeRouter();
		},
		watch:{
			$route(){
				this.judgeRouter();
			}
		},
		methods:{
			changeHeight(val){
				if (val) {
					this.outsideHeight = val.Height1;
					this.insideHeight = val.Height2;
					let height = {
						Height2: 950
					}
					this.$emit("homeChange", height);
				}
			},
			change:function(e){
				this.flag = e;
				if (e == '1') {
					this.$router.push({
						name: 'reachge'
					})
				} else {
					this.$router.push({
						name: 'othercard'
					})
				}
			},
			judgeRouter(){
				let router = this.$route.path;
				if (this.isContains(router,"Othercard")) {
					this.flag = '2';
				} else {
					this.flag = '1';
				}
			},
			isContains:function(str, substr){			// 判断str字符串是否包含substr字符串
     			return str.indexOf(substr) >= 0;
 			}
		}
	}
</script>
<style lang="less" scoped>
	.detail_box{
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
			.one_many{
				width: 100%;
				height: 65px;
				ul{
					width: 100%;
					display: flex;
					border-bottom: 1px solid #e9e9e9;
					li{
						width: 110px;
						height: 62px;
						line-height: 62px;
						text-align: center;
						font-size: 16px;
						cursor: pointer;
					}
					.pur_active{
						border-bottom: 3px solid #7b5bc7;
						color: #7b5bc7;
					}
				}
			}
		}
	}
</style>