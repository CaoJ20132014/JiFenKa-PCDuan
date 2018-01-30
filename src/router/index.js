import Vue from 'vue';
import Router from 'vue-router';
// 登录
const login = resolve => require.ensure([], () => resolve(require('@/view/Login/login_index.vue')), 'login');
const accountLogin = resolve => require.ensure([], () => resolve(require('@/view/Login/accountlogin.vue')), 'login');
const telLogin = resolve => require.ensure([], () => resolve(require('@/view/Login/telphonelogin')), 'login');		
// 注册
const registerIndex = resolve => require.ensure([], () => resolve(require('@/view/Register/register_index.vue')), 'register');
const register = resolve => require.ensure([], () => resolve(require('@/view/Register/register.vue')), 'register');
const registerSuccess = resolve => require.ensure([], () => resolve(require('@/view/Register/registersuccess.vue')), 'register');
// 忘记密码
const forget = resolve => require.ensure([], () => resolve(require('@/view/Forget/forget_index.vue')), 'forget');
const next = resolve => require.ensure([], () => resolve(require('@/view/Forget/next.vue')), 'forget');
const forgetConfirm = resolve => require.ensure([], () => resolve(require('@/view/Forget/confirm.vue')), 'forget');
// 联系我们
const contact = resolve => require.ensure([], () => resolve(require('@/view/contact/contact.vue')), 'contact');
// 帮助中心
const help = resolve => require.ensure([], () => resolve(require('@/view/help/help.vue')), 'help');
// 系统公告
const notice = resolve => require.ensure([], () => resolve(require('@/view/Notice/notice.vue')), 'notice');// 网站首页=>系统公告
const notice_list = resolve => require.ensure([], () => resolve(require('@/view/Notice/notice_table.vue')), 'notice');// 网站首页=>系统公告=>公告列表
const notice_detail = resolve => require.ensure([], () => resolve(require('@/view/Notice/notice_detail.vue')), 'notice');// 网站首页=>系统公告=>公告详情		
// 卡密兑换
const CardProvide = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Index/home.vue')), 'Providehome');// 卡密兑换
const Already = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Index/AlreadyLogin.vue')), 'Providehome');// 卡密兑换->首页，有登陆和未登录状态	
// 卡密兑换->我要供货
const Provide = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Provide/index/provide.vue')), 'Provide');// 卡密兑换->我要供货
const choose = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Provide/choose/choose.vue')), 'Provide');// 卡密兑换->我要供货->选择供卡类型		
// 我要供货=>运营商供卡
const card = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Provide/card_public/card.vue')), 'card');// 网站首页=>我要供货=>运营商供卡
const onecard = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Provide/card/onecard.vue')), 'card');// 网站首页=>我要供货=>运营商供卡=>单张供卡
const manycard = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Provide/card/manycard.vue')), 'card');// 网站首页=>我要供货=>运营商供卡=>多张供卡		
// 我要供货=>加油卡供卡
const fulecard = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Provide/card_public/fulecard.vue')), 'fulecard');// 网站首页=>我要供货=>加油卡供卡
const onefuel = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Provide/fulecard/onefuel.vue')), 'fulecard');// 网站首页=>我要供货=>加油卡供卡=>单张供货
const manyfuel = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Provide/fulecard/manyfuel.vue')), 'fulecard');// 网站首页=>我要供货=>加油卡供卡=>多张供货		
// 供货详情
const details = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Details/Index/details.vue')), 'details');// 网站首页=>供货详情
const reachge = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Details/Reachge/reachge.vue')), 'details');// 网站首页=>供货详情
const othercard = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Details/Othercard/othercard.vue')), 'details');// 网站首页=>供货详情		
// 统计报表
const ProvideCensus = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/ProvideCensus/Index/census.vue')), 'Census');// 网站首页=>统计报表
const table = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/ProvideCensus/table/table.vue')), 'Census');// 网站首页=>统计报表
const capital = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/ProvideCensus/capital/capital.vue')), 'Census');// 网站首页=>统计报表	
// 我要提现
const cash = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Cash/cash.vue')), 'cash');// 网站首页=>我要提现
const AddCard = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Cash/bankcard.vue')), 'cash');// 网站首页=>我要提现
// 安全中心
const safe = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Safe/safe.vue')), 'safe');// 网站首页=>安全中心
const loginpsd = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Safe/login_password.vue')), 'safe');// 网站首页=>安全中心/登录密码
const paypsd = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Safe/pay_password.vue')), 'safe');// 网站首页=>安全中心/登录密码
const realname = resolve => require.ensure([], () => resolve(require('@/view/Home/Provide/Safe/real_name.vue')), 'safe');// 网站首页=>安全中心/登录密码
// 首页
const HomeIndex = resolve => require.ensure([], () => resolve(require('@/view/Home/Index/index.vue')), 'HomeIndex');// home页面
const recharge = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Index/index.vue')), 'HomeIndex');// 充值页面>只有导航
const defaultindex = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/default/index.vue')), 'HomeIndex');// 首页默认页面
// 手机充值
const Precharge = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Phonerecharge/Index/index.vue')), 'Precharge');// 手机充值
const fastRecharge = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Phonerecharge/FastRecharge/index.vue')), 'Precharge');// 手机充值->话费快充
const confirm = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Phonerecharge/FastRecharge/confirm.vue')), 'Precharge');// 手机充值->话费快充->确认订单
const mRecharge = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Phonerecharge/manyRecharge/mRecharge.vue')), 'Precharge');// 手机充值->多人充值
const mConfirm = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Phonerecharge/manyRecharge/mConfirm.vue')), 'Precharge');// 手机充值->多人充值->确认订单
const mProgress = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Phonerecharge/manyRecharge/mRechargeProgress.vue')), 'Precharge');// 手机充值->多人充值->充值进度
const bRecharge = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Phonerecharge/batchWrite/index.vue')), 'Precharge');// 手机充值->批量写入
const bConfirm = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Phonerecharge/batchWrite/bConfirm.vue')), 'Precharge');// 手机充值->批量写入->确认订单
const batchImport = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/Phonerecharge/batchImport/index.vue')), 'Precharge');// 手机充值->批量导入
// 加油卡充值
const fuelIndex = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/fuelRecharge/Index/index.vue')), 'fuelIndex');// 加油卡充值
const singlefuel = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/fuelRecharge/SingleRecharge/singleRecharge.vue')), 'fuelIndex');// 加油卡充值->单张充值
const singleConfirm = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/fuelRecharge/SingleRecharge/singleConfirm.vue')), 'fuelIndex');// 加油卡充值->单张充值->确认订单
const bFuelRecharge = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/fuelRecharge/BatchRecharge/index.vue')), 'fuelIndex');// 加油卡批量充值
const bFuelConfirm = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/fuelRecharge/BatchRecharge/bfConfirm.vue')), 'fuelIndex');// 加油卡批量充值->确认订单
const bfProgress = resolve => require.ensure([], () => resolve(require('@/view/Home/Recharge/fuelRecharge/BatchRecharge/bfProgress.vue')), 'fuelIndex');// 加油卡批量充值->等待充值结果
// 订单查询
const orderquery = resolve => require.ensure([], () => resolve(require('@/view/Home/OrderQuery/Index/index.vue')), 'orderquery');// 订单查询
const orderDetail = resolve => require.ensure([], () => resolve(require('@/view/Home/OrderQuery/OrderDetail/index.vue')), 'orderquery');// 订单查询->订单明细
const census = resolve => require.ensure([], () => resolve(require('@/view/Home/OrderQuery/Census/index.vue')), 'orderquery');// 订单查询->订单统计
const capitalDetail = resolve => require.ensure([], () => resolve(require('@/view/Home/OrderQuery/Detail/index.vue')), 'orderquery');// 订单查询->资金明细
// 产品中心
const productCenter = resolve => require.ensure([], () => resolve(require('@/view/Home/ProductCenter/Index/index.vue')), 'productCenter');// 产品中心
// 错误页面
const error404 = resolve => require.ensure([], () => resolve(require('@/view/error/error404.vue')), 'error');// 404
const error500 = resolve => require.ensure([], () => resolve(require('@/view/error/error500.vue')), 'error');// 500
const errorBow = resolve => require.ensure([], () => resolve(require('@/view/error/errorBow.vue')), 'error');// bow
Vue.use(Router);

const routes = [{
	path: '/Home',
	component: HomeIndex,
	children:[{
		path: "",								// 充值页面首页，只有左侧的导航
		component: recharge,
		children:[{
			path: "",							// 默认的表格首页
			name: "defaultindex",
			component: defaultindex,
		}, {
			path: "Precharge",					// 手机充值
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
			}, {
				path: "mProgress",				// 手机充值->多人充值->充值进度
				name: "mProgress",
				component: mProgress
			}, {
				path: "bRecharge",				// 手机充值->批量写入
				name: "bRecharge",
				component: bRecharge
			}, {
				path: "bConfirm",				// 手机充值->批量写入->确认订单
				name: "bConfirm",
				component: bConfirm
			}, {
				path: "bImport",				// 手机充值->批量导入
				name: "batchImport",
				component: batchImport
			}]
		}, {
			path: 'fuelRecharge',				// 加油卡充值
			component: fuelIndex,
			children: [{
				path: 'sFuel',					// 加油卡充值->单张充值	
				name: 'singlefuel',
				component: singlefuel
			}, {
				path: 'fConfirm',				// 加油卡充值->单张充值->确认订单	
				name: 'singleConfirm',
				component: singleConfirm
			}, {
				path: 'bfRecharge',				// 加油卡充值->批量充值
				name: 'bFuelRecharge',
				component: bFuelRecharge
			}, {
				path: 'bfConfirm',				// 加油卡充值->批量充值->确认订单
				name: 'bFuelConfirm',
				component: bFuelConfirm
			}, {
				path: 'bfProgress',				// 加油卡充值->批量充值->充值进度
				name: 'bfProgress',
				component: bfProgress
			}]
		}]
	}, {
		path: 'Cardprovided',				// 卡密兑换
		component: CardProvide,
		children: [{
			path: '',
			name: 'Already',
			component: Already
		}, {
			path: "notice", 									// 首页=>系统公告
			component: notice,
			children: [{ 										// 网站首页=>系统公告子路由
				path: "", 										// 网站首页=>系统公告=>公告列表
				name: 'notice_list',
				component: notice_list
			}, { 												// 网站首页=>系统公告子路由
				path: "notice_detail/:id", 						// 网站首页=>系统公告=>公告详情
				name: "notice_detail",
				component: notice_detail
			}]
		}, {
			path: 'Provide',
			component: Provide,
			children: [{
				path: '',
				name: 'choose',
				component: choose
			}, {
				path: "card", 									// 我要供货=>运营商供卡
				component: card,
				children: [{ 									// 我要供货=>运营商供卡子路由
					path: "", 									// 我要供货=>运营商供卡子路由=>单张供卡
					name: 'onecard',
					component: onecard
				}, {
					path: "manycard", 							// 我要供货=>运营商供卡子路由=>多张供卡
					name: "manycard",
					component: manycard
				}]
			}, {
				path: "fulecard", 								// 我要供货=>加油卡供卡
				component: fulecard,
				children: [{ 									// 我要供货=>加油卡供卡子路由
					path: "", 									// 我要供货=>加油卡供卡子路由=>单张供卡
					name: 'onefuel',
					component: onefuel
				}, {
					path: "manyfuel", 							// 我要供货=>加油卡供卡子路由=>多张供卡
					name: "manyfuel",
					component: manyfuel
				}]
			}]
		}, {
			path: 'Details', 									// 供货明细
			component: details,
			children: [{
				path: '',
				name: "reachge",
				component: reachge
			}, {
				path: 'Othercard',
				name: "othercard",
				component: othercard
			}]
		}, {
			path: 'Census', 									// 统计报表
			component: ProvideCensus,
			children: [{ 										
				path: "", 										
				name: 'table',
				component: table
			}, {
				path: "Capital", 								
				name: "capital",
				component: capital
			}]
		}, {
			path: 'cash', 										// 我要提现
			name: "cash",
			component: cash
		}, {
			path: 'AddCard', 									// 添加银行卡
			name: 'AddCard',
			component: AddCard
		}, {
			path: 'safe', 										// 安全中心
			name: 'safe',
			component: safe
		}, {
			path: 'safe/loginpsd',
			name: 'loginpsd',
			component: loginpsd
		}, {
			path: 'safe/paypsd',
			name: 'paypsd',
			component: paypsd
		}, {
			path: 'safe/realname',
			name: 'realname',
			component: realname
		}]
	}, {
		path: 'orderquery',					// 订单查询
		component: orderquery,
		children: [{
			path: '',						// 订单查询->订单明细
			name: 'orderDetail',
			component: orderDetail
		}, {
			path: 'census',					// 订单查询->订单统计
			name: 'census',
			component: census
		}, {
			path: 'capitalDetail',			// 订单查询->资金明细
			name: 'capitalDetail',
			component: capitalDetail
		}]
	}, {
		path: 'ProductCenter',				// 产品中心
		name: 'productCenter',
		component: productCenter
	}]
}, {
	path: '/login',							// 登录->首页
	component: login,
	children:[{
		path: '',							// 登录->账号登录
		name: "accountLogin",
		component: accountLogin
	}, {
		path: 'telLogin',					// 登录->手机号登录
		name: "telLogin",
		component: telLogin
	}]
}, {
		path: '/registerIndex',				// 注册
		component: registerIndex,
		children: [{
			path: '',						// 注册->下一步
			name: 'register',
			component: register
		}, {
			path: 'success',				// 注册->注册成功
			name: 'registerSuccess',
			component: registerSuccess
		}]
}, {
	path: '/forget',						// 忘记密码
	component: forget,
	children:[{
		path: '',							// 忘记密码->下一步
		name: 'next',
		component: next
	}, {
		path: "forgetConfirm",				// 忘记密码->确认密码
		name: 'forgetConfirm',
		component: forgetConfirm
	}]
}, {
	path: '/help',							// 帮助中心
	name: 'help',
	component: help
}, {
	path: '/contact',						// 联系我们
	name: 'contact',
	component: contact
}, {
	path: '/error404',								// 错误页面404
	name: 'error404',
	component: error404
}, {
	path: '/error500',								// 错误页面500 
	name: 'error500',
	component: error500
}, {
	path: '/errorBow',								// 错误页面500
	name: 'errorBow',
	component: errorBow
}, {
	path: '*',
	redirect: '/Home'
}];
const router = new Router({
	mode: "history",
	routes
});
router.beforeEach((to, from, next) => {
	next();
});
router.afterEach(transition => {
	
});
export default router;