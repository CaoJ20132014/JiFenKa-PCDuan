<template>
  <div>
    <div class="grade">
      <p>安全级别:</p>
      <el-rate v-model="value5" disabled text-color="#ff9900">
      </el-rate>
      <p>{{grade}}</p>
    </div>
    <div class="list">
      <div class="item">
        <img src="../../assets/image/saveCenter/member.png" alt="">
        <div class="prompt">
          <p>登录密码</p>
          <p>用于平台账号登录时所需密码。</p>
        </div>
        <router-link to="/to/setLogin">修改</router-link>
      </div>
      <div class="item">
        <img src="../../assets/image/saveCenter/login.png" alt="">
        <div class="prompt">
          <p>支付密码</p>
          <p>用于账户资金支付和交易时所需密码</p>
        </div>
        <router-link to="/to/payment">修改</router-link>
        <router-link to="/to/basicSet">停用</router-link>
      </div>
      <div class="item">
        <img src="../../assets/image/saveCenter/log.png" alt="">
        <div class="prompt">
          <p>操作日志</p>
          <p>用户可按时间段查询平台使用记录</p>
        </div>
        <router-link to="/to/seeLog">查看</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value5: 3,
        grade: "高"
      };
    },
    mounted() {
      this.$parent.a = true;
    },
    methods: {}
  };
</script>
<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .grade {
    .margin(35px, 0, 0, 30px);
    p {
      display: inline-block;
    }
    .el-rate {
      display: inline-block;
    }
  }
  .list {
    .lang(1117px, 308px);
    .border(#e9e9e9);
    .margin(30px, 0, 0, 0);
    .bg-color(#fafafa);
    .item {
      .lang(1050px, 102px);
      border-bottom: 1px dotted #e9e9e9;
      .margin(0px, 0, 0, 33px);
      // line-height: 102px;
      img {
        .margin(38px, 0, 0, 10px);
        display: inline-block;
      }
      div {
        display: inline-block;
        &:nth-child(3),
        &:nth-child(4) {
          float: right;
          .margin(35px, 18px, 0, 0);
          .lang(108px, 34px);
          .border(#e9e9e9);
          text-align: center;
          line-height: 34px;
          .bg-color(white);
        }
        ;
      }
      a {
        float: right;
        .margin(35px, 18px, 0, 0);
        .lang(108px, 34px);
        .border(#e9e9e9);
        text-align: center;
        line-height: 34px;
        .bg-color(white);
      }
      .prompt {
        .margin(15px, 0, 0, 25px);
        line-height: 30px;
        p {
          color: #393939;
          &:last-child {
            color: #898989;
          }
        }
      }
    }
  }
</style>



