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
      <el-form-item label="打款卡号:" style="margin-top:20px">
        <el-input placeholder="汇款账号" style="width:168px" size="small" v-model="form.card">
        </el-input>

      </el-form-item>
      <el-form-item label="打款人:" style="margin-top:20px">
        <el-input placeholder="汇款人姓名" style="width:120px;" size="small" v-model="form.name">
        </el-input>

      </el-form-item>
      <el-form-item label="起止时间:" style="margin-top:20px">
        <el-date-picker v-model="form.value1" style="width:182px" type="datetime" size="small" placeholder="选择日期时间">
        </el-date-picker> -
        <el-date-picker v-model="form.value2" style="width:182px" type="datetime" size="small" placeholder="选择日期时间">
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
      <el-table-column prop="business" label="打款人" width="72px" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="打款卡号" width="186px" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="打款金额" width="85px" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="收款银行" width="85px" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="收款姓名" width="84px" align="center">
      </el-table-column>
       <el-table-column prop="business" label="收款账号" width="185px" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="提交时间" width="170px" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="收款备注" width="108px" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="状态" width="80px"  align="center">
      </el-table-column>
      <el-table-column prop="ip" label="操作" width="63px" align="center">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
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
          type:"",
          card: '',
          name: "",
          value1: '',
          value2: '',
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
        ],
        currentPage4:2
      };
    },
    mounted() {
      if (this.tableData == "") {
        this.show = true
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
      click(item) {
        this.cheacked = item.value;
        this.form.type = item.value;
      },
       //查询
      select(){
        console.log(this.form,this.$route.path);
      },
      //返回
      back(){
         this.$router.push({
          path: '/to/sureSub'
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

  .block {
    .margin(30px, 0, 0, 0);
    float: right;
  }
</style>


