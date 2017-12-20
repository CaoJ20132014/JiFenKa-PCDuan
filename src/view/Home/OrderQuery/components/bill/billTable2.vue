<template>
    <div class="common-table">
        <div class="table">
            <div class="table-top">
                <div>充值记录</div>
            </div>
            <div class="table-con">
                <div class="heard">
                    <div>序号</div>
                    <div>订单号</div>
                    <div>手机号码</div>
                    <div>充值时间</div>
                    <div>运营商</div>
                    <div>充值状态</div>
                    <div>地区</div>
                    <div>充值金额（元）</div>
                    <div>小票</div>
                </div>
                <ul v-show="noData">
                    <li v-for="(item,index) of recordList" :key="item.id" :class="[((index + 1) % 2) == 0 ? 'bg' : '']">
                        <div v-text="index+1"></div>
                        <div v-text="item.order"></div>
                        <div v-text="item.phone"></div>
                        <div v-text="item.time"></div>
                        <div v-text="item.shop"></div>
                        <div v-text="item.state"></div>
                        <div v-text="item.diqu"></div>
                        <div><span v-text="(item.cash-0).toFixed(2)"></span></div>
                        <div v-text="item.xiaoqiao"></div>
                    </li>
                </ul>
                <div class="noData" v-show="!noData">
                    <img src="../../../../../assets/image/orderQuery/index/nodata.png" alt="">
                    <span>没有找到记录，请调整搜索条件。</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                noData: true,
                recordList: [{
                    id: '1',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }, {
                    id: '2',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }, {
                    id: '3',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }, {
                    id: '4',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }, {
                    id: '5',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }, {
                    id: '6',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }, {
                    id: '7',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }, {
                    id: '8',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }, {
                    id: '9',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }, {
                    id: '10',
                    order: '123456789',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    diqu: '浙江',
                    cash: '1000',
                    koukuan: '998',
                    xiaoqiao: '否'
                }]
            }
        },
        methods: {
            changePage(value){
                console.log(value);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/public/var.less';
    .common-table{
        width: 100%;
        height: @baseHeight*4.87;
        .table{
            width: @baseWidth*11.18;
            margin-top: @baseMargin;
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
                            width: 4%;
                        }
                        &:nth-child(2){
                            width: 17%;
                        }
                        &:nth-child(3){
                            width: 16%;
                        }
                        &:nth-child(4){
                            width: 13%;
                        }
                        &:nth-child(5){
                            width: 12%;
                        }
                        &:nth-child(6){
                            width: 9%;
                        }
                        &:nth-child(7){
                            width: 9%;
                        }
                        &:nth-child(8){
                            width: 13%;
                        }
                        &:nth-child(9){
                            width: 6.2%;
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
                                width: 4%;
                            }
                            &:nth-child(2){
                                width: 17%;
                            }
                            &:nth-child(3){
                                width: 16%;
                            }
                            &:nth-child(4){
                                width: 13%;
                            }
                            &:nth-child(5){
                                width: 12%;
                            }
                            &:nth-child(6){
                                width: 9%;
                            }
                            &:nth-child(7){
                                width: 9%;
                            }
                            &:nth-child(8){
                                width: 13%;
                            }
                            &:nth-child(9){
                                width: 6.2%;
                                border-right: 0;
                            }
                        }
                    }
                    .bg{
                        background-color: @color-fa;
                    }
                }
                .noData{
                    text-align: center;
                    padding-top: @basePadding*5;
                    span{
                        vertical-align: top;
                        line-height: @baseLineHeight*8;
                        padding-left: @basePadding;
                    }
                }
            }
        }
    }
</style>