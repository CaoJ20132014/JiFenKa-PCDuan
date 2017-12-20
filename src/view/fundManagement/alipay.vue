<template>
  <div class="con">
    <div class="header">
      <span class="title1">支付宝支付</span>
    </div>
    <div class="content">
      <el-form :label-position="labelPosition" label-width="90px" :model="form">
        <el-form-item label="公司名称:">
          <span style="color:#494949">杭州天缘网络技术有限公司</span>
        </el-form-item>
        <el-form-item label="支付宝账号:">

          <span style="color:#494949">tianyuan@126.com</span>
        </el-form-item>
        <el-form-item label="付款二维码:">
          <el-input placeholder="获取二维码支付宝转账" :disabled="true" v-model="form.sure">
          </el-input>

        </el-form-item>
        <el-form-item label="订单号:">
          <el-input placeholder="请输入支付宝订单号" v-model="form.code">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="color:white;background:#8a63e7" @click="sure">确定</el-button>
        </el-form-item>
        <p style="color:red;margin-top:40px">*转账成功后输入支付宝订单号确认，您也可以在充值后和我们的客服联系。</p>
      </el-form>
        <div class="shili">
          <span>订单示例:</span>
          <img src="../../assets/image/fundManagement/shili.png" alt="">
        </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        form: {
          original: '',
          new: '',
          sure: '',
          code: ''
        }
      };
    },
    methods: {
      sure(){
         this.$confirm('支付成功！', '消息提示', {
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '支付成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '支付成功'
          });
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .con {
    .lang(1120px, 445px);
    .bg-color(#fafafa);
    .margin(25px, 0, 0, 0);
    position: relative;
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
      .el-form {
        display: inline-block;
      }
      .el-form-item {
        .margin(10px, 0, 0, 0);
        span {
          color: #989898;
          .margin(0, 0, 0, 40px);
        }
        .el-input {
          .lang(278px, 38px);
          .margin(0, 0, 0, 40px);
        }
        .el-button {
          .lang(133px, 42px);
          .border(@color);
          .margin(40px,0,0,40px);
        }
      }
      .shili{
        display: inline-block;
        img{
          // vertical-align: top;
          position: absolute;
           top: 90px;
           right:200px;
        }
        span{
          position: absolute;
          top: 86px;
        }
      }
    }
  }
</style>


