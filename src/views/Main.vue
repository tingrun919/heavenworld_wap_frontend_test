<style scoped lang="less">
	@import './main.less';
</style>
<template>
	<div class="main">
		<div class="index-header">
			<header-child-Comp :isDefauleHeader="isDefauleHeader"></header-child-Comp>
		</div>
		<div class="index-tabbar">
			<navbar-Child-Comp @handleNavbar="getNavbar" :currentModel="currentModel" :isDefauleHeader="isDefauleHeader"></navbar-Child-Comp>
		</div>
		<div class="index-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="index-navbar">
			<bottombar-child-Comp @handleBottombar="getChild"></bottombar-child-Comp>
		</div>
	</div>
</template>

<script>
	import headerChildComp from './index/index-components/header/header-comp.vue';
	import bottombarChildComp from './index/index-components/bottombar/bottombar-comp.vue';
	import navbarChildComp from './index/index-components/navbar/navbar.vue'
	export default {
		components: {
			headerChildComp,
			bottombarChildComp,
			navbarChildComp
		},
		data() {
			return {
				isDefauleHeader:true,
				currentModel:'',
			}
		},
		methods: {
			getChild(routerlink) {
				if(routerlink == 'information' || routerlink == 'panoramic'){
					this.isDefauleHeader = true;
					if(routerlink == 'information'){
						this.currentModel = 'information'
					}else{
						this.currentModel = 'panoramic'
					}
				}else{
					this.isDefauleHeader = false;
					if(routerlink == 'find'){
						this.currentModel = 'find'
					}else{
						this.currentModel = 'mine'
					}
				}
				this.$router.push({
					name: routerlink
				});
			},
			getNavbar(routerlink){
			}
		}
	}
</script>