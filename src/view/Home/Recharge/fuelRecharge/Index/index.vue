<template>
    <div class="phReachge">
        <div class="phReachge-top">
            <div class="firstDiv" @click="back">加油卡充值</div>
            <img v-show="isShow" src="../../../../../assets/image/recharge/index/jiantou.png" alt="">
            <div v-show="isShow" class="orderConfirm">订单确认</div>
        </div>
        <div class="phReachge-con">
            <div class="top-nav" v-show="!isShow">
                <ul>
                    <li v-for="(item,index) of NavList" :key="item.id" :class="[activeIndex == (index+1) ? 'active' : '']" @click="goPath(index,item)">
                        <span>{{item.title}}</span>
                    </li>
                </ul>
            </div>
            <div class="bot-box">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    import change from '@/until/until';
    export default {
        data () {
            return {
                activeIndex: '1',
                isShow: false,
                NavList:[{
                    id: '1',
                    title: "中石化充值",
                    route: 'singlefuel'
                }, {
                    id: '2',
                    title: "中石化批量充值",
                    route: 'bFuelRecharge'
                }]
            }
        },
        watch:{
            $route(){
                this.isShow = change.changeCrumbs(this.$route.path);
                this.activeIndex = change.judgeRoute(this.$route.path);
            }
        },
        mounted(){
            this.isShow = change.changeCrumbs(this.$route.path);
            this.activeIndex = change.judgeRoute(this.$route.path);
        },
        methods: {
            goPath(index,item) {
                this.activeIndex = (index+1);
                this.$router.push({
                    name: item.route
                })
            },
            back(){
                this.$router.push({
                    name: 'singlefuel'
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../../assets/less/recharge/fuelRecharge/index/fuelRecharge.less";
</style>