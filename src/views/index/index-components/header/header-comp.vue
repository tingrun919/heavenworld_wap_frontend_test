/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-07 16:26:08 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-03-20 22:05:01
 */

<style scoped lang="less">
	@import "./header-comp.less";
</style>
<template>
	<mt-header :title="isDefauleHeader ? '搜索您感兴趣的内容': this.$route.name == 'find' ? '发现' : '我的'" v-bind:class="{ headerActive: !isDefauleHeader }">
		<div slot="left" class="header-title" v-if="isDefauleHeader">
			<!-- <span>天堂</span><br>
			<span class="header-title-item">大</span>
			<span>世界</span> -->
			<img src="../../../../assets/logo.png" width="40" height="40">
		</div>
		<mt-button slot="right">
			    <img slot="icon" class="header-icon" src="../../../../assets/header-icon/index-messages.png">
		</mt-button>
	</mt-header>
</template>
<script>
	export default {
		name:'headers',
		props:{
			isDefauleHeader:Boolean,
		},
	}
</script>