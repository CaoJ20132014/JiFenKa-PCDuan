<!--账号登录-->
<template>
	<div>
		<ul class="input_ul">
			<li class="accout">
				<el-input type="number" v-model="inputaccount" :class="{'grey':inputaccount == ''}" placeholder="请输入账号..."></el-input>
			</li>
			<li class="password">
				<el-input type="password" v-model="inputpwd" :class="{'grey':inputpwd == ''}" placeholder="请输入密码...">
					<i class="el-icon-edit el-input__icon el-icon-view" slot="suffix" @click="Click()"></i>
				</el-input>
			</li>
			<li class="login_in">
				<el-button @click="confirmlogin()">登录系统</el-button>
			</li>
		</ul>
		<div class="info_bot">
			<el-checkbox v-model="checked">记住密码</el-checkbox>
			<div class="forget_enroll">
				<span @click="forget()">忘记密码</span>
				<span>|</span>
				<span @click="register()">注册</span>
			</div>
		</div>
	</div>
</template>
<script>
	import {accountLogin} from '@/until/getData';
	import Public from '@/until/until';
	export default {
		data() {
			return {
				pwdType: 'password',
				flag: false,
				checked: false,
				isLoad: false,
				inputaccount: "",			// 账号
				inputpwd: ""				// 密码
			}
		},
		mounted () {
			if (Public.JS_Cookie('get', 'remeberUserInfo')) {
				let info = Public.JS_Cookie('get', 'remeberUserInfo');
				this.checked = true;
				this.inputaccount = info.tel;
				this.inputpwd = info.password;
			}
		},
		methods: {
			changeType(){
                if (this.pwdType == "password") {
                    this.pwdType = "text";
                } else {
                    this.pwdType = "password"
                }
			},
			forget:function(){
				this.$router.push({
					name: 'next'
				});
			},
			register:function(){
				this.$router.push({
					name: 'register'
				});
			},
			confirmlogin:function(e){
				let data = {
					tel: this.inputaccount,
					password: this.inputpwd
				}
				if (this.inputaccount == '' && this.inputpwd == '') {
					this.$message({
						message: '信息有误，请重新填写',
						type: 'warning',
						center: true,
						duration: 2000
					});
				} else {
					if (this.checked == true) {		// 记住密码，将账号和密码存入cookie下次进入登录页面首先读取cookie中的账号信息
						this.isLoad = true;
						Public.JS_Cookie('set', 'remeberUserInfo', data, 1);
						this.login(data);
					} else {
						Public.JS_Cookie('remove', 'remeberUserInfo');
						this.login(data);
					}
				}
				setTimeout(() => {
					this.isLoad = false;
				}, 1000);
			},
			login(data){
				let _that = this;
				accountLogin(data).then((res) => {
					if (res.code == '2') {
						this.$message({
							message: res.msg,
							type: 'warning',
							center: true,
							duration: 2000
						});
					} else if(res.code == '1'){
						this.$message({
							message: res.msg,
							type: 'success',
							center: true,
							duration: 2000
						});
						let info = {
							tel: _that.inputaccount,
							token: Public.getToken()
						};
						Public.JS_Cookie('remove', 'userInfo');
						let date = Public.setTimes('m60');
						Public.JS_Cookie('set', 'userInfo', info, date);
						this.$store.commit('ONADDINFO',info);
						let redirect = decodeURIComponent(this.$route.query.redirect);  	// 获取登录成功后要跳转的路由。
						setTimeout(() => {
							if (redirect != 'undefined') {
								this.$router.push({
									path: redirect
								});
							} else {
								this.$router.push({
									name: 'home_login'
								});
							}
						}, 2000);
					} else if (res.code == '0') {
						this.$message({
							message: res.msg,
							type: 'warning',
							center: true,
							duration: 2000
						});
						setTimeout(() => {
							this.$router.push({
								name: 'register'
							});
						}, 2000);
					}
				}).catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../assets/less/Login/account.less';
</style>
