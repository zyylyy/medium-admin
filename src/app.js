import Vue from 'vue'                             
import VueRouter from 'vue-router'               
import App from './app.vue'                      
import AppComponents from './components'         //全局组件         
import routes from './routes'                    
import store from './vuex'                     
import {sync} from 'vuex-router-sync'                         
import ElementUI from 'element-ui';
import '!style-loader!css-loader!less-loader!element-ui/lib/theme-chalk/index.css';

import '!style-loader!css-loader!less-loader!./assets/css/normalize.css'  // normalize重置浏览器样式

import './util/common'            

Vue.use(VueRouter)
Vue.use(AppComponents)
Vue.use(ElementUI);

const router = new VueRouter({
	mode: 'hash',//hash
	routes: [
		...routes,
	],
    // return 期望滚动到哪个的位置
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})


sync(store,router)


new Vue({
	store,
	router,
	el: "#app",
	render: h => h(App)
})
