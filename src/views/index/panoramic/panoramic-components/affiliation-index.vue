<style scoped lang="less">
	@import './affiliation-less.less';
</style>
<template>
	<div class="affiliation-list-main" :style="{height:viewHeight}">
		<!-- <div class="other-header">
			<header-child-Comp :title="title1" :isblessing="true" :isShowRight="false" :isShowRightMore="false"></header-child-Comp>
		</div> -->
		<scroll ref="scroll" :scrollY="freeScroll" :scrollbar="scrollbar" :mouseWheel="mouseWheel">
			<div class="advertising-img" @click="toAdvertising" v-bind:style="{backgroundImage: 'url(' + img + ')',height:viewHeightAdvertising}">
				<!-- <p>广告位文本限制一行</p> -->
			</div>
			<div class="score-main" v-for="n in 30" :key="n">
				<div class="score-main-left">
					<span>{{n}}</span>
					<img src="../../../../assets/mine-icon/mine-custom.png" width="25" height="25">
					<span>释星云</span>
				</div>
				<div class="score-main-right">
					<span>{{Math.floor(Math.random() * (10-0) + 0)*1000,}}</span>
					<div class="score-main-right-title">
						<span>1.2w</span>
						<img src="../../../../assets/score-img/heart-in.png" width="15" height="15">
					</div>
				</div>
			</div>
		</scroll>
	</div>
</template>
<script>
	import Scroll from '../../../index/scroll/scroll.vue'
	import headerChildComp from '../../../otherLayout/other-components/header/other-header.vue';
	import { MessageBox } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import img2 from '../../../../assets/view/timg8.jpg'

	export default {
		components: {
			Scroll,
			headerChildComp,
		},
		computed: {
			viewHeight: function () {
				return (window.innerHeight) + 'px'
			},
			viewHeightAdvertising: function () {
				// return (window.innerHeight / 5) + 'px'
				return 200 + 'px'
			},
		},
		mounted() {

		},
		beforeMount() {

		},
		watch: {

		},
		data() {
			return {
				freeScroll: true,
				scrollbar: {
					fade: true,
					interactive: false
				},
				mouseWheel: true,
				title1: '我的结缘榜',
				img: img2,
			}
		},
		methods: {
			toAdvertising(){
				this.$router.push({
					name: 'advertising_view'
				});
			}
		}
	}
</script>