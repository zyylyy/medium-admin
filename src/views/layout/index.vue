<template>
	<div class="layout">
		<ad-aside 
		  :asideList="asideList"
		  @checkAside="checkAside">
		  </ad-aside>
		<div class="container">
			<ad-header 
			  @checkTabs="checkTabs">
			  </ad-header>
			<div class="container_box">
				<ad-meun 
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
			console.log(this.mainList)
		}
	},
}
</script>

<style lang="less">
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
    				width: 100%;
    				margin-left: 30px;
    				min-height: calc(~ '100vh - 200px');
    			}
    		}
    	}
    }
</style>
