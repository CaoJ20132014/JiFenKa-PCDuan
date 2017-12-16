<template>
    <div class="confirm">
        <div class="confirm-box">
            <div class="inner">
                <div class="common">
                    <div class="lable">充值号码：</div>
                    <span v-text="phoneNumber"></span>
                </div>
                <div class="common">
                    <div class="lable">充值金额：</div>
                    <span v-text="cashNumber"></span>元
                </div>
                <div class="common">
                    <div class="lable">订单编号：</div>
                    <span v-text="orderNumber"></span>
                </div>
                <div class="common payPwd">
                    <div class="lable">支付密码：</div>
                    <el-input :type="inputType" v-model="input" placeholder="请输入支付密码">
                        <i class="iconfont" :class="[showEye ? 'icon-yanjing' : 'icon-eye-close']" slot="suffix" @click="showEye=!showEye,showPwd()"></i>
                    </el-input>
                </div>
                <div class="common payPwd">
                    <div class="lable"></div>
                    <el-button class="confirm" @click="pay">立即支付</el-button>
                    <el-button class="canse" @click="cancel">取消支付</el-button>
                </div>
            </div>
        </div>
        <div class="components">
            <billTable></billTable>
        </div>
    </div>
</template>
<script>
    import billTable from '../batchWrite/components/rechargeTable.vue';
    export default {
        components: {
            billTable
        },
        data(){
            return{
                phoneNumber: '',                // 手机号码
                cashNumber: '',                 // 充值的金额
                orderNumber: '123456789',       // 订单编号
                input: '',                      // 支付密码
                showEye: true,                  // 小眼睛，点击显示密码
                inputType: 'password'
            }
        },
        created(){
            let info = JSON.parse(localStorage.getItem('info'));
            this.phoneNumber = info.tel;
            this.cashNumber = info.cash;
        },
        methods:{
            showPwd(){
                if (this.inputType == "password") {
                    this.inputType = "text";
                } else {
                    this.inputType = "password"
                }
            },
            pay(){
                if (this.input == '') {
                    this.$confirm('您的支付密码输入有误，请重新输入！', '消息提示', {
                        confirmButtonText: '确定',
                        showCancelButton: false,
                        type: 'warning',
                        customClass: 'errorNotice',
                        confirmButtonClass: 'Noticebtn'
                    }).then(() => {
                        
                    }).catch(() => {
                                
                    });
                } else {
                    
                }
            },
            cancel(){
                this.$confirm('确定取消提交订单吗?', '消息提示', {
                    confirmButtonText: '确定',
                    showCancelButton: false,
                    type: 'warning',
                    customClass: 'errorNotice',
                    confirmButtonClass: 'Noticebtn'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '取消成功!'
                    });
                }).catch(() => {
                              
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../../../assets/less/recharge/phReachge/billFastRecharge/confirm.less';
</style>