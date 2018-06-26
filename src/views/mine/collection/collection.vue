/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-26 10:38:56 
 * @Last Modified by:   tarn.tianrun 
 * @Last Modified time: 2018-02-26 10:38:56 
 */

<style scoped lang="less">
	@import './collection.less';
	@import '../../index/scroll/scroll-components/scroll-information/scroll-for-information.less';
</style>
<template>
	<div class="collection-list-main" :style="{height:viewHeight}">
		<div class="nav">
			<span @click="active = 'tab-container1'" v-bind:class="{select : active === 'tab-container1'}">全部</span>
			<span @click="active = 'tab-container2'" v-bind:class="{select : active === 'tab-container2'}">全景</span>
			<span @click="active = 'tab-container3'" v-bind:class="{select : active === 'tab-container3'}">资讯</span>
			<span @click="active = 'tab-container4'" v-bind:class="{select : active === 'tab-container4'}">商品</span>
		</div>
		<scroll ref="scroll" :scrollY="freeScroll" :scrollbar="scrollbar" :mouseWheel="mouseWheel">
			<mt-tab-container v-model="active" swipeable>
				<mt-tab-container-item id="tab-container1">
					<div class="collection-panoramic-info" v-for="n in 3" :key="n">
						<div class="collection-panoramic-left">
							<img src="../../../../static/vtour/panos/hongkong.tiles/thumb.jpg" width="120" height="120">
						</div>
						<div class="collection-panoramic-center">
							<div class="cpc-title">
								<p>宝相寺</p>
								<span>山东省·济宁市</span>
							</div>
							<span>783人祈福</span>
						</div>
						<div class="collection-panoramic-right">
							<span>全景</span>
						</div>
					</div>
					<div class="scroll-information-img" v-for="items in items">
						<img src="../../../assets/mine-icon/mine-custom.png" width="40" height="40">
						<span>测试用户{{items.bavbar}}</span>
						<div class="information-title">标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行</div>
						<div class="information-subtitle" v-if="items.isPic == 1">副标题限制两行副标题限制两行副标题限制两行副标题限制两行副标题限制两行副 标题限制两行副标题限制两行副标题限制两行副标题限制两行
						</div>
						<div v-if="items.isPic == 2">
							<img src="../../../assets/test-img/fo1.jpg" :style="{height:threeImgviewHeight,width:threeImgviewHeight}">
							<img src="../../../assets/test-img/fo2.jpg" :style="{height:threeImgviewHeight,width:threeImgviewHeight}">
							<img src="../../../assets/test-img/fo3.jpg" :style="{height:threeImgviewHeight,width:threeImgviewHeight}">
						</div>
						<div v-if="items.isPic == 3">
							<img src="../../../assets/test-img/allfo.jpg" :style="{height:oneImgviewHeight,width:oneImgviewHeight}">
						</div>
						<div class="information-comment">
							<span>123赞</span>
							<span>123评论</span>
							<div class="information-comment-right">
								<span>板块名</span>
							</div>
						</div>
					</div>
					<div class="collection-video-info">
						<div class="collection-video-top">
							<img src="../../../assets/mine-icon/mine-custom.png" width="40" height="40">
							<span>一心向佛（合作机构）发布了视频</span>
						</div>
						<div class="collection-video-main">
							<video playsinline webkit-playsinline ref="videoTag" controls="controls" :poster="icon" muted :width="viewWidthVideo">
								<source :src="path" type="video/mp4" />
							</video>
						</div>
						<div class="collection-video-bottom">
							<p>浙江普陀山，是全国最著名的观音道场，佛教胜地，万人敬仰的去处！</p>
							<div class="information-comment">
								<span>123赞</span>
								<span>123评论</span>
								<div class="information-comment-right">
									<span>板块名</span>
								</div>
							</div>
						</div>
					</div>
					<div class="collection-product-info" v-for="n in 3" :key="n">
						<img src="../../../assets/picture.png" width="80" height="80">
						<div class="collection-product-main">
							<div class="collection-product-title">
								<p>观音家具摆件</p>
								<span>副标题</span>
							</div>
							<div class="collection-product-subtitle">
								<p>$40.00/规格</p>
								<span>店铺：家具摆件专营店</span>
							</div>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container2">
					<div class="collection-panoramic-info" v-for="n in 15" :key="n">
						<div class="collection-panoramic-left">
							<img src="../../../../static/vtour/panos/hongkong.tiles/thumb.jpg" width="120" height="120">
						</div>
						<div class="collection-panoramic-center">
							<div class="cpc-title">
								<p>宝相寺</p>
								<span>山东省·济宁市</span>
							</div>
							<span>783人祈福</span>
						</div>
						<div class="collection-panoramic-right">
							<span>全景</span>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container3">
					<div class="scroll-information-img" v-for="items in items">
						<img src="../../../assets/mine-icon/mine-custom.png" width="40" height="40">
						<span>测试用户{{items.bavbar}}</span>
						<div class="information-title">标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行标题限制一行</div>
						<div class="information-subtitle" v-if="items.isPic == 1">副标题限制两行副标题限制两行副标题限制两行副标题限制两行副标题限制两行副 标题限制两行副标题限制两行副标题限制两行副标题限制两行
						</div>
						<div v-if="items.isPic == 2">
							<img src="../../../assets/test-img/fo1.jpg" :style="{height:threeImgviewHeight,width:threeImgviewHeight}">
							<img src="../../../assets/test-img/fo2.jpg" :style="{height:threeImgviewHeight,width:threeImgviewHeight}">
							<img src="../../../assets/test-img/fo3.jpg" :style="{height:threeImgviewHeight,width:threeImgviewHeight}">
						</div>
						<div v-if="items.isPic == 3">
							<img src="../../../assets/test-img/allfo.jpg" :style="{height:oneImgviewHeight,width:oneImgviewHeight}">
						</div>
						<div class="information-comment">
							<span>123赞</span>
							<span>123评论</span>
							<div class="information-comment-right">
								<span>板块名</span>
							</div>
						</div>
					</div>
					<div class="collection-video-info">
						<div class="collection-video-top">
							<img src="../../../assets/mine-icon/mine-custom.png" width="40" height="40">
							<span>一心向佛（合作机构）发布了视频</span>
						</div>
						<div class="collection-video-main">
							<video playsinline webkit-playsinline ref="videoTag" controls="controls" :poster="icon" muted :width="viewWidthVideo">
								<source :src="path" type="video/mp4" />
							</video>
						</div>
						<div class="collection-video-bottom">
							<p>浙江普陀山，是全国最著名的观音道场，佛教胜地，万人敬仰的去处！</p>
							<div class="information-comment">
								<span>123赞</span>
								<span>123评论</span>
								<div class="information-comment-right">
									<span>板块名</span>
								</div>
							</div>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container4">
					<div class="collection-product-info" v-for="n in 10" :key="n">
						<img src="../../../assets/picture.png" width="80" height="80">
						<div class="collection-product-main">
							<div class="collection-product-title">
								<p>观音家具摆件</p>
								<span>副标题</span>
							</div>
							<div class="collection-product-subtitle">
								<p>$40.00/规格</p>
								<span>店铺：家具摆件专营店</span>
							</div>
						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</scroll>
	</div>
</template>
<script>
	import Scroll from '../../index/scroll/scroll.vue'
	import scrollForInformation from '../../index/scroll/scroll-components/scroll-information/scroll-for-information.vue'
	export default {
		components: {
			Scroll,
			scrollForInformation
		},
		computed: {
			oneImgviewHeight() {
				return window.innerWidth - 20 + 'px'
			},
			threeImgviewHeight() {
				return (window.innerWidth / 3) - 15 + 'px'
			},
			viewHeight: function () {
				return (window.innerHeight - 78) + 'px'
			},
			viewWidthVideo: function () {
				return (window.innerWidth) + 'px'
			},
			currentRoute() {
				return this.$route.name
			},
			tabType: function () {
				var resultList = []
				for (var i = 1; i < 4; i++) {
					var item = {
						isPic: i,
						bavbar: this.$store.state.app.currentPageName,
					}
					resultList.push(item);
				}
				return resultList;
			}
		},
		watch: {
			tabType() {
				this.items = this.tabType
			},
		},
		created() {
			this.items = this.tabType
		},
		data() {
			return {
				active: 'tab-container1',
				freeScroll: true,
				mouseWheel: true,
				scrollbar: {
					fade: true,
					interactive: false
				},
				items: [],
				path: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
				icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519465868841&di=3fa6cd5f7cdcecd9c3354abbb045da58&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F3bf33a87e950352acab459955943fbf2b3118b51.jpg'
			}
		}
	}
</script>