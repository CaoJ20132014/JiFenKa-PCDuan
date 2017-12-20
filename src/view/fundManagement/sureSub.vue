<template>
  <div class="con">
    <table>
      <tr>
        <td>汇款人姓名</td>
        <td>小贝</td>
        <td>收款方姓名</td>
        <td>余香</td>
      </tr>
      <tr>
        <td>汇款账号</td>
        <td>6007 0003 3002 2395 468</td>
        <td>收款方账号</td>
        <td>6222 0002 6451 8925 481</td>
      </tr>
      <tr>
        <td>加款金额</td>
        <td>1元</td>
        <td>收款方银行</td>
        <td>农业银行</td>
      </tr>

    </table>
    <el-button @click="back">上一步</el-button>
    <el-button @click="sub">确认提交</el-button>
    <el-button @click="cancel">取消</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      //确认提交
      sub(){
           this.$confirm('银行转账信息提交成功', '消息提示', {
          confirmButtonText: '确定',
          type: 'success'
        }).then(() => {
           this.$router.push({
          path: "/to/revoke"
        });
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '提交成功'
          });
        });
      },
      //上一步
      back(){
         this.$router.push({
          path: "/to/remittance"
        });
      },
      //取消
      cancel(){
         this.$router.push({
          path: "/to/agriculture"
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .con{
    width: 1120px;
    text-align: center;
  }
  table{
    .lang(950px,145px);
    .margin(120px,0,0,83px);
    border-top:1px solid #ebeef5;
    border-left:1px solid #ebeef5;
    tr:nth-child(odd){
       .bg-color(#fafafa);
    }
    td{
      border-right: 1px solid #ebeef5;
       border-bottom: 1px solid #ebeef5;
    }
  }
  .el-button {
    .bg-color(@color);
    color: white;
    .lang(90px, 36px);
    .margin(48px,18px,0,0);
    &:nth-child(3) {
      .lang(120px, 36px);
    }
  }
</style>


