/*
 * 公用的方法集合
 */
let PublicMethod = {
	changeTopNav: (route) => {
		if (PublicMethod.isContains(route, 'orderquery')){
			return '2';
		} else if (PublicMethod.isContains(route, 'productCenter')){
			return '4';
		} else if (PublicMethod.isContains(route, 'CardProvide')){
			return '5';
		} else {
			return '1';
		}
	},
	changeLeftNav: (route) => {				// 用于改变左侧导航的选中状态
		if (PublicMethod.isContains(route,'Precharge')) {
			return '1';
		} else if (PublicMethod.isContains(route, 'fuelRecharge')){
			return '3';
		}
	},
	judgeRoute: (route) => {				// 用于改变充值页面右侧上部导航的选中状态
		if (PublicMethod.isContains(route, 'mRecharge') || route == '/Home/Precharge/mConfirm') {
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
		} else if(PublicMethod.isContains(route, 'Precharge')){
			return 890;
		} else if (PublicMethod.isContains(route, 'fuelRecharge')) {
			return 890;
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
	}
}
export default PublicMethod;