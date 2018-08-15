<template>
	<div class="adAside">
		<el-row>
			<el-col :span="24">
				<span style="background: #ee5e54;">icon</span>
			</el-col>
		</el-row>

		<el-row v-for="(item, index) in dataList" style="margin-top: 10px;">
			<el-col :span="24">
				<span @click="checkAside(item, index)">{{ item.title }}</span>
			</el-col>
		</el-row>
	</div>
</template>

<script  type="text/babel">

import menulits from '../../../static/meun.json'

export default {
	name: 'adAside',
	props:{
		asideList:{
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
		asideList(){
			this.dataList = this.asideList
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
					this.updateList(item.children, flog)
				}
			})
			this.dataList = this.menuItem.children || []
		},
		checkAside(item){
			sessionStorage.setItem('asideFlog', item.flog)
			if(item.path){
				this.$router.push(item.path)
			}else {
				this.$emit('checkAside', item)
			}
			
		}
	},
}
</script>

<style lang="less" scoped>
    .adAside {
    	width: 80px;
    	background-color: #414855;
    	span {
    		font-size: 12px;
    		text-align: center;
    		display: inline-block;
    		width: 80px;
    		height: 60px;
    		line-height: 60px;
    		background: #6f8a7f;
    		color: #fff;
    	}
    }
</style>
