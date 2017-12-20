<template>
  <div class="container">
    <div class="header">
      <span class="title">流量充值{{message}}</span>
    </div>
    <div class="content">
      <div class="content_nav" v-show="isShow">
        <!-- 流量充值的导航 -->
        <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" :class="{c:a}">流量充值</el-menu-item>
          <el-menu-item index="2">多人充值</el-menu-item>
          <el-menu-item index="3">批量导入</el-menu-item>
          <el-menu-item index="/to/">订单查询</el-menu-item>
        </el-menu>
      </div>
      <router-view/>
    </div>
    <!-- 底部记录 -->
    <div style="position:absolute;bottom:-290px" v-show="show">
      <span class="title1">最近充值记录</span>
      <el-table :data="tableData3" height="250" border style="width: 100%" align="center">
        <el-table-column prop="date" label="手机号码" align="center">
        </el-table-column>
        <el-table-column prop="name" label="流量包" align="center">
        </el-table-column>
        <el-table-column prop="address" label="时间" align="center">
        </el-table-column>
        <el-table-column prop="name" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="age" label="扣费金额" align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '123',
          name: '123',
          age: 123
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '123',
          name: '123',
          age: 123
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '123',
          name: '123',
          age: 123
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '123',
          name: '123',
          age: 123
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '123',
          name: '123',
          age: 123
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '123',
          name: '123',
          age: 123
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '123',
          name: '123',
          age: 123
        }],
        isShow: true, //导航是否显示
        show: true, //底部表格是否显示
        message: '', //面包屑是否有内容
        a:false
      };
    },
    //当页面加载的时候获取导航的下标，使页面刷新的时候导航样式不变
    mounted() {
      this.activeIndex = sessionStorage.getItem('isSelect')
    },
    methods: {
      //选中导航时将下标存入缓存
      handleSelect(key, keyPath) {
        sessionStorage.setItem('isSelect', key)
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .container {
    .lang(990px, 888px);
    .border(#e9e9e9);
  }
  .header {
    height: 50px;
    border-bottom: 1px solid #e9e9e9;
  }
  .title {
    height: 25px;
    .margin(15px, 0, 0, 20px);
    padding-left: 15px;
    display: inline-block;
    font-size: 16px;
    color: #494949;
    border-left: 3px solid #7b5bc7;
  }
  .content {
    width: 910px;
    margin: 0 auto;
  }
  .content_nav {
    border-bottom: 1px solid #e9e9e9;
  }
  .el-menu-item {
    color: #595959;
    margin-right: 30px;
  }
  .el-menu--horizontal>.el-menu-item.is-active,
  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    color: @color;
    border-bottom: 2px solid @color;
  }
  .c{
    color: @color;
    border-bottom: 2px solid @color;
  }
  .title1 {
    width: 120px !important;
    .margin(30px, 0, 0, 40px);
    .lang(93px, 25px);
    text-align: center;
    display: inline-block;
    font-size: 16px;
    color: #494949;
    border-left: 3px solid #7b5bc7;
  }
  .el-table {
    width: 910px !important;
    .margin(12px, 0, 0, 40px);
  }
</style>

