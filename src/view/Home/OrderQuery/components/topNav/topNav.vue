<template>
    <div class="query-nav">
        <ul>
            <li v-for="(item,index) in navList" :key="item.id" :class="[isActive == (index+1) ? 'active' : '']" @click="changNav(item,index)">
                <span v-text="item.name"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isActive: '1',
                navList:[{
                    id: '1',
                    name: '订单明细',
                    route: 'orderDetail'
                }, {
                    id: '2',
                    name: '订单统计',
                    route: 'census'
                }, {
                    id: '3',
                    name: '资金明细',
                    route: 'capitalDetail'
                }]
            }
        },
        watch:{
            $route(){
                this.RefreshChange(this.$route.path);
            } 
        },
        mounted(){
            this.RefreshChange(this.$route.path);
        },
        methods:{
            changNav(item,index){
                this.isActive = index+1;
                this.$router.push({
                    name: item.route
                })
            },
            RefreshChange(route){
                if (route == '/Home/orderquery/capitalDetail') {
                    return this.isActive = '3'
                } else if(route == '/Home/orderquery/census'){
                    return this.isActive = '2'
                } else if(route == '/Home/orderquery/'){
                    return this.isActive = '1'
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/public/var.less';
    .query-nav{
        width: 100%;
        ul{
            font-size: 0;
            height: @baseHeight*0.67;
            border-bottom: @baseBorderWidth*1 solid @baseBorderColor;
            li{
                display: inline-block;
                list-style: none;
                font-size: @font-size16;
                width: @baseWidth;
                height: @baseHeight*0.64;
                line-height: @baseLineHeight*6.4;
                text-align: center;
                border-bottom: @baseBorderWidth*3 solid @color-white;
                &:hover{
                    border-color: @color-common;
                }
            }
            .active{
                color: @color-common;
                border-color: @color-common;
            }
        }
    }
</style>