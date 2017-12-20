<template>
	<div class="provide_box border">
		<div class="content_top">
			<div @click="backProvide">我要供货</div>
			<img v-show="isShow" src="../../../../../assets/image/Provide/right_gou.png" alt="">
			<div>{{title}}</div>
		</div>
		<div class="content_bot">
			<div v-show="hidden" class="one_many">
				<ul :key="cardType">
					<li v-bind:class="{'pur_active': flag == '1'}" @click="change(1)">单张供货</li>
					<li v-bind:class="{'pur_active': flag == '2'}" @click="change(2)">多张供货</li>
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
				title: "",
				isShow: false,
				flag: "1",
				hidden: true,
				cardType: ""			// 1 上网卡供货 2 加油卡供货
			}
		},
		watch:{
			$route(){					// 监听路由变化
				this.changeStyle();
				this.changecardNum();
			}
		},
		mounted(){
			this.changeStyle();
			this.changecardNum();
		},
		methods:{
			change:function(e){
				this.flag = e;
				if (this.cardType == '1' && e == 1) {			// 上网卡=>单张
					this.$router.push({
						name: 'onecard'
					});
				} else if (this.cardType == '1' && e == 2) {	// 上网卡=>多张
					this.$router.push({
						name: 'manycard'
					});
				} else if (this.cardType == '2' && e == 1) {	// 加油卡=>单张
					this.$router.push({
						name: 'onefuel'
					});
				} else if (this.cardType == '2' && e == 2) {	// 加油卡=>多张
					this.$router.push({
						name: 'manyfuel'
					});
				}
			},
			changecardNum:function(){				// 改变单张供卡和多张供卡的下边框
				let router = this.$route.path;
				if (router == "/Home/Cardprovided/Provide/card/"||router == "/Home/Cardprovided/Provide/fulecard/"){
					this.flag = '1';
				} else if (router == "/Home/Cardprovided/Provide/card/manycard"||router == "/Home/Cardprovided/Provide/fulecard/manyfuel"||router == "/Home/Cardprovided/Provide/fulecard/fuelconfim"){
					this.flag = '2';
				}
			},
			changeStyle:function() {
				let router = this.$route.path;
				if (router == "/Home/Cardprovided/Provide/card/"||router == "/Home/Cardprovided/Provide/card/manycard") {
					this.title = "上网卡供货";
					this.isShow = true;
					this.hidden = true;
					this.cardType = '1';
				} else if (router == "/Home/Cardprovided/Provide/fulecard/"||router == "/Home/Cardprovided/Provide/fulecard/manyfuel"||router == "/Home/Cardprovided/Provide/fulecard/fuelconfim") {
					this.title = "加油卡供货";
					this.isShow = true;
					this.hidden = true;
					this.cardType = '2';
				} else {
					this.title = "";
					this.isShow = false;
					this.hidden = false;
					this.cardType = '';
				}
			},
			backProvide:function(){
				this.$router.push({
					name: 'choose'
				});
			},
			isContains:function(str, substr){			// 判断str字符串是否包含substr字符串
     			return str.indexOf(substr) >= 0;
 			}
		}
	}
</script>

<style scoped>
	.provide_box{
		width: 988px;
		height: 678px; 
	}
	.content_top{
		display: flex;
		width: 100%;
		height: 37px;
		padding-top: 12px;
		border-bottom: 1px solid #e9e9e9;
	}
	.content_top div:nth-child(1){
		height: 25px;
		width: 80px;
		line-height: 25px;
		border-left: 3px solid #7b5bc7;
		text-align: center;
		margin-left: 20px;
		cursor: pointer;
	}
	.content_top img{
		width: 9px;
		height: 16px;
		vertical-align: top;
		margin-top: 4px;
	}
	.content_top div:nth-child(3){
		width: 100px;
		height: 25px;
		padding-left: 6px;
		line-height: 25px;
	}
	.content_bot{
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