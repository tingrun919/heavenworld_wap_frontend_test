/*
 * @Author: tarn.tianrun 
 * @Date: 2018-03-21 13:53:50 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-04-16 11:34:06
 */

<style scoped lang="less">
	@import './information-comment.less';
</style>
<style>
	.mint-cell-value>textarea {
		/* background-color: rgba(213, 213, 213, .6); */
	}

	.mint-field.is-textarea .mint-cell-value {
		margin-bottom: 10px;
		padding: 5px;
		border: 1px solid #888888;
		border-radius: 4px;
	}
</style>
<template>
	<div class="scroll-list-wrap" :style="{height:viewHeight}" slot="demo">
		<scroll ref="scroll" v-if="items.length > 0" :data="items" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj"
		 :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)" @push="clickItem" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
		</scroll>
		<div class="blessing-messages-list-nodata" v-if="items.length <= 0">
			<img src="../../../assets/nodata.png" :width="viewHeightImgNodata" :height="viewHeightImgNodata">
		</div>
		<img class="img-comment" @click="handleComment" src="../../../assets/panoramic-img/panoramic-action-edit.png" width="50"
		 height="50">
		<mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
			<div class="detail-btn">
				<mt-button type="default" size="small" @click.native="handleCancelComment">取消</mt-button>
				<mt-button type="primary" size="small" @click.native="handleCommentApi">评论</mt-button>
			</div>
			<mt-field placeholder="请输入评论内容" type="textarea" :attr="{ maxlength: 140 }" rows="6" v-model="introduction"></mt-field>
		</mt-popup>
	</div>
</template>
<script>
	import Scroll from '../../index/scroll/scroll.vue'
	import informationCommentService from '../service/informationCommentService.js'
	import { MessageBox } from 'mint-ui';
	import { Toast } from 'mint-ui';
	export default {
		mixins: [informationCommentService],
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
				itemIndex: 0,
				popupVisible: false,
				commentId: '',
				commentType: '',
				introduction: '',
			}
		},
		created() {
			// this.items = this.tabType
		},
		beforeMount() {
			this.getInformationCommentList(this.$route.params.id)
		},
		watch: {
			// tabType() {
			// 	this.items = this.tabType
			// },
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
			},
			popupVisible() {
				if (this.popupVisible == false) {
					this.introduction = ''
				}
			}
		},
		computed: {
			viewHeight: function () {
				return (window.innerHeight) + 'px'
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
			viewHeightImgNodata: function () {
				return window.innerHeight / 3
			},
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
			//type：1 -> 评论
			//type：2 -> 回复
			clickItem(param) {
				if (param[0] == 'name') {

				} else {
					this.popupVisible = true
					this.commentId = param[1]
					this.commentType = 1
				}
			},
			//取消评论，清空model
			handleCancelComment() {
				this.popupVisible = false
			},
			handleComment() {
				this.popupVisible = true
				this.commentId = 0
				this.commentType = 0
			},
			handleCommentApi() {
				this.addComment('21232f297a57a5a743894a0e4a801fc55', this.$route.params.id, this.commentType == 1 ? this.commentId : 0, this.introduction, this.commentType).then(res => {
					this.handleCancelComment()
					MessageBox.alert('提示', res.data.code == 100000 ? '评论成功!' : '评论失败!请联系系统管理员!').then(() => {
						this.getInformationCommentList(this.$route.params.id)
					})
				})
			}
		}
	}
</script>