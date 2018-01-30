<template>
    <div class="card_box" id="card">
        <div class="card_left" :class="{'width':flag}">
            <router-view  @discount="discount_worth" @cardType="cardtype"></router-view> 
        </div>
        <div class="card_right" v-show="isShow">
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
                                <div class="one" v-text="item.yunyingshang"></div>
                                <div class="two">
                                    <div v-text="item.worth"></div>
                                </div>
                                <div class="three">
                                    <div v-text="item.discount"></div>
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
                            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.label"></el-option>
                        </el-select>
                    </div>
                    <div class="common">
                        <div class="lable">商品面额：</div>
                        <el-select v-model="optionValue3" :class="{'grey':optionValue3 == ''}" placeholder="请选择">
                            <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.label"></el-option>
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
    import Public from '@/until/until';
    import { getValue, query } from '@/until/getData';
    export default {
		data() {
            return {
                section: '',
                optionValue1: '',           // 运营商
                optionValue2: '全国',       // 地区
                optionValue3: '',           // 面额
                isShow: true,               // 控制右侧的显示与隐藏
                flag: false,                // 改变左侧的宽度
                type: '中国联通',
                dataList:[],
                options1: [
                    {value: '2',label: '中国联通'}, 
                    {value: '3',label: '中国电信'}, 
                    {value: '1',label: '中国移动'}
                ],
                options2: [
                    {value: '1',label: '全国'}
                ],
                options3: []
            }
        },
        mounted () {
            this.change();
        },
        watch:{
            $router(){
                this.change();
            },
            optionValue1(){
                let data = {};
                if (this.optionValue1 === '1') {
                    data.operator = '1';
                    this.options3 = [];
                    this.optionValue3 = '';
                    this.section = '';
                    this.getWorth(data);
                    this.$emit('cardType', '中国移动');
                } else if (this.optionValue1 === '2') {
                    data.operator = '2';
                    this.options3 = [];
                    this.optionValue3 = '';
                    this.section = '';
                    this.getWorth(data);
                    this.$emit('cardType', '中国联通');
                } else if (this.optionValue1 === '3') {
                    data.operator = '3';
                    this.options3 = [];
                    this.optionValue3 = '';
                    this.section = '';
                    this.getWorth(data);
                    this.$emit('cardType', '中国电信');
                }
            }
        },
        methods:{
            change(){
                let router =  this.$route.path;
                if (router == '/home/provide/card/cardconfirm') {
                    this.isShow = false;
                    this.flag = true;
                } else {
                    this.isShow = true;
                    this.flag = false;
                }
            },
            query(){
                if (this.optionValue1 == '') {
                    Public.topAlert('error','请选择运营商');
                    return;
                } else if (this.optionValue2 == '') {
                    Public.topAlert('error','请选择销卡地区');
                    return;
                } else if (this.optionValue3 == '') {
                    Public.topAlert('error','请选择商品面额');
                    return;
                } else {
                    let data = {
                        operator: this.optionValue1,
                        area: this.optionValue2,
                        worth: this.optionValue3
                    }
                    query(data).then((res) => {
                        if (res.code == '1') {
                            if (res.msg.discount_high.length == '3' && res.msg.discount_low.length == '3') {
                                this.section = ((res.msg.discount_high)/100).toFixed(3)+'-'+((res.msg.discount_low)/100).toFixed(3);
                            } else if (res.msg.discount_high.length == '4' && res.msg.discount_low.length == '4') {
                                this.section = ((res.msg.discount_high)/1000).toFixed(3)+'-'+((res.msg.discount_low)/1000).toFixed(3);
                            } else if (res.msg.discount_high.length == '3' && res.msg.discount_low.length == '4') {
                                this.section = ((res.msg.discount_high)/100).toFixed(3)+'-'+((res.msg.discount_low)/1000).toFixed(3);
                            } else if (res.msg.discount_high.length == '4' && res.msg.discount_low.length == '3') {
                                this.section = ((res.msg.discount_high)/1000).toFixed(3)+'-'+((res.msg.discount_low)/100).toFixed(3);
                            }
                        } else {

                        }
                    }).catch((err) => {
                        // console.log(err);
                    });
                }
            },
            cardtype(type){
                this.type = type;
            },
            discount_worth(discount_worth){
                discount_worth.forEach((item) => {
                    item['yunyingshang'] = this.type;
                    if (item.discount_high.length == '3' && item.discount_low.length == '3') {
                        item['discount'] = ((item.discount_high)/100).toFixed(3)+'-'+((item.discount_low)/100).toFixed(3);
                    } else if (item.discount_high.length == '4' && item.discount_low.length == '4') {
                        item['discount'] = ((item.discount_high)/1000).toFixed(3)+'-'+((item.discount_low)/1000).toFixed(3);
                    } else if (item.discount_high.length == '3' && item.discount_low.length == '4') {
                        item['discount'] = ((item.discount_high)/100).toFixed(3)+'-'+((item.discount_low)/1000).toFixed(3);
                    } else if (item.discount_high.length == '4' && item.discount_low.length == '3') {
                        item['discount'] = ((item.discount_high)/1000).toFixed(3)+'-'+((item.discount_low)/100).toFixed(3);
                    }
                });
                this.dataList = discount_worth;
            },
            getWorth(data){
                getValue(data).then((res) => {
                    if (res.code == '1') {
                        this.options3 = [];
                        res.msg.forEach((item, index) => {
                            let obj = {
                                value: index+1,
                                label: item.worth
                            }
                            this.options3.push(obj);
                        });
                    }
                }).catch((err) => {
                    // console.log(err);
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../../../style/less/Provide/CardProvide/card.less";
</style>
