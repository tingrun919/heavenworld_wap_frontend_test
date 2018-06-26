<style scoped lang="less">
	@import './dropup.less';
</style>
<template>
	<div class="popover popper-dropdown" style="position: absolute;  bottom: 57px; right: 2px;">
		<div class="popover-content dropdown-content">
			<ul class="menu-list collapse">
				<li class="" @click="call">
					<span>
						<a href="#/" class="">
								<img src="../../../../assets/panoramic-img/panoramic-phone.png" width="20" height="20"> 电话
							</a>
					</span>
				</li>
				<li class="" @click="call">
					<span>
						<a href="#/" class="">
								<img src="../../../../assets/panoramic-img/panoramic-reserve.png" width="20" height="20"> 预约
							</a>
					</span>
				</li>
				<li class="" @click="map">
					<span>
						<a href="#/" class="">
								<img src="../../../../assets/panoramic-img/panoramic-navigation.png" width="20" height="20"> 导航
							</a>
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
		props:['panoramic'],
		methods: {
			call() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('call', { 'phone': '11111111111' }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.call("11111111111");
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			},
			map() {
				if (this.$store.state.app.currentPageFromIos) {
					this.$bridge.callHandler('navigation', { 'title': this.panoramic.panoAddress, 'longitude': this.panoramic.panoLongitude, 'dimension': this.panoramic.panoDimension }, (data) => { })
				} else if (this.$store.state.app.currentPageFromAndroid) {
					android.navigation(this.panoramic.panoAddress, this.panoramic.panoLongitude, this.panoramic.panoDimension);
				} else {
					Toast('此项功能为客户端专享，赶紧前往下载体验吧~');
				}
			}
		},
	}
</script>