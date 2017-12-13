import Vue from 'vue';
import Router from 'vue-router';
import HomeIndex from '@/view/Home/Index/index.vue';											// home页面
import recharge from '@/view/Home/Recharge/Index/index.vue';									// 充值页面>只有导航
import defaultindex from '@/view/Home/Recharge/default/index.vue';								// 首页默认页面

// 手机充值
import Precharge from '@/view/Home/Recharge/Phonerecharge/Index/index.vue';						// 手机充值
import fastRecharge from '@/view/Home/Recharge/Phonerecharge/FastRecharge/index.vue';			// 手机充值->话费快充
import confirm from '@/view/Home/Recharge/Phonerecharge/FastRecharge/confirm.vue';				// 手机充值->话费快充->确认订单
import mRecharge from '@/view/Home/Recharge/Phonerecharge/manyRecharge/mRecharge.vue';			// 手机充值->多人充值
import mConfirm from '@/view/Home/Recharge/Phonerecharge/manyRecharge/mConfirm.vue';			// 手机充值->多人充值->确认订单

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [{
		path: '/Home',
		component: HomeIndex,
		children:[{
			path: "",								// 手机充值页面首页
			component: recharge,
			children:[{
				path: "",							// 默认的表格首页
				name: "defaultindex",
				component: defaultindex,
			}, {
				path: "Precharge",					// 充值页面，只有左侧导航
				component: Precharge,
				children:[{
					path: "",						// 手机充值->话费快充
					name: "fastRecharge",
					component: fastRecharge
				}, {
					path: "Phconfirm",				// 手机充值->话费快充确认订单
					name: "confirm",
					component: confirm
				}, {
					path: "mRecharge",				// 手机充值->多人充值
					name: "mRecharge",
					component: mRecharge
				}, {
					path: "mConfirm",				// 手机充值->多人充值确认订单
					name: "mConfirm",
					component: mConfirm
				}]
			}]
		}]
	}, {
		path: '*',
		redirect: '/Home'
	}]
});
