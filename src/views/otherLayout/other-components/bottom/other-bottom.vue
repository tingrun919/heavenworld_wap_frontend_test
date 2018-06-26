<style scoped lang="less">
	@import "./other-bottom.less";
</style>
<template>
	<mt-tabbar v-model="selected">
		<mt-tab-item id="panoramic" @click.native="handlePraise">
			<img slot="icon" v-if="!(selected === 'panoramic')" src="../../../../assets/information-img/like.png"> 
			<img slot="icon" v-if="selected === 'panoramic'" src="../../../../assets/information-img/like-in.png">{{praiseCount}}人点赞
		</mt-tab-item>
		<mt-tab-item id="information" @click.native="share">
			<img slot="icon" src="../../../../assets/information-img/share.png"> 分享
		</mt-tab-item>
		<mt-tab-item id="find" @click.native="handleBottombar('find')">
			<img slot="icon" v-if="!(selected === 'find')" src="../../../../assets/information-img/collection.png">
			<img slot="icon" v-if="selected === 'find'" src="../../../../assets/information-img/collection-in.png"> 收藏
		</mt-tab-item>
		<mt-tab-item id="mine" @click.native="handleCommentList">
			<img slot="icon" src="../../../../assets/information-img/comment.png">{{commentCount}}人评论
		</mt-tab-item>
	</mt-tabbar>
</template>
<script>
	import { Toast } from 'mint-ui';
	import otherBottomService from './service/other-bottom-service.js'
	export default {
		mixins: [otherBottomService],
		data() {
			return {
				selected: '',
				resultData: [],
			}
		},
		computed: {
			praiseCount() {
				return this.$store.state.app.information.praiseCount
			},
			commentCount() {
				return this.$store.state.app.information.commentCount
			}
		},
		methods: {
			handleBottombar(bottombar) {
				// this.$emit("handleBottombar",bottombar)
			},
			//跳转到评论列表
			handleCommentList() {
				let argu = { id: this.$route.params.id };
				this.$router.push({
					name: 'information_comment',
					params: argu
				})
			},
			share() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('appShare', { 'title': this.$store.state.app.information.infoTitle, 'description': this.$store.state.app.information.infoSubtitle, 'url': `http://39.107.78.100${this.$route.path}` }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.doShare(this.$store.state.app.information.infoTitle, this.$store.state.app.information.infoSubtitle, `http://39.107.78.100${this.$route.path}`);
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			},
			handlePraise() {
				// this.resultData = this.$store.state.app.information
				// if (this.resultData.praiseState == 0) {
				// 	if (this.$store.state.app.userToken && this.$store.state.app.userId) {
				// 		this.handlePraiseNetWork(this.$store.state.app.userToken, this.resultData.infoId, this.$store.state.app.userId)
				// 	} else {
				// 		Toast('请先登录！');
				// 	}
				// } else {
				// 	Toast('您已经点过赞啦～');
				// }
			}
		}
	}
</script>