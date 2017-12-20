<template>
    <div class="query">
        <div class="inner">
            <div class="common">
                <div class="lable">查询余额：</div>
                <el-button @click="query">余额查询</el-button>
            </div>
            <div class="common">
                <div class="lable">归属地：</div>
                <el-input placeholder="这里会显示号码归属地" v-model="input1" :disabled="true"></el-input>
            </div>
            <div class="common">
                <div class="lable">机主姓名：</div>
                <el-input placeholder="这里会显示机主姓名" v-model="input2" :disabled="true"></el-input>
            </div>
            <div class="common">
                <div class="lable">话费余额：</div>
                <el-input placeholder="这里会显示余额" v-model="input3" :disabled="true"></el-input>
            </div>
            <div class="common">
                <img src="../../../../../../assets/image/recharge/component/ii.png" alt="">
                <span>温馨提示</span>
            </div>
            <p>1.支持全国移动、联通、电信号码余额查询。</p>
            <p>2.虚商暂时支持天音、话机、海航、青牛、中邮、迪信通、爱施德、日日顺、中兴、世纪互联号码余额查询。</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['phoneNum'],
        data () {
            return {
                input1: '',
                input2: '',
                input3: ''
            }
        },
        methods:{
            query() {
                if (this.phoneNum.length == 11) {
                    console.log(this.phoneNum);
                    console.log('开始查询号码归属地、余额');
                } else if(this.phoneNum.length == 0){
                    this.$alert('请在左侧输入查询的手机号码', '消息提示', {
                        confirmButtonText: '确定',
                        type:'warning',
                        callback: action => {
                            
                        }
                    });
                } else {
                    this.$alert('请输入正确的手机号码', '消息提示', {
                        confirmButtonText: '确定',
                        type:'warning',
                        callback: action => {
                            
                        }
                    });
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../../../assets/less/public/var.less";
    .query{
        width: @baseWidth*2.93;
        height: @baseHeight*3.44;
        border: @baseBorderWidth solid @baseBorderColor;
        border-radius: @border-radius;
        margin-top: @baseMargin*1.5;
        background-color: @bg-color;
        .inner{
            width: @baseWidth*2.85;
            height: @baseHeight*3.36;
            border: @baseBorderWidth solid @baseBorderColor;
            border-radius: @border-radius;
            margin: @baseMargin*.3 @baseMargin*.3;
            background-color: @color-white;
            .common{
                padding-left: @basePadding*1.3;
                height: @baseHeight*.3;
                font-size: @font-size14;
                margin-top: @baseMargin*1.5;
                .lable{
                    float: left;
                    width: @baseWidth*0.8;
                    line-height: @baseLineHeight*3;
                }
                .el-button.el-button--default{
                    width: @baseWidth*0.86;
                    height: @baseHeight*.3;
                    padding: 0;
                    &:hover{
                        color: @color-common;
                        border-color: @color-common;
                    }
                    &:focus{
                        color: @color-common;
                        border-color: @color-common;
                    }
                }
                .el-input.is-disabled{
                    width: @baseWidth*1.75;
                    height: @baseHeight*0.3;
                }
                img{
                    margin: 6px 5px 0 0;
                }
                span{
                    vertical-align: top;
                    font-size: @font-size14;
                    line-height: @baseLineHeight*3;
                    color: @color-yel;
                }
            }
            p{
                font-size: @font-size14;
                padding-left: @basePadding*1.3;
                color: @color-yel;
            }
        }
    }
</style>
