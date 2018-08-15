/**   
 * api接口统一管理
 */
import { get, post } from './axios.js'
/** 
 * 获取相册列表
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const photoList = (page, size)=>{
	return get(`/photo/list/${page}/${size}`)
}
/** 
 * 获取相册详情
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const listPhotoAlbumDetail = (id)=>{
	return get(`/photo/listPhotoAlbumDetail/${id}`)
}


export default {
	photoList,
	listPhotoAlbumDetail,
}
