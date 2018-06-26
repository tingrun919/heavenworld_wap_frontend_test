<style lang="less">
	@import './mine.less';
</style>
			<!-- "set(hotspot[spot1].atv,get(view.vlookat));" + -->

<template>
	<div class="mine-content">
		<div class="mine-custom-info">
			<div class="left">
				<img src="../../assets/mine-icon/mine-custom.png" width="50" height="50">
				<div class="info">
					<p>测试用户</p>
					<div class="info-q">
						<span>15055555555</span>
					</div>
				</div>
			</div>
			<div class="right">
				<img src="../../assets/mine-icon/mine-custom.png" width="50" height="50">
			</div>
		</div>
		<mt-cell title="关注" is-link style="margin-top: 10px;" to="/follow/index">
			<img slot="icon" src="../../assets/mine-icon/mine-follow.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="我的话题" is-link style="margin-top: 10px;" to="/topic/index">
			<img slot="icon" src="../../assets/mine-icon/mine-topic.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="收藏" is-link to="/collection/index">
			<img slot="icon" src="../../assets/mine-icon/mine-collection.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="福报分" is-link to="/score/index">
			<img slot="icon" src="../../assets/mine-icon/mine-score.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="钱包" is-link to="/wallet/index">
			<img slot="icon" src="../../assets/mine-icon/mine-price.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="我的祈福" is-link>
			<img slot="icon" src="../../assets/mine-icon/mine-blessing.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="上传全景教程" is-link>
			<img slot="icon" src="../../assets/mine-icon/mine-panoramic.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="设置" is-link style="margin-top: 10px;" to="/setting/index">
			<img slot="icon" src="../../assets/mine-icon/mine-setting.png" width="24" height="24">
		</mt-cell>
	</div>
</template>