<template>
  <div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="支付密码:">
        <el-input v-model="form.password" placeholder="请输入六位数字密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit" style="color:white;background:#7b5bc7">确认</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="back" style="color:#7b5bc7;border:1px solid #7b5bc7">取消</el-button>
      </el-form-item>
      <el-form-item style="float:right">
        <p>充值笔数： <span>{{this.tableData.length}}</span> 总充值金额： <span>{{total}}元</span> </p>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width:100%;margin-left:0px;margin-top:20px;" align="center">
      <el-table-column prop="tel" label="充值号码" width="455" align="center">
      </el-table-column>
      <el-table-column prop="num" label="充值金额(元)" width="455" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        total:0,
        form: {
          password: ''
        },
        tableData: [{
          tel: '18335833960',
          num: 30.00
        }, {
          tel: '18335833960',
          num: 30.00
        }, {
          tel: '18335833960',
          num: 30.00
        }]
      }
    },
    mounted(){
      //算出充值的总钱数
      for(let num1 of this.tableData){
        this.total += num1.num;
      }
    },
    methods: {
      //点击确认
      onSubmit() {
        this.$confirm('密码不正确，您还有两次输入机会，否则账号将被锁定', '消息提示', {
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
        if (this.form.password == 1) {
          this.$router.push({
            path: '/to/progress'
          });
        }
      },
      //点击取消
      back() {
        this.$router.push({
          path: '/to/3'
        });
      }

    }

  }
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .el-form {
    .margin(10px, 0, 0, 0);
  }

  .el-form-item {
    .el-input {
      .lang(218px, 38px);
    }
    .el-button {
      .lang(90px, 36px);
      color: white;
    }
    &:last-child {
      float: right;
    }
    p {
      span {
        color: #f9c07a;
      }
    }
  }

  .el-table--border th {
    background-color: #fafafa;
  }

  .el-table tr:nth-child(even) td {
    background-color: #fafafa;
  }

  .el-table--enable-row-transition .el-table__body td {
    padding: 10px 0 !important;
  }
</style>

