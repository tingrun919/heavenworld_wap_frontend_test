<style scoped lang="less">
	@import './information-detail.less';
</style>
<style>
	.information-content {
		padding: 0 12px;
		line-height: 2;
	}

	.information-content img {
		width: 100%;
		height: auto;
	}
</style>
<template>
	<!-- <scroll ref="scroll" :scrollY="freeScroll" :scrollbar="scrollbar" :mouseWheel="mouseWheel" :style="{height:viewHeight}"> -->
		<div class="information-detail-main" :style="{height:viewHeight}">
			<div class="v-video" v-if="showVideos">
				<video playsinline webkit-playsinline ref="videoTag" controls="controls" :poster="resultData.infoMainpic" autoplay="autoplay"
				 :width="viewWidthVideo">
					<source :src="resultData.infoVideo" type="video/mp4" />
				</video>
			</div>
			<div class="info-infomation">
				<div class="user-info">
					<div class="info-left">
						<!-- <img v-lazy="resultData.staffPortrait" width="40" height="40"> -->
						<div class="info-header-img" v-bind:style="{backgroundImage: 'url(' + resultData.staffPortrait + ')'}"></div>
						<!-- <img src="../../../assets/mine-icon/mine-custom.png" width="20" height="20"> -->
						<span>{{resultData.staffNickname}} ({{resultData.staffType}})</span>
					</div>
					<div class="info-right">
						<span>发表于{{resultData.infoCreatdate | moment}}</span>
					</div>
				</div>
				<div class="info-title">
					<p v-bind:style="{fontSize: fontSize + 'px'}">{{resultData.infoTitle}}</p>
				</div>
				<div class="info-subtitle info-font" v-bind:style="{fontSize: fontSize-2 + 'px'}">
					<span>{{resultData.infoSubtitle}}</span>
				</div>
			</div>
			<div class="content-infomation">
				<div v-html="resultData.infoContent" class="information-content" v-bind:style="{fontSize: fontSize + 'px'}"></div>
				<div class="content-icon">
					<img src="../../../assets/information-img/read.png" width="20" height="20">
				</div>
				<div class="content-read">
					<span>{{resultData.infoReadnum}}
						<span v-if="resultData.infoReadnum > 1000">+</span>阅读</span>
				</div>
			</div>
		</div>
	<!-- </scroll> -->
</template>

<script>
	import informationDetailService from './information-detail-service/information-detail-service.js'
	import Scroll from '../../index/scroll/scroll.vue'
	import { Indicator } from 'mint-ui';

	export default {
		mixins: [informationDetailService],
		components: {
			//otherBottom
			Scroll
		},
		computed: {
			viewHeight: function () {
				return (window.innerHeight - 45) + 'px'
			},
			viewWidthVideo: function () {
				return (window.innerWidth) + 'px'
			},
		},
		mounted() {
			let from = this.$route.query.from
			if (from == 'ios') {
				this.$store.commit('setCurrentPageFromIos', true);
				this.$store.commit('setCurrentPageFromAndroid', false);
				this.$bridge.callHandler('hasToken', {}, (data) => {
					this.$store.commit('setUserToken', data.token);
					this.$store.commit('setUserId', data.userId);
					this.fontSize = data.fontSize
				})
			} else if (from == 'android') {
				this.$store.commit('setCurrentPageFromAndroid', true);
				this.$store.commit('setCurrentPageFromIos', false);
			} else {
				this.$store.commit('setCurrentPageFromAndroid', false);
				this.$store.commit('setCurrentPageFromIos', false);
			}
		},
		beforeMount() {
			Indicator.open('加载中...');
			this.getInformationDetail(this.$route.params.id, this.$store.state.app.userToken, ).then(() => {
				this.$store.commit('setInformation', this.resultData);
				if(this.resultData.infoVideo){
					this.resultData.infoVideo.length > 0 ? this.showVideos = true : this.showVideos = false
				}
				Indicator.close();
			})
			this.$Lazyload.config({ error: '../../../../../../static/picture.png' })
		},
		data() {
			return {
				resultData: [],
				freeScroll: true,
				mouseWheel: true,
				scrollbar: {
					fade: true,
					interactive: false
				},
				showVideos: false,
				fontSize:18,
			}
		},
		created(){
			window.changeFontSize = this.changeFontSize;
		},
		methods: {
			test() {
				var de = this.$refs.videoTag;
				alert(de.msRequestFullscreen)
				// if (de.requestFullscreen) {
				// 	de.requestFullscreen();
				// 	alert(de,'1')
				// } else if (de.mozRequestFullScreen) {
				// 	de.mozRequestFullScreen();
				// 	alert(de,'2')
				// } else if (de.webkitRequestFullScreen) {
				// 	de.webkitRequestFullScreen();
				// 	alert(de,'3')
				// }
			},
			changeFontSize(font){
				this.fontSize = font
			}
		}
	}
</script>