<template>
    <div class="common-table">
        <div class="table">
            <div class="table-con">
                <div class="heard">
                    <div>序号</div>
                    <div>运营商</div>
                    <div>地区</div>
                    <div>产品名称</div>
                    <div>流量值（M）</div>
                    <div>有效期</div>
                    <div>市场价（元）</div>
                    <div>生效日期</div>
                    <div>秘价（元）</div>
                </div>
                <ul v-show="noData">
                    <li v-for="(item,index) of recordList" :key="item.id" :class="[((index + 1) % 2) == 0 ? 'bg' : '']">
                        <div v-text="index+1"></div>
                        <div v-text="item.operator"></div>
                        <div v-text="item.area"></div>
                        <div v-text="item.productName"></div>
                        <div v-text="item.flow"></div>
                        <div v-text="item.effective"></div>
                        <div v-text="item.marketPrice"></div>
                        <div><span v-text="item.takeEffect"></span></div>
                        <div><span v-text="item.secretPrice"></span></div>
                    </li>
                </ul>
                <div class="noData" v-show="!noData">
                    <img src="../../../../assets/image/productCenter/nodata.png" alt="">
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
                totalOrder: 20000,             // 数据总条数
                noData: true,
                recordList: [{
                    id: '1',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
                }, {
                    id: '2',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
                }, {
                    id: '3',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
                }, {
                    id: '4',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
                }, {
                    id: '5',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
                }, {
                    id: '6',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
                }, {
                    id: '7',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
                }, {
                    id: '8',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
                }, {
                    id: '9',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
                }, {
                    id: '10',
                    operator: '电信',
                    area: '浙江-杭州',
                    productName: '杭州电信2048M',
                    flow: '2048',
                    effective: '当月',
                    marketPrice: '200',
                    takeEffect: '即时',
                    secretPrice: '198'
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
    @import '../../../../assets/less/public/var.less';
    .common-table{
        width: 100%;
        height: @baseHeight*4.52;
        .table{
            width: @baseWidth*11.18;
            .table-con{
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
                            width: 11%;
                        }
                        &:nth-child(3){
                            width: 11%;
                        }
                        &:nth-child(4){
                            width: 13%;
                        }
                        &:nth-child(5){
                            width: 12%;
                        }
                        &:nth-child(6){
                            width: 12%;
                        }
                        &:nth-child(7){
                            width: 12%;
                        }
                        &:nth-child(8){
                            width: 12%;
                        }
                        &:nth-child(9){
                            width: 12.25%;
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
                                width: 11%;
                            }
                            &:nth-child(3){
                                width: 11%;
                            }
                            &:nth-child(4){
                                width: 13%;
                            }
                            &:nth-child(5){
                                width: 12%;
                            }
                            &:nth-child(6){
                                width: 12%;
                            }
                            &:nth-child(7){
                                width: 12%;
                            }
                            &:nth-child(8){
                                width: 12%;
                            }
                            &:nth-child(9){
                                width: 12.25%;
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