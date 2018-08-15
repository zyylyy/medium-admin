<template>
	<div id="app">
		<!-- 视图页面 -->
		<keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script type="text/babel">
export default {
	data(){
		return {

		}
	},
	mounted(){},
}
</script>
<style >
    #app {
        position: relative;
        height: 100%;
    }
</style>