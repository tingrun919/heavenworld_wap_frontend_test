/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-07 16:26:58 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-03-20 21:58:24
 */

<style scoped lang="less">
	@import './navbar.less';
</style>
<template>
	<swiper :options="swiperOption" v-if="isDefauleHeader">
		<swiper-slide v-for="(item,index) in currentModel == 'information' ? dataSwipe2 : dataSwipe" :key="item.id" @click.native="test(index,item.name)">
			<span v-bind:class="{ navActive: index == currentClick }">{{item.name}}</span>
		</swiper-slide>
	</swiper>
</template>
<script>
	export default {
		props:{
			currentModel:String,
			isDefauleHeader:Boolean,
		},
		computed: {

		},
		data() {
			return {
				currentClick:0,
				swiperOption: {
					initialSlide: 0,
					slidesPerView: 4.5,
					spaceBetween: 5,
					freeMode: true,
				},
				dataSwipe: [
					{
						id: 1, name: '推荐'
					}, {
						id: 2, name: '济南市'
					}, {
						id: 3, name: '寺庙'
					}, {
						id: 4, name: '景区'
					}, {
						id: 5, name: '家乡'
					}, {
						id: 6, name: '企业'
					}, {
						id: 7, name: '名胜寺庙'
					}, {
						id: 8, name: '风景山水'
					}, {
						id: 9, name: '美食餐厅'
					}, {
						id: 10, name: '特色酒店'
					}
				],
				dataSwipe2: [
					{
						id: 1, name: '推荐'
					}, {
						id: 2, name: '济南市'
					}, {
						id: 3, name: '视频'
					}, {
						id: 4, name: '话题'
					}, {
						id: 5, name: '音乐'
					}, {
						id: 6, name: '企业'
					}, {
						id: 7, name: '名胜寺庙'
					}, {
						id: 8, name: '风景山水'
					}, {
						id: 9, name: '美食餐厅'
					}, {
						id: 10, name: '特色酒店'
					}
				]
			}
		},
		methods: {
			test(index,name){
				this.currentClick = index;
				this.$emit("handleNavbar",name)
				this.$store.commit('setCurrentPageName', name);
			}
		}
	}
</script>