<template>
  <div class="container">
    <div class="header">
      <p>品质保证，安全快捷</p>
      <p>加款客服 / 加款热线：15824100064 </p>
    </div>
    <div class="content">
      <div class="content_nav">
        <!-- 安全中心的导航 -->
        <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/to/7" :class="{c:a}">加款方式</el-menu-item>
          <el-menu-item index="/to/8">加款记录</el-menu-item>
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
        a: false,
        b: false,
        activeIndex: '1'
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
      height: 50px;
      border-bottom: 1px solid #e9e9e9;
      line-height: 50px;
      p {
        display: inline-block;
        &:first-child {
          .lang(160px, 25px);
          text-align: center;
          line-height: 25px;
          border-left: 3px solid @color;
          .margin(13px, 0, 0, 20px);
        }
        &:last-child {
          float: right;
          color: @color;
          .margin(0, 40px, 0, 0);
        }
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
    .active {
      color: @color;
      border-bottom: 2px solid @color;
    }
    .c {
      color: @color;
      border-bottom: 2px solid @color;
    }
  }
</style>


