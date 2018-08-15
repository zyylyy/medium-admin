import Vue from 'vue'
import { rootPath } from '@/services/axios/config'

Vue.prototype.util = {
    /*
    ** 设置页面title
     */
    setTitle: (title)=>{
        setTimeout(function() {
            //利用iframe的onload事件刷新页面
            document.title = title
            var iframe = document.createElement('iframe');
            iframe.style.visibility = 'hidden';
            iframe.style.width = '1px';
            iframe.style.height = '1px';
            iframe.onload = function() {
                setTimeout(function() {
                    document.body.removeChild(iframe);
                }, 0);
            };
            document.body.appendChild(iframe);
        }, 0); 
    },
    /**
     * 获取当前服务器域名端口
     */
    hostUrl: () => {
        return rootPath.substring(0, rootPath.length - 4)
    },
    /**
     * [是否为微信浏览器]
     * @return {[type]} [description]
     */
	isWechat: () => {
        const ua = navigator.userAgent.toLowerCase();
        const micromessenger = ua.match(/MicroMessenger/i);
        if (micromessenger && micromessenger[0] === 'micromessenger') {
            return true;
        } 
        else {
            return false;
        }
    },

    /**
     * [秒数转换为时间]
     * @param  {[type]} time [时间戳]
     * @return {[type]}      [description]
     */
    makeTimeString: (time) => {
        const timeShowString = []
        timeShowString[0] = parseInt(time / 60, 10)
        if (timeShowString[0] < 10) {
            timeShowString[0] = `0${timeShowString[0]}`
        }
        timeShowString[1] = time % 60
        if (timeShowString[1] < 10) {
            timeShowString[1] = `0${timeShowString[1]}`
        }
        return timeShowString.join(':')
    },

    /**
     * [将从服务器拿到的时间格式(yyyy-mm-ddThh:mm:ss:mmm)转换为yy-mm-dd hh:mm:ss格式]
     * @param  {[type]} time [description]
     * @return {[type]}      [description]
     */
    serverTimeToString: (time) => {
        if (time) {
            const reg =  /\.\d{0,3}$/i
            return time.replace(reg, '').replace('T', ' ').split('.')[0]
        } else {
            return ''
        }
    },

    /**
     * [timeToString 将时间戳转换为yyyy.mm.dd hh:mm格式]
     * @param  {[type]} time [description]
     * @return {[type]}      [description]
     */
    timeToString: (time) => {
        if (time) {
            const date = new Date(time)
            const year = date.getFullYear()
            const month = stringToFixed(date.getMonth() + 1)
            const day = stringToFixed(date.getDate())
            const hour = stringToFixed(date.getHours())
            const minute = stringToFixed(date.getMinutes())
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minute
        } else {
            return ''
        }
    },
    // 是否为空
    isEmpty: (str) => {
        if (str && str != '' && str != null  && str != undefined) {
            return false
        }
        else {
            return true
        }
    },
    /**
     * 判断对象是否有值
     * @param  {object}  e 对象
     */
    isEmptyObject: (e) => {
        var t
        for (t in e) {
            return !1
        }
        return !0
    },
    //手机号验证
    checkMobile: (number) => {
        var reg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/
        if (reg.test(number)) {
            return true
        }
        else {
            return false
        }
    }
}
