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
                    zhekou: '9.5'
                },
                {
                    id:"2",
                    yunyingshang: "移动",
                    mianzhi: '100-200',
                    zhekou: '9.4'
                },
                {
                    id:"3",
                    yunyingshang: "电信",
                    mianzhi:'100-200',
                    zhekou:'9.4'
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

<style scoped>
    .card_box{
        width: 908px;
        height: 563px;
        display: flex;
    }
    .card_box .card_left{
        width: 613px;
        height: 563px;
    }
    .card_box .width{
        width: 908px;
        height: 563px;
    }
    .card_box .card_right{
        width: 295px;
        height: 563px;
    }
    .card_right .outside{
        width: 293px;
        height: 220px;
        margin-top: 10px;
        border-radius: 3px;
        background-color: #f4f4f4;
    }
    .outside .centre{
        width: 285px;
        height: 210px;
        margin: 4px auto 0;
        border-radius: 3px;
        background-color: white;
    }
    .centre .top{
        width: 100%;
        height: 31px;
        padding-top: 15px;
    }
    .centre .top div{
        height: 17px;
        font-size: 14px;
        color: #8a63e7;
        line-height: 17px;
        padding-left: 10px;
        margin-left: 14px;
        border-left: 3px solid #8a63e7;
    }
    .ul_top{
        font-size: 0;
        width: 257px;
        margin: 0 auto;
        border: 1px solid #f1eafd;
        background-color: #f8f4fd;
    }
    .ul_top div{
        font-size: 14px;
        display: inline-block;
        line-height: 30px;
        text-align: center;
    }
    .ul_top div:nth-child(2){
        width: 83px;
        border-left: 1px solid white;
        border-right: 1px solid white;
    }
    .ul_top div:nth-child(1){
        width: 78px;
    }
    .ul_top div:nth-child(3){
        width: 94px;
    }
    ul{
        width: 259px;
        margin: 0 auto;
    }
    .li_top{
        width: 100%;
        font-size: 0;
        border-bottom: 1px solid white;
    }
    .li_top div{
        font-size: 14px;
        display: inline-block;
        line-height: 30px;
        text-align: center;
    }
    .li_top .one{
        width: 78px;
    }
    .li_top .two{
        width: 83px;
        border-left: 1px solid white;
        border-right: 1px solid white;
    }
    .li_top .three{
        width: 94px;
    }
    .li_top .one{
        vertical-align: top;
        height: 28px;
        line-height: 28px;
    }
    .li_top .two div{
        width: 100%;
    }
    .li_top .three div{
        width: 100%;
    }
    .bg1{
        background-color: #fafafa;
    }
    .bg2{
        background-color: #f7f7f7;
    }
    .common{
        display: flex;
        padding-bottom: 12px;
        padding-left: 6px;
    }
    .common .lable{
        width: 80px;
        text-align: right;
        color: #494949;
        font-size: 14px;
        line-height: 30px;
    }
    .query_section{
        display: flex;
        padding-left: 16px;
    }
    .el-button.el-button--default{
        width: 60px;
        height: 30px;
        background-color: #8a63e7;
        color: white;
        padding: 0;
    }
    .section{
        line-height: 30px;
        font-size: 14px;
        color: #494949;
        width: 180px;
    }
</style>
