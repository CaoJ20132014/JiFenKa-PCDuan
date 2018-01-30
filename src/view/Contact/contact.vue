<template>
	<div id="contact">
		<el-container>
			<el-header>
				<div class="heard_top">
					<div class="top">
						<div class="top_left">杭州天缘网络欢迎您！</div>
						<div class="top_right">
							<img src="../../assets/image/login/wenhao.png" alt="" />
							<span @click="gohelp()">帮助中心</span>
						</div>
					</div>
				</div>
				<div class="heard_bot">
					<div class="bot">
						<div class="top_left" @click="gohome()">
							<img src="../../assets/image/login/ka_pur.png" class="img1" />
							<img src="../../assets/image/login/jifenka.png" class="img2" />
						</div>
						<div class="top_right">
							<img src="../../assets/image/login/tel.png" alt="" class="img3" />
							<span><b>0571-86538181</b></span>
						</div>
					</div>
				</div>
			</el-header>
			<el-main>
				<div class="content">
                    <div class="con_heard">
                        <div>联系我们</div>
                    </div>
                    <div class="common">
                        <p class="p_top">
                            <img class="adress" src="../../assets/image/contact/address.png" alt="">
                            <span>地址</span>
                        </p>
                        <p class="p_bot">{{adress}}</p> 
                    </div>
                    <div class="common">
                        <p class="p_top">
                            <img class="telphone" src="../../assets/image/contact/telphone.png" alt="">
                            <span>电话</span>
                        </p>
                        <p class="p_bot">{{telphone}}</p> 
                    </div>
                    <div class="common">
                        <p class="p_top">
                            <img class="emill" src="../../assets/image/contact/emill.png" alt="">
                            <span>邮箱</span>
                        </p>
                        <p class="p_bot">{{emill}}</p> 
                    </div>
                    <div class="common koukous">
                        <p class="p_top">
                            <img class="kefu" src="../../assets/image/contact/kefu11.png" alt="">
                            <span>客服</span>
                        </p>
                        <div class="list" v-for="item in koukous" :key="item.koukou">
                            <span>{{item.type}}</span>：
                            <span>{{item.koukou}}</span>
                            <span>电话：</span>
                            <span>{{item.tel}}</span>
                        </div>
                    </div>
                    <div class="common textarea">
                        <p class="p_top">
                            <img class="fankui" src="../../assets/image/contact/fankui.png" alt="">
                            <span>反馈</span>
                        </p>
                        <div style="padding-left:30px;">
                            <el-input type="textarea" placeholder="反馈内容（这里最多可输入500个字，超过请发送至我们的邮箱）" v-model="textarea"></el-input>
                            <el-input v-model="input" placeholder="请输入联系电话"></el-input>
                            <el-button @click="commit">提交反馈</el-button>
                        </div>
                    </div>
                    <div class="map border"></div>
                </div>
			</el-main>
			<el-footer>
				<div class="foot_top">
					<span>关于我们</span>
					<span>|</span>
					<span>公司荣誉</span>
					<span>|</span>
					<span>联系我们</span>
				</div>
				<div class="foot_bot">Copyright © 2015.版权所有</div>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
                adress:"浙江省杭州市滨江区聚业路26号金绣国际科技中心9层",
                telphone:"0571-86538181",
                emill:"CaoJian20132014@163.com",
                textarea:"",
                input:"",
                koukous:[{
                    type:"订单客服QQ",
                    koukou:"1234567891",
                    tel:"0571-86538181"
                },{
                    type:"问题处理QQ",
                    koukou:"1234567892",
                    tel:"0571-86538181"
                },{
                    type:"话费合作QQ",
                    koukou:"1234567893",
                    tel:"0571-86538181"
                },{
                    type:"流量合作QQ",
                    koukou:"1234567894",
                    tel:"0571-86538181"
                },{
                    type:"缴费合作QQ",
                    koukou:"1234567895",
                    tel:"0571-86538181"
                },{
                    type:"充卡合作QQ",
                    koukou:"1234567896",
                    tel:"0571-86538181"
                }]
			}
		},
		methods: {
			gohome(){
                this.$router.push({
					name: 'defaultindex'
				});
            },
            gohelp(){
                this.$router.push({
					name: 'help'
				});
            },
            commit(){
                console.log("提交")
            }
        }
	}
</script>
<style lang="less" scoped>
    @import '../../style/less/contact/contact.less';
</style>
