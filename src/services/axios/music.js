/**   
 * api接口统一管理
 */
import { get, post } from './axios.js'
/** 
 * 获取音乐首页的大类
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const musicListSetCategory = ()=>{
	return get(`/music/list/musicSetCategory`)
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
 * 今日推荐音乐
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const musicListRecommand = (size)=>{
	return get(`/music/list/recommand/${size}`)
}
/** 
 * 创建歌单
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const buildFavorite = (id, name)=>{
	return get(`/music/his/buildFavorite/${id}/${name}`)
}

/** 
 * 获取歌单
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getFavoriteList = (id)=>{
	return get(`/music/his/getFavoriteList/${id}`)
}
/** 
 * 追加音乐到歌单中
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const addFavoriteName = (userId, name, musicId)=>{
	return get(`/music/his/addFavoriteName/${userId}/${name}/${musicId}`)
}
/** 
 * 获取歌单中的所有音乐
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const musicforall = (userId, name)=>{
	return get(`/music/his/musicforall/${userId}/${name}`)
}
/** 
 * 删除音乐
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const removeFavorite = (userId, name, musicId)=>{
	return get(`/music/his/removeFavorite/${userId}/${name}/${musicId}`)
}
/** 
 * 分页查询平台中的音乐专辑
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const musicLists = (musicsetid, page, size)=>{
	return get(`/music/lists/${musicsetid}/${page}/${size}`)
}

/** 
 * 根据id获取音乐详情
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const getMusicDetail = (musicsetid)=>{
	return get(`/music/get/${musicsetid}`)
}
export default {
	musicListSetCategory,
	getMusicListtTophit,
	musicListRecommand,
	buildFavorite,
	getFavoriteList,
	addFavoriteName,
	musicforall,
	removeFavorite,
	musicLists,
	getMusicDetail,
}
