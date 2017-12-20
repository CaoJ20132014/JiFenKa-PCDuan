<template>
  <div>
    <div class="header">
      <span class="method">选择加款方式</span>
    </div>
    <div class="content">
      <div class="item" @click="go(1)">
        <img src="../../assets/image/fundManagement/zhifubao.png" alt="">
        <p>支付宝支付</p>
      </div>
      <div class="item">
        <img src="../../assets/image/fundManagement/lianlian.png" alt="">
        <p>连连支付</p>
      </div>
      <div class="item" @click="go(2)">
        <img src="../../assets/image/fundManagement/agriculture.png" alt="">
        <p>中国农业银行支付</p>
      </div>
    </div>
    <div style="width:100%;margin-top:55px;">
      <span class="record">最近加款记录</span>
      <router-link to="/to/statistics" style="color:white;background:#8a63e7">查看更多</router-link>
      <router-link to="/to/8" style="margin-right:16px">加款统计</router-link>
    </div>

    <el-table :data="tableData" stripe border align="center" style="width: 100%">
      <el-table-column prop="date" label="加款方式" width="279px" align="center">
      </el-table-column>
      <el-table-column prop="name" label="加款金额" width="279px" align="center">
      </el-table-column>
      <el-table-column prop="address" label="时间" width="279px" align="center">
      </el-table-column>
      <el-table-column prop="address" label="状态" width="279px" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '1518'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '1518'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '1518'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '1518'
        }]
      }
    },
    mounted() {
      this.$parent.a = true;
    },
    methods: {
      go(x) {
        if (x == 1) {
          this.$router.push({
            path: '/to/alipay'
          });
        } else if (x == 2) {
          this.$router.push({
            path: '/to/agriculture'
          });
        }

      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .title1 {
    width: 120px !important;
    .margin(30px, 0, 0, 0);
    .lang(93px, 25px);
    text-align: center;
    display: inline-block;
    font-size: 16px;
    color: #494949;
    border-left: 3px solid #7b5bc7;
  }

  .method {
    .title1
  }

  .record {
    .title1;
  }

  .content {
    .margin(32px, 0, 0, 0);
    .item {
      display: inline-block;
      .lang(248px, 118px);
      .border(#e9e9e9);
      .margin(0, 34px, 0, 0);
      border-radius: 4px;
      text-align: center;
      &:hover {
        .border(@color);
      }
      img {
        .margin(30px, 0, 0, 0);
      }
      p {
        color: #a0a0a0;
        .margin(8px, 0, 0, 0);
      }
    }
  }

  a {
    .lang(100px, 32px);
    float: right;
    color: @color;
    .border(@color);
    line-height: 32px;
    text-align: center;
    .margin(23px, 0, 0, 0);
    border-radius: 4px;
  }

  .el-table {
    .margin(10px, 0, 0, 0);
  }

  .el-table th.is-leaf {
    background: #fafafa;
  }
</style>

