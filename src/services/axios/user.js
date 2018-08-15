/**   
 * api接口统一管理
 */
import { get, post } from './axios.js'

/** 
 * 明星活动 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const accountSave = (params)=>{
	return post(`/account/save`, params)
}

export default {
	accountSave,
}
