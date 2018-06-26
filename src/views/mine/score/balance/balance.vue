<style scoped lang="less">
	@import './balance.less';
</style>
<!-- <style>
	.mint-field-core {
		font-size: 13px !important;
		text-align: center;
	}
</style> -->
<template>
	<div class="balance-main">
		<div class="balance-title">
			<span>可转的福报分</span>
		</div>
		<div class="balance-b">
			<p>8765</p>
		</div>
		<div class="balance-info">
			<span>提醒：转换的余额将兑换到钱包余额中，当前转换比例为:100:¥1</span>
		</div>
		<div class="balance-enter">
			<mt-field style="min-height:35px;" type="number"></mt-field>
		</div>
		<div class="balance-btn">
			<mt-button type="danger" size="small">确认转换</mt-button>
		</div>
	</div>
</template>