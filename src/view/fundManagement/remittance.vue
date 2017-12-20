<template>
  <div class="con">
    <div class="header">
      <span class="title1">中国农业银行支付</span>
    </div>
    <div class="content">
      <el-form :label-position="labelPosition" label-width="90px" :model="form">
        <el-form-item label="收款方银行:">
          <el-select v-model="form.select" placeholder="请选择收款方银行">
            <el-option v-for="item in options" style="padding-left:15px" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

        </el-form-item>
        <el-form-item label="收款方账号:">
          <el-input placeholder="" v-model="form.original">
          </el-input>

        </el-form-item>


        <el-form-item>
          <el-button style="color:white;background:#8a63e7" @click="binding">提交申请</el-button>
          <span class="hidden" @click="bank">返回上一步</span>
        </el-form-item>
      </el-form>
      <div class="cozy">
        <p><img src="../../assets/image/fundManagement/cozy.png" alt=""><span>温馨提示</span></p>
        <p>1.加款前需到“管理银行卡”处添加银行卡；</p>
        <p>2.输入您要加款的金额，“选择卡号”处选择汇款银行卡；</p>
        <p>3.选择天缘网络收款方银行，收款人卡号将自动填充，提交申请后登陆网银进行转账。</p>
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
          select: ""
        },
        options: [{
          value: '选项1',
          label: '农业银行:1111111111'
        }],
      };
    },
    methods: {
      bank() {
        this.$router.push({
          path: "/to/agriculture"
        });
      },
      binding() {
        this.$router.push({
          path: "/to/sureSub"
        });


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
        width: 150px !important;
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
        .margin(18px, 0, 0, 0);
        span {
          color: #989898;
          .margin(0, 0, 0, 14px);
        }
        .el-button {
          .lang(120px, 35px);
          .border(@color);
          .margin(70px, 20px, 0, 0);
        }
        .hidden {
          .margin(0, 0, 0, 0px);
          color: #9376d7;
          font-size: 12px;
          border-bottom: 1px solid #9376d7
        }
        .obtain {
          .lang(90px, 38px);
          .bg-color(@color);
          .margin(0, 0, 0, 12px);
          color: white;
        }
      }
      .el-input {
        .lang(222px, 38px);
      }
      .el-input__inner {
        .bg-color(#f4f4f4);
      }
      .cozy {
        .margin(70px, 0, 0, 0);
        line-height: 25px;
        p {
          &:first-child {
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


