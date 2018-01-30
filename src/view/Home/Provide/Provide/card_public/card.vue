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
                    zhekou:[{one:'9.4-9.6'},{two:'9.4-9.7'}]
                }, {
                    id:"2",
                    yunyingshang: "移动",
                    mianzhi:[{one:'10-50'},{two:'100-200'}],
                    zhekou:[{one:'9.5-9.6'},{two:'9.4-9.7'}]
                }, {
                    id:"3",
                    yunyingshang: "电信",
                    mianzhi:[{one:'10-50'},{two:'100-200'}],
                    zhekou:[{one:'9.5-9.7'},{two:'9.4-9.6'}]
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

<style lang="less" scoped>
    @import "../../../../../style/less/Provide/CardProvide/card.less";
</style>
