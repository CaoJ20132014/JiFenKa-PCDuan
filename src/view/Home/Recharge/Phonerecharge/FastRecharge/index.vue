<template>
    <div class="bill-recharge">
        <div class="bill-top">
            <div class="left">
                <div class="common">
                    <div class="lable">充值号码：</div>
                    <el-input placeholder="支持上网卡充值" type="number" :maxlength="11" v-model="input1" :class="{'grey':input1 == ''}" clearable></el-input>
                </div>
                <div class="common choose">
                    <div class="lable">充值面值：</div>
                    <ul>
                        <li v-for="(item,index) of ValueList" :key="item.id" :class="[choosed == (index+1) ? 'active' : '']" @click="choose(index,item)" v-text="item.title"></li>
                        <li v-show="display" @click="display = !display,input2='',choosed='0'">其他</li>
                        <el-input v-show="!display" placeholder="" v-model="input2"></el-input>
                    </ul>
                </div>
                <div class="common withhold">
                    <div class="lable">扣款金额：</div>
                    <input v-model="input2" readonly :type="inputType">
                    <span v-show="isShow">元</span>
                    <span class="none" @click="changeType" v-text="text"></span>
                </div>
                <div class="common commit">
                    <div class="lable"></div>
                    <el-button @click="commitOrder">提交订单</el-button>
                    <span @click="clear">重新填写</span>
                </div>
                <div class="table">
                    <div class="table-top">
                        <div>充值记录</div>
                        <div @click="goRechargeRecord">查看更多</div>
                    </div>
                    <div class="table-con">
                        <div class="heard">
                            <div>手机号码</div>
                            <div>时间</div>
                            <div>运营商</div>
                            <div>状态</div>
                            <div>充值金额</div>
                        </div>
                        <ul>
                            <li v-for="(item,index) of recordList" :key="item.id" :class="[((index + 1) % 2) == 0 ? 'bg' : '']">
                                <div v-text="item.phone"></div>
                                <div v-text="item.time"></div>
                                <div v-text="item.shop"></div>
                                <div v-text="item.state"></div>
                                <div v-text="item.cash"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right">
                <Query :phoneNum='input1'></Query>
            </div>
        </div>
    </div>
</template>
<script>
    import Query from "./components/queryBalance.vue";
    import Public from '@/until/until';
    export default {
        props:[],
        components: {
            Query
        },
        data () {
            return {
                input1: '',              // 手机号
                input2: '',              // 其他充值金额
                inputType: 'password',
                text: '显示',
                isShow: false,
                choosed: '0',
                display: true,
                ValueList:[{
                    id: '1',
                    title: '10元'
                }, {
                    id: '2',
                    title: '20元'
                }, {
                    id: '3',
                    title: '30元'
                }, {
                    id: '4',
                    title: '50元'
                }, {
                    id: '5',
                    title: '100元'
                }, {
                    id: '6',
                    title: '200元'
                }, {
                    id: '7',
                    title: '300元'
                }],
                recordList: [{
                    id: '1',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    cash: '1000元'
                }, {
                    id: '2',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    cash: '1000元'
                }, {
                    id: '3',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    cash: '1000元'
                }, {
                    id: '4',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    cash: '1000元'
                }, {
                    id: '5',
                    phone: '15617858292',
                    time: '2017-12-12 15:24',
                    shop: '联通',
                    state: '充值成功',
                    cash: '1000元'
                }]
            }
        },
        methods: {
            choose(index,item){
                this.choosed = index+1;
                this.input2 = item.title.substring(0,item.title.length-1);
                this.display = true;
            },
            changeType(){
                if (this.inputType == 'text') {
                    this.text = '显示';
                    this.inputType = 'password';
                    this.isShow = false;
                } else {
                    this.inputType = 'text';
                    this.text = '隐藏';
                    this.isShow = true;
                }
            },
            clear(){
                this.input1 = '';              // 手机号
                this.input2 = '';              // 其他充值金额
                this.inputType = 'text';
                this.choosed = '0';
                this.display = true;
            },
            commitOrder(){
                if (this.input1 == '') {
                    this.publicNotice("手机号码不能为空",'warning');
                } else if (this.input1.length != 11) {
                    this.publicNotice("手机号码长度不正确",'warning');
                } else if (!Public.isTel(this.input1)) {
                    this.publicNotice("手机号码不正确",'warning');
                } else if (this.input2 == '') {
                    this.publicNotice("请选择您要充值的金额",'warning');
                } else {
                    let rechargeInfo = {
                        tel: this.input1,
                        cash: this.input2
                    }
                    localStorage.setItem('info',JSON.stringify(rechargeInfo));
                    this.$router.push({
                        name: 'confirm'
                    });
                }
            },
            publicNotice(msg,noticeType){
                this.$message({
                    message: msg,
                    type: noticeType,
                    center: true
                });
            },
            goRechargeRecord(){
                this.$router.push({
					name: 'orderDetail'
				});
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../../assets/less/recharge/phReachge/billFastRecharge/billrecharge.less";
</style>