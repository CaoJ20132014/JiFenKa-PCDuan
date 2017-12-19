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
							<img src="../../../assets/kuaisu.png" height="22" width="67">
							<img src="../../../assets/wuxian.png" height="22" width="50">
						</div>
						<div class="public">
		  					<el-radio v-model="radio" label="2">银行卡提现</el-radio>
							<img src="../../../assets/kuaisu.png" height="22" width="67">
							<img src="../../../assets/wuxian.png" height="22" width="50">
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
							<img src="../../../assets/i.png" height="17" width="17">
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

<style scoped>
	.cash_box{
		width: 988px;
		height: 538px;
	}
	.cash_box .box_top{
		height: 37px;
		border-bottom: 1px solid #e9e9e9;
		padding-top: 12px;
	}
	.cash_box .box_top div{
		width: 94px;
		height: 25px;
		border-left: 3px solid #7b5bc7;
		text-align: center;
		line-height: 25px;
		font-size: 16px;
		margin-left: 20px;
		color: #898989;
	}
	.cash_box .box_bot{
		width: 908px;
		height: 444px;
		padding: 44px 40px 0;
		display: flex;
	}
	.box_bot .left{
		width: 613px;
		height: 100%;
	}
	.left .top{
		display: flex;
	}
	.left .public{
		height: 22px;
	}
	.left .public:nth-child(2){
		margin-top: 15px;
	}
	.left .lable{
		height: 59px;
		color: #494949;
	}
	.left .radio{
		height: 59px;
	}
	.public .el-radio{
		vertical-align: top;
		margin-top: 3px;
		font-size: 16px;
	}
	.bank_box{
		width: 350px;
		padding-left: 82px;
		padding-top: 22px;
		display: inline-block;
	}
	.el-button.el-button--default{
		vertical-align: top;
		float: right;
		margin-top: 22px;
		height: 42px;
		margin-right: 40px;
	}
	.forget{
		line-height: 40px;
		padding-left: 20px;
		font-size: 14px;
	}
	.commit{
		height: 56px;
	}
	.commit .el-button.el-button--default{
		float: left;
		height: 40px;
		width: 100px;
		padding: 0;
		margin-left: 80px;
		color: white;
		border-color: #a062e0;
		background-color: #a062e0; 
	}
	.bank_box .card{
		display: flex;
		width: 347px;
		height: 40px;
		color: #494949;
		margin-bottom: 10px;
		cursor: pointer;
	}
	.card .name{
		width: 109px;
		height: 30px;
		line-height: 30px;
		margin-top: 5px;
		text-align: center;
		border-right: 1px solid #e9e9e9;
	}
	.card .cardNum{
		width: 238px;
		height: 30px;
		line-height: 30px;
		margin-top: 5px;
		text-align: center;
	}
	#cash{
		display: flex;
		margin-top: 15px;
	}
	#cash .lable{
		width: 80px;
		height: 40px;
		line-height: 40px;
	}
	.totalmoney{
		padding-left: 80px;
		padding-top: 5px;
		font-size: 14px;
	}
	.pur_font{
		color: #a062e0;
		cursor: pointer;
	}
	.box_bot .right{
		width: 295px;
		height: 100%;
	}
	.outside{
		width: 293px;
		height: 218px;
		border-radius: 3px;
		background-color: #f4f4f4;
	}
	.center{
		width: 285px;
		height: 210px;
		border-radius: 3px;
		background-color: white;
		margin: 3px auto 0;
	}
	.center p{
		font-size: 14px;
		padding-left: 10px;
		padding-top: 10px;
		line-height: 20px;
	}
	.center p span{
		color: #f7a833;
	}
	.rules{
		height: 17px;
		font-size: 14px;
		color: #7b5bc7;
		line-height: 17px;
		padding-top: 15px;
		padding-left: 10px;
	}
	.rules span{
		vertical-align: top;
		line-height: 17px;
	}
	.bg{
		background-image: url(../../../assets/pur_bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		border-color: #a062e0;
	}
	.bg div{
		color: #a062e0;
	}
</style>