<template>
    <div class="order-detail">
        <div class="top-notice">订单统计：提供时间范围内的订单经营概况（统计时间跨度不得超过10天）</div>
        <div class="common info">
            <div class="phone">
                <div class="lable">订单号/充值号码：</div>
                <el-input placeholder="充值号码" v-model="input1" clearable></el-input>
            </div>
            <div class="time">
                <div class="lable">充值时间：</div>
                <el-date-picker v-model="start" type="datetime" placeholder="选择日期时间"></el-date-picker> - 
                <el-date-picker v-model="end" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </div>
        </div>
        <div class="common operation">
            <div class="lable">备注：</div>
            <el-input placeholder="备注" v-model="input2" clearable></el-input>
            <div class="select">
                <div class="lable">类型：</div>
                <el-select v-model="selectValue" placeholder="请选择">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="buttons">
                <el-button class="query">查询</el-button>
            </div>
        </div>
        <div class="table-list">
            <TableList></TableList>
        </div>
        <div class="pagination">
            <el-pagination background layout="prev, pager, next, jumper" :current-page.sync='nowPage' :total="totalOrder"></el-pagination>
        </div>
    </div>
</template>
<script>
    import TableList from '../components/detail/table.vue';
    export default {
        components: {
            TableList
        },
        data () {
            return {
                totalOrder: 20000,      // 数据总条数
                nowPage: 1,
                choosed1: '0',          // 类型
                input2: '',             // 备注
                input1: '',             // 充值号码
                start: '',              // 起始时间
                end: '',                // 结束时间
                selectValue: '',        // 类型
                options1: [{
                    value: '1',
                    label: '电信'
                }, {
                    value: '2',
                    label: '移动'
                }, {
                    value: '3',
                    label: '联通'
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
            },
            changePage(value){          // 页码改变
                console.log(value);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../assets/less/orderQuery/detail/index.less';
</style>