<style scoped lang="less">
	@import './scroll-information-comment.less';
	/* @import '../../../panoramic/panoramic-components/blessing-detail.less'; */
</style>
<template>
	<div class="blessing-detail-comment">
		<div class="blessing-messages-list">
			<div class="user-info">
				<div class="user-info-left" @click="handlePush('name',item.comId)">
					<img src="../../../../../assets/mine-icon/mine-custom.png" width="25" height="25">
					<span>{{item.staffName}}:
						<span v-if="item.comPcomid" style="color:#3d3d3d;">回应</span>
						<span v-if="item.comPcomid">{{item.staffName1}}</span>
					</span>
				</div>
				<div class="user-info-right">
					<span>{{item.comDate | moment}}</span>
				</div>
			</div>
			<div class="message-detail">
				<span>
					{{item.comContent}}
				</span>
			</div>
			<div class="message-reply">
				<span @click="handlePush('comment',item.comId)">回应</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			item: {
				type: Object,
			},
		},
		methods: {
			handlePush(arg1, arg2) {
				var param = [arg1, arg2]
				this.$emit('pushComment', param)
			},
		}
	}
</script>