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
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
                <el-button>查询</el-button>
                <el-button @click="daochu">导出</el-button>
            </div>
        </div>
        <div class="table border">
            <div class="table_title">
                <div>卡号</div>
                <div>供货时间</div>
                <div>完成时间</div>
                <div>供卡名称</div>
                <div>商品面额(元)</div>
                <div>发行地区</div>
                <div>供卡折扣</div>
                <div>供货状态</div>
                <div>实际销卡面额</div>
                <div>供货详情</div>
            </div>
            <ul class="item_ul">
                <li v-show="show" v-for="(item,index) in  items" :key="item.key" :class="{'bg' : index%2 != 0}">
                    <div>{{item.value1}}</div>
                    <div>{{item.value2}}</div>
                    <div>{{item.value3}}</div>
                    <div>{{item.value4}}</div>
                    <div>{{item.value5.toFixed(2)}}</div>
                    <div>{{item.value6}}</div>
                    <div>{{item.value7}}</div>
                    <div>{{item.value8}}</div>
                    <div>{{item.value9}}</div>
                    <div>{{item.value10}}</div>
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
                input1:'',                   // 卡号
                input2:'',                   // 批次号
                value1:'',                   // 供货时间，起始时间
                value2:'',                   // 供货时间，结束时间
                show: true,
                total: 100,                  // 表格的总条数
                optionValue1:'',
                optionValue2:'',
                optionValue3:'',
                optionValue4:'',
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
                options3: [
                    {value: '1',label: '全国'}, 
                    {value: '2',label: '北京'}, 
                    {value: '3',label: '上海'}, 
                    {value: '4',label: '浙江'}, 
                    {value: '5',label: '广州'}
                ],
                options4: [
                    {value: '1',label: '成功'}, 
                    {value: '2',label: '失败'}, 
                    {value: '3',label: '待处理'}
                ],
                items:[{
                    key:1,
                    value1:'1000000000000',
                    value2:'200',
                    value3:'300',
                    value4:'400',
                    value5:500.20,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                    value10:'1000',
                }, {
                    key:2,
                    value1:'1000000000000',
                    value2:'200',
                    value3:'300',
                    value4:'400',
                    value5:500.11,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                    value10:'1000',
                }, {
                    key:3,
                    value1:'1000000000000',
                    value2:'200',
                    value3:'300',
                    value4:'400',
                    value5:500.16,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                    value10:'1000',
                }, {
                    key:4,
                    value1:'1000000000000',
                    value2:'200',
                    value3:'300',
                    value4:'400',
                    value5:500.18,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                    value10:'1000',
                }, {
                    key:5,
                    value1:'1000000000000',
                    value2:'200',
                    value3:'300',
                    value4:'400',
                    value5:500.19,
                    value6:'600',
                    value7:'700',
                    value8:'800',
                    value9:'900',
                    value10:'1000',
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
    .reachge_box{
        height: 422px;
    }
    .reachge_box .public_box{
        display: flex;
        font-size: 0;
        justify-content: space-between;
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
    .public:nth-child(5) .lable{
        width: 45px;
    }
    .public2 .div{
        width: 22px;
        font-size: 14px;
        font-weight: 400;
        line-height: 32px;
        text-align: center;
    }
    .pici .lable{
        width: 60px;
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
    }
    .el-button.el-button--default:nth-child(2){
        border-color: #8a6ad4;
        color: #8a6ad4;
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
        width: 10%;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        border-right: 1px solid #e9e9e9;
    }
    .table .table_title div:nth-child(2),
    .table .table_title div:nth-child(3),
    .table .table_title div:nth-child(4),
    .table .table_title div:nth-child(5){
        width: 9%;
    }
    .table .table_title div:nth-child(1){
        width: 14%;
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
        width: 10%;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        border-right: 1px solid #e9e9e9;
    }
    .item_ul li div:nth-child(2),
    .item_ul li div:nth-child(3),
    .item_ul li div:nth-child(4),
    .item_ul li div:nth-child(5){
        width: 9%;
    }
    .item_ul li div:nth-child(1){
        width: 14%;
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
