<template>
	<div>
		<div class="content_top border">
			<div class="head">修改登录密码<small>*系统检测到您尚未设置支付密码，请设置支付密码以保护账户资金安全。</small></div>
		</div>
		<div class="content_bot border">
			<p style="color: red; text-align: center;line-height: 20px;padding-bottom: 10px;">密码为英文和数字的组合，不能含有特殊字符</p>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				<el-form-item label="原始密码" prop="oldpassword">
					<!-- <img class="keyboard" src="../../../assets/web/keyboard.png" alt=""> -->
					<el-input :type="pwdType1" v-model="ruleForm2.oldpassword" auto-complete="off" placeholder="原密码">
						<i class="iconfont" :class="[flag1 ? 'icon-yanjing1':'icon-yanjing-copy']" slot="suffix" @click="flag1 = !flag1,changeType(1)"></i>
					</el-input>
					<small>6-12位字符，首字母不为数字</small>
				</el-form-item>
				<el-form-item label="重置密码" prop="newpassword">
					<!-- <img class="keyboard" src="../../../assets/web/keyboard.png" alt=""> -->
					<el-input :type="pwdType2" v-model="ruleForm2.newpassword" auto-complete="off" placeholder="6-12位字符，首字母不为数字">
						<i class="iconfont" :class="[flag2 ? 'icon-yanjing1':'icon-yanjing-copy']" slot="suffix" @click="flag2 = !flag2,changeType(2)"></i>
					</el-input>
					<small>6-12位字符，首字母不为数字</small>
				</el-form-item>
				<el-form-item label="确认密码" prop="resetpassword">
					<!-- <img class="keyboard" src="../../../assets/web/keyboard.png" alt=""> -->
					<el-input :type="pwdType3" v-model="ruleForm2.resetpassword" auto-complete="off" placeholder="确认新密码">
						<i class="iconfont" :class="[flag3 ? 'icon-yanjing1':'icon-yanjing-copy']" slot="suffix" @click="flag3 = !flag3,changeType(3)"></i>
					</el-input>
					<small>6-12位字符，首字母不为数字</small>
				</el-form-item>
				<el-form-item label="短信验证码" prop="verify">
					<el-input type="text" v-model="ruleForm2.verify" style="width:170px;" placeholder="短信验证码"></el-input>
					<el-button class="getCode" type="primary" :disabled="disabled" v-text="btn_text" @click="getCode"></el-button>
					<small>验证码将发送到{{tel}}</small>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" style="width:140px;background-color: #8a63e7;border:1px solid #8A63E7;" @click="submitForm('ruleForm2')" @keydown.enter.tab.stop.self="submitForm('ruleForm2')">提交设置</el-button>
					<el-button style="width:140px;" @click="resetForm('ruleForm2')">取消设置</el-button>
				</el-form-item>
			</el-form>
			<div class="bottom">
				<p class="tip">温馨提示</p>
				<p>1.请精准填写所供卡号与密码相对应且真实有效，否则可能导致无法结算，给您带来损失。</p>
				<p>2.全国话费充值卡可指定省份消耗，请精确选择销卡地区，以免给您带来不必要的损失。</p>
			</div>
		</div>
	</div>
</template>
<script>
	import Public from '@/until/until';
	import { safeGetCode, revise } from '@/until/getData';
	export default {
		data() {
			let checkCode = (rule, value, callback) => {
				if (!value) {
					return callback(new Error("验证码不能为空"));
				}else {
					callback();
				}
			};
			let validatePass1 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
				} else {
					callback();
				}
			};
			let validatePass2 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
				}else if(value === this.ruleForm2.oldpassword) {
					callback(new Error("新密码和原密码不能相同"));
				} else if(!Public.checkRate(value)) {
					callback(new Error("密码必须是英文和数字组合"));
				} else {
					callback();
				}
			};
			let validatePass3 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请再次输入密码"));
				} else if(!Public.checkRate(value)) {
					callback(new Error("密码必须是英文和数字组合"));
				} else if (value !== this.ruleForm2.newpassword) {
					callback(new Error("两次输入密码不一致!"));
				} else {
					callback();
				}
			};
			return {
				ruleForm2: {
					oldpassword: "",
					newpassword: "",
					resetpassword: "",
					verify: ""
				},
				rules2: {
					oldpassword: [
						{ required: true, validator: validatePass1, trigger: "blur" }
					],
					newpassword: [
						{ required: true, validator: validatePass2, trigger: "blur" }
					],
					resetpassword: [
						{ required: true, validator: validatePass3, trigger: "blur" }
					],
					verify: [
						{ required: true, validator: checkCode, trigger: "blur" }
					]
				},
				flag1: false,
				flag2: false,
				flag3: false,
				pwdType1: 'password',
				pwdType2: 'password',
				pwdType3: 'password',
				tel: '',
				btn_text:'获取验证码',
				disabled: false
			};
		},
		mounted () {
			if (Public.JS_Cookie('get', 'userInfo')) {
				let InFo = Public.JS_Cookie('get', 'userInfo');
				this.tel = InFo.tel;
			}
		},
		methods: {
			changeType(val){
                if (val == '1') {
					if (this.pwdType1 == "password") {
						this.pwdType1 = "text";
					} else {
						this.pwdType1 = "password"
					}
				} else if(val == '2'){
					if (this.pwdType2 == "password") {
						this.pwdType2 = "text";
					} else {
						this.pwdType2 = "password"
					}
				} else if(val == '3'){
					if (this.pwdType3 == "password") {
						this.pwdType3 = "text";
					} else {
						this.pwdType3 = "password"
					}
				}
			},
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						let data = this.ruleForm2;
						data['tel'] = this.tel;
						revise(data).then((res) => {
							// console.log(res);
							if (res.code == '1') {
								this.alert(res.msg, 'success');
								setTimeout(() => {
									this.$router.push({
										name: 'accountlogin'
									});
								}, 2000);
							} else if(res.code == '0'){
								this.alert(res.msg, 'warning');
							} else if(res.code == '4'){
								this.alert(res.msg, 'warning');
							}
						}).catch((err) => {
							// console.log(err);
						});
					} else {
						// console.log("error submit!!");
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			getCode(){
				let data = {
					state: '2',
					tel: this.tel
				};
				if (Public.JS_Cookie('get', 'userInfo')||this.$store.getters.setInfo) {
					safeGetCode(data).then((res) => {
						// console.log(res);
						if (res.code == '1') {
							this.alert('验证码已发送，请注意查收', 'success');
							this.time = 60;
							this.timer();
						} else {
							this.alert(res.msg, 'warning');
						}
					}).catch((err) => {
						console.log(err);
					});
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
	};
</script>
<style lang="less" scoped>
	.content_top {
		padding: 10px 14px;
		text-indent: 30px;
		.head {
			height: 26px;
			line-height: 26px;
			background: url('../../../../assets/image/Provide/web/lock.png') no-repeat;
			img {
				margin-right: 10px;
			}
		}
	}
	.content_bot {
		border-top: none;
		padding: 50px 20px 10px;
		min-height: 430px;
		position: relative;
		.el-form-item {
			position: relative;
			small {
				color: #b5b5b5;
				margin-left: 10px;
			}
			.el-input {
				width: 296px;
				margin-right: 10px;
				.el-input__inner {
					background: #f4f4f4;
				}
			}
			.getCode{
				width: 112px;
				background-color: #8a63e7;
				border-color: #8a63e7;
			}
		}
		.bottom {
			position: absolute;
			bottom: 0;
			line-height: 24px;
			font-size: 14px;
			margin-bottom: 10px;
			.tip {
				vertical-align: middle;
				text-indent: 20px;
				background: url('../../../../assets/image/Provide/web/itip.png') left center no-repeat;
				color: #8a63e7;
			}
		}
	}
</style>