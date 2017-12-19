<template>
    <div class="scroll-wrap">
        <ul class="scroll-content" :style="{ top }" ref="ul1">
            <li v-for="item in newsList" :key="item.id">
                <div>{{item.title}}</div>
                <div>{{item.time}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
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
            }
        }
    }
</script>
<style lang="less" scoped>

</style>