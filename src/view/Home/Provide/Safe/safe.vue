<template>
    <div class="box border">
		<div class="content_top">
			<div class="head">账户信息</div>
		</div>
		<div class="content_bot">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
				<el-menu-item index="1">安全中心</el-menu-item>
				<!-- <el-menu-item index="2">加密工具</el-menu-item> -->
			</el-menu>
			<div class="account">
				<div class="icon-box">
					<img src="../../../../assets/image/Provide/web/account.png" alt="">
				</div>
				<div class="form-info">
					<div class="header-tip" v-if="isShow">
						<div class="tip">您尚未实名认证</div>
						<el-button type="warning" style="height: 34px;line-height: 0;" @click="confirm">立即认证</el-button>
					</div>
					<div class="header-tip2" v-else>
						<div class="tips">姓名：<span>{{name}}</span></div>
						<div class="tips">身份证：<span>{{idCard}}</span></div>
					</div>
					<el-form :model="ruleForm" status-icon :rules="Rules" ref="ruleForm" label-width="100px" class="ruleForm" size="small">
						<el-form-item label="供货商类型"  prop="type">
							<el-select v-model="ruleForm.type" placeholder="请选择供应商类型">
								<el-option label="个人" value="1"></el-option>
								<el-option label="公司" value="2"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item v-show="ruleForm.type=='2'" label="公司名称" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="联系电话" prop="tel">
							<el-input type="number" v-model="ruleForm.tel" :maxlength="11"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submitForm('ruleForm')" @keydown.enter.tab.stop.self="submitForm('ruleForm')" class="build" :disabled="isDisabled">立即创建</el-button>
						</el-form-item>
					</el-form>
					<div class="foot">
						<p><span>登录密码</span><small>用于平台登录时所需密码</small><router-link to="safe/loginpsd">修改</router-link></p>
						<p><span>支付密码</span><small>用于账户资金支付和交易时所需的支付密码</small><router-link to="safe/paypsd">设置</router-link></p>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
	import Public from '@/until/until';
	import { judge, userType } from '@/until/getData';
	export default {
		data() {
			let checkPhone = (rule, value, callback) => {
				if (!Public.isTel(value)) {
					return callback(new Error('请输入正确手机号码'));
				} else{
					callback();
				}
			};
			return {
				isShow: true,
				activeIndex: '1',
				isDisabled: false,
				ruleForm:{
					type: '1',
					name: '',
					tel: '',
				},
				name: '',
				idCard: '',
				Rules: {
					// type: [
					// 	{  required: true, message: '请至少选择一个类型', trigger: 'change' }
					// ],
					// name: [
					// 	{ required: true, message: '请输入公司名称', trigger: 'blur' },
					// 	{ min: 2, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					// ],
					tel: [
						{required: true, validator: checkPhone, trigger: 'blur' }
					]
				},
			}
		},
		mounted () {
			judge().then(res => {
				if (res.code == '1') {
					if (res.list.check == 1) {
						this.isShow = false;
						this.name = res.list.name;
						this.idCard = res.list.idcard;
					} else {
						this.isShow = true;
					}
				}
			}).catch(err => {
				// console.log(err);
			});
		},
		methods: {
			confirm: function () {
				this.$router.push({ path: 'safe/realname' });
			},
			submitForm(formName) {
				this.isDisabled = true;
				this.$refs[formName].validate((valid) => {
					if (valid) {
						let data = {
							state: this.ruleForm.type,
							tel: this.ruleForm.tel
						}
						if (this.ruleForm.type == '2') {
							data['company'] = this.ruleForm.name
						}
						userType(data).then(res => {
							// console.log(res);
							if (res.code == '1') {
								Public.topAlert('success', res.msg);
							} else {
								Public.topAlert('warning', res.msg);
							}
						}).catch(err => {
							// console.log(err);
						});
					} else {
						return false;
					}
				});
				setTimeout(() => {
					this.isDisabled = false;
				}, 1000);
			}
		}
  	}
</script>
<style lang="less" scoped>
	.box{
		height: 538px;
		.content_top{
			padding-top:14px;
			padding-bottom:14px;
			border-bottom: 1px solid #eeeeee;
			.head{
				border-left: 3px solid #7b5bc7;
				margin-left: 20px;
				padding-left:12px;
				background-image:none ;
			}
		}
		.content_bot{
			padding: 0 40px;
			.el-menu-item.is-active{
				border-bottom: 2px solid #7b5bc7;
			}
			.account{
				margin-top:25px;
				.icon-box{
					position: relative;
					display: inline-block;
					width: 90px;
					vertical-align: top;
					img{
						margin-left:10px;
					}
				}
				.form-info{
					width: 670px;
					display: inline-block;
					.header-tip{
						width: 670px;
						line-height: 34px;
						display: flex;
						justify-content: space-between;
						border-bottom: 1px solid #e6e6e6;
						padding-bottom: 10px;
						padding-top: 10px;
					}
					.header-tip2{
						display: flex;
						border-bottom: 1px solid #e6e6e6;
						padding-bottom: 10px;
						padding-top: 10px;
						line-height: 34px;
						.tips{
							margin-right: 20px;
							span{
								color: red;
							}
						}
					}
					.foot{
						width: 670px;
						padding: 10px 0;
						border-top:1px solid #e6e6e6;
						p{
							line-height: 30px;
						}
						span{
							margin-right: 10px;
						}
						small{
							color: #b5b5b5;
						}
						a{
							float:right;
						}
					}
					.ruleForm{
						width: 350px;
						margin-top:20px;
						.el-input {
								.el-input__inner{
								background: #fff;
							}
						}
						.el-form-item{
							margin-bottom: 25px;
							.el-select{
								width: 200px;
							}
							.build{
								background-color: #7b5bc7;
								border-color: #7b5bc7;
							}
						}
					}
				}
			}
		}
	}
</style>
