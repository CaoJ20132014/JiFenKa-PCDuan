/*
 * 公用的方法集合
 */
let PublicMethod = {
	changeLeftNav: (route) => {				// 用于改变左侧导航的选中状态
		if (PublicMethod.isContains(route,'Precharge')) {
			return '1';
		} else {
			
		}
	},
	judgeRoute: (route) => {				// 用于改变手机充值页面右侧上部导航的选中状态
		if (PublicMethod.isContains(route, 'mRecharge') || route == '/Home/Precharge/mConfirm') {
			return '2';
		} else if (route == '/Home/Precharge/') {
			return '1'
		} else {
			
		}
	},
	isContains:(str, substr) => {			// 判断str字符串是否包含substr字符串
		return str.indexOf(substr) >= 0;
	},
	changeHeight: (route) => {				// 用于改变右侧的高度
		if (route == '/Home') {
			return 540;
		} else if(PublicMethod.isContains(route, 'Precharge')){
			return 890;
		}
	},
	changeCrumbs: (route) => {				// 改变面包屑的显示状态
		if (route == '/Home/Precharge/Phconfirm') {
			return true;
		} else{
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