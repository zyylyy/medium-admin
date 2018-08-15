/**   
 * api接口统一管理
 */
import { get, post } from './axios.js'
/** 
 * 获取页面轮播图
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const adGetList = (danceCategoryId)=>{
	return get(`/ad/list/${danceCategoryId}`)
}



export default {
	adGetList,
}
