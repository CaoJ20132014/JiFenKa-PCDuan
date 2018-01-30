export default {
    // 登录注册相关
    accountLogin: '/ProvideHome/Login/pass_check',           // 账号密码登录
    telLogin: '/ProvideHome/Login/xin_check',                // 手机短信登录
    telCode: '/ProvideHome/Login/Verification_Code',         // 短信验证码
    alreadyRegister: '/ProvideHome/Login/user_query',        // 验证该账户是否已经注册
    register: '/ProvideHome/Login/register',                 // 注册
    loginOut: '/ProvideHome/Login/logout',                   // 退出
    banner: '/ProvideHome/Login/pic_index',                  // 首页未登录，轮播图
    forget: '/ProvideHome/Login/reset_pwd',                  // 忘记密码
    // 安全中心相关      
    safeGetCode: '/ProvideHome/Security/Verification_Code',  // 安全中心，获取验证码
    revise: '/ProvideHome/Security/xin_check',               // 安全中心，修改登录密码
    payPwd: '/ProvideHome/Security/pay_check_set',           // 安全中心，设置支付密码
    loginRecord: '/ProvideHome/Security/login_details',      // 安全中心，登录记录
    realName: '/ProvideHome/Security/real_name',             // 安全中心，实名认证
    authentication: '/ProvideHome/Security/user_check_state',// 安全中心，账户认证 个人、公司
    judge: '/ProvideHome/Security/user_info',                // 安全中心，判断是否已经实名认证
    // 供卡相关
    getValue: '/ProvideHome/Import/worthlist',               // 获取不同运营商对应的面值
    oneCard: '/ProvideHome/Import/rechage_one_card',         // 上网卡供货，单张
    manyCard: '/ProvideHome/Import/rechage_many_card',       // 上网卡供货，多张
    query: '/ProvideHome/Import/query_set',                  // 折扣查询
    upLoad: '/ProvideHome/Import/upload_xls',                // 批量导入
    SureUpLoad: '/ProvideHome/Import/rechage_batch_card',    // 批量导入
    // 供卡详情
    detail: '/ProvideHome/Provide/query_limit',              // 供货详情
    // 统计报表
    census: '/ProvideHome/Provide/count_limit',              // 统计报表
    capitalDetail: '/ProvideHome/Withdrawals/price_index',   // 资金明细
    // 系统公告
    noticeIndex: '/ProvideHome/Notic/notic_index',           // 系统公告
    noticeDetail: '/ProvideHome/Notic/notic_detail',         // 公告详情
    // 提现
    bandCardList: '/ProvideHome/Withdrawals/acc_info_list',  // 银行卡列表
    apply: '/ProvideHome/Withdrawals/apply_refer_to',        // 提现申请
    wDetail: '/ProvideHome/Withdrawals/price_details',       // 提现详情
    addCard: '/ProvideHome/Withdrawals/add_info_card'        // 添加银行卡
};