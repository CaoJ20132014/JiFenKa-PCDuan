<template>
    <div class="many-recharge">
        <div class="m-r-top">
            <div class="m-r-table">
                <div class="table-heard">
                    <div>序号</div>
                    <div>充值号码</div>
                    <div>充值金额（元）</div>
                    <div>扣款金额（元）</div>
                    <div>近两天是否充值（是/否）</div>
                    <div>操作</div>
                </div>
                <div class="table-con" ref="scroll">
                    <ul>
                        <li v-for="(item,index) of tableList" :key="item.id" :class="[((index + 1) % 2) == 0 ? 'bg' : '']">
                            <div><span v-text="index+1"></span></div>
                            <div class="phoneNumber">
                                <el-input ref="phoneInput" placeholder="请输入充值号码" v-model="item.data.input1" clearable :class="{'grey':item.data.input1 == ''}" @blur="phoneblur(item)"></el-input>
                            </div>
                            <div class="cash">
                                <el-input ref="cashInput" placeholder="充值金额" v-model="item.data.input2" clearable :class="{'grey':item.data.input2 == ''}" @blur="blur(item)"></el-input>
                            </div>
                            <div v-text="item.koukuan"></div>
                            <div v-text="item.isRecharged"></div>
                            <div class="operate">
                                <img src="../../../../../assets/image/recharge/pRecharge/delete.png" @click="Delete(item)">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="recharge-cash">
                <p>本平台提供的手机话费充值金额有：</p>
                <p v-for="item of PriceJson" :key="item.id">
                    <span v-text="item.costPrice"></span>元、
                </p>
            </div>
            <div class="buttons">
                <el-button class="commit" @click="mCommitOrder">提交订单</el-button>
                <el-button icon="el-icon-plus" class="addLi" @click="addLi">添加号码</el-button>
                <p>多人充值单次最多充值500条，当前添加行数：<span v-text="tableList.length"></span>，还可添加：<span v-text="surplus"></span>行</p>
            </div>
        </div>
        <div class="m-r-bot">
            <recordtable></recordtable>
        </div>
    </div>
</template>
<script>
    import Public from '../../../../../assets/js/until.js';
    import recordtable from '../manyRecharge/components/orderTable.vue';
    export default {
        components:{
            recordtable
        },
        data () {
            return {
                tableList:[{
                    id: '1',
                    data: {
                        input1: '',
                        input2: ''
                    },
                    koukuan: '',
                    isRecharged: ''
                }],
                PriceJson:[{
                    id: '1',
                    costPrice: '100',
                    newPrice: '98'
                }, {
                    id: '2',
                    costPrice: '200',
                    newPrice: '198'
                }, {
                    id: '3',
                    costPrice: '300',
                    newPrice: '298'
                }]
            }
        },
        watch: {
            tableList(curVal,oldVal){
                this.$nextTick(() => {      // 两种方法都可以实现
                    let container = this.$el.querySelector(".table-con");
                    container.scrollTop = container.scrollHeight;
                    // let list = this.$refs.scroll;
                    // list.scrollTop = list.scrollHeight;
                })
            }
        },
        computed: {
            surplus: function() {               // 计算剩余可添加的行数
                let surplu = 0;
                surplu = 500 - (this.tableList.length);
                return surplu;
            }
        },
        methods:{
            addLi(){
                if (this.tableList.length < 500) {
                    let flag = false;
                    let InputArr1 = this.$refs.phoneInput;
                    InputArr1.forEach((item1,index) => {
                        if (item1.value == '') {
                            let msg = '请把第'+ (index+1) +'行手机号码填写完整，再添加新的充值信息！';
                            this.publicAlert(msg,item1);
                            flag = true;
                            return;
                        } else {
                            let InputArr2 = this.$refs.cashInput;
                            InputArr2.forEach((item2,index) => {
                                if (item2.value == '') {
                                    let msg = '请把第'+ (index+1) +'行充值金额填写完整，再添加新的充值信息！';
                                    this.publicAlert(msg,item2);
                                    flag = true;
                                    return;
                                }
                            });
                        }
                    });
                    setTimeout(() => {
                        if (!flag) {
                            let len = this.tableList.length + 1;
                            let obj = {
                                id: len,
                                data:{
                                    input1: '',
                                    input2: ''
                                },
                                koukuan: '',
                                isRecharged: ''
                            }
                            this.tableList.push(obj); 
                        }
                    }, 200);    
                } else {
                    this.$alert('最多只能添加500条', '消息提示', {
                        confirmButtonText: '确定',
                        type: 'warning'
                    });
                }
            },
            Delete(item){
                let that = this;
                let Arr = that.tableList;
                this.$confirm('确定删除该条？', '消息提示', {
                    confirmButtonText: '确定',
                    showCancelButton: false,
                    type: 'warning'
                }).then(() => {
                    Public.remove(Arr,item);
                }).catch(() => {
                             
                });
            },
            blur(item){
                if(item.data.input2 != ''){
                    let InpeuArr = this.$refs.cashInput;
                    let flag = false;
                    this.PriceJson.forEach((element,index) => {
                        if (element.costPrice == item.data.input2) {
                            item.koukuan = (element.newPrice-0).toFixed(2);
                            flag = true;
                            return;
                        }
                    });
                    setTimeout(() => {
                        if (!flag) {
                            InpeuArr.forEach((item1) => {
                                if (item1.value == item.data.input2) {
                                    item1.focus();
                                }
                            });
                            this.$message({
                                message: '输入的金额不合法',
                                center: true,
                                type: 'warning',
                                duration: 1500
                            });
                        }
                    }, 500);
                    item.data.input2 = (item.data.input2-0).toFixed(2);
                }
            },
            phoneblur(item){
                if (item.data.input1 != '') {
                    let InputArr = this.$refs.phoneInput;
                    if (!Public.isTel(item.data.input1)) {
                        InputArr.forEach((item1) => {
                            if (item1.value == item.data.input1) {
                                item1.focus();
                            }
                        });
                        this.$message({
                            message: '您输入的手机号不正确',
                            type: 'warning',
                            center: true,
                            duration: 1500
                        });
                    }
                }
            },
            mCommitOrder(){
                this.$router.push({
					name: 'mConfirm'
				});
            },
            publicAlert(msg,item){
                this.$confirm(msg, '消息提示', {
                    confirmButtonText: '确定',
                    showCancelButton: false,
                    type: 'warning',
                    confirmButtonClass: 'lackInfoSure',
                    customClass: 'lackInfo',
                }).then(() => {
                    item.focus();
                }).catch(() => {
                    item.focus();
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/recharge/phReachge/manyRecharge/manyRecharge.less';
</style>