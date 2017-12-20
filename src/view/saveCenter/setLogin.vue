<template>
  <div>
    <div class="header">
      <img src="../../assets/image/saveCenter/setLogin.png" alt="">
      <span>修改登录密码</span>
    </div>
    <div class="content">
      <el-form :label-position="labelPosition" label-width="90px" :model="form">
        <el-form-item label="原始密码:">
          <el-input placeholder="原密码" suffix-icon="el-icon-date" v-model="form.original">
          </el-input>
          <span>6-12位字符，首字母不为数字</span>
        </el-form-item>
        <el-form-item label="重置新密码:">
          <el-input placeholder="6-12位字符，首字母不为数字" suffix-icon="el-icon-date" v-model="form.new">
          </el-input>
          <span>6-12位字符，首字母不为数字</span>
        </el-form-item>
        <el-form-item label="确认新密码:">
          <el-input placeholder="确认新密码" suffix-icon="el-icon-date" v-model="form.sure">
          </el-input>
          <span>6-12位字符，首字母不为数字</span>
        </el-form-item>
        <el-form-item label="短信验证码:">
          <el-input placeholder="短信验证码" v-model="form.code" style="width:174px">
          </el-input>
          <el-button class="obtain">获取验证码</el-button>
          <span>验证码将发送到：18335833692</span>
        </el-form-item>
        <el-form-item>
          <el-button style="color:white;background:#8a63e7" @click="sub">提交设置</el-button>
          <el-button style="background:white;color:#8a63e7" @click="cancle">取消设置</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'left',
        form: {
          original: '', //原密码
          new: '', //新密码
          sure: '', //确认密码
          code: '' //短信验证码
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
    .margin(27px, 0, 0, 70px);
    .el-form-item {
      .margin(22px, 0, 0, 0);
      span {
        color: #989898;
        .margin(0, 0, 0, 14px);
      }
      .el-form-item:last-child {
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
    .el-input {
      .lang(278px, 38px);
    }
    .el-input--suffix .el-input__inner {
      .bg-color(#f4f4f4);
    }
  }
</style>



