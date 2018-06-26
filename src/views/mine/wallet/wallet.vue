<style scoped lang="less">
	@import './wallet.less';
</style>
<!-- <style>
	.mint-field-core {
		font-size: 13px !important;
		text-align: center;
	}
</style> -->
<template>
	<div class="wallet-main">
		<div class="wallet-title">
			<span>当前福点</span>
		</div>
		<div class="wallet-b">
			<p>875</p>
		</div>
		<div class="wallet-info">
			<span @click="toDetail">查看收支明细</span>
		</div>
		<div class="wallet-enter">
			<mt-button type="default" size="small" @click.native="toWithdraw">提取现金</mt-button>
		</div>
		<div class="wallet-btn">
			<mt-button type="default" size="small" @click.native="toRecharge">充值</mt-button>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toDetail() {
				this.$router.push({
					name: 'detail_view'
				});
			},
			toWithdraw(){
				this.$router.push({
					name: 'withdraw_view'
				});
			},
			toRecharge(){
				this.$router.push({
					name: 'recharge_view'
				});
			}
		}
	}
</script>