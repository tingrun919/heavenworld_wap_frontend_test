/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-24 10:39:27 
 * @Last Modified by:   tarn.tianrun 
 * @Last Modified time: 2018-02-24 10:39:27 
 */

<style scoped lang="less">
	@import './topic.less';
</style>
<template>
	<div class="topic-list-main" :style="{height:viewHeight}">
		<scroll ref="scroll" :scrollY="freeScroll" :scrollbar="scrollbar" :mouseWheel="mouseWheel">
			<div class="topic-info" v-for="i in 8" :key="i">
				<div class="topic-left">
					<p>浙江普陀山</p>
					<span>测试用户</span> <br>
					<span>话题</span>
				</div>
				<div class="topic-center">
					<span>888人浏览</span>
				</div>
				<div class="topic-right">
					<img src="../../../../static/vtour/panos/hongkong.tiles/thumb.jpg" width="120" height="120">
				</div>
			</div>
		</scroll>
	</div>
</template>
<script>
	import Scroll from '../../index/scroll/scroll.vue'
	export default {
		components: {
			Scroll,
		},
		computed: {
			viewHeight: function () {
				return (window.innerHeight - 42) + 'px'
			},
		},
		data() {
			return {
				freeScroll: true,
				mouseWheel: true,
				scrollbar: {
					fade: true,
					interactive: false
				},
			}
		}
	}
</script>