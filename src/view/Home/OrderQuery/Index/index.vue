<template>
    <div class="query">
        <div class="top-nav">
            <TopNav></TopNav>
        </div>
        <div class="query-conent">
            <router-view/>
        </div>
    </div>
</template>
<script>
    import TopNav from '../components/topNav/topNav.vue';
    export default {
        components:{
            TopNav
        },
        data () {
            return {
                
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../assets/less/public/var.less';
    .query{
        width: @baseWidth*11.18;
        height: @baseHeight*8.88;
        padding: 0 @basePadding*4;
        border: @baseBorderWidth solid @baseBorderColor;
    }
</style>