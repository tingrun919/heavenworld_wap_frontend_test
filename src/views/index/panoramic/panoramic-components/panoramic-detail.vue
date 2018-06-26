/* * @Author: tarn.tianrun * @Date: 2018-05-07 16:02:33 * @Last Modified by: tarn.tianrun * @Last Modified time: 2018-05-07
16:26:00 */

<style scoped lang="less">
	@import './panoramic-detail.less';
</style>
<template>
	<div class="other-main">
		<div class="v-shadow" v-if="showVideos">
			<img src="../../../../assets/panoramic-img/panoramic-blessing-close.png" @click="closeVideo" width="20" height="20">
		</div>
		<div id="audioBox">
			<!-- <audio id="audioBox" src="http://banaworld.oss-cn-beijing.aliyuncs.com/music/20180329/673277781522325511575.amr" ref="audioTag1" autoplay="autoplay"></audio> -->
		</div>
		<!-- <div class="other-header"> -->
		<!-- <header-child-Comp :title="title" :isblessing="true" :isShowRight="true"></header-child-Comp> -->
		<!-- </div> -->
		<div class="other-content">
			<div id="wrapper" :style="{height:viewHeightPanoramic}">
				<div id="pano"></div>
			</div>
		</div>
		<div class="v-video" v-if="showVideos">
			<video playsinline webkit-playsinline ref="videoTag" controls="controls" :poster="icon" autoplay="autoplay" :width="viewWidthVideo">
				<source :src="videoPath" type="video/mp4" />
			</video>
		</div>
		<div class="v-video" v-if="showVideos">
			<audio :src="audioPath" ref="audioTag"></audio>
		</div>
		<transition name="slide-fade">
			<div class="blessing-display" v-if="handleBlessingAction">
				<div class="blessing-btn">
					<div>
						<img src="../../../../assets/panoramic-img/panoramic-blessing-close1.png" @click="handleCancelComment" width="30" height="30">
					</div>
					<div>
						<img src="../../../../assets/panoramic-img/panoramic-blessing-confirm.png" @click="handleComment" width="30" height="30">
					</div>
				</div>
				<div class="blessing-text" v-bind:style="{backgroundImage: 'url(' + dataSwipe[chioseImg].img + ')'}">
					<div contenteditable ref="divContent" class="blessing-text-enter"></div>
					<!-- @focus="handleEdit" @click="playAudio"  @click="playVideo"-->
					<div class="blessing-other">
						<div class="blessing-other-info" :style="{width:viewWidth}" v-if="showOtherAudio">
							<img src="../../../../assets/panoramic-img/panoramic-blessing-radio.png" width="20" height="20">
							<span>{{audioDuration}}秒</span>
							<div class="bg" v-bind:class="{ voicePlay : playAudioAnimation }"></div>
						</div>
						<div class="blessing-other-info" :style="{width:viewWidth}" v-if="showOtherVideo">
							<img src="../../../../assets/panoramic-img/panoramic-blessing-video.png" width="20" height="20">
							<span>{{videoDuration}}秒</span>
						</div>
						<div class="red blessing-other-info" :style="{width:viewWidth}" v-if="showOtherRed">
							<img src="../../../../assets/panoramic-img/panoramic-blessing-gift.png" width="20" height="20">
							<span>手气红包</span>
						</div>
					</div>
				</div>
				<div class="blessing-action">
					<div><img src="../../../../assets/panoramic-img/panoramic-action-edit1.png" @click="handleFocus" width="25" height="25"></div>
					<div><img src="../../../../assets/panoramic-img/panoramic-action-more1.png" @click="changeModel" width="25" height="25"></div>
					<div><img src="../../../../assets/panoramic-img/panoramic-action-redprice1.png" @click="changeRedenvelope" width="25" height="25"></div>
					<div><img src="../../../../assets/panoramic-img/panoramic-action-voice1.png" @click="changeAudio" width="25" height="25"></div>
					<div><img src="../../../../assets/panoramic-img/panoramic-action-video1.png" @click="changeVideo" width="25" height="25"></div>
				</div>
				<transition name="slide-fade">
					<div class="blessing-model" v-if="showModel">
						<swiper :options="swiperOption">
							<swiper-slide v-for="(item,index) in dataSwipe" :key="item.id" @click.native="choiseModel(index)">
								<img v-bind:class="{ ischiose : index == chioseImg }" :src="item.img" width="100" height="100">
								<span>{{item.name}}</span>
							</swiper-slide>
						</swiper>
					</div>
				</transition>
				<transition name="slide-fade">
					<div class="blessing-red-envelope" v-if="showRedenvelope">
						<div class="red-info">
							<div class="red-info-main">
								<span class="red-info-main-span">红包个数</span>
								<div class="red-change">
									<span>红包金额</span>
									<span @click="changeRed">{{redinfo}}</span>
								</div>
							</div>
							<div class="red-info-submain">
								<mt-field v-model="redQuantity" type="number"></mt-field>
								<mt-field v-model="redNumber" type="number"></mt-field>
							</div>
							<transition name="slide-fade">
								<div class="red-password" v-if="showRedPassword">
									<span class="">口令:</span>
									<mt-field v-model="redCheck"></mt-field>
								</div>
							</transition>
							<div class="red-info-balance">
								<img src="../../../../assets/panoramic-img/panoramic-balance.png" width="25" height="25">
								<span>账户余额:222.24</span>
							</div>
							<div class="red-info-btn">
								<mt-button type="danger" @click="confirmRed">塞进红包</mt-button>
							</div>
						</div>
					</div>
				</transition>
			</div>
		</transition>
		<div class="other-navbar" v-if="!handleBlessingAction">
			<other-Panoramic @handleBlessing="getPanoramicAction" :panoramicinfo="panoramicInfo"></other-Panoramic>
		</div>
		<input type="hidden" id="comment-athv" />
		<input type="hidden" id="blessingDetail" ref="blessingDetail" data-prayid="" />
		<mt-button @click="blessingAction" style="display:none;" id="blessingBtn"></mt-button>
	</div>
</template>

<script>
	import otherPanoramic from '../../../otherLayout/other-components/bottom/other-panoramic.vue';
	import headerChildComp from '../../../otherLayout/other-components/header/other-header.vue';
	import * as panoramic from '../../../../../static/vtour/panoramic.js'
	import img1 from '../../../../assets/view/timg0.jpeg'
	import img2 from '../../../../assets/view/timg2.jpeg'
	import img3 from '../../../../assets/view/timg3.jpeg'
	import img4 from '../../../../assets/view/timg4.jpeg'
	import img5 from '../../../../assets/view/timg5.jpeg'
	import img6 from '../../../../assets/view/timg6.jpeg'
	import img7 from '../../../../assets/view/timg7.jpeg'
	import { Toast } from 'mint-ui';

	import panoramicService from './scrvice/panoramic-detail-service.js'

	export default {
		name: 'vtour',
		mixins: [panoramicService],
		data() {
			return {
				show: false,
				title: '全景',
				handleBlessingAction: false,
				showModel: false,
				showRedenvelope: false,
				showOtherAudio: false,
				showOtherVideo: false,
				showOtherRed: false,
				showVideos: false,
				showRedPassword: false,
				swiperOption: {
					initialSlide: 0,
					slidesPerView: 3.3,
					spaceBetween: 5,
					freeMode: true,
				},
				audioPath: '',
				videoPath: '',
				icon: '',
				audioDuration: '',
				videoDuration: '',
				playAudioAnimation: false,
				chioseImg: 1,
				ath: '',
				redinfo: '手气红包',
				content: '',
				redQuantity: '',
				redNumber: '',
				redCheck: '',
				dataSwipe: [
					{
						id: 1, name: '祈福模版', img: 'https://upload-images.jianshu.io/upload_images/3134274-9686b0a6f66ccff4.jpeg'
					}, {
						id: 2, name: '祈福模版', img: 'https://upload-images.jianshu.io/upload_images/3134274-dbe5da109cfa2389.jpeg'
					}, {
						id: 3, name: '祈福模版', img: 'https://upload-images.jianshu.io/upload_images/3134274-e1cfba899cdddb5f.jpeg'
					}, {
						id: 4, name: '祈福模版', img: 'https://upload-images.jianshu.io/upload_images/3134274-788433c7bb874a1d.jpeg'
					}, {
						id: 5, name: '祈福模版', img: 'https://upload-images.jianshu.io/upload_images/3134274-21c3295a3eb3be6f.jpeg'
					}, {
						id: 6, name: '祈福模版', img: 'https://upload-images.jianshu.io/upload_images/3134274-300bcacca29feed0.jpeg'
					}, {
						id: 7, name: '祈福模版', img: 'https://upload-images.jianshu.io/upload_images/3134274-9b012987f0e41a94.jpeg'
					}
				],
				panoramicInfo: [],
			}
		},
		computed: {
			viewHeight: function () {
				return (window.innerHeight / 3) + 'px'
			},
			viewHeightPanoramic: function () {
				// return (window.innerHeight - 40) + 'px'
				return '100%'
			},
			viewWidth: function () {
				return (window.innerWidth / 3 - 30) + 'px'
			},
			viewWidthVideo: function () {
				return (window.innerWidth) + 'px'
			},
		},
		beforeMount() {
			this.getSinglePanoramic(this.$route.params.id).then(() => {
				this.$store.commit('setPanoramic', this.panoramicInfo);
			})
		},
		mounted() {
			let from = this.$route.query.from
			if (from == 'ios') {
				this.$store.commit('setCurrentPageFromIos', true);
				this.$store.commit('setCurrentPageFromAndroid', false);
			} else if (from == 'android') {
				this.$store.commit('setCurrentPageFromAndroid', true);
				this.$store.commit('setCurrentPageFromIos', false);
			} else {
				this.$store.commit('setCurrentPageFromAndroid', false);
				this.$store.commit('setCurrentPageFromIos', false);
			}
			this.$bridge.registerHandler("resultData", (data) => {
				if (data.type == 'video') {
					this.videoPath = data.path
					this.icon = data.icon
					this.videoDuration = data.duration
					this.showOtherVideo = true
				} else if (data.type == 'voice') {
					this.audioPath = data.path
					this.audioDuration = data.duration
					this.showOtherAudio = true
				}
				// this.showVideos = true;
			})
			this.$bridge.registerHandler("handleMusicPause", () => {
				document.getElementById("audioMusic").pause();
			})

			this.$bridge.registerHandler("handleDoshare", () => {
				this.handleDoshare()
			})

			this.$bridge.registerHandler("toAffiliation", () => {
				this.toAffiliation()
			})
			// embedpano({ swf: "../../../../static/vtour/tour.swf", xml: `../../../../static/vtour/tour${this.$route.params.id}.xml`, target: "pano", html5: "auto", mobilescale: 1.0, passQueryParameters: true });
			embedpano({ swf: "../../../../static/vtour/tour.swf", xml: 'http://39.107.78.100:8080/banaworld_krpano/vshow/11b2347c08bf4968ae75ee17b203c0dd/tour.xml', target: "pano", html5: "auto", mobilescale: 1.0, passQueryParameters: true });
		},
		created() {
			window.handleResultAudio = this.handleResultAudio;
			window.handleResultVideo = this.handleResultVideo;
			window.handleMusicPause = this.handleMusicPause;
			window.handleDoshare = this.handleDoshare;
			window.toAffiliation = this.toAffiliation;
		},
		methods: {
			getPanoramicAction(param) {
				//点击祈福
				if (param == 'blessing') {
					this.handleBlessingAction = !this.handleBlessingAction
					this.showRedenvelope = false;
					this.showModel = false;
					panoramic.show_comment();
				}
			},
			// handleEdit() {
			// 	panoramic.show_comment();
			// },
			changeRed() {
				if (this.redinfo == '手气红包') {
					this.redinfo = "口令红包"
					this.showRedPassword = true
				} else {
					this.redinfo = '手气红包'
					this.showRedPassword = false
				}
			},
			changeModel() {
				this.showModel = !this.showModel
				this.showRedenvelope = false;
			},
			changeRedenvelope() {
				this.showRedenvelope = !this.showRedenvelope
				this.showModel = false;
			},
			choiseModel(index) {
				this.chioseImg = index;
			},
			changeAudio() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('showAudit', {}, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.showVoice();
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			},
			changeVideo() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('showVideo', {}, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.showVideo();
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			},
			playVideo() {
				this.showVideos = true;
				this.$refs.videoTag.play()
			},
			closeVideo() {
				this.$refs.videoTag.currentTime = 0;
				this.$refs.videoTag.pause()
				this.showVideos = false;
			},
			playAudio() {
				if (this.$refs.audioTag.paused) {
					this.playAudioAnimation = true
					this.$refs.audioTag.load()
					this.$refs.audioTag.play()
					setTimeout(() => {
						this.playAudioAnimation = false
					}, this.audioDuration * 1000);
				} else {
					this.playAudioAnimation = false
					this.$refs.audioTag.pause()
				}
			},
			handleComment() {
				var id = this.$route.params.id
				var krpano = document.getElementById('krpanoSWFObject');
				var ath = $("#comment-athv").attr("data-ath")
				var atv = $("#comment-athv").attr("data-atv")
				var sname = krpano.get("scene[get(xml.scene)].name");
				if (this.$refs.divContent.innerText.length >= 140) {
					Toast('最大限制输入为140个字！');
				} else {
					this.handleAddcomment(id, ath, atv, sname, this.dataSwipe[this.chioseImg].img).then(() => {
						this.handleBlessingAction = !this.handleBlessingAction
						this.showRedenvelope = false;
						this.showModel = false;
						panoramic.cancel_comment();
						this.getCommentList(id, sname)
					})
				}
			},
			handleCancelComment() {
				//隐藏祈福功能
				this.getPanoramicAction('blessing')
				//删除小圆点
				panoramic.cancel_comment();
				//取消红包-语音-视频的按钮
				this.showOtherAudio = false
				this.showOtherRed = false
				this.showOtherVideo = false
				//重置已经上传的语音视频的信息

			},
			handleFocus() {
				this.$refs.divContent.focus();
			},
			confirmRed() {
				this.changeRedenvelope();
				this.showOtherRed = true;
			},
			blessingAction() {
				var prayId = $("#blessingDetail").attr("data-prayid");
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('toBlessingDetail', { 'blessingId': `${prayId}` }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.toBlessingDetail(`${prayId}`)
				} else {
					this.$router.push(`/blessingdetail/${prayId}`)
				}
			},
			handleResultAudio(path, duration) {
				this.audioPath = path
				this.audioDuration = duration
				this.showOtherAudio = true
			},
			handleResultVideo(path, duration, icon) {
				this.videoPath = path
				this.icon = icon
				this.videoDuration = duration
				this.showOtherVideo = true
			},
			handleMusicPause() {
				document.getElementById("audioMusic").pause();
			},
			handleDoshare() {
				var krpano = document.getElementById('krpanoSWFObject');
				var s = krpano.get("scene[get(xml.scene)].name");
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('appShare', { 'title': this.panoramicInfo.panoName, 'description': this.panoramicInfo.panoSubtitle, 'url': `http://www.tiantangshijie.com/panoramicView/${this.panoramicInfo.panoId}`, 'param': s }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.doShare(this.panoramicInfo.panoName, this.panoramicInfo.panoSubtitle, `http://www.tiantangshijie.com/panoramicView/${this.panoramicInfo.panoId}`, s);
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			},
			toAffiliation() {
				this.$router.push({
					name: 'affiliation_view'
				});
			}
		},
		components: {
			headerChildComp,
			otherPanoramic
		}
	}
</script>

<style scoped>
	#wrapper {
		width: 100%;
		position: absolute;
	}

	#pano {
		width: 100%;
		height: 100%;
	}

	.img_btn {
		width: 60px;
		height: 60px;
		position: absolute;
		top: 10px;
		right: 6px;
		z-index: 4010;
	}

	.showUp {
		animation: showup 0.4s ease-in;
	}

	.hideDown {
		animation: hidedown 0.4s ease-out;
	}

	@keyframes showup {
		from {
			transform: translateY(110%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes hidedown {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(110%);
		}
	}

	.vrshow_comment {
		position: absolute;
		bottom: 10%;
		left: 50%;
		margin-left: -200px;
		width: 400px;
		min-height: 100px;
		background-color: rgba(51, 51, 51, 0.8);
		z-index: 4300;
		color: #fff;
		border-radius: 5px;
		display: none;
	}

	@media screen and (max-width: 767px) {
		.vrshow_comment {
			width: 250px;
			margin-left: -125px;
		}
	}
</style>