<template>
  <div>
    <div class="header">
      <p>批量导入（温馨提示：本功能常用于<span>不同面值的多号码批量充值</span>，每次至多10000条）</p>
    </div>
    <el-steps :active="2" align-center>
      <el-step title="上传充值列表"></el-step>
      <el-step title="确认充值信息"></el-step>
      <el-step title="受理成功，等待充值结果!"></el-step>
    </el-steps>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 1
      };
    },
    methods: {

    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .header {
    .lang(100%, 50px);
    .bg-color(#f4faff);
    .margin(18px, 0, 0, 0);
    .border(#d8eaf9);
    line-height: 50px;
    p {
      .margin(0, 0, 0, 31px);
      span {
        color: #f7a833;
      }
    }
  }

  .el-steps {
    .lang(625px, 60px);
    .margin(24px, 0, 0, 155px);
  }
</style>


