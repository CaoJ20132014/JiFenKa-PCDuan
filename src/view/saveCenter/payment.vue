<template>
  <div>
    <div class="header">
      <img src="../../assets/image/saveCenter/setLogin.png" alt="">
      <span>设置支付密码</span><span style="font-size: 14px;color:#dcdcdc">*系统检测到您尚未设置支付密码，请设置支付密码以保护账户资金安全。</span>
    </div>
    <div class="content">
      <el-form :label-position="labelPosition" label-width="90px" :model="form">
        <el-form-item label="原始密码:">
          <el-input placeholder="原密码" suffix-icon="el-icon-date" v-model="form.original">
          </el-input>
          <span>*6位纯数字</span>
        </el-form-item>
        <el-form-item label="重置新密码:">
          <el-input placeholder="6位纯数字" suffix-icon="el-icon-date" v-model="form.new">
          </el-input>
          <span>*6位纯数字</span>
        </el-form-item>
        <el-form-item label="确认新密码:">
          <el-input placeholder="确认新密码" suffix-icon="el-icon-date" v-model="form.sure">
          </el-input>
          <span>*6位纯数字</span>
        </el-form-item>
        <el-form-item label="短信验证码:">
          <el-input placeholder="短信验证码" v-model="form.code" style="width:174px;">
          </el-input>
          <el-button class="obtain">获取验证码</el-button>
          <span>验证码将发送到：18335833692</span>
        </el-form-item>
        <el-form-item>
          <el-button style="color:white;background:#8a63e7" @click="sub">提交设置</el-button>
          <el-button style="background:white;color:#8a63e7" @click="cancle">取消设置</el-button>
        </el-form-item>
      </el-form>

      <div class="notice">
        <p>支付密码需要注意以下几点：</p>
        <p>1.支付密码是当您进行充值缴费或其他涉及 资金变动的操作时，保护您的账户资金安 全，可在“安全中心”—“账号保护”—“ 支付密码”中开启；
        </p>
        <p>2.如您未开启支付密码，将会影响您的支付 额度，所有产品的最高支付总额为500元 RMB；
        </p>
        <p>3.如有其他问题，可咨询我公司商务 QQ：2355790408 电话：18615008826.
        </p>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'left',
        form: {
          original: '',
          new: '',
          sure: '',
          code: ''
        }
      };
    },
    methods: {
      //提交设置
      sub() {

      },
      //取消设置
      cancle() {
        this.$router.push({
          path: '/to/5'
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .header {
    .margin(30px, 0, 0, 35px);
    img {
      vertical-align: middle;
    }
    span {
      .margin(0, 0, 0, 8px);
    }
  }

  .content {
    width: 1050px;
    .margin(27px, 0, 0, 70px);
    .el-form {
      display: inline-block;
    }
    .el-form-item {
      .margin(22px, 0, 0, 0);
      span {
        color: #989898;
        .margin(0, 0, 0, 14px);
      }
      .el-input {
        .lang(278px, 38px);
      }
      &:last-child {
        .el-input {
          .lang(174px, 38px);
        }
      }
      .el-button {
        .lang(133px, 42px);
        .border(@color);
      }
      .obtain {
        .lang(90px, 38px);
        .bg-color(@color);
        .margin(0, 0, 0, 12px);
        color: white;
      }
    }
  }

  .notice {
    .lang(285px, 268px);
    border: 3px solid #f4f4f4;
    display: inline-block;
    border-radius: 4px;
    .margin(25px, 0, 0, 157px);
    position: absolute;
    font-size: 14px;
    p {
      .margin(16px, 0, 0, 10px);
      &:first-child {
        color: @color;
      }
    }
  }
</style>



