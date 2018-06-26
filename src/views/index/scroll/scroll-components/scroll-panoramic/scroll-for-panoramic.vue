/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-07 16:26:21 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-03-12 14:40:10
 */

<style scoped lang="less">
	@import './scroll-for-panoramic.less';
</style>
<template>
	<div class="scroll-content-img">
		<img v-lazy="item.panoMainpic" width="100" height="100">
		<div class="scroll-content-info">
			<p>{{item.panoTitle}}</p>
			<div class="scroll-content-info-span">
				<span>{{item.province}}·{{item.city}}</span>
			</div>
			<div class="scroll-content-info-span">
				<span>{{item.prayCount}}人祈福</span>
			</div>
		</div>
		<div class="scroll-content-right">
			<span>{{item.typeName}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		beforeMount(){
			this.$Lazyload.config({ error: '../../../../../../static/picture.png' })
		},
		props: {
			item: {
				type: Object,
			},
		}
	}
</script>