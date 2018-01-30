<template>
    <div class="reachge_box" id="reachge">
        <div class="public_box">
            <div class="public">
                <div class="lable">运营商：</div>
                <el-select v-model="optionValue1" :class="{'grey':optionValue1 == ''}" placeholder="请选择">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="public">
                <div class="lable">供货状态：</div>
                <el-select v-model="optionValue2" :class="{'grey':optionValue2 == ''}" placeholder="请选择">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="public public2">
                <div class="lable">供货时间：</div>
                <el-date-picker v-model="value1" :class="{'grey':value1 == ''}" type="datetime" placeholder="选择起始时间"></el-date-picker>
                <div class="div">--</div> 
                <el-date-picker v-model="value2" :class="{'grey':value2 == ''}"type="datetime" placeholder="选择结束时间"></el-date-picker>
            </div>
        </div>
        <div class="public_box otherCard">
            <div class="public pici">
                <div class="lable">SUP订单号：</div>
                <el-input placeholder="请输入批次号" v-model="input1" :class="{'grey':input1 == ''}" class="piciNum"></el-input>
            </div>
            <div class="public">
                <el-button>查询</el-button>
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
        mounted () {
            if (this.tableData.length === 0) {
                this.show = false;
            }
        },
        watch: {
            nowPage(){            // 监听当前页的变化，如果有变化开始请求当前页的数据
                console.log(this.nowPage);
            }
        },
        methods:{
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
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../style/less/Provide/Detail/otherCard.less';
</style>
