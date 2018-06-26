<style scoped lang="less">
	@import './dropdown.less';
</style>
<template>
	<div class="popover popper-dropdown" style="position: absolute;  top: 42px; right: 2px;">
		<div class="popover-content dropdown-content">
			<ul class="menu-list collapse">
				<li class="" @click="share">
					<span>
						<img src="../../../../assets/panoramic-img/panoramic-share.png" width="20" height="20"> 分享
					</span>
				</li>
				<li class="" @click="reload">
					<span>
						<img src="../../../../assets/panoramic-img/panoramic-refresh.png" width="20" height="20"> 刷新
					</span>
				</li>
				<li class="">
					<span>
						<img src="../../../../assets/panoramic-img/panoramic-collection.png" width="20" height="20"> 收藏
					</span>
				</li>
				<li class="">
					<span>
						<img src="../../../../assets/panoramic-img/panoramic-music.png" width="20" height="20"> 音乐列表
					</span>
				</li>
				<li class="" @click="toAffiliation">
					<span>
						<img src="../../../../assets/panoramic-img/panoramic-fate.png" width="20" height="20">结缘榜
					</span>
				</li>
				<li class="" @click="cancel">
					<span>
						<img src="../../../../assets/panoramic-img/panoramic-cancel.png" width="20" height="20">取消
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {

			}
		},
		methods: {
			share() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('appShare', { 'title': this.$store.state.app.panoramic.panoName, 'description': this.$store.state.app.panoramic.panoSubtitle, 'url': `http://39.107.78.100${this.$route.fullPath}` }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.doShare(this.$store.state.app.panoramic.panoName, this.$store.state.app.panoramic.panoSubtitle, `http://39.107.78.100${this.$route.fullPath}`);
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			},
			reload() {
				location.reload();
			},
			cancel(){
				this.$emit("handleCancel",false)
			},
			toAffiliation(){
					this.$router.push({
						name: 'affiliation_view'
					});
				}
		},


	}
</script>