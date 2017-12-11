import Vue from 'vue';
import Router from 'vue-router';
import HomeIndex from '@/view/Home/Index/index.vue';							// home页面
import recharge from '@/view/Home/Recharge/Index/index.vue';					// 充值页面>只有导航
import defaultindex from '@/view/Home/Recharge/default/index.vue';				// 首页默认页面

// 手机充值
import Precharge from '@/view/Home/Recharge/Phonerecharge/Index/index.vue';		// 手机充值

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [{
		path: '/Home',
		component: HomeIndex,
		children:[{
			path: "",
			component: recharge,
			children:[{
				path: "",
				name: "defaultindex",
				component: defaultindex,
			}, {
				path: "Precharge",
				name: "Precharge",
				component: Precharge
			}]
		}]
	}, {
		path: '*',
		redirect: '/Home'
	}]
});
