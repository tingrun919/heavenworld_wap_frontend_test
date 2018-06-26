import API from '../../../../../api/API'
const api = new API()

export default {
	methods: {
		getBlessingOne(prayid) {
			return api.get(`banaworld_show/nopano/selOnePray?prayid=${prayid}`)
				.then(res => {
					this.resultData = res.data.data[0]
					this.showOtherRed = res.data.data[0].prayIfmoney == 1 ? true : false
					this.showOtherVideo = res.data.data[0].prayVideo ? true : false
					this.showOtherAudio = res.data.data[0].prayVoice ? true : false
					this.scnenname = res.data.data[0].prayScnenname
					this.src = res.data.data[0].prayMainpic
				})
				.catch(err => {
				});
		},
		getCommentList(prayid, pagesize) {
			return api.get(`banaworld_show/nopano/selPrayComment?prayid=${prayid}&pagesize=${pagesize}`)
				.then(res => {
					this.commentList = res.data.data
				})
				.catch(err => {
				});
		},
		//添加评论，回复评论
		addComment(token, panoid, commentid, content, type, prayid) {
			return api.get(`banaworld_show/pano/addPrayComment?token=${token}&panoid=${panoid}&commentid=${commentid}&content=${content}&type=${type}&prayid=${prayid}`)
				.then(res => {
					return res
				})
				.catch(err => {
				});
		},
		//获取更多评论
		getMoreComment(prayid, commentid, pagesize) {
			return api.get(`banaworld_show/nopano/selPrayComment?prayid=${prayid}&cid=${commentid}&pagesize=${pagesize}`)
				.then(res => {
					return res
				})
				.catch(err => {
				});
		},
		//查询单个全景信息
		getSinglePanoramic(panoid) {
			return api.get(`banaworld_show/nopano/selOnePano?panoid=${panoid}`)
				.then(res => {
					this.resultData = res.data.data[0]
					this.panoPicture = this.resultData.panoPicture.split(",")
				})
				.catch(err => {
				});
		},
		//抢红包
		handleRedPackets(token, prayid, check) {
			return api.get(`banaworld_show/pano/grabPrayMoney?token=${token}&prayid=${prayid}&check=${check}`)
				.then(res => {
					return res
				})
				.catch(err => {
				});
		},
		//红包详情
		handleRedPacketsDetail(token, prayid) {
			return api.get(`banaworld_show/nopano/selMoney?token=${token}&prayid=${prayid}`)
				.then(res => {
					this.showRed = true
					this.redDetailGrab = res.data.data
				})
				.catch(err => {
				});
		}
	}
}
