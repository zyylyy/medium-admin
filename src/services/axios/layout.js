/**   
 * api接口统一管理
 */
import { get, post } from './axios.js'
/** 
 * 获取舞蹈类型 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getListCategory = ()=>{
	return get('/dance/list/category')
}
/** 
 * 获取舞蹈信息列表 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getlistDanceInfo = (codeId)=>{
	return get(`/dance/listDanceInfo/${codeId}`)
}
/** 
 * 获取平台热门学习列表 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getlistToplearn = (page, size, danceInfoId)=>{
	return get(`/dance/listToplearns/${danceInfoId}/${page}/${size}`)
}
/** 
 * 获取首页最热音乐 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getMusicListtTophit = (size)=>{
	return get(`/music/list/tophit/${size}`)
}
/** 
 * 获取首页推荐明星学员 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getAccountListTopAccount = (size)=>{
	return get(`/account/listTopAccount/${size}`)
}
/** 
 * 获取轮播推荐 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getDanceRecommand = ()=>{
	return get(`/dance/getDanceRecommand`)
}
/** 
 * 获取舞蹈信息列表 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getDanceList = (id, page, size)=>{
	return get(`/dance/getDanceList/${id}/${page}/${size}`)
}
/** 
 * 获取首页推荐课件 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const danceListDanceTopRecommand = ()=>{
	return get(`/dance/listDanceTopRecommand`)
}
/** 
 * 获取首页推荐明星排行 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const listStarTopRecommand = (size)=>{
	return get(`/star/listStarTopRecommand/${size}`)
}
/** 
 * 获取课件详细信息 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getDanceDeatil = (id)=>{
	return get(`/dance/getDance/${id}`)
}

/** 
 * 获取衔接动作链接 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getDanceListFrame = (id)=>{
	return get(`/dance/listFrame/${id}`)
}

/** 
 * 选择测评动作 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getListLearnedRecommand = (userId, page, size)=>{
	return get(`/dance/listLearnedRecommand/${userId}/${page}/${size}`)
}
/** 
 * 已测评动作 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getTestedList = (userId, page, size)=>{
	return get(`/dance/dance/getTestedList/${userId}/${page}/${size}`)
}
/** 
 * 获取舞蹈详情 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getDanceInfo = (id)=>{
	return get(`/dance/getDanceInfo/${id}`)
}
/** 
 * 发现分页列表 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getNewLits = (page, size)=>{
	return get(`/news/list/${page}/${size}`)
}
export default {
	getListCategory,
	getlistDanceInfo,
	getlistToplearn,
	getMusicListtTophit,
	getAccountListTopAccount,
	getDanceRecommand,
	getDanceList,
	danceListDanceTopRecommand,
	listStarTopRecommand,
	getDanceDeatil,
	getDanceListFrame,
	getListLearnedRecommand,
	getTestedList,
	getDanceInfo,
	getNewLits
}
