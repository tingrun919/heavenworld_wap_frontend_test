/*
 * @Author: tarn.tianrun 
 * @Date: 2018-03-20 18:21:49 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-03-20 22:06:24
 */

<style scoped lang="less">
	@import "./other-panoramic.less";
</style>
<template>
	<div>
		<mt-tabbar v-model="selected">
			<mt-tab-item id="blessing" @click.native="handleBlessingBottom('blessing')">
				<img slot="icon" src="../../../../assets/panoramic-img/panoramic-blessing-no.png"> 祈福
			</mt-tab-item>
			<mt-tab-item id="index" @click.native="toIndex">
				<img slot="icon" src="../../../../assets/panoramic-img/panoramic-home-no.png"> 主页
			</mt-tab-item>
			<mt-tab-item id="scenes" @click.native="testaaa">
				<img slot="icon" src="../../../../assets/panoramic-img/panoramic-scenes-no.png" v-bind:class="{ isscenes : showScenes }">场景
			</mt-tab-item>
			<mt-tab-item id="more" @click.native="showMore">
				<img slot="icon" src="../../../../assets/panoramic-img/panoramic-more-no.png"> 更多
			</mt-tab-item>
		</mt-tabbar>
		<transition name="fade">
			<drop-Up v-if="show" :panoramic="panoramicinfo"></drop-Up>
		</transition>
	</div>
</template>
<script>
	import dropUp from '../bottom/dropup.vue';
	export default {
		components: {
			dropUp
		},
		data() {
			return {
				selected: 'blessing',
				show: false,
				showScenes: false,
			}
		},
		props: [
			'panoramicinfo'
		],
		methods: {
			handleBlessingBottom(bottombar) {
				this.$emit("handleBlessing", bottombar)
			},
			showMore() {
				this.show = !this.show
			},
			toIndex() {
				let argu = { id: this.$route.params.id };
				if (this.$store.state.app.currentPageFromAndroid) {
					let args = { from: 'android' }
					this.$router.push({
						name: 'blessing_view',
						params: argu,
						query: args,
					});
				} else if (this.$store.state.app.currentPageFromIos) {
					let args = { from: 'ios' }
					this.$router.push({
						name: 'blessing_view',
						params: argu,
						query: args,
					});
				} else {
					this.$router.push({
						name: 'blessing_view',
						params: argu,
					});
				}

			},
			testaaa() {
				this.showScenes = !this.showScenes
				var krpano = document.getElementById('krpanoSWFObject');
				krpano.call("if(layer[sltbg].y == 80, tween(layer[sltbg].y, -170); , tween(layer[sltbg].y, 80); ); ");
			}
		}
	}
</script>