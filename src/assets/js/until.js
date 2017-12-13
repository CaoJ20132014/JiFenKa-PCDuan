/*
 * 公用的方法集合
 */
let PublicMethod = {
	changeLeftNav:(route) => {
		if (PublicMethod.isContains(route,'Precharge')) {
			return '1';
		} else {
			
		}
	},
	isContains:(str, substr) => {			// 判断str字符串是否包含substr字符串
		return str.indexOf(substr) >= 0;
	}
}
export default PublicMethod;