<style scoped lang="less">
	@import './recharge.less';
</style>
<template>
	<div class="recharge-main">
		<div class="recharge-title">
			<span>请选择充值的金额</span>
		</div>
		<div class="recharge-amount">
			<div class="recharge-amount-row">
				<span @click="isChoise = '10'" v-bind:class="{ rechargechoise : isChoise === '10' }">¥10</span>
				<span @click="isChoise = '20'" v-bind:class="{ rechargechoise : isChoise === '20' }">¥20</span>
				<span @click="isChoise = '50'" v-bind:class="{ rechargechoise : isChoise === '50' }">¥50</span>
			</div>
			<div class="recharge-amount-row">
				<span @click="isChoise = '100'" v-bind:class="{ rechargechoise : isChoise === '100' }">¥100</span>
				<span @click="isChoise = '200'" v-bind:class="{ rechargechoise : isChoise === '200' }">¥200</span>
				<span @click="isChoise = '500'" v-bind:class="{ rechargechoise : isChoise === '500' }">¥500</span>
			</div>
		</div>
		<div class="recharge-enter">
			<mt-field style="font-size:13px;" label="其他:" placeholder="请输入" type="number"></mt-field>
		</div>
		<div class="recharge-subtitle">
			<span>请选择充值方式</span>
		</div>
		<div class="recharge-way">
			<div class="recharge-way-wechart" @click="handleWay" v-bind:class="{ rechargechoisewechart : isPay === 'wechart' }">
				<img :src="imgPathWechart" width="25" height="25">
				<p>微信支付</p>
			</div>
			<div class="recharge-way-alipay" @click="handleWay" v-bind:class="{ rechargechoisealipay : isPay === 'alipay' }">
				<img :src="imgPathAlipay" width="25" height="25">
				<p>支付宝</p>
			</div>
		</div>
		<div class="recharge-btn">
			<mt-button type="danger">确认充值</mt-button>
		</div>
	</div>
</template>
<script>
	import wechart from '../../../assets/mine-icon/mine-wechart.png'
	import wechartIn from '../../../assets/mine-icon/mine-wechart-in.png'
	import alipay from '../../../assets/mine-icon/mine-alipay.png'
	import alipayIn from '../../../assets/mine-icon/mine-alipay-in.png'

	export default {
		data() {
			return {
				isChoise: '10',
				isPay: 'wechart',
				imgPathWechart: wechartIn,
				imgPathAlipay: alipay,
			}
		},
		// watch: {
		// 	wechartImg: function () {
		// 		if(this.isPay == 'wechart'){
		// 			this.imgPathWechart = wechartIn
		// 		}
		// 		return this.imgPathWechart
		// 	}
		// },
		methods: {
			handleWay() {
				if (this.isPay == 'wechart') {
					this.isPay = 'alipay'
					this.imgPathWechart = wechart
					this.imgPathAlipay = alipayIn
				} else {
					this.isPay = 'wechart'
					this.imgPathWechart = wechartIn
					this.imgPathAlipay = alipay
				}
			},
		}
	}
</script>