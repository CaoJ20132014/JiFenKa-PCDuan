<template>
  	<div id="index">
    	<div class="heard">
    		<div class="heard-con">
				<div class="folat_lt">杭州天缘网络欢迎您！</div>
				<div class="folat_rt">
					<div v-show="!isLogin" class="noLogin" @click="toLogin">
						<img src="../../../assets/image/HomeIndex/viplogin.png" alt="">
						<span>会员登录</span>
					</div>
					<div class="alreadyLogin" v-show="isLogin">
						<div class="top_right" v-show="!show">
							<div class="top_common">
								<img src="../../../assets/image/HomeIndex/qiandai.png" alt="" class="usablecard"/>
								<span>可用余额：<span>{{usableBalance.toFixed(2)}}</span></span>
							</div>
							<div class="top_common">
								<img src="../../../assets/image/HomeIndex/suo.png" alt="" class="card"/>
								<span>卡密预定：<span>{{reserve.toFixed(2)}}</span></span>
							</div>
							<div class="top_common">
								<img src="../../../assets/image/HomeIndex/info.png" alt="" class="information"/>
								<span @click="tonotice">系统公告：<span>{{notice}}</span></span>
							</div>
							<div>
								<img src="../../../assets/image/HomeIndex/guanbi.png" alt="" class="loginout"/>
								<span>退出登录</span>
							</div>
						</div>
						<div class="top_right" v-show="show">
							<div class="top_common">
								<img src="../../../assets/image/HomeIndex/kabao.png" alt="" class="card"/>
								<span>供卡余额：<span>{{balance.toFixed(2)}}</span></span>
							</div>
							<div class="top_common">
								<img src="../../../assets/image/HomeIndex/info.png" alt="" class="information"/>
								<span @click="tonotice">系统公告</span>
							</div>
							<div>
								<img src="../../../assets/image/HomeIndex/guanbi.png" alt="" class="loginout"/>
								<span>退出登录</span>
							</div>
						</div>
					</div>
				</div>
			</div>
    	</div>
		<div class="content">
			<div class="con-top">
				<div class="content-left">
					<img src="../../../assets/image/HomeIndex/ka_pur.png" alt="">
					<img src="../../../assets/image/HomeIndex/jifenka.png" alt="">
				</div>
				<div class="content-con">
					<ul>
						<li v-for="(item,index) in navList" :key="item.title" @click="routeChange(index,item)">
							<span :class="[ActiveIndex == index+1 ? 'active' : '']">{{item.title}}</span>
						</li>
					</ul>
				</div>
				<div class="content-right">
					<img src="../../../assets/image/HomeIndex/tel.png" alt="">
					<span>0571-86538181</span>
				</div>
			</div>
			<div class="con-con">
				<router-view/>
			</div>
			<div class="con-bot">
				<div>
					<img src="../../../assets/image/HomeIndex/img1.png" alt="">
					<img src="../../../assets/image/HomeIndex/img2.png" alt="">
					<img src="../../../assets/image/HomeIndex/img3.png" alt="">
					<img src="../../../assets/image/HomeIndex/img4.png" alt="">
				</div>
			</div>
		</div>
		<div class="foot">
			<div class="foot_top">
				<span>关于我们</span>
				<span>|</span>
				<span>公司荣誉</span>
				<span>|</span>
				<span @click="contact">联系我们</span>
				<span>|</span>
				<span>帮助中心</span>
			</div>
			<div class="foot_bot">Copyright © 2015.版权所有</div>
		</div>
  	</div>
</template>

<script>
	import Public from '../../../assets/js/until.js';
	export default {
		name: 'index',
		data () {
			return {
				isLogin: false,
				show: false,
				balance: 888,			// 余额
				usableBalance: 1200,	// 可用余额
				reserve: 120,			// 卡密预定
				notice: 8,				// 公告数量
				navList:[{
					title: "首页",
					route: "defaultindex"
				}, {
					title: "订单查询",
					route: "orderDetail"
				}, {
					title: "加款管理",
					route: "jiakuan"
				}, {
					title: "产品中心",
					route: "productCenter"
				}, {
					title: "卡密兑换",
					route: "kami"
				}, {
					title: "安全中心",
					route: "anquan"
				}],
				ActiveIndex: '1'
			}
		},
		watch:{
			$route(){
				this.ActiveIndex = Public.changeTopNav(this.$route.path);
			}
		},
		mounted(){
			this.ActiveIndex = Public.changeTopNav(this.$route.path);
		},
		methods: {
			routeChange(index,item){
				this.ActiveIndex = index+1;
				this.$router.push({
					name: item.route
				});
			},
			tonotice(){

			},
			toLogin(){
				this.$router.push({
					name: 'accountLogin'
				});
			},
			contact(){
				this.$router.push({
					name: 'contact'
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../assets/less/HomeIndex/index.less";
</style>