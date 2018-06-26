/*
 * @Author: tarn.tianrun 
 * @Date: 2018-04-04 14:30:43 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-04-13 16:55:28
 */

<style scoped lang="less">
	@import "./other-header.less";
</style>
<style>
	.mintui {
		font-size: 20px;
	}
</style>
<template>
	<div v-if="false">
		<mt-header :title="title + isTitle">
			<mt-button icon="back" slot="left" @click="test2"></mt-button>
			<mt-button icon="more" v-if="isShowRight" slot="right" style="transform: rotate(-90deg);" @click="test"></mt-button>
			<mt-button v-if="isShowRightMore" slot="right" @click="share">分享祈福</mt-button>
			<mt-button v-if="isShowRightDetail" slot="right" @click="toDetail">查看明细</mt-button>
		</mt-header>
		<transition name="fade">
			<drop-Down v-if="show" @handleCancel="test3"></drop-Down>
		</transition>
	</div>
</template>
<script>
	import dropDown from '../header/dropdown.vue';
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				show: false,
			}
		},
		components: {
			dropDown
		},
		props: {
			title: String,
			isblessing: Boolean,
			isShowRight: Boolean,
			isShowRightDetail: Boolean,
			isShowRightMore: Boolean,
		},
		computed:{
			isTitle:function(){
				var arg = '';
				if(this.$route.name == 'blessingdetail'){
					return arg = '的祈福'	
				}else{
					return arg
				}
			}
		},
		methods: {
			test() {
				this.show = !this.show;
			},
			test3(param) {
				this.show = param;
			},
			test2() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('checkUrl', { 'url': `${this.$route.path}` }, (data) => {
						if (data == 1) {
							this.$router.go(-1)
						}
					})
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.callBack();
				} else {
					if (this.$route.name == 'blessingdetail') {
						this.$router.go(-1)
					} else if (this.$route.name == 'panoramicView') {
						this.$router.push({
							name: 'panoramic'
						});
					} else if (this.$route.name == 'information_view') {
						this.$router.go(-1)
					} else if (this.$route.name == 'information_comment') {
						this.$router.go(-1)
					} else if (this.$route.name == 'affiliation_view') {
						this.$router.go(-1)
					}
				}
			},
			toDetail() {
				this.$router.push({
					name: 'detail_view'
				});
			},
			//分享
			share() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('appShare', { 'title': this.$store.state.app.panoramic.panoName, 'description': this.title+"给你分享了一个祈福", 'url': `http://39.107.78.100${this.$route.fullPath}` }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.doShare(this.$store.state.app.panoramic.panoName, this.title+"给你分享了一个祈福", `http://39.107.78.100${this.$route.fullPath}`);
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			},
		}
	}
</script>