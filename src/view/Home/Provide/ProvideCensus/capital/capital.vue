<template>
    <div class="table_box" id="reachge">
        <div class="public_box">
            <div class="public public2">
                <div class="lable">供货时间：</div>
                <el-date-picker v-model="value1" :class="{'grey':value1 == ''}" type="datetime" placeholder="选择起始时间"></el-date-picker>
                <div class="div">--</div> 
                <el-date-picker v-model="value2" :class="{'grey':value2 == ''}" type="datetime" placeholder="选择结束时间"></el-date-picker>
            </div>
            <div class="public sup">
                <div class="lable">批次号/SUP订单号：</div>
                <el-input placeholder="请输入批次号" v-model="input1" :class="{'grey':input1 == ''}" class="piciNum"></el-input>
            </div>
        </div>
        <div class="public_box otherCard">
            <div class="public">
                <div class="lable">类型：</div>
                <el-select v-model="optionValue1" :class="{'grey':optionValue1 == ''}" placeholder="请选择">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="public">
                <el-button @click="startQudey" class="query" @keydown.enter.tab.stop.self="startQuery">查询</el-button>
                <a :href="download" download="mould">
                    <el-button class="export">导出</el-button>
                </a>
            </div>
        </div>
        <div class="table">
            <el-table :data="items" border stripe style="width: 100%">
                <el-table-column prop="serial_number" align="center" width="220" label="批次号"></el-table-column>
                <el-table-column prop="pay_account" align="center" label="卡号"></el-table-column>
                <el-table-column prop="time" align="center" width="160" label="交易时间"></el-table-column>
                <el-table-column prop="withdraw" align="center" width="55" label="金额"></el-table-column>
                <el-table-column prop="business_type" align="center" width="80" label="类型"></el-table-column>
                <el-table-column prop="reckon" align="center" width="55" label="余额"></el-table-column>
                <el-table-column prop="ps" align="center" width="80" label="备注"></el-table-column>
                <el-table-column align="center" width="65" label="进度">
                    <template slot-scope="scope">
                        <el-tag type="danger" size="small" @click.native="lookDetail(scope.row)">进度</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div v-show="show" class="pagination">
            <Pagination @pageChange="pageNum" :paginationData='paginationData'></Pagination>
        </div>
    </div>
</template>
<script>
    import Pagination from '@/components/Pagination/Pagination';
    import Public from '@/until/until';
    import { capitalDetail, WithdrawDetail, exportExcel } from '@/until/getData';
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
                download: 'https://a.91jfk.com/ProvideHome/Provide/bank_card',
                input1: '',
                show: false,
                total: 100,                  // 表格的总条数
                optionValue1: '',
                value1: '',
                value2: '',
                options1: [
                    {value: '1',label: '收入'}, 
                    {value: '2',label: '支出'}, 
                    {value: '3',label: '转结'}
                ],
                items:[],
                currentPage: 1,
            }
        },
        watch: {
            value1(){
                this.download = 'https://a.91jfk.com/ProvideHome/Provide/bank_card?starttime='+moment(this.value1).format('YYYY-MM-DD HH:MM:SS')+'&overtime='+moment(this.value2).format('YYYY-MM-DD HH:MM:SS');
            },
            value2(){
                this.download = 'https://a.91jfk.com/ProvideHome/Provide/bank_card?starttime='+moment(this.value1).format('YYYY-MM-DD HH:MM:SS')+'&overtime='+moment(this.value2).format('YYYY-MM-DD HH:MM:SS');
            }
        },
        methods:{
            startQudey(){
                this.paginationData.activePage = 1;
                let page = this.paginationData.activePage;
                this.getData(page);
            },
            lookDetail(row){
                const h = this.$createElement;
                let data = {
                    serial_number: row.serial_number
                }
                WithdrawDetail(data).then(res => {
                    // console.log(res);
                    if (res.code == 1) {
                        this.$msgbox({
                            title: '提现详情',
                            message: h('div', null, [
                                h('p', {style: 'line-height: 20px'}, [
                                    h('span',null,'卡号：'),
                                    h('span',{style: 'color: red'},res.msg.account)
                                ]),
                                h('p', {style: 'line-height: 20px'}, [
                                    h('span',null,'订单号：'),
                                    h('span',{style: 'color: red'},res.msg.serial_number)
                                ]),
                                h('p', {style: 'line-height: 20px'}, [
                                    h('span',null,'持卡人：'),
                                    h('span',{style: 'color: red'},res.msg.name)
                                ]),
                                h('p', {style: 'line-height: 20px'}, [
                                    h('span',null,'银行卡：'),
                                    h('span',{style: 'color: red'},res.msg.card_type)
                                ]),
                                h('p', {style: 'line-height: 20px'}, [
                                    h('span',null,'提现金额：'),
                                    h('span',{style: 'color: red'},(eval(res.msg.cash_price)/100).toFixed(2)+'元')
                                ]),
                                h('p', {style: 'line-height: 20px'}, [
                                    h('span',null,'提现时间：'),
                                    h('span',{style: 'color: red'},res.msg.create_time)
                                ]),
                                h('p', {style: 'line-height: 20px'}, [
                                    h('span',null,'提现类型：'),
                                    h('span',{style: 'color: red'},'供卡余额提现')
                                ]),
                                h('p', {style: 'line-height: 20px'}, [
                                    h('span',null,'提现状态：'),
                                    h('span',{style: 'color: red'},res.msg.progress)
                                ])
                            ]),
                            showCancelButton: false,
                            confirmButtonText: '确定',
                            customClass: 'WithdrawDetailMessage'
                        }).then(action => {
                            
                        }).catch(action => {
                            
                        });
                    } else {
                        Public.topAlert('warning', res.msg);
                    }
                }).catch(err => {
                    // console.log(err);
                });
            },
            pageNum(val){
                this.paginationData.activePage = val;
                let page = val;
                this.getData(page);
            },
            getData(page){
                let data = {};
                if (this.optionValue1 != '') {
                    data['state'] = this.optionValue1;
                }
                if (this.input1 != '') {
                    data['business_type'] = this.input1;
                }
                if (this.value1 != '') {
                    data['starttime'] = moment(this.value1).format('YYYY-MM-DD HH:MM:SS');
                }
                if (this.value2 != '') {
                    data['overtime'] = moment(this.value2).format('YYYY-MM-DD HH:MM:SS');
                }
                capitalDetail(page, data).then(res => {
                    // console.log(res);
                    if (res.code == '1') {
                        this.show = true;
                        res.msg.forEach(item => {
                            item['reckon'] = (eval(item.balance)/100).toFixed(2);
                            item['withdraw'] = (eval(item.price)/100).toFixed(2);
                        });
                        this.items = res.msg;
                        this.paginationData.totalNum = eval(res.total);
                    } else {
                        Public.topAlert('warning', res.msg);
                        this.items = [];
                    }
                }).catch(err => {
                    // console.log(err);
                });
            }
        }
    }
</script>
<style lang='less' scoped>
    @import '../../../../../style/less/Provide/Census/capital.less';
</style>
