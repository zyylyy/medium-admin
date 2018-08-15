<template>
	<div class="adMeun" v-if="dataList.length">
	    <el-menu
	      class="el-menu-vertical-demo">
	        <el-submenu :index="item.flog" v-for="(item , index) in dataList">
		        <template slot="title">
		            <span @click="toTath(item, index)">{{ item.title }}</span>
		        </template>
		        <el-menu-item-group v-for="(obj, i) in item.children">
		        	<el-menu-item :index="obj.flog"><p @click="toTath(obj, index)">{{ obj.title }}</p></el-menu-item>
		        </el-menu-item-group>
	        </el-submenu>
	    </el-menu>
	</div>
</template>

<script  type="text/babel">

import menulits from '../../../static/meun.json'

export default {
	name: 'adMeun',
	props:{
		mainList:{
			type: Array,
			default:()=>{
				return []
			}
		},
		flog: {
			type: String,
			default:()=>{
				return ''
			}
		}
	},
	data() {
		return {
			menulits,
			dataList: [],
			menuItem: {},
		}
	},
	watch: {
		flog:{
    		handler(val){
    			this.updateList(this.menulits, this.flog)
    		},
    		deep: true,
    		immediate: true,
		},
		mainList(){
			this.dataList = this.mainList
		}
	},
	mounted() {
		
	},
	methods: {
		updateList(arr, flog){
			if(!arr) return 
			arr.forEach((item)=>{
				if(item.flog == flog) {
					this.menuItem =  item
				}else {
					console.log(item)
					this.updateList(item.children, flog)
				}
			})

			this.dataList = this.menuItem.children || []
		},
		toTath(item, index){
			if(item.path){
				this.$router.push(item.path)
			}
		}
	},
}
</script>

<style lang="less" scoped>
    .adMeun {
    	width: 200px;
    	background-color: #ececec;
    	min-height: calc(~ '100vh - 200px');
    }
</style>
