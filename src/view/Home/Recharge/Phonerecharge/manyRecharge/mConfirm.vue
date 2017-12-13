<template>
    <div class="m-confirm">
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
                        <div v-text="item.cash"></div>
                        <div v-text="item.koukuan"></div>
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
    import recordtable from '../manyRecharge/components/orderTable.vue';
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
                return totalMoney;
            }
        },
        methods: {
            mPay(){

            },
            cancelPay(){
                this.$confirm('确定取消支付?', '消息提示', {
                    confirmButtonText: '确定',
                    showCancelButton: false,
                    type: 'warning'
                }).then(() => {
                    
                }).catch(() => {
                         
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/recharge/phReachge/manyRecharge/manyConfirm.less';
</style>