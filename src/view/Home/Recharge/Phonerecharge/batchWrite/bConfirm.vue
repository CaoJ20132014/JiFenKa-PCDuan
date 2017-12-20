<template>
    <div class="b-confirm">
        <div class="ul-table">
            <div class="table-heard">
                <div>序号</div>
                <div>充值号码</div>
                <div>充值金额（元）</div>
                <div>扣款金额（元）</div>
                <div>订单编号</div>
            </div>
            <div class="table-con">
                <ul>
                    <li v-for="(item,index) of tableList" :key="item.id" :class="[((index + 1) % 2) == 0 ? 'bg' : '']">
                        <div><span v-text="index+1"></span></div>
                        <div v-text="item.phone"></div>
                        <div v-text="(item.cash-0).toFixed(2)"></div>
                        <div v-text="(item.koukuan-0).toFixed(2)"></div>
                        <div v-text="item.order"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="buttons">
            <el-button class="commit" @click="mPay">立即支付</el-button>
            <el-button class="addLi" @click="cancelPay">取消支付</el-button>
            <p>订单总览：共<span v-text="tableList.length"></span>条订单，扣款总额：<span v-text="total"></span>元</p>
        </div>
        <div class="recordtable">
            <recordtable></recordtable>
        </div>
    </div>
</template>
<script>
    import recordtable from '../batchWrite/components/rechargeTable.vue';
    export default {
        components:{
            recordtable
        },
        data () {
            return {
                tableList:[{
                    id: '1',
                    phone: '1223',
                    cash: '100',
                    koukuan: '98',
                    order: '123456789'
                }, {
                    id: '2',
                    phone: '1223',
                    cash: '100',
                    koukuan: '98',
                    order: '123456789'
                }, {
                    id: '3',
                    phone: '1223',
                    cash: '100',
                    koukuan: '98',
                    order: '123456789'
                }, {
                    id: '3',
                    phone: '1223',
                    cash: '100',
                    koukuan: '98',
                    order: '123456789'
                }]
            }
        },
        computed:{
            total(){
                let totalMoney = 0;
                this.tableList.forEach(item => {
                    totalMoney += (item.koukuan - 0);
                });
                return (totalMoney-0).toFixed(2);
            }
        },
        methods: {
            mPay(){
                this.$prompt(' ', '验证支付密码', {
                    confirmButtonText: '立即支付',
                    showCancelButton: false,
                    confirmButtonClass: 'mRechargePay',
                    customClass: 'mRechargePayAlert',
                    inputPlaceholder: '请输入支付密码'
                }).then(({ value }) => {
                    if (value == null) {
                        this.Alert('warning','支付密码不能为空');
                        return;
                    } else {
                        this.Alert('success','支付成功');
                        setTimeout(() => {
                            this.$router.push({
                                name: 'mProgress'
                            });
                            this.load = false;
                        }, 1500);
                    }
                }).catch(() => {
                    this.Alert('warning','取消支付');  
                });
            },
            cancelPay(){
                this.$confirm('确定取消支付?', '消息提示', {
                    confirmButtonText: '确定',
                    showCancelButton: false,
                    type: 'warning'
                }).then(() => {
                    
                }).catch(() => {
                         
                });
            },
            Alert(AlertType,msg){
                this.$message({
                    type: AlertType,
                    message: msg,
                    center: true,
                    duration: 1500
                }); 
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/recharge/phReachge/batchWrite/bConfirm.less';
</style>