<template>
	<div>
		<div class="top border">
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
		<div class="content border">
			<el-carousel :interval="3000" trigger="click">
      			<el-carousel-item v-for="item in bannerList" :key="item.id">
        			<img :src="item.imgsrc"/>
      			</el-carousel-item>
    		</el-carousel>
		</div>
		<div class="bot">
			<div class="bot_left border">
				<div class="scroll-wrap">
					<ul class="scroll-content" :style="{ top }" ref="ul1">
						<li v-for="item in newsList" :key="item.id">
							<div>{{item.title}}</div>
							<div>{{item.time}}</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="bot_right border">
				<p class="p1">
					<img src="../../../../assets/image/Provide/qq.png" alt="" />
					<span class="pur_font" @click="addfriends">售卡顾问</span></span>
				</p>
				<p class="p1 p2">
					<img src="../../../../assets/image/Provide/qq.png" alt="" />
					<span class="pur_font" @click="addfriends">商务合作</span></span>
				</p>
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
	export default {
		data() {
			return {
				money: "请登录",
				account: "请登录",
				newsList: [{
					id: "1",
					title: "全国中石化100-1000元面值回收折扣调整通知！",
					time:"2017-11-08"
				}, {
					id: "2",
					title: "温馨提示：浙江移动10-500元面值卡密兑换折扣调整！",
					time:"2017-11-02"
				}, {
					id: "3",
					title: "温馨提示：浙江移动10-50元面值卡密兑换折扣调整！",
					time:"2017-11-03"
				}, {
					id: "4",
					title: "温馨提示：浙江移动10-1000元面值卡密兑换折扣调整！",
					time:"2017-11-05"
				}, {
					id: "5",
					title: "温馨提示：浙江移动500元面值卡密兑换折扣调整！",
					time:"2017-11-07"
				}],
				activeIndex: 0,				// 滚动的位置
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
					name: 'cash'
				});
			},
			addfriends:function(){
				window.open("http://wpa.qq.com/msgrd?v=3&uin=571996401&site=qq&menu=yes");
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
		width: 988px;
		height: 298px;
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
	/*轮播*/
	.el-carousel__container{
		height: 298px;
	}
	.el-carousel__item img{
		width: 988px;
		height: 298px;
	}
</style>