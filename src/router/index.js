import Vue from 'vue';
import Router from 'vue-router';
import HomeIndex from '@/view/Home/Index/index.vue';					// home页面
import recharge from '@/view/Home/Recharge/Index/index.vue';			// 充值页面>只有导航
import defaultindex from '@/view/Home/Recharge/default/index.vue';		// 首页默认页面

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [{
		path: '/',
		component: HomeIndex,
		children:[{
			path: "",
			component: recharge,
			children:[{
				path: "",
				name: "defaultindex",
				component: defaultindex,
			}]
		}]
	}]
});
