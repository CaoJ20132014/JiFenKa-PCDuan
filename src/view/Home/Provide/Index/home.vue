<template>
	<div class="content_box" :style="styles">
		<div class="nav_left">
			<ul class="nav_ul">
				<li class="li_common" @click="active(1),load(1)" v-bind:class="{active: flag == '1'}">
					<img src="../../../../assets/image/Provide/home.png"/>
					<span>供货平台</span>
				</li>
				<li class="second_li" @click="active(2),load(2)" v-bind:class="{active: flag == '2'}">
					<p>
						<img src="../../../../assets/image/Provide/gonghuo.png" alt="" />
						<span>我要供货</span>
					</p>
					<p>三网、加油卡</p>
				</li>
				<li class="li_common" @click="active(3),load(3)" v-bind:class="{active: flag == '3'}">
					<img src="../../../../assets/image/Provide/detail.png"/>
					<span>供货明细</span>
				</li>
				<li class="li_common" @click="active(4),load(4)" v-bind:class="{active: flag == '4'}">
					<img src="../../../../assets/image/Provide/tongji.png"/>
					<span>统计报表</span>
				</li>
				<li class="li_common" @click="active(5),load(5)" v-bind:class="{active: flag == '5'}">
					<img src="../../../../assets/image/Provide/tixian.png"/>
					<span>我要提现</span>
				</li>
				<li class="li_common" @click="active(6),load(6)" v-bind:class="{active: flag == '6'}">
					<img src="../../../../assets/image/Provide/anquan.png"/>
					<span>安全中心</span>
				</li>
			</ul>
		</div>
		<div class="content_right" :style="styles">
			<router-view/>
		</div>
	</div>
</template>

<script>
	import Public from '../../../../assets/js/until.js';
	export default {
		data() {
			return {
				balance: "0.000",		// 账户余额
				show: false,			// 改变顶部右边的显示状态
				flag: "1",				// 给变左侧导航的选中状态
				styles: {
                    height: 540 + 'px'
                }
			}
		},
		watch:{
			$route(){					// 监听路由变化
      			this.change_nav();		// 改变左侧导航的选中状态
				this.changeHeight();	// 改变内容区域右侧的高度
				this.styles.height = Public.changeHeight(this.$route.path) + 'px';
			}
		},
		mounted(){
			this.change_nav();			// 改变左侧导航的选中状态
			this.changeHeight();		// 改变内容区域右侧的高度
			this.styles.height = Public.changeHeight(this.$route.path) + 'px';
		},
		methods: {
			active:function(e){
				this.flag = e;
			},
			tologin:function(){
				this.$router.push({
					name: 'accountlogin'
				});
			},
			tonotice:function(){
				this.$router.push({
					name: 'notice_list'
				});
			},
			load:function(index){
				if (index == 1) {
					this.$router.push({
						name: 'Already'
					});
				} else if(index == 2){
					this.$router.push({
						name: 'choose'
					});
				} else if(index == 3){
					this.$router.push({
						name: 'reachge'
					});
				} else if(index == 4){
					this.$router.push({
						name: 'table'
					});
				} else if(index == 5){
					this.$router.push({
						name: 'cash'
					});
				} else if(index == 6){
					this.$router.push({
						name: 'safe'
					});
				}
			},
			contact(){
				this.$router.push({
					name: 'contact'
				});
			},
			change_nav:function(){			// 根据路由来改变导航栏的点亮状态
				let router =  this.$route.path;
				if (router == "/Home/CardProvide/" || router == "/home/notice/" || router == "/home/notice/notice_detail") {
					this.flag = "1";
				} else if(this.isContains(router,"Provide")){
					this.flag = "2";
				} else if(this.isContains(router,"details")){
					this.flag = "3";
				} else if(this.isContains(router,"census")){
					this.flag = "4";
				} else if(this.isContains(router,"cash")||this.isContains(router,"AddCard")){
					this.flag = "5";
				} else if(this.isContains(router,"safe")){
					this.flag = "6";
				}
			},
			changeHeight:function (){
				let router =  this.$route.path;
			},
			isContains:function(str, substr){			// 判断str字符串是否包含substr字符串
     			return str.indexOf(substr) >= 0;
 			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../../assets/less/Provide/home/index.less";
</style>
