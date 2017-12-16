<template>
    <div class="order-detail">
        <div class="top-notice">订单统计：提供时间范围内的订单经营概况（统计时间跨度不得超过10天）</div>
        <div class="common info">
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
            <div class="buttons">
                <el-button class="query">查询</el-button>
            </div>
        </div>
        <div class="table-list">
            <TableList></TableList>
        </div>
    </div>
</template>
<script>
    import TableList from '../components/census/table.vue';
    export default {
        components: {
            TableList
        },
        data () {
            return {
                choosed2: '1',          // 状态
                start: '',              // 起始时间
                end: '',                // 结束时间
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
                options: [{
                    value: '1',
                    label: '电信'
                }, {
                    value: '2',
                    label: '移动'
                }, {
                    value: '3',
                    label: '联通'
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
            choose1(index,item){
                this.choosed1 = index+1;
            },
            choose2(index,item){
                this.choosed2 = index+1;
            },
            whetherShow(value){
                if (!value) {
                    this.isShow = false;
                } else {
                    this.isShow = true;
                }
            },
            isRefresh(value){
                console.log(value);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../assets/less/orderQuery/census/index.less';
</style>