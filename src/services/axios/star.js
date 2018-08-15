/**   
 * api接口统一管理
 */
import { get, post } from './axios.js'

/** 
 * 明星活动 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getListStarActivityInNear = ()=>{
	return get(`/star/listStarActivityInNear`)
}
/** 
 * 明星推荐 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getListSarTopHotRecommand = (size)=>{
	return get(`/star/listSarTopHotRecommand/${size}`)
}
/** 
 * 明星详情 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getStartDetail = (starid)=>{
	return get(`/star/getStartDetail/${starid}`)
}
/** 
 * 明星活动详情 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getStarActivity = (starid)=>{
	return get(`/star/getStarActivity/${starid}`)
}
/** 
 * 明星独立课件 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getListDanceByStar = (starid)=>{
	return get(`/dance/listDanceByStar/${starid}`)
}
/** 
 * 明星独立课件 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getListStarPhotoAlbum = (starid)=>{
	return get(`/photo/listStarPhotoAlbum/${starid}`)
}

export default {
	getListStarActivityInNear,
	getStartDetail,
	getStarActivity,
	getListDanceByStar,
	getListStarPhotoAlbum,
	getListSarTopHotRecommand,
}
