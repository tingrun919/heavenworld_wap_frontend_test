/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-23 15:50:10 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-03-20 21:43:00
 */
<style lang="less">
	@import './follow.less';
</style>
<template>
	<div class="follow-list-main" :style="{height:viewHeight}">
		<div class="nav">
			<span @click="active = 'tab-container1'" v-bind:class="{select : active === 'tab-container1'}">我关注的人</span>
			<span @click="active = 'tab-container2'" v-bind:class="{select : active === 'tab-container2'}">关注我的人</span>
			<span @click="active = 'tab-container3'" v-bind:class="{select : active === 'tab-container3'}">我拉黑的人</span>
		</div>
		<scroll ref="scroll" :scrollY="freeScroll" :scrollbar="scrollbar" :mouseWheel="mouseWheel">
			<mt-tab-container v-model="active" swipeable>
				<mt-tab-container-item id="tab-container1">
					<div class="follow-info" v-for="n in 15" :key="n">
						<div class="follow-left">
							<div class="follow-left-img">
								<img src="../../../assets/mine-icon/mine-custom.png" width="30" height="30">
							</div>
							<div class="follow-left-info">
								<p>用户昵称</p>
								<span>用户签名</span>
							</div>
						</div>
						<div class="follow-right">
							<span>互相关注</span>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container2">
					<div class="follow-info" v-for="n in 7" :key="n">
						<div class="follow-left">
							<div class="follow-left-img">
								<img src="../../../assets/mine-icon/mine-custom.png" width="30" height="30">
							</div>
							<div class="follow-left-info">
								<p>用户昵称</p>
								<span>用户签名</span>
							</div>
						</div>
						<div class="follow-right">
							<span>互相关注</span>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container3">
					<div class="follow-info" v-for="n in 4" :key="n">
						<div class="follow-left">
							<div class="follow-left-img">
								<img src="../../../assets/mine-icon/mine-custom.png" width="30" height="30">
							</div>
							<div class="follow-left-info">
								<p>用户昵称</p>
								<span>用户签名</span>
							</div>
						</div>
						<div class="follow-right">
							<span>互相关注</span>
						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
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
				return (window.innerHeight - 38) + 'px'
			},
		},
		data() {
			return {
				active: 'tab-container1',
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