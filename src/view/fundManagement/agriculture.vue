<template>
  <div class="con">
    <div class="header">
      <span class="title1">中国农业银行支付</span>
    </div>
    <div class="content">
      <el-form :label-position="labelPosition" label-width="90px">
        <el-form-item label="加款金额:">
          <el-input placeholder="请输入加款金额" v-model="original">
          </el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item label="汇款账号:">
          <el-select v-model="select" placeholder="请选择">
            <el-option style="padding-left:15px" :value="1" @click="go">
              添加银行卡
            </el-option>
            <el-option v-for="item in options" style="padding-left:15px" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <span class="hidden" @click="bank">管理银行卡</span>
        </el-form-item>

        <el-form-item>
          <el-button style="color:white;background:#8a63e7" @click="binding">下一步</el-button>
          <el-button style="background:white;color:#8a63e7" @click="back">上一步</el-button>
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

        original: '',
        select: "",
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      };
    },
    mounted() {
      if (this.options == '') {
        console.log(1111111111);
      }
    },
    watch: {
      // 当点击添加银行卡，跳转到绑定页面
      select: function(val) {
        if (val == "1") {
          this.$router.push({
            path: "/to/binding"
          });
        }
      }
    },
    methods: {
      bank() {
        this.$router.push({
          path: "/to/bankCard"
        });
      },
      binding() {
        if (this.original == '1') {
          this.$router.push({
            path: "/to/remittance"
          });
        } else {
          this.$confirm('您的加款金额应不低于1元,请重新输入', '消息提示', {
            confirmButtonText: '确定',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '请重新输入!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '请重新输入'
            });
          });
        }
      },
      go() {
        this.$router.push({
          path: "/to/binding"
        });
      },
      back(){
         this.$router.push({
          path: "/to/7"
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
          .lang(90px, 35px);
          .border(@color);
          .margin(70px, 20px, 0, 0);
        }
        .hidden {
          .margin(0, 0, 0, 17px);
          color: #9376d7;
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


