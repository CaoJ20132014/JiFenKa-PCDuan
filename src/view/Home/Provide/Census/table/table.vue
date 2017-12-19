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
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="public">
                <el-button>查询</el-button>
            </div>
        </div>
        <div class="table border">
            <div class="table_title">
                <div>供货名称</div>
                <div>面额</div>
                <div>供货数量(张)</div>
                <div>供货金额(元)</div>
                <div>成功数量</div>
                <div>成功金额</div>
                <div>处理中数量</div>
                <div>失败数量</div>
                <div>失败金额</div>
            </div>
            <ul class="item_ul">
                <li v-show="show" v-for="(item,index) in  items" :key="item.key" :class="{'bg' : index%2 != 0}">
                    <div>{{item.value1}}</div>
                    <div>{{item.value2.toFixed(2)}}</div>
                    <div>{{item.value3}}</div>
                    <div>{{item.value4}}</div>
                    <div>{{item.value5}}</div>
                    <div>{{item.value6}}</div>
                    <div>{{item.value7}}</div>
                    <div>{{item.value8}}</div>
                    <div>{{item.value9}}</div>
                </li>
                <li v-show="!show" class="noData">
                    <div id="noData_div">
                        <img src="../../../../assets/nodata.png" alt="">
                        <span>没有找到记录，请调整搜索条件</span>
                    </div>
                </li>
            </ul>
        </div>
        <div v-show="show" class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                layout="prev, pager, next, jumper, total"
                :page-size="5"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
		data() {
            return {
                input1:'',
                value1:'',
                value2:'',
                show: true,
                total: 100,                  // 表格的总条数
                optionValue1:'',
                optionValue2:'',
                options1: [
                    {value: '1',label: '全国'}, 
                    {value: '2',label: '北京'}, 
                    {value: '3',label: '上海'}, 
                    {value: '4',label: '浙江'}, 
                    {value: '5',label: '广州'}
                ],
                options2: [
                    {value: '1',label: '50'}, 
                    {value: '2',label: '200'}, 
                    {value: '3',label: '500'}, 
                    {value: '4',label: '1000'}, 
                    {value: '5',label: '5000'}
                ],
                items:[{
                    key:1,
                    value1:'1000000000000',
                    value2:200,
                    value3:'300',
                    value4:'400',
                    value5:500.20,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                }, {
                    key:2,
                    value1:'1000000000000',
                    value2:200,
                    value3:'300',
                    value4:'400',
                    value5:500.11,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                }, {
                    key:3,
                    value1:'1000000000000',
                    value2:200,
                    value3:'300',
                    value4:'400',
                    value5:500.16,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                }, {
                    key:4,
                    value1:'1000000000000',
                    value2: 200,
                    value3:'300',
                    value4:'400',
                    value5:500.18,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                }, {
                    key:5,
                    value1:'1000000000000',
                    value2:200,
                    value3:'300',
                    value4:'400',
                    value5:500.19,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                }],
                currentPage: 1,
            }
        },
        methods:{
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
<style scoped>
    .table_box{
        height: 422px;
    }
    .table_box .public_box{
        display: flex;
        font-size: 0;
    }
    .public_box .public{
        display: flex;
        padding-top: 20px;
    }
    .public .lable{
        width: 70px;
        line-height: 32px;
        font-size: 14px;
        color: #494949;
    }
    .public2{
    	margin-left: 20px;
    }
    .public2 .div{
        width: 22px;
        font-size: 14px;
        font-weight: 400;
        line-height: 32px;
        text-align: center;
    }
    .pici .lable{
        width: 70px;
    }
    .el-button.el-button--default{
        width: 80px;
        height: 32px;
        padding: 0;
    }
    .el-button.el-button--default:nth-child(1){
        background-color: #8a6ad4;
        color: white;
        border-color: #8a6ad4;
        margin-left: 20px;
    }
    .table{
        width: 906px;
        height: 240px;
        margin-top: 20px;
    }
    .table .table_title{
        width: 100%;
        height: 40px;
        display: flex;
        background-color: #fafafa;
    }
    .table .table_title div{
        width: 11%;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        border-right: 1px solid #e9e9e9;
    }
    .table .table_title div:nth-child(2),
    .table .table_title div:nth-child(3),
    .table .table_title div:nth-child(4),
    .table .table_title div:nth-child(5){
        width: 10%;
    }
    .table .table_title div:nth-child(1){
        width: 16%;
    }
    .table .table_title div:last-child{
        border-right: 0;
    }
    .item_ul{
        width: 100%;
    }
    .item_ul li{
        list-style: none;
        display: flex;
        width: 100%;
    }
    .item_ul li div{
        width: 11%;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        border-right: 1px solid #e9e9e9;
    }
    .item_ul li div:nth-child(2),
    .item_ul li div:nth-child(3),
    .item_ul li div:nth-child(4),
    .item_ul li div:nth-child(5){
        width: 10%;
    }
    .item_ul li div:nth-child(1){
        width: 16%;
    }
    .item_ul li div:last-child{
        border-right: 0;
    }
    .bg{
        background-color: #fafafa;
    }
    .pagination{
        padding-top: 11px;
        text-align: right;
    }
    #noData_div{
        width: 100%;
        padding-top: 40px; 
    }
    #noData_div span{
        vertical-align: top;
        line-height: 81px;
        padding-left: 10px;
    }
</style>
