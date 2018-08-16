<template>
	<div class="layout">
		<ad-aside 
		  :flog="headFlog"
		  :asideList="asideList"
		  @checkAside="checkAside">
		  </ad-aside>
		<div class="container">
			<ad-header 
			  @checkTabs="checkTabs">
			  </ad-header>
			<div class="container_box">
				<ad-meun 
				  ref="adMeun"
				  :flog="asideFlog"
				  :mainList="mainList"></ad-meun>
				<div class="main" :class="mainList.length ? '' : 'active'">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script  type="text/babel">

import adAside from './components/adAside.vue'
import adHeader from './components/adHeader.vue'
import adMeun from './components/adMeun.vue'

export default {
	name: 'layout',
	components: {
		adHeader,
		adAside,
		adMeun
	},
	data() {
		return {
			asideList: [],
			mainList: [],
			menuList: [],

			asideFlog: '01',
			headFlog: '0',
		}
	},
	mounted() {
		this.headFlog = sessionStorage.getItem('headFlog') ? sessionStorage.getItem('headFlog') : '0'
		this.asideFlog = sessionStorage.getItem('asideFlog') ? sessionStorage.getItem('asideFlog') : '01'

		this.$nextTick(()=>{
			this.mainList = this.$refs.adMeun.dataList
		})
	},
	methods: {
		updateList(arr, flog){
			this.arr.find((item)=>{
				if(item.flog == flog) {
					return item
				}else {
					this.updateList(item.children, flog)
				}
			})
		},
		checkTabs(item){
			this.asideList = item.children || []
		},
		checkAside(item){
			this.mainList = item.children
		}
	},
}
</script>

<style lang="less" scoped>
    .layout {
    	display: flex;
    	.container {
    		padding-left: 20px;
    		flex: 1;
    		.container_box {
    			display: flex;
    			padding-top: 20px;
    			min-height: calc(~ '100vh');
    			background-color: #ccc;
    			.main {
    				background-color: #fff;
    				margin-left: 30px;
    				width: calc(~ '100vw - 360px');
    				min-height: calc(~ '100vh - 200px');
    			}
    			.active {
    				margin-left: 0;
    				width: calc(~ '100vw - 100px');    			
    		    }
    		}
    	}
    }
</style>
