<template>
	<div class="census_box border">
		<div class="box_top">
			<div>统计报表</div>
		</div>
		<div class="box_bot">
			<div class="one_many">
				<ul>
					<li v-bind:class="{'pur_active': flag == '1'}" @click="change(1)">统计报表</li>
					<li v-bind:class="{'pur_active': flag == '2'}" @click="change(2)">卡密资金明细</li>
				</ul>
			</div>
			<router-view/>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: '1'
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
			change:function(e){
				this.flag = e;
				if (e == '1') {
					this.$router.push({
						name: 'table'
					})
				} else {
					this.$router.push({
						name: 'capital'
					})
				}
			},
			judgeRouter(){
				let router = this.$route.path;
				if (this.isContains(router,"capital")) {
					this.flag = '2';
				} else if(router == "/Home/Cardprovided/census/"){
					this.flag = '1';
				}
			},
			isContains:function(str, substr){			// 判断str字符串是否包含substr字符串
     			return str.indexOf(substr) >= 0;
 			}
		}
	}
</script>

<style scoped>
	.census_box{
		width: 988px;
		height: 538px;
	}
	.census_box .box_top{
		height: 37px;
		border-bottom: 1px solid #e9e9e9;
		padding-top: 12px;
	}
	.census_box .box_top div{
		width: 94px;
		height: 25px;
		border-left: 3px solid #7b5bc7;
		text-align: center;
		line-height: 25px;
		font-size: 16px;
		margin-left: 20px;
		color: #898989;
	}
	.census_box .box_bot{
		width: 908px;
		height: 490px;
		padding: 0 40px;
	}
	.one_many{
		width: 100%;
		height: 65px;
	}
	.one_many ul{
		width: 100%;
		display: flex;
		border-bottom: 1px solid #e9e9e9;
	}
	.one_many ul li{
		width: 100px;
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
</style>
