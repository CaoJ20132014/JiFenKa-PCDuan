<template>
  <div class="con">
    <div class="header">
      <span class="title1">绑定银行卡</span>
    </div>
    <div class="content">
      <el-form  label-width="90px" :model="form">
        <el-form-item label="汇款名称:">
          <el-input placeholder="请输入真实姓名"  v-model="form.name">
          </el-input>

        </el-form-item>
        <el-form-item label="汇款账号:">
          <el-input placeholder="请输入银行卡号"  v-model="form.card">
          </el-input>

        </el-form-item>
        <el-form-item label="身份证号:">
          <el-input placeholder="请输入身份证号"  v-model="form.ID">
          </el-input>

        </el-form-item>
         <el-form-item label="手机号码:">
          <el-input placeholder="请输入银行预留手机号"  v-model="form.tel">
          </el-input>
        </el-form-item>
        <el-form-item label="短信验证码:">
          <el-input placeholder="请输入短信验证码" v-model="form.code" style="width:195px">
          </el-input>
          <el-button class="obtain">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button style="color:white;background:#8a63e7" @click="sure_sub">提交</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form:{
          name:"",//姓名
          card:"",//银行卡号
          ID:"",//身份证号
          tel:"",//手机号码
          code:""//短信验证码
        }

      };
    },
    methods: {
      sure_sub(){
        console.log(this.form);
        //  this.$router.push({path:"/to/sureSub"});
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .con {
    .lang(1120px, 489px);
    .bg-color(#fafafa);
    .margin(25px, 0, 0, 0);
    .header {
      height: 50px;
      .border(#e9e9e9);
      .title1 {
        width: 120px !important;
        .margin(13px, 0, 0, 20px);
        .lang(93px, 25px);
        text-align: center;
        display: inline-block;
        font-size: 16px;
        color: #494949;
        border-left: 3px solid #7b5bc7;
      }
    }
    .content {
      width: 1050px;
      .margin(20px, 0, 0, 70px);
      .el-form-item {
      .margin(20px, 0, 0, 0);
      span {
        color: #989898;
        .margin(0, 0, 0, 14px);
      }
      .el-form-item:last-child {
        .el-input {
          .lang(195px, 32px);
        }
      }
      .el-button {
        .lang(120px, 36px);
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
      .lang(298px, 32px);
    }
    .el-input--suffix .el-input__inner{
      .bg-color(#f4f4f4);
    }
    }
  }
</style>


