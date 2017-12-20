<template>
  <div>
    <div class="header">
      <p>可统计2014年12月16号之后的记录（含16号），统计时间范围的跨度不能超过10天</p>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="起止时间:">
        <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
        </el-date-picker> -
        <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button>查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button style="background:white;color:#8a6ad4;border:1px solid #8a6ad4">返回</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe border align="center" style="width: 100%">
      <el-table-column prop="business" label="人工加款" width="373px" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="外部加款" width="373px" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="总金额" width="373px" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 1,
        formInline: {
          user: ''
        },
        tableData: [{
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

        }, {
          business: 0,
          operation: 0,
          ip: 0

        }],
        value1: '',
        value2: ''
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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
      .lang(80px, 34px);
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
</style>


