<template>
  <div class="con">
    <div class="header">
      <span class="title1">银行卡管理</span>
    </div>
    <div class="content">
      <div class="binding nong" @click="check(1)" :class="{bg2:cheacked == 1}">
        <img src="../../assets/image/fundManagement/agriculture1.png" alt="">
        <p style="color:#494949">**** **** **** 4518</p>
      </div>
      <div class="binding" @click="binding">
        <p>+</p>
        <p>绑定银行卡</p>
      </div>
      <el-button style="background:white;color:#8a63e7" @click="go">上一步</el-button>
      <div class="cozy">
        <p><img src="../../assets/image/fundManagement/cozy.png" alt=""><span>温馨提示</span></p>
        <p>1.每月只能进行一次删除银行卡操作， 删除时请联系我司商务。</p>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        cheacked:0
      };
    },
    methods: {
      check(m){
        console.log(m);
        this.cheacked = m;
      },
      go() {
        this.$router.push({
          path: "/to/agriculture"
        });
      },
      binding() {
        this.$router.push({
          path: "/to/binding"
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
    .header {
      height: 50px;
      .border(#e9e9e9);
      .title1 {
        width: 100px !important;
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
      .binding {
        display: inline-block;
        .lang(240px, 118px);
        .bg-color(white);
        border: 1px dotted #bfbfbf;
        border-radius: 4px;
        text-align: center;
        .margin(33px, 30px, 0, 0);
        p {
          &:first-child {
            font-weight: 900;
            font-size: 42px;
            color: #bfbfbf;
            .margin(10px, 0, 0, 0);
          }
          &:last-child {
            color: @color;
          }
        }
      }
      .nong{
        img{
          .margin(18px,0,0,-90px);
        }
        p{
          .margin(20px,0,0,-30px);
          color:#494949;
        }
      }
      .el-button {
        .lang(90px, 35px);
        .border(@color);
        .margin(40px, 20px, 0, 73px);
        display: block;
      }
      .cozy {
        .margin(55px, 0, 0, 0);
        p {
          line-height: 30px;
          &:first-child {
            color: @color;
            img {
              vertical-align: middle;
            }
            span {
              color: @color;
              .margin(0px, 0, 0, 10px);
            }
          }
        }
      }
    }
  }
</style>


