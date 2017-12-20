<template>
  <div>
    <div class="content_top border">
      <div class="head">温馨提示<small>*温馨提示：实名认证绑定本人银行卡，快捷支付加款必须先经过实名认证。</small></div>
    </div>
    <div class="content_bot border">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="真实姓名" prop="name">
          <el-input type="text" v-model="ruleForm2.name" auto-complete="off" placeholder="真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="ids">
          <el-input type="text" v-model="ruleForm2.ids" auto-complete="off" placeholder="身份证号"></el-input>
        </el-form-item>
        <el-form-item label="银行卡号" prop="bankcard">
          <el-input type="text" v-model.number="ruleForm2.bankcard" auto-complete="off" placeholder="请输入银行卡号"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="tel">
          <el-input v-model.number="ruleForm2.tel"  placeholder="请输入银行预留手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:296px;border:1px solid #8A63E7;" @click="submitForm('ruleForm2')">提交</el-button>
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
      const checkID = (rule, value, callback) => {
       let reg=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
        if (!reg.test(value)) {
          return callback(new Error('请输入正确的身份证号'));
        }
      };
      const checkCard = (rule, value, callback) => {
        let reg = /^([1-9]{1})(\d{14}|\d{18})$/;
        if (!reg.test(value)) {
          return callback(new Error('请输入正确的银行卡号'));
        }

      };
      const checkPhone = (rule, value, callback) => {
        let reg=/^1[3|4|5|7|8][0-9]{9}$/;
        if (!reg.test(value)) {
          return callback(new Error('请输入正确的电话号码'));
        }
      };
      return {
        ruleForm2: {
          name: '',
          ids: '',
          bankcard: '',
          tel: ''
        },
        rules2: {
          name: [
            { required: true, message: '请输入您的真实姓名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
         ids: [
            {required: true, min: 15, max: 18,validator: checkID, trigger: 'blur' }
          ],
          bankcard: [
            { required: true,validator: checkCard, trigger: 'blur' },
            { max: 6, message: '请输入6位数验证码', trigger: 'blur' }
          ],
          tel:[
            {required: true, validator: checkPhone, trigger: 'blur' }
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
  .content_top .head{height: 26px;line-height: 26px;background: url(../../../assets/web/lock.png) no-repeat}
  .content_top .head img{margin-right:10px;}
  .content_bot{border-top:none;padding: 50px 20px 10px;min-height:430px;position: relative;}
  small{color: #b5b5b5;margin-left: 10px;}
  .el-input{width: 296px;margin-right: 10px;}
  .el-input .el-input__inner{background: #f4f4f4;}
  .bottom{
    position: absolute;bottom:0;
    line-height: 24px;font-size: 14px;margin-bottom: 10px;}
  .tip{vertical-align:middle;text-indent:20px;background: url(../../../assets/web/itip.png) left center no-repeat;color: #8A63E7;}
</style>
