<template>
  <div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="业务类型:">
        <el-select v-model="form.busType" size="small" placeholder="全部">
          <el-option style="padding-left:10px" label="区域一" value="shanghai"></el-option>
          <el-option style="padding-left:10px" label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="操作类型:">
        <el-select v-model="form.opeType" size="small" placeholder="全部">
          <el-option style="padding-left:10px" label="区域一" value="shanghai"></el-option>
          <el-option style="padding-left:10px" label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="起止时间:">
        <el-date-picker style="width:200px" v-model="form.value1" size="small" type="datetime" placeholder="选择日期时间">
        </el-date-picker> -
        <el-date-picker style="width:200px" size="small" v-model="form.value2" type="datetime" placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button @click="select">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button style="background:white;color:#8a6ad4;border:1px solid #8a6ad4" @click="back">返回</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe border align="center" style="width: 100%">
      <el-table-column prop="business" label="业务类型" width="279px" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="操作类型" width="279px" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="操作IP地址" width="279px" align="center">
      </el-table-column>
      <el-table-column prop="time" label="时间" width="282px" align="center">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          busType: '',//业务类型
          opeType: '',//操作类型
          value1: "",//开始时间
          value2: ""//结束时间
        },
        tableData: [{
          business: '2016-05-02',
          operation: '王小虎',
          ip: '王小虎',
          time: '王小虎'
        }, {
          business: '2016-05-02',
          operation: '王小虎',
          ip: '王小虎',
          time: '王小虎'
        }, {
          business: '2016-05-02',
          operation: '王小虎',
          ip: '王小虎',
          time: '王小虎'
        }, {
          business: '2016-05-02',
          operation: '王小虎',
          ip: '王小虎',
          time: '王小虎'
        }, {
          business: '2016-05-02',
          operation: '王小虎',
          ip: '王小虎',
          time: '王小虎'
        }, {
          business: '2016-05-02',
          operation: '王小虎',
          ip: '王小虎',
          time: '王小虎'
        }],
        currentPage4: 4
      }
    },
    methods: {
      //获取到当前的数据显示的条数
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      //点击数字获取到每个数字
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var a = `${val}`;
        console.log(a);
      },
      //查询
      select(){
        console.log(this.form);
      },
      //返回
      back(){
         this.$router.push({
          path: '/to/5'
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .el-form {
    .margin(30px, 0, 0, 0);
    .el-select {
      width: 128px;
    }
    .el-input-inner {
      width: 50px;
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

  .block {
    .margin(30px, 0, 0, 0);
    float: right;
  }
</style>



