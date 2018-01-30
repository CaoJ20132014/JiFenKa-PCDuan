<template>
    <div class="reachge_box" id="reachge">
        <div class="public_box">
            <div class="public">
                <div class="lable">供卡名称：</div>
                <el-select v-model="optionValue1" :class="{'grey':optionValue1 == ''}" placeholder="请选择">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="public">
                <div class="lable">商品面值：</div>
                <el-select v-model="optionValue2" :class="{'grey':optionValue2 == ''}" placeholder="请选择">
                    <el-option v-for="(item,index) in options2" :key="index" :label="item.worth" :value="item.worth"></el-option>
                </el-select>
            </div>
            <div class="public">
                <div class="lable">发行地区：</div>
                <el-select v-model="optionValue3" :class="{'grey':optionValue3 == ''}" placeholder="请选择">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="public">
                <div class="lable">供货状态：</div>
                <el-select v-model="optionValue4" :class="{'grey':optionValue4 == ''}" placeholder="请选择">
                    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="public">
                <div class="lable">卡号：</div>
                <el-input placeholder="请输入卡号" type="number" v-model="input1" :class="{'grey':input1 == ''}" class="cardNum"></el-input>
            </div>
        </div>
        <div class="public_box">
            <div class="public public2">
                <div class="lable">供货时间：</div>
                <el-date-picker v-model="value1" :class="{'grey':value1 == ''}" type="datetime" placeholder="选择起始时间"></el-date-picker>
                <div class="div">--</div> 
                <el-date-picker v-model="value2" :class="{'grey':value2 == ''}" type="datetime" placeholder="选择结束时间"></el-date-picker>
            </div>
            <div class="public pici">
                <div class="lable">批次号：</div>
                <el-input placeholder="请输入批次号" v-model="input2" :class="{'grey':input2 == ''}" class="piciNum"></el-input>
            </div>
            <div class="public">
                <el-button @click="startQuery" :disabled="Disabled" @keydown.enter.tab.stop.self="startQuery">查询</el-button>
                <!-- <el-button @click="daochu">导出</el-button> -->
            </div>
        </div>
        <div class="table">
            <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="card_code" align="center" label="卡号"></el-table-column>
                <el-table-column prop="up_time" align="center" width="95" label="供货时间"></el-table-column>
                <el-table-column prop="use_time" align="center" width="95" label="完成时间"></el-table-column>
                <el-table-column prop="card_type" align="center" width="80" label="运营商"></el-table-column>
                <el-table-column prop="worth" align="center" width="70" label="面额(元)"></el-table-column>
                <el-table-column prop="area" align="center" width="80" label="地区"></el-table-column>
                <el-table-column prop="discount" align="center" width="60" label="折扣"></el-table-column>
                <el-table-column prop="state_ps" align="center" width="80" label="状态"></el-table-column>
                <el-table-column prop="actual" align="center" width="70" label="实际销卡面额"></el-table-column>
                <el-table-column align="center" width="76" label="供货详情">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini" @click="lookDetail(scope.row)">详情</el-button>
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
    import { getValue, Detail } from '@/until/getData';
    let moment = require('moment');
    export default {
        components:{
            Pagination
        },
		data() {
            return {
                Disabled: false,
                paginationData: {
                    pageSize: 10,
                    totalNum: 0,
                    activePage: 1
                },
                nowPage: 0,
                input1:'',                   // 卡号
                input2:'',                   // 批次号
                value1:'',                   // 供货时间，起始时间
                value2:'',                   // 供货时间，结束时间
                optionValue1:'',             // 运营商
                optionValue2:'',             // 面值
                optionValue3:'全国',         // 地区
                optionValue4:'',             // 状态
                show: true,
                options1: [
                    {value: '3',label: '中国电信'}, 
                    {value: '1',label: '中国移动'}, 
                    {value: '2',label: '中国联通'}, 
                    {value: '4',label: '中国石化'}
                ],
                options2: [],           // 面值
                options3: [
                    {value: '1',label: '全国'}
                ],
                options4: [             // 状态   1-未使用 2-正在使用 3-销卡成功 4-销卡失败 5-冻结
                    {value: '1',label: '销卡中'}, 
                    {value: '2',label: '正在使用'}, 
                    {value: '3',label: '销卡成功'}, 
                    {value: '4',label: '销卡失败'}, 
                    {value: '5',label: '冻结'}
                ],
                tableData: []
            }
        },
        watch: {
            nowPage(){            // 监听当前页的变化，如果有变化开始请求当前页的数据
                let page = this.nowPage;
                this.getList(page);
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
        mounted () {
            if (this.tableData.length === 0) {
                this.show = false;
            }
        },
        methods:{
            startQuery(){
                this.initPage();
                this.Disabled = true;
                let page = this.paginationData.activePage;
                this.getList(page);
                setTimeout(() => {
                    this.Disabled = false;
                }, 1000);
            },
            lookDetail(row){
                // console.log(row);
                const h = this.$createElement;
                this.$msgbox({
                    title: '供卡详情',
                    message: h('div', null, [
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'批次号：'),
                            h('span',{style: 'color: red'},row.batch)
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'卡号：'),
                            h('span',{style: 'color: red'},row.card_code)
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'供货时间：'),
                            h('span',{style: 'color: red'},row.up_time)
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'完成时间：'),
                            h('span',{style: 'color: red'},row.use_time)
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'运营商：'),
                            h('span',{style: 'color: red'},row.card_type)
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'面额：'),
                            h('span',{style: 'color: red'},row.worth+'元')
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'地区：'),
                            h('span',{style: 'color: red'},row.area)
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'折扣：'),
                            h('span',{style: 'color: red'},row.discount)
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'状态：'),
                            h('span',{style: 'color: red'},row.state_ps)
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'实际销卡面额：'),
                            h('span',{style: 'color: red'},row.actual+'元')
                        ]),
                        h('p', {style: 'line-height: 20px'}, [
                            h('span',null,'失败原因：'),
                            h('span',{style: 'color: red'},row.ps)
                        ])
                    ]),
                    showCancelButton: false,
                    confirmButtonText: '确定',
                    customClass: 'ProvideDetailMessage'
                }).then(action => {
                    
                }).catch(action => {
                    
                });
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
            getList(page){
                let data = {};
                if (this.optionValue2 != '') {
                    data['worth'] = this.optionValue2
                } 
                if (this.optionValue1 != '') {
                    data['card_type'] = this.optionValue1
                } 
                if (this.optionValue3 != '') {
                    data['area'] = this.optionValue3
                }
                if (this.input1 != '') {
                    data['card_code'] = this.input1
                }
                if (this.optionValue4 != '') {
                    data['card_state'] = this.optionValue4
                }
                if (this.value1 != '') {
                    data['star_time'] = moment(this.value1).format('YYYY-MM-DD HH:MM:SS')
                }
                if (this.value2 != '') {
                    data['over_time'] = moment(this.value2).format('YYYY-MM-DD HH:MM:SS')
                }
                Detail(page, data).then(res => {
                    // console.log(res);
                    if (res.code == '1') {
                        let height = {
                            Height1: 948,
                            Height2: 540
                        }
                        this.$emit("indexChange", height);
                        this.show = true;
                        this.paginationData.totalNum = eval(res.total);
                        res.list.forEach((item,index) => {
                            if (item.discount.length === 3) {
                                item.discount = (eval(item.discount)/100).toFixed(3);
                            } else if (item.discount.length === 4){
                                item.discount = (eval(item.discount)/1000).toFixed(3);
                            }
                            if (item.state_ps === '销卡成功') {
                                item.actual = item.worth;
                            } else {
                                item.actual = '0';
                            }
                        });
                        this.tableData = res.list;
                    } else if(res.code == 899 || res.code == 900){
                        // console.log(res.msg);
                    } else {
                        Public.topAlert('error', res.msg);
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
            initPage(){
                this.paginationData.pageSize = 10;
                this.paginationData.totalNum = 0;
                this.paginationData.activePage = 1;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../style/less/Provide/Detail/recharge.less';
</style>
