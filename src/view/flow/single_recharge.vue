<template>
  <div>
    <!-- 输入充值信息 -->
    <el-form label-width="80px" :model="form" v-show="show1">
      <el-form-item label="充值号码:">
        <el-input v-model="form.tel" placeholder="支持充值的号码"></el-input>
        <img class="horn" src="../../assets/image/flow/horn.png" alt="">
      </el-form-item>
      <el-form-item label="充值类型:" v-model="form.options">
        <ul class="value_ul">
          <li v-for="(item,index) in options"  :key="item.id" @click="click1(item,index)">
            <div :class="{cheack:cheacked1 == item.value}" class="border">{{item.value}}</div>
          </li>
        </ul>
      </el-form-item>
      <el-form-item label="充值面值:" v-model="form.faceValue">
        <ul class="value_ul" >
          <li v-for="(item,index) in faceValue" :key="item.id"  @click="click(item,index)">
            <div :class="{cheack:cheacked == item.value}"  class="border">{{item.value}}</div>
          </li>
        </ul>
      </el-form-item>
      <el-form-item label="商品信息:">
        <span>选择充值面值后显示</span>
      </el-form-item>
      <el-form-item style="margin-top:-20px" label="扣款金额    :    ">
        <span v-show="hidden">9.97元</span><span class="hidden" @click="hidden1">隐藏</span>
      </el-form-item>
      <el-button @click="sub">提交订单</el-button>
      <span class="hidden" @click="reset">重新填写</span>
    </el-form>

    <!-- 确认订单 -->
    <div class="sure" v-show="show2">
      <el-form label-width="80px">
        <el-form-item label="充值号码:">
          <span>18336469480</span>
        </el-form-item>
        <el-form-item label="充值流量:">
          <span>全国移动     三元包     10MB</span>
        </el-form-item>
        <el-form-item label="订单编号:">
          <span>DX151185118200028060</span>
        </el-form-item>
        <el-form-item label="支付密码:">
          <el-input size="small" placeholder="请输入6位数字密码" v-model="psd" suffix-icon="el-icon-date">
          </el-input>
        </el-form-item>
        <el-button @click="payment">立即支付</el-button>
        <el-button @click="cancel" class="cancel">取消支付</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        //表单的数据
        form: {
          tel: '',
          options: '',
          faceValue: ''
        },
        //充值类型
        options: [{
            id: 1,
            value: '全国',
          },
          {
            id: 2,
            value: '省内',
          }
        ],
        //充值面值
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
        cheacked: 0,//充值面值对应的变量
        cheacked1: 0,//充值类型对应的变量
        show1: true,//充值信息是否显示
        show2: false,//确认订单是否显示
        hidden: true,//钱是否显示
        psd:"",//支付密码
        a: false//判断首个的样式
      };
    },
    mounted(){
        this.$parent.a = true;
    },
    methods: {
      //充值类型
      click1(item, index) {
        this.cheacked1 = item.value;
        this.form.options = item.value;
        //判断两者不为空，然后进行数据请求，显示商品信息
        if(this.form.options !="" && this.form.faceValue !=""){
          console.log(11111);
        }
      },
      //充值面值
      click(item, index) {
        this.cheacked = item.value;
        this.form.faceValue = item.value;
         //判断两者不为空，然后进行数据请求，显示商品信息
         if(this.form.options !="" && this.form.faceValue !=""){
          console.log(11111);
        }
      },
      // 提交订单
      sub() {
        this.$parent.isShow = false;
        this.$parent.show = false;
        this.show1 = false;
        this.show2 = true;
        this.$parent.message = "   >   订单确认";
      },
      // 立即支付
      payment() {
        this.$confirm('您的支付密码输入有误，请重新输入', '消息提示', {
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
      },
      // 取消支付
      cancel() {
        this.$parent.isShow = true;
        this.$parent.show = true;
        this.show1 = true;
        this.show2 = false;
        this.$parent.message = "";
      },
      // 点击隐藏
      hidden1() {
        this.hidden = false;
      },
      // 重新填写
      reset() {
        this.form.tel = "";
        this.cheacked = 0;
        this.cheacked1 = 0;
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .el-form {
    .margin(23px, 0, 0, -8px);
  }

  .el-form-item {
    font-size: 16px;
    .margin(0, 0, 25px, 0);
  }

  .el-input,
  .el-input__inner {
    border: none;
    .lang(248px, 38px);
  }

  .horn {
    .margin(0, 0, 0, 12px);
    vertical-align: middle;
  }

  .value_ul {
    width: 420px;
    .margin(0, 0, -20px, 0);
  }

  .value_ul li {
    list-style: none;
    .lang(72px, 38px);
    .margin(0, 12px, 12px, 0);
    display: inline-block;
  }

  .value_ul li div {
    .lang(72px, 38px);
    display: inline-block;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    .bg-color(#f4f4f4);
  }

  .cheack {
    .bg;
  }

  .cheack1 {
    .bg;
  }

  .hidden {
    .margin(0, 0, 0, 17px);
    color: #9376d7;
    border-bottom: 1px solid #9376d7
  }

  .el-button {
    .bg-color(#8a63e7);
    color: white;
    .margin(0, 0, 0, 82px);
    .lang(120px, 36px);
  }

  .sure {
    .lang(598px, 306px);
    border: 5px solid #f4f4f4;
    font-size: 16px;
    .margin(53px, 0, 0, 0);
    .el-form {
      .margin(10px, 0, 0, 25px);
    }
    .el-form-item {
      .margin(0px, 0, 0, 25px);
      span {
        color: #f7a833;
        .margin(0, 0, 0, 18px);
      }
    }
    .el-button {
      .lang(120px, 38px);
      .margin(39px, 0, 0, 106px)
    }
    .cancel {
      .margin(0, 0, 0, 13px);
      .bg-color(white);
      color: @color;
      .border(@color);
    }
  }
</style>


