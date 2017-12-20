<template>
    <div class="oncard_box" id="onecard">
        <div class="oncard">
            <div class="common">
                <div class="lable">卡号：</div>
                <el-input placeholder="支持中石化充值卡" type="number" v-model="input1" :class="{'grey':input1 == ''}"></el-input>
            </div>
            <div class="common">
                <div class="lable">密码：</div>
                <el-input placeholder="请输入密码" v-model="input2" :class="{'grey':input2 == ''}" :type="pwdType">
                    <i class="el-input__icon iconfont" :class="[flag ? 'icon-yanjing1':'icon-yanjing-copy']" slot="suffix" @click="flag = !flag,changeType()"></i>
                </el-input>
            </div>
            <div class="common">
                <div class="lable">商品面额：</div>
                <ul class="value_ul">
                    <li v-for="(item,index) in faceValue" :key="item.id" @click="click(item,index)">
                        <div :class="{cheack:cheacked == item.value}" class="border">{{item.value}}元</div>
                    </li>
                </ul>
            </div>
            <div class="common">
                <div class="lable">供货折扣：</div>
                <el-input placeholder="请输入供货折扣" type="number" v-model="input3" :class="{'grey':input3 == ''}"></el-input>
                <div class="zhekou">折</div>
            </div>
            <div class="commit common">
                <el-button @click="commitInfo">确认提交</el-button>
            </div>
            <div class="prompt common">
                <div>
                    <img src="../../../../../assets/image/Provide/i.png" alt="">
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
                input3: "",             // 供货折扣
                flag: false,            // 用于判断显示什么图标
                pwdType: "password",    // 改变密码输入框的类型
                faceValue: [
                    {id: 7,value: 50},
                    {id: 8,value: 100},
                    {id: 9,value: 200},
                    {id: 10,value: 300},
                    {id: 11,value: 500}
                ],
                cheacked: 0             // 选择的面额大小
            }
        },
        methods:{
            click(item){
                this.cheacked = item.value;
            },
            commitInfo(){
                console.log(this.cheacked);
                this.$confirm('是否继续提交?', '消息提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '提交成功!'
                    });
                }).catch(() => {
                              
                });
            },
            changeType(){
                if (this.pwdType == "password") {
                    this.pwdType = "text";
                } else {
                    this.pwdType = "password";
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/Provide/CardProvide/onefuel.less';
</style>
