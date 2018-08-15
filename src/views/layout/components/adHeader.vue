<template>
	<div class="adHeader">
		<div class="nav">
			<span 
			  v-for="item in menulits" 
			  @click="checkTabs(item, index)">{{ item.title }}</span>
		</div>
	</div>
</template>

<script  type="text/babel">

import menulits from '../../../static/meun.json'

export default {
	name: 'adHeader',
	components: {

	},
	data() {
		return {
			menulits
		}
	},
	watch: {

	},
	methods: {
		checkTabs(item){
			sessionStorage.setItem('headFlog', item.flog)
			this.$emit('checkTabs', item)
		},
	},
	mounted() {
		
	},
}
</script>

<style lang="less" scoped>
	.adHeader {
		height: 50px;
		line-height: 50px;
		background-color: #f7f7f7;
		.nav {
			display: flex;
			height: 50px;
            align-items:center;
			span {
				margin-left: 10px;
				width: 80px;
				line-height: 35px;
				text-align: center;
				height: 35px;
				background: #DBEFDB;
			}
		}
	}
</style>
