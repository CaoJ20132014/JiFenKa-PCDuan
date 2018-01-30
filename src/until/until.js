/*
 * 公用的方法集合
 */
import md5 from 'js-md5';
import Cookie from 'js-cookie';
import { Message, MessageBox } from 'element-ui';
let Base64 = require('js-base64').Base64;
let PublicMothod = {
	changeTopNav: (route) => {
		if (PublicMothod.isContains(route, 'orderquery')){
			return '2';
		} else if (PublicMothod.isContains(route, 'productCenter')){
			return '4';
		} else if (PublicMothod.isContains(route, 'Cardprovided')){
			return '5';
		} else {
			return '1';
		}
	},
	changeLeftNav: (route) => {				// 用于改变左侧导航的选中状态
		if (PublicMothod.isContains(route,'Precharge')) {
			return '1';
		} else if (PublicMothod.isContains(route, 'fuelRecharge')){
			return '3';
		}
	},
	judgeRoute: (route) => {				// 用于改变充值页面右侧上部导航的选中状态
		if (PublicMothod.isContains(route, 'mRecharge') || route == '/Home/Precharge/mConfirm') {
			return '2';
		} else if (route == '/Home/Precharge/') {				// 话费充值
			return '1'
		} else if (route == '/Home/Precharge/bRecharge'){
			return '3'
		} else if (route == '/Home/Precharge/bImport'){
			return '4'
		} else if (route == '/Home/fuelRecharge/sFuel'){		// 加油卡充值
			return '1'
		} else if (route == '/Home/fuelRecharge/bfRecharge') {
			return '2'
		}
	},
	isContains:(str, substr) => {			// 判断str字符串是否包含substr字符串
		return str.indexOf(substr) >= 0;
	},
	changeHeight: (route) => {				// 用于改变右侧的高度
		if (route == '/Home/') {
			return 540;
		} else if(PublicMothod.isContains(route, 'Precharge')){
			return 890;
		} else if (PublicMothod.isContains(route, 'fuelRecharge')) {
			return 890;
		} else if (PublicMothod.isContains(route, 'Provide')) {
			return 680;
		} else if (route == '/Home/CardProvide/'){
			return 540;
		} else{
			return 540;
		}
	},
	changeCrumbs: (route) => {				// 改变面包屑的显示状态
		if (route == '/Home/Precharge/Phconfirm' || route == '/Home/Precharge/mConfirm' || route == '/Home/Precharge/bConfirm') {
			return true;
		} else if (route == '/Home/Precharge/mProgress'){
			return true;
		} else if (route == '/Home/fuelRecharge/fConfirm') {
			return true;
		} else if (route == '/Home/fuelRecharge/bfConfirm' || route == '/Home/fuelRecharge/bfProgress') {
			return true;
		} else {
			return false;
		}
	},
	isTel: (val) => {						// 验证手机号
		var pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		if (pattern.test(val)) {
			return true;
		} else {
			return false;
		}
	},
	remove: (Arr, item) => {				// 删除数组的某一项
		for (let i = 0; i < Arr.length; i++) {
			if (item.id == Arr[i].id) {
				Arr.splice(i, 1);
			}
		}
	},
	provideShow: (route) => {
		if (PublicMothod.isContains(route, 'Cardprovided')) {
			return false;
		} else {
			return true;
		}
	},

	setCookie: (name, value, time) => {
		let strsec = PublicMothod.getsec(time);
		let exp = new Date();
		exp.setTime(exp.getTime() + strsec * 1);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	},
	// 这是有设定过期时间的使用示例： 
	// s是指秒，s20代表20秒 
	// h是指小时，h12代表12小时 
	// d是天数，d30代表30 
	getsec: (str) => {
		let str1 = str.substring(1, str.length) * 1;
		let str2 = str.substring(0, 1);
		if (str2 == "s") {
			return str1 * 1000;
		} else if (str2 == "h") {
			return str1 * 60 * 60 * 1000;
		} else if (str2 == "d") {
			return str1 * 24 * 60 * 60 * 1000;
		}
	},
	getCookie: (name) => {
		let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) {
			return unescape(arr[2]);
		} else {
			return null;
		}
	},
	delCookie: (name) => {
		let exp = new Date();
		exp.setTime(exp.getTime() - 12 * 3600 * 1000);
		let cval = PublicMothod.getCookie(name);
		if (cval) {
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		}
	},
	//验证内容是否包含空格、小数点、中划线、下划线
	checkTextSpace: (value) => {
		let reg1 = /^[A-Za-z0-9]+$/g;
		let reg2 = /^[0-9]*$/g;
		if (reg1.test(value) && !reg2.test(value)) {
			return true;
		} else {
			return false;
		}
	},
	checkRate: (val) => {
		let reg = /^[0-9a-zA-Z]*$/g;  //判断字符串是否为数字和字母组合
		if (!reg.test(val)) {
			return false;
		} else {
			return true;
		}
	},
    /**
     * params {data} 需要加密的内容
     * params {key} 每个用户对应的token值
     */
	encrypt: (data, key) => {
		let newKey = hex_sha1(md5(hex_sha1(md5(key)) + 'tian') + 'yuan');
		let x = 0;
		let dataLen = data.length;
		let newKeyLen = newKey.length;
		let char = '';
		let str = '';
		for (let i = 0; i < dataLen; i++) {
			if (x == newKeyLen) {
				x = 0;
			}
			char += newKey[x];
			x++;
			str += data[i].charCodeAt() + (char[i].charCodeAt()) + ',';
		}
		let newStr = str.substring(0, str.length - 1);
		return Base64.encode(newStr);
	},
    /**
     * params {type} set设置, get获取, remove移除
     * params {name} cookie 别名
     * params {data} cookie 数据
     * params {time} cookie 过期时间
     * params {Path} cookie 路径
     */
	JS_Cookie: (type, name, data, time, Path) => {
		if (Path) {
			if (type == 'set' && name && data) {
				Cookie.set(name, data, { expires: time, path: Path });
			} else if (type == 'get' && name && !data) {
				return Cookie.getJSON(name);
			} else if (type == 'remove' && name && data && time && Path) {
				Cookie.remove(name, { path: Path });
			}
		} else {
			if (type == 'set' && name && data) {
				Cookie.set(name, data, { expires: time });
			} else if (type == 'get' && name && !data) {
				return Cookie.getJSON(name);
			} else if (type == 'remove' && name && !data) {
				Cookie.remove(name);
			}
		}
	},
	//判断当前浏览类型
	BrowserType: () => {
		let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
		let isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
		if (isIE || isEdge) {
			return false
		} else {
			return true
		}
	},
    /**
     * params {time} 时间字符串 s20 表示20秒，m30 表示30分钟 h12 表示12小时 d30 表示30天 new Date()时间戳转对象
     */
	setTimes: (time) => {
		let date = new Date();
		let str1 = time.substring(1, time.length) * 1;
		let str2 = time.substring(0, 1);
		if (str2 == 's') {
			return new Date(date.setTime(date.getTime() + 1000 * str1));
		} else if (str2 == 'm') {
			return new Date(date.setTime(date.getTime() + 1000 * 60 * str1));
		} else if (str2 == 'h') {
			return new Date(date.setTime(date.getTime() + 1000 * 60 * 60 * str1));
		} else if (str2 == 'd') {
			return new Date(date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * str1));
		} else if (str2 == 'D') {
			return new Date(date.setTime(date.getTime() - 1000 * 60 * 60 * 24 * str1));
		}
	},
    /**
     * params {types} 弹窗的类型 success / info / warning / error
     * params {msg} 弹窗的信息
     */
	topAlert: (types, msg) => {
		Message({
			type: types,
			message: msg,
			center: true,
			duration: 2000
		});
	},
    /**
     * params {types} 弹窗的类型 success / info / warning / error
     * params {title} 弹窗标题
     * params {msg} 弹窗的信息
     */
	confirmAlert: (msg, title, types, confirm, cancel) => {
		MessageBox.confirm(msg, title, {
			confirmButtonText: '确定',
			showCancelButton: false,
			type: types
		}).then(() => {
			if (confirm) {
				confirm();
			}
		}).catch(() => {
			if (cancel) {
				cancel();
			}
		});
	},
	getToken: () => {
		let Ip = PublicMothod.JS_Cookie('get', 'ck');
		let token = PublicMothod.JS_Cookie('get', String(Ip));
		return token;
	},
	isTel: (val) => {						// 验证手机号
		let pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		if (pattern.test(val)) {
			return true;
		} else {
			return false;
		}
	},
	isFont: (val) => {
		var reg = /^[\u2E80-\u9FFF]+$/;         // Unicode编码中的汉字范围
		if (reg.test(val)) {
			return true;
		} else {
			return false;
		}
	},
	isIdCard: function (idCard) {			/* 验证身份证号码 */
		// 15位和18位身份证号码的正则表达式
		let regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
		// 如果通过该验证，说明身份证格式正确，但准确性还需计算
		if (regIdCard.test(idCard)) {
			if (idCard.length == 18) {
				let idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 	// 将前17位加权因子保存在数组里
				let idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); 						// 这是除以11后，可能产生的11位余数、验证码，也保存成数组
				let idCardWiSum = 0; 	// 用来保存前17位各自乖以加权因子后的总和
				for (let i = 0; i < 17; i++) {
					idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
				}
				let idCardMod = idCardWiSum % 11; 			// 计算出校验码所在数组的位置
				let idCardLast = idCard.substring(17); 		// 得到最后一位身份证号码
				// 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
				if (idCardMod == 2) {
					if (idCardLast == "X" || idCardLast == "x") {
						return true;
					} else {
						return false;
					}
				} else {	// 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
					if (idCardLast == idCardY[idCardMod]) {
						return true;
					} else {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	},
	//银行卡号码检测
	isBankCard: function (card) {
		let lastNum = card.substr(card.length - 1, 1);      //取出最后一位（与luhn进行比较）
		let first15Num = card.substr(0, card.length - 1);   //前15或18位
		let newArr = new Array();
		for (let i = first15Num.length - 1; i > -1; i--) {      //前15或18位倒序存进数组
			newArr.push(first15Num.substr(i, 1));
		}
		let arrJiShu = new Array();                             //奇数位*2的积 <9
		let arrJiShu2 = new Array();                            //奇数位*2的积 >9
		let arrOuShu = new Array();                             //偶数位数组
		for (let j = 0; j < newArr.length; j++) {
			if ((j + 1) % 2 == 1) {                             //奇数位
				if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
				else arrJiShu2.push(parseInt(newArr[j]) * 2);
			} else {                                             //偶数位
				arrOuShu.push(newArr[j]);
			}
		}
		let jishu_child1 = new Array();                         //奇数位*2 >9 的分割之后的数组个位数
		let jishu_child2 = new Array();                         //奇数位*2 >9 的分割之后的数组十位数
		for (let h = 0; h < arrJiShu2.length; h++) {
			jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
			jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
		}
		let sumJiShu = 0;                                       //奇数位*2 < 9 的数组之和
		let sumOuShu = 0;                                       //偶数位数组之和
		let sumJiShuChild1 = 0;                                 //奇数位*2 >9 的分割之后的数组个位数之和
		let sumJiShuChild2 = 0;                                 //奇数位*2 >9 的分割之后的数组十位数之和
		let sumTotal = 0;
		for (let m = 0; m < arrJiShu.length; m++) {
			sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
		}
		for (let n = 0; n < arrOuShu.length; n++) {
			sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
		}
		for (let p = 0; p < jishu_child1.length; p++) {
			sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
			sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
		}
		//计算总和
		sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);
		//计算luhn值
		let k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
		let luhn = 10 - k;
		if (lastNum == luhn) {
			return true;
		} else {
			return false;
		}
	},
	idCard: (val) => {
		let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2})$/;
		if (!reg.test(val)) {
			return false;
		} else {
			return true;
		}
	}
}
export default PublicMothod;