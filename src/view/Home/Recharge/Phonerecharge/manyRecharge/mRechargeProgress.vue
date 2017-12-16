<template>
    <div class="m-progress">
        <div class="progress-box">
            <p>系统正在努力为您充值，请耐心等待！</p>
            <p>本批次共充值<span class="big" v-text="order.totalNum"></span>笔，<span class="green">已成功<span class="big" v-text="order.success"></span>笔</span>，<span class="red">失败<span class="big" v-text="error"></span>笔</span></p>
            <el-progress :percentage="proportion" :status="state"></el-progress>
        </div>
        <div class="recharge-record">
            <recordtable></recordtable>
        </div>
    </div>
</template>
<script>
    import recordtable from '../manyRecharge/components/orderTable.vue';
    export default {
        components:{
            recordtable
        },
        data () {
            return {
                order:{
                    totalNum: '10',
                    success: '8'
                }
            }
        },
        computed:{
            error(){
                let errNum = 0;
                errNum = (this.order.totalNum - 0) - (this.order.success - 0);
                return errNum;
            },
            proportion(){
                let num = 0;
                num = (this.order.success - 0)/(this.order.totalNum - 0)*100;
                return num;
            },
            state(){
                if (this.order.success == this.order.totalNum) {
                    return 'success'
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../../assets/less/public/var.less";
    .m-progress{
        width: 100%;
        padding-top: @basePadding*10;
        .progress-box{
            height: @baseHeight*2.66;
            border: @baseBorderWidth solid @baseBorderColor;
            p{
                font-size: @font-size14;
                padding-top: @basePadding;
                padding-left: @basePadding*8.5;
                &:first-child{
                    color: @color-gray;
                    padding-top: @basePadding*7;
                }
                &:nth-child(2){
                    padding-bottom: @basePadding*4;
                }
                .big{
                    font-size: @font-size18;
                }
                .green{
                    color: @color-gr;
                }
                .red{
                    color: @color-red;
                }
            }
            .el-progress.el-progress--line{
                width: @baseWidth*8.8;
                margin-left: @baseMargin*2.2;
            }
        }
        .recharge-record{
            padding-top: @basePadding*13;
        }
    }
</style>