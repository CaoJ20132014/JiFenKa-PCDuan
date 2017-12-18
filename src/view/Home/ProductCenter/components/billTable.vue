<template>
    <div class="common-table">
        <div class="table">
            <div class="table-con">
                <div class="heard">
                    <ul class="ul-heard">
                        <li v-for="item in titleList" :key="item.id" v-text="item.type"></li>
                    </ul>
                </div>
                <ul v-show="noData" class="ul-con">
                    <li v-for="(item,index) of recordList" :key="item.id" :class="[((index + 1) % 2) == 0 ? 'bg' : '']">
                        <div v-text="index+1"></div>
                        <div v-text="item.operator"></div>
                        <div v-text="item.area"></div>
                        <div v-text="item.ten"></div>
                        <div v-text="item.twenty"></div>
                        <div v-text="item.thirty"></div>
                        <div v-text="item.fifty"></div>
                        <div><span v-text="item.oneHundred"></span></div>
                        <div><span v-text="item.twoHundred"></span></div>
                        <div v-text="item.threeHundred"></div>
                        <div v-text="item.fiveHundred"></div>
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
                titleList:[{
                    id: '1',
                    type: '序号'
                }, {
                    id: '2',
                    type: '运营商'
                }, {
                    id: '3',
                    type: '地区'
                }, {
                    id: '4',
                    type: '10元'
                }, {
                    id: '5',
                    type: '20元'
                }, {
                    id: '6',
                    type: '30元'
                }, {
                    id: '7',
                    type: '50元'
                }, {
                    id: '8',
                    type: '100元'
                }, {
                    id: '9',
                    type: '200元'
                }, {
                    id: '10',
                    type: '300元'
                }, {
                    id: '11',
                    type: '500元'
                }],
                recordList: [{
                    id: '1',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
                }, {
                    id: '2',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
                }, {
                    id: '3',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
                }, {
                    id: '4',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
                }, {
                    id: '5',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
                }, {
                    id: '6',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
                }, {
                    id: '7',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
                }, {
                    id: '8',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
                }, {
                    id: '9',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
                }, {
                    id: '10',
                    operator: '电信',
                    area: '浙江-杭州',
                    ten: '99.800%',
                    twenty: '99.800%',
                    thirty: '99.800',
                    fifty: '99.800%',
                    oneHundred: '99.800%',
                    twoHundred: '99.800%',
                    threeHundred: '99.800%',
                    fiveHundred: '99.800%'
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
        height: @baseHeight*4.87;
        .table{
            width: @baseWidth*11.18;
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
                .heard{
                    height: @baseHeight*0.4;
                    font-size: 0;
                    border: @baseBorderWidth solid @baseBorderColor;
                    .ul-heard{
                        width: 100%;
                        display: inline-block;
                        vertical-align: top;
                        height: @baseHeight*0.4;
                        font-size: 0;
                        background-color: @color-fa;
                        li{
                            display: inline-block;
                            list-style: none;
                            font-size: @font-size14;
                            height: @baseHeight*0.4;
                            text-align: center;
                            line-height: @baseLineHeight*4;
                            border-right: @baseBorderWidth solid @baseBorderColor;
                            &:nth-child(1){
                                width: 4%;
                            }
                            &:nth-child(2){
                                width: 12%;
                            }
                            &:nth-child(3){
                                width: 12%;
                            }
                            &:nth-child(4){
                                width: 8%;
                            }
                            &:nth-child(5){
                                width: 8%;
                            }
                            &:nth-child(6){
                                width: 8%;
                            }
                            &:nth-child(7){
                                width: 8%;
                            }
                            &:nth-child(8){
                                width: 10%;
                            }
                            &:nth-child(9){
                                width: 10%;
                            }
                            &:nth-child(10){
                                width: 10%;
                            }
                            &:nth-child(11){
                                width: 9.11%;
                                border-right: 0;
                            }
                        }
                    }
                }
                .ul-con{
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
                                width: 12%;
                            }
                            &:nth-child(3){
                                width: 12%;
                            }
                            &:nth-child(4){
                                width: 8%;
                            }
                            &:nth-child(5){
                                width: 8%;
                            }
                            &:nth-child(6){
                                width: 8%;
                            }
                            &:nth-child(7){
                                width: 8%;
                            }
                            &:nth-child(8){
                                width: 10%;
                            }
                            &:nth-child(9){
                                width: 10%;
                            }
                            &:nth-child(10){
                                width: 10%;
                            }
                            &:nth-child(11){
                                width: 9.11%;
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