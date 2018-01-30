<template>
    <div class="manycard_box" id="manycard">
        <div class="manycard_left">
            <div class="upload">
                <el-upload ref="upload" :limit="1" :multiple="false" name="file_excel" :action="actionUrl" :on-change="handleChange" :on-success="UPsuccess" :auto-upload="false" :before-upload="beforeUpload">
                    <el-button slot="trigger" size="small" type="danger" icon='el-icon-search'>选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload" icon='el-icon-upload'>开始上传</el-button>
                </el-upload>
                <el-button slot="trigger" size="small" type="warning" style="margin-left: 10px;" @click="operateStep">操作步骤</el-button>
                <span style="font-size: 15px;padding-left: 10px;color: red;line-height: 38px;">*导入的卡面值必须保持一致*</span>
            </div>
            <div>
                <div class="lable">选择卡种：</div>
                <el-select v-model="optionValue1" :class="{'grey':optionValue1 == ''}" placeholder="请选择">
                    <el-option v-for="item in option1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <div class="lable">供货折扣：</div>
                <el-input placeholder="请输入供货折扣" type="number" v-model="input1" :class="{'grey':input1 == ''}"></el-input>
                <div class="zhekoufont">折</div>
            </div>
            <div class="commit">
                <div class="lable">销卡地区：</div>
                <el-select v-model="optionValue3" :class="{'grey':optionValue3 == ''}" placeholder="请选择">
                    <el-option v-for="item in option3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <a :href="download" download="mould">
                    <el-button class="templet" icon='el-icon-download'>模板下载</el-button>
                </a>
                <el-button class="submmit" @click="commitInfo" :loading="loading" :disabled="isDisabled">确认提交</el-button>
            </div>
            <div class="list">
                <el-table :data="tableData" stripe border style="width: 100%" max-height="240" v-loading="loading2"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading">
                    <el-table-column align='center' type="index" label="序号" width="80"></el-table-column>
                    <el-table-column align='center' prop="卡号" label="卡号" width="220"></el-table-column>
                    <el-table-column align='center' prop="卡密" label="密码" width="219"></el-table-column>
                    <el-table-column align='center' prop="面额" label="面额" :width="Width"></el-table-column>
                </el-table>
            </div>
            <div class="prompt">
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
    import api from '@/api/api';
    import Public from '@/until/until';
    import { getValue, importCard, SureUpLoad } from '@/until/getData';
    export default {
		data() {
			return {
                input1: '',
                optionValue1: '2',          // 选择卡种
                kazhong: '中国联通',         // 选择卡种文字
                optionValue3: '全国',        // 销卡地区
                actionUrl: api.upLoad,
                fileName: '',
                isDisabled: false,
                loading: false,
                loading2: false,
                dataStr: [],
                download: 'https://a.91jfk.com/ProvideHome/Import/fileReader',
                option3: [
                    {value: '1',label: '全国'}
                ],
                option1: [
                    {value: '3',label: '中国电信'}, 
                    {value: '1',label: '中国移动'}, 
                    {value: '2',label: '中国联通'}
                ],
                tableData: [],
                Width: 80,
                flag: false
            }
        },
        mounted () {
            let data = {
                operator: '2'
            }
            this.getWorth(data);
        },
        watch: {
            optionValue1(){
                let data = {};
                if (this.optionValue1 === '1') {
                    data.operator = '1';
                    this.selected2 = '';
                    this.getWorth(data);
                    this.kazhong = '中国移动';
                    this.$emit('cardType', '中国移动');
                } else if (this.optionValue1 === '2') {
                    data.operator = '2';
                    this.selected2 = '';
                    this.getWorth(data);
                    this.kazhong = '中国联通';
                    this.$emit('cardType', '中国联通');
                } else if (this.optionValue1 === '3') {
                    data.operator = '3';
                    this.selected2 = '';
                    this.getWorth(data);
                    this.kazhong = '中国电信';
                    this.$emit('cardType', '中国电信');
                }
            },
            tableData(){
                if (this.tableData.length<5) {
                    this.Width = 80;
                } else {
                    this.Width = 63;
                }
            }
        },
        methods:{
            beforeUpload(file){
                let testmsg = file.name.substring(file.name.lastIndexOf('.')+1);
                const extension1 = testmsg === 'xls';
                const extension2 = testmsg === 'xlsx';
                if (testmsg !== 'xls'&&testmsg !== 'xlsx') {
                    Public.topAlert('warning','上传文件只能是xls、xlsx格式!');
                } else {
                    this.importf(file);
                }
                if (!extension1 || !extension2) {
                    return extension1 || extension2;
                }
            },
            UPsuccess(response){
                this.fileName = response;
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleChange(file) {
                if (file.status == 'success') {
                    this.loading2 = false;
                    this.flag = true;
                } else if(file.status == 'fail'){
                    this.loading2 = false;
                    this.flag = true;
                }  else {
                    this.loading2 = true;
                    this.flag = false;
                }
            },
            commitInfo(){
                this.isDisabled = true;
                let Worth = this.tableData[0]['面额'];
                if (this.flag) {
                    if (this.optionValue1 == '') {
                        Public.topAlert('warning','请选择卡种');
                        this.clearTimeout();
                        return;
                    } else if(this.optionValue3 == ''){
                        Public.topAlert('warning','请选择销卡地区');
                        this.clearTimeout();
                        return;
                    } else if (this.input1 == '') {
                        Public.topAlert('warning','请输入供卡折扣');
                        this.clearTimeout();
                        return;
                    } else {
                        this.faceValue.forEach((item) => {
                            if (Worth === item.worth) {
                                let height;
                                let low;
                                if (item.discount_high.length == '3' && item.discount_low.length == '3') {
                                    low = (eval(item.discount_high)/100).toFixed(3);
                                    height = (eval(item.discount_low)/100).toFixed(3);
                                } else if (item.discount_high.length == '4' && item.discount_low.length == '4') {
                                    low = (eval(item.discount_high)/1000).toFixed(3);
                                    height = (eval(item.discount_low)/1000).toFixed(3);
                                } else if (item.discount_high.length == '3' && item.discount_low.length == '4') {
                                    low = (eval(item.discount_high)/100).toFixed(3);
                                    height = (eval(item.discount_low)/1000).toFixed(3);
                                } else if (item.discount_high.length == '4' && item.discount_low.length == '3') {
                                    low = (eval(item.discount_high)/1000).toFixed(3);
                                    height = (eval(item.discount_low)/100).toFixed(3);
                                }
                                if (eval(this.input1) >= eval(low) && eval(height) >= eval(this.input1)) {
                                    this.loading = true;
                                    const h = this.$createElement;
                                    this.$msgbox({
                                        title: '消息提示',
                                        message: h('div', null, [
                                            h('p', {style: 'line-height: 25px'}, '您本次提交的供卡信息如下：（请仔细核对）'),
                                            h('p', {style: 'line-height: 20px'}, [
                                                h('span',null,'卡种：'),
                                                h('span',{style: 'color: red'},this.kazhong)
                                            ]),
                                            h('p', {style: 'line-height: 20px'}, [
                                                h('span',null,'供卡数量：'),
                                                h('span',{style: 'color: red'},this.tableData.length+'张')
                                            ]),
                                            h('p', {style: 'line-height: 20px'}, [
                                                h('span',null,'供货折扣：'),
                                                h('span',{style: 'color: red'},this.input1)
                                            ])
                                        ]),
                                        showCancelButton: false,
                                        confirmButtonText: '确定',
                                        customClass: 'ConfirmImportCardInfoMessage'
                                    }).then(action => {
                                        this.confirm();
                                    }).catch(action => {
                                        this.loading = false;
                                        Public.topAlert('error','取消操作');
                                    });
                                    this.clearTimeout();
                                } else {
                                    Public.topAlert('warning','您输入的折扣不符合规则');
                                }
                            }
                        });
                    }
                } else {
                    Public.confirmAlert('请先上传文件', '消息提示', 'warning');
                    this.clearTimeout();
                };
                setTimeout(() => {
                    this.isDisabled = false;
                }, 1000);
            },
            confirm(){
                let token = Public.getToken();
                let data = {
                    name: this.fileName,
                    discount: Public.encrypt(String(Math.ceil((this.input1-0)*1000)), token),
                    card_type: this.optionValue1,
                    area: this.optionValue3
                };
                SureUpLoad(data).then((res) => {
                    // console.log(res);
                    if (res.code == '1') {
                        this.loading = false;
                        Public.topAlert('success',res.msg);
                    } else {
                        this.loading = false;
                        Public.topAlert('warning',res.msg);
                    }
                }).catch((err) => {
                    // console.log(err);
                });
            },
            cancel(){
                this.loading = false;
                Public.topAlert('error','取消操作');
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
            },
            getWorth(data){
                getValue(data).then((res) => {
                    // console.log(res);
                    if (res.code == '1') {
                        this.option2 = [];
                        this.faceValue = res.msg;
                        res.msg.forEach((item, index) => {
                            let obj = {
                                value: index+1,
                                label: item.worth
                            }
                            this.option2.push(obj);
                        });
                        this.$emit('discount', res.msg);
                    }
                }).catch((err) => {
                    // console.log(err);
                });
            },
            importf(obj){
                let _that = this;
				let reader = new FileReader();
				reader.onload = (e) => {
					let data = e.target.result;
					let wb = XLSX.read(data, {
						type: 'binary'
                    });
					_that.tableData = (XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
                };
				reader.readAsBinaryString(obj);
            },
            clearTimeout(){
                setTimeout(() => {
                    this.isDisabled = false;
                }, 1000);
            },
            operateStep(){
                let msg = '下载模板=>选择文件=>上传=>选择卡种=>输入折扣=>提交'
                Public.confirmAlert(msg, '操作步骤', 'info');
            }
        }
    }
</script>

<style scoped>
    .manycard_box{
        width: 613px;
        height: 563px;
    }
    .manycard_box .manycard_left{
        width: 613px;
        height: 100%;
    }
    .manycard_box .manycard_left>div{
        padding-top: 12px;
        display: flex;
    }
    .manycard_left .list{
        width: 600px;
        height: 240px;
        overflow-y: scroll;
    }
    .manycard_box .list::-webkit-scrollbar{
        display: none;
    }
    .manycard_box .manycard_left .zhekou{
        display: flex;
    }
    .lable{
        line-height: 40px;
        width: 80px;
        text-align: right; 
        font-size: 15px;
    }
    .zhekoufont{
        width: 20px;
        line-height: 40px;
        padding-left: 10px;
    }
    .manycard_box .manycard_left .prompt{
        display: block;
        padding-top: 10px;
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
        font-size: 15px;
    }
    .yellow{
        color: #f9c07a;
    }
    .manycard_box .manycard_left .commit{
        padding-top: 10px;
    }
    .tishi{
        font-size: 14px;
        color: #a5a5a5;
    }
    .el-button{
        width: 120px;
        height: 38px;
        padding: 0;
    }
    .submmit.el-button.el-button--default{
        width: 120px;
        height: 38px;
        background-color: #8a63e7;
        color: white;
        padding: 0;
        margin-left: 10px;
    }
    .submmit.el-button.el-button--default:hover{
        border-color: #8a63e7;
    }
    .el-button.templet.el-button--default{
        width: 120px;
        height: 38px;
        padding: 0;
        color: #8a63e7;
        border-color: #8a63e7;
    }
    .el-button.templet.el-button--default:hover{
        color: #8a63e7;
        border-color: #8a63e7;
    }
    .upload{
        font-size: 0;
    }
    .upload div{
        width: 250px;
    }
    .el-select{
        margin-right: 10px;
    }
</style>
