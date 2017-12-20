<template>
  <div>
    <div class="content_top border">
      <div class="head">设置支付密码<small>*系统检测到您尚未设置支付密码，请设置支付密码以保护账户资金安全。</small></div>
    </div>
    <div class="content_bot border">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="设置新密码" prop="pass">
          <img class="keyboard" src="../../../../assets/image/Provide/web/keyboard.png" alt="">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="6位纯数字"></el-input><small>*6位纯数字</small>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkPass">
          <img class="keyboard" src="../../../../assets/image/Provide/web/keyboard.png" alt="">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="6位纯数字"></el-input><small>*6位纯数字</small>
        </el-form-item>
        <el-form-item label="短信验证码" prop="code">
          <el-input v-model.number="ruleForm2.code" style="width:170px;" placeholder="短信验证码"></el-input>
          <el-button type="primary">获取验证码</el-button>
          <small>验证码将发送到{{}}</small>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:296px;" @click="submitForm('ruleForm2')">提交设置</el-button>
        </el-form-item>
      </el-form>
      <div class="bottom">
        <p class="tip">温馨提示</p>
        <p>1.请精准填写所供卡号与密码相对应且真实有效，否则可能导致无法结算，给您带来损失。</p>
        <p>2.全国话费充值卡可指定省份消耗，请精确选择销卡地区，以免给您带来不必要的损失。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          code: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' },
            { min: 6, max: 6, message: '请输入6位数验证码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .content_top{padding: 10px 14px;text-indent: 30px;}
  .content_top .head{height: 26px;line-height: 26px;background: url(../../../../assets/image/Provide/web/lock.png) no-repeat}
  .content_top .head img{margin-right:10px;}
  .content_bot{border-top:none;padding: 50px 20px 10px;min-height:430px;position: relative;}
  small{color: #b5b5b5;margin-left: 10px;}
  .el-form-item{position: relative;}
  .keyboard{position: absolute;z-index: 9;left: 260px;top: 10px;}
  .el-input{width: 296px;margin-right: 10px;}
  .el-input .el-input__inner{background: #f4f4f4;}
  .bottom{
    position: absolute;bottom:0;
    line-height: 24px;font-size: 14px;margin-bottom: 10px;}
  .tip{vertical-align:middle;text-indent:20px;background: url(../../../../assets/image/Provide/web/itip.png) left center no-repeat;color: #8A63E7;}
</style>
