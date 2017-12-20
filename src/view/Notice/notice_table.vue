<template>
	<div class="list_box" id="notice">
		<div class="list_top">
			搜索关键字：<el-input placeholder="地区/运营商/时间/类型等" v-model="input1" :class="{'grey':input1 == ''}"></el-input>
			&nbsp;时间：<el-date-picker v-model="time1" :class="{'grey':time1 == ''}" type="datetime" placeholder="选择起始时间"></el-date-picker>
			- <el-date-picker v-model="time2" :class="{'grey':time2 == ''}" type="datetime" placeholder="选择结束时间"></el-date-picker>
			<el-button>查询</el-button>
		</div>
		<el-table :data="tableData" stripe border style="width: 100%;height: 240px;" @row-click="todetail">
			<el-table-column prop="title" label="标题"></el-table-column>
			<el-table-column prop="time" label="日期"></el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input1:"",			// 关键字
				time1:"",			// 起始时间
				time2:"",			// 终止时间
				tableData: [{
					id:1,
          			title: '温馨提示：浙江移动10-50元面值卡密兑换折扣调整！',		// 标题
          			time: '2016-05-02'											 // 时间
        		},{
					id:2,
          			title: '温馨提示：浙江移动10-50元面值卡密兑换折扣调整！',		// 标题
          			time: '2016-05-02'											 // 时间
        		},{
					id:3,
          			title: '温馨提示：浙江移动10-50元面值卡密兑换折扣调整！',		// 标题
          			time: '2016-05-02'											 // 时间
        		},{
					id:4,
          			title: '温馨提示：浙江移动10-50元面值卡密兑换折扣调整！',		// 标题
          			time: '2016-05-02'											 // 时间
        		},{
					id:5,
          			title: '温馨提示：浙江移动10-50元面值卡密兑换折扣调整！',		// 标题
          			time: '2016-05-02'											 // 时间
        		}]
			}
		},
		methods:{
			todetail(row){
				console.log(row.id);
				this.$router.push({
					name: 'notice_detail',
					params:{
						id: row.id
					}
				});
			}
		}
	}
</script>

<style scoped>
	.list_top{
		padding-top: 40px;
		padding-bottom: 27px;
	}
	.el-input__inner,.el-input{
		width: 230px;
		height: 32px;
	}
	.el-button{
		width: 80px;
		height: 32px;
		text-align: center;
		line-height: 32px;
		padding: 0;
		background-color: #8a6ad4;
		color: white;
		vertical-align: bottom;
		margin-left: 10px;
	}
	.el-date-editor.el-input, .el-date-editor.el-input__inner{
		width: 190px;
		height: 32px;
	}
</style>