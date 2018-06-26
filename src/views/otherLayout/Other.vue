/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-26 15:06:41 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-04-13 17:28:22
 */
<style scoped lang="less">
	@import './other.less';
</style>
<template>
	<div class="other-main">
		<!-- <div class="other-header">
			<header-child-Comp :title="title" :isblessing="isBlessing" :isShowRight="isShowRightTag" :isShowRightDetail="isShowRightDetails"></header-child-Comp>
		</div> -->
		<div class="other-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="other-navbar">
			<other-Bottom v-if="currentRouteName == 'information_view'"></other-Bottom>
			<other-Panoramic v-if="currentRouteName == 'panoramic_view'"></other-Panoramic>
			<other-Blessing v-if="currentRouteName == 'blessing_view'"></other-Blessing>
		</div>
	</div>
</template>
<script>
	import otherBottom from './other-components/bottom/other-bottom.vue';
	import otherPanoramic from './other-components/bottom/other-panoramic.vue';
	import otherBlessing from './other-components/bottom/other-blessing.vue';
	import headerChildComp from './other-components/header/other-header.vue';
	export default {
		components: {
			headerChildComp,
			otherBottom,
			otherPanoramic,
			otherBlessing,
		},
		computed: {
			title() {
				var title = '';
				switch (this.$route.name) {
					case 'information_view':
						title = this.$store.state.app.information.infoTitle
						break;
					case 'panoramic_view':
						title = '全景'
						break;
					case 'blessing_view':
						title = '';
						break;
					case 'find_dynamic':
						title = '动态';
						break;
					case 'follow_view':
						title = '关注';
						break;
					case 'topic_view':
						title = '我的话题';
						break;
					case 'collection_view':
						title = '收藏';
						break;
					case 'score_view':
						title = '福报分';
						break;
					case 'scoreBalance_view':
						title = '福报分转余额';
						break;
					case 'detail_view':
						title = '明细';
						break;
					case 'wallet_view':
						title = '钱包';
						break;
					case 'withdraw_view':
						title = '提现';
						break;
					case 'recharge_view':
						title = '充值';
						break;
					case 'setting_view':
						title = '设置';
						break;
					case 'information_comment':
						title = '评论列表'
						break
				}
				return title;
			},
			currentRouteName() {
				var title = '';
				switch (this.$route.name) {
					case 'information_view':
						title = 'information_view';
						break;
					case 'panoramic_view':
						title = 'panoramic_view';
						break;
					case 'blessing_view':
						title = 'blessing_view';
						break;
				}
				return title;
			},
			isBlessing() {
				if (this.$route.name == 'blessing_view') {
					this.isblessing = false
				}
				if (this.$route.name == 'follow_view') {
					this.isblessing = true
				}
				return this.isblessing
			},
			isShowRightTag() {

				return this.isshowright
			},
			isShowRightDetails() {
				if(this.$route.name == 'score_view'){
					this.isshowrightdetail = true
				}else{
					this.isshowrightdetail = false
				}
				return this.isshowrightdetail
			}
		},
		data() {
			return {
				show: true,
				isblessing: true,
				isshowright: false,
				isshowrightdetail: false,
			}
		},
		methods: {

		},
	}
</script>