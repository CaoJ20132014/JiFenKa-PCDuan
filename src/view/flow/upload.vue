<template>
  <div class="content">
    <el-upload class="upload-demo" ref="upload" drag action="https://jsonplaceholder.typicode.com/posts/" multiple :on-preview="handlePreview" :on-remove="handleRemove">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <router-link to="/to/batch_sure">
      <el-button @click="upload">开始上传</el-button>
      <el-button class="download" @click="download">模板下载</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // fileList: [{
        //   name: 'food.jpeg',
        //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        // }, {
        //   name: 'food2.jpeg',
        //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        // }]
      };
    },
    mounted() {
      this.$parent.a = false;
    },
    methods: {
      //开始上传
      upload() {
        this.$refs.upload.submit();
        this.$confirm('请先选择导入文件', '消息提示', {
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
      },
      //模板下载
      download() {
        this.$confirm('确定下载吗', '消息提示', {
          confirmButtonText: '确定下载',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已开始下载!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消下载'
          });
        });
      },
      //点击图片最右边的X删除
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      //点击图片路径会打印出上传的图片信息
      handlePreview(file) {
        console.log(file);
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .content {
    .lang(100%, 266px);
    .margin(20px, 0, 0, 0);
    .border(#e9e9e9);
    text-align: center;
  }

  .upload-demo {
    .margin(20px, 0, 0, 0);
  }

  .el-button {
    position: absolute;
    .margin(20px, 0, 0, 20px);
    color: white;
    .bg-color(@color);
    .lang(120px, 36px);
  }

  .download {
    position: absolute;
    .lang(120px, 36px);
    .bg-color(#f7a833);
    color: white;
    line-height: 34px;
    .margin(20px, 0, 0, -130px);
    text-align: center;
  }
</style>


