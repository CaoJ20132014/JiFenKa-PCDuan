<template>
    <div class="confirm">
        <ul class="border" ref="info_ul">
            <li>
                <div>供卡数量(张)</div>
                <div>{{value1}}</div>
            </li>
            <li>
                <div>选择卡种</div>
                <div>{{value2}}</div>
            </li>
            <li>
                <div>商品面值(元)</div>
                <div>{{value3.toFixed(2)}}</div>
            </li>
            <li>
                <div>销卡地区</div>
                <div>{{value4}}</div>
            </li>
            <li>
                <div>供卡折扣</div>
                <div>{{value5}}</div>
            </li>
        </ul>
        <div class="btn">
            <el-button @click="back">上一步</el-button>
            <el-button @click="commitInfo">确认提交</el-button>
            <el-button @click="cancel">取消</el-button>
        </div>
    </div>
</template>
<script>
    export default {
		data() {
			return {
                value1: 1,
                value2: 20,
                value3: 100.03,
                value4: 200,
                value5: 300		
			}
        },
        methods:{
            cancel(){
                this.$confirm('确定取消提交?', '消息提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '成功取消!',
                        center: true
                    });
                }).catch(() => {
                    
                });
            },
            back(){
                this.$router.push({
					name: 'manyfuel'
				});
            },
            commitInfo(){
                this.$confirm('请认真核实上面的信息！一旦导卡错误造成的损失平台不付责任', '消息提示', {
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
            }
        }
    }
</script>
<style lang="less" scoped>
    .confirm{
        ul.border{
            width: 440px;
            height: 244px;
            margin: 70px auto 0;
            border-radius: 3px;
            li{
                width: 440px;
                height: 48px;
                list-style: none;
                font-size: 16px;
                border-bottom: 1px solid #e9e9e9;
                &:last-child{
                    border-bottom: none;
                }
                div{
                    float: left;
                    &:first-child{
                        width: 199px;
                        line-height: 48px;
                        text-align: center;
                        border-right: 1px solid #e9e9e9;
                    }
                    &:nth-child(2){
                        width: 240px;
                        line-height: 48px;
                        text-align: center;
                    }
                }
            }
        }
        .btn{
            margin-top: 48px;
            text-align: center;
            .el-button.el-button--default{
                &:nth-child(1){
                    width: 90px;
                    height: 36px;
                    padding: 0;
                    background-color: #8a63e7;
                    color: white;
                }
                &:nth-child(2){
                    width: 120px;
                    height: 36px;
                    padding: 0;
                    background-color: #8a63e7;
                    color: white;
                }
                &:nth-child(3){
                    width: 90px;
                    height: 36px;
                    padding: 0;
                    background-color: #8a63e7;
                    color: white;
                }
            }
        }
    }
    .el-message-box__wrapper .el-message-box{
        height: 250px;
    }
</style>