<template>
    <div class="phReachge">
        <div class="phReachge-top">
            <div class="firstDiv">手机充值</div>
        </div>
        <div class="phReachge-con">
            <div class="top-nav">
                <ul>
                    <li v-for="(item,index) of NavList" :key="item.id" :class="[activeIndex == (index+1) ? 'active' : '']" @click="goPath(index)">
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
    export default {
        data () {
            return {
                activeIndex: '1',
                NavList:[{
                    id: '1',
                    title: "话费快充"
                }, {
                    id: '1',
                    title: "多人充值"
                }, {
                    id: '1',
                    title: "批量写入"
                }, {
                    id: '1',
                    title: "批量导入"
                }, {
                    id: '1',
                    title: "订单查询"
                }]
            }
        },
        methods: {
            goPath(index) {
                this.activeIndex = (index+1);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../../assets/less/recharge/phReachge/index/phReachge.less";
</style>