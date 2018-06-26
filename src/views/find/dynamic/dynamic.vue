<style scoped lang="less">
		@import './dynamic.less';
	</style>
	<template>
		<div class="scroll-list-wrap" :style="{height:viewHeight}" slot="demo">
			<scroll ref="scroll" :data="items" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj"
			 :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp" @click="clickItem">
			</scroll>
		</div>
	</template>
	<script>
		import Scroll from '../../index/scroll/scroll.vue'
		export default {
			components: {
				Scroll,
			},
			data() {
				return {
					scrollbar: true,
					scrollbarFade: true,
					pullDownRefresh: true,
					pullDownRefreshThreshold: 90,
					pullDownRefreshStop: 40,
					pullUpLoad: true,
					pullUpLoadThreshold: 0,
					pullUpLoadMoreTxt: '加载更多',
					pullUpLoadNoMoreTxt: '没有更多数据了',
					startY: 0,
					scrollToX: 0,
					scrollToY: -200,
					scrollToTime: 700,
					scrollToEasing: 'bounce',
					scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
					items: [],
					itemIndex: 0
				}
			},
			created() {
				this.items = this.tabType
			},
			watch: {
				tabType() {
					this.items = this.tabType
				},
				scrollbarObj: {
					handler() {
						this.rebuildScroll()
					},
					deep: true
				},
				pullDownRefreshObj: {
					handler() {
						this.rebuildScroll()
					},
					deep: true
				},
				pullUpLoadObj: {
					handler() {
						this.rebuildScroll()
					},
					deep: true
				},
				startY() {
					this.rebuildScroll()
				}
			},
			computed: {
				viewHeight: function () {
					return (window.innerHeight - 35) + 'px'
				},
				scrollbarObj: function () {
					return this.scrollbar ? { fade: this.scrollbarFade } : false
				},
				pullDownRefreshObj: function () {
					return this.pullDownRefresh ? {
						threshold: parseInt(this.pullDownRefreshThreshold),
						stop: parseInt(this.pullDownRefreshStop)
					} : false
				},
				pullUpLoadObj: function () {
					return this.pullUpLoad ? {
						threshold: parseInt(this.pullUpLoadThreshold),
						txt: { more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt }
					} : false
				},
				tabType: function () {
					var resultList = []
					for (var i = 0; i < 6; i++) {
						var item = {
							isPic: i,
							bavbar: this.$store.state.app.currentPageName,
						}
						resultList.push(item);
					}
					return resultList;
				}
			},
			methods: {
				onPullingDown() {
					// 模拟更新数据
					console.log('pulling down and load data')
					setTimeout(() => {
						if (this._isDestroyed) {
							return
						}
						var random = Math.random();
						console.log(random, 'random data')
						if (random > 0.5) {
							// 如果有新数据
							for (let i = 0; i < 3; i++) {
								var item = {
									isPic: i,
									bavbar: this.$store.state.app.currentPageName,
								}
								this.items.unshift(item);
							}
						} else {
							// 如果没有新数据
							this.$refs.scroll.forceUpdate()
						}
					}, 2000)
				},
				onPullingUp() {
					// 更新数据
					console.log('pulling up and load data')
					setTimeout(() => {
						if (this._isDestroyed) {
							return
						}
						var random = Math.random();
						console.log(random, 'random data')
						if (random > 0.5) {
							// 如果有新数据
							this.items = this.items.concat(this.tabType)
						} else {
							// 如果没有新数据
							this.$refs.scroll.forceUpdate()
						}
					}, 1500)
				},
				clickItem() {
					this.$router.push({
						name: 'panoramicView'
					});
				},
			}
		}
	</script>