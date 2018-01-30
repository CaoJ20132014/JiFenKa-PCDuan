<template>
    <div class="Import">
        <div class="notice">批量导入（温馨提示：本功能常用于<span>不同面值的多号码批量充值</span>，每次至多10000条）</div>
        <div class="step">
            <el-steps :active="step.isActive" align-center>
                <el-step title="上传充值列表"></el-step>
                <el-step title="确认充值信息"></el-step>
                <el-step title="受理成功，等待充值结果"></el-step>
            </el-steps>
        </div>
        <div class="list">
            <div class="upData" v-show="isShow == 1">
                <el-upload ref="upload" class="upload-demo" :limit='1' drag :action="params.action" :data="params.data" :auto-upload="false" :on-success="success" :on-preview="handlePreview" :on-change="stateChange" :on-remove="handleRemove">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
                <div class="buttons">
                    <el-button class="download" @click="templetUpload">模板下载</el-button>
                    <el-button class="upload" @click="startUpLoad" :disabled="isStartUpData">开始上传</el-button>
                </div>
            </div>
            <orderConfirm @ConfirmChild="ConfirmChild" v-show="isShow == 2"></orderConfirm>
            <waitResult v-show="isShow == 3"></waitResult>
        </div>
        <div class="TableList">
            <TableList></TableList>
        </div>
    </div>
</template>
<script>
    import TableList from '../batchWrite/components/rechargeTable.vue';
    import orderConfirm from './components/orderConfirm.vue';
    import waitResult from './components/waitResult.vue';               
    export default {
        components:{
            TableList,
            orderConfirm,
            waitResult
        },
        data () {
            return {
                isStartUpData: true,               // 是否开始上传
                isShow: 1,                         // 组件显示与隐藏
                step: {
                    isActive: 1                    // 步骤条
                },
                params: {
                    action: 'https://jsonplaceholder.typicode.com/posts/',
                    data: {}
                }
            }
        },
        methods: {
            startUpLoad() {
                this.$refs.upload.submit();
                this.isStartUpData = true;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            success(file){
                console.log(file);
            },
            stateChange(file){
                console.log(file);
                if(file.status == "ready"){
                    this.isStartUpData = false;
                } else if(file.status == "success"){
                    this.isStartUpData = true;
                    this.$message({
                        message: '上传成功',
                        type: 'success',
                        center: true,
                        duration: 2000
                    });
                    setTimeout(() => {
                        this.isShow = 2;
                        this.step.isActive = 2;
                    }, 2000);
                }
            },
            templetUpload(){
                this.$confirm('确定要下载?', '消息提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    customClass:'lackInfo',
                    cancelButtonClass:'lackInfoCancel',
                    confirmButtonClass:'lackInfoSure'
                }).then(() => {
                    
                }).catch(() => {
                            
                });
            },
            ConfirmChild(data){
                console.log(data);
                this.isShow = data.isShow;
                this.step.isActive = data.isShow;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/recharge/phReachge/batchImport/index.less';
</style>