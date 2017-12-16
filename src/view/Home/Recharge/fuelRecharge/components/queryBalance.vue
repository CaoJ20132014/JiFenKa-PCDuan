<template>
    <div class="query">
        <div class="inner">
            <div class="common">
                <img src="../../../../../assets/image/recharge/component/ii_pur.png" alt="">
                <span>温馨提示</span>
            </div>
            <p>1.请仔细核对加油卡号，充错卡号无法退款。</p>
            <p>2.充值成功后，需要到加油站进行圈存操作，否则充值金额无法生效。</p>
            <p>3.加油卡充值不提供发票，敬请谅解。</p>
            <p>4.如有疑问，请<span>联系客服</span>。</p>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return{
                
            }
        },
        methods:{
            
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../../assets/less/public/var.less";
    .query{
        width: @baseWidth*2.93;
        height: @baseHeight*2.14;
        border: @baseBorderWidth solid @baseBorderColor;
        border-radius: @border-radius;
        margin-top: @baseMargin*1.5;
        background-color: @bg-color;
        .inner{
            width: @baseWidth*2.85;
            height: @baseHeight*2.06;
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
                    color: @color-common;
                }
            }
            p{
                font-size: @font-size14;
                padding-left: @basePadding*1.3;
                span{
                    color: @color-yel;
                }
            }
        }
    }
</style>
