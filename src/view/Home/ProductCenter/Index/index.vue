<template>
    <div class="order-detail">
        <div class="product-top">
            <div>产品中心</div>
        </div>
        <div class="product-con">
            <div class="top-notice">产品价格：提供话费、流量的折扣价格的条件查询</div>
            <div class="common">
                <div class="lable">供卡名称：</div>
                <div class="ul-list">
                    <ul>
                        <li v-for="(item,index) in typeList" :key="item.id" :class="[choosed == (index+1) ? 'active' : '']" @click="choose(index,item)">
                            <span v-text="item.name"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="common operation">
                <div class="orderArea">
                    <div class="lable">产品地区：</div>
                    <el-input placeholder="产品地区" v-model="input1" :class="{'grey':input1 == ''}" clearable></el-input>
                </div>
                <div class="select">
                    <div class="lable">运营商：</div>
                    <el-select v-model="value" :class="{'grey':value == ''}" placeholder="请选择">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="buttons">
                    <el-button class="query" @click="startQuery" :disabled="queryDisabled">查询</el-button>
                    <el-button class="export" :disabled="exportDisabled">导出</el-button>
                </div>
            </div>
            <div class="table-list">
                <billTable v-show="choosed == '1'"></billTable>
                <flowTable v-show="choosed == '2'"></flowTable>
            </div>
            <div class="pagination" v-show="noData">
                <el-pagination background layout="total, prev, pager, next, jumper" :current-page.sync='nowPage' @current-change='changePage' :total="totalOrder"></el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    import billTable from '../components/billTable.vue';
    import flowTable from '../components/flowTable.vue';
    export default {
        components: {
            billTable,
            flowTable
        },
        created () {
            this.totalOrder = 1000;
        },
        data () {
            return {
                noData: true,           // 是否显示分页
                totalOrder: '',         // 数据总条数
                nowPage: 1,             // 初始页
                choosed: '1',           // 类型 话费、流量
                value: '',              // 运营商
                queryDisabled: false,   // 查询按钮禁用
                exportDisabled: false,  // 导出按钮禁用
                input1: "",
                typeList: [{
                    id: '1',
                    name: '话费产品'
                }, {
                    id: '2',
                    name: '流量产品'
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
                }]
            }
        },
        methods:{
            choose(index,item){        // 选择话费、流量
                this.choosed = index+1;
                this.nowPage = 1;
                if (index == 0) {
                    this.totalOrder = 1000;
                } else if(index == 1){
                    this.totalOrder = 2000;
                }
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
            },
            startQuery(){
                let _that = this;
                var objR = {tel:'15617858292'};
                if (_that.choosed == '1') {
                    console.log('查询话费');
                    objR["username"]='row.username';
                    console.log(objR);
                } else if (_that.choosed == '2') {
                    console.log('查询流量');
                    objR["address"]='row.address';
                    console.log(objR);
                }
                _that.queryDisabled = true;
                setTimeout(() => {
                    _that.queryDisabled = false;
                }, 1000);    
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../style/less/productCenter/index.less';
</style>