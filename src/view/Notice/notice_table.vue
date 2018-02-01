<template>
	<div class="list_box" id="notice">
		<div class="list_top">
			搜索关键字：<el-input placeholder="地区/运营商/时间/类型等" v-model="input1" :class="{'grey':input1 == ''}"></el-input>
			&nbsp;时间：<el-date-picker v-model="time1" :class="{'grey':time1 == ''}" type="datetime" placeholder="选择起始时间"></el-date-picker>
			- <el-date-picker v-model="time2" :class="{'grey':time2 == ''}" type="datetime" placeholder="选择结束时间"></el-date-picker>
			<el-button icon="el-icon-search" @click="StartQuery">查询</el-button>
		</div>
		<el-table :data="tableData" stripe border style="width: 100%;height: 240px;" @row-click="todetail">
			<el-table-column prop="title" label="标题"></el-table-column>
			<el-table-column prop="release_time" label="日期"></el-table-column>
		</el-table>
		<div v-show="show" class="pagination" id="pagination">
            <Pagination @pageChange="pageNum" :paginationData='paginationData'></Pagination>
        </div>
	</div>
</template>

<script>
	import Pagination from '@/components/Pagination/Pagination';
	import Public from '@/until/until';
	import { Notice } from '@/until/getData';
	let moment = require('moment');
	export default {
		components:{
            Pagination
        },
		data() {
			return {
				paginationData: {
                    pageSize: 5,
                    totalNum: 0,
                    activePage: 1
				},
				nowPage: 0,
				show: true,
				input1:"",			// 关键字
				time1:"",			// 起始时间
				time2:"",			// 终止时间
				tableData: []
			}
		},
		mounted () {
			let page = this.paginationData.activePage;
			this.getList(page);
		},
        watch: {
            nowPage(){            // 监听当前页的变化，如果有变化开始请求当前页的数据
				let page = this.paginationData.activePage;
				this.getList(page);
			},
			tableData(){
				if (this.tableData.length == 0) {
					this.show = false;
				} else {
					this.show = true;
				}
			}
        },
		methods:{
			StartQuery(){
				let page = this.paginationData.activePage;
				this.getList(page);
			},
			pageNum(val){
				this.nowPage = val;
				this.paginationData.activePage = val;
				let page = this.paginationData.activePage;
				this.getList(page);
			},
			todetail(row){
				this.$router.push({
					name: 'notice_detail',
					params:{
						id: row.id
					}
				});
			},
			getList(page){
				let data = {};
				if (this.input1 != '') {
					data['keyword'] = this.input1;
				} 
				if (this.time1 != '') {
					data['starttime'] = moment(this.time1).format('YYYY-MM-DD HH:MM:SS');
				}
				if (this.time2 != '') {
					data['overtime'] = moment(this.time2).format('YYYY-MM-DD HH:MM:SS');
				}
				Notice(page, data).then(res => {
					// console.log(res);
					if (res.code == '1') {
						this.tableData = res.list;
						this.paginationData.totalNum = eval(res.total);
					} else {
						Public.topAlert('error', res.msg);
					}
				}).catch(err => {
					// console.log(err);
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.list_box{
		.list_top{
			padding-top: 40px;
			padding-bottom: 27px;
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
		}
		.pagination{
			padding-top: 20px;
		}
	}
</style>