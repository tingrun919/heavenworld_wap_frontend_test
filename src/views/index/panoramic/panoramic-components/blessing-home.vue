/*
 * @Author: tarn.tianrun 
 * @Date: 2018-04-16 11:25:03 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-05-16 15:07:17
 */


<style scoped lang="less">
	@import './blessing-home.less';
</style>
<style>
	.mint-swipe-indicators {
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		text-align: right;
		padding-right: 20px;
		bottom: 1px;
	}

	.mint-swipe-indicator {
		height: 6px;
		width: 6px;
		margin: 0 8px 6px 8px;
		background: #ffffff;
		opacity: 1;
		bottom: 1px;
	}

	.mint-swipe-indicator.is-active {
		background: #FF6600;
		opacity: 1;
	}
	.mint-field.is-textarea .mint-cell-value {
		margin-bottom: 10px;
		padding: 5px;
		border: 1px solid #888888;
		border-radius: 4px;
	}
</style>
<template>
	<div style="width:100%;height:100%;">
		<scroll ref="scroll" :scrollY="freeScroll" :scrollbar="scrollbar" :mouseWheel="mouseWheel">
			<!-- <mt-header class="headerActive">
				<img slot="left" src="../../../../assets/panoramic-img/panoramic-blessing-back.png" width="23" height="23" @click="toPanoramic">
				<img slot="right" src="../../../../assets/panoramic-img/panoramic-blessing-more.png" width="20" height="20" @click="sheetVisible = true">
			</mt-header> -->
			<div class="blessing-home">
				<div class="page-swipe">
					<mt-swipe :auto="0">
						<mt-swipe-item class="slide-img" v-for="src in panoPicture" :key="src" v-bind:style="{backgroundImage: 'url(' + src + ')'}">
							<!-- <img :src="src" alt=""> -->
						</mt-swipe-item>
						<!-- <mt-swipe-item class="slide2">2</mt-swipe-item> -->
						<!-- <mt-swipe-item class="slide3">3</mt-swipe-item> -->
					</mt-swipe>
				</div>
				<div class="blessing-bio">
					<span>{{resultData.panoTitle}}——{{resultData.panoAddress}}</span>
					<div class="blessing-subtitle">
						<span>{{resultData.panoSubtitle}}——{{resultData.panoAddress}}</span>
					</div>
				</div>
				<div class="blessing-map" @click="map">
					<img src="../../../../assets/panoramic-img/panoramic-blessing-map.png" width="15" height="15">
					<span>地理位置 {{resultData.panoAddress}}</span>
					<img src="../../../../assets/panoramic-img/panoramic-goto.png" width="15" height="15">
				</div>
				<div class="blessing-person">
					<div class="blessing-person-contents">
						<div class="blessing-red-point"></div>
						<div class="blessing-person-title">
							<span>相关人物</span>
						</div>
					</div>
					<div class="blessing-swiper">
						<swiper :options="swiperOption">
							<swiper-slide v-for="(item,index) in resultPerson" :key="item.per_id" @click.native="">
								<img src="../../../../assets/bottom-bar-icon/mine-in.png" width="50" height="50">
								<p>{{item.per_usertype == 1 ? item.staff_nickname : item.per_username}}</p>
							</swiper-slide>
						</swiper>
					</div>
				</div>
				<div class="blessing-scenes">
					<div class="blessing-person-contents">
						<div class="blessing-red-point"></div>
						<div class="blessing-person-title">
							<span>场景介绍</span>
						</div>
					</div>
					<div class="free-scroll-container">
						<div class="blessing-content">
							<div v-html="resultData.panoContent"></div>
						</div>
					</div>
				</div>
				<div class="blessing-messages">
					<div class="blessing-person-content">
						<div class="blessing-person-title">
							<div class="blessing-red-point"></div>
							<span>用户留言</span>
						</div>
						<div @click="handleReplyComment(0, 1)">
							<img src="../../../../assets/panoramic-img/panoramic-action-edit.png" width="18" height="18">
							<span>写评论</span>
						</div>
					</div>
					<div class="blessing-messages-list-nodata" v-if="commentList.length <= 0">
						<img src="../../../../assets/nodata.png" :width="viewHeightImgNodata" :height="viewHeightImgNodata">
					</div>
					<div class="blessing-messages-list" v-for="item in commentList" v-else>
						<div class="user-info">
							<div class="user-info-left">
								<img v-lazy="item.staffPortrait1" width="25" height="25" @click="handlePush(item.cStaffid)">
								<span @click="handlePush(item.cStaffid)">{{item.staffNickname}}:</span>
							</div>
							<div class="user-info-right">
								<span>{{item.cTime | moment}}</span>
							</div>
						</div>
						<div class="message-detail">
							<span v-if="item.pId" style="color:#3399FF;">@</span>
							<span v-if="item.pId" style="color:#3399FF;" @click="handlePush(item.pStaffid)">{{item.staffNickname1}}:</span>
							<span>
								{{item.cContent}}
							</span>
						</div>
						<div class="message-reply">
							<span @click="handleReplyComment(item.cId, 2)">回应</span>
						</div>
					</div>
					<div class="messages-loading-more" v-if="commentList.length > 0">
						<span @click="handleMoreComment">加载更多留言</span>
					</div>
				</div>
			</div>
		</scroll>
		<mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
			<div class="detail-btn">
				<mt-button type="default" size="small" @click.native="handleCancelComment">取消</mt-button>
				<mt-button type="primary" size="small" @click.native="handleComment">评论</mt-button>
			</div>
			<mt-field placeholder="请输入评论内容" type="textarea" :attr="{ maxlength: 140 }" rows="6" v-model="introduction"></mt-field>
		</mt-popup>
		<mt-actionsheet :actions="actions" v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>
<script>
	import Scroll from '../../scroll/scroll.vue'
	import blessingHomeService from './scrvice/blessing-home-service'
	import { MessageBox } from 'mint-ui';
	import { Toast } from 'mint-ui';

	export default {
		mixins: [blessingHomeService],
		data() {
			return {
				msgObj: '',
				swiperOption: {
					initialSlide: 0,
					slidesPerView: 4,
					spaceBetween: 20,
					// freeMode: true,
					roundLengths: true,
					slidesOffsetBefore: 10,
				},
				freeScroll: true,
				scrollbar: {
					fade: true,
					interactive: false
				},
				mouseWheel: true,
				actions: [],
				popupVisible: false,
				resultData: [],
				commentList: [],
				commentType: 1,
				commentId: '',
				resultPerson: [],
				sheetVisible: false,
				panoPicture: [],
				introduction: '',
			}
		},
		computed: {
			viewHeightImgNodata: function () {
				return window.innerHeight / 3
			},
		},
		mounted() {
			// let from = this.$route.query.from
			// if (from == 'ios') {
			// 	this.$store.commit('setCurrentPageFromIos', true);
			// 	this.$store.commit('setCurrentPageFromAndroid', false);
			// } else if (from == 'android') {
			// 	this.$store.commit('setCurrentPageFromAndroid', true);
			// 	this.$store.commit('setCurrentPageFromIos', false);
			// } else {
			// 	this.$store.commit('setCurrentPageFromAndroid', false);
			// 	this.$store.commit('setCurrentPageFromIos', false);
			// }
			this.actions = [{
				name: "场景首页",
				method: this.toPanoramic
			},
			{
				name: "分享",
				method: this.share
			},
			{
				name: "进入商城",
				method: this.toPanoramic
			}
			]
		},
		watch: {
			popupVisible() {
				if (this.popupVisible == false) {
					this.introduction = ''
				}
			}
		},
		beforeMount() {
			//获取全景信息
			this.getSinglePanoramic(this.$route.params.id)
			//获取全景评论列表
			this.getSinglePanoramicCommentList(this.$route.params.id, 0, '', 5)
			//获取相关人员
			this.getSinglePerson(this.$route.params.id)
			this.$Lazyload.config({ error: '../../../../../static/userIcon2@3x.png' })
		},
		methods: {
			//退回到全景
			toPanoramic() {
				// let argu = { id: this.$route.params.id };
				// let args = { from: this.$store.state.app.currentPageFromIos ? 'ios' : this.$store.state.app.currentPageFromAndroid ? 'android' : '' }
				// this.$router.push({
				// 	name: 'panoramicView',
				// 	params: argu,
				// 	query: args,
				// });
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('checkUrl', { 'url': `${this.$route.path}` }, (data) => {
						if (data == 1) {
							this.$router.go(-1)
						}
					})
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.callBack();
				} else {
					this.$router.go(-1)
				}
			},
			//打开评论窗口
			//type：1 -> 评论
			//type：2 -> 回复
			handleReplyComment(id, type) {
				this.popupVisible = true
				this.commentId = id
				this.commentType = type
			},
			//添加评论，回复评论
			handleComment() {
				this.addComment('21232f297a57a5a743894a0e4a801fc55', this.$route.params.id, this.commentId, this.introduction, this.commentType).then(res => {
					this.handleCancelComment()
					MessageBox.alert('提示', res.data.code == 100000 ? '评论成功!' : '评论失败!请联系系统管理员!').then(() => {
						this.getSinglePanoramicCommentList(this.$route.params.id, 0, '', 5)
					})
				})
			},
			//取消评论，清空model
			handleCancelComment() {
				this.popupVisible = false
			},
			//加载更多评论
			handleMoreComment() {
				this.getMoreComment(this.$route.params.id, this.commentList[this.commentList.length - 1].cId, '', 5).then(res => {
					if (res.data.data.length > 0) {
						res.data.data.forEach(item => {
							this.commentList.push(item)
						});
					} else {
						MessageBox('提示', '已经显示所有的评论啦！')
					}
				})
			},
			//导航
			map() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('navigation', { 'title': this.resultData.panoAddress, 'longitude': this.resultData.panoLongitude, 'dimension': this.resultData.panoDimension }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.navigation(this.resultData.panoAddress, this.resultData.panoLongitude, this.resultData.panoDimension);
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			},
			//分享
			share() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('appShare', { 'title': this.resultData.panoName, 'description': this.resultData.panoSubtitle, 'url': `http://www.tiantangshijie.com/panoramicView/${this.resultData.panoId}` }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.doShare(this.resultData.panoName, this.resultData.panoSubtitle, `http://www.tiantangshijie.com/panoramicView/${this.resultData.panoId}`);
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			},
			//跳转到个人中心
			handlePush(id) {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('handlePush', { 'to': 'otherUserCenter', 'id': `${id}` }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					// android.showVideo();
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			}
		},
		components: {
			Scroll
		}

	}
</script>