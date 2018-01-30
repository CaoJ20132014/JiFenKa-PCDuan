<template>
    <div class="table_box" id="reachge">
        <div class="public_box">
            <div class="public">
                <div class="lable">供货名称：</div>
                <el-select v-model="optionValue1" :class="{'grey':optionValue1 == ''}" placeholder="请选择">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="public public2">
                <div class="lable">供货时间：</div>
                <el-date-picker v-model="value1" type="datetime" placeholder="选择起始时间" :class="{'grey':value1 == ''}"></el-date-picker>
                <div class="div">--</div> 
                <el-date-picker v-model="value2" type="datetime" placeholder="选择结束时间" :class="{'grey':value2 == ''}"></el-date-picker>
            </div>
        </div>
        <div class="public_box otherCard">
            <div class="public">
                <div class="lable">商品面额：</div>
                <el-select v-model="optionValue2" :class="{'grey':optionValue2 == ''}" placeholder="请选择">
                    <el-option v-for="(item,index) in options2" :key="index" :label="item.worth" :value="item.worth"></el-option>
                </el-select>
            </div>
            <div class="public">
                <el-button @click="StartQuery" @keydown.enter.tab.stop.self="StartQuery">查询</el-button>
            </div>
        </div>
        <div class="table">
            <el-table :data="items" border stripe style="width: 100%">
                <el-table-column prop="card_type" align="center" label="供货名称"></el-table-column>
                <el-table-column prop="worth" align="center" width="80" label="面额"></el-table-column>
                <el-table-column prop="amount1" align="center" label="供货数量"></el-table-column>
                <el-table-column prop="number1" align="center" label="供货金额"></el-table-column>
                <el-table-column prop="amount2" align="center" label="成功数量"></el-table-column>
                <el-table-column prop="number2" align="center" label="成功金额"></el-table-column>
                <el-table-column prop="amount3" align="center" label="处理中数量"></el-table-column>
                <el-table-column prop="amount4" align="center" label="失败数量"></el-table-column>
                <el-table-column prop="number3" align="center" label="失败金额"></el-table-column>
            </el-table>
        </div>
        <div v-if="show" class="pagination">
            <Pagination @pageChange="pageNum" :paginationData='paginationData'></Pagination>
        </div>
    </div>
</template>
<script>
    import Pagination from '@/components/Pagination/Pagination';
    import Public from '@/until/until';
    import { getValue, census } from '@/until/getData';
    let moment = require('moment');
    export default {
        components:{
            Pagination
        },
		data() {
            return {
                paginationData: {
                    pageSize: 5,
                    totalNum: 0,
                    activePage: 1
                },
                input1:'',
                value1:'',
                value2:'',
                show: false,
                optionValue1:'',
                optionValue2:'',
                options1: [
                    {value: '3',label: '中国电信'}, 
                    {value: '1',label: '中国移动'}, 
                    {value: '2',label: '中国联通'}, 
                    {value: '4',label: '中国石化'}
                ],
                options2: [],
                items:[],
                currentPage: 1,
                nowPage: 1
            }
        },
        mounted () {
            // let page = this.paginationData.activePage;
            // this.getData(page);
        },
        watch: {
            nowPage(val){            // 监听当前页的变化，如果有变化开始请求当前页的数据
                this.paginationData.activePage = val;
                let page = this.paginationData.activePage;
                let data = {};
                if (this.optionValue1 != '') {
                    data['card_type'] = this.optionValue1;
                }
                if (this.optionValue2 != '') {
                    data['worth'] = this.optionValue2;
                }
                if (this.value1 != '') {
                    data['card_type'] = moment(this.value1).format('YYYY-MM-DD HH:MM:SS');
                }
                if (this.value2 != '') {
                    data['card_type'] = moment(this.value2).format('YYYY-MM-DD HH:MM:SS');
                }
                this.getData(page, data);
            },
            optionValue1(){
                let data = {};
                if (this.optionValue1 === '1') {
                    data.operator = '1';
                    this.getWorth(data);
                } else if (this.optionValue1 === '2') {
                    data.operator = '2';
                    this.getWorth(data);
                } else if (this.optionValue1 === '3') {
                    data.operator = '3';
                    this.getWorth(data);
                } else if (this.optionValue1 === '4') {
                    data.operator = '4';
                    this.getWorth(data);
                } else if (this.optionValue1 === '5') {
                    data.operator = '5';
                    this.getWorth(data);
                }
            }
        },
        methods:{
            StartQuery(){
                let page = this.paginationData.activePage;
                let data = {};
                if (this.optionValue1 != '') {
                    data['card_type'] = this.optionValue1;
                }
                if (this.optionValue2 != '') {
                    data['worth'] = this.optionValue2;
                }
                if (this.value1 != '') {
                    data['card_type'] = moment(this.value1).format('YYYY-MM-DD HH:MM:SS');
                }
                if (this.value2 != '') {
                    data['card_type'] = moment(this.value2).format('YYYY-MM-DD HH:MM:SS');
                }
                this.getData(page, data);
            },
            pageNum(val){
                this.nowPage = val;
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            daochu(){
                this.$message({
                    message: '导出成功',
                    type: 'success',
                    center: true
                });
            },
            getWorth(data){
                getValue(data).then(res => {
                    // console.log(res);
                    if (res.code == '1') {
                        this.options2 = res.msg;
                    } else if(res.code == 899 || res.code == 900){
                        // console.log(res.msg);
                    } else {
                        Public.topAlert('error', res.msg);
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
            getData(page, data){
                this.items = [];
                census(page,data).then(res => {
                    // console.log(res);
                    if (res.code == '1') {
                        this.show = true;
                        this.paginationData.totalNum = eval(res.total);
                        res.list.forEach(items1 => {
                            let obj = {};
                            obj.card_type = items1.card_type;
                            obj.worth = eval(items1.worth).toFixed(2);
                            obj.number1 = eval(items1.array.total_price).toFixed(2);
                            obj.amount1 = items1.array.total_card;
                            obj.number2 = eval(items1.array.ok_card).toFixed(2);
                            obj.amount2 = items1.array.ok_price;
                            obj.number3 = eval(items1.array.no_price).toFixed(2);
                            obj.amount3 = items1.array.ing_card;
                            obj.amount4 = items1.array.no_card;
                            this.items.push(obj);
                        });
                    } else {
                        Public.topAlert('error', res.msg);
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../style/less/Provide/Census/table.less';
</style>
