<template>
	<div class="hello">
		<el-container>
			<el-header>
				<div class="heard_top">
					<div class="top">
						<div class="top_left">杭州天缘网络欢迎您！</div>
						<div class="top_right">
							<img src="../../assets/image/login/wenhao.png" alt="" />
							<span @click="gethelp()">帮助中心</span>
						</div>
					</div>
				</div>
				<div class="heard_bot">
					<div class="bot">
						<div class="top_left" @click="toHome">
							<img src="../../assets/image/login/ka_pur.png" class="img1" />
							<img src="../../assets/image/login/jifenka.png" class="img2" />
						</div>
						<div class="top_right">
							<img src="../../assets/image/login/tel.png" alt="" class="img3" />
							<span><b>0571-86538181</b></span>
						</div>
					</div>
				</div>
			</el-header>
			<el-main>
				<el-col>
					<div class="main_box" v-bind:class="{'accountchangeshort': is1,'telphonechangeshort': is2}">
						<div class="info" v-bind:class="{'accountinfochangeshort': is1,'telphoneinfochangeshort': is2}">
							<img src="../../assets/image/login/yellow.png" alt="" />
							<ul class="login_ul">
								<li v-bind:class="{'active': flag1}" @click="accountlogin()">账号登录</li>
								<li v-bind:class="{'active': flag2}" @click="telphonelogin()">短信登录</li>
							</ul>
							<router-view/>
						</div>
					</div>
				</el-col>
				<div class="fore_pic">
					<img src="../../assets/image/public/kuai.png" alt="" />
					<img src="../../assets/image/public/an.png" alt="" />
					<img src="../../assets/image/public/jing.png" alt="" />
					<img src="../../assets/image/public/zhuan.png" alt="" />
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
		name: 'HelloWorld',
		data() {
			return {
				flag1: true,
				flag2: false,
				is1: '',
				is2: ''
			}
		},
		mounted(){
			this.change_ul();
		},
		methods: {
			accountlogin: function() {
				this.$router.push({
					name: 'accountLogin'
				});
				this.flag2 = false;
				this.flag1 = true;
				this.is2 = false;
				this.is1 = true;
			},
			telphonelogin: function() {
				this.$router.push({
					name: 'telLogin'
				});
				this.flag1 = false;
				this.flag2 = true;
				this.is1 = false;
				this.is2 = true;
			},
			change_ul:function(){
				if (this.$route.path == "/login/") {
					this.flag2 = false;
					this.flag1 = true;
					this.is2 = false;
					this.is1 = true;
				} else if(this.$route.path == "/login/telLogin"){
					this.flag1 = false;
					this.flag2 = true;
					this.is1 = false;
					this.is2 = true;
				}
			},
			gethelp:function(){
				this.$router.push({
					name: 'help'
				});
			},
			contact(){
				this.$router.push({
					name: 'contact'
				});
			},
			toHome(){
				this.$router.push({
					name: 'defaultindex'
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../assets/less/Login/index.less';
</style>
