<template>
	<div class="layout">
		<ad-aside 
		  flog="0"
		  :asideList="asideList"
		  @checkAside="checkAside">
		  </ad-aside>
		<div class="container">
			<ad-header 
			  @checkTabs="checkTabs">
			  </ad-header>
			<div class="container_box">
				<ad-meun 
				  flog="01"
				  :mainList="mainList"></ad-meun>
				<div class="main">
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
		}
	},
	mounted() {
		
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
    		margin-left: 20px;
    		flex: 1;
    		.container_box {
    			display: flex;
    			margin-top: 20px;
    			min-height: calc(~ '100vh - 88px');
    			background-color: #ccc;
    			.main {
    				background-color: #fff;
    				margin-left: 30px;
    				width: calc(~ '100vw - 320px');
    				min-height: calc(~ '100vh - 200px');
    			}
    		}
    	}
    }
</style>
