<template>
    <div class="common-table">
        <div class="table">
            <div class="table-top">
                <div>充值记录</div>
                <div>查看更多</div>
            </div>
            <div class="table-con">
                <div class="heard">
                    <div>加油卡卡号</div>
                    <div>时间</div>
                    <div>充值金额（元）</div>
                    <div>扣款金额（元）</div>
                    <div>商品名称</div>
                    <div>状态</div>
                </div>
                <ul>
                    <li v-for="(item,index) of recordList" :key="item.id" :class="[((index + 1) % 2) == 0 ? 'bg' : '']">
                        <div v-text="item.fuelCard"></div>
                        <div v-text="item.time"></div>
                        <div v-text="(item.cash-0).toFixed(2)"></div>
                        <div v-text="(item.koukuan-0).toFixed(2)"></div>
                        <div v-text="item.shop"></div>
                        <div><span v-text="item.state"></span></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                recordList: [{
                    id: '1',
                    fuelCard: '1000113300016166236',
                    time: '2017-12-16 15:24',
                    shop: '中石化加油卡',
                    state: '充值成功',
                    cash: '1000',
                    koukuan: '998'
                }, {
                    id: '2',
                    fuelCard: '1000113300016166236',
                    time: '2017-12-16 15:24',
                    shop: '中石化加油卡',
                    state: '充值成功',
                    cash: '1000',
                    koukuan: '998'
                }, {
                    id: '3',
                    fuelCard: '1000113300016166236',
                    time: '2017-12-16 15:24',
                    shop: '中石化加油卡',
                    state: '充值成功',
                    cash: '1000',
                    koukuan: '998'
                }, {
                    id: '4',
                    fuelCard: '1000113300016166236',
                    time: '2017-12-16 15:24',
                    shop: '中石化加油卡',
                    state: '充值成功',
                    cash: '1000',
                    koukuan: '998'
                }, {
                    id: '5',
                    fuelCard: '1000113300016166236',
                    time: '2017-12-16 15:24',
                    shop: '中石化加油卡',
                    state: '充值成功',
                    cash: '1000',
                    koukuan: '998'
                }]
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/public/var.less';
    .common-table{
        width: 100%;
        height: @baseHeight*2.41;
        .table{
            width: @baseWidth*9.08;
            margin-top: @baseMargin*1.5;
            .table-top{
                width: 100%;
                height: @baseHeight/4;
                div{
                    line-height: @baseLineHeight*2.5;
                    &:nth-child(1){
                        float: left;
                        width: @baseWidth*1.04;
                        padding-left: @basePadding*1.5;
                        border-left: @baseBorderWidth*3 solid @color-common;
                    }
                    &:nth-child(2){
                        float: right;
                        width: @baseWidth*.7;
                        text-align: right;
                        color: @color-common;
                        &:hover{
                            cursor: pointer;
                        }
                    }
                }
            }
            .table-con{
                padding-top: @basePadding;
                .heard{
                    height: @baseHeight*0.4;
                    font-size: 0;
                    border: @baseBorderWidth solid @baseBorderColor;
                    div{
                        display: inline-block;
                        height: @baseHeight*0.4;
                        font-size: @font-size14;
                        background-color: @color-fa;
                        text-align: center;
                        line-height: @baseLineHeight*4;
                        border-right: @baseBorderWidth solid @baseBorderColor;
                        &:nth-child(1){
                            width: 20.9%;
                        }
                        &:nth-child(2){
                            width: 14.9%;
                        }
                        &:nth-child(3){
                            width: 14.9%;
                        }
                        &:nth-child(4){
                            width: 14.9%;
                        }
                        &:nth-child(5){
                            width: 18.82%;
                        }
                        &:nth-child(6){
                            width: 14.96%;
                            border-right: 0;
                        }
                    }
                }
                ul{
                    border: @baseBorderWidth solid @baseBorderColor;
                    border-top: 0;
                    border-bottom: 0;
                    li{
                        width: 100%;
                        list-style: none;
                        font-size: 0;
                        height: @baseHeight*0.4;
                        border-bottom: @baseBorderWidth solid @baseBorderColor;
                        div{
                            display: inline-block;
                            height: @baseHeight*0.4;
                            font-size: @font-size14;
                            text-align: center;
                            line-height: @baseLineHeight*4;
                            border-right: @baseBorderWidth solid @baseBorderColor;
                            &:nth-child(1){
                                width: 20.9%;
                            }
                            &:nth-child(2){
                                width: 14.9%;
                            }
                            &:nth-child(3){
                                width: 14.9%;
                            }
                            &:nth-child(4){
                                width: 14.9%;
                            }
                            &:nth-child(5){
                                width: 18.82%;
                            }
                            &:nth-child(6){
                                width: 14.96%;
                                border-right: 0;
                            }
                        }
                    }
                    .bg{
                        background-color: @color-fa;
                    }
                }
            }
        }
    }
</style>