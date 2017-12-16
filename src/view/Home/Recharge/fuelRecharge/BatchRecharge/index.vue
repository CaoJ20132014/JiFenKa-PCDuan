<template>
    <div class="batch-recharge">
        <div class="bRecharge">
            <div class="left">
                <div class="lable">充值号码：</div>
                <div class="input-box" ref="scroll">
                    <ul>
                        <li v-for="(item,index) of phoneList" :key="item.data.id" :class="[((index + 1) % 2) == 0 ? 'bg' : '']">
                            <el-input ref="phoneInput" :maxlength="19" placeholder="请输入内容" v-model="item.data.input" clearable :class="{'grey':item.data.input == ''}" @blur="addLi(item)"></el-input>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <Notice></Notice>
            </div>
        </div>
        <div class="choose">
            <div class="lable">充值面值：</div>
            <ul>
                <li v-for="(item,index) of ValueList" :key="item.id" :class="[choosed == (index+1) ? 'active' : '']" @click="choose(index,item)" v-text="item.title"></li>
            </ul>
        </div>
        <div class="commit">
            <el-button @click="tijiaoOrder">提交订单</el-button>
        </div>
        <div class="rechargeDetail">
            <rechargeTble></rechargeTble>
        </div>
    </div>
</template>
<script>
    import Notice from '../components/notice.vue';
    import rechargeTble from '../components/table.vue';
    import Public from '../../../../../assets/js/until.js';
    export default {
        components: {
            Notice,
            rechargeTble
        },
        data () {
            return {
                choosed: '0',
                input2: '',
                phoneList:[{
                    id: '1',
                    data:{
                        input: ''
                    }
                }],
                ValueList:[{
                    id: '1',
                    title: '50元'
                }, {
                    id: '2',
                    title: '100元'
                }, {
                    id: '3',
                    title: '200元'
                }, {
                    id: '4',
                    title: '500元'
                }, {
                    id: '5',
                    title: '1000元'
                }, {
                    id: '6',
                    title: '2000元'
                }]
            }
        },
        watch: {
            phoneList(curVal,oldVal){
                this.$nextTick(() => {      // 两种方法都可以实现
                    let container = this.$el.querySelector(".input-box");
                    container.scrollTop = container.scrollHeight;
                })
            }
        },
        methods: {
            addLi(item){
                let InputArr = this.$refs.phoneInput;
                if (this.phoneList.length < 100) {
                    if(item.data.input == ''||item.data.input.length != '19'){
                        this.$message({
                            message: '加油卡卡号不正确',
                            type: 'warning',
                            center: true,
                            duration: 1500
                        });
                    }else if (item.data.input != ''&&item.data.input.length == '19') {
                        let len = this.phoneList.length+1;
                        let obj = {
                            id: len,
                            data:{
                                input: ''
                            }
                        }
                        this.phoneList.push(obj);
                    }
                }
            },
            choose(index,item){
                this.choosed = index+1;
                this.input2 = item.title.substring(0,item.title.length-1);
                this.display = true;
            },
            tijiaoOrder(){
                this.$router.push({
                    name: 'bFuelConfirm'
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../../../assets/less/recharge/fuelRecharge/batchRecharge/index.less';
</style>