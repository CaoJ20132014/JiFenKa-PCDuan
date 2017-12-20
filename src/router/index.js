import Vue from 'vue';
import Router from 'vue-router';
// 登录
import login from '@/view/Login/login_index.vue';				// 登录
import accountLogin from '@/view/Login/accountlogin.vue';		// 账号登录
import telLogin from '@/view/Login/telphonelogin';				// 手机号登录
// 注册
import registerIndex from '@/view/Register/register_index.vue';		// 注册
import register from '@/view/Register/register.vue';				// 注册
import registerSuccess from '@/view/Register/registersuccess.vue';	// 注册成功
// 忘记密码
import forget from '@/view/Forget/forget_index.vue';			// 忘记密码
import next from '@/view/Forget/next.vue';						// 忘记密码->下一步
import forgetConfirm from '@/view/Forget/confirm.vue';			// 忘记密码->确认密码
// 联系我们
import contact from '@/view/contact/contact.vue';				// 联系我们
// 帮助中心
import help from '@/view/help/help.vue';						// 帮助中心
// 系统公告
import notice from '@/view/Notice/notice.vue'; 						// 网站首页=>系统公告
import notice_list from '@/view/Notice/notice_table.vue'; 			// 网站首页=>系统公告=>公告列表
import notice_detail from '@/view/Notice/notice_detail.vue'; 		// 网站首页=>系统公告=>公告详情
// 卡密兑换
import CardProvide from '@/view/Home/Provide/Index/home.vue';			// 卡密兑换
import Already from '@/view/Home/Provide/Index/AlreadyLogin.vue';		// 卡密兑换->首页，有登陆和未登录状态
// 卡密兑换->我要供货
import Provide from '@/view/Home/Provide/Provide/index/provide.vue';	// 卡密兑换->我要供货
import choose from '@/view/Home/Provide/Provide/choose/choose.vue';		// 卡密兑换->我要供货->选择供卡类型
// 我要供货=>运营商供卡
import card from '@/view/Home/Provide/Provide/card_public/card.vue'; 			// 网站首页=>我要供货=>运营商供卡
import onecard from '@/view/Home/Provide/Provide/card/onecard.vue'; 			// 网站首页=>我要供货=>运营商供卡=>单张供卡
import manycard from '@/view/Home/Provide/Provide/card/manycard.vue'; 			// 网站首页=>我要供货=>运营商供卡=>多张供卡
// 我要供货=>加油卡供卡
import fulecard from '@/view/Home/Provide/Provide/card_public/fulecard.vue'; 	// 网站首页=>我要供货=>加油卡供卡
import onefuel from '@/view/Home/Provide/Provide/fulecard/onefuel.vue'; 		// 网站首页=>我要供货=>加油卡供卡=>单张供货
import manyfuel from '@/view/Home/Provide/Provide/fulecard/manyfuel.vue'; 		// 网站首页=>我要供货=>加油卡供卡=>多张供货
import fuelconfim from '@/view/Home/Provide/Provide/fulecard/fuelconfim.vue'; 	// 网站首页=>我要供货=>加油卡供卡=>确认
// 供货详情
import details from '@/view/Home/Provide/Details/Index/details.vue'; 			// 网站首页=>供货详情
import reachge from '@/view/Home/Provide/Details/Reachge/reachge.vue'; 			// 网站首页=>供货详情
import othercard from '@/view/Home/Provide/Details/Othercard/othercard.vue'; 	// 网站首页=>供货详情
// 统计报表
import ProvideCensus from '@/view/Home/Provide/ProvideCensus/Index/census.vue'; 	// 网站首页=>统计报表
import table from '@/view/Home/Provide/ProvideCensus/table/table.vue'; 				// 网站首页=>统计报表
import capital from '@/view/Home/Provide/ProvideCensus/capital/capital.vue'; 		// 网站首页=>统计报表
// 我要提现
import cash from '@/view/Home/Provide/Cash/cash.vue'; 								// 网站首页=>我要提现
import AddCard from '@/view/Home/Provide/Cash/bankcard.vue'; 						// 网站首页=>我要提现
// 安全中心
import safe from '@/view/Home/Provide/Safe/safe.vue'; 							// 网站首页=>安全中心
import loginpsd from '@/view/Home/Provide/Safe/login_password.vue'; 			// 网站首页=>安全中心/登录密码
import paypsd from '@/view/Home/Provide/Safe/pay_password.vue'; 				// 网站首页=>安全中心/登录密码
import realname from '@/view/Home/Provide/Safe/real_name.vue'; 					// 网站首页=>安全中心/登录密码
// 首页
import HomeIndex from '@/view/Home/Index/index.vue';											// home页面
import recharge from '@/view/Home/Recharge/Index/index.vue';									// 充值页面>只有导航
import defaultindex from '@/view/Home/Recharge/default/index.vue';								// 首页默认页面
// 手机充值
import Precharge from '@/view/Home/Recharge/Phonerecharge/Index/index.vue';						// 手机充值
import fastRecharge from '@/view/Home/Recharge/Phonerecharge/FastRecharge/index.vue';			// 手机充值->话费快充
import confirm from '@/view/Home/Recharge/Phonerecharge/FastRecharge/confirm.vue';				// 手机充值->话费快充->确认订单
import mRecharge from '@/view/Home/Recharge/Phonerecharge/manyRecharge/mRecharge.vue';			// 手机充值->多人充值
import mConfirm from '@/view/Home/Recharge/Phonerecharge/manyRecharge/mConfirm.vue';			// 手机充值->多人充值->确认订单
import mProgress from '@/view/Home/Recharge/Phonerecharge/manyRecharge/mRechargeProgress.vue';	// 手机充值->多人充值->充值进度
import bRecharge from '@/view/Home/Recharge/Phonerecharge/batchWrite/index.vue';				// 手机充值->批量写入
import bConfirm from '@/view/Home/Recharge/Phonerecharge/batchWrite/bConfirm.vue';				// 手机充值->批量写入->确认订单
import batchImport from '@/view/Home/Recharge/Phonerecharge/batchImport/index.vue';				// 手机充值->批量导入
// 加油卡充值
import fuelIndex from '@/view/Home/Recharge/fuelRecharge/Index/index.vue';						// 加油卡充值
import singlefuel from '@/view/Home/Recharge/fuelRecharge/SingleRecharge/singleRecharge.vue';	// 加油卡充值->单张充值
import singleConfirm from '@/view/Home/Recharge/fuelRecharge/SingleRecharge/singleConfirm.vue';	// 加油卡充值->单张充值->确认订单
import bFuelRecharge from '@/view/Home/Recharge/fuelRecharge/BatchRecharge/index.vue';			// 加油卡批量充值
import bFuelConfirm from '@/view/Home/Recharge/fuelRecharge/BatchRecharge/bfConfirm.vue';		// 加油卡批量充值->确认订单
import bfProgress from '@/view/Home/Recharge/fuelRecharge/BatchRecharge/bfProgress.vue';		// 加油卡批量充值->等待充值结果
// 订单查询
import orderquery from '@/view/Home/OrderQuery/Index/index.vue';								// 订单查询
import orderDetail from '@/view/Home/OrderQuery/OrderDetail/index.vue';							// 订单查询->订单明细
import census from '@/view/Home/OrderQuery/Census/index.vue';									// 订单查询->订单统计
import capitalDetail from '@/view/Home/OrderQuery/Detail/index.vue';							// 订单查询->资金明细
// 产品中心
import productCenter from '@/view/Home/ProductCenter/Index/index.vue';							// 产品中心
Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [{
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
					path: "notice_detail/:id", 							// 网站首页=>系统公告=>公告详情
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
					}, {
						path: "fuelconfim", 						// 我要供货=>加油卡供卡子路由=>多张供卡=>确认
						name: "fuelconfim",
						component: fuelconfim
					}]
				}]
			}, {
				path: 'details', 									// 供货明细
				component: details,
				children: [{
					path: '',
					name: "reachge",
					component: reachge
				}, {
					path: 'othercard',
					name: "othercard",
					component: othercard
				}]
			}, {
				path: 'census', 									// 统计报表
				component: ProvideCensus,
				children: [{ 										// 我要供货=>运营商供卡子路由
					path: "", 										// 我要供货=>运营商供卡子路由=>单张供卡
					name: 'table',
					component: table
				}, {
					path: "capital", 								// 我要供货=>运营商供卡子路由=>多张供卡
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
			path: 'productCenter',				// 产品中心
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
		path: '*',
		redirect: '/Home'
	}]
});
