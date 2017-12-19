<!--忘记密码-->
<template>
	<ul class="third_input">
		<li>
			<el-input class="telnum" type="text" v-model="inputaccount" placeholder="重置密码(6-12位字符)，首字母不能为数字..."></el-input>
		</li>
		<li>
			<el-input class="telnum" type="text" v-model="inputaccount" placeholder="确认密码(6-12位字符)，首字母不能为数字..."></el-input>
		</li>
		<li>
			<el-button class="next" @click="confirm()">重置密码</el-button>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				inputaccount:''
			}
		},
		methods: {
			confirm:function(){
				this.$alert('恭喜你注册成功', '注册结果', {
          			confirmButtonText: '确定'
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
			.password{
				width: 185px;
			}
			.next{
				width: 334px;
				height: 42px;
				background: linear-gradient(to right, #7557d1, #8b63e8);
				color: white;
				font-size: 14px;
			}
		}
	}
</style>
