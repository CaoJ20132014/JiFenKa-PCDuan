<template>
  <div class="container">
    <div class="header">
      <p>安全中心</p>
    </div>
    <div class="content">
      <div class="content_nav">
        <!-- 安全中心的导航 -->
        <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="5" :class="{ c:a}">账号保护</el-menu-item>
          <el-menu-item index="6">基本设置</el-menu-item>
        </el-menu>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '5',
        a: false
      };
    },
    mounted() {
      this.activeIndex = sessionStorage.getItem('isSelect');

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
        sessionStorage.setItem('isSelect', key)
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .container {
    .lang(1200px, 798px);
    .border(#e9e9e9);
    .header {
      height: 36px;
      border-bottom: 1px solid #e9e9e9;
      line-height: 50px;
      p {
        .lang(92px, 25px);
        text-align: center;
        line-height: 25px;
        border-left: 3px solid @color;
        .margin(13px, 0, 0, 20px);
      }
    }
    .content {
      width: 1120px;
      margin: 0 auto;
    }
    .content_nav {
      border-bottom: 1px solid #e9e9e9;
    }
    .el-menu-item {
      color: #595959;
      width: 100px;
      text-align: center;
    }
    .el-menu--horizontal>.el-menu-item.is-active,
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
      color: @color;
      border-bottom: 2px solid @color;
    }
    .c {
      color: @color;
      border-bottom: 2px solid @color;
    }
  }
</style>


