<!--注册页面模板-->
<template>
	<div class="hello">
		<el-container>
			<el-header>
				<div class="heard_top">
					<div class="top">
						<div class="top_left">杭州天缘网络欢迎您！</div>
						<div class="top_right">
							<img src="../../assets/image/login/wenhao.png" alt="" />
							<span>帮助中心</span>
						</div>
					</div>
				</div>
				<div class="heard_bot">
					<div class="bot">
						<div class="top_left">
							<img src="../../assets/image/login/ka_pur.png" class="img1" />
							<img src="../../assets/image/login/jifenka.png" class="img2" />
						</div>
						<div class="top_right">
							<span style="color: #898989;">我已注册，现在就</span>
							<el-button class="login" @click="tologin">登录</el-button>
						</div>
					</div>
				</div>
			</el-header>
			<el-main>
				<el-col :span="24">
					<div class="main_box">
						<div class="img_box">
							<img src="../../assets/image/login/yinying.png"/>
							<div class="info_box">
								<div class="top_pur">注册会员</div>
								<router-view/>
							</div>
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
					<span>联系我们</span>
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
				inputaccount:'',
				show1:true,
				show2:true
			}
		},
		methods: {
			tologin(){
				this.$router.push({
					name: 'accountLogin'
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../style/less/register/index.less';
</style>
