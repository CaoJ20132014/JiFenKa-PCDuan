<template>
	<div class="hello">
		<el-container>
			<el-header>
				<div class="heard_top">
					<div class="top">
						<div class="top_left">杭州天缘网络欢迎您！</div>
						<div class="top_right">
							<el-button @click="gologin()">登录</el-button>
							<img src="../../assets/image/login/wenhao.png" alt="" />
							<span>帮助中心</span>
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
				<div class="problem_box">
					<div class="problem_top">
						<div>网站帮助</div>
					</div>
					<div class="ul_div">
						<el-collapse accordion>
							<el-collapse-item v-for="item in listArr" :key="item.id">
								<template slot="title">
									<div class="li_heard">
										<img src="../../assets/image/help/problem.png" alt="" />
										<span v-text="item.title"></span>
									</div>
								</template>
								<div class="transition_box" v-text="item.content"></div>
							</el-collapse-item>
						</el-collapse>
					</div>
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
				show: "0",
				listArr: [{
					id: '1',
					title: '平台登录',
					content: '手机充值支持移动、联通、电信、虚拟运营商、物联网卡号码充值。批量导入：手机充值、流量充值、Q币、加油卡充值业务都可进行批量充值。如何进行批量导入充值？在“批量导入”页面下载Excel模板；在Excel表格中填写完整的充值信息；导入编辑好的Excel文件；提交充值，查询订单状态。公告：您可实时知晓产品变动、平台更新等信息。'
				}, {
					id: '2',
					title: '充值缴费',
					content: '手机充值支持移动、联通、电信、虚拟运营商、物联网卡号码充值。批量导入：手机充值、流量充值、Q币、加油卡充值业务都可进行批量充值。如何进行批量导入充值？在“批量导入”页面下载Excel模板；在Excel表格中填写完整的充值信息；导入编辑好的Excel文件；提交充值，查询订单状态。公告：您可实时知晓产品变动、平台更新等信息。'
				}, {
					id: '3',
					title: '交易查询',
					content: '手机充值支持移动、联通、电信、虚拟运营商、物联网卡号码充值。批量导入：手机充值、流量充值、Q币、加油卡充值业务都可进行批量充值。如何进行批量导入充值？在“批量导入”页面下载Excel模板；在Excel表格中填写完整的充值信息；导入编辑好的Excel文件；提交充值，查询订单状态。公告：您可实时知晓产品变动、平台更新等信息。'
				}, {
					id: '4',
					title: '财务管理',
					content: '手机充值支持移动、联通、电信、虚拟运营商、物联网卡号码充值。批量导入：手机充值、流量充值、Q币、加油卡充值业务都可进行批量充值。如何进行批量导入充值？在“批量导入”页面下载Excel模板；在Excel表格中填写完整的充值信息；导入编辑好的Excel文件；提交充值，查询订单状态。公告：您可实时知晓产品变动、平台更新等信息。'
				}, {
					id: '5',
					title: '安全中心',
					content: '手机充值支持移动、联通、电信、虚拟运营商、物联网卡号码充值。批量导入：手机充值、流量充值、Q币、加油卡充值业务都可进行批量充值。如何进行批量导入充值？在“批量导入”页面下载Excel模板；在Excel表格中填写完整的充值信息；导入编辑好的Excel文件；提交充值，查询订单状态。公告：您可实时知晓产品变动、平台更新等信息。'
				}, {
					id: '6',
					title: '卡密兑换平台',
					content: '手机充值支持移动、联通、电信、虚拟运营商、物联网卡号码充值。批量导入：手机充值、流量充值、Q币、加油卡充值业务都可进行批量充值。如何进行批量导入充值？在“批量导入”页面下载Excel模板；在Excel表格中填写完整的充值信息；导入编辑好的Excel文件；提交充值，查询订单状态。公告：您可实时知晓产品变动、平台更新等信息。'
				}]
			}
		},
		methods: {
			gologin:function(){
				this.$router.push({
					name: 'accountLogin'
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
	@import '../../style/less/help/help.less';
</style>
