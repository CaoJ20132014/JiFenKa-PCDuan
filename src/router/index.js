import Vue from 'vue';
import Router from 'vue-router';
import HomeIndex from '@/view/Home/Index/index.vue'; // home页面
import recharge from '@/view/Home/Recharge/Index/index.vue'; // 充值页面>只有导航
import defaultindex from '@/view/Home/Recharge/default/index.vue'; // 首页默认页面
import single_recharge from '@/view/flow/single_recharge'; //单人充值
import Multi_recharge from '@/view/flow/Multi_recharge'; //多人充值
import recharge_nav from '@/view/flow/recharge_nav'; //流量充值导航
import batch from '@/view/flow/batch'; //批量导入导航
import upload from '@/view/flow/upload'; //批量导入上传
import batch_sure from '@/view/flow/batch_sure'; //批量导入订单确认
import progress from '@/view/flow/progress'; //批量导入的进度
import saveInedx from '@/view/saveCenter/index'; //安全中心首页
import accountPro from '@/view/saveCenter/accountPro'; //账号保护首页
import basicSet from '@/view/saveCenter/basicSet'; //基础设置
import setLogin from '@/view/saveCenter/setLogin'; //设置登录密码
import payment from '@/view/saveCenter/payment'; //设置支付密码
import seeLog from '@/view/saveCenter/seeLog'; //查看操作日志
import fundIndex from '@/view/fundManagement/index'; //加款管理首页
import methodIndex from '@/view/fundManagement/addMethod'; //加款方式
import statistics from '@/view/fundManagement/statistics'; //查看更多
import addition from '@/view/fundManagement/addition'; //加款统计
import alipay from '@/view/fundManagement/alipay'; //支付宝支付
import agriculture from '@/view/fundManagement/agriculture'; //农业银行加款
import bankCard from '@/view/fundManagement/bankCard'; //银行卡管理
import binding from '@/view/fundManagement/binding'; //绑定银行卡
import sureSub from '@/view/fundManagement/sureSub'; //确认订单
import remittance from '@/view/fundManagement/remittance'; //农业银行汇款
import revoke from '@/view/fundManagement/revoke'; //加款记录
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            component: HomeIndex,
            children: [{
                    path: "",
                    component: recharge,
                    children: [{
                            path: "",
                            name: "defaultindex",
                            component: defaultindex,
                        },
                        {
                            path: '/to/1',
                            component: recharge_nav,
                            children: [{
                                    path: '',
                                    component: single_recharge
                                },
                                {
                                    path: '/to/single_recharge',
                                    component: single_recharge
                                }, {
                                    path: '/to/2',
                                    component: Multi_recharge
                                },
                                {
                                    path: '/to/3',
                                    component: batch,
                                    children: [{
                                            path: '',
                                            component: upload
                                        },
                                        {
                                            path: '/to/batch_sure',
                                            component: batch_sure
                                        },
                                        {
                                            path: '/to/progress',
                                            component: progress
                                        }
                                    ],
                                }
                            ]
                        },

                    ]
                },
                {
                    path: '/to/5',
                    component: saveInedx,
                    children: [{
                            path: '',
                            component: accountPro
                        },
                        {
                            path: '/to/setLogin',
                            component: setLogin
                        },
                        {
                            path: '/to/payment',
                            component: payment
                        },
                        {
                            path: '/to/seeLog',
                            component: seeLog
                        },
                        {
                            path: '/to/6',
                            component: basicSet
                        }
                    ]
                },
                {
                    path: '/to/7',
                    component: fundIndex,
                    children: [{
                            path: '',
                            component: methodIndex
                        }, {
                            path: '/to/statistics',
                            component: statistics
                        },
                        {
                            path: '/to/8',
                            component: addition
                        },
                        {
                            path: '/to/alipay',
                            component: alipay
                        },
                        {
                            path: '/to/agriculture',
                            component: agriculture
                        },
                        {
                            path: '/to/bankCard',
                            component: bankCard
                        },
                        {
                            path: '/to/binding',
                            component: binding
                        },
                        {
                            path: '/to/sureSub',
                            component: sureSub
                        },
                        {
                            path: '/to/remittance',
                            component: remittance
                        },
                        {
                            path: '/to/revoke',
                            component: revoke
                        },
                    ]
                }
            ]
        },



    ]
});