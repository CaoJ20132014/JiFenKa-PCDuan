<template>
    <div id="rechargeIndex">
        <div class="recharge-lt">
            <ul>
                <li>
                    <img class="phone" src="../../../../assets/image/recharge/index/phone.png" alt="">
                    <span>手机充值</span>
                </li>
                <router-link to="/to/1">
                     <li>
                    <img class="fill" src="../../../../assets/image/recharge/index/fill.png" alt="">
                    <span>流量充值</span>
                    <p>移动、联通、电信</p>
                </li>
                </router-link>

                <li>
                    <img class="fuel" src="../../../../assets/image/recharge/index/fiel.png" alt="">
                    <span>加油卡充值</span>
                </li>
            </ul>
        </div>
        <div class="recharge-rt">
            <router-view/>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../assets/less/recharge/index/index.less";
</style>
