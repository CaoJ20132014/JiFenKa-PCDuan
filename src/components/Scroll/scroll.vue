<template>
    <div class="scroll-wrap">
        <ul class="scroll-content" :style="{ top }" ref="ul1">
            <li v-for="item in newsList" :key="item.id" @click="checkDetail(item)">
                <div>{{item.title}}</div>
                <div>{{item.release_time}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
	import { Notice } from '../../until/getData';
    export default {
        data () {
            return {
                newsList: [],
                activeIndex: 0,				// 滚动的位置
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
			}, 3000);
			Notice('1').then(res => {
				if (res.code == '1') {
					this.newsList = res.list;
				}
			}).catch(err => {
				// console.log(err);
			});
		},
		methods: {
			checkDetail(item){
				this.$router.push({
					name: 'notice_detail',
					params:{
						id: item.id
					}
				});
			}
		}
    }
</script>
<style lang="less" scoped>
	.scroll-wrap {
		width: 648px;
		height: 120px;
		overflow: hidden;
		.scroll-content {
			position: relative;
			padding-left: 32px;
			padding-right: 17px;
			transition: top 0.5s;
			li {
				list-style: square;
				line-height: 40px;
				color: #898989;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				&:hover {
					cursor: pointer;
				}
			}
		}
	}
</style>