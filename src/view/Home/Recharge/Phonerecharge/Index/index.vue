<template>
    <div class="phReachge">
        <div class="phReachge-top">
            <div class="firstDiv" @click="back">手机充值</div>
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
    import change from '../../../../../assets/js/until.js';
    export default {
        data () {
            return {
                activeIndex: '1',
                isShow: false,
                NavList:[{
                    id: '1',
                    title: "话费快充",
                    route: 'fastRecharge'
                }, {
                    id: '2',
                    title: "多人充值",
                    route: 'mRecharge'
                }, {
                    id: '3',
                    title: "批量写入",
                    route: 'bRecharge'
                }, {
                    id: '4',
                    title: "批量导入",
                    route: 'batchImport'
                }, {
                    id: '5',
                    title: "订单查询",
                    route: 'orderDetail'
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
                    name: 'fastRecharge'
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../../assets/less/recharge/phReachge/index/phReachge.less";
</style>