<template>
    <div class="notice">
        <div class="inner">
            <p>本功能常用于<span>同一面值的多号码批量充值</span>。</p>
            <p>1.在左侧充值号码中输入或复制充值号码，单次充值最多100条。</p>
            <p>2.中石化号码是1000开头的19位数字，系统会自动分行。</p>
            <p>3.输入或复制充值号码之后选择面值，即可提交充值。</p>
            <p>4.充值前请务必确认充值信息正确，充错无法退款。</p>
            <p>5.本次充值不提供发票，敬请谅解。</p>
            <p>6.如果充值遇到问题，请联系您的<span>专属客服</span>。</p>
            <p>7.每一行输完以后会自动添加新的一行。</p>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/public/var.less';
    .notice{
        width: @baseWidth*4.56;
        height: @baseHeight*2.38;
        border: @baseBorderWidth solid @baseBorderColor;
        border-radius: @border-radius;
        background-color: @bg-color;
        .inner{
            width: @baseWidth*4.48;
            height: @baseHeight*2.3;
            border: @baseBorderWidth solid @baseBorderColor;
            border-radius: @border-radius;
            margin: @baseMargin*.3 @baseMargin*.3;
            background-color: @color-white;
            p{
                font-size: @font-size14;
                padding-left: @basePadding;
                line-height: @baseLineHeight*2.3;
                span{
                    color: @color-yel;
                }
                &:nth-child(1){
                    padding-top: @basePadding*2;
                    padding-bottom: @basePadding*1;
                }
            }
        }
    }
</style>