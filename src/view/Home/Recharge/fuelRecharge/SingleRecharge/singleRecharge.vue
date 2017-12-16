<template>
    <div class="bill-recharge">
        <div class="bill-top">
            <div class="left">
                <div class="common">
                    <div class="lable">主卡卡号：</div>
                    <el-input placeholder="请输入加油卡卡号" :maxlength="19" v-model="input1" :class="{'grey':input1 == ''}" clearable></el-input>
                </div>
                <div class="common choose scope">
                    <div class="lable">充值范围：</div>
                    <ul>
                        <li v-for="(item,index) of scopeList" :key="item.id" :class="[cheakedScope == (index+1) ? 'active' : '']" @click="chooseScope(index,item)" v-text="item.name"></li>
                    </ul>
                </div>
                <div class="common choose">
                    <div class="lable">充值面值：</div>
                    <ul>
                        <li v-for="(item,index) of ValueList" :key="item.id" :class="[cheakedValue == (index+1) ? 'active' : '']" @click="chooseValue(index,item)" v-text="item.title"></li>
                    </ul>
                </div>
                <div class="common withhold">
                    <div class="lable">扣款金额：</div>
                    <input v-model="input2" :type="inputType">
                    <span v-show="isShow">元</span>
                    <span class="none" @click="changeType" v-text="text"></span>
                </div>
                <div class="common commit">
                    <div class="lable"></div>
                    <el-button @click="commitOrder">提交订单</el-button>
                    <span @click="clear">重新填写</span>
                </div>
            </div>
            <div class="right">
                <NoticeTemplate></NoticeTemplate>
            </div>
        </div>
        <div>
            <fuelTable></fuelTable>
        </div>
    </div>
</template>
<script>
    import NoticeTemplate from "../components/queryBalance.vue";
    import fuelTable from '../components/table.vue';
    export default {
        props:[],
        components: {
            NoticeTemplate,
            fuelTable
        },
        data () {
            return {
                input1: '',              // 手机号
                input2: '',              // 充值金额
                inputType: 'password',
                text: '显示',
                isShow: false,
                cheakedScope: '1',
                cheakedValue: '0',
                scopeList: [{
                    id: '1',
                    name: '全国'
                }],
                ValueList:[{
                    id: '1',
                    title: '50元'
                }, {
                    id: '2',
                    title: '100元'
                }, {
                    id: '3',
                    title: '200元'
                }, {
                    id: '4',
                    title: '500元'
                }, {
                    id: '5',
                    title: '1000元'
                }, {
                    id: '6',
                    title: '2000元'
                }]
            }
        },
        methods: {
            chooseScope(index,item){
                this.cheakedScope = index+1;
            },
            chooseValue(index,item){
                this.cheakedValue = index+1;
                this.input2 = item.title.substring(0,item.title.length-1);
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
                this.inputType = 'text';
                this.input2 = '';
                this.chooseValue = '0';
            },
            commitOrder(){
                if (this.input1 == '') {
                    this.publicNotice("加油卡卡号不能为空",'warning');
                } else if (this.input1.length != 19) {
                    this.publicNotice("加油卡卡号长度不正确",'warning');
                } else {
                    let rechargeInfo = {
                        cardNum: this.input1,
                        cash: this.input2
                    }
                    localStorage.setItem('info',JSON.stringify(rechargeInfo));
                    this.$router.push({
                        name: 'singleConfirm'
                    });
                }
            },
            publicNotice(msg,noticeType){
                this.$message({
                    message: msg,
                    type: noticeType,
                    center: true
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../../assets/less/recharge/fuelRecharge/singleRecharge/sFuelRecharge.less";
</style>