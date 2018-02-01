<template>
	<div class="provide-box">
		<div class="isLogin">
			<div class="top border">
				<div class="Already" v-show="idLogin">
					<p class="p1">
						<img src="../../../../assets/image/Provide/ren_grey.png" alt="" />
						<span>系统账号：<span @click="needLogin">{{account}}</span></span>
					</p>
					<p class="p2">
						<img src="../../../../assets/image/Provide/card1.png" alt="" />
						<span>供卡余额：<span @click="needLogin">{{money}}</span></span>
						<span class="pur_font" @click="tixian">我要提现</span>
						<span class="pur_font" @click="toRecord">提现记录</span>
					</p>
				</div>
				<div class="no" v-show="!idLogin">
					<p class="p1">
						<img src="../../../../assets/image/Provide/ren_grey.png" alt="" />
						<span>系统账号：<span @click="needLogin">{{account}}</span></span>
					</p>
					<p class="p2">
						<img src="../../../../assets/image/Provide/card1.png" alt="" />
						<span>供卡余额：<span @click="needLogin">{{money}}</span></span>
						<span class="pur_font" @click="tixian">我要提现</span>
						<span class="pur_font" @click="toRecord">提现记录</span>
					</p>
				</div>
			</div>
			<div class="content">
				<div class="Already" v-show="idLogin">
					<div class="table border">
						<div class="table_title">经营状况</div>
					</div>
					<el-table :data="tableData" stripe border style="width: 100%;height: 242px;" :row-class-name="RowClassName">
						<el-table-column prop="time" label="时间"></el-table-column>
						<el-table-column prop="data1" label="供货数量"></el-table-column>
						<el-table-column prop="data2" label="供货金额"></el-table-column>
						<el-table-column prop="data3" label="结算数量"></el-table-column>
						<el-table-column prop="data4" label="结算金额"></el-table-column>
						<el-table-column prop="data5" label="处理中数量"></el-table-column>
						<el-table-column prop="data6" label="处理中金额"></el-table-column>
						<el-table-column prop="data7" label="停售数量"></el-table-column>
						<el-table-column prop="data8" label="停售金额"></el-table-column>
					</el-table>
				</div>
				<div class="noLunbo" v-show="!idLogin">
					<el-carousel :interval="3000" trigger="click">
						<el-carousel-item v-for="item in bannerList" :key="item.id">
							<img :src="item.imgsrc"/>
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<div class="bot">
				<div class="bot_left border">
					<Scroll></Scroll>
				</div>
				<div class="bot_right border">
					<p class="p1">
						<img src="../../../../assets/image/Provide/qq.png" alt="" />
						<span class="pur_font">售卡顾问</span>
					</p>
					<p class="p1 p2">
						<img src="../../../../assets/image/Provide/qq.png" alt="" />
						<span class="pur_font">商务合作</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Scroll from '@/components/Scroll/scroll.vue';
	import Public from '@/until/until';
	import { Banner, Notice, CardList } from '@/until/getData';
	let moment = require('moment');
	export default {
		components:{
			Scroll
		},
		data() {
			return {
				idLogin: false,
				money: "请登录",
				account: "请登录",
				activeIndex: 0,				// 滚动的位置
				tableData: [],
				bannerList:[]
			}
		},
		mounted() {
			let t = setInterval(_ => {
				if(this.newsList.length > 3) {
					if(this.activeIndex < this.newsList.length - 3) {
						this.activeIndex += 1;
					} else {
						this.activeIndex = 0;
					}
				} else {
					clearInterval(t)
				}
			}, 3000);
			if (typeof(Public.JS_Cookie('get', 'userInfo'))!='undefined'||typeof(this.$store.getters.UserInfo)!='undefined') {
				this.isShow = true;
				let account = Public.JS_Cookie('get', 'userInfo');
				this.account = account.tel;
				CardList().then(res => {
					if (res.code == '1') {
						this.money = eval(res.user.balance);
					}
				}).catch(err => {
					// console.log(err);
				});
				Banner({state: '10'}).then((res) => {
					if (res.code == '1') {
						// res.msg.reverse();
						res.msg.forEach((item,index) => {
							let Dday = 'D' + (index);
							let obj = {
								time: moment(Public.setTimes(Dday)).format('YYYY-MM-DD'),
								data1: item.total.num,
								data2: item.total.worth,
								data3: item.ok.num,
								data4: item.ok.worth,
								data5: item.ing.num,
								data6: item.ing.worth,
								data7: item.no.num,
								data8: item.no.worth
							}
							this.tableData.push(obj);
						});
					}
				}).catch((err) => {
					// console.log(err);
				});
			} else {
				this.isShow = false;
				this.money = '请登录';
				this.account = '请登录';
				Banner({state: '10'}).then((res) => {
					if (res.code == '1') {
						res.msg.forEach(item => {
							let obj = {};
							obj.id = item.id;
							if (process.env.NODE_ENV == 'development') {
								obj.imgsrc = '/api' + item.pic;
							} else {
								obj.imgsrc = item.pic;
							}
							this.bannerList.push(obj);
						});
					}
				}).catch((err) => {
					// console.log(err);
				});
			};
			Notice('1').then(res => {
				if (res.code == '1') {
					this.newsList = res.list;
				}
			}).catch(err => {
				// console.log(err);
			})
		},
		methods: {
			tixian:function(){
				this.$router.push({
					name: 'cash'
				});
			},
			RowClassName({row, rowIndex}){
				if(rowIndex === 3){
					return 'success-row';
				}
			},
			needLogin(){
				if (this.account === '请登录' && this.money === '请登录') {
					this.$router.push({
						name: 'accountLogin'
					});
				}
			},
			toRecord(){
				this.$router.push({
					name: 'capital'
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../../style/less/Provide/home/isLogin.less";
</style>
