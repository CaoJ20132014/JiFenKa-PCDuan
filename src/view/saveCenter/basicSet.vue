<template>
  <div>
    <div class="header">
      <img src="../../assets/image/saveCenter/authentication.png" alt="">
      <span>余禾</span>
    </div>
    <div class="item">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="证件类型:">
          <span>身份证</span>
        </el-form-item>
        <el-form-item label="证件号码:">
          <span>142131199304121346</span>
        </el-form-item>
        <el-form-item label="认证信息:">
          <span>实名认证（V1）</span>
        </el-form-item>
        <el-form-item label="其他信息:">
          <span>实名认证（V1）</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="item1">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="QQ号码:">
          <span>尚未设置</span>
          <u class="hidden" @click="setQQ">设置</u>
        </el-form-item>
        <el-form-item label="联系电话:">
          <span>尚未设置</span>
          <u class="hidden" @click="setTel">设置</u>
        </el-form-item>
        <el-form-item label="淘宝账号:">
          <span>尚未设置</span>
          <u class="hidden" @click="setTaobao">设置</u>
        </el-form-item>
        <el-form-item label="支付宝:">
          <span>15700****</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: ''
        }
      };
    },
    mounted() {
      this.$parent.a = false;
    },
    methods: {
      setQQ() {
        this.$prompt('请输入QQ密码', '设置QQ号码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /^[0-9]*$/,
          // inputErrorMessage: 'QQ号码格式不正确'
        }).then(({
          value
        }) => {
          this.$message({
            type: 'success',
            message: '设置成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '设置取消'
          });
        });
      },
      setTel() {
        this.$prompt('请输入手机号码', '设置联系电话', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^1[3|4|5|8][0-9]\d{4,8}$/,
          inputErrorMessage: '手机号码格式不正确'
        }).then(({
          value
        }) => {
          this.$message({
            type: 'success',
            message: '设置成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '设置取消'
          });
        });
      },
      setTaobao() {
        this.$prompt('请输入淘宝账号', '设置淘宝账号', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /^[0-9]*$/,
          // inputErrorMessage: 'QQ号码格式不正确'
        }).then(({
          value
        }) => {
          this.$message({
            type: 'success',
            message: '设置成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '设置取消'
          });
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .basic {
    .lang(933px, 220px);
    border-top: 1px solid #e9e9e9;
    .margin(0, 0, 0, 90px);
  }

  .header {
    .margin(24px, 0, 0, 13px);
    img {
      vertical-align: middle;
    }
    span {
      font-size: 18px;
      .margin(0, 0, 0, 20px);
    }
  }

  .item {
    .basic;
    .el-form-item {
      .margin(5px, 0, 0, 0);
      &:last-child {
        .margin(30px, 0, 0, 0);
      }
      span {
        .margin(0, 0, 0, 20px);
        color: #b5b5b5;
      }
    }
  }

  .item1 {
    .basic;
    .el-form-item {
      .margin(20px, 0, 0, 0);
      color: #f7a833;
      &:last-child {
        color: #b5b5b5;
      }
      span {
        .margin(0, 0, 0, 20px);
      }
      .hidden {
        float: right;
        color: @color;
        text-decoration-color: @color;
      }
    }
  }
</style>

