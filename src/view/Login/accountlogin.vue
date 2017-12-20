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
	export default {
		name: 'HelloWorld',
		data() {
			return {
				checked: false,
				inputaccount: "",			// 账号
				inputpwd: ""				// 密码
			}
		},
		methods: {
			Click:function(){
				console.log(111)
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
			confirmlogin:function(){
				this.$router.push({
					name: 'defaultindex'
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../assets/less/Login/account.less';
</style>
