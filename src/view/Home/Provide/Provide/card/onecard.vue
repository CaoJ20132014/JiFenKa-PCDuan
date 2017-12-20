<template>
    <div class="oncard_box" id="onecard">
        <div class="oncard">
            <div>
                <div class="lable">卡号：</div>
                <el-input placeholder="请输入卡号" type="number" v-model="input1" :class="{'grey':input1 == ''}"></el-input>
            </div>
            <div>
                <div class="lable">密码：</div>
                <el-input placeholder="请输入密码" v-model="input2" :class="{'grey':input2 == ''}" :type="pwdType">
                    <i class="el-input__icon iconfont" :class="[flag ? 'icon-yanjing1':'icon-yanjing-copy']" slot="suffix" @click="flag = !flag,changeType()"></i>
                </el-input>
            </div>
            <div>
                <div class="lable">商品面额：</div>
                <ul class="value_ul">
                    <li v-for="(item,index) in faceValue" :key="item.id" @click="click(item,index)">
                        <div :class="{cheack:cheacked == item.value}" class="border">{{item.value}}元</div>
                    </li>
                </ul>
            </div>
            <div>
                <div class="lable">销卡地区：</div>
                <el-select v-model="optionValue" :class="{'grey':optionValue == ''}" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div>
                <div class="lable">供货折扣：</div>
                <el-input placeholder="请输入供货折扣" type="number" v-model="input3" :class="{'grey':input3 == ''}"></el-input>
                <div class="zhekou">折</div>
            </div>
            <div class="commit">
                <el-button @click="commitInfo">确认提交</el-button>
            </div>
            <div class="prompt">
                <div>
                    <img src="../../../../assets/i.png" alt="">
                    <span>温馨提示</span>
                </div>
                <p>1.请精准填写所供卡号与密码相对应且真实有效，否则可能导致无法结算，给您带来损失。</p>
                <p>2.全国话费充值卡可指定省份消耗，请精确选择销卡地区，以免给您带来不必要的损失。</p>
                <p>3.所有充值卡默认消耗时间为7天，您也可随时查看销卡动态。</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
		data() {
			return {
                input1: "",             // 卡号
                input2: "",             // 密码
                input3: "",             // 折扣
                flag: false,            // 用于判断显示什么图标
                pwdType: "password",    // 改变密码输入框的类型
                faceValue: [
                    {id: 1,value: 1},
                    {id: 2,value: 2},
                    {id: 3,value: 5},
                    {id: 4,value: 10},
                    {id: 5,value: 20},
                    {id: 6,value: 30},
                    {id: 7,value: 50},
                    {id: 8,value: 100},
                    {id: 9,value: 200},
                    {id: 10,value: 300},
                    {id: 11,value: 500}
                ],
                options: [
                    {value: '1',label: '全国'}, 
                    {value: '2',label: '北京'}, 
                    {value: '3',label: '上海'}, 
                    {value: '4',label: '浙江'}, 
                    {value: '5',label: '广州'}
                ],
                optionValue: '',        // 供货地区最终选中的值
                cheacked: 0             // 选择的面额大小
            }
        },
        methods:{
            handleIconClick(){
                
            },
            click(item){
                this.cheacked = item.value;
            },
            commitInfo(){
                this.$confirm('确定提交?', '消息提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '提交成功!',
                        center: true
                    });
                }).catch(() => {
                             
                });
            },
            changeType(){
                if (this.pwdType == "password") {
                    this.pwdType = "text";
                } else {
                    this.pwdType = "password"
                }
            }
        }
    }
</script>

<style scoped>
    .oncard_box{
        width: 613px;
        height: 563px;
    }
    .oncard_box .oncard{
        width: 613px;
        height: 100%;
    }
    .oncard_box .oncard>div{
        padding-top: 21px;
        display: flex;
    }
    .oncard_box .oncard div .lable{
        line-height: 38px;
        width: 80px;
        text-align: right;
    }
    .value_ul{
        width: 523px;
        display: flex;
        flex-wrap: wrap;
    }
    .value_ul li{
        list-style: none;
        width: 74px;
        height: 40px;
        margin-right: 12px;
    }
    .value_ul li div{
        width: 72px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        cursor: pointer;
        background-color: #f4f4f4;
    }
    .value_ul li:nth-child(n+7){
        padding-top: 12px;
    }
    .zhekou{
        width: 30px;
        line-height: 38px;
        padding-left: 10px;
    }
    .el-button.el-button--default{
        width: 120px;
        height: 38px;
        background-color: #8a63e7;
        color: white;
    }
    .commit{
        margin-left: 80px;
    }
    .oncard_box .oncard .prompt{
        display: block;
    }
    .prompt img{
        width: 17px;
        height: 17px;
        vertical-align: top;
        margin-right: 5px;
        margin-top: 3px;
    }
    .prompt span{
        color: #8a63e7;
    }
    .prompt p{
        font-size: 14px;
        line-height: 25px;
    }
    .prompt div{
        margin-bottom: 10px;
    }
    .cheack{
        background-image: url(../../../../assets/xuanzhong.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-color: #8a63e7;
    }
</style>
