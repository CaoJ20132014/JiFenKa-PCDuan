<template>
    <div class="card_box" id="card">
        <div class="card_left">
            <router-view></router-view> 
        </div>
        <div class="card_right">
            <div class="outside border">
                <div class="centre border">
                    <div class="top">
                        <div>全国卡折扣推荐</div>
                    </div>
                    <div class="ul_top">
                        <div>运营商</div>
                        <div>面值(元)</div>
                        <div>折扣区间</div>
                    </div>
                    <ul>
                        <li v-for="(item,index) in dataList" :key="item.id" :class="[(index+1)%2==0 ? 'bg2' : 'bg1']">
                            <div class="li_top">
                                <div class="one">{{item.yunyingshang}}</div>
                                <div class="two">
                                    <div>{{item.mianzhi[0].one}}</div>
                                    <div>{{item.mianzhi[1].two}}</div>
                                </div>
                                <div class="three">
                                    <div>{{item.zhekou[0].one}}</div>
                                    <div>{{item.zhekou[1].two}}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="top">
                        <div>省卡折扣查询</div>
                    </div>
                    <div class="common">
                        <div class="lable">运营商：</div>
                        <el-select v-model="optionValue1" :class="{'grey':optionValue1 == ''}" placeholder="请选择">
                            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div class="common">
                        <div class="lable">销卡地区：</div>
                        <el-select v-model="optionValue2" :class="{'grey':optionValue2 == ''}" placeholder="请选择">
                            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div class="common">
                        <div class="lable">商品面额：</div>
                        <el-select v-model="optionValue3" :class="{'grey':optionValue3 == ''}" placeholder="请选择">
                            <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div class="query_section">
                        <div class="section">折扣区间：{{section}}</div>
                        <el-button @click="query">查询</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
		data() {
            return {
                section:'9.5',
                optionValue1: '',           // 运营商
                optionValue2: '',           // 面额
                optionValue3: '',           // 地区
                dataList:[{
                    id:"1",
                    yunyingshang: "联通",
                    mianzhi:[{one:'10-50'},{two:'100-200'}],
                    zhekou:[{one:'9.5'},{two:'9.4'}]
                },
                {
                    id:"2",
                    yunyingshang: "移动",
                    mianzhi:[{one:'10-50'},{two:'100-200'}],
                    zhekou:[{one:'9.5'},{two:'9.4'}]
                },
                {
                    id:"3",
                    yunyingshang: "电信",
                    mianzhi:[{one:'10-50'},{two:'100-200'}],
                    zhekou:[{one:'9.5'},{two:'9.4'}]
                }],
                options1: [
                    {value: '1',label: '联通'}, 
                    {value: '2',label: '电信'}, 
                    {value: '3',label: '移动'}, 
                    {value: '4',label: '中石化'}, 
                    {value: '5',label: '中石油'}
                ],
                options2: [
                    {value: '1',label: '全国'}, 
                    {value: '2',label: '北京'}, 
                    {value: '3',label: '上海'}, 
                    {value: '4',label: '浙江'}, 
                    {value: '5',label: '广州'}
                ],
                options3: [
                    {value: '1',label: '50'}, 
                    {value: '2',label: '100'}, 
                    {value: '3',label: '200'}, 
                    {value: '4',label: '500'}, 
                    {value: '5',label: '1000'}
                ]
            }
        },
        methods:{
            query(){

            }
        }
    }
</script>

<style scoped>
    .card_box{
        width: 908px;
        height: 563px;
        display: flex;
    }
    .card_box .card_left{
        width: 613px;
        height: 563px;
    }
    .card_box .card_right{
        width: 295px;
        height: 563px;
    }
    .card_right .outside{
        width: 293px;
        height: 476px;
        margin-top: 10px;
        border-radius: 3px;
        background-color: #f4f4f4;
    }
    .outside .centre{
        width: 285px;
        height: 468px;
        margin: 4px auto 0;
        border-radius: 3px;
        background-color: white;
    }
    .centre .top{
        width: 100%;
        height: 31px;
        padding-top: 15px;
    }
    .centre .top div{
        height: 17px;
        font-size: 14px;
        color: #8a63e7;
        line-height: 17px;
        padding-left: 10px;
        margin-left: 14px;
        border-left: 3px solid #8a63e7;
    }
    .ul_top{
        font-size: 0;
        width: 257px;
        margin: 0 auto;
        border: 1px solid #f1eafd;
        background-color: #f8f4fd;
    }
    .ul_top div{
        font-size: 14px;
        display: inline-block;
        line-height: 30px;
        text-align: center;
    }
    .ul_top div:nth-child(2){
        width: 83px;
        border-left: 1px solid white;
        border-right: 1px solid white;
    }
    .ul_top div:nth-child(1){
        width: 78px;
    }
    .ul_top div:nth-child(3){
        width: 94px;
    }
    ul{
        width: 259px;
        margin: 0 auto;
    }
    .li_top{
        width: 100%;
        font-size: 0;
        border-bottom: 1px solid white;
    }
    .li_top div{
        font-size: 14px;
        display: inline-block;
        line-height: 30px;
        text-align: center;
    }
    .li_top .one{
        width: 78px;
    }
    .li_top .two{
        width: 83px;
        border-left: 1px solid white;
        border-right: 1px solid white;
    }
    .li_top .three{
        width: 94px;
    }
    .li_top .two div:first-child,
    .li_top .three div:first-child{
        height: 27px;
        line-height: 27px;
        text-align: center;
        border-bottom: 1px solid white;
    }
    .li_top .two div:last-child,
    .li_top .three div:last-child{
        height: 28px;
        line-height: 28px;
    }
    .li_top .one{
        vertical-align: top;
        height: 57px;
        line-height: 57px;
    }
    .li_top .two div{
        width: 100%;
    }
    .li_top .three div{
        width: 100%;
    }
    .bg1{
        background-color: #fafafa;
    }
    .bg2{
        background-color: #f7f7f7;
    }
    .common{
        display: flex;
        padding-bottom: 12px;
        padding-left: 6px;
    }
    .common .lable{
        width: 80px;
        text-align: right;
        color: #494949;
        font-size: 14px;
        line-height: 30px;
    }
    .query_section{
        display: flex;
        padding-left: 16px;
    }
    .el-button.el-button--default{
        width: 60px;
        height: 30px;
        background-color: #8a63e7;
        color: white;
        padding: 0;
    }
    .section{
        line-height: 30px;
        font-size: 14px;
        color: #494949;
        width: 180px;
    }
</style>
