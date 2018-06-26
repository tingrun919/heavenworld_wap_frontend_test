<style scoped lang="less">
	@import './scroll-for-dynamic.less';
</style>
<template>
	<div class="scroll-information-img">
		<div class="info">
			<img src="../../../../../assets/mine-icon/mine-custom.png" width="40" height="40">
			<div class="info-user">
				<p>测试用户</p>
				<div class="info-q">
					<span>评论了话题</span>
					<span v-if="item.isPic == 0">中国佛学的兴起与发展</span>
				</div>
			</div>
		</div>
		<div class="information-commentText" v-if="item.isPic == 0">副标题限制两行副标题限制两行副标题限制两行副标题限制两行副标题限制两行副 标题限制两行副标题限制两行副标题限制两行副标题限制两行
		</div>
		<div class="information-title" v-if="item.isPic == 1 || item.isPic == 2 || item.isPic == 3">标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行</div>
		<div class="information-subtitle" v-if="item.isPic == 1">副标题限制两行副标题限制两行副标题限制两行副标题限制两行副标题限制两行副 标题限制两行副标题限制两行副标题限制两行副标题限制两行
		</div>
		<div v-if="item.isPic == 2" style="text-align:center;">
			<img src="../../../../../assets/test-img/fo1.jpg" :style="{height:viewHeight,width:viewHeight}">
			<img src="../../../../../assets/test-img/fo3.jpg" :style="{height:viewHeight,width:viewHeight}">
			<img src="../../../../../assets/test-img/fo2.jpg" :style="{height:viewHeight,width:viewHeight}">
		</div>
		<div v-if="item.isPic == 3">
			<img src="../../../../../assets/test-img/allfo.jpg" :style="{height:oneImgviewHeight,width:oneImgviewHeight}">
		</div>
		<div class="information-classroom" v-if="item.isPic == 4">
			<div class="classroom">
				<p>讲座：中国佛学的兴起与发展。中国佛学的兴起于发展。</p>
				<span>11月15日开始 999人参与</span>
			</div>
			<div>
				<img src="../../../../../assets/mine-icon/mine-custom.png" width="40" height="40">
				<div class="classroom-img">
					<span>XX大师</span> <br>
					<span>普陀山</span>
				</div>
			</div>
		</div>
		<div v-if="item.isPic == 5">
			<scroll-For-Panoramic :item='item'></scroll-For-Panoramic>
		</div>
		<div class="information-comment">
			<span>123赞</span>
			<span>123评论</span>
			<div class="information-comment-right">
				<span>板块名</span>
			</div>
		</div>
	</div>
</template>
<script>
	import scrollForPanoramic from '../scroll-panoramic/scroll-for-panoramic.vue'
	export default {
		computed: {
			viewHeight() {
				// return (window.innerWidth / 3) - 15 + 'px'
				return (window.innerWidth - 33) / 3 + 'px'
			},
			oneImgviewHeight() {
				return window.innerWidth - 20 + 'px'
			}
		},
		props: {
			item: {
				isPic: Object,
			},
		},
		components: {
			scrollForPanoramic
		}
	}
</script>