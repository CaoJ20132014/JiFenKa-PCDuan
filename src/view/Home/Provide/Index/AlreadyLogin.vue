<template>
	<div class="provide-box">
		<div class="isLogin">
			<div class="top border">
				<div class="Already" v-show="idLogin">
					<p class="p1">
						<img src="../../../../assets/image/Provide/ren_grey.png" alt="" />
						<span>系统账号：<span>{{account}}</span></span>
					</p>
					<p class="p2">
						<img src="../../../../assets/image/Provide/card1.png" alt="" />
						<span>供卡余额：<span>{{money}}</span></span>
						<span class="pur_font" @click="tixian()">我要提现</span>
						<span class="pur_font">提现记录</span>
					</p>
				</div>
				<div class="no" v-show="!idLogin">
					<p class="p1">
						<img src="../../../../assets/image/Provide/ren_grey.png" alt="" />
						<span>系统账号：<span>{{account}}</span></span>
					</p>
					<p class="p2">
						<img src="../../../../assets/image/Provide/card1.png" alt="" />
						<span>供卡余额：<span>{{money}}</span></span>
						<span class="pur_font" @click="tixian()">我要提现</span>
						<span class="pur_font">提现记录</span>
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
	import a from "../../../../assets/image/Provide/1.jpg";
	import b from "../../../../assets/image/Provide/2.jpg";
	import c from "../../../../assets/image/Provide/3.jpg";
	import d from "../../../../assets/image/Provide/4.jpg";
	import e from "../../../../assets/image/Provide/5.jpg";
	import Scroll from '../components/scroll.vue';
	export default {
		components:{
			Scroll
		},
		data() {
			return {
				idLogin: true,
				money: "请登录",
				account: "请登录",
				activeIndex: 0,				// 滚动的位置
				tableData: [{
          			time: '2016-05-02',		// 时间 
          			data1: '100',			// 供货数量
          			data2: '200',			// 供货金额
          			data3: '300',			// 结算数量
          			data4: '400',			// 结算金额
          			data5: '500',			// 处理中数量
          			data6: '600',			// 处理中金额
          			data7: '700',			// 停售数量
          			data8: '800'			// 停售金额
        		}, {
          			time: '2016-05-02',
          			data1: '100',
          			data2: '200',
          			data3: '300',
          			data4: '400',
          			data5: '500',
          			data6: '600',
          			data7: '700',
          			data8: '800'
        		}, {
          			time: '2016-05-02',
          			data1: '100',
          			data2: '200',
          			data3: '300',
          			data4: '400',
          			data5: '500',
          			data6: '600',
          			data7: '700',
          			data8: '800'
        		}, {
          			time: '2016-05-02',
          			data1: '100',
          			data2: '200',
          			data3: '300',
          			data4: '400',
          			data5: '500',
          			data6: '600',
          			data7: '700',
          			data8: '800'
        		}, {
          			time: '2016-05-02',
          			data1: '100',
          			data2: '200',
          			data3: '300',
          			data4: '400',
          			data5: '500',
          			data6: '600',
          			data7: '700',
          			data8: '800'
				}],
				bannerList:[{
					id:1,
					imgsrc: a
				},{
					id:2,
					imgsrc: b
				},{
					id:3,
					imgsrc: c
				},{
					id:4,
					imgsrc: d
				},{
					id:5,
					imgsrc: e
				}]
			}
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
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../../assets/less/Provide/home/isLogin.less";
</style>
