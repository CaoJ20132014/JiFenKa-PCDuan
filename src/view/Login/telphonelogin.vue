<template>
	<div>
		<ul class="input_ul">
			<li class="accout">
				<el-input type="number" @blur="checkLPhone" v-model="inputaccount" :class="{'grey':inputaccount == ''}" placeholder="请输入手机号..." :maxlength="11"></el-input>
			</li>
			<li class="password">
				<el-input class="short" @blur="checkLpicma" type="text" v-model="inputpwd1" :class="{'grey':inputpwd1 == ''}" placeholder="请输入右侧验证码..."></el-input>
			</li>
			<li class="password code">
				<el-input class="short" type="text" v-model="inputpwd2" :class="{'grey':inputpwd2 == ''}" placeholder="请输入短信验证码..."></el-input>
				<el-button id="button" class="getcode" :disabled="disabled" @click="getcode" v-text="btn_text"></el-button>
			</li>
			<li class="login_in">
				<el-button @click="login">登录系统</el-button>
			</li>
		</ul>
		<div class="info_bot">
			<div></div>
			<div class="forget_enroll">
				<span @click="forgetpwd()">忘记密码</span>
				<span>|</span>
				<span @click="register()">注册</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {Code, telLogin} from '@/until/getData';
	import Public from '@/until/until';
	export default {
		name: 'HelloWorld',
		data() {
			return {
				checked: false,
				isLoad: false,
				inputaccount: "", 			// 手机号
				inputpwd1: "",				// 右侧验证码
				inputpwd2: "",				// 短信验证码
				btn_text:'获取验证码',
				disabled: false,
				time: 0,
				imgSrc: 'http://a.91jfk.com/ProvideHome/Login/vcode'				// 图片验证码
			}
		},
		methods:{
			forgetpwd:function(){
				this.$router.push({
					name: 'next'
				});
			},
			changeImg(){		// 改变图片验证码
				this.imgSrc = this.imgSrc +  '?c=' + Math.random();
			},
			register:function(){
				this.$router.push({
					name: 'register'
				});
			},
			checkUserPhone(){
				if(this.userPhone == ''){
					this.$message({
						message: '手机号码不能为空',
						type: 'error',
						center: true
					});
				}
			},
			toLogin(){
				if (this.inputaccount && this.inputpwd1 && this.inputpwd2) {
					let data = {
						tel: this.inputaccount,
						verify: this.inputpwd2
					}
					this.isLoad = true;
					telLogin(data).then((res) => {
						if (res.code == '1') {
							this.alert(res.msg+'，正在跳转...', 'success');
							setTimeout(() => {
								this.$router.push({
									name: 'home_nologin'
								})
							}, 2000);
						} else {
							this.alert(res.msg, 'warning');
						}
					}).catch((err) => {
						console.log(err);
					})
				} else {
					this.alert('信息不完整，请重新填写', 'warning');
				}
			},
			getcode(){
				if (Public.isTel(this.inputaccount)) {
					if (this.inputpwd1 != '') {
						let data = {
							state: 3,
							verify: this.inputpwd1,
							tel: this.inputaccount
						}
						Code(data).then((res) => {
							if (res.code == '1') {
								this.alert('验证码已发送，请注意查收', 'success');
								this.time = 60;
								this.timer();
							} else {
								this.alert(res.msg, 'warning');
							}
						}).catch((err)=>{
							console.log(err);
						})
					} else {
						this.alert('请输入右侧的图片验证码', 'warning');
					}
				} else {
					this.alert('请输入正确的手机号码', 'warning');
				}
				
			},
			timer: function () {
				if (this.time > 0) {
					this.time--;
					setTimeout(this.timer, 1000);
					this.disabled = true;
					this.btn_text = this.text();
					if (this.time == 0) {
						this.time = 0;
						this.disabled = false;
						clearTimeout(this.timer);
					}
				}
			},
			text: function () {
				return this.time > 0 ? this.time + 's' : '重新获取';
			},
			checkLPhone(){
				if(this.inputaccount == ''){
					this.alert('请输入正确的手机号码', 'warning');
				} else if(this.inputaccount.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)==0){
					return true;
				} else {
					this.alert('请输入正确的手机号码', 'warning');
				}
			},
			alert(msg, alertType){
				this.$message({
					showClose: true,
					message: msg,
					type: alertType,
					center: true,
					duration: 2000
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../assets/less/Login/tellogin.less';
</style>
