<template>
    <div class="manycard_box" id="manycard">
        <div class="manycard_left">
            <div class="common">
                <div class="kazhong">
                    <div class="lable">选择卡种：</div>
                    <el-select v-model="optionValue1" :class="{'grey':optionValue1 == ''}" placeholder="请选择">
                        <el-option v-for="item in option1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="mianzhi">
                    <div class="lable">商品面值：</div>
                    <el-select v-model="selected2" :class="{'grey':selected2 == ''}" placeholder="请选择">
                        <el-option v-for="item in option2" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="common">
                <div class="zhekou">
                    <div class="lable">供货折扣：</div>
                    <el-input placeholder="请输入供货折扣" type="number" v-model="input1" :class="{'grey':input1 == ''}"></el-input>
                    <div class="zhekoufont">折</div>
                </div>
                <div class="diqu">
                    <div class="lable">销卡地区：</div>
                    <el-select v-model="optionValue3" :class="{'grey':optionValue3 == ''}" placeholder="请选择">
                        <el-option v-for="item in option3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="kahao_pwd common">
                <p>卡号/密码：<span class="tishi">(请输入卡号和密码，卡号和密码必须一一对应，按下Tab键自动切换输入框)</span></p>
                <div class="input_box border">
                    <div class="title">
                        <div>卡号</div>
                        <div>密码</div>
                    </div>
                    <ul id="kahao_pwd">
                        <li v-for="(item,index) in arr" :key="index" :class="{'bg' : index%2 != 0}">
                            <el-input placeholder='请输入卡号' type="number" :id="'x'+index" v-model="item[0]"></el-input>
                            <el-input placeholder='请输入密码' :id="'y'+index" v-model="item[1]" @focus="addInput(index)"></el-input>
                        </li>
                    </ul>
                </div>
                <p>已经输入了<span class="yellow">{{Num}}</span>张面值<span class="yellow">{{money}}</span>元的卡，每次最多可提交1000张。</p>
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
                optionValue1: '',           // 选择卡种
                selected2: '',              // 商品面值
                optionValue3: '',           // 销卡地区
                input1:'',                  // 供卡折扣
                option1: [
                    {value: '1',label: '电话卡'}, 
                    {value: '2',label: '会员卡'}, 
                    {value: '3',label: '加油卡'}, 
                    {value: '4',label: '流量卡'}, 
                    {value: '5',label: '购物卡'}
                ],
                option2: [
                    {value: '1',label: '100'}, 
                    {value: '2',label: '200'}, 
                    {value: '3',label: '500'}, 
                    {value: '4',label: '1000'}, 
                    {value: '5',label: '5000'}
                ],
                option3: [
                    {value: '1',label: '全国'}, 
                    {value: '2',label: '北京'}, 
                    {value: '3',label: '上海'}, 
                    {value: '4',label: '浙江'}, 
                    {value: '5',label: '广州'}
                ],
                Num: 100,
                money:1000,
                liNum: 3,                     // li的数量
                arr:[[
                        '',
                        ''
                    ], [
                        '',
                        ''
                    ], [
                        '',
                        ''
                    ]]
            }
        },
        methods:{
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
            addInput(x){
                for(let i = 0;i < this.arr.length;i++){
                    if(this.arr[i][1] == null||this.arr[i][2] == null){
                        this.Num = 0;
                    }else{
                        this.Num = x + 1;
                    }
                }
                this.money = this.selected2;
                if (this.liNum <= 1000) {
                    if(x + 1 == this.liNum){
                    this.liNum++;
                        this.arr.push([
                            '',''
                        ])
                    }
                } else {
                    this.$confirm('已经达到1000跳', '警告提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'error'
                    });
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../../../assets/less/Provide/CardProvide/manyCard.less';
</style>
