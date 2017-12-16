<template>
    <div class="order-detail">
        <div class="top-notice">订单明细：提供所有充值结果的条件查询以及导出记录（查询时间跨度不得超过10天，导出不得超过1天）</div>
        <div class="common">
            <div class="lable">供卡名称：</div>
            <div class="ul-list">
                <ul>
                    <li v-for="(item,index) in typeList" :key="item.id" :class="[choosed1 == (index+1) ? 'active' : '']" @click="choose1(index,item)">
                        <span v-text="item.name"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="common info">
            <div class="order">
                <div class="lable">订单编号：</div>
                <el-input placeholder="订单编号" v-model="input1" clearable></el-input>
            </div>
            <div class="phone" v-show="choosed1 != '3'">
                <div class="lable">充值号码：</div>
                <el-input placeholder="充值号码" :maxlength="11" v-model="input2" clearable></el-input>
            </div>
            <div class="phone fuel" v-show="choosed1 == '3'">
                <div class="lable">加油卡卡号：</div>
                <el-input placeholder="加油卡卡号" :maxlength="19" v-model="input3" clearable></el-input>
            </div>
            <div class="time">
                <div class="lable">充值时间：</div>
                <el-date-picker v-model="start" type="datetime" placeholder="选择日期时间"></el-date-picker> - 
                <el-date-picker v-model="end" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </div>
        </div>
        <div class="common operation">
            <div class="lable">交易状态：</div>
            <div class="ul-list">
                <ul>
                    <li v-for="(item,index) in stateList" :key="item.id" :class="[choosed2 == (index+1) ? 'active' : '']" @click="choose2(index,item)">
                        <span v-text="item.name"></span>
                    </li>
                </ul>
            </div>
            <div class="select" v-show="choosed1 != '3'">
                <div class="lable">运营商：</div>
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="select" v-show="choosed1 == '3'">
                <div class="lable">运营商：</div>
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <el-checkbox v-model="checked1" @change='whetherShow'>显示扣款金额</el-checkbox>
            <el-checkbox v-model="checked2" @change='isRefresh'>定时刷新/分钟</el-checkbox>
            <div class="buttons">
                <el-button class="query">查询</el-button>
                <el-button class="export">导出</el-button>
            </div>
        </div>
        <div class="table-list">
            <BillTable1 v-show="choosed1 == '1' && checked1"></BillTable1>
            <BillTable2 v-show="choosed1 == '1' && !checked1"></BillTable2>
            <FlowTable1 v-show="choosed1 == '2' && checked1"></FlowTable1>
            <FlowTable2 v-show="choosed1 == '2' && !checked1"></FlowTable2>
            <FuelTable1 v-show="choosed1 == '3' && checked1"></FuelTable1>
            <FuelTable2 v-show="choosed1 == '3' && !checked1"></FuelTable2>
        </div>
        <div class="pagination" v-show="noData">
            <el-pagination background layout="prev, pager, next, jumper" :current-page.sync='nowPage' @current-change='changePage' :total="totalOrder"></el-pagination>
        </div>
    </div>
</template>
<script>
    import BillTable1 from '../components/bill/billTable1.vue';
    import BillTable2 from '../components/bill/billTable2.vue';
    import FlowTable1 from '../components/flow/flowTable1.vue';
    import FlowTable2 from '../components/flow/flowTable2.vue';
    import FuelTable1 from '../components/fuel/fuelTable1.vue';
    import FuelTable2 from '../components/fuel/fuelTable2.vue';
    export default {
        components: {
            BillTable1,
            BillTable2,
            FlowTable1,
            FlowTable2,
            FuelTable1,
            FuelTable2
        },
        data () {
            return {
                noData: true,           // 是否显示分页
                totalOrder: 20000,      // 数据总条数
                nowPage: 1,             // 初始页
                choosed1: '1',          // 类型 话费、流量、加油卡
                choosed2: '1',          // 状态 全部、充值中、成功、失败
                input1: '',             // 订单编号
                input2: '',             // 充值号码
                input3: '',             // 加油卡卡号
                start: '',              // 起始时间
                end: '',                // 结束时间
                value: '',              // 运营商
                checked1: true,
                checked2: true,
                typeList: [{
                    id: '1',
                    name: '话费充值'
                }, {
                    id: '2',
                    name: '流量充值'
                }, {
                    id: '3',
                    name: '加油卡充值'
                }],
                options1: [{
                    value: '1',
                    label: '电信'
                }, {
                    value: '2',
                    label: '移动'
                }, {
                    value: '3',
                    label: '联通'
                }],
                options2: [{
                    value: '1',
                    label: '中石化'
                }, {
                    value: '2',
                    label: '中石油'
                }],
                stateList: [{
                    id: '1',
                    name: '全部'
                }, {
                    id: '2',
                    name: '充值成功'
                }, {
                    id: '3',
                    name: '充值中'
                }, {
                    id: '4',
                    name: '充值失败'
                }]
            }
        },
        methods:{
            choose1(index,item){        // 选择话费、流量、加油卡
                this.choosed1 = index+1;
                this.nowPage = 1;
            },
            choose2(index,item){        // 选择全部、充值中、成功、失败
                this.choosed2 = index+1;
                this.nowPage = 1;
            },
            whetherShow(value){         // 是否显示扣款金额
                this.nowPage = 1;
                if (!value) {
                    this.isShow = false;
                } else {
                    this.isShow = true;
                }
            },
            isRefresh(value){           // 是否显示刷新
                console.log(value);
            },
            changePage(value){          // 页码改变
                console.log(value);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../assets/less/orderQuery/orderDetail/index.less';
</style>