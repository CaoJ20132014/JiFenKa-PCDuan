<template>
	<div class="hello">
		<el-container>
			<el-header>
				<div class="heard_top">
					<div class="top">
						<div class="top_left">杭州天缘网络欢迎您！</div>
						<div class="top_right" v-show="!show">
							<img src="../../../assets/viplogin.png" alt="" class="vip"/>
							<span @click="tologin">会员登录</span>
						</div>
						<div class="top_right" v-show="show">
							<div class="top_common">
								<img src="../../../assets/kabao.png" alt="" class="card"/>
								<span>供卡余额:<span>{{balance}}</span></span>
							</div>
							<div class="top_common">
								<img src="../../../assets/info.png" alt="" class="information"/>
								<span @click="tonotice">系统公告</span>
							</div>
							<div>
								<img src="../../../assets/guanbi.png" alt="" class="loginout"/>
								<span>退出登录</span>
							</div>
						</div>
					</div>
				</div>
				<div class="heard_bot">
					<div class="bot">
						<div class="top_left">
							<img src="../../../assets/ka_pur.png" class="img1" />
							<img src="../../../assets/jifenka.png" class="img2" />
							<div class="div">
								<span>供货平台</span>
							</div>
						</div>
						<div class="top_right">
							<img src="../../../assets/tel.png" alt="" class="img3" />
							<span><b>0571-86538181</b></span>
						</div>
					</div>
				</div>
			</el-header>
			<el-main v-bind:class="{'short': is1,'height': is2}">
				<div class="content_box" v-bind:class="{'short': is1,'height2': is2}">
					<div class="nav_left">
						<ul class="nav_ul">
							<li class="li_common" @click="active(1),load1()" v-bind:class="{active: flag == '1'}">
								<img src="../../../assets/home.png"/>
								<span>首页</span>
							</li>
							<li class="second_li" @click="active(2),load2()" v-bind:class="{active: flag == '2'}">
								<p>
									<img src="../../../assets/gonghuo.png" alt="" />
									<span>我要供货</span>
								</p>
								<p>三网、加油卡</p>
							</li>
							<li class="li_common" @click="active(3),load3()" v-bind:class="{active: flag == '3'}">
								<img src="../../../assets/detail.png"/>
								<span>供货明细</span>
							</li>
							<li class="li_common" @click="active(4),load4()" v-bind:class="{active: flag == '4'}">
								<img src="../../../assets/tongji.png"/>
								<span>统计报表</span>
							</li>
							<li class="li_common" @click="active(5),load5()" v-bind:class="{active: flag == '5'}">
								<img src="../../../assets/tixian.png"/>
								<span>我要提现</span>
							</li>
							<li class="li_common" @click="active(6),load6()" v-bind:class="{active: flag == '6'}">
								<img src="../../../assets/anquan.png"/>
								<span>安全中心</span>
							</li>
						</ul>
					</div>
					<div class="content_right">
						<router-view/>
					</div>
				</div>
				<div class="fore_pic">
					<img src="../../../assets/kuaisufenxiao2x.png" alt="" />
					<img src="../../../assets/anquanjiaoyi2x.png" alt="" />
					<img src="../../../assets/jingzhunjisuan2x.png" alt="" />
					<img src="../../../assets/zhuanshukefu2x.png" alt="" />
				</div>
			</el-main>
			<el-footer>
				<div class="foot_top">
					<span>关于我们</span>
					<span>|</span>
					<span>公司荣誉</span>
					<span>|</span>
					<span @click="contact">联系我们</span>
				</div>
				<div class="foot_bot">Copyright © 2015.版权所有</div>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				balance: "0.000",		// 账户余额
				show: false,			// 改变顶部右边的显示状态
				flag: "1",				// 给变左侧导航的选中状态
				is1:"",					// 用于改变登陆输入框高度
				is2:"" 					// 用于改变登陆输入框高度
			}
		},
		watch:{
			$route(){					// 监听路由变化
      			this.change_nav();		// 改变左侧导航的选中状态
				this.changeHeight();	// 改变内容区域右侧的高度
			}
		},
		mounted(){
			this.change_nav();			// 改变左侧导航的选中状态
			this.changeHeight();		// 改变内容区域右侧的高度
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
			load1:function(){
				this.$router.push({
					name: 'home_nologin'
				});
			},
			load2:function(){
				this.$router.push({
					name: 'choose'
				});
			},
			load3:function(){
				this.$router.push({
					name: 'reachge'
				});
			},
			load4:function(){
				this.$router.push({
					name: 'table'
				});
			},
			load5:function(){
				this.$router.push({
					name: 'cash'
				});
			},
			load6:function(){
				this.$router.push({
					name: 'safe'
				});
			},
			contact(){
				this.$router.push({
					name: 'contact'
				});
			},
			change_nav:function(){			// 返回前一页根据路由来改变导航栏的点亮状态
				let router =  this.$route.path;
				if (router == "/home" || router == "/home/notice/" || router == "/home/notice/notice_detail") {
					this.flag = "1";
				} else if(this.isContains(router,"provide")){
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
				if (this.isContains(router,"provide")) {
					this.is1 = true;
					this.is2 = true;
				} else {
					this.is2 = false;
					this.is1 = false;
				}
			},
			isContains:function(str, substr){			// 判断str字符串是否包含substr字符串
     			return str.indexOf(substr) >= 0;
 			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.el-header {
		width: 100%;
		height: 135px !important;
		padding: 0;
	}
	.heard_top {
		width: 100%;
		height: 40px;
		background-color: #454545;
		color: white;
	}
	.heard_top .top {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		line-height: 40px;
		font-size: 14px;
	}
	.heard_top .top .top_right{
		display: flex;
	}
	.top_right .card{
		vertical-align: top;
		width: 18px;
		height: 14px;
		margin-top: 13px;
	}
	.top_right .vip{
		width: 17px;
		height: 17px;
		vertical-align: top;
		margin-top: 11px;
		margin-right: 5px;
	}
	.top_right .information{
		width: 17px;
		height: 17px;
		vertical-align: top;
		margin-top: 11px;
	}
	.top_right .loginout{
		width: 16px;
		height: 16px;
		vertical-align: top;
		margin-top: 12px;
	}
	.top_common{
		margin-right: 38px;
	}
	.heard_bot {
		width: 100%;
		height: 95px;
		background-color: white;
	}
	.heard_bot .bot {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		color: #7b5bc7;
		line-height: 95px;
	}
	.heard_bot .top_left{
		display: flex;
	}
	.top_left .div{
		width: 120px;
		height: 38px;
		border-left: 1px solid black;
		margin: auto 0;
		text-align: center;
		margin-left: 20px;
	}
	.top_left .div span{
		vertical-align: top;
		line-height: 38px;
		font-size: 24px;
	}
	.top_left .img1 {
		width: 41px;
		height: 48px;
		vertical-align: top;
		margin-top: 25px;
	}
	.top_left .img2 {
		width: 85px;
		height: 36px;
		vertical-align: top;
		margin-top: 30px;
		margin-left: 10px;
	}
	.top_right .img3 {
		width: 25px;
		height: 25px;
		vertical-align: top;
		margin-top: 35px;
	}
	.heard_top .top_right span:hover{
		cursor: pointer;
	}
	.el-main {
		padding: 0;
		height: 725px;
	}
	.content_box{
		width: 1200px;
		height: 540px;
		margin: 0 auto;
		display: flex;
	}
	.content_box .nav_left{
		width: 200px;
		height: 100%;
		margin-right: 10px;
	}
	.content_box .content_right{
		width: 990px;
	}
	.nav_ul li{
		width: 100%;
		height: 89px;
		background-color: #454545;
		color: white;
		border-top: 1px solid #353535;
		text-align: center;
	}
	.li_common{
		font-size: 16px;
		line-height: 89px;
		text-align: center;
	}
	.nav_ul li:hover{
		cursor: pointer;
	}
	.second_li p:nth-child(2){
		font-size: 12px;
		text-align: center;
		margin-top: 5px;
	}
	.second_li p:nth-child(1) img{
		width: 20px;
		height: 21px;
		vertical-align: top;
	}
	.second_li p:nth-child(1){
		margin-top: 24px;
	}
	.li_common:nth-child(1){
		border-top: 0;
	}
	.li_common img{
		vertical-align: top;
		margin-right: 5px;
	}
	.li_common:nth-child(1) img{
		width: 19px;
		height: 19px;
		margin-top: 35px;
	}
	.li_common:nth-child(3) img{
		width: 20px;
		height: 23px;
		margin-top: 33px;
	}
	.li_common:nth-child(4) img{
		width: 20px;
		height: 26px;
		margin-top: 31px;
	}
	.li_common:nth-child(5) img{
		width: 25px;
		height: 25px;
		margin-top: 32px;
	}
	.li_common:nth-child(6) img{
		width: 18px;
		height: 24px;
		margin-top: 32px;
	}
	.active{
		background: linear-gradient(to right, #7557d1, #8b63e8);
	}
	.fore_pic {
		width: 1200px;
		height: 165px;
		margin: 0 auto 0;
		padding-top: 10px;
		padding-bottom: 10px;
		display: flex;
		justify-content: space-between;
	}
	.fore_pic img {
		width: 293px;
	}
	.el-footer {
		width: 100%;
		height: 220px !important;
		padding: 0;
		background-color: #fafafa;
	}
	.foot_top,.foot_bot {
		font-size: 14px;
		color: #666666;
	}
	.foot_top {
		width: 300px;
		text-align: center;
		display: flex;
		margin: 80px auto 0;
	}
	.foot_top span {
		width: 60px;
		cursor: pointer;
	}
	.foot_bot {
		width: 200px;
		text-align: center;
		margin: 0 auto 0;
		margin-top: 36px;
	}
	.sort{
		height: 725px;
	}
	.height{
		height: 866px;
	}
	.height2{
		height: 680px;
	}
</style>