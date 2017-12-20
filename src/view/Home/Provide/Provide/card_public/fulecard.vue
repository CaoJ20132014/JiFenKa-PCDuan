<template>
    <div class="card_box" id="card">
        <div class="card_left" :class="{'width':flag}">
            <router-view></router-view> 
        </div>
        <div class="card_right" v-show="isShow">
            <div class="outside border">
                <div class="centre border">
                    <div class="top">
                        <div>全国卡折扣推荐</div>
                    </div>
                    <div class="ul_top">
                        <div>运营商</div>
                        <div>面值(元)</div>
                        <div>折扣区间</div>
                    </div>
                    <ul>
                        <li v-for="(item,index) in dataList" :key="item.id" :class="[(index+1)%2==0 ? 'bg2' : 'bg1']">
                            <div class="li_top">
                                <div class="one">{{item.yunyingshang}}</div>
                                <div class="two">{{item.mianzhi}}</div>
                                <div class="three">{{item.zhekou}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
		data() {
            return {
                section:'9.5',
                isShow: true,
                flag: false,
                dataList:[{
                    id:"1",
                    yunyingshang: "联通",
                    mianzhi: "10-50",
                    zhekou: '9.5-9.7'
                }, {
                    id:"2",
                    yunyingshang: "移动",
                    mianzhi: '100-200',
                    zhekou: '9.4-9.8'
                }, {
                    id:"3",
                    yunyingshang: "电信",
                    mianzhi:'100-200',
                    zhekou:'9.4-9.6'
                }]
            }
        },
        mounted(){
            this.change();
        },
        methods:{
            query(){

            },
            change(){
                let router =  this.$route.path;
                if (this.isContains(router,"fuelconfim")) {
                    this.isShow = false;
                    this.flag = true;
                } else {
                    this.isShow = true;
                    this.flag = false;
                }
            },
            isContains:function(str, substr){			// 判断str字符串是否包含substr字符串
                return str.indexOf(substr) >= 0;
            }
        },
        watch:{
            $router(){
                this.change();
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/Provide/CardProvide/fuelCard.less';
</style>
