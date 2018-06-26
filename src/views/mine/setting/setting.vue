<style lang="less">
	@import './setting.less';
</style>
<template>
	<div class="setting-list-main">
		<mt-cell title="密码设置" is-link style="margin-top: 10px;">
			<img slot="icon" src="../../../assets/mine-icon/mine-password.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="绑定账号" is-link>
			<img slot="icon" src="../../../assets/mine-icon/mine-account.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="收获地址" is-link style="margin-top: 10px;">
			<img slot="icon" src="../../../assets/mine-icon/mine-address.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="关于天堂世界" is-link style="margin-top: 10px;">
			<img slot="icon" src="../../../assets/mine-icon/mine-about.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="联系客服" is-link value="40029202911">
			<img slot="icon" src="../../../assets/mine-icon/mine-server.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="意见反馈" is-link>
			<img slot="icon" src="../../../assets/mine-icon/mine-opinion.png" width="24" height="24">
		</mt-cell>
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

			}
		},
		methods: {

		}
	}
</script>