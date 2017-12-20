<template>
    <div class="orderConfirm">
        <div class="inputDiv">
            <div class="lable">支付密码：</div>
            <div class="inputBox">
                <el-input :type="InputType" v-model="input" placeholder="请输入支付密码" :class="{'grey':input == ''}">
                    <i slot="suffix" class="iconfont" :class="[showEye ? 'icon-yanjing' : 'icon-eye-close']" @click="showEye=!showEye,showPwd()"></i>
                </el-input>
            </div>
            <div class="buttons">
                <el-button class="ImportConfirm">确认</el-button>
                <el-button class="ImportCancle">取消</el-button>
            </div>
            <div class="rechargeInfo">
                <p>充值笔数：<span>{{list.length}}</span>笔，总充值金额：<span>{{totalCash.toFixed(2)}}</span>元 </p>
            </div>
        </div>
        <div class="ul-list">
            <div class="ul-list-heard">
                <div>序号</div>
                <div>充值号码</div>
                <div>充值金额（元）</div>
                <div>扣款金额（元）</div>
            </div>
            <ul>
                <li v-for="(item,index) in list" :key="item.id" :class="[((index + 1) % 2) == 0 ? 'bg' : '']">
                    <div v-text="index+1"></div>
                    <div v-text="item.phone"></div>
                    <div v-text="(item.cash-0).toFixed(2)"></div>
                    <div v-text="(item.koukuan-0).toFixed(2)"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            totalCash(){
                let totalCash = 0;
                this.list.forEach((item)=>{
                    totalCash += (item.cash-0)
                });
                return totalCash;
            }
        },
        data () {
            return {
                input: '',
                InputType: 'password',
                showEye: true,                  // 小眼睛，点击显示密码
                eyes: '',
                list:[{
                    id: '1',
                    phone: '15617858292',
                    cash: '30',
                    koukuan: '29'
                }, {
                    id: '2',
                    phone: '15617858292',
                    cash: '30',
                    koukuan: '29'
                }, {
                    id: '3',
                    phone: '15617858292',
                    cash: '30',
                    koukuan: '29'
                }, {
                    id: '4',
                    phone: '15617858292',
                    cash: '30',
                    koukuan: '29'
                }, {
                    id: '5',
                    phone: '15617858292',
                    cash: '30',
                    koukuan: '29'
                }]
            }
        },
        methods:{
            showPwd(){
                if (this.InputType == "password") {
                    this.InputType = "text";
                } else {
                    this.InputType = "password"
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/less/public/var.less';
    .orderConfirm{
        .inputDiv{
            width: 100%;
            height: @baseHeight*0.4;
            font-size: 0;
            div{
                height: @baseHeight*0.4;
                display: inline-block;
                line-height: @baseLineHeight*4;
            }
            .lable{
                vertical-align: top;
                font-size: @font-size16;
            }
            .rechargeInfo{
                font-size: @font-size16;
                float: right;
                p{
                    line-height: @baseLineHeight*4;
                    span{
                        color: @color-yel;
                    }
                }
            }
            .buttons{
                .ImportConfirm{
                    width: @baseWidth*0.9;
                    margin-left: @baseMargin;
                    background-color: @color-common;
                    color: @color-white;
                    &:focus,
                    &:hover{
                        border-color: @color-common;
                    }
                }
                .ImportCancle{
                    width: @baseWidth*0.9;
                    &:focus,
                    &:hover{
                        color: @color-common;
                        border-color: @color-common;
                    }
                }
            }
        }
        .ul-list{
            margin-top: @baseMargin*2;
            border: @baseBorderWidth solid @baseBorderColor;
            .ul-list-heard{
                font-size: 0;
                background-color: @color-fa;
                div{
                    font-size: @font-size16;
                    display: inline-block;
                    text-align: center;
                    line-height: @baseLineHeight*4;
                    border-right: @baseBorderWidth solid @baseBorderColor;
                    &:nth-child(1){
                        width: 9.9%;
                    }
                    &:nth-child(2){
                        width: 39.9%;
                    }
                    &:nth-child(3){
                        width: 24.9%;
                    }
                    &:nth-child(4){
                        width: 24.9%;
                        border-right: 0;
                    }
                }
            }
            ul{
                width: 100%;
                height: @baseHeight*1.6;
                overflow-y: scroll;
                &::-webkit-scrollbar{
                    display: none;
                }
                li{
                    list-style: none;
                    font-size: 0;
                    div{
                        font-size: @font-size16;
                        display: inline-block;
                        text-align: center;
                        line-height: @baseLineHeight*4;
                        border-right: @baseBorderWidth solid @baseBorderColor;
                        &:nth-child(1){
                            width: 9.9%;
                        }
                        &:nth-child(2){
                            width: 39.9%;
                        }
                        &:nth-child(3){
                            width: 24.9%;
                        }
                        &:nth-child(4){
                            width: 24.9%;
                            border-right: 0;
                        }
                    }
                }
                .bg{
                    background-color: @color-fa;
                }
            }
        }
    }
</style>