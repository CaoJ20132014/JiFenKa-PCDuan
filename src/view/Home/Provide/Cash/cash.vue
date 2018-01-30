<template>
	<div class="cash_box border">
		<div class="box_top">
			<div>我要提现</div>
		</div>
		<div class="box_bot">
			<div class="left">
				<div class="top">
					<div class="lable">提现渠道：</div>
					<div class="radio">
						<div class="public">
							<el-radio v-model="radio" label="1">集分卡余额</el-radio>
							<img src="../../../../assets/image/Provide/kuaisu.png" height="22" width="67">
							<img src="../../../../assets/image/Provide/wuxian.png" height="22" width="50">
						</div>
						<div class="public">
		  					<el-radio v-model="radio" label="2">银行卡提现</el-radio>
							<img src="../../../../assets/image/Provide/kuaisu.png" height="22" width="67">
							<img src="../../../../assets/image/Provide/wuxian.png" height="22" width="50">
						</div>
					</div>
				</div>
				<div class="bank_box" v-show="radio == 2">
					<div v-for="item in items" :key="item.id" class="card border" :class="{bg:cheacked == item.id}" @click="click(item)">
						<div class="name">{{item.name}}</div>
						<div class="cardNum">{{item.num.substr(0, 4) + "***********" + item.num.substr(15)}}</div>
					</div>
				</div>
				<el-button @click="addCard" v-show="radio == 2">添加银行卡</el-button>
				<div id="cash">
					<div class="lable">提现金额：</div>
					<div>
						<el-input placeholder="请输入提现金额" type="number" v-model="input1" :class="{'grey':input1 == ''}"></el-input>
					</div>
				</div>
				<p class="totalmoney">可提现金额:<span class="pur_font">{{totalmoney.toFixed(2)}}</span>元。<span class="pur_font" @click="all">全部提现</span></p>
				<div id="cash">
					<div class="lable">支付密码：</div>
					<div>
						<el-input placeholder="请输入支付密码" v-model="input2" :class="{'grey':input2 == ''}" :type="pwdType">
							<i class="el-input__icon iconfont" :class="[flag ? 'icon-yanjing1':'icon-yanjing-copy']" slot="suffix" @click="flag = !flag,changeType()"></i>
						</el-input>
					</div>
					<div class="forget pur_font" @click="forget">忘记密码</div>
				</div>
				<div class="commit">
					<el-button @click="commitInfo">确认提交</el-button>
				</div>
			</div>
			<div class="right">
				<div class="outside border">
					<div class="center border">
						<div class="rules">
							<img src="../../../../assets/image/Provide/i.png" height="17" width="17">
							<span>提现规则</span>
						</div>
						<p>
							1.提现到集分卡余额，及时到账，无需等待。<br>
							2.提现金额不能大于供货余额。<br>
							3.银行卡提现预计1小时内到账。<br>
							4.提现失败，请及时联系<span>电话客服</span>。<br>
							5.提现审核时间：8:00-22:00。<br>
							<span>6.每日23:00至次日凌晨00:00为系统结账时间，此时间段内请勿提现。</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio:'1',
				pwdType:'password',
				flag: false,            // 用于判断显示什么图标
				totalmoney:1000.88,
				cheacked:'',
				input1:'',				// 提现金额
				input2:'',				// 支付密码
				items:[{
					id:1,
					name:'中国银行',
					num:'1234567891234567899'
				}, {
					id:2,
					name:'中国银行',
					num:'1234567891234567899'
				}]
			}
		},
		methods:{
			click(item){
				this.cheacked = item.id;
			},
			addCard(){
				this.$router.push({
					name: 'AddCard'
				});
			},
            changeType(){
                if (this.pwdType == "password") {
                    this.pwdType = "text";
                } else {
                    this.pwdType = "password"
                }
			},
			all(){
				this.input1 = this.totalmoney;
			},
			commitInfo(){
				this.$confirm('是否继续提交?', '消息提示', {
	          		confirmButtonText: '确定',
	          		cancelButtonText: '取消',
	          		type: 'warning'
	        	}).then(() => {
	          		this.$message({
	            		type: 'success',
	            		message: '提交成功!'
	          		});
	        	}).catch(() => {
	          		this.$message({
	            		
	          		});          
	        	});
			},
			forget(){
				this.$router.push({
					name: 'paypsd'
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../../style/less/Provide/cash/index.less';
</style>