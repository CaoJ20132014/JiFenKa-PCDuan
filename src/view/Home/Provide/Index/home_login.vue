<template>
	<div>
		<div class="top border">
			<p class="p1">
				<img src="../../../assets/ren_grey.png" alt="" />
				<span>系统账号：<span>{{account}}</span></span>
			</p>
			<p class="p2">
				<img src="../../../assets/card1.png" alt="" />
				<span>供卡余额：<span>{{money}}</span></span>
				<span class="pur_font" @click="tixian()">我要提现</span>
				<span class="pur_font">提现记录</span>
			</p>
		</div>
		<div class="content">
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
		<div class="bot">
			<div class="bot_left border">
				<div class="scroll-wrap">
					<ul class="scroll-content" :style="{ top }" ref="ul1">
						<li v-for="item in newsList">
							<div>{{item.title}}</div>
							<div>{{item.time}}</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="bot_right border">
				<p class="p1">
					<img src="../../../assets/qq.png" alt="" />
					<span class="pur_font">售卡顾问</span></span>
				</p>
				<p class="p1 p2">
					<img src="../../../assets/qq.png" alt="" />
					<span class="pur_font">商务合作</span></span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				money: "请登录",
				account: "请登录",
				newsList: [{
						title: "全国中石化100-1000元面值回收折扣调整通知！",
						time:"2017-11-08"
					}, {
						title: "温馨提示：浙江移动10-500元面值卡密兑换折扣调整！",
						time:"2017-11-02"
					}, {
						title: "温馨提示：浙江移动10-50元面值卡密兑换折扣调整！",
						time:"2017-11-03"
					}, {
						title: "温馨提示：浙江移动10-1000元面值卡密兑换折扣调整！",
						time:"2017-11-05"
					}, {
						title: "温馨提示：浙江移动500元面值卡密兑换折扣调整！",
						time:"2017-11-07"
					}
				],
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
        		}]
			}
		},
		computed: {
			top() {
				return -this.activeIndex * 40 + 'px';
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
			}, 2000);
		},
		methods: {
			tixian:function(){
				this.$router.push({
					path: '/cash'
				});
			},
			RowClassName({row, rowIndex}){
				if(rowIndex === 3){
					console.log(rowIndex)
					return 'success-row';
				}
			}
		}
	}
</script>

<style scoped>
	.top{
		width: 988px;
		height: 94px;
	}
	.top .p1{
		height: 20px;
		line-height: 20px;
		padding-left: 34px;
		padding-top: 21px;
	}
	.top .p1 img{
		width: 18px;
		height: 19px;
		vertical-align: top;
	}
	.top .p1 span{
		vertical-align: top;
		font-size: 14px;
	}
	.top .p2{
		height: 16px;
		line-height: 16px;
		padding-left: 34px;
		padding-top: 15px;
	}
	.top .p2 img{
		width: 20px;
		height: 16px;
		vertical-align: top;
	}
	.top .p2 span{
		vertical-align: top;
		font-size: 14px;
	}
	.top .p1>span,.top .p2>span{
		padding-left: 10px;
	}
	.pur_font{
		margin-left: 10px;
	}
	.pur_font:hover{
		cursor: pointer;
	}
	.content{
		width: 990px;
		height: 300px;
		margin-top: 10px;
	}
	.bot{
		width: 990px;
		height: 124px;
		margin-top: 10px;
		display: flex;
	}
	.bot .bot_left{
		width: 648px;
		height: 120px;
		padding: 1px 0;
		margin-right: 10px;
	}
	.bot .bot_right{
		width: 327px;
		height: 122px;
		text-align: center;
	}
	.bot_right .p1{
		height: 20px;
		line-height: 20px;
		padding-top: 35px;
	}
	.bot_right .p2{
		padding-top: 10px;
	}
	.bot_right .p1 img{
		width: 18px;
		height: 19px;
		vertical-align: top;
	}
	.bot_right .p1 span{
		vertical-align: top;
		font-size: 14px;
	}
	.scroll-wrap {
		width: 648px;
		height: 120px;
		overflow: hidden;
	}
	.scroll-content {
		position: relative;
		padding-left: 32px;
		padding-right: 17px;
		transition: top 0.5s;
	}
	.scroll-content li {
		list-style: square;
		line-height: 40px;
		color: #898989;
		font-size: 14px;
		display: flex;
		justify-content: space-between;
	}
	.scroll-content li:hover {
		cursor: pointer;
	}
	/*表格*/
	.table{
		width: 988px;
		height: 46px;
		padding-top: 16px;
		border-bottom: 0;
	}
	.table .table_title{
		width: 94px;
		height: 25px;
		border-left: 3px solid #7b5bc7;
		text-align: center;
		line-height: 25px;
		font-size: 16px;
		margin-left: 20px;
	}
	.el-table .success-row {
    	background: #f0f9eb;
  	}
</style>