<template>
    <div class="rechargeIndex">
        <div class="recharge-lt">
            <ul>
                <li :class="[index == '1' ? 'isActive' : '']" @click="routeChange(1)">
                    <img class="phone" src="../../../../assets/image/recharge/index/phone.png" alt="">
                    <span>手机充值</span>
                </li>
                <li :class="[index == '2' ? 'isActive' : '']" @click="routeChange(2)">
                    <img class="fill" src="../../../../assets/image/recharge/index/fill.png" alt="">
                    <span>流量充值</span>
                    <p>移动、联通、电信</p>
                </li>
                <li :class="[index == '3' ? 'isActive' : '']" @click="routeChange(3)">
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
    import changeNav from "../../../../assets/js/until.js";
    export default{
        data(){
            return{
                index: ''                   // 左侧导航的选中状态
            }
        },
        mounted(){
            this.index = changeNav.changeLeftNav(this.$route.path);
        },
        methods: {
            routeChange(index){
                this.index = index;
                if (index == '1') {
                    this.$router.push({
                        name: 'fastRecharge'
                    });
                } else if (index == '2') {
                    
                } else if (index == '3') {
                    
                }  
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../assets/less/recharge/index/index.less";
</style>