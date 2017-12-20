<template>
  <div>
    <!-- 充值的表格 -->
    <div v-show="show">
      <table cellspacing="0" cellpadding="0" id="tab" style="height:60px;" overflow=scroll>
        <tr>
          <td>充值号码</td>
          <td>充值类型</td>
          <td>流量值</td>
          <td>商品名称</td>
          <td>扣款金额</td>
          <td>清空</td>
        </tr>
        <tr v-for="(item,$index) in num" :key="item">
          <td>
            <el-input type="text" placeholder="请输入号码" size="mini" v-model="tel[$index]"></el-input>
          </td>
          <td>
            <el-select v-model="type[$index]" placeholder="请选择" class="select" size="mini">
              <el-option v-for="item in options" style="padding-left:15px" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </td>
          <td>
            <el-select v-model="face[$index]" placeholder="请选择" size="mini">
              <el-option style="padding-left:15px" v-for="item in faceValue" :key="item.value" :label="item.value" :value="item.value">
              </el-option>
            </el-select>
          </td>
          <td>全国移动3元包10MB</td>
          <td>2.94</td>
          <td><img src="../../assets/image/flow/delete.png" alt="" @click="del(item)"></td>
        </tr>
      </table>
      <el-button @click="sub">提交订单</el-button>
      <el-button @click="add">+添加号码</el-button>
      <span class="warn">多人充值单次最多充值500条，当前添加行数:<span>{{num.length}}</span>，还可添加:<span>{{surplus}}</span>行</span>
    </div>
    <!-- 确认订单 -->
    <div v-show="show1">
      <table style="margin-top:30px;" cellspacing="0" cellpadding="0" id="tab">
        <tr>
          <td>序号</td>
          <td>充值号码</td>
          <td>商品名称</td>
          <td>扣款金额</td>
          <td>订单号</td>
        </tr>
        <tr v-for="(item,$index) in 5" :key="item">
          <td>{{$index + 1}}</td>
          <td>18336469480</td>
          <td>全国移动3元包10MB</td>
          <td>2.94</td>
          <td>DX151245848700080182</td>
        </tr>
      </table>
      <el-button @click="payment">立即支付</el-button>
      <el-button @click="cancel">取消支付</el-button>
      <span class="warn">订单总览 &nbsp;:&nbsp;共<span>2</span>条订单&nbsp;,&nbsp;扣款总额&nbsp;:&nbsp;<span>5.88</span>元</span>
    </div>
    <!-- 充值的进度 -->
    <div class="success" v-show="show2">
      <p>系统正在努力为您充值，请耐心等待！</p>
      <p>本批次共充值
        <pre>2</pre>笔，<span>已成功<pre>1</pre>笔，</span><span>失败<pre>0</pre>笔</span></p>
      <div class="progress"></div>
      <div class="progress1"></div>
      <span class="percent">50%</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        face: [],
        type: [],
        tel: [],
        show2: false, //充值的进度
        options: [{
            id: 1,
            value: '全国',
          },
          {
            id: 2,
            value: '省内',
          }
        ],
        faceValue: [{
            id: 1,
            value: '10MB'
          },
          {
            id: 2,
            value: '20MB'
          },
          {
            id: 3,
            value: '30MB'
          },
          {
            id: 4,
            value: '50MB'
          },
          {
            id: 5,
            value: '100MB'
          },
          {
            id: 6,
            value: '150MB'
          },
          {
            id: 7,
            value: '200MB'
          },
          {
            id: 8,
            value: '500MB'
          },
          {
            id: 9,
            value: '1GB'
          },
          {
            id: 10,
            value: '2GB'
          },
          {
            id: 11,
            value: '3GB'
          },
          {
            id: 11,
            value: '4GB'
          },
          {
            id: 11,
            value: '6GB'
          },
          {
            id: 11,
            value: '11GB'
          }
        ],
        show: true, //充值的表格
        show1: false, //充值的订单
        num: [1, 1, 1, 1]
      };
    },
    //通过计算属性得到剩余的条数
    computed: {
      surplus: function() {
        return 500 - this.num.length;
      }
    },
    mounted() {
      this.$parent.a = false;
    },
    methods: {
      //提交订单
      sub() {
        this.$parent.isShow = false;
        this.show = false;
        this.show1 = true;
        this.$parent.message = "   >   多人充值确认订单";
      },
      //取消支付
      cancel() {
        this.show = true;
        this.show1 = false;
        this.$parent.message = "";
      },
      //立即支付
      payment() {
        this.$prompt('请输入支付密码', '验证支付密码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[0-9]*$/,
          inputErrorMessage: '密码格式不正确'
        }).then(({
          value
        }) => {
          this.$message({
            type: 'success',
            message: '输入成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      //添加充值信息
      add() {
        //点击添加，判断上一条是否填完，如果没填完就返回继续填
        if (this.face.length != this.type.length || this.face.length != this.tel.length || this.type.length != this.tel.length) {
          this.$confirm('请完整输入上一条充值信息，再添加新的充值信息！', '消息提示', {
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
              message: '已取消输入'
            });
          });
        } else if (this.num.length >= 500) {
          this.num.length == 500;
        } else
        if (this.num.length < 500) {
          this.num.push(1);
        }
      },
      //删除充值信息
      del(item) {
        console.log(item);
        this.num.splice(item, 1);
      }
    }

  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  table tr:nth-child(odd) td {
    background-color: #fafafa;
  }

  table {
    width: 100%;
    text-align: center;
    .margin(23px, 0, 0, 0);
    border-top: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;
    th {
      background-color: #fafafa;
      height: 40px;
      font-weight: 500;
    }
    tr {
      line-height: 30px;
      td {
        height: 44px;
        border-right: 1px solid #ebeef5;
        border-bottom: 1px solid #ebeef5;
        .el-select {
          width: 98px;
        }
        .el-input {
          margin-left: -10px;
          .lang(160px, 28px);
          padding-left: 12px;
        }
      }
    }
  }

  .el-button {
    .bg-color(#8a63e7);
    color: white;
    .margin(32px, 0, 0, 0);
    .lang(120px, 36px);
    &:nth-child(3) {
      .bg-color(white);
      color: @color;
      .margin(0, 0, 0, 14px);
      .border(@color);
    }
  }

  .warn {
    float: right;
    .margin(38px, 0, 0, 0);
    span {
      color: #f9c07a;
    }
  }

  .success {
    .lang(906px, 266px);
    .border(#e9e9e9);
    .margin(103px, 0, 0, 0);
    p {
      .margin(70px, 0, 0, 86px);
      color: #ababab;
      &:nth-child(2) {
        .margin(25px, 0, 0, 86px);
        color: #494949;
      }
      span {
        font-size: 16px;
        &:nth-child(2) {
          color: #70c31f;
        }
        &:nth-child(3) {
          color: red;
        }
      }
      pre {
        display: inline;
        font-size: 24px;
      }
    }
    .percent {
      color: #8962e5;
      float: right;
      .margin(-22px, 15px, 0, 0);
    }
  }

  .progress {
    .lang(820px, 26px);
    .bg-color(#ededed);
    border-radius: 6px;
    .margin(29px, 0, 0, 22px);
  }

  .progress1 {
    .lang(410px, 26px);
    .margin(-26px, 0, 0, 22px);
    .bg-color(@color);
    border-radius: 6px;
  }
</style>
