<style scoped lang="less">
		@import './withdraw.less';
</style>
	<!-- <style>
		.mint-field-core {
			font-size: 13px !important;
			text-align: center;
		}
	</style> -->
	<template>
		<div class="withdraw-main">
			<div class="withdraw-title">
				<span>可提现金额</span>
			</div>
			<div class="withdraw-b">
				<p>¥9854</p>
			</div>
			<div class="withdraw-info">
				<span @click="toDetail">提醒：提现金额将转入您绑定的微信账户</span>
			</div>
			<div class="withdraw-enter">
					<mt-field style="min-height:35px;" placeholder="请输入提现金额" type="number"></mt-field>
			</div>
			<div class="withdraw-btn">
				<mt-button type="danger" size="small">确认提取现金</mt-button>
			</div>
			<div class="withdraw-wechart">
				<img src="../../../assets/mine-icon/mine-wechart.png" width="25" height="25">
				<p>绑定的微信账号昵称：测试用户</p>
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
				}
			}
		}
	</script>