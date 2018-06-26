/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-26 15:18:59 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-04-04 17:14:05
 */

<style scoped lang="less">
	@import './score.less';
</style>
<template>
	<div class="score-list-main" :style="{height:viewHeight}">
		<scroll ref="scroll" :scrollY="freeScroll" :scrollbar="scrollbar" :mouseWheel="mouseWheel">
			<div class="score-top">
				<img src="../../../assets/test-img/timg.jpeg" width="100%">
				<div class="score-top-info">
					<div>
						<span>当前福报分</span>
					</div>
					<div>
						<span>4342</span>
					</div>
					<div>
						<span @click="toBalance">转为余额</span>
					</div>
				</div>
			</div>
			<div class="score-main" v-for="n in 10" :key="n">
				<div class="score-main-left">
					<span>{{n}}</span>
					<img src="../../../assets/mine-icon/mine-custom.png" width="40" height="40">
					<span>测试用户昵称</span>
				</div>
				<div class="score-main-right">
					<span>123123</span>
					<div class="score-main-right-title">
						<span>1.1k</span>
						<img src="../../../assets/score-img/heart-in.png" width="15" height="15">
					</div>
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
		},
		methods: {
			toBalance(){
				this.$router.push({
						name: 'scoreBalance_view'
					});
			}
		}
	}
</script>