<template>
    <div id="default">
        <div class="recharge-rt">
            <div v-show="isShow">
                <div class="rt-top">
                    <el-carousel :interval="3000" trigger="click">
                        <el-carousel-item v-for="item in bannerList" :key="item.id">
                            <img :src="item.imgsrc"/>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div v-show="!isShow" class="chart">
                <div class="top">
                    <p class="p-commin">
                        <img src="../../../../assets/image/recharge/default/zhanghao.png" alt="">
                        <span>系统账号：</span>
                        <span>{{Account}}</span>
                    </p>
                    <p class="p-commin">
                        <img src="../../../../assets/image/recharge/default/qiandai.png" alt="">
                        <span>供卡余额：</span>
                        <span>{{balance.toFixed(2)}}元</span>
                        <span>报警金额：</span>
                        <span>{{alarmBalance.toFixed(2)}}元</span>
                        <span>账户加款</span>
                        <span @click="setAlarm">余额警报</span>
                    </p>
                </div>
                <div class="bot">
                    <div class="charts">
                        <XChart1 v-show="isChart" :id="chartId1" :option="option1"></XChart1>
                        <XChart1 v-show="!isChart" :id="chartId2" :option="option2"></XChart1>
                        <p>
                            <span>{{money.month}}</span>
                            <span>经营概况</span>
                            <span>（面值：</span><span>{{money.mianzhi.toFixed(2)}}元、</span>
                            <span>扣款：</span><span>{{money.koukuan.toFixed(2)}}元、</span>
                            <span>利润：</span><span>{{money.lirun.toFixed(2)}}元）</span>
                        </p>
                    </div>
                    <div class="right">
                        <p>
                            <img @click="changzhuzhuangtu" src="../../../../assets/image/recharge/default/zhuzhuangtu.png" alt="">
                            <img @click="changzhexiantu" src="../../../../assets/image/recharge/default/zhexiantu.png" alt="">
                        </p>
                        <p class="common">
                            <img src="../../../../assets/image/recharge/default/pur.png" alt=""><span>面值总额</span>
                        </p>
                        <p class="common">
                            <img src="../../../../assets/image/recharge/default/yellow.png" alt=""><span>扣款总额</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="rt-bot">
                <div class="bot-lt"></div>
                <div class="bot-rt">
                    <p>
                        <img src="../../../../assets/image/recharge/index/qq.png" alt="">
                        <span>售卡顾问</span>
                        <img src="../../../../assets/image/recharge/index/qq.png" alt="">
                        <span>售卡顾问</span>
                    </p>
                    <p>
                        <img src="../../../../assets/image/recharge/index/qq.png" alt="">
                        <span>商务合作</span>
                        <img src="../../../../assets/image/recharge/index/qq.png" alt="">
                        <span>商务合作</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import a from "../../../../assets/image/recharge/baner/1.jpg";
	import b from "../../../../assets/image/recharge/baner/2.jpg";
	import c from "../../../../assets/image/recharge/baner/3.jpg";
	import d from "../../../../assets/image/recharge/baner/4.jpg";
    import e from "../../../../assets/image/recharge/baner/5.jpg";
    import XChart1 from './components/chart1.vue';
    import XChart2 from './components/chart2.vue';
    export default{
        data(){
            return{
                isShow: false,
                isChart: true,
                Account: "15617858292",     // 系统账号
                balance: 1000,              // 供卡余额
                alarmBalance: 0,            // 报警余额
                activeIndex: 0,				// 滚动的位置
				bannerList:[{
					id:1,
					imgsrc: a
				},{
					id:2,
					imgsrc: b
				},{
					id:3,
					imgsrc: c
				},{
					id:4,
					imgsrc: d
				},{
					id:5,
					imgsrc: e
                }],
                money:{
                    month: "7月",      // 月份
                    mianzhi: 10,        // 面值
                    koukuan: 10,        // 扣款
                    lirun: 10           // 利润
                },
                chartId1: 'test1',
                chartId2: 'test2',
                option1: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: null
                    },credits:{
                        enabled: false           // 禁用版权信息
                    },
                    xAxis: {                     // x轴显示的内容
                        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    　　　　　　　　　　　plotbands:[{             // 可以显示一个方块，如果需要的话可以更改透明度和颜色
    　　　　　　　　　　　　　from:4.5,
    　　　　　　　　　　　　　to:6.5,
    　　　　　　　　　　　　　color:'rgba(68,170,213,0)'                 // 透明度和颜色
    　　　　　　　　　　　}],
                        tickWidth: 1
                    },
                    yAxis: {                    // y轴显示的内容
                        title: {
                            text: '气温 (°C)'
                        },
                        gridLineDashStyle: 'Dash',
                        gridLineColor: '#e9e9e9' 
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true // 开启数据标签
                            },
                            enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                        }
                    },
                    series: [{//两条数据
                        name: '东京',
                        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                        showInLegend: false, // 设置为 false 即为不显示在图例中
                        color : "#8f75ce"
                    }, {
                        name: '伦敦',
                        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
                        showInLegend: false, // 设置为 false 即为不显示在图例中
                        color : "#fcba32"
                    }]
                },
                option2: {
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: null
                    },credits:{
                        enabled: false           // 禁用版权信息
                    },
                    xAxis: {                     // x轴显示的内容
                        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    　　　　　　　　　　　plotbands:[{             // 可以显示一个方块，如果需要的话可以更改透明度和颜色
    　　　　　　　　　　　　　from:4.5,
    　　　　　　　　　　　　　to:6.5,
    　　　　　　　　　　　　　color:'rgba(68,170,213,0)'                 // 透明度和颜色
    　　　　　　　　　　　}],
                        tickWidth: 1
                    },
                    yAxis: {                    // y轴显示的内容
                        title: {
                            text: '气温 (°C)'
                        },
                        gridLineDashStyle: 'Dash',
                        gridLineColor: '#e9e9e9' 
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true // 开启数据标签
                            },
                            enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                        }
                    },
                    series: [{//两条数据
                        name: '东京',
                        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                        showInLegend: false, // 设置为 false 即为不显示在图例中
                        color : "#8f75ce"
                    }, {
                        name: '伦敦',
                        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
                        showInLegend: false, // 设置为 false 即为不显示在图例中
                        color : "#fcba32"
                    }]
                }
            }
        },
        methods: {
            changzhuzhuangtu(){
                this.isChart = true;
            },
            changzhexiantu(){
                this.isChart = false;
            },
            setAlarm(){
                this.$prompt('*余额低于提醒值时，系统自动报警提示加款，设置“0”为关闭提示', '设置余额提醒值', {
                    confirmButtonText: '确定',
                    customClass: 'firstAlert',
                    showCancelButton: false,
                    confirmButtonClass: 'confirm',
                    inputPlaceholder: '请输入提醒值',
                    center: true
                }).then(({ value }) => {
                    console.log(value);
                }).catch(() => {
                             
                });
            }
        },
        components: {
            XChart1,
            XChart2
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../assets/less/recharge/default/default.less";
</style>