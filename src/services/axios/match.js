/**   
 * api接口统一管理
 */
import { get, post } from './axios.js'
/** 
 * 赛事列表
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const matchListMatch = (page, size)=>{
	return get(`/match/listMatch/${page}/${size}`)
}
/** 
 * 赛事详情
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getMatch = (id)=>{
	return get(`/match/getMatch/${id}`)
}
/** 
 * 历史赛事
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const matchListMatchPevision = (id)=>{
	return get(`/match/listMatch/prevision/${id}`)
}

export default {
	matchListMatch,
	getMatch,
	matchListMatchPevision,
}
