<template>
	<div class="bankcard_box border" id="bankcard">
		<div class="box_top">
			<img src="../../../assets/bankcard.png" height="21" width="28">
			<span>验证银行卡信息</span>
		</div>
		<div class="box_bot">
			<div class="common">
				<div class="lable">身份证号：</div>
				<el-input placeholder="请输入身份证号" :maxlength='18' v-model="input1" :class="{'grey':input1 == ''}"></el-input>
			</div>
			<div class="common">
				<div class="lable">真实姓名：</div>
				<el-input placeholder="请输入真实姓名" v-model="input2" :class="{'grey':input2 == ''}"></el-input>
			</div>
			<div class="common">
				<div class="lable">银行卡号：</div>
				<el-input placeholder="请输入银行卡号" v-model="input3" :maxlength='19' :class="{'grey':input3 == ''}" @change="changelength"></el-input>
			</div>
			<div class="common">
				<el-button @click="confirmcommit">确定</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  	data() {
	    	return {
	      		input1: "",			// 身份证号
	      		input2: "",			// 真实姓名
	      		input3: ""			// 银行卡号
	    	};
	  	},
	  	methods: {
	    	changelength() {
	      		if (this.input3.length == 19) {
	          		this.input3 = this.input3.substr(0, 4) + "***********" + this.input3.substr(15);
	      		}
	    	},
	    	confirmcommit(){

	    	},
	    	isCardID(sId) {
		      	let iSum = 0;
		      	let info = "";
		      	if (!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
		      	sId = sId.replace(/x$/i, "a");
		      	if (aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
		      	sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
		      	let d = new Date(sBirthday.replace(/-/g, "/"));
		      	if (sBirthday != d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())
		        	return "身份证上的出生日期非法";
		      	for (let i = 17; i >= 0; i--)
		        	iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
		      	if (iSum % 11 != 1) return "你输入的身份证号非法";
		      	//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
		      		return true;
		    	}
		  	}
		};
</script>

<style scoped>
	.bankcard_box {
	  	width: 988px;
	  	height: 538px;
	}
	.bankcard_box .box_top {
	  	height: 37px;
	  	border-bottom: 1px solid #e9e9e9;
	  	padding-top: 12px;
	}
	.bankcard_box .box_top img {
	  	margin-left: 20px;
	  	margin-top: 2px;
	}
	.bankcard_box .box_top span {
	  	text-align: center;
	  	line-height: 25px;
	  	font-size: 16px;
	  	color: #898989;
	  	vertical-align: top;
	}
	.bankcard_box .box_bot {
	  	width: 908px;
	  	height: 490px;
	  	padding: 0 40px;
	}
	.box_bot .common {
	  	display: flex;
	  	margin-top: 22px;
	}
	.box_bot .common:first-child {
	  	margin-top: 45px;
	}
	.common .lable {
	  	width: 90px;
	  	height: 40px;
	  	line-height: 40px;
	  	color: #494949;
	}
	.common .el-button.el-button--default {
	  	width: 280px;
	  	height: 40px;
	  	margin-left: 90px;
	  	background-color: #8a63e7;
	  	border-color: #8a63e7;
	  	color: white;
	  	margin-top: 10px;
	}
</style>