<template>
  <div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="加款方式:" style="display:block" v-model="form.type">
        <ul class="value_ul">
          <li v-for="(item,index) in options" :key="item.id" @click="click(item,index)">
            <div :class="{cheack:cheacked == item.value}">{{item.value}}</div>
          </li>
        </ul>
      </el-form-item>
      <el-form-item label="起止时间:" style="margin-top:20px">
        <el-date-picker v-model="form.value1" style="width:182px" size="small" type="datetime" placeholder="选择日期时间">
        </el-date-picker> -
        <el-date-picker v-model="form.value2" style="width:182px" size="small" type="datetime" placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item style="margin-top:20px">
        <el-button @click="select">查询</el-button>
      </el-form-item>
      <el-form-item style="margin-top:20px">
        <el-button style="background:white;color:#8a6ad4;border:1px solid #8a6ad4" @click="back">返回</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe border align="center" style="width: 100%">
      <el-table-column prop="business" label="订单" width="200px" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="加款方式" width="200px" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="加款金额" width="200px" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="时间" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="状态" width="200px" align="center">
      </el-table-column>
    </el-table>
    <div class="none" v-show="show">
      <img src="../../assets/image/fundManagement/none.png" alt="">
      <span>没有找到记录，请调整搜索条件。</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 1,
        cheacked: 0,
        show: false,
        form: {
          type: '',
          value1: "",
          value2: ""
        },
        options: [{
            id: 1,
            value: '全部',
          },
          {
            id: 2,
            value: '支付宝',
          },
          {
            id: 3,
            value: '连连加款',
          },
          {
            id: 4,
            value: '农行转账',
          }
        ],
        tableData: [{
            business: 0,
            operation: 0,
            ip: 0
          },
          {
            business: 0,
            operation: 0,
            ip: 0
          }, {
            business: 0,
            operation: 0,
            ip: 0

          }, {
            business: 0,
            operation: 0,
            ip: 0

          }, {
            business: 0,
            operation: 0,
            ip: 0

          }, {
            business: 0,
            operation: 0,
            ip: 0

          }
        ]
      };
    },
    mounted() {

      this.$parent.a = false;

      if (this.tableData == "") {
        this.show = true
      }
    },
    methods: {
      //选中类型的样式改变
      click(item) {
        this.cheacked = item.value;
        this.form.type = item.value;
      },
      //查询
      select() {
        console.log(this.form);
      },
      //返回
      back() {
        this.$router.push({
          path: '/to/7'
        });
      }
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

  .el-form {
    .margin(30px, 0, 0, 0);
    .el-select {
      width: 128px;
    }
    .el-button {
      .lang(80px, 32px);
      &:first-child {
        color: white;
        .bg-color(@color);
      }
    }
  }

  .el-table {
    .margin(30px, 0, 0, 0);
    th.is-leaf {
      background: #fafafa;
    }
  }

  .value_ul {
    .margin(0, 0, -20px, 0);
  }

  .value_ul li {
    list-style: none;
    .margin(0, 12px, 12px, 0);
    display: inline-block;
  }

  .value_ul li div {
    .lang(98px, 32px);
    display: inline-block;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    .margin(0, 12px, 0, 0);
    .bg-color(#f4f4f4);
  }

  .cheack {
    .bg1;
  }

  .none {
    width: 100%;
    text-align: center;
    .margin(42px, 0, 0, 0);
    img {
      vertical-align: middle;
    }
    span {
      .margin(0, 0, 0, 15px);
    }
  }

  .el-table__empty-block {
    display: none;
  }
</style>


