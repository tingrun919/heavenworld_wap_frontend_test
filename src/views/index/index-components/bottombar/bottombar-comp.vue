<style scoped lang="less">
	@import "./bottombar-comp.less";
</style>
<template>
	<mt-tabbar v-model="selected">
		<mt-tab-item id="panoramic" @click.native="handleBottombar('panoramic')">
			<img slot="icon" v-if="!(selected === 'panoramic')" src="../../../../assets/bottom-bar-icon/panoramic-no.png">
			<img slot="icon" v-if="selected === 'panoramic'" src="../../../../assets/bottom-bar-icon/panoramic-in.png"> 全景
		</mt-tab-item>
		<mt-tab-item id="information" @click.native="handleBottombar('information')">
			<img slot="icon" v-if="!(selected === 'information')" src="../../../../assets/bottom-bar-icon/information-no.png">
			<img slot="icon" v-if="selected === 'information'" src="../../../../assets/bottom-bar-icon/information-in.png"> 资讯
		</mt-tab-item>
		<mt-tab-item id="find" @click.native="handleBottombar('find')">
			<img slot="icon" v-if="!(selected === 'find')" src="../../../../assets/bottom-bar-icon/find-no.png">
			<img slot="icon" v-if="selected === 'find'" src="../../../../assets/bottom-bar-icon/find-in.png"> 发现
		</mt-tab-item>
		<mt-tab-item id="mine" @click.native="handleBottombar('mine')">
			<img slot="icon" v-if="!(selected === 'mine')" src="../../../../assets/bottom-bar-icon/mine-no.png">
			<img slot="icon" v-if="selected === 'mine'" src="../../../../assets/bottom-bar-icon/mine-in.png"> 我的
		</mt-tab-item>
	</mt-tabbar>
</template>
<script>
	export default {
		data() {
			return {
				selected: this.$route.name,
			}
		},
		watch: {
			'$route'(to, from) {
				this.selected = to.name
			}
		},
		methods: {
			handleBottombar(bottombar) {
				this.$emit("handleBottombar", bottombar)
			}
		}
	}
</script>