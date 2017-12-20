<template>
    <div class="rechargeIndex" :style="styles">
        <div class="recharge-lt">
            <ul>
                <li :class="[index == '1' ? 'isActive' : '']" @click="routeChange(1)">
                    <img class="phone" src="../../../../assets/image/recharge/index/phone.png" alt="">
                    <span>手机充值</span>
                </li>
<<<<<<< HEAD
                <router-link to="/to/1">
                     <li>
=======
                <li :class="[index == '2' ? 'isActive' : '']" @click="routeChange(2)">
>>>>>>> 3d7ce9ed8b06d11c4ce94c888f607dcc55660d1c
                    <img class="fill" src="../../../../assets/image/recharge/index/fill.png" alt="">
                    <span>流量充值</span>
                    <p>移动、联通、电信</p>
                </li>
<<<<<<< HEAD
                </router-link>

                <li>
=======
                <li :class="[index == '3' ? 'isActive' : '']" @click="routeChange(3)">
>>>>>>> 3d7ce9ed8b06d11c4ce94c888f607dcc55660d1c
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
    import change from "../../../../assets/js/until.js";
    export default{
        data(){
            return{
<<<<<<< HEAD

=======
                index: '',                   // 左侧导航的选中状态
                styles:{
                    height: 540 + 'px'
                }
            }
        },
        watch:{
            $route() {
                this.index = change.changeLeftNav(this.$route.path);                // 改变左侧导航的选中状态
                this.styles.height = change.changeHeight(this.$route.path) + 'px';  // 改变右侧的高度
            }
        },
        mounted(){
            this.index = change.changeLeftNav(this.$route.path);                    // 改变左侧导航的选中状态
            this.styles.height = change.changeHeight(this.$route.path) + 'px';      // 改变右侧的高度
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
                    this.$router.push({
                        name: 'singlefuel'
                    });
                }  
>>>>>>> 3d7ce9ed8b06d11c4ce94c888f607dcc55660d1c
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../assets/less/recharge/index/index.less";
</style>
