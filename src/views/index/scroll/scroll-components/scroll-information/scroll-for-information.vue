<style scoped lang="less">
	@import './scroll-for-information.less';
</style>
<template>
	<div class="scroll-information-img">
		<img src="../../../../../assets/mine-icon/mine-custom.png" width="40" height="40">
		<span>{{item.staffType}}</span>
		<div class="information-title">{{item.infoTitle}}</div>
		<div class="information-subtitle" v-if="pic.length <= 0">
			{{item.infoSubtitle}}
		</div>
		<div v-if="pic.length > 1" class="three-pic">
			<img  v-for="src in pic" :src="src" :style="{height:viewHeight,width:viewHeight}">
		</div>
		<div v-if="pic.length == 1 && item.typePId != 3">
			<img :src="pic" :style="{height:oneImgviewweight,width:oneImgviewHeight}">
		</div>
		<div style="position:relative;" v-if="pic.length == 1 && item.typePId == 3">
			<img :src="pic" :style="{height:oneImgviewweight,width:oneImgviewHeight}">
			<div style="position:absolute;bottom:10px;right:10px;">
				<img src="../../../../../assets/information-img/playvideo.png" width="40" height="40">
			</div>
		</div>
		<div class="information-comment">
			<span>{{item.praiseCount}}赞</span>
			<span>{{item.commentCount}}评论</span>
			<div class="information-comment-right">
					<span>{{item.typeName}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		computed:{
			viewHeight(){
				return (window.innerWidth / 3) - 15 + 'px'
			},
			oneImgviewHeight(){
				return window.innerWidth - 20 + 'px'
			},
			oneImgviewweight(){
				return (window.innerWidth - 20) / 5 * 3 + 'px'
			}
		},
		props: {
			item: {
				type: Object,
			},
			pic: {
				type: Array,
				default: function () {
					return []
				}
			}
		}
	}
</script>