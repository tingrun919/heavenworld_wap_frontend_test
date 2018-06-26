/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-26 15:18:53 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-03-20 21:49:03
 */

<style scoped lang="less">
	@import './detail.less';
</style>
<template>
	<div class="detail-list-main" :style="{height:viewHeight}">
		<scroll ref="scroll" :scrollY="freeScroll" :scrollbar="scrollbar" :mouseWheel="mouseWheel">
			<div class="detail-info" v-for="n in 15" :key="n">
				<div class="detail-left">
					<p>将余额提取到现金</p>
					<span>¥100.00</span>
				</div>
				<div class="detail-right">
					<span>2017.11.15</span>
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
					return (window.innerHeight - 41) + 'px'
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