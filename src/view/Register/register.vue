<!--忘记密码确认密码-->
<template>
	<ul class="third_input">
		<li>
			<el-input class="telnum" type="text" v-model="inputaccount" placeholder="请输入手机号(账号)..."></el-input>
		</li>
		<li>
			<el-input class="password" type="text" v-model="inputaccount" placeholder="输入右侧验证码..."></el-input>
		</li>
		<li>
			<el-input class="password" type="text" v-model="inputaccount" placeholder="短信验证码..."></el-input>
			<el-button class="getcode">获取验证码</el-button>
		</li>
		<li>
			<el-checkbox v-model="checked">我已阅读并接受</el-checkbox><span>注册条款</span>
		</li>
		<li>
			<el-button class="next" @click="next()">下一步</el-button>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				checked: false,
				inputaccount:''
			}
		},
		methods: {
			next:function(){
				this.$router.push({
					name: 'registerSuccess'
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	ul.third_input{
		width: 334px;
		padding-top: 24px;
		margin: 0 auto;
		li{
			padding-top: 20px;
			list-style: none;
			&:nth-child(4) span{
				color: #7b5bc7;
				font-size: 14px;
			}
		}
		.password{
			width: 185px;
		}
		.getcode{
			width: 127px;
			height: 40px;
			background: linear-gradient(to right, #7557d1, #8b63e8);
			color: white;
			margin-left: 16px;
		}
		.next{
			width: 334px;
			height: 42px;
			background: linear-gradient(to right, #7557d1, #8b63e8);
			color: white;
			font-size: 14px;
		}
	}
</style>