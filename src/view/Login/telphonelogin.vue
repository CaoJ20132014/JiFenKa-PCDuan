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
	export default {
		name: 'HelloWorld',
		data() {
			return {
				checked: false,
				inputaccount: "", 			// 手机号
				inputpwd1: "",				// 右侧验证码
				inputpwd2: "",				// 短信验证码
				btn_text:'获取验证码',
				disabled: false,
				time: 0,
				checkCode:''				// 随机验证码
			}
		},
		methods:{
			login(){
				this.$router.push({
					name: 'defaultindex'
				});
			},
			forgetpwd:function(){
				this.$router.push({
					name: 'next'
				});
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
			getcode(){
				this.$message({
					showClose: true,
					message: '验证码已发送，请注意查收',
					type: 'success',
					center: true
				});
				this.time = 60;
				this.timer();
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
					this.$message({
						message: '请输入手机号码',
						type: 'error',
						center: true
					});
				} else if(this.inputaccount.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)==0){
					return true;
				} else {
					this.$message({
						message: '请输入正确的手机号码',
						type: 'error',
						center: true
					});
				}
			},
			createCode(){
				let code = "";    
				var codeLength = 4;								//验证码的长度   
				var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
				'S','T','U','V','W','X','Y','Z');				//随机数   
				for(var i = 0; i < codeLength; i++) {			//循环操作   
					var index = Math.floor(Math.random() * 36);	//取得随机数的索引（0~35）   
					code += random[index];						//根据索引取得随机数加到code上   
				}   
				this.checkCode = code;							//把code值赋给验证码   
			},
			checkLpicma(){
				this.inputpwd1.toUpperCase();	//取得输入的验证码并转化为大写         
				if(this.inputpwd1 == '') {
					this.$message({
						message: '请输入验证码',
						type: 'error',
						center: true
					});
				} else if (this.inputpwd1.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
					this.$message({
						message: '验证码错误，请重新输入',
						type: 'error',
						center: true
					});
					this.createCode();				//刷新验证码   
					this.inputpwd1 = '';
				} else { 							//输入正确时
					return true;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../assets/less/Login/tellogin.less';
</style>
