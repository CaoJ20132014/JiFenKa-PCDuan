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
                    <el-button class="confirm">立即支付</el-button>
                    <el-button class="canse">取消支付</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                phoneNumber: '15617858292',
                cashNumber: '1000',
                orderNumber: '123456789',
                input: '',
                showEye: true,
                inputType: 'password'
            }
        },
        methods:{
            showPwd(){
                if (this.inputType == "password") {
                    this.inputType = "text";
                } else {
                    this.inputType = "password"
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../../../assets/less/recharge/phReachge/billFastRecharge/confirm.less';
</style>