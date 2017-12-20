<template>
	<div>
    <div class="content_top border">
      <div class="head">账户信息</div>
    </div>
    <div class="content_bot border">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">安全中心</el-menu-item>
        <el-menu-item index="2">加密工具</el-menu-item>
      </el-menu>
      <div class="account">
        <div class="icon-box">
          <img src="../../../../assets/image/Provide/web/account.png" alt="">
        </div>
        <div class="form-info">
          <div class="header-tip">
            <div class="tip">您尚未实名认证</div>
             <el-button type="warning" style="height: 34px;line-height: 0;" @click="confirm">立即认证</el-button>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" :label-position="labelPosition" class="ruleForm" size="small">
            <el-form-item label="供货商类型"  prop="type">
              <el-select v-model="ruleForm.type" placeholder="请选择供应商类型">
                <el-option label="一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公司名称"  prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话"  prop="tel">
              <el-input v-model="ruleForm.tel"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      var reg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (!reg.test(value)) {
        return callback(new Error("请输入正确的电话号码"));
      }
      //        setTimeout(() => {
      //
      //        }, 1000);
    };
    return {
      activeIndex: "1",
      labelPosition: "left",
      ruleForm: {
        type: "",
        name: "",
        tel: ""
      },
      rules: {
        type: [{ required: true, message: "请至少选择一个类型", trigger: "change" }],
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        tel: [{ required: true, validator: checkPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    confirm: function() {
      this.$router.push({ path: "safe/realname" });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.content_top {
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: none;
}
.head {
  border-left: 3px solid #7b5bc7;
  margin-left: 20px;
  padding-left: 12px;
  background-image: none;
}
.content_bot {
  padding: 0 40px;
  height: 487px;
}
.account {
  margin-top: 25px;
}
.icon-box {
  position: relative;

  display: inline-block;
  width: 90px;
  vertical-align: top;
}
.icon-box img {
  margin-left: 10px;
}
.form-info {
  width: 670px;
  display: inline-block;
}
.header-tip,
.foot {
  width: 670px;
}
.header-tip {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
  padding-top: 10px;
}
.ruleForm {
  width: 350px;
  margin-top: 20px;
}
.el-input .el-input__inner {
  background: #fff;
}
.foot p {
  line-height: 30px;
}
.foot {
  padding: 10px 0;
  border-top: 1px solid #e6e6e6;
}
.foot span {
  margin-right: 10px;
}
.foot small {
  color: #b5b5b5;
}
.foot a {
  float: right;
}
.el-select {
  width: 200px;
}
.el-form-item {
  margin-bottom: 25px;
}
</style>
