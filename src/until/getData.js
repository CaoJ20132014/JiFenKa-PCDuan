import { fetch } from './http';
import api from '../api/api';

/*
* 账号密码登录
*/
export const accountLogin = data => fetch(api.accountLogin, data, 'POST');
/*
* 手机短信登录
*/
export const telLogin = data => fetch(api.telLogin, data, 'POST');
/*
* 退出登录
*/
export const loginOut = data => fetch(api.loginOut, data, 'POST');
/*
* 获取短信验证码
*/
export const Code = data => fetch(api.telCode, data, 'POST');
/*
* 忘记密码
*/
export const Forget = data => fetch(api.forget, data, 'POST');
/*
* 验证该账号是否已经注册过
*/
export const isRegister = data => fetch(api.alreadyRegister, data, 'POST');
/*
* 注册
*/
export const Register = data => fetch(api.register, data, 'POST');
/*
* 首页轮播图
*/
export const Banner = data => fetch(api.banner, data, 'POST');
/**************************************/
/*
* 安全中心，获取短信验证码
*/
export const safeGetCode = data => fetch(api.safeGetCode, data, 'POST');
/*
* 安全中心，修改登录密码
*/
export const revise = data => fetch(api.revise, data, 'POST');
/*
* 安全中心，设置支付密码
*/
export const setPayPwd = data => fetch(api.payPwd, data, 'POST');
/*
* 安全中心，实名认证
*/
export const userReal = data => fetch(api.realName, data, 'POST');
/*
* 安全中心，账户类型认证
*/
export const userType = data => fetch(api.authentication, data, 'POST');
/*
* 安全中心，验证是否已实名认证
*/
export const judge = data => fetch(api.judge, data, 'POST');
/**************************************/
/*
* 供卡系统，折扣查询
*/
export const query = data => fetch(api.query, data, 'POST');
/*
* 供卡系统，获取运营商的面值
*/
export const getValue = data => fetch(api.getValue, data, 'POST');
/*
* 供卡系统，上网卡单张
*/
export const oneCard = data => fetch(api.oneCard, data, 'POST');
/*
* 供卡系统，上网卡多張
*/
export const manyCard = data => fetch(api.manyCard, data, 'POST');
/*
* 供卡系统，上网卡批量
*/
export const importCard = data => fetch(api.upLoad, data, 'post');
/*
* 供卡系统，上网卡批量，确认提交
*/
export const SureUpLoad = data => fetch(api.SureUpLoad, data, 'post');
/*
* 供卡系统，供货详情
*/
export const Detail = (page, data) => fetch(api.detail + '?p=' + page, data, 'post');
/*
* 供卡系统，统计报表
*/
export const census = (page, data) => fetch(api.census + '?p=' + page, data, 'post');
/*
* 供卡系统，统计报表，资金明细
*/
export const capitalDetail = (page, data) => fetch(api.capitalDetail + '?p=' + page, data, 'post');
/*
* 供卡系统，系统公告列表
*/
export const Notice = (page, data) => fetch(api.noticeIndex + '?p=' + page, data, 'post');
/*
* 供卡系统，系统公告详情
*/
export const NoticeDetail = data => fetch(api.noticeDetail, data, 'post');
/**************************************/
/*
* 提现，银行卡列表
*/
export const CardList = data => fetch(api.bandCardList, {}, 'post');
/*
* 提现，提现申请
*/
export const CashApply = data => fetch(api.apply, data, 'post');
/*
* 提现，提现详情
*/
export const WithdrawDetail = data => fetch(api.wDetail, data, 'post');
/*
* 提现，添加银行卡
*/
export const AddCard = data => fetch(api.addCard, data, 'post');